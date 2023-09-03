import { useColorScheme } from "react-native";
import {useAppSelector} from "@global-state/hooks";
import {themeSelector} from "./themeSlice";
import {COLORS} from "@constants/theme";
import {ThemeColors} from "@types";

const useTheme = () => {
  const theme = useColorScheme() ?? "light";

  const colors: ThemeColors = {
    primary: theme === 'dark' ? COLORS.primaryDark200 : COLORS.primaryLight200,
    secondary: theme === 'dark' ? COLORS.secondary80 : COLORS.secondary,
    tertiary: theme === 'dark' ? COLORS.tertiary700 : COLORS.tertiary50,
    text: theme === 'dark' ? COLORS.primaryLight200 : COLORS.primaryDark200,
    background: theme === 'dark' ? COLORS.primaryDark900 : COLORS.primaryLight50,
    label: theme === 'dark' ? COLORS.primaryLight300 : COLORS.primaryLight500,
    black: COLORS.dark,
    light: COLORS.light,
    white: COLORS.white,
    gray: COLORS.gray,
    title: theme === 'dark' ? COLORS.primaryLight50 : COLORS.primaryDark300,
    dark: "",
    danger: "",
    warning: "",
    success: "",
    info: "",
    card: "",
    shadow: "",
    overlay: "",
    focus: "",
    input: "",
    switchOn: "",
    switchOff: "",
    checkbox: [],
    checkboxIcon: "",
    facebook: "",
    twitter: "",
    dribbble: "",
    icon: "",
    blurTint: "light",
    link: "",
  };

  return {colors};
};

export default useTheme;
