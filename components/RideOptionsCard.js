import {StyleSheet, Text, View, Image} from 'react-native'
import React, {useState} from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames'
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler'
import {Icon} from 'react-native-elements'
import {useNavigation} from '@react-navigation/native'
import {useSelector} from 'react-redux'
import {selectTravelTimeInformation} from '../slices/navSlice'


const data =
    [
        {

            id: "Uber-X-123",
            title: "Uber X",
            multiplier: 1,
            image: "https://links.papareact.com/3pn"


        },
        {

            id: "Uber-X-456",
            title: "Uber XL",
            multiplier: 1.2,
            image: "https://links.papareact.com/5w8"


        },
        {

            id: "Uber-LUX-789",
            title: "Uber LUX",
            multiplier: 1.75,
            image: "https://links.papareact.com/7pf"


        },
    ]

// SURGE PRICE
const SURGE_CHARGE_RATE = 1.5

const RideOptionsCard = () =>
{
    const navigation = useNavigation()
    const [selected, setSelected] = useState(null)
    const travelTimeInformation = useSelector(selectTravelTimeInformation)
    return (
        <View style={tw`bg-white flex-grow `} >

            <TouchableOpacity
                style={tw` absolute py-2 pl-2 pr-2`}
                onPress={() => navigation.navigate("NavigateCard")}>
                <Icon name="chevron-left" type="fontawesome" />
            </TouchableOpacity>
            <Text style={tw`text-center py-2 text-xl`}>Select a Ride - {travelTimeInformation?.distance.text}</Text>

            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({item: {id, title, multiplier, image}, item}) => (

                    <TouchableOpacity
                        onPress={() => setSelected(item)}
                        style={tw`flex-row items-center justify-between px-10 
                            ${id === selected?.id && "bg-gray-200"}
                            `}

                    >
                        <Image
                            style={{
                                width: 100,
                                height: 90,
                                resizeMode: "contain"
                            }}
                            source={{uri: image}}
                        />
                        <View style={tw`-ml-3 mr-3`}>
                            <Text style={tw`text-xl font-semibold`}>{title}</Text>
                            <Text style={tw``}>{travelTimeInformation?.duration.text}: Travel </Text>
                        </View>
                        <View>
                            <Text style={tw`text-xl`}>

                                {new Intl.NumberFormat('en-US', {
                                    style: 'currency',
                                    currency: 'USD'
                                }).format(
                                    (travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * multiplier) / 60
                                )}




                            </Text>
                        </View>
                    </TouchableOpacity>
                )}
            />

            <View style={tw`mt-auto border-t border-gray-200`}>
                <TouchableOpacity style={tw`bg-black py-2 -mt-3 ml-2 mr-2 `}
                    disabled={!selected}>
                    <Text style={tw`text-center text-white text-xl`}>Choose {selected?.title} </Text>
                </TouchableOpacity>
            </View>
        </View>


    )

}

export default RideOptionsCard

const styles = StyleSheet.create({})