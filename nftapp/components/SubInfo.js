import {View, Text} from 'react-native'
import { SIZES } from '../constants'

export const NFTTitle = () => {
    return (<></>)
}

export const ETHPrice = () => {
    return (<></>)
}
export const ImageCmp = () => {
    return (<></>)
}
export const People = () => {
    return (<></>)
}
export const EndDate = () => {
    return (<></>)
}

export const SubInfo = () => {
    return (
        <View style={{ 
            width: '100%',
            paddingHorizontal: SIZES.font,
            marginTop: -SIZES.extraLarge,
            flexDirection: 'row',
            justifyContent: 'space-between'
            }}>
                <People/>
                <EndDate/>
                <Text>Sub</Text>
        </View>


    )
}