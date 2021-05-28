import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CheckBox, Button} from "react-native-elements";
import { AntDesign, Entypo, Ionicons, Feather, EvilIcons } from 'react-native-vector-icons';

const QuizDashboard = (props) => {
  const [isSelected, setSelection] = useState(false);

  const onselect = () => {
    setSelection(true);
  }

  const onScore = () => {
    props.navigation.navigate("MyStack",{ screen: 'Score',params: {score: 10}});
  }
  console.log("pop",props);

  return (
    <View style={styles.container}>
      <View style={{marginTop:30,marginLeft:20,marginRight:20,marginBottom:20}}>
        <Text style={{fontSize:18,color:'#585e77'}}>{props.route.params.quizname} Quiz</Text>

        <View style={{marginTop:10,flexDirection:'row'}}>
          <Text style={{fontSize:25, color:'#fff', fontWeight:'bold'}}>Quetion 06</Text>
          <Text style={{fontSize:25, color:'#585e77', fontWeight:'bold'}}>/10</Text>
        </View>

        <Text style={{fontSize:25, color:'#585e77'}}>- - - - - - - - - - - - - - - - - - - - - - </Text>

        <View style={{marginTop:35}}>
         <Text style={{fontSize:18, color:'#fff', fontWeight:'500'}}>Sally is 54 years old and her mother is 80, how many years ago was Sally’s mother times her age?</Text>
        </View>

        <View style={{marginTop:45}}>
          <CheckBox
            onPress={()=> onselect()}
            title='39 years ago'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={isSelected}
            iconRight={true}
            checkedColor='#105d56'
            uncheckedColor='#848896'
            textStyle={{flex:1,alignContent:'flex-start',alignItems:'flex-start',color:'#848896'}}
            containerStyle={{backgroundColor:'transparent', borderRadius:15, borderColor:'#848896'}}
          />

          <CheckBox
            onPress={()=> onselect()}
            title='41 years ago'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={isSelected}
            iconRight={true}
            checkedColor='#105d56'
            uncheckedColor='#848896'
            textStyle={{flex:1,alignContent:'flex-start',alignItems:'flex-start',color:'#848896'}}
            containerStyle={{backgroundColor:'transparent', borderRadius:15, borderColor:'#848896'}}
          />

          <CheckBox
            onPress={()=> onselect()}
            title='51 years ago'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={isSelected}
            iconRight={true}
            checkedColor='#105d56'
            uncheckedColor='#848896'
            textStyle={{flex:1,alignContent:'flex-start',alignItems:'flex-start',color:'#848896'}}
            containerStyle={{backgroundColor:'transparent', borderRadius:15, borderColor:'#848896'}}
          />

          <CheckBox
            onPress={()=> onselect()}
            title='22 years ago'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={isSelected}
            iconRight={true}
            checkedColor='#105d56'
            uncheckedColor='#848896'
            textStyle={{flex:1,alignContent:'flex-start',alignItems:'flex-start',color:'#848896'}}
            containerStyle={{backgroundColor:'transparent', borderRadius:15, borderColor:'#848896'}}
          />
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
              onPress={()=> onScore()}
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
