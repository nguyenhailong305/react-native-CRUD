import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Dialog, Portal } from "react-native-paper";

export default function ModalController({
  visible,
  hideDialog,
  title,
  children
}) {
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Actions>
          <View>
            <Text className="text-3xl font-semibold pb-4">{title}</Text>
            {children}
          </View>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}
