import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { UseItem } from "../hooks";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Dialog, Portal } from "react-native-paper";
import ModalController from "./common/ModalController";
import Button from "./common/Button";
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
  const [ageUpdate, setAgeUpdate] = useState(0);

  const [visibleDelete, setDelete] = useState(false);
  const [visibleAdd, setAdd] = useState(false);
  const [visible, setVisible] = useState(false);

  const hideDialogAdd = () => setAdd(!visibleAdd);
  const hideDialogDelete = () => setDelete(!visibleDelete);
  const hideDialog = () => setVisible(!visible);

  return (
    <View>
      <View style={{ left : "80%" , top : "5%"}} >
        <Button backgroundColor={"rgb(99,102,241)"} width={70} height={50} padding={18} okText={"Add"} onOk={() => hideDialogAdd()}/>
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
                  <ModalController style={{fontSize : 10}} visible={visibleDelete}
                    hideDialog={hideDialogDelete}
                title={"Bạn muốn xóa không?"}>
                   <View className="flex flex-row p-5 mr-4 justify-evenly">
                   <Button 
          width={65}
          height={45}
          backgroundColor={"rgb(22,101,52)"}
          padding={16}
          onOk={() => {
            handleDeleteItem({ id: id }), hideDialogDelete();
          }}
          okText={"Xóa"}
        />
        <Button
          backgroundColor={"rgb(220,38,38)"}
          width={65}
          height={45}
          padding={15}
         
          onOk={() => hideDialogDelete(true)}
          okText={"Hủy"}
        />
        </View>
  
                 </ModalController>
                
               
                <View className="flex flex-row ">
                  <Icon
                    className="mr-2"
                    onPress={() => {
                      hideDialog(
                        setIdUpdate(item._id),
                        setNameUpdate(item.name),
                        setAgeUpdate(item.age.toString())
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
      >
        <TextInput
          className="w-[310] h-[50] border p-3 rounded-md mb-5"
          onChangeText={(text) => {
            setName(text);
          }}
          value={name}
        />
        <TextInput
          type="number"
          className="w-[310] h-[50] border p-3 rounded-md"
          onChangeText={(text) => {
            setAge(text);
          }}
          value={age}
        />
        <View className="flex flex-row py-5 justify-evenly">
        <Button
          width={80}
          height={45}
          backgroundColor={"rgb(22,101,52)"}
          borderRadius={8}
          textAlign={"center"}
          padding={14}
          onOk={() => {
            name
              ? handleAddItem({ name: name, age: age })
              : alert("Vui lòng nhập tên"),
              setName(""),
              setAge(""),
              hideDialogAdd(true);
          }}
          okText={"Submit"}
        />
        <Button
          backgroundColor={"rgb(220,38,38)"}
          width={80}
          height={45}
          borderRadius={8}
          textAlign={"center"}
          padding={14}
          onOk={() => hideDialogAdd(true)}
          okText={"Cancel"}
        />

        </View>
       
      </ModalController>
      <ModalController
        visible={visible}
        hideDialog={hideDialog}
        title={"Cập nhật thông tin"}
      >
        <TextInput
          className="w-[310] h-[50] border p-3 rounded-md mb-5"
          onChangeText={(text) => {
            setNameUpdate(text);
          }}
          value={nameUpdate}
        />

        <TextInput
          className="w-[310] h-[50] border p-3 rounded-md"
          onChangeText={(text) => {
            setAgeUpdate(text);
          }}
          value={ageUpdate}
        />
        <View className="flex flex-row py-5 justify-evenly">
        <Button
          width={80}
          height={45}
          backgroundColor={"rgb(22,101,52)"}
          borderRadius={8}
          textAlign={"center"}
          padding={14}
          onOk={() => {
            nameUpdate && ageUpdate
              ? handleUpdateItem({
                  name: nameUpdate,
                  id: idUpdate,
                  age: ageUpdate,
                })
              : alert("Vui lòng nhập tên cập nhật"),
              setNameUpdate(""),
              setAgeUpdate(""),
              hideDialog(true);
          }}
          okText={"Submit"}
        />
        <Button
          backgroundColor={"rgb(220,38,38)"}
          width={80}
          height={45}
          borderRadius={8}
          textAlign={"center"}
          padding={14}
          onOk={() => hideDialog(true)}
          okText={"Cancel"}
        />

        </View>
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
