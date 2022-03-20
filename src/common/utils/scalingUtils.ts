import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];

// iPhone 11 Pro Design
const DESIGN_WIDTH = 375;
const DESIGN_HEIGHT = 812;

/**
 * Linear scale based on device's width
 * @param size The size to scale
 * @returns The scaled size
 */
const scale = (size: number): number => (shortDimension / DESIGN_WIDTH) * size;

/**
 * Linear scale based on device's height
 * @param size The size to scale
 * @returns The scaled size
 */
const verticalScale = (size: number): number =>
  (longDimension / DESIGN_HEIGHT) * size;

/**
 * Scale by controlled factor based on device's width
 * @param size The size to scale
 * @param factor The factor to scale default to 0.5
 * @returns The scaled size
 */
const moderateScale = (size: number, factor = 0.5): number =>
  size + (scale(size) - size) * factor;

/**
 * Scale by controlled factor based on device's height
 * @param size The size to scale
 * @param factor The factor to scale default to 0.5
 * @returns The scaled size
 */
const moderateVerticalScale = (size: number, factor = 0.5): number =>
  size + (verticalScale(size) - size) * factor;

export {
  scale as s,
  verticalScale as vs,
  moderateScale as ms,
  moderateVerticalScale as mvs,
};
