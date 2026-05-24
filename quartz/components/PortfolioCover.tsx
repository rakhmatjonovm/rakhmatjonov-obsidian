import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  const PortfolioCover: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
    const cover = fileData.frontmatter?.cover as string | undefined
    if (!cover) return null

    const title = fileData.frontmatter?.title as string | undefined

    return (
      <div class="portfolio-cover">
        <img src={`/__assets/${cover}`} alt={title ?? ""} />
      </div>
    )
  }

  return PortfolioCover
}) satisfies QuartzComponentConstructor
