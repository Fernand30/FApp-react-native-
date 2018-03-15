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
  headerView:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.background,
    height: Constants.MARGIN*12.5,
    paddingHorizontal: Constants.MARGIN*3
  },
  headerLeftView:{
    width: Constants.MARGIN*30
  },
  headerRightView:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: Constants.MARGIN*30
  },
  mark:{
    width: Constants.MARGIN*6,
    height: Constants.MARGIN*6/650*694,
  },
  title: {
    color: 'white',
    fontSize: Constants.FONT*20,
    textAlign: 'center',
    fontWeight: '700',  
    marginTop: Constants.MARGIN
  },
  search: {
    width: Constants.MARGIN*4.5,
    height: Constants.MARGIN*4.5,
  },
  renderView:{
    backgroundColor: 'white',
    borderRadius: 3,
    paddingVertical: Constants.MARGIN*3,
    marginHorizontal: Constants.MARGIN*2,
    marginTop: Constants.MARGIN*2
  },
  street:{
    marginTop: Constants.MARGIN*2,
    paddingHorizontal: Constants.MARGIN*3
  },
  blackpanther:{
    width: Constants.MARGIN*20,
    height: Constants.MARGIN*20/219*325
  },
  explainView:{
    marginLeft: Constants.MARGIN*3,
    flex: 1,
    paddingVertical: Constants.MARGIN*3,
    justifyContent: 'space-between'
  },
  text1:{
    fontSize: Constants.FONT*15,
    marginBottom: Constants.MARGIN,
    fontWeight: '300'
  },
  text2:{
    fontSize: Constants.FONT*17
  },
  rowRow:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    paddingHorizontal: Constants.MARGIN*3,
    flex: 1
  },
  bookView:{
    width: Constants.MARGIN*16,
    height: Constants.MARGIN*5.4,
    borderRadius: Constants.MARGIN*2.7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.buttonColor,
  },
  book:{
    color: 'white',
    fontSize: Constants.FONT*12
  },
  fourstars:{
    width: Constants.MARGIN*14,
    height: Constants.MARGIN*14/1780*288,
  },
  mainView:{
    flex: 1,
    marginTop: Constants.MARGIN*21,
    backgroundColor: 'white',
    paddingTop: Constants.MARGIN*20
  },
  absoluteView:{
    position: 'absolute',
    top: Constants.MARGIN*8,
    left: Constants.WIDTH/2- Constants.MARGIN*13,
    width: Constants.MARGIN*26,
    height: Constants.MARGIN*26,
    borderRadius: Constants.MARGIN*13,
    alignItems:'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    backgroundColor:'white'
  },
  woman:{
    width: Constants.MARGIN*24,
    height: Constants.MARGIN*24,
    borderRadius: Constants.MARGIN*12
  },
  applyView:{
    borderBottomWidth: 0.6,
    borderColor: Colors.grayColor,
    height :Constants.MARGIN*17,
    justifyContent: 'center',
    paddingLeft: Constants.MARGIN*5,
  },
  changeView:{
    flexDirection: 'row',
    paddingHorizontal: Constants.MARGIN*5,
    alignItems:'center',
    justifyContent: 'space-between',
    height :Constants.MARGIN*12,
  },
  play:{
    width: Constants.MARGIN*3,
    height: Constants.MARGIN*3
  },
  loginButton:{
    height: Constants.MARGIN*12,
    borderRadius: Constants.MARGIN*6,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Constants.MARGIN*8,
    marginHorizontal: Constants.MARGIN*20,
  },
  loginText:{
    color: 'white',
    fontSize: Constants.FONT*23
  },
})

















