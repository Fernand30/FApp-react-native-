import { StyleSheet, Platform } from 'react-native'
import { Constants } from '../Themes/'

export default StyleSheet.create({
  tab1: (Platform.OS === 'ios')? {
  	width: Constants.MARGIN*5,
  	height: Constants.MARGIN*5/53*71,
  }:{
    resizeMode: 'center',
  },
  tab2:(Platform.OS === 'ios')? {
  	width: Constants.MARGIN*5,
  	height: Constants.MARGIN*5
  }:{
    resizeMode: 'center',
  },
  tab3:(Platform.OS === 'ios')? {
  	width: Constants.MARGIN*5,
  	height: Constants.MARGIN*5/61*63
  }:{
    resizeMode: 'center'
  },
  tab4: (Platform.OS === 'ios')?{
  	width: Constants.MARGIN*5,
  	height: Constants.MARGIN*5
  }:{
    resizeMode: 'center'
  }
})
