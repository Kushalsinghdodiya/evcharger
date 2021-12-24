import React ,{useEffect,useState}from 'react';
import { Button ,View,StyleSheet} from 'react-native';
import MapView , {PROVIDER_GOOGLE, Marker}from 'react-native-maps';
import JsonData from './Data.json';



const Homescreen = ({ navigation }) => {

const [data, setdata] = useState([])


useEffect(() => {
  setdata(JsonData.chargers);
}, [])
  
console.log('this is data ',data)

    return (

      <View style={styles.mapcontainer}>

          <MapView
             
              provider={PROVIDER_GOOGLE}
              style={styles.map}
              initialRegion={{
                latitude: 22.4532122,
                longitude: 77.4545322,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}
              showUserLocation={true}
               >
      
              {data.map((dt,index)=>{
                return(
                  <Marker key={index} draggable coordinate={{
                    latitude: parseFloat(dt.latitude),
                    longitude: parseFloat(dt.longitude),
                  }}  />
                )
              })}
             

              
          </MapView>
        </View>
   
    );
  };

  const styles = StyleSheet.create({
    mapcontainer: {
          flex:1
         
    },
    map: {
          ...StyleSheet.absoluteFillObject,
    },
})

  export default Homescreen;