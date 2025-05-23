const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { wrapWithReanimatedMetroConfig } = require('react-native-reanimated/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const baseConfig = {
  // Your additional custom config here, if any
};

const mergedConfig = mergeConfig(getDefaultConfig(__dirname), baseConfig);

// Wrap the final config with reanimated's metro config wrapper
module.exports = wrapWithReanimatedMetroConfig(mergedConfig);
