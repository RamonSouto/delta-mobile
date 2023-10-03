//import liraries
import React, { createRef, useState } from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { global } from '../../assets/css/style';
import Input from '../../components/Input';
import SelectSexo from '../../components/SelectSexo/SelectSexo';


// create a component
export default function AddClientes() {

    const [nome, setNome] = useState("");
    const nomeInput = createRef();
    const [celular, setCelular] = useState("");
    const celularInput = createRef();
    const [email, setEmail] = useState("");
    const emailInput = createRef();
    const [dataNascimento, setDataNascimento] = useState("");
    const dataNascimentoInput = createRef();
    const [profissao, setProfissao] = useState("");
    const profissaoInput = createRef();
    const [instagram, setInstagram] = useState("");
    const instagramInput = createRef();
    const [facebook, setFacebook] = useState("");
    const facebookInput = createRef();
    const [cep, setCep] = useState("");
    const cepInput = createRef();
    const [logradouro, setLogradouro] = useState("");
    const logradouroInput = createRef();
    const [numero, setNumero] = useState("");
    const numeroInput = createRef();
    const [complemento, setComplemento] = useState("");
    const complementoInput = createRef();
    const [bairro, setBairro] = useState("");
    const bairroInput = createRef();
    const [cidade, setCidade] = useState("");
    const cidadeInput = createRef();
    const [estado, setEstado] = useState("");
    const estadoInput = createRef();
    

    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? 'padding' : 'height'} keyboardVerticalOffset={60} >
            <ScrollView>
                <View style={{flex:1, gap: 16, marginHorizontal: 32, marginBottom: 76, marginTop: 76,}}>
                    <Input ref={nomeInput}
                        iconName={'user'} 
                        placeholder='Nome'
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType='default'
                        value={nome}
                        onChangeText={setNome}/>
                    <Input ref={celularInput}
                        iconName={'mobile-alt'} 
                        placeholder='Celular'
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType='number-pad'
                        value={celular}
                        onChangeText={setCelular}/>
                    <Input ref={emailInput}
                        iconName={'envelope'} 
                        placeholder='E-mail'
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType='email-address'
                        value={email}
                        onChangeText={setEmail}/>
                    <Input ref={dataNascimentoInput}
                        iconName={'calendar-alt'} 
                        placeholder='Data de Nascimento'
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType='number-pad'
                        value={dataNascimento}
                        onChangeText={setDataNascimento}/>
                    <Input ref={profissaoInput}
                        iconName={'briefcase'} 
                        placeholder='Profissão'
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType='default'
                        value={profissao}
                        onChangeText={setProfissao}/>
                    <SelectSexo placeholder={"Selecione um sexo"} nameIcon="venus-mars"/>
                    <Input ref={instagramInput}
                        iconName={'instagram'} 
                        placeholder='Instagram'
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType='default'
                        value={instagram}
                        onChangeText={setInstagram}/>
                    <Input ref={facebookInput}
                        iconName={'facebook-f'} 
                        placeholder='Facebook'
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType='default'
                        value={facebook}
                        onChangeText={setFacebook}/>
                    <Input ref={cepInput}
                        iconName={'location-arrow'} 
                        placeholder='CEP'
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType='number-pad'
                        value={cep}
                        onChangeText={setCep}/>
                    <Input ref={logradouroInput}
                        iconName={'location-arrow'} 
                        placeholder='Logradouro'
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType='default'
                        value={logradouro}
                        onChangeText={setLogradouro}/>
                    <Input ref={numeroInput}
                        iconName={'location-arrow'} 
                        placeholder='Número'
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType='number-pad'
                        value={numero}
                        onChangeText={setNumero}/>
                    <Input ref={complementoInput}
                        iconName={'location-arrow'} 
                        placeholder='Complemento'
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType='default'
                        value={complemento}
                        onChangeText={setComplemento}/>
                    <Input ref={bairroInput}
                        iconName={'location-arrow'} 
                        placeholder='Bairro/Setor'
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType='default'
                        value={bairro}
                        onChangeText={setBairro}/>
                    <Input ref={estadoInput}
                        iconName={'location-arrow'} 
                        placeholder='Estado'
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType='default'
                        value={estado}
                        onChangeText={setEstado}/>
                    <Input ref={cidadeInput}
                        iconName={'location-arrow'} 
                        placeholder='Cidade'
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType='default'
                        value={cidade}
                        onChangeText={setCidade}/>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: global.Neutral94,
    },
    conteudo:{
        marginHorizontal: 32,
        marginTop: 32,
        marginBottom: 32,
    }
});
