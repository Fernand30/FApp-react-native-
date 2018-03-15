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
  title: {
    color: 'white',
    fontSize: Constants.FONT*23,
    textAlign: 'center',
    fontWeight: '700',  
  },
  rowView:{
    flexDirection: 'row',
    paddingHorizontal: Constants.MARGIN*5,
    alignItems:'center',
    justifyContent: 'space-between',
    height: Constants.MARGIN*20
  },
  bar:{
    height: 1,
    backgroundColor: Colors.grayColor,
  },
  play:{
    width: Constants.MARGIN*4,
    height: Constants.MARGIN*4
  }
})

















