import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const sectionLabels: Record<string, Record<string, string>> = {
  ru: {
    home: "Главная",
    blog: "Блог",
    portfolio: "Портфолио",
    services: "Услуги",
    about: "Обо мне",
    contact: "Контакты",
  },
  en: {
    home: "Home",
    blog: "Blog",
    portfolio: "Portfolio",
    services: "Services",
    about: "About Me",
    contact: "Contacts",
  },
}

export default (() => {
  const InnerPageBanner: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
    const slug = fileData?.slug ?? ""
    const lang = slug.startsWith("en/") ? "en" : "ru"
    const labels = sectionLabels[lang]
    const base = `/${lang}/`

    const parts = slug.split("/").filter(Boolean)
    // parts[0] = lang, parts[1] = section, parts[2+] = page
    const section = parts[1] ?? ""

    const title = fileData.frontmatter?.title ?? labels[section] ?? section
    const sectionLabel = labels[section] ?? section
    const homeLabel = labels.home

    return (
      <section
        class="banner__inner-page bg-image pt-180 pb-180"
        style={{ backgroundImage: "url('/assets/images/banner/banner-inner-page.jpg')" }}
      >
        <div class="shape2 wow slideInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
          <img src="/assets/images/banner/inner-banner-shape2.png" alt="shape" />
        </div>
        <div class="shape1 wow slideInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
          <img src="/assets/images/banner/inner-banner-shape1.png" alt="shape" />
        </div>
        <div class="shape3 wow slideInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
          <img class="sway__animationX" src="/assets/images/banner/inner-banner-shape3.png" alt="shape" />
        </div>
        <div class="container">
          <h2 class="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
            {title}
          </h2>
          <div class="breadcrumb-list wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
            <a href={`${base}index.html`}>{homeLabel}</a>
            {section && (
              <span>
                <i class="fa-regular fa-angles-right mx-2"></i>
                {parts.length > 2 ? (
                  <>
                    <a href={`${base}${section}.html`}>{sectionLabel}</a>
                    <i class="fa-regular fa-angles-right mx-2"></i>
                    {title}
                  </>
                ) : (
                  sectionLabel
                )}
              </span>
            )}
          </div>
        </div>
      </section>
    )
  }

  return InnerPageBanner
}) satisfies QuartzComponentConstructor
