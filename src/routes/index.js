import {} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { global } from '../assets/css/style';
import Clientes from '../pages/Clientes';
import AddClientes from '../pages/AddClientes';
import ExpoIcon from '@expo/vector-icons'

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function TabHome() {
    return(
        <Tab.Navigator screenOptions={{ headerShown: false,
                                        tabBarActiveTintColor: global.Primary,
                                        tabBarInactiveTintColor: global.White,
                                        tabBarActiveBackgroundColor: global.Primary70,
                                        tabBarStyle: {position: 'absolute',
                                                      bottom: 0,
                                                      backgroundColor: global.Primary,
                                                      height:60,},
                                        
                                        }}>
            <Tab.Screen name="DASHBOARD" 
                        component={Dashboard}
                        options={{
                            tabBarIcon: ({color, size}) =>{
                                return <Icon name='home' color={color} size={size} /> 
                            }
                        }}/>
            <Tab.Screen name="CLIENTES" 
                        component={Clientes}
                        options={{
                            tabBarIcon: ({color, size}) => {
                                return <Icon name="users" color={color} size={size} />
                            }
                        }}/>
            <Tab.Screen name="ADICIONAR CLIENTE" 
                        component={AddClientes}
                        options={{
                            tabBarIcon: ({color, size}) => {
                                return <Icon name="user-plus" color={color} size={size} />
                            }
                        }}/>
        </Tab.Navigator>
    );
}

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="home" component={Home} options={{headerShown: false}}/>
            <Stack.Screen name="login" component={Login} options={{headerShown: false}}/>
            <Stack.Screen name="register" component={Register} options={{headerShown: false}}/>
            <Stack.Screen name="clientes" component={Clientes} options={{headerShown: false}}/>
            <Stack.Screen name="addClientes" component={AddClientes} options={{headerShown: false}}/>
            <Stack.Screen name="dashboard" component={TabHome} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}