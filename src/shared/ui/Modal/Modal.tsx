import { FC, ReactNode, MouseEvent, useEffect, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';
import s from './Modal.module.scss';

const cn = classNames.bind(s);

interface ModalProps {
    className?: string;
    children: ReactNode;
    isOpen: boolean;
    onClose?: () => void;
}

export const Modal: FC<ModalProps> = (props) => {
    const { className, children, isOpen, onClose } = props;
    const { theme } = useTheme();

    const mods: Record<string, boolean> = {
        [s.opened]: isOpen,
        [s[theme]]: true,
    };

    const closeHandler = useCallback(() => {
        if (onClose) onClose();
    }, [onClose]);

    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeHandler();
        },
        [closeHandler]
    );

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
        } else window.removeEventListener('keydown', handleKeyDown);

        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, handleKeyDown]);

    return (
        <Portal>
            <div className={cn(s.Modal, mods, [className])}>
                <div className={s.overlay} onClick={closeHandler}>
                    <div
                        className={s.content}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
