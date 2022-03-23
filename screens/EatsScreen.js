import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const EatsScreen = () =>
{
    const Stack = createNativeStackNavigator()
    return (
        <View>
            <Stack.Navigator>
                <Stack.Screen
                    name="EatsScreen"
                    component={EatsScreen}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </View>
    )
}

export default EatsScreen

const styles = StyleSheet.create({})