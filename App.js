import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
const Stack = createNativeStackNavigator();
import Listing from './components/Listing';

function Home({ navigation }) {
  return (
    <HomeScreen navigation={navigation}/>
  );
}

function listing() {
  return (
    <Listing/>
  );
}


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="listing" component={listing} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;