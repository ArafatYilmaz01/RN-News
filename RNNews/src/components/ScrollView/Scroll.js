import React from 'react';
import {Image,ScrollView} from 'react-native';
import styles from './Scroll.style';
import news_banner_data from '../../../news_banner_data.json';
const Scroll =()=>{

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {
          news_banner_data.map(bannerNews=> <Image source={{uri:bannerNews.imageUrl}} style={styles.banner_image}/>)
        }
      </ScrollView>
    )
}
export default Scroll;