
import React from 'react';
import { Image, View } from 'react-native';
import styles from './style';
import { PageView, CustomText } from '../../../../components/common';
import { COLORS } from '../../../../assets/theme/theme';
import Row from '../../../../components/common/row';
import { formatDate, scaleFontSize, scaleHeight } from '../../../../utils/scaling';

export const DetailsNewsScreen = ({ route }) => {
    const Details = route.params?.new
    return (
        <PageView style={styles.layout}>
            <View style={styles.imgCont}>
                <Image source={{ uri: Details?.urlToImage }} style={styles.img} />
            </View>
            <View style={styles.subPage}>
                <CustomText
                    textAlign="center"
                    size={scaleFontSize(22)}
                    style={styles.title}
                    weight={'bold'}
                    color={COLORS.darkGray}>
                    {Details?.title}
                </CustomText>
                <Row justifyContent="space-between">
                    <CustomText size={scaleFontSize(12)} color={COLORS.black}>
                        {Details?.author}
                    </CustomText>

                    <CustomText size={scaleFontSize(12)} color={COLORS.black}>
                        {formatDate(Details?.publishedAt)}
                    </CustomText>
                </Row>
                <View style={styles.descCont}>
                    <CustomText size={scaleFontSize(12)} color={COLORS.darkGray}>
                        description
                    </CustomText>
                    <CustomText
                        size={scaleFontSize(12)}
                        color={COLORS.black}
                        marginTop={scaleHeight(5)}
                        style={styles.description}>
                        {Details?.description}
                    </CustomText>
                </View>

                <View style={styles.descCont}>
                    <CustomText size={scaleFontSize(12)} color={COLORS.darkGray}>
                        content
                    </CustomText>
                    <CustomText
                        size={scaleFontSize(12)}
                        color={COLORS.black}
                        marginTop={scaleHeight(5)}
                        style={styles.description}>
                        {Details?.content}
                    </CustomText>
                </View>
            </View>
        </PageView>
    );
};
