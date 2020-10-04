import React from 'react';
import { View, Text } from 'react-native';

const RepositoryItem = ({item})=>{
    return(
        <View>
           <View>
               <Text>FullName: {item.fullName}</Text>
           </View>
           <View>
               <Text>Description: {item.description}</Text>
           </View>
           <View>
               <Text>Language: {item.language}</Text>
           </View>
           <View>
               <Text>Stars: {item.stargazersCount}</Text>
           </View>
           <View>
               <Text>Forks: {item.forksCount}</Text>
           </View>
           <View>
               <Text>Reviews: {item.reviewCount}</Text>
           </View>
           <View>
               <Text>Rating: {item.ratingAverage}</Text>
           </View>
        </View>
    )
}

export default RepositoryItem;