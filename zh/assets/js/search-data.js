
const currentUrl = window.location.href;
const siteUrl = "https://waltbai.github.io"; 
let updatedUrl = currentUrl.replace("https://waltbai.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("zh".length > 0) {
  updatedUrl = updatedUrl.replace("/zh", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-个人简介",
    title: "个人简介",
    section: "",
    handler: () => {
      window.location.href = "/zh/";
    },
  },{id: "nav-发表论文",
          title: "发表论文",
          description: "完整论文列表请见本人谷歌学术主页。",
          section: "",
          handler: () => {
            window.location.href = "/zh/publications/";
          },
        },{id: "nav-科研项目",
          title: "科研项目",
          description: "",
          section: "",
          handler: () => {
            window.location.href = "/zh/projects/";
          },
        },{id: "nav-代码",
          title: "代码",
          description: "",
          section: "",
          handler: () => {
            window.location.href = "/zh/software/";
          },
        },{id: "nav-学术服务",
          title: "学术服务",
          description: "",
          section: "",
          handler: () => {
            window.location.href = "/zh/service/";
          },
        },{id: "nav-简历",
          title: "简历",
          description: "",
          section: "",
          handler: () => {
            window.location.href = "/zh/cv/";
          },
        },{id: "nav-联系方式",
          title: "联系方式",
          description: "",
          section: "",
          handler: () => {
            window.location.href = "/zh/contact/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "projects-openspg-语义增强可编程图谱框架",
          title: 'OpenSPG·语义增强可编程图谱框架',
          description: "OpenSPG是以SPG框架为基础设计和实现的知识图谱开放引擎，它为领域图谱构建提供了明确的语义表示、逻辑规则定义、算子框架（构建、推理）等能力，支持各厂商可插拔的适配基础引擎、算法服务，构建自定义的解决方案。",
          section: "",handler: () => {
              window.location.href = "/zh/projects/2023-openspg/";
            },},{id: "projects-复合事件分析预测研究",
          title: '复合事件分析预测研究',
          description: "",
          section: "",handler: () => {
              window.location.href = "/zh/projects/2024-nsfc-youth/";
            },},{
        id: 'social-email',
        title: '',
        section: '',
        handler: () => {
          window.open("mailto:%62%61%69%6C%6F%6E%67@%69%63%74.%61%63.%63%6E", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: '',
        handler: () => {
          window.open("https://github.com/waltbai", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: '',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=Zrd9pCMAAAAJ", "_blank");
        },
      },{
          id: 'lang-en',
          title: 'en',
          section: '',
          handler: () => {
            window.location.href = "" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: '',
      description: '',
      section: '',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: '',
      description: '',
      section: '',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: '',
      description: '',
      section: '',
      handler: () => {
        setThemeSetting("system");
      },
    },];
