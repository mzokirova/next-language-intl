import Image from "next/image";
import Link from "next/link";
import ExampleClientComponent from "./components/ExampleClientComponent";
import initTranslations from '../i18n'
import LanguageChanger from './components/LanguageChanger'
import TranslationsProvider from './components/TranslationProvider';
const i18nNamespaces = ['home', 'common'];
export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, ['home', 'common']);

  return (
    <TranslationsProvider resources={resources} locale={locale}
      namespaces={i18nNamespaces}>

      <main>
        <h1>{t("header")}</h1>

        <ExampleClientComponent />
        <Link href="/about">{t("common:about")}</Link>
<LanguageChanger/> 
      </main>
    </TranslationsProvider>
  );
}
