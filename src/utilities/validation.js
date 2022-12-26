import { Keyboard } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { storeData } from "../components/storage/projectAsyncStorage";
export function validate(checkedFb, checkedInsta, checkedWhatsapp, handleError, inputs, typeValue, statusValue, setSelectErr, setSelectErr1, navigation) {
  Keyboard.dismiss();
  let isValid = true;


  if (!inputs.productid || !inputs.productid.match(/\d{1}/)) {
    handleError('Please input Product Id', 'productid');
    isValid = false;

  }

  if (!inputs.productname) {
    handleError('Please input Product Name', 'productname');
    isValid = false;
  }


  if (!inputs.rate || !inputs.rate.match(/\d{1}/)) {
    handleError('Please input Rate', 'rate');
    isValid = false;
  }

  if (!inputs.offer || !inputs.offer.match(/\d{1}/)) {
    handleError('Please input Offer', 'offer');
    isValid = false;
  }

  if (!inputs.productkey) {
    handleError('Please input password', 'productkey');
    isValid = false;
  } else if (inputs.productkey.length < 5) {
    handleError('Min Product Key length of 5', 'productkey');
    isValid = false;
  }
  else if (!inputs.productkey.match(/^[0-9a-zA-Z]+$/)) {
    handleError('No special character allowed', 'productkey');
    isValid = false;
  }
  // alert(inputs.gender)
  if (!inputs.gender) {
    handleError('Please Select Gender', 'gender');
    isValid = false;
  }

  if (typeValue == null || typeValue == '') {
    setSelectErr("Please select  Type")
  }

  if (!typeValue) {

    isValid = false;
  }

  if (statusValue == null || statusValue == '') {
    setSelectErr1("Please select  Status")
  }
  if (!statusValue) {

    isValid = false;
  }

  inputs['typeValue'] = typeValue
  inputs['statusValue'] = statusValue

 
  inputs['social'] = `${checkedFb} ${checkedInsta} ${checkedWhatsapp}`
  console.log('genddddddddererer', inputs.gender)

  if (isValid) {
    storeData('userData', inputs)
    navigation.navigate('Login')
    console.log('eeeeee', inputs)
    // alert("(" + inputs.productid + " " + inputs.productname + " " + inputs.rate + " " + inputs.offer + " " + inputs.productkey + " " + typeValue + " "+statusValue+ ") " + "All values are in my hand");
  }
};
