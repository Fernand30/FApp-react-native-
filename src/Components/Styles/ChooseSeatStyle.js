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
  back:{
    width: Constants.MARGIN*5,
    height: Constants.MARGIN*5,
  },
  headerRightView:{
    width: Constants.MARGIN*30
  },
  mark:{
    width: Constants.MARGIN*6,
    height: Constants.MARGIN*6/650*694,
  },
  title: {
    color: 'white',
    fontSize: Constants.FONT*23,
    textAlign: 'center',
    fontWeight: '700',  
  },
  search: {
    width: Constants.MARGIN*4.5,
    height: Constants.MARGIN*4.5,
  },
  renderView:{
    flexDirection: 'row',
    paddingTop: Constants.MARGIN*2
  },
  seatView:{
    width: Constants.MARGIN*5,
    height: Constants.MARGIN*5,
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: '#54be95',
    marginLeft: Constants.MARGIN
  },
  seat:{
    fontSize: Constants.FONT*12,
    color: '#d0cacc'
  },
  disableseatView:{
    width: Constants.MARGIN*5,
    height: Constants.MARGIN*5,
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eaeaea',
    marginLeft: Constants.MARGIN
  },
  emptyView:{
    width: Constants.MARGIN*5,
    height: Constants.MARGIN*5,
  },
  disableseat:{
    fontSize: Constants.FONT*12,
    color: '#cacacc'
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
  rowView:{
    flexDirection: 'row',
    justifyContent:'space-between',
    paddingHorizontal: Constants.MARGIN*24,
    alignItems:'center',
    marginTop: Constants.MARGIN*3
  },
  eachView:{
    alignItems:'center',
    justifyContent:'center'
  },
  bar:{
    backgroundColor: 'white',
    width: 0.5,
    height: Constants.MARGIN*7,
  },
  text1:{
    fontSize: Constants.FONT*17,
    color: 'white',
    textAlign: 'center',
    marginTop: Constants.MARGIN
  },
  text2:{
    fontSize: Constants.FONT*16,
    color: 'white',
    textAlign: 'center',
  },
  text3:{
    fontSize: Constants.FONT*18,
    color: 'white',
    textAlign: 'center',
    fontWeight: '700'
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
  beauty:{
    fontSize: Constants.FONT*20,
    color: 'white',
    textAlign: 'center',
    marginTop: Constants.MARGIN*5,
    fontWeight: '700'
  },
  mainView:{
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: Constants.MARGIN*4
  },
  seatlevel:{
    marginTop: Constants.MARGIN*4,
    fontSize: Constants.FONT*17,
    textAlign: 'center'
  },
  beautyView:{
    backgroundColor: Colors.background,
    height: Constants.MARGIN*32,
    borderTopWidth: 0.4,
    borderColor: 'white',
    shadowOffset:{  width: 0,  height: 2,  },
    shadowColor: 'black',
    shadowOpacity: 0.5,
  },
  button:{
    height: Constants.MARGIN*14.5,
    backgroundColor: Colors.background,
    alignItems:'center',
    justifyContent:'center'
  },
})

















