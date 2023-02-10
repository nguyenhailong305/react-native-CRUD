import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Dialog, Portal } from "react-native-paper";
// import Modal from '../Modal';

export default function Button({
    okText = "Submit",
    onOk,
    width ,
    height ,
    backgroundColor ,
    padding ,
    margin,
    fontSize  
   
}) {
    const buttonStyle = StyleSheet.flatten([
 
        {backgroundColor : backgroundColor} ,
        {width : width},
        {height : height},
        {borderRadius : 8},
        {padding : padding},
        {textAlign : "center"},
        {margin : margin},
        {fontSize : fontSize}
 
    ])
  return (
         <View >
              <TouchableOpacity
                style = {buttonStyle} 
                onPress={onOk}
              >   
                <Text className="font-medium text-zinc-200"> {okText}</Text>
              </TouchableOpacity>
            
              </View>

  );
}

