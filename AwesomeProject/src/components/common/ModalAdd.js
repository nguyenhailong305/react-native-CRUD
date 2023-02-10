import * as React from "react";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Dialog, Portal } from "react-native-paper";
import ModalController from "./ModalController";

const ModalAdd = ({ visible, hideDialog, handleAddItem, name, setName }) => {
  return (
    <ModalController
      visible={visible}
      hideDialog={hideDialog}
      title={"Thêm mới"}
      onOk={() => {
        name ? handleAddItem({ name: name }) : alert("Vui lòng nhập tên"),
          setName(""),
          hideDialog(true);
      }}
      onCancel={() => hideDialog(true)}
    >
      <TextInput
        className="w-[310] h-[50] border p-3 rounded-md"
        onChangeText={(text) => {
          setName(text);
        }}
        value={name}
      />
    </ModalController>
    // <Portal>
    //   <Dialog visible={visible} onDismiss={hideDialog} >
    //     <Dialog.Actions>

    //      <View  >
    //      <Text className="text-3xl font-semibold pb-4"> Thêm mới </Text>
    //      <TextInput className="w-[310] h-[50] border p-3 rounded-md"
    //       onChangeText={(text) => {setName(text) }}
    //       value={name}

    //     />

    //   <View className="flex flex-row py-5 justify-evenly">

    //     <TouchableOpacity  className=" text-center bg-green-600  p-3 rounded-lg shadow-lg"
    //       onPress={() => {name ? handleAddItem({ name: name }) : alert("Vui lòng nhập tên") ,setName(''), hideDialog(true) }} >
    //       <Text className="font-medium"> Submit</Text>
    //     </TouchableOpacity>

    //     <TouchableOpacity  className=" text-center bg-red-500  p-3 rounded-lg shadow-lg"
    //       onPress={() => hideDialog(true)} >
    //       <Text className="font-medium"> Cancel</Text>
    //     </TouchableOpacity>
    //   </View>

    //      </View>
    //     </Dialog.Actions>
    //   </Dialog>
    // </Portal>
  );
};

export default ModalAdd;
