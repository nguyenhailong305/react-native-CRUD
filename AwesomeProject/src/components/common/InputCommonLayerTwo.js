import React from "react";
import InputCommon from "./Input";
export default function InputCommonLayerTwo(props) {
  const {  okText , onChange , value , type , marginBottom , placeholder } = props;
  return (
    <InputCommon
      width={310}
      height={60}
      borderRadius={8}
      borderWidth={1}
      value ={value}
      onChange ={onChange}
      type={type}
      marginBottom ={marginBottom} 
      placeholder = {placeholder}
    />
  );
}
