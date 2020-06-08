import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList'

// import { YellowBox } from 'react-native';
// YellowBox.ignoreWarnings(['Warning: ...']);


const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header headerText={'The Cat Api'}/>
      <AlbumList />
    </View>
  );
};

const styles = StyleSheet.create({

});

export default App;
