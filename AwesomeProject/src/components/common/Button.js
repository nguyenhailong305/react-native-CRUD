import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Dialog, Portal } from "react-native-paper";
// import Modal from '../Modal';

export default function Button({
  okText = "Submit",
  onOk,
  width,
  height,
  backgroundColor,
  padding,
  margin,
  color , 
  fontWeight,
  textAlign

}) {
  const buttonStyle = StyleSheet.flatten([
    { backgroundColor: backgroundColor },
    { width: width },
    { height: height },
    { borderRadius: 8 },
    { padding: padding },
    { margin: margin },
  ]);
  const textStyle = StyleSheet.flatten([
    {color : color} ,
    {fontWeight: fontWeight},
    { textAlign: textAlign }
  ])
  return (
    <View>
      <TouchableOpacity style={buttonStyle} onPress={onOk}>
        <Text style={textStyle} > {okText}</Text>
      </TouchableOpacity>
    </View>
  );
}
