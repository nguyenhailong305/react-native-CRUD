import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Dialog, Portal } from "react-native-paper";
// import Modal from '../Modal';

export default function ModalController({
  visible,
  hideDialog,
  title,
  okText = "Submit",
  cancelText = "Cancel",
  onOk,
  onCancel,
  children,
  backgroundColor,
  radius
}) {
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Actions>
          <View>
            <Text className="text-3xl font-semibold pb-4">{title}</Text>
            {children}
            <View className="flex flex-row py-5 justify-evenly">
              <TouchableOpacity
                className=" text-center bg-green-600  p-3 rounded-lg "
                backgroundColor = {backgroundColor}
                onPress={onOk}
              >
                <Text className="font-medium"> {okText}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                className=" text-center bg-red-500  p-3 rounded-lg "
                radius = {radius}
                backgroundColor = {backgroundColor}
                onPress={onCancel}
              >
                <Text className="font-medium"> {cancelText}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}
