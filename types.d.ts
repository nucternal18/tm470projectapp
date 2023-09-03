import { FeedSectionWithSubSectionSchema, FeedWithDistrictsSchemaProps } from './Models/Feed';
import {
  Animated,
  ColorValue,
  FlexStyle,
  OpaqueColorValue,
  ScaledSize,
  TextStyle,
  ViewStyle,
} from "react-native";

import { Control, UseFormReset } from "react-hook-form";
import { PartialUserSchemaWithIdProps } from '@models/User';


export enum ROLE {
  PARTNER = "PARTNER",
  COUNTY_EDITOR = "COUNTY_EDITOR",
  SS_EDITOR = "SS_EDITOR",
  USER = "USER",
}



export interface AuthState {
  message: string;
  token: string | null;
  error: ({ success: boolean; isError: boolean } & Error) | undefined;
  isLoading: boolean;
  isAuthenticated: boolean;
  isNewlyRegistered?: boolean;
}

export type UserState = {
  currentUser: PartialUserSchemaWithIdProps | null;
  message: string;
  error: Error & { success: boolean; isError: boolean } | undefined;
};

export enum SCREENS {
  FEED = "Feed",
  SECTION = "Section",
  SUBSECTION = "SubSection",
  SEARCH = "Search",
  HELP = "Help",
  MODAL = "Modal",
}

export type SearchDataProps = {
  id: string;
  name: string;
  districtId?: string;
  sectionId?: string;
  content?: string;
  screen: SCREENS;
  sections?: "CountySectionSubSection" | "DistrictSection";
};



export type Comment = {
  id: string;
  createdAt: string;
  updatedAt: string;
  comment: string;
  author: Partial<CurrentUser>;
  authorId?: string;
};

export interface FeedState {
  feed: FeedWithDistrictsSchemaProps | null;
  isLoading: boolean;
  error: ({ success: boolean; isError: boolean } & Error) | undefined;
}

export type FavoritesProps = {
  id: string;
  title: string;
  screen: string;
  contentId: string;
  countyId?: string;
  createdAt: string;
  updatedAt: string;
};

export interface ThemeWeights {
  text: TextStyle["fontWeight"];
  h1?: TextStyle["fontWeight"];
  h2?: TextStyle["fontWeight"];
  h3?: TextStyle["fontWeight"];
  h4?: TextStyle["fontWeight"];
  h5?: TextStyle["fontWeight"];
  p?: TextStyle["fontWeight"];

  thin: TextStyle["fontWeight"];
  extralight: TextStyle["fontWeight"];
  light: TextStyle["fontWeight"];
  normal: TextStyle["fontWeight"];
  medium: TextStyle["fontWeight"];
  semibold?: TextStyle["fontWeight"];
  bold?: TextStyle["fontWeight"];
  extrabold?: TextStyle["fontWeight"];
  black?: TextStyle["fontWeight"];
}

export interface ThemeSpacing {
  xs: number;
  s: number;
  sm: number;
  m: number;
  md: number;
  l: number;
  xl: number;
  xxl: number;
}

export type TWeight =
  /** fontWeight: 400 */
  | "normal"
  /** fontWeight: 100 */
  | "thin"
  /** fontWeight: 200 */
  | "extralight"
  /** fontWeight: 300 */
  | "light"
  /** fontWeight: 500 */
  | "medium"
  /** fontWeight: 600 */
  | "semibold"
  /** fontWeight: 700 */
  | "bold"
  /** fontWeight: 800 */
  | "extrabold"
  /** fontWeight: 900 */
  | "black";

export interface ITheme {
  colors: ThemeColors;
  gradients: ThemeGradients;
  sizes: ThemeSizes & ThemeSpacing & ICommonTheme["sizes"];
  fonts: ThemeFonts;
  weights: ThemeWeights;
  lines: ThemeLineHeights;
}
export interface ICommonTheme {
  fonts: ThemeFonts;
  weights: ThemeWeights;
  lines: ThemeLineHeights;
  sizes: {
    width: ScaledSize["width"];
    height: ScaledSize["height"];
  };
}

export interface IThemeProvider {
  children?: React.ReactNode;
  theme?: ITheme;
  setTheme?: (theme?: ITheme) => void;
}

