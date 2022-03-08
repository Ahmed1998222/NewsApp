
import React from 'react';
import { CustomText, PageView, Section } from '../../../../components/common';
import styles from './style';
import { LANGUAGES_OPTIONS, THEMES_OPTIONS } from '../../../../utils/constants';
import {
  changeLanguage,
  getCurrentLanguage,
  strings,
} from '../../../../localization';
import { IOption } from '../../../../types/index';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsDark, selectTheme, setTheme } from '../../../../store/slices/themSlice';
import RadioGroup from '../../../../components/form/RadioGroup/RadioGroup'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Text } from 'react-native'
import Row from '@components/common/row';
import CurrentColor from '@assets/theme/theme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { shareApp } from '../../helper/helper';
// type ScreenProp = StackNavigationProp<ConfigModuleRoutes, EConfigModuleRoutes.Settings>;

export const SettingsScreen = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();
  const isDark = useSelector(selectIsDark);

  return (
    <PageView style={styles.layout}>
      <Section title={strings('languages.title')}>
        <RadioGroup
          initialValue={LANGUAGES_OPTIONS.find(
            value => value.value === getCurrentLanguage(),
          )}
          data={LANGUAGES_OPTIONS}
          onSelect={(item: IOption) => {
            changeLanguage(item.value);
          }}
        />
      </Section>

      <Section title={strings('themes.title')}>
        <RadioGroup
          initialValue={THEMES_OPTIONS.find(value => value.value === theme)}
          data={THEMES_OPTIONS}
          onSelect={(item: IOption) => {
            dispatch(setTheme(item.value));
          }}
        />
      </Section>
      <Section >
        <TouchableOpacity onPress={shareApp}>
          <Row>
            <AntDesign name="sharealt"
              color={isDark ? CurrentColor.colors.white : CurrentColor.colors.black}
              size={25}
              style={styles.marginEnd}
            />
            <CustomText>{strings('shareApp')}</CustomText>

          </Row>
        </TouchableOpacity>
      </Section>
    </PageView>
  );
};

