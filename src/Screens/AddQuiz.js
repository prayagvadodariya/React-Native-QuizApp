import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, SafeAreaView, Picker, TextInput, Text, Dimensions, View, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import firebase from '../services/firebaseServices';

const AddQuiz = (props) => {
  const [quizselect, onQuizselect] = useState();
  const [question, onQuestion] = useState('');
  const [optionA, onOptionA] = useState('');
  const [optionB, onOptionB] = useState('');
  const [optionC, onOptionC] = useState('');
  const [optionD, onOptionD] = useState('');
  const [correctAnswer, onCorrectAnswer] = useState('');
  const [selectedValue, setSelectedValue] = useState();
  
  useEffect(() => {
    const dbRef = firebase.database().ref();
    dbRef.child("quizList").get().then((snapshot) => {
      if (snapshot.exists()) {
        // onQuizselect(snapshot.val());
        var dataArray = [];

        snapshot.forEach(function(snap) {
          var item = snap.val();
          item.key = snap.key;

          dataArray.push(item);
        });
        setSelectedValue(dataArray[0].key)
       
        return onQuizselect(dataArray)   

      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  },[])


  const onAddNewQuiz = () => {
   var  data = {
    // title: quiztitile,
    question: question,
    0 : optionA,
    1 : optionB,
    2 : optionC,
    3 : optionD,
    answers: correctAnswer,
   } 
  //  console.log('add quiz',data);
   onSet(data)
  }

  const onSet = (data) => {
    if(data.answers==='B'){
      var answers = {
        "0" : { id: "1", text: data[0] },
        "1" : { id: "2", text: data[1], correct: true },
        "2" : { id: "3", text: data[2] },
        "3" : { id: "4", text: data[3] }
       }
    }else if(data.answers==='A') {
      var answers = {
        "0" : { id: "1", text: data[0], correct: true  },
        "1" : { id: "2", text: data[1] },
        "2" : { id: "3", text: data[2] },
        "3" : { id: "4", text: data[3] }
       }  

    }else if(data.answers==='C') {
      var answers = {
        "0" : { id: "1", text: data[0] },
        "1" : { id: "2", text: data[1] },
        "2" : { id: "3", text: data[2], correct: true },
        "3" : { id: "4", text: data[3] }
       }

    }else if(data.answers==='D') {
      var answers = {
        "0" : { id: "1", text: data[0] },
        "1" : { id: "2", text: data[1] },
        "2" : { id: "3", text: data[2] },
        "3" : { id: "4", text: data[3], correct: true }
       }
    }
    var categories_id = selectedValue.toString()
    firebase
      .database()
      .ref('quizList/' + categories_id + '/Quiz/' + new Date().valueOf())
      .set({
        question: data.question,
        answers: answers
      });
      props.navigation.navigate("BottomTabStack", { screen: 'Home',params: {first: 'add'}})
  }
 
 if(!quizselect){
   return(
  <Text>LOADING</Text>
   )
 }
  return (
      <ScrollView style={styles.layout}>

        <View style={styles.picker}>
          <Text style={styles.t1}>Select Quiz Categories</Text>
          <Picker
            selectedValue={selectedValue}
            style={{ height: 50, borderRadius:10, paddingLeft:5, marginLeft:15}}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          >
            {quizselect.map((item,i) => {
            return(<Picker.Item label={item.title} value={item.key} key={i}/>)
            })}
          </Picker>
        </View>

        <View>
          <Text style={styles.t1}>Question</Text>
          <TextInput
            style={styles.input}
            onChangeText={onQuestion}
            value={question}
            placeholder="Enter Question"
          />
        </View>

        <View>
          <Text style={styles.t1}>Option A</Text>
          <TextInput
            style={styles.input}
            onChangeText={onOptionA}
            value={optionA}
            placeholder="Enter Option A"
          />
        </View>

        <View>
          <Text style={styles.t1}>Option B</Text>
          <TextInput
            style={styles.input}
            onChangeText={onOptionB}
            value={optionB}
            placeholder="Enter Option B"
          />
        </View>

        <View>
          <Text style={styles.t1}>Option C</Text>
          <TextInput
            style={styles.input}
            onChangeText={onOptionC}
            value={optionC}
            placeholder="Enter Option C"
          />
        </View>

        <View>
          <Text style={styles.t1}>Option D</Text>
          <TextInput
            style={styles.input}
            onChangeText={onOptionD}
            value={optionD}
            placeholder="Enter Option D"
          />
        </View>

        <View>
          <Text style={styles.t1}>Correct Answer</Text>
          <TextInput
            style={styles.input}
            onChangeText={onCorrectAnswer}
            value={correctAnswer}
            placeholder="Enter Option(Ex: A & B & C & D)"
          />
        </View>

        <View style={{flex:1,alignContent:'center',alignItems:'center'}}>
          <Button
            title="Add New Quiz"
            type="solid"
            onPress={()=> onAddNewQuiz()}
            titleStyle={{textAlign:'center'}}
            buttonStyle={{borderRadius:10, marginBottom:15, marginTop:15, backgroundColor:'#06d3f7'}}
          />
        </View>

      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  layout: {
    flex: 1,
  },
  picker: {
    flex: 1,
    width:'auto' 
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

export default AddQuiz;
