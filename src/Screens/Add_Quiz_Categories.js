import { useLinkProps } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, SafeAreaView, TextInput, Image, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import firebase from '../services/firebaseServices';
import { AntDesign, Entypo, Ionicons, Feather, EvilIcons } from 'react-native-vector-icons';
import * as ImagePicker from 'expo-image-picker';

const Add_Quiz_Categories = (props) => {
  const [quiztitile, onQuizTitle] = useState('');
  const [image, setImage] = useState(null);

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

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
    const ref = firebase.storage().ref().child(quiztitile);
    var url =   result.uri
    ref.putString(url, 'data_url').then((snapshot) => {
      console.log(snapshot,'Uploaded a data_url string!');
    });

      setImage(result.uri);
    }
  };

  const onAddQuizCategories = () => {
  
    // firebase
    // .database()
    // .ref('quizList/' + new Date().valueOf())
    // .set({
    //   title: quiztitile,  
    //   image: image,
    // });
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

        <View style={{flexDirection:'row'}}>
          <Text style={styles.t1}>Upload Quiz Image</Text>
          <AntDesign style={styles.upload_icon} name="clouduploado" color='#06d3f7' size={36} onPress={pickImage}/>
        </View>

        {image ?
          <View style={{flex:1,alignContent:'center',alignItems:'center'}}>
            <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
          </View>
        :null}

        <View style={{flex:1,alignContent:'center',alignItems:'center'}}>
          <Button
            title="Add Quiz Categories"
            type="solid"
            onPress={()=> onAddQuizCategories()}
            titleStyle={{textAlign:'center'}}
            buttonStyle={{borderRadius:10, marginBottom:10, marginTop:5, backgroundColor:'#06d3f7'}}
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
    height:50,
    fontSize:20,
    borderColor:'#19203c',
    borderRadius:10,
    borderWidth:1.5,
    paddingLeft:10
  },
  upload_icon: {
    marginTop:15,
    marginLeft:20,
    marginBottom:10
  }
});

export default Add_Quiz_Categories;
