import React, { useState, useEffect } from 'react';
import Input from '../Input';
import DropDown from '../DropDown'
import Button from '../Button';
import Radiobutton from '../RadioButton';
import CheckBox from '../CheckBox';
import { validate } from '../../utilities/validation';
import { View,  Dimensions, Text,  ScrollView, } from 'react-native';

const width = Dimensions.get('window').width;

const Registration = ({ navigation }) => {
  const [inputs, setInputs] = React.useState({
    productid: '',
    productname: '',
    rate: '',
    offer: '',
    productkey: '',
    gender: '',
    
  });
  const [errors, setErrors] = React.useState({});


  const [typeValue, setTypeValue] = useState('')
  const [selectErr, setSelectErr] = useState('');

  const [statusValue, setStatusValue] = useState('')
  const [selectErr1, setSelectErr1] = useState('')
  
  const [checkedWhatsapp, setCheckedWhatsapp] = React.useState('');
  const [checkedFb, setCheckedFb] = React.useState('');
  const [checkedInsta, setCheckedInsta] = React.useState('');
  
 // console.log('social', checkedFb, checkedInsta, checkedWhatsapp)
 
  useEffect(() => {
    if (statusValue == '') {
      setSelectErr1('please select any status')
    } else {
      setSelectErr1(null)
    }
  }, [statusValue])

  useEffect(() => {
    if (typeValue == '') {
      setSelectErr('please select any type')
    } else {
      setSelectErr(null)
    }
  }, [typeValue])



  const handleOnchange = (text, input) => {
    setInputs(prevState => ({ ...prevState, [input]: text }));
  };
  const handleError = (error, input) => {
    setErrors(prevState => ({ ...prevState, [input]: error }));
  };





  const itemsData = ([
    { label: 'Electronic', value: 'electronic' },
    { label: 'Fashion', value: 'fashion' },
    { label: 'Food', value: 'food' },
  ]);



  const itemStatus = ([
    { label: 'Continue', value: 'continue' },
    { label: 'Discontinue', value: 'discontinue' }
  ]);






  return (
  
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#487eb0' }}>

    <View style={{ backgroundColor: '#487eb0', width: width * 0.90 }}>
      <Text style={{ fontSize: 30, fontWeight: '700', letterSpacing: 3, color: '#ffff' }}>Products Details</Text>
    </View>
    <ScrollView>
      <View style={{ marginVertical: 5, padding: 20, width: width * 0.9, backgroundColor: '#fff' }}>
          <Input
            keyboardType="numeric"
            onChangeText={text => handleOnchange(text, 'productid')}

            onFocus={() => handleError(null, 'productid')}
            iconName="dots-grid"
            label="Product Id"
            placeholder="Enter your Product Id"
            error={errors.productid}
          />

          <DropDown
            setDropValue={setTypeValue}
            placeholder="Select Type"
            label="Type"
            items={itemsData}
            error={selectErr}
          />


          <Input
            onChangeText={text => handleOnchange(text, 'productname')}
            onFocus={() => handleError(null, 'productname')}
            iconName="protocol"
            label="Product Name"
            placeholder="Enter your Product Name"
            error={errors.productname}
          />
          <Input
            keyboardType="numeric"
            onChangeText={text => handleOnchange(text, 'rate')}
            onFocus={() => handleError(null, 'rate')}
            iconName="currency-rupee"
            label="Rate"
            placeholder="Enter your Rate"
            error={errors.rate}
          />
          <DropDown
            placeholder="Select Status"
            setDropValue={setStatusValue}
            label="Status"
            items={itemStatus}
            error={selectErr1}
          />
          <Input
            keyboardType="numeric"
            onChangeText={text => handleOnchange(text, 'offer')}
            onFocus={() => handleError(null, 'offer')}
            iconName="offer"
            label="Offer"
            placeholder="Enter your Offer"
            error={errors.offer}
          />


          <Input
            onChangeText={text => handleOnchange(text, 'productkey')}
            onFocus={() => handleError(null, 'productkey')}
            iconName="lock-outline"
            label="Product Key"
            placeholder="Enter your Product Key"
            error={errors.productkey}
            password
          />

          <Radiobutton
            setInputs={setInputs}
            inputs={inputs}
            onFocus={() => {  handleError(null, 'gender') }}
            error={errors.gender}
            label="Gender"
          />

          <CheckBox
            setCheckedWhatsapp={setCheckedWhatsapp}
            setCheckedFb={setCheckedFb}
            setCheckedInsta={setCheckedInsta}
            label="Social"
          />



          <Button bordered color='#487eb0' text="Register" type='filled' onPress={() => validate(checkedFb, checkedInsta, checkedWhatsapp, handleError, inputs, typeValue, statusValue, setSelectErr, setSelectErr1, navigation)} />

          </View>

</ScrollView>
</View>
  );
}
export default Registration