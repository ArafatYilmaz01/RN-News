import React from 'react';
import {SafeAreaView,View,Text,FlatList, StyleSheet,ScrollView, Image, Dimensions} from 'react-native';
import news_data from './news_data.json';
import NewsCard from './src/components/NewsCard';
import Scroll from './src/components/ScrollView';

function App (){
  //FlatList best usage.Asagida tek fonksiyonu birden cok olustururken burada bir defa olusturup birden fazla cagiriyor
  const renderNews =({item}) => <NewsCard news={item} />;
  return(
  <SafeAreaView style={styles.container}>
  <Text style={styles.headerText}>News</Text>

      <FlatList //default flex:1'dir. Ekranda kaplayabildigi kadar yer kaplar
      //asagidaki listheadercomponent sayesinde scrollview tepe kisimda sabit kalmiyor.
      ListHeaderComponent={()=>(
        
        <Scroll />
      )}
      keyExtractor={(item,index)=>item.u_id.toString()}//id degeri json'da string degilse stringe cevirmemiz gerekiyor.
                                                      //Key extractor ile jsondaki id bilgisini key olarak veriyoruz
      data={news_data}
     // renderItem={({item})=> <NewsCard news={item}/>} 
     renderItem={renderNews} 
     
     />
     

  </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#eceff1",
  },
  headerText:{
fontWeight:'bold',
fontSize:50,
  }
})
export default App;