import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Authenticated/Home';
import { Login } from '../screens/Login';
import { AuthContext } from '../context/AuthContext'

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes () {
  const { isAuthenticated } = useContext(AuthContext);

    if(!isAuthenticated) {
      return <Login/>
    }

    return (
        <Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Screen
            name="Home"
            component={Home}
          />
        </Navigator>
    )
}