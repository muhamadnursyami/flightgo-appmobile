import React, {useEffect} from "react";
import {NavigationContainer} from  "@react-navigation/native"
import RouteNavigator from "./src/routes/index"

const App = () =>{
 return (
  <NavigationContainer>
    <RouteNavigator/>
  </NavigationContainer>
 )
}

export default App;
