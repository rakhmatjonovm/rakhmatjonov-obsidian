import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Rakhmatjanov",
    pageTitleSuffix: "",
    enableSPA: false,
    enablePopovers: false,
    analytics: null,
    locale: "ru-RU",
    baseUrl: "rakhmatjanov.uz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Inter",
        body: "Inter",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#f5f7ff",        // фон — почти белый с холодным оттенком
          lightgray: "#e3e7f5",    // второстепенные фоны, бордеры
          gray: "#8892c0",         // мета-текст, иконки
          darkgray: "#2a3068",     // основной текст — тёмно-синий из логотипа
          dark: "#0f1535",         // заголовки — почти чёрный-синий
          secondary: "#4A7FD4",    // ссылки — средний синий из глобуса логотипа
          tertiary: "#1B2F6E",     // hover — глубокий тёмно-синий кит
          highlight: "rgba(74, 127, 212, 0.12)",
          textHighlight: "rgba(74, 127, 212, 0.25)",
        },
        darkMode: {
          light: "#0a0e27",
          lightgray: "#1a1f3d",
          gray: "#3a3f6d",
          darkgray: "#c0c8f0",
          dark: "#ffffff",
          secondary: "#4169E1",    // яркий синий кит из тёмного логотипа
          tertiary: "#7c5cfc",
          highlight: "rgba(65, 105, 225, 0.15)",
          textHighlight: "rgba(65, 105, 225, 0.3)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: { light: "github-dark", dark: "github-dark" },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({ enableSiteMap: true, enableRSS: true }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.PortfolioStatic(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config