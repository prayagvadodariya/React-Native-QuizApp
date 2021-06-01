import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import { CheckBox, Button} from "react-native-elements";
import { AntDesign, Entypo, Ionicons, Feather, EvilIcons } from 'react-native-vector-icons';
import CountDown from 'react-native-countdown-component';

const QuizDashboard = (props) => {
  const [isSelected, setSelection] = useState(0);
  const [iscorrectCount, setCorrectCount] = useState(0);
  const [isactiveQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [isquestion, setQuestion] = useState(1);
  const [istotalcorrectAns, setTotalCorrectAns] = useState(0);

  // console.log("props", props.route.params);

  const onselect = (val) => {
    setSelection(val.id);
    console.log('onselect',val);
    if(val.correct){
      setCorrectCount(iscorrectCount+1);
      console.log('check',);
    }else{
      setCorrectCount(0);
    }
  }
 
  const onNext = () => {
   setSelection(0)
   var currentIndex =  isactiveQuestionIndex + 1;

    if(data[currentIndex]!=undefined){
      setActiveQuestionIndex(currentIndex);
      setQuestion(isquestion+1)
      setTotalCorrectAns(iscorrectCount+istotalcorrectAns)
      setCorrectCount(0)
    }else{
      setTotalCorrectAns(iscorrectCount+istotalcorrectAns)
      setCorrectCount(0)
      var Ans = iscorrectCount+istotalcorrectAns;
      props.navigation.navigate("MyStack",{ screen: 'Score',params: {Total: props.route.params.quiz.length, CorrectAns: Ans}});
    }
  }

  const data = props.route.params.quiz;
  const question = data[isactiveQuestionIndex];

  return (
    <SafeAreaView  style={styles.container}>
      <View style={{flex:1, marginTop:"15%",marginLeft:20,marginRight:20,marginBottom:20}}>

        <CountDown
          id={question.question}
          until={60 * 1 + 0}
          size={20}
          onFinish={() => onNext()}
          digitStyle={{backgroundColor: '#FFF'}}
          digitTxtStyle={{color: '#1CC625'}}
          timeToShow={['M', 'S']}
          timeLabels={{m: 'Min', s: 'Sec'}}
          timeLabelStyle={{color: '#fff', fontSize:15}}
        />
        <Text style={{fontSize:18,color:'#585e77'}}>{props.route.params.quizname} Quiz</Text>

        <View style={{marginTop:10,flexDirection:'row'}}>
          <Text style={{fontSize:25, color:'#fff', fontWeight:'bold'}}>Quetion {isquestion}</Text>
          <Text style={{fontSize:25, color:'#585e77', fontWeight:'bold'}}>/{data.length}</Text>
        </View>

        <Text style={{fontSize:25, color:'#585e77'}}>- - - - - - - - - - - - - - - - - - - - - - </Text>

        <View style={{marginTop:5}}>
         <Text style={{fontSize:17, color:'#fff'}}>{question.question}</Text>
        </View>

        <View style={{marginTop:25}}>
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

        <View style={{flex:1, flexDirection:'row', justifyContent:'flex-end', alignItems:'flex-end'}}>
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
              titleStyle={{textAlign:'center', marginLeft:40,marginRight:40}}
              buttonStyle={{borderRadius:10, backgroundColor:'#06d3f7'}}
            />
          </View>
        </View>
      </View>
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#19203c',
  },
});

export default QuizDashboard;
