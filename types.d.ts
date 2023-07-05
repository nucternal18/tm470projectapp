import {
  Animated,
  ColorValue,
  FlexStyle,
  OpaqueColorValue,
  ScaledSize,
  TextStyle,
  ViewStyle,
} from "react-native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  DefaultNavigatorOptions,
  NavigatorScreenParams,
  ParamListBase,
  RouteConfig,
  StackNavigationState,
} from "@react-navigation/native";
import {
  StackNavigationEventMap,
  StackNavigationOptions,
  StackScreenProps,
} from "@react-navigation/stack";
import { Control, UseFormReset } from "react-hook-form";

// generic stack routes type
export type StackRoutesType<ParamList extends ParamListBase> = Array<
  RouteConfig<
    ParamList,
    keyof ParamList,
    StackNavigationState<ParamList>,
    StackNavigationOptions,
    StackNavigationEventMap
  >
>;

// generic typing for stack navigator options
type StackNavigatorOptions<ParamList extends ParamListBase> =
  DefaultNavigatorOptions<
    ParamList,
    StackNavigationState<ParamList>,
    StackNavigationOptions,
    StackNavigationEventMap
  >;

export type SubNavigator<T extends ParamListBase> = {
  [K in keyof T]: { screen: K; params?: T[K] };
}[keyof T];

export type StackProps<
  T extends ParamListBase,
  S extends keyof T
> = StackScreenProps<T, S>;

export type BottomTabProps<
  T extends ParamListBase,
  S extends keyof T
> = BottomTabScreenProps<T, S>;

export type RootStackParamList = {
  Auth: NavigatorScreenParams<AccountStackParamList>;
  Main: NavigatorScreenParams<MainStackParamList>;
  Help: undefined;
  WalkThrough: undefined;
};

export type AccountStackParamList = {
  Welcome: undefined;
  AuthMain: undefined;
  SignUp: undefined;
  SignIn: undefined;
  ForgotPassword: undefined;
  NewPassword: undefined;
  ConfirmEmail: undefined;
  Main: NavigatorScreenParams<MainStackParamList>;
};

export type MainStackParamList = {
  CountyDistrict: NavigatorScreenParams<CountyDistrictStackParamList>;
  UserProfile: NavigatorScreenParams<ProfileStackParamList>;
  Notifications: undefined;
  UserMessages: NavigatorScreenParams<MessagesStackParamList>;
};

export type CountyDistrictStackParamList = {
  County: {
    id: string;
    name: string;
  };
  District: {
    id: string;
    name: string;
  };
  Section: {
    id: string;
    name: string;
  };
  SubSection: { id: string; name: string };
  Search: undefined;
  Help: undefined;
  Modal: { id: string; name: string };
};

export type CountyDistrictScreenProps<
  T extends keyof CountyDistrictStackParamList
> = StackScreenProps<CountyDistrictStackParamList, T>;

export type CountyDistrictStackScreenProps =
  StackScreenProps<CountyDistrictStackParamList>;

export type ProfileStackParamList = {
  Settings: undefined;
  Favorites: undefined;
  Profile: undefined;
  Camera: undefined;
  Help: undefined;
  Details: undefined;
  ChangePassword: undefined;
  Preferences: undefined;
  MyAlerts: undefined;
  MySubscriptions: undefined;
  Modal: CountyDistrictStackParamList["Modal"];
};

export type ProfileStackScreenProps<T extends keyof ProfileStackParamList> =
  CompositeScreenProps<
    StackScreenProps<ProfileStackParamList, T>,
    CountyDistrictScreenProps<keyof CountyDistrictStackParamList>
  >;

export type MainStackScreenProps = CompositeScreenProps<
  BottomTabScreenProps<MainStackParamList, "CountyDistrict">,
  CompositeScreenProps<
    StackScreenProps<CountyDistrictStackParamList>,
    StackScreenProps<MessagesStackParamList>
  >
>;

export type MessagesStackParamList = {
  Messages: undefined;
  ReadMessage: { id: string } | undefined;
};

export enum ROLE {
  PARTNER = "PARTNER",
  COUNTY_EDITOR = "COUNTY_EDITOR",
  SS_EDITOR = "SS_EDITOR",
  USER = "USER",
}

export type CurrentUser = {
  id?: string;
  name?: string;
  email?: string;
  isAdmin?: boolean;
  isSuperAdmin?: boolean;
  passwordInput?: string;
  role?: ROLE;
  contactNumber?: string;
  imageUrl?: string;
  imageFile?: string | ArrayBuffer | null;
  county?: string;
  postCode?: string;
  organisation?: {
    id?: string;
    name?: string;
    userId?: string;
    createdAt?: string;
  };
  district?: string;
  emailVerified?: boolean;
  acceptTermsAndConditions?: boolean;
  isNewlyRegistered?: boolean;
};
export type UpdatedUser = {
  id?: string;
  name?: string;
  email?: string;
  isAdmin?: boolean;
  isSuperAdmin?: boolean;
  password?: string;
  newPassword?: string;
  role?: ROLE;
  contactNumber?: string;
  imageUrl?: string;
  imageFile?: string | ArrayBuffer | null;
  county?: string;
  postCode?: string;
  organisation?: string;
  district?: string;
  emailVerified?: boolean;
  acceptTermsAndConditions?: boolean;
  isNewlyRegistered?: boolean;
};

