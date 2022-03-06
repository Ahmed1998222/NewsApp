import React, { useEffect, useState } from 'react';
import { PageView, CustomText } from '../../../../components/common';
import style from './style';
import {
  FlatList,
  TextInput,
  View,
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import theme from '../../../../assets/theme/theme';
import throttle from 'lodash.throttle';
import { stringifyError, useGetNewsMutation } from '../../../../services/newsService';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { DashboardModuleRoutes, EDashboardModuleRoutes } from '../../navigation';
import NewsCard from '../../componenets/NewsCard'
import EmptySearch from '../../componenets/EmptySearch';
import { strings } from '../../../../localization';
type ScreenProp = StackNavigationProp<DashboardModuleRoutes, EDashboardModuleRoutes.Home>;
export const HomeScreen = () => {

  const { navigate } = useNavigation<ScreenProp>();

  const [isRefreshing, setIsRefreshing] = useState(false);
  const [query, setQuery] = useState('');
  const [getNews, { data: news, isLoading, error, isError, isUninitialized }] =
    useGetNewsMutation();

  useEffect(() => {
    getNews('');
  }, [getNews]);

  const searchDelay = throttle(q => {
    getNews(q);
  }, 1000);

  const onChangeText = (str: string) => {
    searchDelay(str);
    setQuery(str);
  };



  if (isError) {
    <View style={style.errorCont}>
      <CustomText color={theme.colors.error} textAlign="center">
        {stringifyError(error)}
      </CustomText>
    </View>;
  }

  return (
    <PageView style={style.layout}>
      <View style={style.searchCont}>
        <EvilIcons
          name="search"
          color={theme.colors.lightBlue}
          size={25}
        />
        <TextInput
          value={query}
          onChangeText={onChangeText}
          placeholder={strings('search')}
          style={style.searchInput}
          autoCorrect={false}
        />
        {query ? (
          <EvilIcons
            name="close-circle"
            color={theme.colors.darkGray}
            size={20}
            onPress={() => onChangeText('')}
          />
        ) : null}
      </View>
      <FlatList
        refreshing={isRefreshing}
        onRefresh={() => {
          setIsRefreshing(true);
          getNews('').then(() => {
            setIsRefreshing(false);
          });
        }}
        data={news?.articles}
        renderItem={({ item }) => (<NewsCard item={item} navigate={navigate} />)}
        ListEmptyComponent={() => (<EmptySearch isLoading={isLoading} isUninitialized={isUninitialized} />)}
      />
    </PageView>
  );
};
