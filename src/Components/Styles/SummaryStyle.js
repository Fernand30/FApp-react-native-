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
  commonRowView:{
    flexDirection: 'row',
    paddingHorizontal: Constants.MARGIN*5,
    paddingVertical: Constants.MARGIN*4,
    borderColor: Colors.grayColor,
    borderBottomWidth: 1.5
  },
  rowView:{
    flexDirection: 'row',
    paddingHorizontal: Constants.MARGIN*5,
    alignItems:'center',
    justifyContent: 'space-between'
  },
  columnView:{
    paddingTop: Constants.MARGIN*7,
    justifyContent: 'space-between',
    height: Constants.MARGIN*28
  },
  summary:{
    width: Constants.MARGIN*20,
    height: Constants.MARGIN*20/340*461
  },
  summaryView:{
    marginLeft: Constants.MARGIN*4,
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: Constants.MARGIN*2
  },
  underline:{
    height: 0.5,
    backgroundColor: Colors.grayColor,
    marginHorizontal: Constants.MARGIN*5
  },
  payment:{
    fontSize: Constants.FONT*22,
    fontWeight: '700',
    marginLeft: Constants.MARGIN*5,
    marginTop: Constants.MARGIN*15
  },
  text:{
    fontSize: Constants.FONT*30,
  },
  text1:{
    fontSize: Constants.FONT*20,
    fontWeight: '700'
  },
  text4:{
    fontSize: Constants.FONT*19,
    fontWeight: '600',
    marginTop : Constants.MARGIN
  },
  enter:{
    fontSize: Constants.FONT*19,
    textAlign: 'center',
    marginTop: Constants.MARGIN*4.5
  },
  text2:{
    fontSize: Constants.FONT*16
  },
  total:{
    fontSize: Constants.FONT*18,
    fontWeight: '600'
  },
  text3:{
    fontSize: Constants.FONT*14
  },
  tickets:{
    fontSize: Constants.FONT*14,
    marginBottom: Constants.MARGIN*1.1,
    marginLeft: Constants.MARGIN
  },
  goldView:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: Constants.MARGIN*6,
  },
  bar:{
    width: 1,
    height: Constants.MARGIN*6,
    backgroundColor: Colors.grayColor
  },
  ticketView:{
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  visaView:{
    marginHorizontal: Constants.MARGIN*5,
    paddingVertical: Constants.MARGIN*4,
    shadowOffset:{  width: 0,  height: 1,  },
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 2,
    borderRadius: 3,
    flexDirection: 'row',
    paddingHorizontal: Constants.MARGIN*5,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: Constants.MARGIN*3,
    elevation: 2,
  },
  visa:{
    width: Constants.MARGIN*16,
    height: Constants.MARGIN*16/172*56
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

















