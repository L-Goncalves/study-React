import {View, Text, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CircleButton } from '../components';
import { COLORS, SIZES, SHADOWS, assets} from '../constants';
import { SubInfo, EthPrice, NFTTitlem, NFTTitle } from './SubInfo';
const NFTCard = ({data}) => {
    return(
        <View style={{
            backgroundColor: COLORS.white, 
            borderRadius: SIZES.font,
            marginBottom: SIZES.base,
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
            {/* <Text>{data.name}</Text> */}
        </View>
    )
}

export default NFTCard;