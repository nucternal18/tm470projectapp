import { Dimensions, Platform } from "react-native";
import {
  ThemeGradients,
  ThemeLineHeights,
  ThemeWeights,
  ThemeSizes,
  ThemeSpacing,
} from "types";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  // Error
  error: "rgba(246, 86, 93, 1)",
  error80: "rgba(246, 86, 93, 0.8)",
  error60: "rgba(246, 86, 93, 0.6)",
  error20: "rgba(246, 86, 93, 0.2)",
  error08: "rgba(246, 86, 93, 0.08)",

  // Primary
  primary: "rgb(94, 23, 235)",
  primary80: "rgba(94, 23, 235, 0.8)",
  primary60: "rgba(94, 23, 235, 0.6)",
  primary20: "rgba(94, 23, 235, 0.2)",
  primary08: "rgba(94, 23, 235, 0.08)",
  primaryDark100: "#5515d4",
  primaryDark200: "#4b12bc",
  primaryDark300: "#4210a5",
  primaryDark400: "#380e8d",
  primaryDark500: "#2e0c76",
  primaryDark600: "#26095e",
  primaryDark700: "#1c0746",
  primaryDark800: "#13052f",
  primaryDark900: "#090217",
  primaryLight50: "#f9f8fc",
  primaryLight100: "#efe8fd",
  primaryLight200: "#dfd1fb",
  primaryLight300: "#cfb9f9",
  primaryLight400: "#bfa2f7",
  primaryLight500: "#af8bf5",
  primaryLight600: "#9e74f3",
  primaryLight700: "#8e5df1",
  primaryLight800: "#6e2eed",

  // Secondary
  secondary: "rgb(0, 220, 179)",
  secondary80: "rgba(0, 220, 179, 0.8)",
  secondary60: "rgba(0, 220, 179, 0.6)",
  secondary20: "rgba(0, 220, 179, 0.2)",
  secondary08: "rgba(0, 220, 179, 0.08)",

  // Tertiary
  tertiary50: "#e7f0f2",
  tertiary100: "#cee1e6",
  tertiary200: "#b6d2d9",
  tertiary300: "#9ec3cc",
  tertiary400: "#86b4c0",
  tertiary500: "#6da5b3",
  tertiary600: "#5596a6",
  tertiary700: "#3d8799",
  tertiary800: "#24788d",
  tertiary900: "#0c6980",

  // Success
  success: "rgba(253, 212, 70, 1)",
  success80: "rgba(253, 212, 70, 0.8)",
  success60: "rgba(253, 212, 70, 0.6)",
  success20: "rgba(253, 212, 70, 0.2)",
  success08: "rgba(253, 212, 70, 0.08)",

  // Dark
  dark: "rgba(13, 15, 35, 1)",
  dark80: "rgba(13, 15, 35, 0.8)",
  dark60: "rgba(13, 15, 35, 0.6)",
  dark20: "rgba(13, 15, 35, 0.2)",
  dark08: "rgba(13, 15, 35, 0.08)",

  // Grey
  grey: "rgba(160, 161, 180, 1)",
  grey80: "rgba(160, 161, 180, 0.8)",
  grey60: "rgba(160, 161, 180, 0.6)",
  grey20: "rgba(160, 161, 180, 0.2)",
  grey08: "rgba(160, 161, 180, 0.08)",

  // Light Grey
  lightGrey: "rgba(247, 247, 247, 1)",
  lightGrey80: "rgba(247, 247, 247, 0.8)",
  lightGrey60: "rgba(247, 247, 247, 0.6)",
  lightGrey20: "rgba(247, 247, 247, 0.2)",
  lightGrey08: "rgba(247, 247, 247, 0.08)",

  // Light
  white: "#fff",
  light: "rgba(255, 255, 255, 1)",
  light80: "rgba(255, 255, 255, 0.8)",
  light60: "rgba(255, 255, 255, 0.6)",
  light20: "rgba(255, 255, 255, 0.2)",
  light08: "rgba(255, 255, 255, 0.08)",

  // Support 1
  support1: "rgba(110, 162, 255, 1)",
  support1_08: "rgba(110, 162, 255, 0.08)",

  // Support 2
  support2: "rgba(249, 161, 218, 1)",
  support2_08: "rgba(249, 161, 218, 0.08)",

  // Support 3
  support3: "rgba(0, 210, 224, 1)",
  support3_08: "rgba(0, 210, 224, 0.08)",

  // Support 4
  support4: "rgba(255, 132, 13, 1)",
  support4_08: "rgba(255, 132, 13, 0.08)",

  // Support 5
  support5: "rgba(123, 96, 238, 1)",
  support5_08: "rgba(123, 96, 238, 0.08)",

  // Shadow
  shadow: "rgba(138, 149, 158, 1)",
  shadow08: "rgba(138, 149, 158, 0.08)",

  // default text color
  text: "#252F40",

  /** UI color for #tertiary */
  tertiary: "#E8AE4C",


  // gray variations
  /** UI color for #gray */
  gray: "#A7A8AE",

  // colors variations
  /** UI color for #danger */
  danger: "#EA0606",
  /** UI color for #warning */
  warning: "#FFC107",

  /** UI color for #info */
  info: "#17C1E8",

  /** UI colors for navigation & card */
  card: "#FFFFFF",
  background: "#E9ECEF",

  /** UI color for shadowOverlay */
  overlay: "rgba(0,0,0,0.3)",

  /** UI color for input borderColor on focus */
  focus: "#E293D3",
  input: "#252F40",

  /** UI color for switch checked/active color */
  switchOn: "#3A416F",
  switchOff: "#E9ECEF",

  /** UI color for checkbox icon checked/active color */
  checkbox: ["#3A416F", "#141727"],
  checkboxIcon: "#FFFFFF",

  /** social colors */
  facebook: "#3B5998",
  twitter: "#55ACEE",
  dribbble: "#EA4C89",

  /** icon tint color */
  icon: "#8392AB",

  /** blur tint color */
  blurTint: "light",

  /** product link color */
  link: "#CB0C9F",
};

