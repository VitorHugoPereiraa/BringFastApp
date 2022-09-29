import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/Authenticated/Home';
import { Login } from '../screens/Login';
import { AuthContext } from '../context/AuthContext';
import { MaterialIcons } from '@expo/vector-icons'

const { Screen, Navigator } = createBottomTabNavigator();

export function MenuRoutes () {
  const { isAuthenticated } = useContext(AuthContext);

    if(!isAuthenticated) {
      return <Login/>
    }

    return (
        <Navigator
          // screenOptions={{
          //   headerShown: false
          // }}
        >
          <Screen
            name="Pedidos"
            component={Home}
            options={{
              tabBarLabel: "Pedidos",
              tabBarIcon: ({color, size}) => (
                <MaterialIcons
                  name="receipt"
                  color={color}
                  size={size}
                />
              )
            }}
          />
        </Navigator>
    )
}