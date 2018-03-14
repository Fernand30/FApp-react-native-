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
  mark:{
    alignSelf: 'center',
    width: Constants.MARGIN*20,
    height: Constants.MARGIN*20/650*694,
    marginTop: Constants.MARGIN*18
  },
  rowView:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: Constants.MARGIN*12,
    marginTop: Constants.MARGIN*16
  },
  rowView1:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: Constants.MARGIN*12,
    marginTop: Constants.MARGIN*9
  },
  mail: {
    width: Constants.MARGIN*5,
    height: Constants.MARGIN*5/49*37
  },
  key: {
    width: Constants.MARGIN*5,
    height: Constants.MARGIN*5
  },
  inputView:{
    paddingVertical: Constants.MARGIN,
    borderBottomWidth: 0.7,
    borderColor: 'white'
  },
  inputLabel: {
    color: Colors.labelColor,
    fontSize: Constants.FONT*17,
    marginBottom: Constants.MARGIN*1.5
  },
  textinput: {
    width: Constants.MARGIN*65,
    color: 'white',
    fontSize: Constants.FONT*17,
    height: Constants.MARGIN*6
  },
  rememberView:{
    flexDirection: 'row',
    marginLeft: Constants.MARGIN*12,
    alignItems:'center',
    marginTop: Constants.MARGIN*13
  },
  commonRowView:{
    flexDirection: 'row',
    alignItems: 'center',
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
  text:{
    fontSize: Constants.FONT*17,
    color: 'white',
    marginLeft: Constants.MARGIN*3
  },
  forgot:{
    marginLeft: Constants.MARGIN*11
  },
  forgotText:{
    fontSize: Constants.FONT*17,
    color: 'white',
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
  skipButton:{
    height: Constants.MARGIN*9,
    borderRadius: Constants.MARGIN*4.5,
    backgroundColor:Colors.skipColor,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Constants.MARGIN*8,
    marginHorizontal: Constants.MARGIN*39,
    borderWidth: 2,
    borderColor: 'white'
  },
  skipText:{
    color: 'white',
    fontSize: Constants.FONT*19
  },
  signup:{
    color: 'white',
    fontSize: Constants.FONT*20,
    alignSelf: 'center',
    marginTop: Constants.MARGIN*11
  }
})

















