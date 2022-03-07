import React from 'react';
import { Image } from 'react-native';
import styles from './style';
import { PageView } from '../../../../components/common';
import { sharedImages } from '../../../../assets/images';


const SplashScreen = () => {

    return (

        <PageView >
            <Image style={styles.Image} source={sharedImages.Splash} />

        </PageView>
    )
};
export default SplashScreen;
