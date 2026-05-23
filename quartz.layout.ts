import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// Components shared across all Quartz-generated pages
export const sharedPageComponents: SharedLayout = {
  head: Component.PortfolioHead(),
  header: [Component.PortfolioHeader()],
  afterBody: [],
  footer: Component.PortfolioFooter(),
}

// Layout for individual content pages (blog posts, portfolio projects)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.InnerPageBanner(),
  ],
  left: [],
  right: [],
}

// Layout for listing pages (folder/tag indexes) - also minimal
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.InnerPageBanner(),
  ],
  left: [],
  right: [],
}
