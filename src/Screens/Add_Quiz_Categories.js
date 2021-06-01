import { useLinkProps } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, SafeAreaView, TextInput, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import firebase from '../services/firebaseServices';


const Add_Quiz_Categories = (props) => {
  const [quiztitile, onQuizTitle] = useState('');

  useEffect(() => {
    const dbRef = firebase.database().ref();
    dbRef.child("quizList").get().then((snapshot) => {
      if (snapshot.exists()) {
        var t = new Date().valueOf();
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  },[])


  const onAddQuizCategories = () => {
    firebase
    .database()
    .ref('quizList/' + new Date().valueOf())
    .set({
      title: quiztitile,  
      image: require('../assets/images/1.png'),
    });
    props.navigation.navigate("BottomTabStack", { screen: 'Home',params: {first: 'add'}})
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.layout}>

        <View>
          <Text style={styles.t1}>Add Quiz Title</Text>
          <TextInput
            style={styles.input}
            onChangeText={onQuizTitle}
            value={quiztitile}
            placeholder="Enter Quiz Title"
          />
        </View>

        <View style={{flex:1,alignContent:'center',alignItems:'center'}}>
          <Button
            title="Add Quiz Categories"
            type="solid"
            onPress={()=> onAddQuizCategories()}
            titleStyle={{textAlign:'center'}}
            buttonStyle={{borderRadius:10, marginBottom:10, marginTop:15, backgroundColor:'#06d3f7'}}
          />
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  layout: {
    flex: 1,
  },
  t1: {
    marginTop:20,
    marginLeft:20,
    fontSize:18,
    marginBottom:3,
    color:'#19203c'
  },
  input: {
    marginLeft:20,
    marginRight:20,
    // marginBottom:20,
    height:50,
    fontSize:20,
    borderColor:'#19203c',
    borderRadius:10,
    borderWidth:1.5,
    paddingLeft:10
  }
});

export default Add_Quiz_Categories;
