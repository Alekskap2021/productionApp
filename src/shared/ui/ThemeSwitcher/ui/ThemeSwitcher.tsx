import { Theme, useTheme } from "app/providers/ThemeProvider"
import { FC } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import Button, { ThemeButton } from "shared/ui/Button/Button"

import LightIcon from "../../../assets/icons/theme-light.svg"
import DarkIcon from "../../../assets/icons/theme-dark.svg"

interface ThemeSwitcherProps {
    className?: string
}
export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
    const { theme, toggleTheme } = useTheme()
    const { className } = props

    return (
        <Button
            onClick={toggleTheme}
            className={classNames("", {}, [className])}
            theme={ThemeButton.CLEAR}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    )
}

export default ThemeSwitcher