export interface AuthState {
  message: string;
  token: string | null;
  error: ({ success: boolean; isError: boolean } & Error) | undefined;
  isLoading: boolean;
  isAuthenticated: boolean;
  isNewlyRegistered?: boolean;
}

export type UserState = {
  currentUser: CurrentUser | null;
  message: string;
  error: Error | undefined;
};

export enum SCREENS {
  COUNTY = "County",
  DISTRICT = "District",
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

export type DistrictDataProps = {
  id: string;
  name: string;
  imageUrl: string;
  logoIcon: string;
  createdAt: string;
  updatedAt: string;
  districtSections: SectionProps[];
};

export type CountyDataProps = {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  imageUrl: string;
  logoIcon: string;
  published: boolean;
  viewCount: number;
  lep: LEP;
  welcome: Welcome;
  news: News;
  districts: DistrictDataProps[];
  comments: Comment[];
  sections: SectionProps[];
};

export type countyDistrictLocationsProps = {
  title: string;
  latitude: number;
  longitude: number;
};

export interface IFormData {
  name?: string;
  email?: string;
  password?: string;
  newPassword?: string;
  confirmPassword?: string;
  role?: string;
  isAdmin?: boolean;
  emailVerified?: boolean;
  acceptTermsAndConditions?: boolean;
  county?: string;
  district?: string;
  contactNumber?: string;
  postCode?: string;
  imageUrl?: string;
  acceptContactRequest?: boolean;
  organisation?: string;
  rememberMe?: boolean;
}

export type Welcome = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
};

export type LEP = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
};

export type News = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
};

export type SectionProps = {
  id: string;
  name: string;
  title?: string;
  content?: string;
  imageUrl?: string;
  isSubSection?: boolean;
  isLive?: boolean;
  countyId?: string;
  districtId?: string;
  subsections?: SubSectionProps[];
};
export type SubSectionProps = {
  id: string;
  name: string;
  title?: string;
  content?: string;
  imageUrl?: string;
  isSubSubSection?: boolean;
  isLive?: boolean;
  sectionId?: string;
  subSection?: SubSubSectionProps[];
};

export type SubSubSectionProps = {
  id: string;
  name: string;
  title?: string;
  content?: string;
  imageUrl?: string;
  isLive?: boolean;
};

export type EconomicDataWidgetProps = {
  id: string;
  title: string;
  stats: string;
  descriptionLine1: string;
  descriptionLine2: string;
  linkName: string;
  linkUrl: string;
  createdAt: string;
  updatedAt: string;
};

export type EconomicData = {
  id: string;
  createdAt: string;
  updatedAt: string;
  economicDataWidgets: EconomicDataWidgetProps[];
};

export type Comment = {
  id: string;
  createdAt: string;
  updatedAt: string;
  comment: string;
  author: Partial<CurrentUser>;
  authorId?: string;
};

export type ContentTypes = "Welcome" | "LEP" | "News";

export interface ContentState {
  welcome: Welcome | null;
  news: News | null;
  lep: LEP | null;
  county: CountyDataProps | null;
  district: DistrictDataProps | null;
  type: ContentTypes | null;
  message: string;
  isLoading: boolean;
  content: {
    id: string;
    title: string;
    content: string;
    type?: string;
    screen?: string;
    countyId?: string;
    isFavorite?: boolean;
    favContentId?: string;
  } | null;
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

export type feed = {
  counties: CountyDataProps[];
  sections: SectionProps[];
  districtSections: SectionProps[];
  subSections: SubSectionProps[];
};

export type UserDetail = {
  name?: string;
  email?: string;
  postcode?: string;
  organisation?: string;
  currentPassword?: string;
  newPassword?: string;
  confirmPassword?: string;
};

export interface IUserDetailProps {
  control: Control<UserDetail, any>;
  reset?: UseFormReset<UserDetail>;
  prependIcon?: React.ReactNode;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "numeric" | "email-address" | "phone-pad";
  value?: string;
  dname: any;
  rules?: any;
  placeholder?: string;
  label?: string;
}

export type MessageProps = {
  id: string;
  createdAt: string;
  updatedAt: string;
  from: string;
  to: string;
  subject: string;
  message: string;
  isRead: boolean;
  isArchived: boolean;
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
