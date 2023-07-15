import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import s from './PageLoader.module.scss';

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
