import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export const Header = (props) => {
    console.log('props->',props)
    return (<View style={styles.header}>
        {/*ICON*/}
        <View>
<Text style={styles.headerText}>

</Text>

        </View>

        {/*<Text style={{*/}
        {/*    fontSize: 20,*/}
        {/*    color: props.textColor,*/}
        {/*    fontWeight: 'bold',*/}
        {/*}}>         {props.text}*/}
        {/*</Text>*/}
        {/*{props.children}*/}

    </View>)
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '20%',
        backgroundColor: 'black',
    }

})








// <FontAwesome5 name={'pen'} size={50}/>