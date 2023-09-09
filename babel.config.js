module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "expo-router/babel",
      "react-native-reanimated/plugin",
      [
        "module-resolver",
        {
          alias: {
            "@components": "./components",
            "@utils": "./utils",
            "@assets": "./assets",
            "@constants": "./constants",
            "@hooks": "./hooks",
            "@types": "./types",
            "@global-state": "./global-state",
            "@theme": "./theme",
            "@i18n": "./i18n",
            "@config": "./config",
            "@api": "./global-state/api",
            "@helpers": "./helpers",
            "@features": "./global-state/features",
            "@models": "./Models",
            "@lib": "./lib",
          },
        },
      ],
    ],
  };
};
