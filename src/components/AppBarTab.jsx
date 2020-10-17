import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import { Link } from 'react-router-native';
import Text from './Text';

const AppBarTab = ({ name }) => {
  return (
    <TouchableWithoutFeedback>
         <Link to="/">
            <Text style={{color:"whitesmoke", 
                          alignSelf:"flex-start",
                          marginTop:8,
                          padding:5,
                        }}>
                          {name}
                          </Text>
         </Link>
    </TouchableWithoutFeedback>
  );
};

export default AppBarTab;
