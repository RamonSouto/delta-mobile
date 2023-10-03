import React, { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { global } from "../../assets/css/style";
import { StyleSheet, Text, View } from "react-native";
import AntDesign from "react-native-vector-icons/FontAwesome5";

const data = [
    {label:"Masculino", value: "M"},
    {label:"Feminino", value: "F"},
];
const SelectSexo = (props) =>{
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    return (
      <View style={styles.container}>
        <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            data={data}
            maxHeight="100%"
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? props.placeholder : ''}
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
                setValue(item.value);
                setIsFocus(false);
            }}
            itemContainerStyle={{
                backgroundColor: global.White,
                borderRadius: 4,
            }}
            itemTextStyle={{color: global.Primary}}
            iconStyle={{tintColor: global.Primary, width: 24, height: 24}}
            renderLeftIcon={() => (
                <AntDesign style={styles.icon} color={global.Primary} name={props.nameIcon} size={32} />
              )}
        />
      </View>
    );
  };
export default SelectSexo;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(255,255,255, 0.7)",
        padding: 0,
        width: '100%'
    },
    dropdown: {
        height: 56,
        width: "100%",
        borderColor: global.Primary,
        borderWidth: 2,
        borderRadius: 8,
        paddingLeft: 24,
        paddingRight: 24,
    },
    placeholderStyle: {
        fontSize: 16,
        paddingLeft: 8,
        color: global.Primary
    },
    selectedTextStyle: {
        backgroundColor: 'transparent',
        color: global.Primary,
        fontSize: 16,
        paddingLeft: 8,
    },
    icon: {
        marginRight: 5,
      },
  });