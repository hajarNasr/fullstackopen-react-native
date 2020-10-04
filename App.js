import React from "react";
import { View } from 'react-native';
import Main from "./src/components/Main";
import AppBar from './src/components/AppBar';

export default function App() {
  return (
    <View>
      <AppBar/>
      <Main/>
    </View>
  );
}