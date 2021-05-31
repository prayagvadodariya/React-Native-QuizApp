import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, SafeAreaView, TextInput, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

const AddQuiz = () => {
  const [quiztitile, onQuizTitle] = useState('');
  const [question, onQuestion] = useState('');
  const [optionA, onOptionA] = useState('');
  const [optionB, onOptionB] = useState('');
  const [optionC, onOptionC] = useState('');
  const [optionD, onOptionD] = useState('');


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.layout}>

        <View>
          <Text style={styles.t1}>Quiz Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={onQuizTitle}
            value={quiztitile}
            placeholder="Enter Quiz Name"
          />
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

        <View style={{flex:1,alignContent:'center',alignItems:'center'}}>
          <Button
            title="Add New Quiz"
            type="solid"
            onPress={()=> onAddNewQuiz()}
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

export default AddQuiz;
