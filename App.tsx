import React from "react";
import {NavigationContainer} from  "@react-navigation/native"
import RouteNavigator from "./src/routes/index"
import { AuthProvider } from "./src/auth/authContext";
const App = () =>{
 return (
    <AuthProvider>
      <NavigationContainer>
        <RouteNavigator/>
      </NavigationContainer>
    </AuthProvider>
 )
}

export default App;
