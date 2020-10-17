import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    padding: 10,
    backgroundColor:"whitesmoke"
  },
  itemRanks: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  itemHeader: {
    display: "flex",
    flexDirection: "row",
  },
  avatar: {
    width: 50,
    height: 50,
  },
  decContainer: {
    padding: 5,
    flex:1,
  },
  languageContanier: {
    alignSelf: 'flex-start'
  },
  language: {
    padding: 6,
    backgroundColor: "teal",
    color:"whitesmoke",
    marginTop:7,
    borderRadius:5,
  },
  fullName:{
    fontWeight:"bold",
  },
  textCenter:{
    textAlign:"center",
  }
});
const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.itemHeader}>
        <Image source={{ uri: item.ownerAvatarUrl }} style={styles.avatar} />
        <View style={styles.decContainer}>
          <View>
            <Text style={styles.fullName}>{item.fullName}</Text>
          </View>
          <View>
            <Text>{item.description}</Text>
          </View>
          <View style={styles.languageContanier}>
            <Text style={styles.language}>{item.language}</Text>
         </View>
        </View>
      </View>

      <View style={styles.itemRanks}>
          <CustomText
               title ="Stars"
               value = {item.stargazersCount}
          />
          <CustomText
               title ="Forks"
               value = {item.forksCount}
          />
          <CustomText
               title ="Reviews"
               value = {item.reviewCount}
          />
          <CustomText
               title ="Rating"
               value = {item.ratingAverage}
          />

      </View>
    </View>
  );
};

export default RepositoryItem;


const CustomText = ({title, value})=>(
  <View>
    <View>
      <Text style={styles.textCenter}>{roundNum(value)}</Text>
    </View>
    <View>
      <Text style={styles.textCenter}>{title}</Text>
    </View>
  </View>
)

const roundNum = num =>(
  num >= 1000?
    `${parseFloat((num/1000).toFixed(1))}k`
  :
  num
);