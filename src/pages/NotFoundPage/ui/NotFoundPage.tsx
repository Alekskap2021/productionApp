import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import s from "./NotFoundPage.module.scss";
import { useTranslation } from "react-i18next";

const cn = classNames.bind(s);

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage: FC<NotFoundPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation("notFound");

  return <div className={cn(s.NotFoundPage)}>{t("Страница не найдена")}</div>;
};
