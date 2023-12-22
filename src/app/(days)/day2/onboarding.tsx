import { Text, View, StyleSheet, SafeAreaView, Pressable } from "react-native"
import { Stack, router } from "expo-router"
import { FontAwesome5 } from "@expo/vector-icons"
import { useState } from "react"
import { StatusBar } from "expo-status-bar"



const onboardingSteps = [
    {
        icon:"snowflake",
        title:"Welcome to Devember",
        description:"Daily React Native Tutorials during December",
    },
    {
        icon:"people-arrows",
        title:"Learn and grow together",
        description:"Learn by building 24 projects with React Native and Expo",
    },
    {
        icon:"people-arrows",
        title:"Education for Children",
        description:"Contribute to the foundraiser 'Education for Children'",
    },
]


export default function OnboardingScreen(){
    const [ screenIndex, setScreenIndex  ] = useState(0);
    
    const data = onboardingSteps[screenIndex]

    const onContinue = ()=>{
        const isLastScreen = screenIndex + 1 === onboardingSteps.length
        if(isLastScreen){
            endOnboarding()
        }else{
            setScreenIndex(screenIndex+1)
        }
    }

    const endOnboarding = ()=>{
        setScreenIndex(0)
        router.back()
    }


    return (
    <SafeAreaView style={styles.page}>
        <Stack.Screen options={{ headerShown:false }}/>
        <StatusBar style="light"/>
        <View style={styles.pageContent}>
            <View style={styles.stepIndicatorContainer}>
                {onboardingSteps.map((setp, index )=>(
                    <View 
                        key={index}
                        style={[
                            styles.stepIndicator, 
                            { backgroundColor: index === screenIndex ? "#CEF202" : "gray" }]
                        }
                    />
                ))}

            </View>
            <FontAwesome5  style={styles.image} name={data.icon} size={100} color="#CEF202"/>
            <View style={styles.footer}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.description}>{data.description}</Text>

                <View style={styles.buttonsRow}>
                    <Text onPress={endOnboarding} style={styles.buttonText}>Skip</Text>
                    <Pressable onPress={onContinue} style={styles.button}>
                        <Text style={styles.buttonText}>Continue</Text>
                    </Pressable>
                    
                </View>
            </View>
        </View>
    </SafeAreaView>
)
}

const styles = StyleSheet.create({
    page:{
        
        flex:1,
        justifyContent:"center",
        backgroundColor:'#15141A',
    },
    pageContent:{
        padding:20,
        flex:1,

    },
    image:{
        alignSelf:"center",
        margin:20,
        marginTop:30
    },
    footer:{
        marginTop: "auto"
    },
    title:{
        color:'#FDFDFD',
        fontSize:50,
        fontFamily:"InterBlack",
        letterSpacing: 1.3,
        marginVertical:10
    },
    description:{
        color:"gray",
        fontSize:20,
        fontFamily:"Inter",
        lineHeight:28

    },
    buttonsRow:{
        marginTop:20,
        flexDirection:"row",
        alignItems:"center",
        gap:20
    },
    button:{
        backgroundColor:"#302E38",
        borderRadius:20,
        alignItems:"center",
        flex:1
    },
    buttonText:{
        color:"#FDFDFD",
        fontFamily:"InterSemi",
        fontSize:16,
        padding:15,
        paddingHorizontal:25
    },
    stepIndicatorContainer:{
        flexDirection:"row",
        gap:8
    },
    stepIndicator:{
        flex:1,
        height:5,
        backgroundColor:"gray",
        margin:5,
        borderRadius:10
    }
})