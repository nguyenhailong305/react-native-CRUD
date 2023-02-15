import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
} from "react-native";
import { UseItem } from "../hooks";
import ModalController from "./common/ModalController";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { DataTable } from "react-native-paper";
import ButtonCommonLayerTwo from "./common/ButtonCommonLayerTwo";
import InputCommonLayerTwo from "./common/InputCommonLayerTwo";

const Items = () => {
  const {
    items,
    handleGetItem,
    handleAddItem,
    handleDeleteItem,
    handleUpdateItem,
  } = UseItem();

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [idUpdate, setIdUpdate] = useState("");
  const [nameUpdate, setNameUpdate] = useState("");
  const [ageUpdate, setAgeUpdate] = useState(0);
  const [visibleDelete, setDelete] = useState(false);
  const [visibleAdd, setAdd] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    handleGetItem()
  }, []);

  const hideDialogAdd = () => setAdd(!visibleAdd);
  const hideDialogDelete = () => setDelete(!visibleDelete);
  const hideDialog = () => setVisible(!visible);

  return (
    <View>
      <View style={{ left: "80%", marginTop: 20 }}>
        <ButtonCommonLayerTwo  backgroundColor={"rgb(99,102,241)"} okText={"Add"} onOk={() => hideDialogAdd()} />
      </View>
      <View className="flex flex-col border mt-5 flex-auto">
      <DataTable  style={{ flexGrow: 1}}>
      <DataTable.Header>
        <DataTable.Title>Name</DataTable.Title>
        <DataTable.Title numeric>Age</DataTable.Title>
        <DataTable.Title numeric>Action</DataTable.Title>
      </DataTable.Header>
      <FlatList
            data={items}
            renderItem={({ item, index }) => (
              <DataTable.Row
                key={index} >
                <DataTable.Cell>{item.name}</DataTable.Cell>
                <DataTable.Cell numeric>{item.age}</DataTable.Cell>     
                  <DataTable.Cell numeric className="flex flex-row ">
                    <Icon className="mr-2"
                      onPress={() => {
                        hideDialog(
                          setIdUpdate(item._id),
                          setNameUpdate(item.name),
                          setAgeUpdate(item.age.toString())
                        );
                      }}
                      name="pen"
                      size={20}
                      color="#7BA990" />
                    <Icon  onPress={() => {  setId(item._id), setDelete(true) }}
                      name="trash-can-outline"
                      size={20}
                      color="#7BA990" />
                  </DataTable.Cell>
                </DataTable.Row>
                 )}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{ flexGrow: 1, paddingBottom: 5 }}   />
    </DataTable>
      </View>
      <ModalController  visible={visibleDelete}  hideDialog={hideDialogDelete} title={"Bạn muốn xóa không?"}>
                    <View className="flex flex-row p-5 mr-4 justify-evenly">
                      <ButtonCommonLayerTwo backgroundColor={"rgb(22,101,52)"}
                        onOk={() => { handleDeleteItem({ id: id }), hideDialogDelete(true)  ;
                        }}
                        okText={"Xóa"}
                      />
                      <ButtonCommonLayerTwo backgroundColor={"rgb(220,38,38)"}
                        onOk={() => hideDialogDelete(true)}
                        okText={"Hủy"} />
                    </View>
      </ModalController>
      <ModalController
        visible={visibleAdd}
        hideDialog={hideDialogAdd}
        title={"Thêm mới"}>
        <InputCommonLayerTwo
          type={"text"}
          marginBottom={20}  
          onChange={(text) => {
            setName(text);
          }}
          value={name}
          placeholder={"Please enter your name "} />
        <InputCommonLayerTwo type={"number"}  onChange={(text) => setAge(text) }  value={age}  placeholder={"Please enter your age "} />
        <View className="flex flex-row py-5 justify-evenly">
          <ButtonCommonLayerTwo backgroundColor={"rgb(22,101,52)"}
            onOk={() => {
              name && age
                ? handleAddItem({ name: name, age: age })
                : alert("Vui lòng nhập tên hoặc tuổi "),
                setName(""),
                setAge(""),
                hideDialogAdd(true)
            }}
            okText={"Submit"}
          />
          <ButtonCommonLayerTwo backgroundColor={"rgb(220,38,38)"} onOk={() => hideDialogAdd(true)}
            okText={"Cancel"} />
        </View>
      </ModalController>
      <ModalController visible={visible}  hideDialog={hideDialog} title={"Cập nhật thông tin"} >
        <InputCommonLayerTwo
          type={"text"}
          marginBottom={20}
          onChange={(text) => {
            setNameUpdate(text);
          }}
          value={nameUpdate}
        />
        <InputCommonLayerTwo
          type={"number"}
          onChange={(text) => setAgeUpdate(text) }
          value={ageUpdate} />
        <View className="flex flex-row py-5 justify-evenly">
          <ButtonCommonLayerTwo  backgroundColor={"rgb(22,101,52)"} 
            onOk={() => { nameUpdate && ageUpdate
                ? handleUpdateItem({
                    name: nameUpdate,
                    id: idUpdate,
                    age: ageUpdate,
                  })
                : alert("Vui lòng nhập tên hoặc tuổi cần cập nhật"),
                setNameUpdate(""),
                setAgeUpdate(""),
                hideDialog(true);
            }}
            okText={"Submit"} />
          <ButtonCommonLayerTwo
            backgroundColor={"rgb(220,38,38)"}
            onOk={() => hideDialog(true)}
            okText={"Cancel"} />
        </View>
      </ModalController>
    </View>
  );
};

export default Items;
