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
    shadowOffset:{  width: 10,  height: 10,  },
    shadowColor: 'black',
    shadowOpacity: 1.0,
    backgroundColor: '#fefefe'
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
    marginRight: Constants.MARGIN*2,
  },
  renderView:{
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 3,
    padding: Constants.MARGIN,
    marginHorizontal: Constants.MARGIN*2,
    marginTop: Constants.MARGIN*2
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
    fontSize: Constants.FONT*20,
  },
  rowRow:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    paddingRight: Constants.MARGIN*2
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
  text2:{
    fontSize: Constants.FONT*17
  },
  mainView:{
    flex: 1,
    backgroundColor: Colors.grayColor
  },
})

















