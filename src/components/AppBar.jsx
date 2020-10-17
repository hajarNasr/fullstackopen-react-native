import React from 'react';
import { View,  Text, ScrollView,
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
    justifyContent:"space-between",
    flexGrow : 1
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
    },

    scroll: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center'
    },

});

const AppBar = () => {
  return (
      <ScrollView horizontal contentContainerStyle={styles.container}>
        <AppBarTab name="Repositories"/> 
        <Link to="/sign-in">
          <Text style={styles.signInText}>Sign in</Text>
        </Link>   
      </ScrollView>
  );
};

export default AppBar;