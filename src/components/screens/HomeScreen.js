import { storeData, getStoreData } from '../storage/projectAsyncStorage';
import React, { useState } from 'react';
import { SafeAreaView, Text, View, } from 'react-native';

const HomeScreen = (props, { navigation }) => {
  // alert(props.route.params.isSuccess)

  

  const [userDetails, setUserDetails] = React.useState({});
  const [isShow, setIsShow] = useState(false);
  // console.log("userDeatl==123 ",userDetails);
  React.useEffect(() => {
    getUserData();
  }, [props]);

    const getUserData = async () => {
    const userData = await getStoreData('userData');
    // alert(tuserData)
   // console.log("userData==", userData)
    if (userData) {
      setUserDetails(userData);
      setTimeout(() => {
        setIsShow(true)
      }, 2000)
    }
  };

  /*   const logout = () => {
      storeData(
        'userData',
        JSON.stringify({...userDetails, loggedIn: false}),
      );
      navigation.navigate('Login');
    }; */

  return (<>
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 40,
      }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}>
       Welcome {userDetails?.productname}
      </Text>
      {/*  <Button text="Logout" onPress={logout} /> */}
    </View>
  </>
  )
};

export default HomeScreen;
