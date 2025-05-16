import { StyleSheet } from 'react-native';
import Spacing from './spacing';
import { Dimensions } from 'react-native';
import Colors from './colors';


export const SCREEN_WIDTH = Dimensions.get('screen').width;
export const SCREEN_HEIGHT = Dimensions.get('screen').height

export const { width, height } = Dimensions.get("screen")
export const scale = width < 400 ? 0.8 : 1;





const GlobalStyles = StyleSheet.create({
 
  mainContainer: {
    flex:1,                    
    marginTop: Spacing.small,
    backgroundColor: Colors.white,
  },

  safeArea: {
    flex: 1,
    backgroundColor: "white",
},
headerTop:{
  backgroundColor:Colors.secondary,
  height: 70,
  borderEndEndRadius: 40,
  justifyContent:"center",
  borderBottomWidth: 4,
  borderRightWidth: 8,
  borderColor: Colors.primary,
}
});

export default GlobalStyles;
