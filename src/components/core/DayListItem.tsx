
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { Link } from "expo-router"


type DayListItemProps =  {
    day: number;
  }

function DayListItem({ day  }: DayListItemProps) {
  return (
    <Link href={`/day${day}`} asChild>
      <Pressable   style={styles.box}>
          <Text style={styles.text}>{day.toString()}</Text>
      </Pressable>
    </Link>
  )
}

export default DayListItem


const styles = StyleSheet.create({

    box: {
      backgroundColor: "#F9EDE3",
      flex:1,
      aspectRatio: 1,
  
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: "#9b4521",
      borderRadius: 20,
  
      justifyContent: "center",
      alignItems: "center"
      
    },
  
    text:{
      color: "#9b4521",
      fontSize: 70,
      fontFamily:"AmaticBold"
    }
  
  });
  