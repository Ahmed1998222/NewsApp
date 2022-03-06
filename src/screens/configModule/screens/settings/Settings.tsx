 
import React from 'react';
import {  PageView, Section } from '../../../../components/common';
import styles from './style';
import { LANGUAGES_OPTIONS, THEMES_OPTIONS } from '../../../../utils/constants';
import {
  changeLanguage,
  getCurrentLanguage,
  strings,
} from '../../../../localization';
import { IOption } from '../../../../types/index';
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme, setTheme } from '../../../../store/slices/themSlice';
import RadioGroup from '../../../../components/form/RadioGroup/RadioGroup'
import { StackNavigationProp } from '@react-navigation/stack';
import { ConfigModuleRoutes, EConfigModuleRoutes } from '../../navigation';

// type ScreenProp = StackNavigationProp<ConfigModuleRoutes, EConfigModuleRoutes.Settings>;

export  const SettingsScreen = () => {
    const theme = useSelector(selectTheme);
  const dispatch = useDispatch();
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
    </PageView>
  );
};

 