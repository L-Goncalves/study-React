import { useState} from 'react';
import {Text, View, SafeArea, FlatList} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {NFTCard, HomeHeader, FocusedStatusBar} from '../components'
import {COLORS, NFTData} from '../constants'

const Home = ({ navigation }) => {
    const [NFTDATA, setNFTData] = useState(NFTData);

    const handleSearch = (value) => {
        if(!value.length) return setNFTData(NFTData);
       
        const filteredData = NFTDATA.filter((item) => item.name.toLowerCase().includes(value));

        console.log(value.length, filteredData)
        if(value.length > 0 && filteredData.length == 0){
            setNFTData(filteredData)
        }
        if(filteredData.length > 0){
            setNFTData(filteredData)
        }
  
    }


    return (
    <SafeAreaView style={{flex: 1}}>
        <FocusedStatusBar background={COLORS.primary}/>

            <View style={{flex: 1}}>
                <View style={{zIndex: 0}}>
                    <FlatList data={NFTDATA}
                        renderItem={({item}) => <NFTCard navigation={navigation} data={item}/>}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={<HomeHeader onSearch={handleSearch}/>}
                    />
                </View>

                <View style={{position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, zIndex: -1}}>
                    <View style={{height: 300, backgroundColor: COLORS.primary}}>
                        
                    </View>
                    <View style={{height: 300, backgroundColor: COLORS.white}}>
                    
                    </View>
                </View>
            </View>
    </SafeAreaView>)
}


export default Home