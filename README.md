# reactNavigation
exemplo de criação drawer navigation e bottomTabNavigation do react native

#Docs de como iniciar com o react navigation: https://reactnavigation.org/docs/getting-started

#Passos para react navigation 5 (03/08/2020):

  1 - Instalação das dependências: "npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view @react-navigation/native"
  
  2 - Caso esteja no mac é necessário a instalação do pods:
  
      - "cd ios"
    
      - "npx pod-install ios"
    
      - "cd .."
    
  3 - importe a gesture handler no seu arquivo index.js ou App.js. Apenas se certifique que será a primeira linha do seu arquivo: "import 'react-native-gesture-handler';"
  
  4 - em seu App.js logo após a importação do React, faça a importação da NavigationContainer: "import { NavigationContainer } from '@react-navigation/native';"
  
  5 - Quando for utilizar sua navegação, faça entre as tags <NavigationContainer></NavigationContainer>
 
 A partir dai basta fazer uso do tipo de navegação que você queira para sua aplicação.
 
 Stack Navigation
 -
 
  1 - yarn add @react-navigation/stack
  
  2 - no seu App.js faça o import da stack navigation: "import {createStackNavigator} from '@react-navigation/stack';"
  
  3 - crie uma constante para iniciar sua stack navigation: "const Stack = createStackNavigator();"
  
  4 - Entre as tags Navigation Container coloque:
  
      <Stack.Navigator>
                <Stack.Screen name="Main Screen" component={Home} />
      </Stack.Navigator>
