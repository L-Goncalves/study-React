import {Button, StatusBar, TouchableOpacity, Text, Image} from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { COLORS, FONTS, SHADOWS, SIZES } from '../constants';

export const CircleButton = ({ handlePress, imgUrl, ...props }) => {
 

    return(<TouchableOpacity style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: 'absolute',
        borderRadius: SIZES.extraLarge,
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOWS.light,
        ...props
    }}
    onPress={handlePress}
    >
       <Image source={imgUrl}
       resize="contain"
       style={{width: 24, height: 24}}/>
    </TouchableOpacity>)
}

export const RectButton = ({ minWidth, fontSize, handlePress, ...props}) => {
    return(<TouchableOpacity style={{
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        padding: SIZES.small,
        marginBottom: 10,
        ...props,
    }}
    onPress={handlePress}
    >
    <Text style={{fontFamily: FONTS.semiBold, fontSize: fontSize, color: COLORS.white, textAlign: 'center'}}>
        Place a bid
    </Text>

    </TouchableOpacity>)
}
