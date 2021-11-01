import React from "react";
import { StyleSheet, View, Image } from 'react-native';
// import loadingImage from './assets/loading2.gif';

export default function loading(){

    

    return(
        <View style={styles.container}>
            <Image
                style={styles.loading}
                source={require("./assets/loading2.gif")}
            />
        
        </View>
    );
    
}

const styles = StyleSheet.create({
    container: {
      width:"100%",
      height:"100%",  
      flex: 1,
    },
    loading:{
        width:200,
        height:200,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop:30,
        borderRadius: 15,
    }
});