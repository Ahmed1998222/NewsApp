import { selectIsDark } from '@store/slices/themSlice';
import React from 'react';
import { View , StyleSheet} from 'react-native';
import { useSelector } from 'react-redux';
 import { CustomText } from '..';
import theme from '@assets/theme/theme';

export const Section = ({
  title,
  subTitleComp,
  children,
  style,
  cardStyle,
}: ISectionProps) => {
  const isDark = useSelector(selectIsDark);
  return (
    <View style={[styles.container, style]}>
      <View style={styles.titleCont}>
        <CustomText size={18}>{title}</CustomText>
      </View>
      {subTitleComp && subTitleComp()}
      <View
        style={[styles.cardCont, isDark && styles.darkBackground, cardStyle]}>
        {children}
      </View>
    </View>
  );
};
const styles =  StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  cardCont: {
    justifyContent: 'flex-start',
    backgroundColor: theme.colors.white,
    borderRadius: 12,
    paddingVertical: 16,
    paddingStart: 16,
    paddingEnd: 23,
    marginTop: 16,
  },
  darkBackground: {
    backgroundColor: theme.colors.primary,
  },
  titleCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
export interface ISectionProps {
  children?: any;
  style?: any;
  cardStyle?: any;
  title?: string;
  subTitleComp?: any;
}