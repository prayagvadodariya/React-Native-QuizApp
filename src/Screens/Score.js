import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Button} from "react-native-elements";
import { AntDesign, Entypo, Ionicons, Feather, EvilIcons } from 'react-native-vector-icons';

 const Score = (props) => {

 const onBack = () => {
  props.navigation.navigate("BottomTabStack")
 }

  return (
    <View style={styles.container}>
      <View style={{marginTop:15, marginLeft:15, marginRight:15}}>
        <View>
         <Text style={{fontSize:20,textAlign:'center',color:'#fff',marginTop:25,fontWeight:'bold'}}>Quiz Result</Text>
        </View>

        <View style={{flex:1, justifyContent:'center', alignItems:'center', marginTop:35}}>
          <Image resizeMode='stretch' style={{height: 180, width:180}} source={require('../assets/images/quizwin.png')}/>
        </View>

        <View>
          <Text style={{fontSize:25,textAlign:'center',color:'#fff',marginTop:15,fontWeight:'bold', fontFamily:'Courier'}}>Congratulations!</Text>
          <Text style={{fontSize:18,textAlign:'center',color:'#a7acbc',marginTop:5}}>You have successfully complete this Quiz</Text>
          <Text style={{fontSize:18,textAlign:'center',color:'#848896',marginTop:10}}>YOUR SCORE</Text>
        </View>

        <View style={{justifyContent:'center',flexDirection:'row',marginTop:10}}>
          <Text style={{fontSize:35, color:'#149981', marginTop:10, fontWeight:'bold'}}>10</Text>
          <Text style={{fontSize:35, color:'#fff',marginTop:10, fontWeight:'bold'}}> / 10</Text>
        </View>

        <View>
          <Text style={{fontSize:18, textAlign:'center', color:'#848896', marginTop:15}}>EARN COINS</Text>
          <View style={{justifyContent:'center',flexDirection:'row'}}>
            <Image resizeMode='stretch' style={{height: 30, width:30, marginTop:10, marginRight:10}} source={require('../assets/images/coins.png')}/>
            <Text style={{fontSize:35, color:'#fff', marginTop:-2, fontWeight:'bold'}}>300</Text>
          </View>  
        </View>

        <View style={{marginTop:35}}>
          <View style={{flexDirection:'row'}}>
            <View style={{flex:1,alignContent:'flex-start',alignItems:'flex-start'}}>
            <Button
                icon={
                  <AntDesign
                    name="sharealt"
                    size={18}
                    style={{marginTop:4, marginRight:10}}
                    color="#848896"
                  />
                }
                title="Share Score"
                type="solid"
                titleStyle={{textAlign:'center',color:'#848896'}}
                style={{width:150,height:150}}
                buttonStyle={{borderRadius:10, backgroundColor:'#fff'}}
              />
              </View>
              <View style={{flex:1,alignContent:'flex-end',alignItems:'flex-end'}}>
                <Button
                  title="Task More Quiz"
                  type="solid"
                  onPress={()=> onBack()}
                  titleStyle={{textAlign:'center'}}
                  style={{width:150,height:150}}
                  buttonStyle={{borderRadius:10, backgroundColor:'#06d3f7'}}
                />
              </View>
            </View>
            <TouchableOpacity style={{alignItems:'center'}} onPress={()=> onBack()}>
               <AntDesign style={{marginTop:-60}} name="closecircleo" size={35} color="#848896"/>
            </TouchableOpacity>    
        </View>

        

      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#19203c'
  }
});

export default Score;
