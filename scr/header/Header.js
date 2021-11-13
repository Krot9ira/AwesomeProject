import React from "react";
import { View, Text, StyleSheet, Image, TouchableHighlight, TextInput} from "react-native";

const Header = ({user})=> {
    return (<View style= {styles.containerTop}>
    <Text style= {styles.container}>
      <Text style= {{color: '#f4f4f8', fontSize: 20}}>Hello {user}</Text>
      <Text style= {{color: '#8b8e96', fontSize: 18}}>                   Lets Start Learning </Text>
    </Text>
    <TouchableHighlight onPress ={() => alert('onPress')}
    style={styles.avatar}>
    <Image style={styles.avatar}
        source={require('../image/face.jpg')}
    />
    </TouchableHighlight>
    <TextInput 
    style={styles.searchingbar}><Image style={styles.icon}
        source={require('../image/searchicon.png')}
    /></TextInput>
    </View>);
};

const styles = StyleSheet.create({
    //style for View
    containerTop:{
        flexWrap: "wrap",
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
        backgroundColor: '#242732',
        height: 200,
        paddingRight: 20,
        paddingLeft: 20,
        paddingTop: 20
    },
    // custom style for container
    container:{
        flexDirection: 'column-reverse',
        width: 200,
        flexWrap: 'wrap',
        justifyContent: 'flex-start'
    },
    avatar:{
        borderRadius: 50,
        width: 50,
        height: 50,
        backgroundColor: 'white'
    },
    searchingbar:{
        alignItems: 'center',
        borderRadius: 50,
        width: "100%",
        backgroundColor: '#ffffff',
        marginTop: 25,
        paddingLeft: 15,
        height: 36
    },
    icon:{
        width: 20,
        height: 20,
        
      
    }

});

export default Header