import React from "react";
import { NativeRouter } from 'react-router-native';
import { View } from 'react-native';
import Main from "./src/components/Main";

export default function App() {
  return (
    <View>
      <NativeRouter>
         <Main/>
      </NativeRouter>
    </View>
  );
}