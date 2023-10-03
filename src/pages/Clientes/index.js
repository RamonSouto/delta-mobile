//import liraries
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ImageBackground, SafeAreaView, Image } from 'react-native';
import { global } from '../../assets/css/style';
import Select from '../../components/SelectSexo/SelectSexo';

const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');
const wWindows = ((Dimensions.get('window').height / 2) - 62) * -1;

// create a component
export default function Clientes() {

    return (
        <SafeAreaView style={styles.container} >
            <Select placeholder={"Selecione um sexo"} nameIcon="venus-mars"/>
        </SafeAreaView>
        
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: global.Neutral94,
    },
    header: {
        fontSize: 16,
        marginVertical: 10,
      }
});
