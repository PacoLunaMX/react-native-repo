import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import DayListItem from './src/components/core/DayListItem';

export default function App() {

  const  days = Array.from({length:24}, (_,i)=>i+1)
  

  return (
    <View style={styles.container}>

      <FlatList  
        data={days}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
        numColumns={2}
        renderItem={({ item })=> <DayListItem day={item}/> }
      />
      
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  
  content:{
    gap:10,
    padding:10
  },

  column:{
    gap:10
  },

});
