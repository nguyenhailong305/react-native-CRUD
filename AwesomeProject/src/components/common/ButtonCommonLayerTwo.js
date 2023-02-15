import React from "react";
import ButtonCommon from "./Button";
export default function ButtonCommonLayerTwo(props) {
  const { title, color, backgroundColor, okText , padding , onOk} = props;
  return (
    <ButtonCommon
      width={80}
      height={45}
      title={title}
      color={"white"}
      okText={okText}  
      textAlign={"center"}
      padding= {14}
      backgroundColor={backgroundColor}
      onOk = {onOk}
    />
  );
}
