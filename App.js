import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import AddItem from './components/AddItem';
// import 'react-native-get-random-values';
// import {v4 as uuidv4} from 'uuid';
import Header from './components/Header';
import ListItem from './components/ListItem';

const App = () => {
  const badRandom = () => {
    return Math.ceil(Math.random() * 10000);
  };

  const [items, setItems] = useState([
    {id: badRandom(), text: 'Milk'},
    {id: badRandom(), text: 'Eggs'},
    {id: badRandom(), text: 'Bread'},
    {id: badRandom(), text: 'Juice'},
  ]);

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  };

  const addItem = text => {
    if (!text) {
      Alert.alert('Error', 'Enter an item', {text: 'Ok'});
    } else {
      setItems(prevItems => {
        // console.log(`prevItems: ${prevItems}`);
        return [{id: badRandom(), text}, ...prevItems];
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Shopping LIst" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
