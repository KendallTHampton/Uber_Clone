import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames'
import Map from '../components/Map'
import MapView from 'react-native-maps'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import NavigateCard from '../components/NavigateCard'
import RideOptionsCard from '../components/RideOptionsCard'
import {TouchableOpacity} from 'react-native-gesture-handler'
import {Icon} from 'react-native-elements/dist/icons/Icon'




const MapScreen = () =>
{
    const Stack = createNativeStackNavigator()

    return (
        <SafeAreaView>



            <View style={tw`h-1/2`}>

                <Map />
            </View>

            <View style={tw`h-1/2`}>
                <Stack.Navigator>
                    <Stack.Screen
                        name="NavigateCard"
                        component={NavigateCard}
                        options={{
                            headerShown: false,
                        }}
                    />

                    <Stack.Screen
                        name="RideOptionsCard"
                        component={RideOptionsCard}
                        options={{
                            headerShown: false,
                        }}
                    />

                </Stack.Navigator>
            </View>
        </SafeAreaView>
    )
}

export default MapScreen