export const GRADIENTS: ThemeGradients = {
  primary: ["#FF0080", "#7928CA"],
  secondary: ["#A8B8D8", "#627594"],
  info: ["#21D4FD", "#2152FF"],
  success: ["#98EC2D", "#17AD37"],
  warning: ["#FBCF33", "#F53939"],
  danger: ["#FF667C", "#EA0606"],

  light: ["#EBEFF4", "#CED4DA"],
  dark: ["#3A416F", "#141727"],

  white: [String(COLORS.white), "#EBEFF4"],
  black: [String(COLORS.dark), "#141727"],

  divider: ["rgba(255,255,255,0.3)", "rgba(102, 116, 142, 0.6)"],
  menu: [
    "rgba(255, 255, 255, 0.2)",
    "rgba(112, 125, 149, 0.5)",
    "rgba(255, 255, 255, 0.2)",
  ],
};

export const SIZES: ThemeSizes = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,
    margin: 20,

    // font sizes
    largeTitle: 40,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    h5: 12,
    body1: 30,
    body2: 22,
    body3: 18,
    body4: 16,
    body5: 14,
    body6: 12,
    body7: 10,
    p: 16,

    // app dimensions
    width,
    height,

    // button sizes
  buttonBorder: 1,
  buttonRadius: 8,
  socialSize: 64,
  socialRadius: 16,
  socialIconSize: 26,

  // button shadow
  shadowOffsetWidth: 0,
  shadowOffsetHeight: 7,
  shadowOpacity: 0.07,
  shadowRadius: 4,
  elevation: 2,

  // input sizes
  inputHeight: 46,
  inputBorder: 1,
  inputRadius: 8,
  inputPadding: 12,

  // card sizes
  cardRadius: 16,
  cardPadding: 10,

  // image sizes
  imageRadius: 14,
  avatarSize: 32,
  avatarRadius: 8,

  // switch sizes
  switchWidth: 50,
  switchHeight: 24,
  switchThumb: 20,

  // checkbox sizes
  checkboxWidth: 18,
  checkboxHeight: 18,
  checkboxRadius: 5,
  checkboxIconWidth: 10,
  checkboxIconHeight: 8,

  // product link size
  linkSize: 12,

  /** font size multiplier: for maxFontSizeMultiplier prop */
  multiplier: 2,
};

