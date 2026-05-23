import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const i18nNav = {
  ru: {
    home: "Главная",
    contact: "Контакты",
    about: "Обо мне",
    services: "Услуги",
    portfolio: "Портфолио",
    blog: "Блог",
    langBtn: "RU",
  },
  en: {
    home: "Home",
    contact: "Contacts",
    about: "About Me",
    services: "Services",
    portfolio: "Portfolio",
    blog: "Blog",
    langBtn: "EN",
  },
}

export default (() => {
  const PortfolioHeader: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
    const slug = fileData?.slug ?? ""
    const lang = slug.startsWith("en/") ? "en" : "ru"
    const nav = i18nNav[lang]
    const base = `/${lang}/`

    // Determine same-section link for language switcher
    const parts = slug.split("/")
    const section = parts[1] ?? ""
    const knownSections = ["blog", "portfolio", "services", "about", "contact"]
    const sectionFile = knownSections.includes(section) ? `${section}.html` : "index.html"
    const ruLink = `/ru/${sectionFile}`
    const enLink = `/en/${sectionFile}`

    return (
      <>
        {/* Preloader */}
        <div class="loading">
          <span class="text-capitalize">R</span>
          <span>a</span>
          <span>k</span>
          <span>h</span>
          <span>m</span>
          <span>a</span>
          <span>t</span>
          <span>j</span>
          <span>o</span>
          <span>n</span>
          <span>o</span>
          <span>v</span>
        </div>
        <div id="preloader"></div>

        {/* Mouse cursor */}
        <div class="mouse-cursor cursor-outer"></div>
        <div class="mouse-cursor cursor-inner"></div>

        {/* Header */}
        <header class="header-area header-three-area">
          <div class="container header__container">
            <div class="header__main">
              <a href={`${base}index.html`} class="logo">
                <img src="/assets/images/logo/logo.png" alt="Rakhmatjonov" />
              </a>
              <div class="main-menu">
                <nav>
                  <ul>
                    <li><a href={`${base}index.html`}>{nav.home}</a></li>
                    <li><a href={`${base}contact.html`}>{nav.contact}</a></li>
                    <li><a href={`${base}about.html`}>{nav.about}</a></li>
                    <li><a href={`${base}services.html`}>{nav.services}</a></li>
                    <li><a href={`${base}portfolio.html`}>{nav.portfolio}</a></li>
                    <li><a href={`${base}blog.html`}>{nav.blog}</a></li>
                  </ul>
                </nav>
              </div>
              <div class="d-none d-lg-inline-block">
                <button id="openButton" class="btn-one">
                  {nav.langBtn} <i class="fa-regular fa-globe"></i>
                </button>
              </div>
              <div class="bars d-block d-lg-none">
                <i id="openButton" class="fa-solid fa-bars"></i>
              </div>
            </div>
          </div>
        </header>

        {/* Sidebar */}
        <div id="targetElement" class="sidebar-area sidebar__hide">
          <div class="sidebar__overlay"></div>
          <a href={`${base}index.html`} class="logo mb-40">
            <img src="/assets/images/logo/logo.png" alt="Rakhmatjonov" />
          </a>
          <div class="sidebar__search mb-30">
            <div class="social-icon mt-20 text-center">
              <a href={ruLink} class="text-light">RU</a>
              <a href={enLink} class="text-light">EN</a>
            </div>
          </div>
          <div class="mobile-menu overflow-hidden"></div>
          <ul class="info pt-40">
            <li class="py-2">
              <i class="fa-solid primary-color fa-phone-volume"></i>
              <a href="tel:+998900054684">+998 (90) 005-46-84</a>
            </li>
            <li>
              <i class="fa-solid primary-color fa-paper-plane"></i>
              <a href="mailto:mirjalol@rakhmatjonov.uz">mirjalol@rakhmatjonov.uz</a>
            </li>
          </ul>
          <div class="social-icon mt-20">
            <a href="https://www.facebook.com/profile.php?id=100011446542676" target="_blank">
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="https://x.com/rakhmatjonovmm" target="_blank">
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/rakhmatjonovmm/" target="_blank">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/rakhmatjonov/" target="_blank">
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/anarch02" target="_blank">
              <i class="fa-brands fa-github"></i>
            </a>
          </div>
          <button id="closeButton" class="text-white">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </>
    )
  }

  return PortfolioHeader
}) satisfies QuartzComponentConstructor
