import { useState} from 'react';
import {Text, View, SafeArea, FlatList} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {NFTCard, HomeHeader, FocusedStatusBar} from '../components'
import {COLORS, NFTData} from '../constants'

const Home = ({ navigation }) => {

    return (
    <SafeAreaView style={{flex: 1, marginBottom: -200}}>
        <FocusedStatusBar background={COLORS.primary}/>

            <View style={{flex: 1}}>
                <View style={{zIndex: 0}}>
                    <FlatList data={NFTData}
                        renderItem={({item}) => <NFTCard navigation={navigation} data={item}/>}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={<HomeHeader/>}
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