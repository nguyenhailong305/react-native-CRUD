import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { UseItem } from "../hooks";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import ModalUpdate from "./common/ModalUpdate";
import ModalAdd from "./common/ModalAdd";
import { Button, Dialog, Portal } from "react-native-paper";
import ModalController from "./common/ModalController";

const Items = () => {
  const {
    items,
    handleGetItem,
    handleAddItem,
    handleDeleteItem,
    handleUpdateItem,
  } = UseItem();

  useEffect(() => {
    handleGetItem();
  }, []);

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");  
  const [idUpdate, setIdUpdate] = useState("");
  const [nameUpdate, setNameUpdate] = useState("");
  const [ageUpdate, setAgeUpdate] = useState("");

  const [visibleDelete, setDelete] = useState(false);
  const [visibleAdd, setAdd] = useState(false);
  const [visible, setVisible] = useState(false);

  const hideDialogAdd = () => setAdd(!visibleAdd);
  const hideDialogDelete = () => setDelete(!visibleDelete);
  const hideDialog = () => setVisible(!visible);

  return (
    <View>
      {/* <ModalCommon visible={visible} hideDialog={hideDialog}/> */}
      <View className="relative h-11 mt-4 mr-3">
        <TouchableOpacity
          className="absolute  inset-y-0 right-0 w-24  bg-red-400  p-3 rounded-md "
          onPress={() => hideDialogAdd()}
        >
          <Text className="text-center"> Add</Text>
        </TouchableOpacity>
      </View>

      <View className=" border mt-5">
        <View style={styles.tableHeader}>
          <Text style={styles.tableHeaderText}>Name</Text>
          <Text style={styles.tableHeaderText}>Age</Text>
          <Text style={styles.tableHeaderText}>Action</Text>
        </View>
        <FlatList
          data={items}
          renderItem={({ item, index }) => (
            <View key={index} style={styles.tableRow}>
              <Text style={styles.tableCell}>{item.name}</Text>
              <Text style={styles.tableCell}>{item.age}</Text>
              <View style={styles.tableCell}>
                {/* <ModalUpdate
                  visible={visible}
                  hideDialog={hideDialog}
                  handleUpdateItem={handleUpdateItem}
                  nameUpdate={nameUpdate}
                  idUpdate={idUpdate}
                  setNameUpdate={setNameUpdate}
                /> */}

                <Portal>
                  <Dialog visible={visibleDelete} onDismiss={hideDialogDelete}>
                    <Dialog.Title className="text-center text-sm ">
                      Bạn có chắc muốn xóa không ?
                    </Dialog.Title>
                    <Dialog.Content className="flex flex-row justify-center mt-3">
                      <Button
                        className="bg-red-400 mr-3 text-slate-900"
                        onPress={() => hideDialogDelete()}
                      >
                        Cancel{" "}
                      </Button>
                      <Button
                        className="bg-green-500 text-slate-900"
                        onPress={() => {
                          handleDeleteItem({ id: id }), hideDialogDelete();
                        }}
                      >
                        OK
                      </Button>
                    </Dialog.Content>
                  </Dialog>
                </Portal>
                <View className="flex flex-row ">
                  <Icon
                    className="mr-2"
                    onPress={() => {
                      hideDialog(
                        setIdUpdate(item._id),
                        setNameUpdate(item.name),
                        setAgeUpdate(item.age)
                      );
                    }}
                    name="pen"
                    size={20}
                    color="#7BA990"
                  />

                  <Icon
                    onPress={() => {
                      setId(item._id), setDelete(true);
                    }}
                    name="trash-can-outline"
                    size={20}
                    color="#7BA990"
                  />
                </View>
              </View>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <ModalController
        visible={visibleAdd}
        hideDialog={hideDialogAdd}
        title={"Thêm mới"}
        onOk={() => {
          name ? handleAddItem({ name: name  , age : age}) : alert("Vui lòng nhập tên"),
            setName("") , setAge(""),
            hideDialogAdd(true);
        }}
        onCancel={() => hideDialogAdd(true)}
        
      >
        <TextInput
          className="w-[310] h-[50] border p-3 rounded-md"
          onChangeText={(text) => {
            setName(text);
          }}
          value={name}
        />
        <TextInput
        type = "number"
          className="w-[310] h-[50] border p-3 rounded-md"
          onChangeText={(text) => {
            setAge(text);
          }}
          value={age}
        />
      </ModalController>
      <ModalController
        visible={visible}
        hideDialog={hideDialog}
        title={"Cập nhật thông tin"}    
        onOk={() => {
          nameUpdate
            ? handleUpdateItem({ name: nameUpdate, id: idUpdate , age : ageUpdate })
            : alert("Vui lòng nhập tên cập nhật"),
            setNameUpdate("") , setAgeUpdate(""),
            hideDialog(true);
        }}
        onCancel={() => hideDialog(true)}
      >
        <TextInput
          className="w-[310] h-[50] border p-3 rounded-md"
          onChangeText={(text) => {
            setNameUpdate(text);
          }}
          value={nameUpdate}
        />
      </ModalController>
    </View>
  );
};

const styles = {
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#eee",
  },
  tableHeaderText: {
    padding: 10,
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  tableCell: {
    padding: 10,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
};

export default Items;
