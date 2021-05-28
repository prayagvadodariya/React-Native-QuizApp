import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CheckBox, Button} from "react-native-elements";
import { AntDesign, Entypo, Ionicons, Feather, EvilIcons } from 'react-native-vector-icons';

const QuizDashboard = (props) => {
  const [isSelected, setSelection] = useState(0);
  const [isactiveQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [iscorrectCount, setCorrectCount] = useState(0);

  console.log("pop",props);
  
  const onselect = (val) => {
    setSelection(val.id);
    if(val.correct){
      var countplush = iscorrectCount + 1;
      setCorrectCount(countplush);
      // console.log('true',true);
    }else {
      if(iscorrectCount!=0){
      var countminus = iscorrectCount - 1;
      setCorrectCount(countminus);
      // console.log('false',co);
      }
      // console.log('false');
    }
  }

  const onNext = () => {
    var currentIndex =  isactiveQuestionIndex + 1;
    setActiveQuestionIndex(currentIndex);
    setSelection(0);
    // props.navigation.navigate("MyStack",{ screen: 'Score',params: {score: 10}});
  }

  console.log("setcounupdate",iscorrectCount);

  const data = props.route.params.quizname.ComputerQuiz;
  const question = data[isactiveQuestionIndex];

  return (
    <View style={styles.container}>
      <View style={{marginTop:30,marginLeft:20,marginRight:20,marginBottom:20}}>
        <Text style={{fontSize:18,color:'#585e77'}}>{props.route.params.quizname.title} Quiz</Text>

        <View style={{marginTop:10,flexDirection:'row'}}>
          <Text style={{fontSize:25, color:'#fff', fontWeight:'bold'}}>Quetion 06</Text>
          <Text style={{fontSize:25, color:'#585e77', fontWeight:'bold'}}>/10</Text>
        </View>

        <Text style={{fontSize:25, color:'#585e77'}}>- - - - - - - - - - - - - - - - - - - - - - </Text>

        <View style={{marginTop:35}}>
         <Text style={{fontSize:18, color:'#fff', fontWeight:'500'}}>{question.question}</Text>
        </View>

        <View style={{marginTop:45}}>
        {question.answers.map(answer => (
          <CheckBox
            key={answer.id}
            onPress={()=> onselect(answer)}
            title={answer.text}
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={isSelected===answer.id}
            iconRight={true}
            checkedColor='#149981'
            uncheckedColor='#848896'
            textStyle={{flex:1,alignContent:'flex-start',alignItems:'flex-start',color:'#848896'}}
            containerStyle={{backgroundColor:'transparent', borderRadius:15, borderColor:'#848896'}}
          />
          ))}
        </View>

        <View style={{flexDirection:'row', marginTop:80,marginBottom:25}}>
          <Button
            onPress={()=> props.navigation.navigate("BottomTabStack")}
             icon={
              <AntDesign
                name="closecircleo"
                size={15}
                style={{marginTop:4, marginRight:10}}
                color="#848896"
              />
            }
            title="Quit Quiz"
            type="Clear"
            titleStyle={{color:'#848896', justifyContent:'flex-start'}}
          />
          <View style={{flex:1,alignContent:'flex-end',alignItems:'flex-end'}}>
            <Button
              title="Next"
              type="solid"
              onPress={()=> onNext()}
              titleStyle={{textAlign:'center'}}
              style={{width:130,height:50}}
              buttonStyle={{borderRadius:10, marginBottom:-10, backgroundColor:'#06d3f7'}}
            />
          </View>

        </View>
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#19203c',
  },
});

export default QuizDashboard;
