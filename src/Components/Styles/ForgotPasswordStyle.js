import { StyleSheet } from 'react-native'
import { Constants, Colors } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
  contentStyle: {
    flex: 1,
    width: null,
    height: null,
  },
  password:{
    alignSelf: 'center',
    width: Constants.MARGIN*25,
    height: Constants.MARGIN*25/292*256,
    marginTop: Constants.MARGIN*25
  },
  back:{
    width: Constants.MARGIN*5,
    height: Constants.MARGIN*5,
    marginLeft: Constants.MARGIN*5,
    marginTop: Constants.MARGIN*3
  },
  loginButton:{
    height: Constants.MARGIN*12,
    borderRadius: Constants.MARGIN*6,
    backgroundColor:'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Constants.MARGIN*10,
    marginHorizontal: Constants.MARGIN*20,
  },
  loginText:{
    color: Colors.background,
    fontSize: Constants.FONT*23
  },
  bigText:{
    color: 'white',
    textAlign: 'center',
    fontSize: Constants.FONT*25,
    marginTop: Constants.MARGIN*10
  },
  whiteText:{
    color: 'white',
    textAlign: 'center',
    fontSize: Constants.FONT*18,
    marginTop: Constants.MARGIN*3
  },
  inputText:{
    height: Constants.MARGIN*12,
    borderRadius: Constants.MARGIN*6,
    backgroundColor:Colors.buttonColor,
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: Constants.MARGIN*14,
    marginHorizontal: Constants.MARGIN*20,
    color: 'white'
  }
})

















