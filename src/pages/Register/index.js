//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, KeyboardAvoidingView, ScrollView, Dimensions, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { global } from '../../assets/css/style';
import Botao from '../../components/Botao';
import BotaoVoltar from '../../components/BotaoVoltar';
import { useNavigation } from '@react-navigation/native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Input from '../../components/Input';
import * as Animatable from 'react-native-animatable';

const hWindows = ((Dimensions.get('window').height / 2) - 62) * -1;
// create a component
export default function Registro() {

    const dashboard=()=> {
        return 'dashboard';
    }
    const navigation = useNavigation();

    const [selected, setSelected] = useState()

    return (
        <LinearGradient
            colors={[global.Secondary,global.Primary,global.Tertiary40]} 
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }} 
            locations={[0, 0.5, 1]}
            style={styles.container}>

            <ImageBackground source={require('../../assets/img/farm-tea.jpg')} style={{width: '100%', height:'100%'}} blurRadius={62}>
                <Image source={require('../../assets/img/img_topo_login_cadastro.png')} style={{position:'absolute', top: hWindows, width:"100%", height:'100%',}} resizeMode='contain' />

                    
                    <Animatable.View style={styles.voltar} animation="fadeInLeft" delay={500} duration={500}>
                        <BotaoVoltar style={styles.voltar}/>
                    </Animatable.View>

                    <KeyboardAvoidingView style={styles.conteudo} behavior={Platform.OS === "ios" ? 'padding' : null} keyboardVerticalOffset={65}>
                        <ScrollView>
                            <Animatable.View style={styles.areaTextoTopo} animation="fadeInDown" delay={500} duration={500}>
                                <Text style={styles.textoCadastro}>CADASTRO</Text>
                                <Text style={styles.textoCrieConta}>Crie sua conta</Text>
                            </Animatable.View>
                            <View style={styles.areaInputsBortao}>
                                <View style={styles.areaInputsAceito}>
                                    <Animatable.View style={styles.areaInputs} animation="fadeInDown" delay={1000} duration={500}>
                                        <Input iconName={'user'} 
                                            placeholder='Usuário'
                                            autoCapitalize='none'
                                            autoCorrect={false}
                                            keyboardType='default'/>
                                        <Input iconName={'envelope'} 
                                            placeholder='E-mail'
                                            autoCapitalize='none'
                                            autoCorrect={false}
                                            keyboardType='email-address'/>
                                        <Input iconName={'lock'}
                                            placeholder='Senha'
                                            autoCapitalize='none'
                                            autoCorrect={false}
                                            keyboardType='default'
                                            secureTextEntry/>
                                        <Input iconName={'lock'}
                                            placeholder='Confirme a senha'
                                            autoCapitalize='none'
                                            autoCorrect={false}
                                            keyboardType='default'
                                            secureTextEntry/>
                                    </Animatable.View>
                                    <Animatable.View style={styles.areaAceito} animation="fadeInDown" delay={1500} duration={500}>
                                        <BouncyCheckbox
                                            size={25}
                                            fillColor={global.Primary}
                                            unfillColor={global.Primary}
                                            text="Ao se cadastrar você concorda com nossos Termos de Uso e Política de Privacidade"
                                            iconStyle={{ }}
                                            innerIconStyle={{ borderColor: global.White, borderWidth: 2, borderRadius:4 }}
                                            textStyle={{fontSize: 14, color: global.White, textDecorationLine: "none",}}
                                            onPress={() => {
                                                setSelected(!selected)
                                            }}
                                            bounceEffectIn={0.9}
                                            />
                                    </Animatable.View>
                                </View>
                                <View style={styles.areaBotao}>
                                    <Animatable.View style={styles.areaBotaoCadastrar} animation="fadeInDown" delay={2000} duration={500}>
                                        <Botao texto="CADASTRAR" ir={dashboard}/>
                                    </Animatable.View>

                                    <Animatable.View style={styles.areaTextoLogin} animation="fadeInDown" delay={2500} duration={500}>
                                        <Text style={styles.textoPossuiConta}>Já possui uma conta?   </Text>
                                        <TouchableOpacity onPress={() => navigation.navigate("login")} >
                                            <Text style={styles.textoLogin}>Login</Text>
                                        </TouchableOpacity>
                                    </Animatable.View>
                                </View>
                            </View>
                        </ScrollView>
                    </KeyboardAvoidingView>
            </ImageBackground>
        </LinearGradient>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
    },
        voltar: {
            borderColor: global.White,
            borderWidth: 2,
            borderRadius: 100,
            position: 'absolute',
            top: 48,
            left: 32,
            width: 32,
            height: 32,
            justifyContent: 'center',
            alignItems: 'center',
        },
        conteudo:{
            // borderColor: "red",
            // borderWidth: 2,
            marginHorizontal: 32,
            flex: 1,
            alignItems: 'center',
            height: 544,
            top: 216,
            gap: 24,
        },
            areaTextoTopo:{
                // borderColor: 'blue',
                // borderWidth: 2,
                height: 72,
                width: '100%',
                alignItems: 'center',
                justifyContent: 'space-around',
            },
                textoCadastro:{
                    fontSize: 32,
                    lineHeight: 48,
                    color: global.White,
                },
                textoCrieConta:{
                    fontFamily:'Roboto',
                    fontSize: 11,
                    lineHeight: 17,
                    color: global.White,
                },
            areaInputsBortao:{
                // borderColor: 'yellow',
                // borderWidth: 2,
                height: 444,
                width: '100%',
                alignItems: 'center',
                justifyContent: 'space-around',
            },
                areaInputsAceito:{
                    // borderColor: 'gray',
                    // borderWidth: 2,
                    height: 348,
                    width: '100%',
                    gap:12,
                },
                    areaInputs:{
                        // orderColor: 'black',
                        // borderWidth: 2,
                        height: 296,
                        width: '96%',
                        alignItems: 'center',
                        gap: 24
                    },
                        inputs:{
                            // borderColor: 'black',
                            // borderWidth: 2,
                            height: 56,
                            width: '100%'
                        },
                    areaAceito:{
                        // orderColor: 'black',
                        // borderWidth: 2,
                        height: 40,
                        width: '100%',
                        alignItems: 'center'
                    },
                        textoAceito:{
                            fontFamily:'Roboto',
                            fontSize: 11,
                            lineHeight: 17,
                            color: global.White,
                        },
                areaBotao:{
                    // borderColor: 'green',
                    // borderWidth: 2,
                    height: 80,
                    width: '100%',
                    justifyContent: 'space-between'
                },
                    areaBotaoCadastrar:{
                        // borderColor: 'green',
                        // borderWidth: 2,
                        height: 40,
                        width: '100%',
                        alignItems: 'center'
                    },

                    areaTextoLogin:{
                        // borderColor: 'green',
                        // borderWidth: 2,
                        height: 24,
                        width: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'row'
                    },
                        textoPossuiConta:{
                            fontFamily:'Roboto',
                            fontSize: 11,
                            lineHeight: 17,
                            color: global.White
                        },
                        textoLogin:{
                            fontFamily:'Roboto',
                            fontWeight: 'bold',
                            fontSize: 11,
                            lineHeight: 17,
                            color: global.White
                        },

});

