import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  iconAssets: "fontawesome",
  repo: "https://github.com/CuteReimu/fengsheng-doc",
  docsDir: "docs",
  docsBranch: "master",
  logo: "/images/head.jpg",
  darkmode: "toggle",
  print: false,
  navbarLayout: {
    start: ["Brand"],
    center: [],
    end: ["Links", "Language", "Repo", "Outlook", "Search"],
  },

  encrypt: {
    config: {
      "/search": ["fs"],
    },
  },

  navbar,

  sidebar,

  plugins: {
    // 代码块
    shiki: {
      langs: ["kotlin", "python", "java"],
      themes: {
        light: "one-light",
        dark: "one-dark-pro",
      },
      lineNumbers: false,
      notationErrorLevel: true,
    },
    mdEnhance: {
      // 开启标记
      mark: true,
      // 开启属性支持
      attrs: true,
      // 剧透
      spoiler: true,
      // 使用chart.js
      chart: true,
      // 使用思维导图
      markmap: true,
      // 脚注
      footnote: true,
      // 样式化
      stylize: [
        {
          matcher: /^红色?$/,
          replacer: ({ tag, attrs, content }) => {
            if (tag === "strong")
              return {
                tag: tag,
                attrs: { ...attrs, class: "red" },
                content: content,
              };
          },
        },
        {
          matcher: /^蓝色?$/,
          replacer: ({ tag, attrs, content }) => {
            if (tag === "strong")
              return {
                tag: tag,
                attrs: { ...attrs, class: "blue" },
                content: content,
              };
          },
        },
        {
          matcher: /^绿色?$/,
          replacer: ({ tag, attrs, content }) => {
            if (tag === "strong")
              return {
                tag: tag,
                attrs: { ...attrs, class: "green" },
                content: content,
              };
          },
        },
        {
          matcher: /^黑色?$/,
          replacer: ({ tag, attrs, content }) => {
            if (tag === "strong")
              return {
                tag: tag,
                attrs: { ...attrs, class: "black" },
                content: content,
              };
          },
        },
        {
          matcher: "潜伏战线",
          replacer: ({ tag, attrs, content }) => {
            if (tag === "strong")
              return {
                tag: tag,
                attrs: { ...attrs, class: "red" },
                content: content,
              };
          },
        },
        {
          matcher: "特工机关",
          replacer: ({ tag, attrs, content }) => {
            if (tag === "strong")
              return {
                tag: tag,
                attrs: { ...attrs, class: "blue" },
                content: content,
              };
          },
        },
        {
          matcher: "神秘人",
          replacer: ({ tag, attrs, content }) => {
            if (tag === "strong")
              return {
                tag: tag,
                attrs: { ...attrs, class: "green" },
                content: content,
              };
          },
        },
      ],
    },
    // 支持容器
    markdownHint: {
      hint: true,
    },
    // 支持数学公式
    markdownMath: {
      type: "katex",
    },
    // 支持代码块分组
    markdownTab: {
      codeTabs: true,
    },
    // 支持搜索
    searchPro: {
      indexContent: true,
      filter: (page) => page.path.startsWith("/document/"),
    },
    linksCheck: {
      build: "error",
    },
    sitemap: false,
    seo: false,
    redirect: false,
  },

  footer:
    "我们的项目完全开源，如果你想要对项目做贡献，可以前往我们的" +
    '  <a href="https://github.com/CuteReimu/TheMessage" class="external-link" target="_blank" rel="noopener noreferrer">服务端代码仓库</a>' +
    "  和" +
    '  <a href="https://github.com/Death-alter/TheMessage" class="external-link" target="_blank" rel="noopener noreferrer">客户端代码仓库</a>' +
    "  。",
  copyright: false,
  displayFooter: true,
});
