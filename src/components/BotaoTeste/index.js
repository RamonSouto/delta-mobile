import { Text, StyleSheet, TouchableOpacity } from "react-native";
import {useNavigation} from '@react-navigation/native';
import { global } from "../../assets/css/style";
const Botao = (props) =>{
    
    const navigation = useNavigation();
    
    return(
        <TouchableOpacity style={style.background} >
            <Text style={style.texto}>{props.texto}</Text>
        </TouchableOpacity>
    );
}

const style = StyleSheet.create({    
    background: {
        backgroundColor: global.Primary,
        alignItems: "center",
        justifyContent: "center",
        width: 224,
        height: 40,
        padding: 8,
        borderRadius: 5,
        shadowColor: "black",
        shadowOpacity: 0.8,
        shadowOffset: { width: 6, height: 6},
        borderColor: global.Primary,
        borderWidth: 1,
        elevation: 5
    },
    texto: {
        backgroundColor: 'transparent',
        color: global.White,
        fontFamily: "Roboto",
        fontSize: 16,
        fontWeight: "400",
        textTransform: "uppercase",
    }
},
    
)

export default Botao;