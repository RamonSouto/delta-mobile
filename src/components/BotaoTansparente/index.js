import {useNavigation} from '@react-navigation/native';
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const BotaoTransparente = (props) =>{
    const navigation = useNavigation();
    return(
        <TouchableOpacity style={style.background} onPress={()=>{ navigation.navigate(props.ir())}}>
            <Text style={style.texto}>{props.texto}</Text>
        </TouchableOpacity>
    );
}

const style = StyleSheet.create({    
    background: {
        backgroundColor: 'rgba(255,255,255,0.7)',
        alignItems: "center",
        justifyContent: "center",
        width: 224,
        height: 40,
        padding: 8,
        borderRadius: 5,
        shadowColor: "black",
        shadowOpacity: 1,
        shadowOffset: { width: 6, height: 6},
        borderColor: '#266431',
        borderWidth: 1,
    },

    texto: {
        // backgroundColor: 'rgba(255,255,255,0.3)',
        color: "#266431",
        fontFamily: "Roboto",
        fontSize: 16,
        fontWeight: "400",
        textTransform: "uppercase",
    }
},
    
)

export default BotaoTransparente;