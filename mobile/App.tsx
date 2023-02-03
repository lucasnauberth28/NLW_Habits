import './src/lib/dayjs'

import { StatusBar } from 'react-native';
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
import { Routes } from './src/routes';


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
    <> 
      <Routes />
      <StatusBar barStyle='light-content' backgroundColor="transparent" translucent/>
    </>
  );
}

