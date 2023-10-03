import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {useNavigation} from '@react-navigation/native';
import { global } from "../../assets/css/style";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function BotaoVoltar(){
    
    const navigation = useNavigation();
    
    return(
        <View>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.element}>
                <Icon name="chevron-left" color={global.White} size={16} style={styles.voltar}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({    
    element:{
        width: 32,
        height: 32,
        backgroundColor: 'transparent',
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2
    },
    voltar:{
        alignItems: 'center',
        justifyContent: 'center',
        width: 32,
        height: 32,
        top:6,
        left: 7,
    }
})
