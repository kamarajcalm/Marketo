import React,{useState} from 'react'
import { StyleSheet, Text, View ,FlatList,Image} from 'react-native';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
const items = [
    {depart:"Grocery",name:"Quino fruit salad",rate:"10,000",img:"https://www.google.com/url?sa=i&url=http%3A%2F%2Fclipart-library.com%2Fclip-art%2Ffruit-transparent-background-18.htm&psig=AOvVaw2Szom-veYOWxeo8ZJgSQSg&ust=1608038642846000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPi70_LIze0CFQAAAAAdAAAAABAD"},
    {depart:"Hotel",name:"Quino fruit salad",rate:"10,000",img:"https://www.google.com/url?sa=i&url=http%3A%2F%2Fclipart-library.com%2Fclip-art%2Ffruit-transparent-background-18.htm&psig=AOvVaw2Szom-veYOWxeo8ZJgSQSg&ust=1608038642846000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPi70_LIze0CFQAAAAAdAAAAABAD"},
    {depart:"Bakery",name:"Quino fruit salad",rate:"10,000",img:"https://www.google.com/url?sa=i&url=http%3A%2F%2Fclipart-library.com%2Fclip-art%2Ffruit-transparent-background-18.htm&psig=AOvVaw2Szom-veYOWxeo8ZJgSQSg&ust=1608038642846000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPi70_LIze0CFQAAAAAdAAAAABAD"},
    {depart:"DressShop",name:"Quino fruit salad",rate:"10,000",img:"https://www.google.com/url?sa=i&url=http%3A%2F%2Fclipart-library.com%2Fclip-art%2Ffruit-transparent-background-18.htm&psig=AOvVaw2Szom-veYOWxeo8ZJgSQSg&ust=1608038642846000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPi70_LIze0CFQAAAAAdAAAAABAD"},
]
const fetchFont =()=>{
  return  Font.loadAsync({
        'aladin':require('../assets/fonts/Aladin-Regular.ttf')
    })
}

export default function  Home({navigation}) {
    const [fontLoaded, setfontLoaded] = useState(false)
    if(!fontLoaded){
        return<AppLoading
          startAsync ={fetchFont}
          onError={()=>{console.log("error")}}
          onFinish ={()=>{setfontLoaded(true)}}
        />
    }

    const renderBrach =({item})=>{
       console.log(item.img)
       return(
           <TouchableOpacity onPress={()=>{navigation.navigate('ItemScreen')}} style={{paddingTop:20,paddingVertical:20,paddingHorizontal:20}}>
              <View style={styles.branch}>
               <Text style={{textAlign:"center"}}>{item.depart}</Text>
               <View style={styles.imageContainer}>
                  <Image source={require('../assets/images/salad.png')} style={styles.image}/>
                  <Text>{item.name}</Text>
                  <View style={{flexDirection:"row",alignItems:"space-between"}}>
                     <Text>{item.rate}</Text>
                     <Ionicons name="md-add-circle" size={24} color="black" />
                  </View>
               </View>
               <View>
                 
               </View>
           </View>
           </TouchableOpacity>
           
       )
    }
  return (
        <View style={styles.container}>
             <StatusBar style="auto"/>
            <Text style={{textAlign:"center",fontFamily:"aladin",fontSize:50}}>Marketo</Text>
             <View style={styles.list}>
                 <FlatList
                   data={items}
                   keyExtractor={(item,index)=>index.toString()}
                   numColumns={2}
                   renderItem={renderBrach}
                   
                 />
             </View>

        </View>
    )
  }
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:Constants.statusBarHeight
  },
  list:{
     
      alignItems:"center",
      justifyContent:"center",
      marginTop:windowHeight/5
  },
  branch:{
      
  
      height:windowHeight*0.2,
      width:windowWidth*0.4,
      
  },
  imageContainer:{
      height:"80%",
      width:'100%',
      backgroundColor:"#FFFFAD",
      borderRadius:10,
      marginTop:10,
       alignItems:"center",
    justifyContent:"center"
  },
  image:{
     
     
      height:"50%",
      width:"50%",
  
   
      
  }
});