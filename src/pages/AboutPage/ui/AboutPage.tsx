import { Counter } from 'entities/Counter';
import { useTranslation } from 'react-i18next';

function AboutPage() {
    const { t } = useTranslation('about');
    return (
        <>
            <div className="">{t('О сайте')}</div>
            <Counter />
        </>
    );
}

export default AboutPage;
