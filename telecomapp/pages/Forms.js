import React from 'react'

import{
    Text,
    View,
    StyleSheet,
} from 'react-native'

import {WebView} from 'react-native-webview'

export function Ampliacao({navigation}){
    return(
        <>
            <WebView ref={(ref) => {this.webview = ref}} source={{uri:"https://docs.google.com/forms/d/e/1FAIpQLSesCH8FIgd02dH0YqmRyDa6bTXOVIqvaJXF3cevDZ1hW64ysA/viewform?usp=sf_link"}} />
            <View onTouchEnd={() => {this.webview.reload()}} style={{width: "100%", alignItems: "center", height: "10%", backgroundColor: "white", justifyContent: "center", borderStyle: "solid", borderWidth: 1, borderTopColor: "#ff4800"}}>
                <Text style={{fontSize: 20, color: "#ff4800", fontWeight: "bold"}}>Carregar novamente</Text>
            </View>
        </>
    )
}

export function Cobertura({navigation}){
    return(
        <>
            <WebView ref={(ref) => {this.webview = ref}} source={{uri:"https://docs.google.com/forms/d/e/1FAIpQLSdFt4NUDgPcu0iJCO-VzJpm76jqE6RY_uSDv-LWGFHxAULmFg/viewform?usp=sf_link"}} />
            <View onTouchEnd={() => {this.webview.reload()}} style={{width: "100%", alignItems: "center", height: "10%", backgroundColor: "white", justifyContent: "center", borderStyle: "solid", borderWidth: 1, borderTopColor: "#ff4800"}}>
                <Text style={{fontSize: 20, color: "#ff4800", fontWeight: "bold"}}>Carregar novamente</Text>
            </View>
        </>
    )
}

export function DataCenter({navigation}){
    return(
        <>
            <WebView ref={(ref) => {this.webview = ref}} source={{uri:"https://docs.google.com/forms/d/e/1FAIpQLSeO5g3BAmzaMPoyYq37GmRcusCD7gXZp72vFl3RgcRJeziiAA/viewform?usp=sf_link"}} />
            <View onTouchEnd={() => {this.webview.reload()}} style={{width: "100%", alignItems: "center", height: "10%", backgroundColor: "white", justifyContent: "center", borderStyle: "solid", borderWidth: 1, borderTopColor: "#ff4800"}}>
                <Text style={{fontSize: 20, color: "#ff4800", fontWeight: "bold"}}>Carregar novamente</Text>
            </View>
        </>
    )
}

export function ManutencaoF({navigation}){
    return(
        <>
            <WebView ref={(ref) => {this.webview = ref}} source={{uri:"https://docs.google.com/forms/d/e/1FAIpQLSdzQsEl3rMpOze7IYEts0I_3boJnR32hGrqn85OwE2uM0PSaQ/viewform?usp=sf_link"}} />
            <View onTouchEnd={() => {this.webview.reload()}} style={{width: "100%", alignItems: "center", height: "10%", backgroundColor: "white", justifyContent: "center", borderStyle: "solid", borderWidth: 1, borderTopColor: "#ff4800"}}>
                <Text style={{fontSize: 20, color: "#ff4800", fontWeight: "bold"}}>Carregar novamente</Text>
            </View>
        </>
    )
}

export function ManutencaoCabo({navigation}){
    return(
        <>
            <WebView ref={(ref) => {this.webview = ref}} source={{uri:"https://docs.google.com/forms/d/e/1FAIpQLSd7qxk29CC3-fcN7FztsIaMlbLawvPhcgm9_2180RadBar7YA/viewform?usp=sf_link"}} />
            <View onTouchEnd={() => {this.webview.reload()}} style={{width: "100%", alignItems: "center", height: "10%", backgroundColor: "white", justifyContent: "center", borderStyle: "solid", borderWidth: 1, borderTopColor: "#ff4800"}}>
                <Text style={{fontSize: 20, color: "#ff4800", fontWeight: "bold"}}>Carregar novamente</Text>
            </View>
        </>
    )
}

export function ManutencaoTorre({navigation}){
    return(
        <>
            <WebView ref={(ref) => {this.webview = ref}} source={{uri:"https://docs.google.com/forms/d/e/1FAIpQLSc2Dv74qjcNgAPghaEDiOWrDhH_yYXUqjFXKpWyjcorAGJWFA/viewform?usp=sf_link"}} />
            <View onTouchEnd={() => {this.webview.reload()}} style={{width: "100%", alignItems: "center", height: "10%", backgroundColor: "white", justifyContent: "center", borderStyle: "solid", borderWidth: 1, borderTopColor: "#ff4800"}}>
                <Text style={{fontSize: 20, color: "#ff4800", fontWeight: "bold"}}>Carregar novamente</Text>
            </View>
        </>
    )
}