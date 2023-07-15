import { FC } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { useTranslation } from "react-i18next"
import Button from "shared/ui/Button/Button"
import s from "./PageError.module.scss"

const cn = classNames.bind(s)

interface PageErrorProps {
    className?: string
}

export const PageError: FC<PageErrorProps> = (props) => {
    const { className } = props
    const { t } = useTranslation()

    return (
        <div className={cn(s.PageError, {}, [className])}>
            <p>{t("Произошла непредвиденная ошибка")}</p>
            <Button onClick={() => window.location.reload()}>
                {t("Обновить страницу")}
            </Button>
        </div>
    )
}
