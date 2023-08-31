import {
    ChangeEvent,
    FC,
    InputHTMLAttributes,
    useEffect,
    useRef,
    useState,
} from 'react';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import s from './Input.module.scss';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'onChange' | 'value'
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    autoFocus?: boolean;
}

export const Input: FC<InputProps> = (props) => {
    const {
        className,
        value,
        onChange,
        type,
        placeholder,
        autoFocus,
        ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [caretPosition, setCaretPosition] = useState<number>(0);

    useEffect(() => {
        if (autoFocus) {
            setIsFocused(true);
            ref.current.focus();
        }
    }, [autoFocus]);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };

    const onBlurHandler = () => setIsFocused(false);
    const onFocusHandler = () => setIsFocused(true);
    const onSelectHandler = (e: any) => {
        setCaretPosition(e?.target?.selectionStart || 0);
    };

    return (
        <div className={s.InputWrapper}>
            {placeholder && (
                <div className={s.placeholder}>{`${placeholder}>`}</div>
            )}

            <div className={s.caretWrapper}>
                <input
                    className={s.input}
                    ref={ref}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    onFocus={onFocusHandler}
                    onBlur={onBlurHandler}
                    onSelect={onSelectHandler}
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...otherProps}
                />

                {isFocused && (
                    <span
                        className={s.caret}
                        style={{ left: `${caretPosition * 9}px` }}
                    />
                )}
            </div>
        </div>
    );
};
