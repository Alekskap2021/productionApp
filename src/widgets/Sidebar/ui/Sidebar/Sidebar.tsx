import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import Button, { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';

import MainIcon from 'shared/assets/icons/icon-main.svg';
import AboutIcon from 'shared/assets/icons/icon-about.svg';

import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
    const { t } = useTranslation('');

    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const { className } = props;

    return (
        <div
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
            data-testid="sidebar"
        >
            <Button
                type="button"
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>

            <nav className={cls.linkList}>
                <AppLink
                    className={cls.link}
                    to={RoutePath.main}
                    theme={AppLinkTheme.SECODARY}
                >
                    <MainIcon className={cls.icon} />
                    <span className={cls.linkText}>
                        {t('Главная страница')}
                    </span>
                </AppLink>

                <AppLink
                    className={cls.link}
                    to={RoutePath.about}
                    theme={AppLinkTheme.SECODARY}
                >
                    <AboutIcon className={cls.icon} />
                    <span className={cls.linkText}>{t('О сайте')}</span>
                </AppLink>
            </nav>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} short={collapsed} />
            </div>
        </div>
    );
};
