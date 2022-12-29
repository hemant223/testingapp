import { View, Text,Image } from 'react-native';
import React, { useEffect } from 'react';
import { getStoreData } from '../storage/projectAsyncStorage';

const SplashScreen = (props) => {
    const authUser = async () => {
        const userData = await getStoreData('userData');
        // alert(JSON.stringify(data))
        if (userData) {
            if (userData.loggedIn) {
                props.navigation.navigate('HomeScreen', /* {isSuccess:true}*/);
            }
            else {
                
                props.navigation.navigate('Login')
            }
        }
        else {
            props.navigation.navigate('Registration')
        }
    }

    useEffect(() => {
        setTimeout(() => {
            authUser();
        }, 5000);
    }, [])
    
    

    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#fff'}}>
            <Image style={{width:500,height:500}} source={require('../../assets/images/loading.gif')}/>
        </View>
    )
}

export default SplashScreen