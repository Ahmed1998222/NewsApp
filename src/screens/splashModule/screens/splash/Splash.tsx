import React, { useEffect } from 'react';
import { Image } from 'react-native';
import styles from './style';
import { PageView } from '../../../../components/common';
import {sharedImages} from '../../../../assets/images';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { splashModuleRoutes,EsplashModuleRoutes } from '../../navigation';
import AsyncStorage from '@react-native-community/async-storage';


const SplashScreen = () => {

    return (

    <PageView >
        <Image style={{height:'100%' , width:'100%'}}  source={sharedImages.Splash} />

    </PageView>
    )
 };
export default SplashScreen;
