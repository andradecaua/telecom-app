 import React, {useState} from 'react';
 import database from '@react-native-firebase/database'
 import AsyncStorage from '@react-native-async-storage/async-storage'

 import {
   StyleSheet,
   Text,
   View,
   TextInput,
   SafeAreaView,
 } from 'react-native';
 
 const LogarButton = ({...props}) => {
   return(
     <View style={buttonStyle.view}>
       {props.children}
     </View>
   )
 }
 
 function LoginComponent({navigation}){

   const db = database()
 
   const [user, setUser] = useState("")
   const [password, setPassword] = useState("")
 
  async function verificar(){
    const value = await AsyncStorage.getItem('@user')
     try{
      if(value !== null){
        return navigation.navigate('Home')
      }
     }catch(e){}
     try{
       db.ref(`Users/${user}`).once('value', (snapshot) => {        
         if(snapshot.val() === null){
           return alert('Não existe esse usuário!')
         }
         else if(user == "" && password == ""){
           alert("Digite seu usuário e senha!")
         }
         else{
           const pass = snapshot.child('Senha').val()
           if(password == pass){
             AsyncStorage.setItem('@user', `${user}${password}`)
             navigation.navigate('Home')
           }
           else{
             alert('Senha errada')
           }
         }
       })
     }catch(e){
       alert('Usuário não existe!')
     }
   }
   return(
     <View style={viewStyle.main}>
 
       <View style={viewStyle.titleView}>
         <Text style={textStyle.title}>Telecom App</Text>
       </View>
 
       <SafeAreaView style={viewStyle.inputView}>
         <TextInput placeholder='Coloque seu usuário' style={textStyle.input} editable onChangeText={(value) => {setUser(value)}}/>
         <TextInput secureTextEntry={true} keyboardType={'number-pad'} placeholder='Coloque sua senha' style={textStyle.input} editable onChangeText={(value) => {setPassword(value)}}/>
       </SafeAreaView>
 
       <LogarButton>
         <View style={{backgroundColor: "#161616", height: "20%", alignItems: "center", justifyContent: "center"}} onTouchEnd={verificar}>
           <Text style={{color: "white", fontSize: 15, fontWeight: "bold"}}>ENTRAR</Text>
         </View>
       </LogarButton>
     </View>
   )
 }
 
 const textStyle = StyleSheet.create({
    title: {
      color: "#ff4800",
      fontSize: 50,
      fontWeight: 'bold',
      flex: 0,
      flexDirection: 'column',
    },
    input: {
      width: 300,
      borderColor: 'black',
      borderWidth: 1,
      height: 35,
      marginBottom: 5,
      backgroundColor: "#fff",
    }
 })
 
 const viewStyle = StyleSheet.create({
   main: {
     fontFamily: 'Arial, Sans-Serif',
     alignContent: 'center',
     justifyContent: 'center',
     display: 'flex',
     flexDirection: 'column',
     height: '100%'
   },
   titleView: {
     flex: 1,
     display: 'flex',
     alignItems: 'center',
     height: '50%',
     justifyContent: 'flex-end',
   },
   inputView:{
     display: 'flex',
     flex: 1,
     alignItems: 'center',
     height: '50%',
     justifyContent: 'center',
   }
 })
 
 const buttonStyle = StyleSheet.create({
   view:{
     flex: 1,
     height: '30%',
     width: "50%",
     alignSelf: "center",
   }
 })
 
 export default LoginComponent;
 