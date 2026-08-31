#!/usr/bin/env python

import os
import sys
from datetime import datetime

import yaml
from scholarly import scholarly


def load_scholar_user_id() -> str:
    """Load the Google Scholar user ID from the social data file."""
    config_file = "_data/socials.yml"
    if not os.path.exists(config_file):
        print(f"Configuration file {config_file} not found.")
        sys.exit(1)

    try:
        with open(config_file, "r", encoding="utf-8") as file:
            config = yaml.safe_load(file) or {}
    except yaml.YAMLError as error:
        print(f"Error parsing YAML file {config_file}: {error}")
        sys.exit(1)

    scholar_user_id = config.get("scholar_userid")
    if not scholar_user_id:
        print("No 'scholar_userid' found in _data/socials.yml.")
        sys.exit(1)
    return scholar_user_id


SCHOLAR_USER_ID: str = load_scholar_user_id()
OUTPUT_FILE: str = "_data/citations.yml"


def get_scholar_citations() -> None:
    """Fetch and update Google Scholar citation data."""
    print(f"Fetching citations for Google Scholar ID: {SCHOLAR_USER_ID}")
    today = datetime.now().strftime("%Y-%m-%d")
    existing_data = None

    if os.path.exists(OUTPUT_FILE):
        try:
            with open(OUTPUT_FILE, "r", encoding="utf-8") as file:
                existing_data = yaml.safe_load(file)
            if (
                existing_data
                and "metadata" in existing_data
                and "last_updated" in existing_data["metadata"]
            ):
                print(f"Last updated on: {existing_data['metadata']['last_updated']}")
                if existing_data["metadata"]["last_updated"] == today:
                    print("Citations data is already up-to-date. Skipping fetch.")
                    return
        except Exception as error:
            print(f"Warning: Could not read {OUTPUT_FILE}: {error}")

    citation_data = {"metadata": {"last_updated": today}, "papers": {}}

    scholarly.set_timeout(15)
    scholarly.set_retries(3)
    try:
        author = scholarly.search_author_id(SCHOLAR_USER_ID)
        author_data = scholarly.fill(author)
    except Exception as error:
        print(f"Error fetching Google Scholar author '{SCHOLAR_USER_ID}': {error}")
        sys.exit(1)

    if not author_data:
        print(f"Could not fetch author data for '{SCHOLAR_USER_ID}'.")
        sys.exit(1)
    if "publications" not in author_data:
        print(f"No publications found for '{SCHOLAR_USER_ID}'.")
        sys.exit(1)

    for publication in author_data["publications"]:
        try:
            publication_id = publication.get("pub_id") or publication.get("author_pub_id")
            if not publication_id:
                title = publication.get("bib", {}).get("title", "Unknown")
                print(f"Warning: No ID found for publication: {title}")
                continue

            title = publication.get("bib", {}).get("title", "Unknown Title")
            year = publication.get("bib", {}).get("pub_year", "Unknown Year")
            citations = publication.get("num_citations", 0)
            print(f"Found: {title} ({year}) - Citations: {citations}")
            citation_data["papers"][publication_id] = {
                "title": title,
                "year": year,
                "citations": citations,
            }
        except Exception as error:
            title = publication.get("bib", {}).get("title", "Unknown")
            print(f"Error processing publication '{title}': {error}")

    if existing_data and existing_data.get("papers") == citation_data["papers"]:
        print("No changes in citation data. Skipping file update.")
        return

    try:
        with open(OUTPUT_FILE, "w", encoding="utf-8") as file:
            yaml.dump(citation_data, file, width=1000, sort_keys=True)
        print(f"Citation data saved to {OUTPUT_FILE}")
    except Exception as error:
        print(f"Error writing citation data to {OUTPUT_FILE}: {error}")
        sys.exit(1)


if __name__ == "__main__":
    try:
        get_scholar_citations()
    except Exception as error:
        print(f"Unexpected error: {error}")
        sys.exit(1)
