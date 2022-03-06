import theme from '../../../assets/theme/theme';
import { scaleHeight } from '../../../utils/scaling';
import * as React from 'react';
import { StyleSheet, TextProps, StyleProp } from 'react-native';
import { CustomText } from '../CustomText/CustomText';

interface AppTextProps extends TextProps {
  children: any;
  style?: StyleProp<TextProps>;
}

export const ErrorText = ({ children, style }: AppTextProps) => {
  return (
    <CustomText style={[styles.error, style]} size={14}>
      {children}
    </CustomText>
  );
};

const styles = StyleSheet.create({
  error: {
    color: theme.colors.error,
    textAlign: 'center',
    marginTop: scaleHeight(20),
  },
});
