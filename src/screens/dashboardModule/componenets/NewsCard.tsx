import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import theme from '../../../assets/theme/theme';
import { CustomText } from '../../../components/common';
import { selectIsDark } from '../../../store/slices/themSlice';
import { useSelector } from 'react-redux';
import { scaleHeight, scaleWidth } from '../../../utils/scaling';
import { INews } from '../../../types';
import { EDashboardModuleRoutes } from '../navigation';

const isDark = useSelector(selectIsDark);

const NewsCard = ({ item, navigate } : INewsCard) => {
  return (
    <TouchableOpacity
      onPress={() => navigate(EDashboardModuleRoutes.DetailsNews, { new: item })}
      style={[Styles.newCardCont, isDark && Styles.darkNewCard]}>
      <Image source={{ uri: item.urlToImage }} style={Styles.newImg} />
      <View style={Styles.newTxtCont}>
        <CustomText numberOfLines={2} size={14} weight="semiBold">

        </CustomText>
        <CustomText
          numberOfLines={3}
          size={12}
          color={isDark ? theme.colors.white : theme.colors.darkGray}
          style={Styles.descText}>
          {item.description}
        </CustomText>
      </View>
    </TouchableOpacity>
  );
};


export default NewsCard;
const Styles = StyleSheet.create({

  newCardCont: {
    flexDirection: 'row',
    backgroundColor: theme.colors.lightGray,
    height: scaleHeight(120),
    marginBottom: scaleHeight(15),
    borderRadius: scaleHeight(10),
    overflow: 'hidden',
    paddingBottom: scaleHeight(8),
  },
  darkNewCard: {
    backgroundColor: theme.colors.darkBlue,
  },
  newImg: {
    width: scaleWidth(120),
  },
  newTxtCont: {
    flex: 1,
    marginHorizontal: scaleWidth(10),
    marginTop: scaleHeight(10),
    marginBottom: scaleHeight(5),
  },

  descText: {
    marginTop: scaleHeight(5),
  },
});


interface INewsCard {
  navigate: any;
  item:INews;
  
}
