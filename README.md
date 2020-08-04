# reactNavigation
exemplo de criação drawer navigation e bottomTabNavigation do react native

#Docs de como iniciar com o react navigation: https://reactnavigation.org/docs/getting-started

#Passos para react navigation 5 (03/08/2020):

  1 - Instalação das dependências:
  
      > npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view @react-navigation/native
  
  2 - Caso esteja no mac é necessário a instalação do pods:
  
      > cd ios
      > npx pod-install ios
      > cd ..
    
  3 - importe a gesture handler no seu arquivo index.js ou App.js. Apenas se certifique que será a primeira linha do seu arquivo:
  
      > import 'react-native-gesture-handler';
  
  4 - em seu App.js logo após a importação do React, faça a importação da NavigationContainer:
  
      > import { NavigationContainer } from '@react-navigation/native';
  
  5 - Quando for utilizar sua navegação, faça entre as tags:
  
      <NavigationContainer>
        ...
      </NavigationContainer>
 
 A partir dai basta fazer uso do tipo de navegação que você queira para sua aplicação.
 
 Stack Navigation
 -
  1 - Faça a instalação da sua stack navigation:
  
      > yarn add @react-navigation/stack
  
  2 - no seu App.js faça o import da stack navigation:
  
      > import {createStackNavigator} from '@react-navigation/stack';
  
  3 - crie uma constante para iniciar sua stack navigation:
  
      > const Stack = createStackNavigator();
  
  4 - Entre as tags Navigation Container coloque:
  
      <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Config" component={Config} />
      </Stack.Navigator>
      
Drawer Navigation
-
  1 - Faça a instalação do drawer navigation:
  
      > yarn add @react-navigation/drawer
  
  2 - no seu App.js faça o import da drawer navigation:
  
      > import {createDrawerNavigator} from '@react-navigation/drawer';
  
  3 - crie uma constante para iniciar sua drawer navigation:
  
      > const Drawer = createDrawerNavigator();
  
  4 - Entre as tags Navigation Container coloque:
  
        <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Config" component={Config} />
        </Drawer.Navigator>
        
Bottom Tab Navigation
-
  1 - Faça a instalação da bottom-tabs:
  
      > yarn add @react-navigation/bottom-tabs
  
  2 - no seu App.js faça o import da bottom tab navigation:
  
      > import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
  
  3 - crie uma constante para iniciar sua bottom tab navigation:
  
      > const BTab = createBottomTabNavigator();
  
  4 - Entre as tags Navigation Container coloque:
  
        <BTab.Navigator>
                <BTab.Screen name="Home" component={Home} />
                <BTab.Screen name="Config" component={Config} />
        </BTab.Navigator>
        
  5 - Para incrementar sua bottom tabs você pode colocar os materiais para o mesmo:
      
      > npm install @react-navigation/material-bottom-tabs react-native-paper react-native-vector-icons/MaterialCommunityIcons
  
  6 - Ao invés de importar bottomNavigator faça com materialBottomNavigator:
  
      > import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs;
  
  7 - Importe também os icones:
  
      > import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

  8 - crie uma constante para seu material bottom tab navigation:
  
      > Tab = createMaterialBottomTabNavigator();
      
  9 - Aqui um exemplo de utilização da navegação:
  
      <Tab.Navigator
        initialRouteName="Feed"
        activeColor="#e91e63"
        style={{ backgroundColor: 'tomato' }}
      >
        <Tab.Screen
          name="Feed"
          component={Feed}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{
            tabBarLabel: 'Updates',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bell" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
    </Tab.Navigator>
