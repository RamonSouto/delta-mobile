//import liraries

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { global } from '../../assets/css/style';
import InputLogin from '../../components/Input';


export default function Dashboard() {
    
    return (
            <View style={styles.container}>
            </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        backgroundColor: global.Neutral94,
    },
});

