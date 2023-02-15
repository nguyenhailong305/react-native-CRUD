import * as React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Dialog, Portal } from "react-native-paper";
// import Modal from '../Modal';

export default function Input({
  onChange,
  width,
  height,
  borderWidth,
  placeholder,
  borderRadius,
  marginBottom,
  value,
  type
}) {
  const inputStyle = StyleSheet.flatten([
    { width: width },
    { height: height },
    { borderRadius: borderRadius },
    { padding: 3 },
    { marginBottom: marginBottom },
    { borderWidth : borderWidth },
    { type : type },
    { placeholder : placeholder}
  ]);
  return (
    <View>
      <TextInput style={inputStyle}
        onChangeText={onChange}
        value={value}
        placeholder={placeholder}
      />
    </View>
  );
}

