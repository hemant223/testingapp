import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { getStoreData } from '../storage/projectAsyncStorage';

const SplashScreen = (props) => {

    // const [number, setNumber] = useState()
    const getDataofAsync = async () => {
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
        getDataofAsync();
    }, [])


    return (
        <View>
            <Text>Spalsh Screen</Text>
        </View>
    )
}

export default SplashScreen