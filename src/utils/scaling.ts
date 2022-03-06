import { Dimensions, PixelRatio, Platform } from 'react-native';
export const { width, height } = Dimensions.get('window');
export const guidelineBaseWidth = 375;
export const guidelineBaseHeight = 812;
export const SCREEN_WIDTH = Dimensions.get('screen').width;
export const SCREEN_HEIGHT = Dimensions.get('screen').height;

export const scale = (size: number) => {
  return (width / guidelineBaseWidth) * size;
};
export const scaleHeight = (size: number) => {
  return (height / guidelineBaseHeight) * size;
};
export const scaleWidth = (size: number, factor = 0.5) => {
  return size + (scale(size) - size) * factor;
};

export const scaleFontSize = (size: number) => {
  const newSize = size * (width / guidelineBaseWidth);
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};

export const capitalizeFirstLetter = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const capitalize = (str: string) => {
  const arr = str.split(' ');

  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }

  //Join all the elements of the array back into a string
  //using a blank space as a separator
  const str2 = arr.join(' ');
  return str2;
};

export const formatDate = (date: string) => {
  let d = new Date(date.split('T')[0]);
  let today = d.toDateString().split(' ');
  return today[0] + ' ' + today[2] + ', ' + today[1];
};

export const formatNumber = (num: number) => (num < 10 ? '0' + num : num);
