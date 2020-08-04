import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, Button} from 'react-native';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const BTab = createBottomTabNavigator();

const Home = ({navigation}) => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home</Text>
            <Button
                title = "Configuração"
                onPress = {() => navigation.navigate("Config")}
            />
        </View>
    );
};

const Config = ({navigation}) => {
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Config</Text>
            <Button
                title = "Abrir configuração novamente"
                onPress = {() => navigation.push("Config")}
            />
            <Button
                title = "Home"
                onPress = {() => navigation.navigate("Home")}
            />
            <Button
                title = "Voltar"
                onPress = {() => navigation.goBack()}
            />
            <Button
                title = "Ir para primeira tela"
                onPress = {() => navigation.popToTop()}
            />
        </View>
    );
}
const App = () => {
    return (
        <NavigationContainer>
            {/* <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{
                    headerStyle: {backgroundColor: '#009387'},
                    headerTintColor: '#fff',
                    headerTitleStyle: {fontWeight: 'bold'}
                }} />
                <Stack.Screen name="Config" component={Config} />
            </Stack.Navigator> */}

            {/* <Drawer.Navigator initialRouteName="Home">
                    <Drawer.Screen name="Home" component={Home} />
                    <Drawer.Screen name="Config" component={Config} />
            </Drawer.Navigator> */}

            <BTab.Navigator>
                <BTab.Screen name="Home" component={Home} />
                <BTab.Screen name="Config" component={Config} />
            </BTab.Navigator>

        </NavigationContainer>

    );
}

export default App;