# reactNavigation
exemplo de criação drawer navigation e bottomTabNavigation do react native

#Docs de como iniciar com o react navigation: https://reactnavigation.org/docs/getting-started

#Passos para react navigation 5 (03/08/2020):

  1 - Instalação das dependências: "npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view"
  
  2 - Caso esteja no mac é necessário a instalação do pods:
  
    - "cd ios"
    
    - "npx pod-install ios"
    
    - "cd .."
    
  3 - importe a gesture handler no seu arquivo index.js: "import 'react-native-gesture-handler';"
  
  4 - em seu App.js logo após a importação do React, faça a importação da NavigationContainer: "import { NavigationContainer } from '@react-navigation/native';"
