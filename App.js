import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {TouchableButton, Someotherbutotn} from './components'

export default function App() {
// state
    const [someState, setSomeState] = useState(false)

// function
    function onCancelHandler() {
        console.log('You clicked Cancel')
    }

    return (
        <View
            style={styles.container}>
            <TouchableButton
                onPress={()=>{setSomeState(true)}}
                color={'green'}
                text={'Show'}
                textColor={'white'}
            />
            <TouchableButton
                onPress={()=>{setSomeState(false)}}
                color={'red'}
                text={'Hide'}
                textColor={'white'}
            />
            {someState ? <Text>I'm showing</Text> : <Text>I'm hiding uwu</Text>}
            <StatusBar style="auto"/>
        </View>
    );
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#f1f1f1',
        alignItems: 'center',
        justifyContent: 'center',
    }
});