export interface ThemeColors {
  text: ColorValue;
  primary: ColorValue;
  secondary: ColorValue;
  tertiary: ColorValue;
  black: ColorValue;
  white: ColorValue;
  light: ColorValue;
  dark: ColorValue;
  gray: ColorValue;
  danger: ColorValue;
  warning: ColorValue;
  success: ColorValue;
  info: ColorValue;
  card: ColorValue;
  background: ColorValue;
  shadow: ColorValue;
  overlay: ColorValue;
  focus: ColorValue;
  input: ColorValue;
  switchOn: ColorValue;
  switchOff: ColorValue;
  checkbox: string[];
  checkboxIcon: ColorValue;
  facebook: ColorValue;
  twitter: ColorValue;
  dribbble: ColorValue;
  icon: ColorValue;
  blurTint: "light" | "dark" | "default";
  link: ColorValue;
}

export interface ThemeGradients {
  primary?: string[];
  secondary?: string[];
  tertiary?: string[];
  black?: string[];
  white?: string[];
  light?: string[];
  dark?: string[];
  gray?: string[];
  danger?: string[];
  warning?: string[];
  success?: string[];
  info?: string[];
  divider?: string[];
  menu?: string[];
}

export interface ThemeSizes {
  base: number;
  font: number;
  text?: number;
  radius: number;
  padding: number;
  margin: number;

  largeTitle: number;
  h1: number;
  h2: number;
  h3: number;
  h4: number;
  h5: number;
  p: number;

  body1: number;
  body2: number;
  body3: number;
  body4: number;
  body5: number;
  body6: number;
  body7: number;

  width: number;
  height: number;

  buttonBorder: number;
  buttonRadius: number;
  socialSize: number;
  socialRadius: number;
  socialIconSize: number;

  inputHeight: number;
  inputBorder: number;
  inputRadius: number;
  inputPadding: number;

  shadowOffsetWidth: number;
  shadowOffsetHeight: number;
  shadowOpacity: number;
  shadowRadius: number;
  elevation: number;

  cardRadius: number;
  cardPadding: number;

  imageRadius: number;
  avatarSize: number;
  avatarRadius: number;

  switchWidth: number;
  switchHeight: number;
  switchThumb: number;

  checkboxWidth: number;
  checkboxHeight: number;
  checkboxRadius: number;
  checkboxIconWidth: number;
  checkboxIconHeight: number;

  linkSize: number;

  multiplier: number;
}

export interface ThemeFonts {
  text: string;
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  h5: string;
  p: string;
  thin: string;
  extralight: string;
  light: string;
  normal: string;
  medium: string;
  bold: string;
  semibold: string;
  extrabold: string;
  black: string;
}

export interface ThemeLineHeights {
  text: number;
  h1: number;
  h2: number;
  h3: number;
  h4: number;
  h5: number;
  p: number;
}

export interface ThemeColors {
  text: ColorValue;
  title: ColorValue;
  black: ColorValue;
  gray: ColorValue;
  danger: ColorValue;
  warning: ColorValue;
  info: ColorValue;
  card: ColorValue;
  background: ColorValue;
  overlay: ColorValue;
  focus: ColorValue;
  input: ColorValue;
  switchOn: ColorValue;
  switchOff: ColorValue;
  checkbox: string[];
  checkboxIcon: ColorValue;
  facebook: ColorValue;
  twitter: ColorValue;
  dribbble: ColorValue;
  icon: ColorValue;
  blurTint: "light" | "dark" | "default";
  link: ColorValue;
  label: ColorValue;
  // Error
  error?: ColorValue;
  error80?: ColorValue;
  error60?: ColorValue;
  error20?: ColorValue;
  error08?: ColorValue;

  // Primary
  primary: ColorValue;
  primary80?: ColorValue;
  primary60?: ColorValue;
  primary20?: ColorValue;
  primary08?: ColorValue;
  primaryDark100?: ColorValue;
  primaryDark200?: ColorValue;
  primaryDark300?: ColorValue;
  primaryDark400?: ColorValue;
  primaryDark500?: ColorValue;
  primaryDark600?: ColorValue;
  primaryDark700?: ColorValue;
  primaryDark800?: ColorValue;
  primaryDark900?: ColorValue;
  primaryLight50?: ColorValue;
  primaryLight100?: ColorValue;
  primaryLight200?: ColorValue;
  primaryLight300?: ColorValue;
  primaryLight400?: ColorValue;
  primaryLight500?: ColorValue;
  primaryLight600?: ColorValue;
  primaryLight700?: ColorValue;
  primaryLight800?: ColorValue;

