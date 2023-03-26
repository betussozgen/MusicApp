/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
} from 'react-native';
import music_data from './music-data.json';
import SongCard from "./components/SongCard";

function App(){

  const renderSong = ({item}:{item: any})=> <SongCard song={item}/>
  const renderSeperator = () => <View style={styles.seperator}></View>
  
 

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
        keyExtractor={(item) => item.id}
        data={music_data}
        renderItem={renderSong}
        ItemSeparatorComponent={renderSeperator}
        
        />

        
      </View>
      
    </SafeAreaView>
  );
}


export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  seperator: {
    borderWidth: 1,
    borderColor: '#e0e0e0'
  }
})
