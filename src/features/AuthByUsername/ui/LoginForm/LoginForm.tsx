import { FC } from 'react';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import s from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm: FC<LoginFormProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <form className={cn(s.LoginForm, {}, [className])}>
            <Input
                className={s.input}
                placeholder={t('Введите username')}
                autoFocus
                type="text"
            />
            <Input
                className={s.input}
                placeholder={t('Введите пароль')}
                type="text"
            />
            <Button className={s.loginBtn}>{t('Войти')}</Button>
        </form>
    );
};
