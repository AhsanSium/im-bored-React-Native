import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Loading from './Loading';
import slothImage from './assets/sloth.png';

export default function App() {

  const [activityData, setActivityData] = useState({
    activity:'',
    type:'',
    participants:''
  });

  const [loading, setLoading] = useState(false);

  // useEffect(()=>{
  //   fetch('https://www.boredapi.com/api/activity')
  //   // .then(respons => {
  //   //   console.log(respons)
  //   // })
  //   .then(response => response.json())
  //   .then(data =>{ 
  //     console.log(data)
  //     setActivityData(data && data.activity);
  //   })
  //   .catch(err => console.log(err));
  // },[])

  const onPressRandomize = () => {
    setLoading(true);
    setActivityData('');
    fetch('https://www.boredapi.com/api/activity')
    // .then(respons => {
    //   console.log(respons)
    // })
    .then(response => response.json())
    .then(data =>{ 
      console.log(data)
      setActivityData({
        activity: data && data.activity,
        type: data && data.type,
        participants: data && data.participants        
      });
      setLoading(false);
    })
    .catch(err => console.log(err));
  }

  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
      <Image
                style={styles.slothImage}
                source={require("./assets/sloth.png")}
      />
      <Text style={styles.sectionTitle} > Click the Randomize button for some random activities </Text>
      {
        loading?<Loading />:
        <>
          <View style={styles.itemHeader}>
            {/* <View
              style={styles.square}
            /> */}

            <Text style={styles.activity} >Activity</Text>
            <Text style={styles.activityData} >{activityData.activity} </Text>
          </View>
          <View style={styles.itemsWrapper}>
            <View style={styles.items}>
              <Text style={styles.type} > Type : {activityData.type} </Text>
            </View>
            <View style={styles.items}>
              <Text style={styles.participants} > Participants : {activityData.participants} </Text>

            </View>

          </View>
            
          <TouchableOpacity
              style={styles.randomizeBtn}
              onPress={onPressRandomize}
              title="Randomize"
              accessibilityLabel="Randomize The Task"
          >
            <Text style={styles.randomizeBtnText}>Randomize</Text>
          </TouchableOpacity>
        
        </>
      }     
        
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F8FE',
    fontFamily:'roboto'
  },
  textWrapper:{
    paddingTop: 80,
    paddingHorizontal:25,
    alignItems:'center'
  },
  sectionTitle:{
    fontSize: 18,
    fontWeight: 'bold',
    textAlign:'center'
  },
  slothImage:{
    width:200,
    height:100,
  },  
  sectionTask:{

  },
  randomizeBtn:{
    marginTop:20,
    width:150,
    height:50,
    borderRadius:15,
    backgroundColor:'#3E4685',
    alignItems:'center',
    justifyContent:'center',
  },
  randomizeBtnText:{
    marginBottom:2,
    color:'#FFFFFF',
    fontSize:18,
    fontWeight:'bold',
    textAlign:'center',
  },
  itemHeader:{
    width:300,
    height:160,
    backgroundColor:'#FFFFFF',
    padding: 15,
    borderRadius: 10,
    alignItems:'center',
    justifyContent:'flex-start',
    marginTop: 10,
    marginBottom: 10,
    // boxShadow:'rgb(35 161 125 / 65%) 2px 5px 24px -7px',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,

  },
  itemsWrapper:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    padding:5,
    
  },
  items:{
    width: 120,
    height:80,
    backgroundColor:'#FFFFFF',
    borderRadius:15,
    margin:6,
    padding:5,
    // boxShadow:'rgb(35 161 125 / 65%) 2px 5px 24px -7px',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  activity:{
    fontSize:30,
    textAlign:'center',
    color:'#3E4685',
  },
  activityData:{
    fontSize:22,
    textAlign:'center',
  },
  type:{
    paddingTop:8,
    fontSize:18,
    textAlign:'center',
  },
  participants:{
    paddingTop:8,
    fontSize:18,
    textAlign:'center',
  }

});
