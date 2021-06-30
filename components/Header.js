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
            <View style={{
                display: 'flex',
                flexDirection: 'row'
            }}>
                <View style={{padding: '2%'}}><FontAwesome5 name={'pen'} size={40} color={'white'}
                                                            float={'left'}/></View>
                <View style={{paddingLeft: '10%'}}>
                    <Text style={styles = {
                        fontWeight: 'bold',
                        fontSize: 20,
                        color: props.textColor,
                        letterSpacing: 1,
                        display: 'inline'
                    }}>{props.text.toUpperCase()}</Text>

                    <Text style={styles = {
                        fontWeight: 'bold',
                        fontSize: 30,
                        // color: props.textColor,
                        color: props.textColor,
                        letterSpacing: 1,
                    }}>{props.text}</Text>
                </View>
            </View>
        </View>)
}

let styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '20%',
        backgroundColor: 'black',
        flexDirection: 'row',
    },
})


// {/*<FontAwesome5 name={'pen'} size={50}/>*/}