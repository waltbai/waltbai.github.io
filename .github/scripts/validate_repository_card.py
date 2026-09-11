"""Validate official pin-card output before uploading or committing it."""

import json
import os
from pathlib import Path
import xml.etree.ElementTree as ET


def validate_card(path: Path, expected_width: int) -> None:
    root = ET.parse(path).getroot()
    if root.tag != "{http://www.w3.org/2000/svg}svg":
        raise ValueError("Output is not an SVG document")
    if float(root.attrib["width"]) != expected_width:
        raise ValueError("Requested card width was not applied")
    if float(root.attrib["height"]) <= 0:
        raise ValueError("Card height must be positive")
    if "Something went wrong" in " ".join(root.itertext()):
        raise ValueError("Renderer returned an error card")
    if not any("description" in node.get("class", "").split() for node in root.iter()):
        raise ValueError("Missing repository description element")


if __name__ == "__main__":
    options = json.loads(os.environ["CARD_OPTIONS"])
    card_path = Path(os.environ["CARD_PATH"])
    validate_card(card_path, options["card_width"])
    print(f"Validated {card_path}")
