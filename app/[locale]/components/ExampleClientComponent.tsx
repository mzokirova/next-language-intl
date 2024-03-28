'use client'
import { useTranslation } from "react-i18next";
export default function ExampleClientComponent() {
    const { t } = useTranslation();

    const username = 'David';
    return (
        <h3>
            {t("subheader", { username })}
        </h3>
    )
}