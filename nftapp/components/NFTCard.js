import {View, Text, Image} from 'react-native';
import { CircleButton } from '../components';
import { COLORS, SIZES, SHADOWS, assets} from '../constants';
import { SubInfo, EthPrice, NFTTitle } from './SubInfo';
import {RectButton} from './Button'
const NFTCard = ({data , navigation }) => {
    return(
        <View style={{
            backgroundColor: COLORS.white, 
            borderRadius: SIZES.font,
            marginBottom: SIZES.extraLarge,
            margin: SIZES.base 
        }}>
            <View style={{width: '100%', height: 250}}>
                <Image source={data.image} resizeMode="cover"
                style={{
                    width: '100%',
                    height: '100%',
                    borderTopLeftRadius: SIZES.font, 
                    borderTopRightRadius: SIZES.font}}/>
                    
                    <CircleButton imgUrl={assets.heart} right={10} top={10}/>
            </View>
     
            <SubInfo/>
            <View style={{width: "100%", padding: SIZES.font}}>
            <NFTTitle 
                title={data.name}
                subtitle={data.creator}
                titleSize={SIZES.large}
                subtitleSize={SIZES.small}
                />
            </View>

            <View style={{marginTop: SIZES.font, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <EthPrice price={data.price}/>
                <RectButton
                minWidth={120}
                fontSize={SIZES.font}
                handlePress={() =>  navigation.navigate("Details", {data})}/>
            </View>
            {/* <Text>{data.name}</Text> */}
        </View>
    )
}

export default NFTCard;