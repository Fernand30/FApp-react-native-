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
    marginTop: Constants.MARGIN*8,
    marginHorizontal: Constants.MARGIN*20,
  },
  text:{
    fontSize: Constants.FONT*16,
    color: 'white',
    marginLeft: Constants.MARGIN*3,
  },
  commonRowView:{
    flexDirection: 'row',
    marginLeft: Constants.MARGIN*20,
    marginTop: Constants.MARGIN*7
  },
  loginText:{
    color: Colors.background,
    fontSize: Constants.FONT*23
  },
  checkView:{
    width: Constants.MARGIN*4.2,
    height: Constants.MARGIN*4.2,
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  check:{
    width: Constants.MARGIN*3,
    height: Constants.MARGIN*3/36*27
  },
  bigText:{
    color: 'white',
    textAlign: 'center',
    fontSize: Constants.FONT*23,
    marginTop: Constants.MARGIN*4,
    marginBottom: Constants.MARGIN*13
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
    marginTop: Constants.MARGIN*3,
    marginHorizontal: Constants.MARGIN*20,
    color: 'white'
  },
  signup:{
    color: 'white',
    fontSize: Constants.FONT*20,
    alignSelf: 'center',
    marginTop: Constants.MARGIN*22
  }
})

















