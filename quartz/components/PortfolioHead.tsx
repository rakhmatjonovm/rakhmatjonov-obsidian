import { CSSResourceToStyleElement, JSResourceToScriptElement } from "../util/resources"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { unescapeHTML } from "../util/escape"

export default (() => {
  const PortfolioHead: QuartzComponent = ({
    cfg,
    fileData,
    externalResources,
  }: QuartzComponentProps) => {
    const title = fileData.frontmatter?.title ?? cfg.pageTitle
    const description = unescapeHTML(
      fileData.description?.trim() ?? "Fullstack разработчик. Laravel, AI-интеграции, Telegram-боты.",
    )
    const { css, js } = externalResources

    return (
      <head>
        <title>{title} — Rakhmatjonov</title>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />
        <meta name="author" content="rakhmatjonov.uz" />
        <meta property="og:title" content={`${title} — Rakhmatjonov`} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/assets/images/banner/preview.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />

        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />

        {/* Front-portfolio CSS */}
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/meanmenu.css" />
        <link rel="stylesheet" href="/assets/css/all.min.css" />
        <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/css/nice-select.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />

        {/* Quartz CSS (for markdown content rendering) */}
        {css.map((resource) => CSSResourceToStyleElement(resource, true))}
        {js
          .filter((r) => r.loadTime === "beforeDOMReady")
          .map((r) => JSResourceToScriptElement(r, true))}
      </head>
    )
  }

  return PortfolioHead
}) satisfies QuartzComponentConstructor
