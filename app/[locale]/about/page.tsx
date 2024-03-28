import initTranslations from "@/app/i18n";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import TranslationsProvider from "../components/TranslationProvider";

const i18nNamespaces = ['about', 'common']
export default async function Home({ params: { locale } }) {
    const { t, resources } = await initTranslations(locale, i18nNamespaces);

    return (
        <TranslationsProvider resources={resources} locale={locale}
            namespaces={i18nNamespaces}>
            <main>
                <h1>{t('common:about')}</h1>
                <p>
                    {t('our_address')}
                </p>
                <p>132 Street</p>
                <p>Tashkent</p>
                <Link href="/">{t('back')}</Link>
            </main>
        </TranslationsProvider>
    )
}