import {Platform, StyleSheet} from "react-native";
import {ThemeColors} from "types";
import {COLORS, FONTS, SIZES} from "./theme";

export default ({
  colors,
  showButtons,
  isList = false,
  LIST_ITEM_HEIGHT,
}: {
  colors: ThemeColors;
  showButtons?: boolean;
  isList?: boolean;
  LIST_ITEM_HEIGHT?: number;
}) =>
  StyleSheet.create({
    bottomSheetContainer: {
      height: SIZES.height,
      width: "100%",
      backgroundColor: colors.background,
      position: "absolute",
      top: SIZES.height,
      borderRadius: 25,
    },
    line: {
      width: 75,
      height: 4,
      backgroundColor: colors.text,
      alignSelf: "center",
      marginVertical: 15,
      borderRadius: 2,
    },
    buttonContainer: {
      width: SIZES.width,
      flexDirection: "column",
      margin: SIZES.radius,
      paddingVertical: SIZES.padding,
    },
    buttonContTitle: {
      ...FONTS.h2,
      color: colors.text,
    },
    content: {
      padding: SIZES.base,
    },
    contentText: {
      ...FONTS.body2,
      color: colors.text,
      textAlign: "justify",
      marginBottom: SIZES.base * 2,
    },
    container: {
      flex: 1,
    },
    contentContainer: {
      flex: 1,
      backgroundColor: colors.background,
      alignItems: "center",
      padding: SIZES.base * 2,
    },
    customInputContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      height: SIZES.height * 0.06,
      paddingHorizontal: SIZES.radius,
      borderRadius: SIZES.radius,
      backgroundColor: COLORS.lightGrey,
    },
    error: {
      color: COLORS.error,
      alignSelf: "stretch",
    },
    headerContainer: {
      width: "100%",
      height: showButtons ? SIZES.height * 0.3 : SIZES.height * 0.2,
      alignItems: "center",
      backgroundColor: COLORS.light80,
    },
    headerTitle: {
      fontWeight: "bold",
      ...FONTS.h1,
      color: colors.secondary,
      letterSpacing: 1,
    },
    headerSubtitle: {
      ...FONTS.body4,
      color: COLORS.primaryLight100,
    },
    imageContainer: {
      width: "100%",
      height: showButtons ? "75%" : "100%",
    },
    image: {
      height: "100%",
      width: "100%",
    },
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      height: SIZES.height * 0.06,
      width: "100%",
    },
    inputMultiline: {
      minHeight: 100,
      textAlignVertical: "top",
    },
    iconsContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    iconButtonContainer: {
      alignSelf: "flex-start",
      padding: SIZES.padding,
    },
    iconContainer: {
      height: LIST_ITEM_HEIGHT,
      width: LIST_ITEM_HEIGHT,
      position: "absolute",
      right: "10%",
      justifyContent: "center",
      marginBottom: SIZES.base,
      alignItems: "center",
    },
    item: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: colors.primary,
      padding: SIZES.radius,
      borderRadius: SIZES.radius,
      marginBottom: SIZES.base,
    },
    itemText: {
      ...FONTS.body2,
      marginLeft: SIZES.base,
      color: colors.text,
    },
    itemContent: {
      flexDirection: "row",
      alignItems: "center",
    },
    label: {
      fontSize: SIZES.h5,
      color: colors.label,
      marginBottom: SIZES.base,
    },
    listItemContainer: {
      marginBottom: SIZES.base,
    },
    listItem: {
      backgroundColor: COLORS.primaryDark200,
      paddingVertical: SIZES.padding,
      paddingLeft: SIZES.radius,
      height: LIST_ITEM_HEIGHT,
      width: SIZES.width * 0.95,
      marginBottom: SIZES.base,
    },
    listItemTitle: {
      ...FONTS.h3,
      color: COLORS.primaryLight50,
    },
    mapContainer: {
      height: "50%",
      margin: SIZES.radius,
    },
    messageItemContainer: {
      width: "100%",
    },
    messageItem: {
      backgroundColor: colors.primary,
      paddingLeft: SIZES.radius,
      width: SIZES.width,
    },
    messageItemTitle: {
      ...FONTS.h4,
      color: colors.text,
    },
    messageItemSubject: {
      ...FONTS.body3,
      color: colors.text,
    },
    messageItemDate: {},
    noMessageItem: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    noMessageItemText: {
      ...FONTS.h3,
      color: colors.text,
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: "rgba(0,0,0,0.5)",
      paddingTop: SIZES.padding * 2,
      paddingHorizontal: SIZES.radius,
    },
    profileHeaderContainer: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: colors.background,
      paddingHorizontal: SIZES.radius,
      paddingVertical: SIZES.padding * 2,
    },
    profileHeader: {
      alignItems: "flex-start",
      paddingVertical: SIZES.radius / 2,
    },
    profileHeaderText: {
      fontSize: SIZES.h4,
      color: colors.text,
    },
    profileHeaderTitle: {
      ...FONTS.h2,
      color: colors.text,
    },
    profileHeaderImgContainer: {
      padding: SIZES.radius,
      borderRadius: 100,
      borderWidth: 2,
      marginRight: SIZES.radius,
      borderColor: colors.secondary,
      backgroundColor: colors.tertiary,
    },
    profileHeaderImg: {
      width: 50,
      height: 50,
    },
    prSectBtnCTN: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: colors.background,
      paddingVertical: SIZES.padding,
      paddingLeft: SIZES.base,
    },
    prSectBtnTxt: {
      fontSize: SIZES.body4,
      color: colors.text,
      marginLeft: SIZES.radius,
    },
    prSectBtnIcon: {
      backgroundColor: colors.tertiary,
      padding: SIZES.base / 2,
      borderRadius: 5,
    },
    screenHeaderIconCont: {
      marginBottom: SIZES.radius / 2,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    screenHeaderContainer: {
      width: "100%",
      height: SIZES.height * 0.12,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: colors.background,
      paddingHorizontal: SIZES.radius,
      paddingTop: SIZES.padding * 2,
    },
    screenTitleContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    scrollContainer: {
      minHeight: "100%",
      paddingBottom: isList ? 150 : 400,
    },
    section: {
      marginTop: SIZES.padding / 2,
      paddingHorizontal: SIZES.radius,
      paddingTop: SIZES.padding,
    },
    searchResultContainer: {
      flex: 1,
      paddingHorizontal: SIZES.padding / 2,
      backgroundColor: colors.background,
    },
    searchHeaderContainer: {
      width: "100%",
      height: SIZES.height * 0.2,
      backgroundColor: colors.background,
      paddingBottom: SIZES.padding,
      paddingHorizontal: SIZES.radius,
      paddingTop: SIZES.padding * 2,
    },
    searchInputContainer: {
      flex: 1,
      marginHorizontal: SIZES.radius / 2,
    },
    searchInput: {
      borderRadius: SIZES.radius / 2,
      borderWidth: 1,
      borderColor: colors.background,
      backgroundColor: "transparent",
      shadowColor: "#171717",
      shadowOffset: { width: -2, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },
    searchIconContainer: {
      marginBottom: SIZES.radius / 2,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    searchListCustomBtn: {
      height: 50,
      borderRadius: SIZES.radius / 1.5,
      backgroundColor: colors.primary,
      paddingHorizontal: SIZES.padding / 2,
      paddingVertical: SIZES.radius,
      alignItems: "flex-start",
      margin: SIZES.radius / 2,
      shadowColor: COLORS.primaryDark200,
      shadowOffset: { width: -2, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 5,
    },
    textInput: {
      flex: 1,
      paddingVertical: 0,
      ...FONTS.body4,
      color: COLORS.dark,
      marginHorizontal: SIZES.base,
    },
    title: {
      ...FONTS.h1,
      color: colors.text,
    },
    titleContainer: {
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: SIZES.padding / 2,
    },
    webView: {
      width: "100%",
      backgroundColor: colors.background,
      padding: SIZES.radius,
    },
  });
