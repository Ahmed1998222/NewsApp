import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import theme from '@assets/theme/theme';
import { CustomText, Skelton } from '@components/common';
import { scaleHeight, scaleWidth } from '@utils/scaling';


const EmptySearch = ({ isUninitialized, isLoading }) => {
  return !isUninitialized ? (
    isLoading ? (
      <Skelton />
    ) : (
      <View style={Styles.emptySearchCont}>
        <Image
          source={{
            uri: 'https://www.maxpixel.net/static/photo/1x/Http-News-Html-Error-404-Was-Not-Found-Page-1349562.png',
          }}
          style={Styles.emptySearchIcon}
          resizeMode="contain"
        />
        <CustomText size={16} weight="semiBold" color={theme.colors.error}>
          empty Search
        </CustomText>
        <CustomText marginTop={5} size={14} color={theme.colors.darkGray}>
          seek for another news
        </CustomText>
      </View>
    )
  ) : isLoading ? (
    <Skelton />
  ) : null;
};



export default EmptySearch;
const Styles = StyleSheet.create({

  emptySearchIcon: {
    width: scaleWidth(120),
    height: scaleHeight(120),
    marginBottom: scaleHeight(15),
  },
  emptySearchCont: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scaleHeight(50),
  },
});

interface INewsCard {
  isUninitialized: boolean;
  isLoading: boolean
}
