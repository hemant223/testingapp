import AsyncStorage from "@react-native-async-storage/async-storage";


export async function getStoreData(key) {
   try {
      const value = await AsyncStorage.getItem(key);
      console.log('Async Data:', value);
      if (value !== null) {
         var userData = JSON.parse(value);
         console.log('Async Data :', value);
         return userData;
      } else {
         console.log('No Data Found..');
         return null;
      }
   } catch (e) {
      console.log('Async Data Error', e);
      return null;
   }
}



export async function storeData(key, body) {
   try {
      await AsyncStorage.setItem(`${key}`, JSON.stringify(body));
   } catch (e) {
      console.log('Error in saving data');
   }
}



export const removeStoreData = (key) => {
   try {
      AsyncStorage.removeItem(key)

   } catch (e) {
      console.log("Error for " + key, e)
   }

}
