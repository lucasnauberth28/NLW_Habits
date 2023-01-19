import { StyleSheet, Text, View, StatusBar } from 'react-native';
// import das fonts
import { 
  useFonts, 
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold  
} from '@expo-google-fonts/inter';

// component de loading
import { Loading } from './src/components/Loading';


export default function App() {

  // const criada para trazer as fonts para uma verificação de load
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold, 
    Inter_800ExtraBold  
  });
 
  // verificando se as fontes foram carregadas
  if( !fontsLoaded ) {
    return (
      <Loading />
    )
  }

  //retorno geral da aplicação
  return (
    <View style={styles.container}> 
      <Text style={styles.text}>Open up App.tsx to start working on your app!</Text>
      <StatusBar barStyle='light-content' backgroundColor="transparent" translucent/>
    </View>
  );
}

//Estilização do RN
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09090A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontFamily: 'Inter_800ExtraBold'
  }
});
