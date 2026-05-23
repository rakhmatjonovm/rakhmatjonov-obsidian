import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { JSResourceToScriptElement } from "../util/resources"

const i18nFooter = {
  ru: {
    description: "Предоставляю передовые IT-решения для бизнеса любого масштаба, фокусируясь на инновациях и качестве.",
    quickLinks: "Быстрые ссылки",
    itSolution: "IT Решение",
    contactTitle: "Связаться со мной",
    requestLabel: "Сделать запрос:",
    callLabel: "Позвоните мне:",
    copyright: "All Copyright 2025 by",
    nav: {
      home: "Главная",
      contact: "Контакты",
      about: "Обо мне",
      services: "Услуги",
      portfolio: "Портфолио",
      blog: "Блог",
    },
    services: {
      laravel: "Laravel-разработка",
      ai: "AI-интеграции",
      telegram: "Telegram-боты",
      auto: "Автоматизация",
    },
  },
  en: {
    description: "I provide advanced IT solutions for businesses of any scale, focusing on innovation and quality.",
    quickLinks: "Quick Links",
    itSolution: "IT Solution",
    contactTitle: "Contact Me",
    requestLabel: "Make a request:",
    callLabel: "Call me:",
    copyright: "All Copyright 2025 by",
    nav: {
      home: "Home",
      contact: "Contacts",
      about: "About Me",
      services: "Services",
      portfolio: "Portfolio",
      blog: "Blog",
    },
    services: {
      laravel: "Laravel Development",
      ai: "AI Integrations",
      telegram: "Telegram Bots",
      auto: "Automation",
    },
  },
}

