import React from 'react'

import{
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native'

const Buttons = ({...props}) => {
    return(
        <View style={{width: "60%", height: "12%", backgroundColor: "white",marginBottom: "5%", alignItems: "center", justifyContent: "center"}}>
            {props.children}
        </View>
    )
}

export function HomeComponent({navigation}){
    return(
        <View style={viewStyle.main}>

            <Buttons>
                <View onTouchEnd={() => {navigation.navigate('Ampliação')}} style={{width:"100%", height: "100%", alignItems: "center", justifyContent: "center", borderWidth: 1, borderStyle: "solid", borderColor: "#ff4800"}}>
                    <Text style={textStyle.text}>Ampliação</Text>
                </View>
            </Buttons>

            <Buttons>
                <View onTouchEnd={() => {navigation.navigate('Cobertura')}} style={{width:"100%", height: "100%", alignItems: "center", justifyContent: "center", borderWidth: 1, borderStyle: "solid", borderColor: "#ff4800"}}>
                    <Text style={textStyle.text}>Cobertura</Text>
                </View>
            </Buttons>

            <Buttons>
                <View onTouchEnd={() => {navigation.navigate('Data Center')}} style={{width:"100%", height: "100%", alignItems: "center", justifyContent: "center", borderWidth: 1, borderStyle: "solid", borderColor: "#ff4800"}}>
                    <Text style={textStyle.text}>DataCenter</Text>
                </View>
            </Buttons>

            <Buttons>
            <   View onTouchEnd={() => {navigation.navigate('Manutenção Fibra')}} style={{width:"100%", height: "100%", alignItems: "center", justifyContent: "center", borderWidth: 1, borderStyle: "solid", borderColor: "#ff4800"}}>
                    <Text style={textStyle.text}>Manutencão Fibra</Text>
                </View>
            </Buttons>

            <Buttons>
                <View onTouchEnd={() => {navigation.navigate('Manutenção Cabo')}} style={{width:"100%", height: "100%", alignItems: "center", justifyContent: "center", borderWidth: 1, borderStyle: "solid", borderColor: "#ff4800"}}>
                    <Text style={textStyle.text}>Manutenção Cabo</Text>
                </View>
            </Buttons>

            <Buttons>
                <View onTouchEnd={() => {navigation.navigate('Manutenção Torre')}} style={{width:"100%", height: "100%", alignItems: "center", justifyContent: "center", borderWidth: 1, borderStyle: "solid", borderColor: "#ff4800"}}>
                    <Text style={textStyle.text}>Manutenção Torre</Text>
                </View>
            </Buttons>
        </View>
    )
}

const viewStyle = StyleSheet.create({
    main: {
        display: 'flex',
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "10%"
    }
})

const textStyle = StyleSheet.create({
    text:{
        color: "#ff4800",
        fontSize: 20,
        fontWeight: "bold"
    }
})