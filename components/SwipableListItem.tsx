import { Text, ViewToken} from "react-native";
import React, {memo} from "react";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  PanGestureHandlerProps,
  TouchableOpacity,
} from "react-native-gesture-handler";
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import {FontAwesome5} from "@expo/vector-icons";

import {COLORS, FONTS, SIZES} from "@constants/theme";
import globalStyles from "@constants/styles";
import useTheme from "@features/theme/useTheme";
import {FavoritesProps} from "types";
import IconButton from "./IconButton";

interface ListItemProps
  extends Pick<PanGestureHandlerProps, "simultaneousHandlers"> {
  item: FavoritesProps;
  viewableItems?: Animated.SharedValue<ViewToken[]>;
  onDismiss: (id: string) => void;
  onPress?: () => void;
}

const TRANSLATE_X_THRESHOLD = -SIZES.width * 0.3;
const LIST_ITEM_HEIGHT = 70;

const SwipeableListItem: React.FC<ListItemProps> = ({
  item,
  viewableItems,
  onDismiss,
  simultaneousHandlers,
  onPress,
}) => {
  const {colors} = useTheme();
  const styles = globalStyles({colors, LIST_ITEM_HEIGHT});
  const translateX = useSharedValue(0);
  const itemHeight = useSharedValue(LIST_ITEM_HEIGHT);
  const opacity = useSharedValue(1);

  const panGestureEvent =
    useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
      onStart: event => {
        translateX.value = withTiming(0);
      },
      onActive: event => {
        "worklet";
        const newTranslateX = event.translationX;
        if (newTranslateX <= 0) {
          translateX.value = newTranslateX;
        }
      },
      onEnd: event => {
        const shouldClose = translateX.value < TRANSLATE_X_THRESHOLD;
        if (shouldClose) {
          translateX.value = withTiming(-SIZES.width, {duration: 200});
          itemHeight.value = withTiming(0, {duration: 200});
          opacity.value = withTiming(0, undefined, isFinished => {
            if (isFinished) {
              runOnJS(onDismiss)(item.id);
            }
          });
        } else {
          translateX.value = withTiming(0);
        }
      },
    });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
      ],
    };
  });

  const rIconContainerStyle = useAnimatedStyle(() => {
    const opacityX = withTiming(
      translateX.value < TRANSLATE_X_THRESHOLD ? 1 : 0,
    );
    return {opacity: opacityX};
  });

  const rContainerStyle = useAnimatedStyle(() => {
    return {
      height: itemHeight.value,
      opacity: opacity.value,
    };
  });

  return (
    <Animated.View style={[styles.listItemContainer, rContainerStyle]}>
      <Animated.View style={[styles.iconContainer, rIconContainerStyle]}>
        <IconButton
          containerStyle={{}}
          onPress={() => {}}
          iconComponent={
            <FontAwesome5
              name="trash"
              size={LIST_ITEM_HEIGHT * 0.4}
              color={COLORS.error}
            />
          }
        />
      </Animated.View>
      <PanGestureHandler
        simultaneousHandlers={simultaneousHandlers}
        onGestureEvent={panGestureEvent}
      >
        <Animated.View style={[styles.listItem, rStyle]}>
          <TouchableOpacity onPress={onPress}>
            <Text style={styles.listItemTitle}>{item.title}</Text>
          </TouchableOpacity>
        </Animated.View>
      </PanGestureHandler>
    </Animated.View>
  );
};

export default memo(SwipeableListItem);
