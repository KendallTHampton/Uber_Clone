import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler'
import {Icon} from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'
import {useNavigation} from '@react-navigation/native'



const data = [

    {
        id: "123",
        icon: "home",
        location: "Home",
        destination: "Washington, DC"
    },
    {
        id: "456",
        icon: "briefcase",
        location: "Work",
        destination: "Los Angeles, CA"
    }
]

const NavFavorites = () =>
{
    const navigation = useNavigation()

    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() =>
            (<View
                style={[tw`bg-gray-200`, {height: 0.5}]}
            />
            )}
            renderItem={({item: {location, destination, icon}}) => (

                <TouchableOpacity
                    style={tw`flex-row items-center p-5`}>
                    <Icon
                        style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                        name={icon}
                        type="ionicon"
                        color="white"
                        size={18}
                    />

                    <View>
                        <Text style={tw`font-semibold text-lg`}>{location}</Text>
                        <Text style={tw`text-gray-500`}>{destination}</Text>
                    </View>
                </TouchableOpacity>
            )}>

        </FlatList>
    )
}

export default NavFavorites

const styles = StyleSheet.create({})