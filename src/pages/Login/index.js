import React, { createRef, useState, useEffect } from 'react';

import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform, Image, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { global } from '../../assets/css/style';
import Botao from '../../components/Botao';
import * as Animatable from 'react-native-animatable';
import BotaoVoltar from '../../components/BotaoVoltar';
import { useNavigation } from '@react-navigation/native';
import Input from '../../components/Input';

const hWindows = ((Dimensions.get('window').height / 2) - 62) * -1;

// create a component
export default function Login() {


    const [usuario, setUsuario] = useState("");
    const [pass, setPass] = useState("");

    const usuarioInput = createRef();
    const passInput = createRef();

    // useEffect(()=>console.log('Usuário - useEffect'), [usuario]);
    // useEffect(()=>console.log('Senha - useEffect'), [pass]);

    const dashboard=()=> {
        return 'dashboard';
    }


    const navigation = useNavigation();

    function logar(){
        if(usuario === ""){
            usuarioInput.current.focusOnErro();
            return;
        }
        if(pass === ""){
            passInput.current.focusOnErro();
            return;
        }
    }
    return (
        <LinearGradient
            colors={[global.Secondary,global.Primary,global.Tertiary40]} 
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }} 
            locations={[0, 0.5, 1]}
            style={styles.container}>
            
        
            <ImageBackground source={require('../../assets/img/farm-tea.jpg')} style={{width: '100%', height:'100%'}} blurRadius={62}>
                <Image source={require('../../assets/img/img_topo_login_cadastro.png')} style={{position:'absolute', top: hWindows, width:"100%", height:'100%',}} resizeMode='contain' />
                {/* <View style={{position:'absolute', top: 50, left: 0, width:517, height:517, borderRadius: 500, transform:[{scaleX: 1 }] ,backgroundColor: 'red'}}>
                </View> */}
                
                <Animatable.View style={styles.voltar} animation="fadeInLeft" delay={500} duration={500}>
                    <BotaoVoltar style={styles.voltar}/>
                </Animatable.View>

                <KeyboardAvoidingView style={styles.conteudo} behavior={Platform.OS === "ios" ? 'padding' : 'height'} keyboardVerticalOffset={80}>
                    
                    <Animatable.View style={styles.textoTopo} animation="fadeInDown">
                        <Text style={styles.bemvindo}>Bem-vindo(a)</Text>
                        <Text style={styles.facalogin}>Faça login na sua conta</Text>
                    </Animatable.View>

                    <View style={styles.formularioBotao}>
                        <Animatable.View style={styles.formulario} animation="fadeInDown" delay={1000} duration={1000} >
                            <Input ref={usuarioInput}
                                iconName={'user'} 
                                placeholder='Usuário/E-mail'
                                autoCapitalize='none'
                                autoCorrect={false}
                                keyboardType='default'
                                value={usuario}
                                onChangeText={setUsuario}/>
                            <Input ref={passInput}
                                iconName={'lock'}
                                placeholder='Senha'
                                autoCapitalize='none'
                                autoCorrect={false}
                                keyboardType='default'
                                value={pass}
                                onChangeText={setPass}
                                secureTextEntry/>
                                {/* <TouchableOpacity onPress={logar}>
                                    <Text>Testar</Text>
                                </TouchableOpacity> */}
                            <View style={styles.check}>
                                <View>
                                </View>
                                <Text style={styles.checkTextEsqueceu}>Esqueceu sua senha?</Text>
                            </View>
                        </Animatable.View>

                        <Animatable.View style={styles.footer} animation="fadeInUp" delay={1500} duration={500}>
                            <View style={styles.areaBotaoEntrar}>
                                <Botao texto="ENTRAR" ir={dashboard} />
                            </View>

                            <View style={styles.areaTextoInscrever}>
                                <Text style={styles.textoConta}>Não tem uma conta?    </Text>
                                <TouchableOpacity onPress={() => navigation.navigate("register")}>
                                    <Text style={styles.textoInscrever}>Inscrever-se</Text>
                                </TouchableOpacity>
                            </View>
                        </Animatable.View>
                    </View>
                </KeyboardAvoidingView>
            </ImageBackground>
        </LinearGradient>
    );
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row'
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
            alignItems: 'center',
            height: 536,
            top: 224,
            justifyContent: 'space-between'
        },
            textoTopo:{
                // borderColor: 'blue',
                // borderWidth: 2,
                height: 72,
                width: '100%',
                alignItems: 'center',
                justifyContent: 'space-around',
            },
                bemvindo:{
                    fontSize: 32,
                    lineHeight: 48,
                    color: global.White,
                },
                facalogin:{
                    fontFamily:'Roboto',
                    fontSize: 11,
                    lineHeight: 17,
                    color: global.White,
                },
            formularioBotao:{
                // borderColor: 'yellow',
                // borderWidth: 2,
                height: 344,
                width: '100%',
                justifyContent: 'space-between'
            },
                formulario:{
                    // borderColor: 'gray',
                    // borderWidth: 2,
                    height: 184,
                    width: '100%',
                    gap:24,
                },
                    inputs:{
                        // borderColor: 'black',
                        // borderWidth: 2,
                        height: 56,
                    },
                    check:{
                        // borderColor: 'aquamarine',
                        // borderWidth: 2,
                        flexDirection: 'row',
                        height: 24,
                        justifyContent: 'space-between'
                    },
                        checkTextManter:{
                            fontFamily:'Roboto',
                            fontSize: 11,
                            lineHeight: 17,
                            color: global.White,
                        },
                        checkTextEsqueceu:{
                            fontFamily:'Roboto',
                            fontWeight: 'bold',
                            fontSize: 11,
                            lineHeight: 17,
                            color: global.White,
                        },
                footer:{
                    // borderColor: 'green',
                    // borderWidth: 2,
                    height: 80,
                    width: '100%',
                    justifyContent: 'space-between'
                    
                },
                    areaBotaoEntrar:{
                        // borderColor: 'green',
                        // borderWidth: 2,
                        height: 40,
                        width: '100%',
                        alignItems: 'center'
                    },
                    areaTextoInscrever:{
                        // borderColor: 'green',
                        // borderWidth: 2,
                        height: 24,
                        width: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'row'
                    },
                        textoConta:{
                            fontFamily:'Roboto',
                            fontSize: 11,
                            lineHeight: 17,
                            color: global.White,
                        },
                        textoInscrever:{
                            fontFamily:'Roboto',
                            fontWeight: 'bold',
                            fontSize: 11,
                            lineHeight: 17,
                            color: global.White,
                        }

});