export const FONTS = {
    largeTitle: { fontFamily: "Poppins-Black", fontSize: SIZES.largeTitle },
    h1: { fontFamily: "Poppins-Bold", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Poppins-Bold", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "Poppins-SemiBold", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Poppins-SemiBold", fontSize: SIZES.h4, lineHeight: 22 },
    h5: { fontFamily: "Poppins-SemiBold", fontSize: SIZES.h5, lineHeight: 22 },
    body1: { fontFamily: "Poppins-Regular", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "Poppins-Regular", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "Poppins-Regular", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Poppins-Regular", fontSize: SIZES.body4, lineHeight: 22 },
    body5: { fontFamily: "Poppins-Regular", fontSize: SIZES.body5, lineHeight: 22 },
};

export const WEIGHTS: ThemeWeights = {
  text: "normal",
  h1: Platform.OS === "ios" ? "700" : "normal",
  h2: Platform.OS === "ios" ? "700" : "normal",
  h3: Platform.OS === "ios" ? "700" : "normal",
  h4: Platform.OS === "ios" ? "700" : "normal",
  h5: Platform.OS === "ios" ? "600" : "normal",
  p: "normal",

  thin: Platform.OS === "ios" ? "100" : "normal",
  extralight: Platform.OS === "ios" ? "200" : "normal",
  light: Platform.OS === "ios" ? "300" : "normal",
  normal: Platform.OS === "ios" ? "400" : "normal",
  medium: Platform.OS === "ios" ? "500" : "normal",
  semibold: Platform.OS === "ios" ? "600" : "normal",
  bold: Platform.OS === "ios" ? "700" : "normal",
  extrabold: Platform.OS === "ios" ? "800" : "normal",
  black: Platform.OS === "ios" ? "900" : "normal",
};

export const LINE_HEIGHTS: ThemeLineHeights = {
  // font lineHeight
  text: 22,
  h1: 60,
  h2: 55,
  h3: 43,
  h4: 33,
  h5: 24,
  p: 22,
};

export const SPACING: ThemeSpacing = {
  /** xs: 4px */
  xs: SIZES.base * 0.5,
  /** s: 8px */
  s: SIZES.base * 1,
  /** sm: 16px */
  sm: SIZES.base * 2,
  /** m: 24px */
  m: SIZES.base * 3,
  /** md: 32px */
  md: SIZES.base * 4,
  /** l: 40px */
  l: SIZES.base * 5,
  /** xl: 48px */
  xl: SIZES.base * 6,
  /** xxl: 56px */
  xxl: SIZES.base * 7,
};


export const darkTheme = {
    backgroundColor: COLORS.dark,
}

export const lightTheme = {
    backgroundColor: COLORS.light,
}

export const CONTAINER_PRIMARY = {
    backgroundColor: COLORS.primary,
  };

export const container_SECONDARY = {
    borderColor: COLORS.primary,
    borderWidth: 2,
  };

export const CONTAINER_TERTIARY = {};


export const TEXT_SECONDARY =  {
    color: COLORS.primary80,
  };

export const TEXT_TERTIARY = {
    color: 'gray',
  }

const appTheme = { COLORS, SIZES, FONTS, SPACING, LINE_HEIGHTS, WEIGHTS };

export default appTheme;