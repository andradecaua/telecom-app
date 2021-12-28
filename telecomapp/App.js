import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import LoginComponent from './pages/Login'
import {HomeComponent} from './pages/Home'
import {Ampliacao, Cobertura, DataCenter, ManutencaoF, ManutencaoCabo, ManutencaoTorre} from './pages/Forms'

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const Stack = createNativeStackNavigator()

const optionsStyle = {
  header: {
    headerStyle: {
      backgroundColor: "#ff4800"
    },
    headerTitleStyle: {
      color: "white",
      fontWeight: "bold"
    },
    headerTintColor: "white"
  }
}

const App = () => {

  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginComponent} options={{headerShown: false}} />
          <Stack.Screen name="Home" component={HomeComponent}  options={optionsStyle.header}/>
          <Stack.Screen name="Ampliação" component={Ampliacao} options={optionsStyle.header}/>
          <Stack.Screen name="Cobertura" component={Cobertura} options={optionsStyle.header}/>
          <Stack.Screen name="Data Center" component={DataCenter} options={optionsStyle.header}/>
          <Stack.Screen name="Manutenção Fibra" component={ManutencaoF} options={optionsStyle.header}/>
          <Stack.Screen name="Manutenção Cabo" component={ManutencaoCabo} options={optionsStyle.header}/>
          <Stack.Screen name="Manutenção Torre" component={ManutencaoTorre} options={optionsStyle.header}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App