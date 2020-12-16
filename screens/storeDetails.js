import React from 'react'
import { View, Text,StyleSheet ,TouchableOpacity, Image,FlatList} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
const items = [
    {depart:"Grocery",name:"Quino fruit salad",rate:"10,000",img:"https://www.google.com/url?sa=i&url=http%3A%2F%2Fclipart-library.com%2Fclip-art%2Ffruit-transparent-background-18.htm&psig=AOvVaw2Szom-veYOWxeo8ZJgSQSg&ust=1608038642846000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPi70_LIze0CFQAAAAAdAAAAABAD"},
    {depart:"Hotel",name:"Quino fruit salad",rate:"10,000",img:"https://www.google.com/url?sa=i&url=http%3A%2F%2Fclipart-library.com%2Fclip-art%2Ffruit-transparent-background-18.htm&psig=AOvVaw2Szom-veYOWxeo8ZJgSQSg&ust=1608038642846000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPi70_LIze0CFQAAAAAdAAAAABAD"},
    {depart:"Bakery",name:"Quino fruit salad",rate:"10,000",img:"https://www.google.com/url?sa=i&url=http%3A%2F%2Fclipart-library.com%2Fclip-art%2Ffruit-transparent-background-18.htm&psig=AOvVaw2Szom-veYOWxeo8ZJgSQSg&ust=1608038642846000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPi70_LIze0CFQAAAAAdAAAAABAD"},
    {depart:"DressShop",name:"Quino fruit salad",rate:"10,000",img:"https://www.google.com/url?sa=i&url=http%3A%2F%2Fclipart-library.com%2Fclip-art%2Ffruit-transparent-background-18.htm&psig=AOvVaw2Szom-veYOWxeo8ZJgSQSg&ust=1608038642846000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPi70_LIze0CFQAAAAAdAAAAABAD"},
]
export default function storeDetails({navigation}) {
      const renderBrach =({item})=>{
       
       return(
           <View style={{paddingTop:20,paddingVertical:20,paddingHorizontal:20}}>
              <View style={styles.branch}>
               <Text style={{textAlign:"center"}}>{item.depart}</Text>
               <View style={styles.imageContainer}>
                 <TouchableOpacity style={{marginLeft:windowWidth*0.3}}>
                        <AntDesign name="hearto" size={17} color="orange" />
                 </TouchableOpacity>
                   
                   <TouchableOpacity  style={{ height:windowHeight*0.1, width:windowWidth*0.2}}>
                             <Image source={require('../assets/images/salad.png')} style={styles.image}/>
                   </TouchableOpacity>
             
                  <Text>{item.name}</Text>
                  <View style={{alignSelf:"flex-start",flexDirection:"row",width:"100%"}}>
                          <FontAwesome name="rupee" size={17} color="orange" style={{marginTop:3}}/>
                     <Text style={{marginLeft:windowWidth*0.01,color:"orange"}}>{item.rate}</Text>
                     <TouchableOpacity>
                        <Ionicons name="md-add-circle" size={24} color="orange" style={{marginLeft:windowWidth*0.18}}/>
                     </TouchableOpacity>
                     
                  </View>
               </View>
               <View>
                 
               </View>
           </View>
           </View>
           
       )
    }
    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>
                       {/* HEADERS */}
             <View style={{flexDirection:"row"}}>
                 <TouchableOpacity onPress={()=>{navigation.goBack()}} >
                         <Ionicons name="ios-arrow-back" size={27} color="black" style={{marginTop:windowHeight*0.01,paddingLeft:windowWidth*.01}}/>
                 </TouchableOpacity>
               
                <Text style={{textAlign:"center",fontFamily:"aladin",fontSize:50,marginLeft:windowWidth*0.2}}>Don Stores</Text>
             </View>
             <View style={{padding:windowWidth*0.07}}>
                 <Image
                   source={{uri:"https://images.pexels.com/photos/868110/pexels-photo-868110.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}}
                   style={{height:windowHeight*0.2,width:"100%",resizeMode:"cover"}}
                 />
             </View>
              <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                        
                      <View style={{marginLeft:windowWidth*0.03}}>
                          <Text style={{fontWeight:"bold"}}>Address:</Text>
                      <Text style={{}}>108 Ambani street,</Text>
                      <Text style={{}}>Bill gates Road,</Text>
                      <Text style={{}}>Mark Avenue,</Text>
                      <Text style={{}}>Donald-602433</Text>
                      </View>
                       <View style={{marginLeft:windowWidth*0.1}}>
                           <Text style={{fontWeight:"bold"}}>Map Link:</Text>
                       </View>
                   </View>
                   {/* STORE TIMINGS */}

                   <View style={{marginTop:10,paddingLeft:10}}>
                       <Text>Store is Active:Timings(8-AM to 10PM)</Text>
                   </View>

                   {/* CONTACT */}

                   <Text style={{marginTop:10,paddingLeft:10}}><Text style={{fontWeight:"bold"}}>Contact:</Text>89977676767</Text>
                      {/* STORE ITEMS */}
           
            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-around",marginTop:windowHeight*0.04}}>
               <Text style={{fontWeight:"bold",fontSize:20}}>Groceries</Text>
               <Text style={{fontWeight:"bold",fontSize:20}}>Snacks</Text>
               <Text style={{fontWeight:"bold",fontSize:20}}>Vegetables</Text>
            </View>
                           {/* ITEMS */}
                           
                            <FlatList
                            style={{
      
      }}
                                data={items}
                                keyExtractor={(item,index)=>index.toString()}
                                    horizontal={true}
                                renderItem={renderBrach}
                   
                            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:Constants.statusBarHeight
  },
    branch:{
      
  
      height:windowHeight*0.2,
      width:windowWidth*0.4,
      
  },
  imageContainer:{
      height:"90%",
      width:'100%',
      backgroundColor:"#FFFFAD",
      borderRadius:10,
      marginTop:10,
       alignItems:"center",
    justifyContent:"center"
  },
  image:{
     
     
      height:"100%",
      width:"100%",
  
   
      
  }
})