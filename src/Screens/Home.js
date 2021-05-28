import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { FlatList, StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, Dimensions} from 'react-native';
import { Avatar ,ListItem, Button} from "react-native-elements";
import * as StaticData  from '../constant/StaticData';

const Home = (props) => {

  return (
    <View>
      <View style={styles.userLayout}>
        <ListItem containerStyle={{backgroundColor:'transparent',marginTop:20}}>
        <Avatar
          rounded
          size={40}
          resizeMode='stretch'
          source={{ uri: 'https://reqres.in/img/faces/8-image.jpg'}}
        />
        <ListItem.Content>
          <ListItem.Title style={{color:'#fff', fontWeight:'bold'}}>Michael Lawson</ListItem.Title>
        </ListItem.Content>
        </ListItem>
      </View>

      <View style={styles.gamecard}>
        <ImageBackground resizeMode='stretch' style={{height: "100%", width:'100%', borderRadius:15, overflow:'hidden'}} source={require('../assets/images/gamecard.jpg')}/>
      </View>

      <View style={styles.titlequiz}>
        <View style={{flexDirection:'row'}}>
          <Text style={{fontSize:20, fontWeight:'bold'}}>Top Quiz Categories</Text>
          <View style={{flex:1,alignContent:'flex-end',alignItems:'flex-end'}}>
            <Button
            title="View All"
            type="outline"
            titleStyle={{fontSize:12, fontWeight:'bold'}}
            buttonStyle={{borderRadius:7,width:70,height:25, marginTop:2}}
            />
          </View>
        </View>
      </View>

      <FlatList
        numColumns={3}
        data={StaticData.QuizList}  
        style={{marginBottom:20}}
        keyExtractor={(item, index) => String(index)} 
        renderItem={({item}) => 
        <TouchableOpacity style={{width: Dimensions.get('screen').width / 3 - 20, borderRadius:15, margin: 10, height:120, backgroundColor:'#fff'}} onPress={()=> props.navigation.navigate("MyStack",{ screen: 'QuizDashboard',params: {quizname: item}})}> 
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Image style={{ marginTop:12, width:40,height:40}}   source={item.image} />
          </View>
          <Text style={{paddingRight:10, paddingLeft:10, marginBottom:15, textAlign:"center", color:'gray', fontSize:15, fontWeight:"bold" }}>{item.title}</Text>  
        </TouchableOpacity>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  userLayout: {
    width:'100%',
    height:215,
    backgroundColor:'#292a30',
    borderRadius:25,
    marginTop:-20
  },
  gamecard: {
    margin:20,
    height:210,
    backgroundColor:'#000',
    borderRadius:15,
    marginTop:-100
  },
  titlequiz: {
    marginTop:5,
    marginRight:20,
    marginLeft:20,
    marginBottom:20
  }
});

export default Home;
