import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export const TouchableButton = (props) => {

    return (<TouchableOpacity style={{
        backgroundColor: props.color,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: 200,
        borderRadius: 100,
        margin: 5,
    }
    }
                              onPress={props.onPress}

    >
        <Text style={{
            fontSize: 20,
            color: props.textColor,
            fontWeight: 'bold',
        }}>{props.text}</Text>
    </TouchableOpacity>)
}
