import { View, Text, TouchableOpacity, StyleSheet, StatusBar, Dimensions, Keyboard,Image } from "react-native";
import Button from "../Button";
import { useState } from "react";
import Input from "../Input";
import { storeData, getStoreData } from '../storage/projectAsyncStorage';
import React from 'react';


const { width, height } = Dimensions.get("window")
const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        backgroundColor: 'linear-gradient(90deg, rgba(0,0,0,1) 14%, rgba(11,18,16,1) 89%)'
    },
    backgroundImage: {
        width: width,
        height: height
    }

});

export default function Login({ navigation }) {
    const [inputs, setInputs] = React.useState({ productid: '', productkey: '' });
    const [errors, setErrors] = React.useState({});


    
    const validate = async () => {
        Keyboard.dismiss();
        let isValid = true;
        if (!inputs.productid) {
            handleError('Please input Product Id', 'productid');
            isValid = false;
        }
        if (!inputs.productkey) {
            handleError('Please input Product Key', 'productkey');
            isValid = false;
        }
        if (isValid) {
            login();
        }
    };

    const login = async () => {

        let userData = await getStoreData('userData')
        if (userData) {
            if (
                inputs.productid == userData.productid &&
                inputs.productkey == userData.productkey
            ) {
                navigation.navigate('HomeScreen', { userData });
                storeData(
                    'userData',
                    { ...userData, loggedIn: true },
                );
            } else {
                alert('Fail to Login', 'Invalid Details');
            }
        } else {
            alert('Hemu', 'User does not exist');
        }

    };

    const handleOnchange = (text, input) => {
        setInputs(prevState => ({ ...prevState, [input]: text }));
    };

    const handleError = (error, input) => {
        setErrors(prevState => ({ ...prevState, [input]: error }));
    };


    return (
        <View style={styles.container}>


            <View style={{ marginTop: 60 }}>
            <Image style={{width:250,height:50}} source={require('../../assets/images/login.png')}/>
            </View>
            <View style={{ width: width * 0.8, alignSelf: 'center', marginTop: 20 }}>
                <Text style={{ fontSize: 55, color: '#fff', fontWeight: 'bold' }}>
                    Welcome Back !
                </Text>
            </View>
            <View style={{ width: width * 0.8, justifyContent: 'center', alignSelf: 'center' }}>
                <View style={{ width: width * 0.80, height: 'auto', backgroundColor: '#fff', borderTopRightRadius: 5, borderBottomLeftRadius: 5, borderTopLeftRadius: 5, borderBottomRightRadius: 5 }}>

                    <View style={{ marginTop: 20, width: width * 0.78, paddingLeft: 5 }}>
                        <Input
                            onChangeText={text => handleOnchange(text, 'productid')}
                            iconName="dots-grid"
                            onFocus={() => handleError(null, 'productid')}
                            placeholder='Enter your Product Id'
                            label="Product Id"
                            error={errors.productid}
                        />
                    </View>
                    <View style={{ marginTop: 20, width: width * 0.78, paddingLeft: 5 }}>
                        <Input
                            error={errors.productkey}
                            onChangeText={text => handleOnchange(text, 'productkey')}
                            onFocus={() => handleError(null, 'productkey')}
                            iconName="lock-outline"
                            label="Product Key"
                            placeholder="Enter your Product Key"
                            password

                        />
                    </View>


                    <View style={{ marginTop: 20, width: width * 0.60, paddingLeft: 60 }}>
                        <Button onPress={validate} size="small" bordered color='#51cbcc' text="Login" type='filled' />

                    </View>

                    <View style={{ marginTop: 25,marginBottom:10, width: width * 0.8, alignSelf: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity>
                            <Text onPress={() => navigation.navigate('Registration')} style={{ fontSize: 16, fontWeight: 'bold', color: '#51cbcc', marginLeft: 40 }}>
                                Sinup
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#51cbcc', marginRight: 25 }}>
                                Forgot Password
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>





        </View>
    )
}