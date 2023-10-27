import Login from './screens/login'
import Home from './screens/home'
import Despesas from './screens/detdesp'
import Categorias from './screens/categ'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Despesas" component={Despesas} />
		<Stack.Screen name="Categorias" component={Categorias} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}