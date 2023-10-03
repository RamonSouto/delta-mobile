import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import Botao from '../../components/Botao';
import BotaoTransparente from '../../components/BotaoTansparente';
import { LinearGradient } from 'expo-linear-gradient';


import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';
import { global } from '../../assets/css/style';
import Logo from '../../assets/icon/Logo';


// create a component
export default function Home() {
    const navigation = useNavigation();
    const login=()=> {
        return 'login';
    }
    const register=()=> {
        return 'register';
    }

    return (
        <LinearGradient colors={[global.Secondary,global.Primary,global.Tertiary40]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} locations={[0, 0.5, 1]} style={styles.container}>
            <ImageBackground source={require('../../assets/img/farm-tea.jpg')} style={{width: '100%', height:'100%'}} blurRadius={62}>
                <ImageBackground source={require('../../assets/img/tea-06.png')} style={{position:'absolute', top:-45, right: -30 ,width:208, height:262, opacity: 0.1}} resizeMode='contain' blurRadius={5}/>
                <ImageBackground source={require('../../assets/img/tea-06.png')} style={{position:'absolute', top:-45, left: 111 ,width:208, height:262, opacity: 0.1}} resizeMode='contain' blurRadius={5}/>
                <ImageBackground source={require('../../assets/img/tea-04.png')} style={{position:'absolute', top:-10, left: -15 ,width:253, height:229, opacity: 0.1}} resizeMode='contain' blurRadius={5}/>
                <ImageBackground source={require('../../assets/img/tea-02.png')} style={{position:'absolute', bottom:-60, left: -25 ,width:250, height:220, opacity: 0.1}} resizeMode='contain' blurRadius={5}/>
                <ImageBackground source={require('../../assets/img/tea-03.png')} style={{position:'absolute', bottom:-80, left: 120 ,width:307, height:254, opacity: 0.1}} resizeMode='contain' blurRadius={5}/>
                <ImageBackground source={require('../../assets/img/tea-03.png')} style={{position:'absolute', bottom:-100, right: -140 ,width:307, height:254, opacity: 0.1}} resizeMode='contain' blurRadius={5}/>

                
                <View style={styles.container}>
                    <View style={styles.logoBotao}>
                        <View style={styles.containerLogoTexto}>
                            <Animatable.View style={styles.containerLogo} animation="flipInY">
                                <Logo height={144} width={144} />
                                <Image 
                                    source={require('../../assets/img/Nutri-Acesso.png')}
                                    style={{width: 246, height: 50}}
                                    resizeMode='contain'
                                    />
                            </Animatable.View>
                            
                            <Animatable.View style={styles.containerText} animation="fadeInUp" delay={600}>
                                <Text style={styles.containerTitle}>Seja bem-vindo ao nosso aplicativo!</Text>
                                <Text style={styles.containerTitle}>Aqui, você está prestes a explorar um mundo de possibilidades e oportunidades.</Text>
                            </Animatable.View>
                        </View>

                        <Animatable.View style={styles.containerbotoes} animation="fadeInUp" delay={1200}>
                            <Botao texto="LOGIN" ir={login} />
                            <BotaoTransparente texto="REGISTRAR" ir={register}/>
                        </Animatable.View>
                    </View>
                </View>
            </ImageBackground>
        </LinearGradient>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerLogoTexto: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
    },
    containerLogo: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 194,
        width: 246,
    },
    containerText: {
        color: global.White,
    },
    containerTitle: {
        color: global.White,
        fontFamily: 'Roboto',
        fontSize: 12,
        textAlign: 'center',
        fontWeight: '400',
        lineHeight: 16,
        width: 246,
    },
    logoBotao: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 48
    },
    containerbotoes: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 32
    },
    svgLogo:{
        width: 144,
        height: 144,
    }

});
