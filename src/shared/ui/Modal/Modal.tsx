import { FC, ReactNode, useEffect, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal/Portal';
import s from './Modal.module.scss';

const cn = classNames.bind(s);

interface ModalProps {
    className?: string;
    children: ReactNode;
    isOpen: boolean;
    lazy?: boolean;
    onClose?: () => void;
}

export const Modal: FC<ModalProps> = (props) => {
    const { className, children, isOpen, onClose, lazy } = props;
    // const { theme } = useTheme();

    const [isMounted, setIsMounted] = useState<boolean>(false);

    useEffect(() => {
        isOpen && setIsMounted(true);
    }, [isOpen]);

    const mods: Record<string, boolean> = {
        [s.opened]: isOpen,
    };
    //
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

    if (lazy && !isMounted) return null;

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
