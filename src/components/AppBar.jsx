import React from 'react';
import { View,  Text,
         StyleSheet } 
       from 'react-native';
import { Link } from "react-router-native";
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.AppBarBackground,
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between"
  },

  signInText: {
     marginRight:30,
     marginBottom:10,
     marginTop:15,
     textAlign:"right",
     borderColor:"whitesmoke",
     borderStyle:"solid",
     borderWidth:1,
     alignSelf: 'flex-end',
     backgroundColor:"whitesmoke",
     padding:5,
    }

});

const AppBar = () => {
  return (
    <View>
      <View style={styles.container}>
        <AppBarTab name="Repositories"/> 
        <Link to="/sign-in">
          <Text style={styles.signInText}>Sign in</Text>
        </Link> 
      </View>
    </View>
  )
};

export default AppBar;