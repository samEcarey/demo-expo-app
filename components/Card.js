import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export const Card = (props) => {
  console.log('props->',props)
    return (<View style={{
        backgroundColor: props.color,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        height: '50%',
        width: '50%',
        borderRadius: 60,
        margin: 5,
        display: 'flex',
        flexDirection: 'column',
    }}>

        <Text style={{
            fontSize: 20,
            color: props.textColor,
            fontWeight: 'bold',
        }}>{props.text}</Text>
        {props.children}

    </View>)
}
