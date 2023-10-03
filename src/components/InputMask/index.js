import React, {useState, forwardRef, useImperativeHandle, createRef} from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity} from 'react-native';
import { global } from '../../assets/css/style';
import Icon from "react-native-vector-icons/FontAwesome5";
import {TextInputMask} from 'react-native-masked-text';

const InputMask = forwardRef((props, ref) => {
    const inputRef = createRef();
    const [pass, setPass] = useState(props.secureTextEntry)
    const [error, setError] = useState(false);

    const [tamKeyboard, setTamKeyboard] = useState()


    useImperativeHandle(ref, ()=>({
        focusOnErro(){
            setError(true);
            inputRef.current.focus();
        },
        limparErro(){
            setError(false);
        },
    }));

    return (
        <View style={styles.container}>
            <TextInputMask style={[styles.input, {borderColor: error ? global.Error30 : global.Primary}, {color: error ? global.Error30 : global.Primary}]}
                       ref={inputRef}
                       underlineColorAndroid={'transparent'}
                       placeholderTextColor={error ? global.Error30 : global.Primary} 
                       {...props}
                       secureTextEntry={pass}
                       type={props?.tipo}
                       keyboardType={props.keyboardType}
                       options={{
                        maskType: props?.mascara,
                        withDDD: props?.ddd,
                        dddMask: props?.mascaraDDD
                       }}
                       />
            <Icon name={props.iconName} 
                  solid 
                  color={error ? global.Error30 : global.Primary}
                  size={32} 
                  style={styles.icon} />

            {props.secureTextEntry && (
                <TouchableOpacity onPress={()=>setPass(!pass)}>
                    <Icon name={pass ? "eye" : "eye-slash"} 
                        solid 
                        color={error ? global.Error30 : global.Primary} 
                        size={24} 
                        style={styles.iconPass} />
                </TouchableOpacity>
            )}
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    input: {
        height: 56,
        flex: 1,
        backgroundColor: "rgba(255,255,255, 0.7)",
        paddingLeft: 72,
        paddingRight: 64,
        borderRadius: 8,
        borderWidth: 2,
        fontSize: 16,
        lineHeight: 24,
    },
    icon: {
        position: 'absolute',
        left: 24,
        top: 12,
    },
    iconPass:{
        position: 'absolute',
        right: 24,
        top: 16,
    }
});

export default InputMask;
