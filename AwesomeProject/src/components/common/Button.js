import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Dialog, Portal } from "react-native-paper";
// import Modal from '../Modal';

export default function Button({
    okText = "Submit",
    cancelText = "Cancel",
    onOk,
    onCancel,
    width ,
    height ,
    backgroundColor ,
    padding ,
    borderRadius ,
    textAlign
}) {
    const buttonStyle = StyleSheet.flatten([
 
        {backgroundColor : backgroundColor} ,
        {width : width},
        {height : height},
        {borderRadius : borderRadius},
        {padding : padding},
        {textAlign : textAlign},
      
        
    ])
  return (
         <View >
              <TouchableOpacity
                style = {buttonStyle} 
                onPress={onOk}
              >
                 
                <Text className="font-medium"> {okText}</Text>
              </TouchableOpacity>
            
              </View>

  );
}
