/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  FlatList,
} from 'react-native';
import music_data from './music-data.json';
import SongCard from "./components/SongCard";
import SearchBar from './components/SearchBar';


function App(){

  const [list, setList] = useState(music_data);

  const renderSong = ({item}:{item: any})=> <SongCard song={item}/>
  const renderSeperator = () => <View style={styles.seperator}></View>
  const handleSearch = ({text}:{text: any})  => {
    const filteredList = music_data.filter(song => {
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

       return currentTitle.indexOf(searchedText) > -1;
    });

    setList(filteredList);
  };
 

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <SearchBar onSearch = {handleSearch}/>
        <FlatList
        keyExtractor={(item) => item.id}
        data={list}
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
