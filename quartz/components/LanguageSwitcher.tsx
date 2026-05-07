import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function LanguageSwitcher({ fileData }: QuartzComponentProps) {
  const slug = fileData?.slug ?? ""
  const langs = ["en", "ru", "uz"]
  const currentLang = langs.find((l) => slug.startsWith(l + "/") || slug === l) ?? "en"

  const switchTo = (lang: string): string => {
    const withoutLang = slug.replace(/^(en|ru|uz)(\/|$)/, "")
    return "/" + lang + "/" + withoutLang
  }

//   const enClass = "lang-btn" + (currentLang === "en" ? " active" : "")
  const ruClass = "lang-btn" + (currentLang === "ru" ? " active" : "")
  const uzClass = "lang-btn" + (currentLang === "uz" ? " active" : "")

  return (
    <div className="lang-switcher">
      {/* <a href={switchTo("en")} className={enClass}>EN</a> */}
      <a href={switchTo("ru")} className={ruClass}>RU</a>
      <a href={switchTo("uz")} className={uzClass}>UZ</a>
    </div>
  )
}

export default (() => LanguageSwitcher) satisfies QuartzComponentConstructor