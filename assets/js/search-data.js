
const currentUrl = window.location.href;
const siteUrl = "https://waltbai.github.io"; 
let updatedUrl = currentUrl.replace("https://waltbai.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("".length > 0) {
  updatedUrl = updatedUrl.replace("/", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation menu",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Please see my google scholar for full paper list.",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-fundings",
          title: "Fundings",
          description: "",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/fundings/";
          },
        },{id: "nav-software",
          title: "Software",
          description: "",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/software/";
          },
        },{id: "nav-service",
          title: "Service",
          description: "",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/service/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-contact",
          title: "Contact",
          description: "",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "projects-openspg-semantic-enhanced-programmable-graph",
          title: 'OpenSPG·Semantic-Enhanced Programmable Graph',
          description: "OpenSPG is an open engine for knowledge graph designed and implemented on the basis of SPG framework, which provides explicit semantic representations, logical rule definitions, operator frameworks (construction, inference) and other capabilities for the domain knowledge graphs, and supports pluggable adaptation of basic engines and algorithmic services by various vendors to build customized solutions.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2023-openspg/";
            },},{id: "projects-composite-event-analysis-and-prediction",
          title: 'Composite Event Analysis and Prediction',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2024-nsfc-youth/";
            },},{
        id: 'social-email',
        title: 'Send an email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%62%61%69%6C%6F%6E%67@%69%63%74.%61%63.%63%6E", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/waltbai", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=Zrd9pCMAAAAJ", "_blank");
        },
      },{
          id: 'lang-zh',
          title: 'zh',
          section: 'Languages',
          handler: () => {
            window.location.href = "/zh" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
