import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export const Header = (props) => {
    console.log('props->', props)
    return (
        <View style={{
            height: '20%',
            backgroundColor: 'black',
            justifyContent: 'center'
        }}>

            <View style={{paddingLeft: '10%'}}>
                {/*ICON*/}
                <Text style={styles = {
                    fontWeight: 'bold',
                    fontSize: 20,
                    color: props.textColor,
                    letterSpacing: 1,
                }}>{props.text.toUpperCase()}</Text>

                <Text style={styles = {
                    fontWeight: 'bold',
                    fontSize: 30,
                    // color: props.textColor,
                    color: props.textColor,
                    letterSpacing: 1,
                }}>{props.text}</Text>
            </View>
        </View>)
}

let styles = StyleSheet.create({
    headerContainer: {},
    header: {
        width: '100%',
        height: '20%',
        backgroundColor: 'black',
        flexDirection: 'row',
    },
    // headerText: {
    //     fontWeight: 'bold',
    //     fontSize: 20,
    //     // color: props.textColor,
    //     color: props.textColor,
    //     letterSpacing: 1,
    // }
})


// {/*<FontAwesome5 name={'pen'} size={50}/>*/}