  // Secondary
  secondary: ColorValue;
  secondary80?: ColorValue;
  secondary60?: ColorValue;
  secondary20?: ColorValue;
  secondary08?: ColorValue;

  // Tertiary
  tertiary50?: ColorValue;
  tertiary100?: ColorValue;
  tertiary200?: ColorValue;
  tertiary300?: ColorValue;
  tertiary400?: ColorValue;
  tertiary500?: ColorValue;
  tertiary600?: ColorValue;
  tertiary700?: ColorValue;
  tertiary800?: ColorValue;
  tertiary900?: ColorValue;

  // Success
  success: ColorValue;
  success80?: ColorValue;
  success60?: ColorValue;
  success20?: ColorValue;
  success08?: ColorValue;

  // Dark
  dark: ColorValue;
  dark80?: ColorValue;
  dark60?: ColorValue;
  dark20?: ColorValue;
  dark08?: ColorValue;

  // Grey
  grey?: ColorValue;
  grey80?: ColorValue;
  grey60?: ColorValue;
  grey20?: ColorValue;
  grey08?: ColorValue;

  // Light Grey
  lightGrey?: ColorValue;
  lightGrey80?: ColorValue;
  lightGrey60?: ColorValue;
  lightGrey20?: ColorValue;
  lightGrey08?: ColorValue;

  // Light
  white: ColorValue;
  light: ColorValue;
  light80?: ColorValue;
  light60?: ColorValue;
  light20?: ColorValue;
  light08?: ColorValue;

  // Support 1
  support1?: ColorValue;
  support1_08?: ColorValue;

  // Support 2
  support2?: ColorValue;
  support2_08?: ColorValue;

  // Support 3
  support?: ColorValue;
  support3_08?: ColorValue;

  // Support 4
  support4?: ColorValue;
  support4_08?: ColorValue;

  // Support 5
  support5?: ColorValue;
  support5_08?: ColorValue;

  // Shadow
  shadow: ColorValue;
  shadow08?: ColorValue;

  // Tab Bar active tint color
  tabBarActiveTint?: OpaqueColorValue;
}

// Spacing types
export interface ISpacing
  extends Pick<
    FlexStyle,
    | "margin"
    | "marginVertical"
    | "marginHorizontal"
    | "marginLeft"
    | "marginRight"
    | "marginTop"
    | "marginBottom"
    | "padding"
    | "paddingVertical"
    | "paddingHorizontal"
    | "paddingLeft"
    | "paddingRight"
    | "paddingTop"
    | "paddingBottom"
  > {}

/**
 * ## Switch
 * Default usage:
 * ```
 * <Switch checked />
 * ```
 *
 */
export interface ISwitchProps extends ISpacing {
  /**
   * id for testID & accesibilityLabel
   */
  id?: string;
  /**
   * Switch checked value
   */
  checked?: boolean;
  /**
   * Renders the Switch component with custom style, overwrite existing/predefined styles
   * @see https://reactnative.dev/docs/view#style
   */
  style?: ViewStyle;
  /**
   * Renders the thumb color value
   */
  thumbColor?: ColorValue;
  /**
   * Renders the switch active thumb backgroundColor value
   */
  activeFillColor?: ColorValue;
  /**
   * Renders the switch inactive thumb backgroundColor value
   */
  inactiveFillColor?: ColorValue;
  /**
   * Renders the thumb style
   * @see https://reactnative.dev/docs/view#style
   */
  thumbStyle?: ViewStyle;
  /**
   * Renders the switch container style
   * @see https://reactnative.dev/docs/view#style
   */
  switchStyle?: ViewStyle;
  /**
   * Switch onPress callback passing the checked value as params
   */
  onPress?: (checked: boolean) => void;
  /**
   * Provides haptic feedback when toggling the switch
   * @see https://docs.expo.io/versions/latest/sdk/haptics/
   */
  haptic?: boolean;
  /**
   * Duration in ms for thumb animated position
   */
  duration?: Animated.TimingAnimationConfig["duration"];
}

export type HeaderProps<T> = {
  id: number;
  icon: React.ReactNode;
  buttonText: string;
  ref: React.RefObject<T>;
};