export default (() => {
  const PortfolioFooter: QuartzComponent = ({ fileData, externalResources }: QuartzComponentProps) => {
    const slug = fileData?.slug ?? ""
    const lang = slug.startsWith("en/") ? "en" : "ru"
    const t = i18nFooter[lang]
    const base = `/${lang}/`
    const { js } = externalResources

    return (
      <>
        {/* Footer */}
        <footer class="footer-area secondary-bg">
          <div class="footer__shape-regular-left wow slideInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
            <img src="/assets/images/shape/footer-regular-left.png" alt="shape" />
          </div>
          <div class="footer__shape-solid-left wow slideInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
            <img class="sway_Y__animation" src="/assets/images/shape/footer-solid-left.png" alt="shape" />
          </div>
          <div class="footer__shape-solid-right wow slideInRight" data-wow-delay="00ms" data-wow-duration="1500ms">
            <img class="sway_Y__animation" src="/assets/images/shape/footer-regular-right.png" alt="shape" />
          </div>
          <div class="footer__shape-regular-right wow slideInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
            <img src="/assets/images/shape/footer-solid-right.png" alt="shape" />
          </div>
          <div class="footer__shadow-shape">
            <img src="/assets/images/shape/footer-shadow-shape.png" alt="shadow" />
          </div>
          <div class="container">
            <div class="footer__wrp pt-100 pb-100">
              <div class="footer__item item-big wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                <a href={`${base}index.html`} class="logo mb-30">
                  <img src="/assets/images/logo/logo.png" alt="Rakhmatjonov" />
                </a>
                <p>{t.description}</p>
                <div class="social-icon">
                  <li><a href="https://www.facebook.com/profile.php?id=100011446542676" target="_blank"><i class="fa-brands fa-facebook"></i></a></li>
                  <li><a href="https://x.com/rakhmatjonovmm" target="_blank"><i class="fa-brands fa-twitter"></i></a></li>
                  <li><a href="https://www.instagram.com/rakhmatjonovmm/" target="_blank"><i class="fa-brands fa-instagram"></i></a></li>
                  <li><a href="https://www.linkedin.com/in/rakhmatjonov/" target="_blank"><i class="fa-brands fa-linkedin"></i></a></li>
                  <li><a href="https://github.com/anarch02" target="_blank"><i class="fa-brands fa-github"></i></a></li>
                </div>
              </div>
              <div class="footer__item item-sm wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                <h3 class="footer-title">{t.quickLinks}</h3>
                <ul>
                  <li><a href={`${base}index.html`}><i class="fa-regular fa-angles-right me-1"></i> {t.nav.home}</a></li>
                  <li><a href={`${base}contact.html`}><i class="fa-regular fa-angles-right me-1"></i> {t.nav.contact}</a></li>
                  <li><a href={`${base}about.html`}><i class="fa-regular fa-angles-right me-1"></i> {t.nav.about}</a></li>
                  <li><a href={`${base}services.html`}><i class="fa-regular fa-angles-right me-1"></i> {t.nav.services}</a></li>
                  <li><a href={`${base}portfolio.html`}><i class="fa-regular fa-angles-right me-1"></i> {t.nav.portfolio}</a></li>
                  <li><a href={`${base}blog.html`}><i class="fa-regular fa-angles-right me-1"></i> {t.nav.blog}</a></li>
                </ul>
              </div>
              <div class="footer__item item-sm wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                <h3 class="footer-title">{t.itSolution}</h3>
                <ul>
                  <li><a href={`${base}services.html`}><i class="fa-regular fa-angles-right me-1"></i> {t.services.laravel}</a></li>
                  <li><a href={`${base}services.html`}><i class="fa-regular fa-angles-right me-1"></i> {t.services.ai}</a></li>
                  <li><a href={`${base}services.html`}><i class="fa-regular fa-angles-right me-1"></i> {t.services.telegram}</a></li>
                  <li><a href={`${base}services.html`}><i class="fa-regular fa-angles-right me-1"></i> {t.services.auto}</a></li>
                </ul>
              </div>
              <div class="footer__item item-big wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                <h3 class="footer-title">{t.contactTitle}</h3>
                <ul class="footer-contact">
                  <li>
                    <i class="fa-regular fa-envelope"></i>
                    <div class="info">
                      <h5>{t.requestLabel}</h5>
                      <p><a href="mailto:mirjalol@rakhmatjonov.uz">mirjalol@rakhmatjonov.uz</a></p>
                    </div>
                  </li>
                  <li>
                    <i class="fa-solid fa-phone"></i>
                    <div class="info">
                      <h5>{t.callLabel}</h5>
                      <p><a href="tel:+998900054684">+998 (90) 005-46-84</a></p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer__copyright">
            <div class="container">
              <div class="d-flex gap-1 flex-wrap align-items-center justify-content-md-between justify-content-center">
                <p class="wow fadeInDown" data-wow-delay="00ms" data-wow-duration="1500ms">
                  &copy; {t.copyright} <a href={`${base}about.html`}>Rakhmatjonov</a>
                </p>
              </div>
            </div>
          </div>
        </footer>

        {/* Scroll to top */}
        <div class="scroll-up">
          <svg class="scroll-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
          </svg>
        </div>

        {/* Front-portfolio JS */}
        <script src="/assets/js/jquery-3.7.1.min.js"></script>
        <script src="/assets/js/bootstrap.min.js"></script>
        <script src="/assets/js/meanmenu.js"></script>
        <script src="/assets/js/swiper-bundle.min.js"></script>
        <script src="/assets/js/jquery.counterup.min.js"></script>
        <script src="/assets/js/wow.min.js"></script>
        <script src="/assets/js/pace.min.js"></script>
        <script src="/assets/js/magnific-popup.min.js"></script>
        <script src="/assets/js/nice-select.min.js"></script>
        <script src="/assets/js/isotope.pkgd.min.js"></script>
        <script src="/assets/js/jquery.waypoints.js"></script>
        <script src="/assets/js/script.js"></script>

        {/* Quartz afterDOMReady JS */}
        {js
          .filter((r) => r.loadTime === "afterDOMReady")
          .map((r) => JSResourceToScriptElement(r, true))}
      </>
    )
  }

  return PortfolioFooter
}) satisfies QuartzComponentConstructor
