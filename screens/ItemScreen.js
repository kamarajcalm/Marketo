import React,{useState} from 'react'
import { View, Text ,StyleSheet, Image} from 'react-native'
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { Dimensions } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
const fetchFont =()=>{
  return  Font.loadAsync({
        'aladin':require('../assets/fonts/Aladin-Regular.ttf')
    })
}
const stores =[{},{},{},{},{},{}]
export default function ItemScreen({navigation}) {
       const [fontLoaded, setfontLoaded] = useState(false)
    if(!fontLoaded){
        return<AppLoading
          startAsync ={fetchFont}
          onError={()=>{console.log("error")}}
          onFinish ={()=>{setfontLoaded(true)}}
        />
    }
 const renderStores=()=>{
       return(
           <TouchableOpacity onPress={()=>{navigation.navigate('storeDetails')}}>
                 <View style={{flexDirection:"row",alignItems:"center",paddingLeft:windowWidth*0.1}}>
                      <Image 
                         source={{uri:"https://lh3.googleusercontent.com/proxy/OBUUA0Ju-RyrYm7TqC5dq89JO9torxFBNClbU5Kep-nrWi74Yhg_6rd_LsDLgyLUwpwBrAkfJHzp_up1s3iD9A7drIgB8xja-68GBkklF4VRvJrg454jxz9rE66qu3ZA_jP0S6MxJldfWxCIL_jxAjDtSebQdikFUf6Zrw"}}
                         style={{height:windowHeight*0.1,width:windowWidth*.2,borderRadius:windowHeight*0.05,}}
                     />
                    
                                  {/* ADDRESS VIEW */}
                   <View style={{paddingTop:windowHeight*0.05}}>
                        <Text style={{fontSize:20,fontWeight:"bold",paddingTop:windowHeight*0.03}}>Don stores</Text>
                      <View style={{marginLeft:windowWidth*0.03}}>
                          <Text style={{fontWeight:"bold"}}>Address:</Text>
                      <Text style={{}}>108 Ambani street,Bill gates Road,</Text>
                      <Text style={{}}>Mark Avenue,Donald-602433</Text>
                      </View>
                    
                   </View>
                 </View>
                   
             </TouchableOpacity>
       )
    }
    return (
        <View style={styles.container}>
             <StatusBar style="auto"/>
                     {/*HEADERS  */}
             <View style={{flexDirection:"row"}}>
                 <TouchableOpacity onPress={()=>{navigation.goBack()}} >
                         <Ionicons name="ios-arrow-back" size={27} color="black" style={{marginTop:windowHeight*0.01,paddingLeft:windowWidth*.01}}/>
                 </TouchableOpacity>
               
                <Text style={{textAlign:"center",fontFamily:"aladin",fontSize:50,marginLeft:windowWidth*0.25}}>Marketo</Text>
             </View>
             <View>
                 <Text style={{textAlign:"center",fontSize:20,marginTop:windowHeight*0.01,fontWeight:"bold"}}>Grocery stores in Tiruthani</Text>
             </View>

                            {/* STORES */}
                            <FlatList
                            style={{marginTop:windowHeight*0.09,}}
                              data={stores}
                              keyExtractor={(item,index)=>index.toString()}
                              renderItem={renderStores}
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
})