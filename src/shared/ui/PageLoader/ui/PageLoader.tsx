import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import s from "./PageLoader.module.scss";
import { Loader } from "shared/ui/Loader/Loader";

const cn = classNames.bind(s);

interface PageLoaderProps {
  className?: string;
}

export const PageLoader: FC<PageLoaderProps> = (props) => {
  const { className } = props;

  return (
    <div className={cn(s.PageLoader)}>
      <Loader />
    </div>
  );
};
