import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { EDashboardModuleRoutes } from '../../navigation/dashboardModuleRoutes.enum';
import styles from './style';

const HomeScreen = ({navigation}) => {
    return (

        <View>
            <TouchableOpacity onPress={()=>navigation.navigate(EDashboardModuleRoutes.DetailsNews)}>
                <Text>Hello in Home</Text>
            </TouchableOpacity>
        </View>
    )
};
export default HomeScreen;
