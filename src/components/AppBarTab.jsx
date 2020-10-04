import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import Text from './Text';

const AppBarTab = ({ name }) => {
  return (
    <TouchableWithoutFeedback>
         <Text style={{color:"whitesmoke", marginTop:10, padding:5}}>{name}</Text> 
    </TouchableWithoutFeedback>
  );
};

export default AppBarTab;
