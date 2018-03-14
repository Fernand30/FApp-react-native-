import { StyleSheet } from 'react-native'
import { Constants, Colors } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.grayColor
  },
  dance: {
    width: Constants.WIDTH,
    height: Constants.MARGIN*44,
    paddingTop: Constants.MARGIN*7,
    paddingLeft: Constants.MARGIN*5
  },
  back: {
    width: Constants.MARGIN*5,
    height: Constants.MARGIN*5,
  },
  whiteText:{
    color: 'white',
    fontSize: Constants.FONT*23,
    textAlign: 'center',
    fontWeight: '700',
    marginTop: Constants.MARGIN*9
  },
  fourstars:{
    width:Constants.MARGIN*20,
    height: Constants.MARGIN*20/1780*288,
    alignSelf: 'center',
    marginTop: Constants.MARGIN*2
  },
  rowView:{
    flexDirection: 'row',
    backgroundColor: 'white',
    height: Constants.MARGIN*12,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Constants.MARGIN*4
  },
  text1:{
    fontSize: Constants.FONT*15,
  },
  modalText:{
    fontSize: Constants.FONT*21,
    textAlign: 'center'
  },
  modalRow:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Constants.MARGIN*5,
    marginTop: Constants.MARGIN*5
  },
  dropView:{
    flexDirection: 'row',
    width: Constants.MARGIN*20,
    height: Constants.MARGIN*12,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Constants.MARGIN*4,
    borderWidth: 1,
    borderColor: Colors.grayColor
  },
  group:{
    width: Constants.MARGIN*21,
    height: Constants.MARGIN*21/238*236,
    alignSelf:'center',
    marginTop: Constants.MARGIN*5,
    marginBottom: Constants.MARGIN*5
  },
  modalView:{
    width:Constants.MARGIN*90,
    height: Constants.MARGIN*121,
    backgroundColor:'white',
    borderRadius: Constants.MARGIN*2,
    marginTop: Constants.MARGIN*13,
    paddingVertical: Constants.MARGIN*5 
  },
  blueText: {
    fontSize: Constants.FONT*20,
    textAlign: 'center',
    color: Colors.buttonColor,
    fontWeight: '800'
  },
  blueText1: {
    fontSize: Constants.FONT*21,
    textAlign: 'center',
    color: Colors.buttonColor,
    marginRight: Constants.MARGIN*4,
    fontWeight: '800'
  },
  buttonView: {
    flexDirection: 'row',
    marginTop: Constants.MARGIN*7,
    justifyContent: 'flex-end',
    paddingRight: Constants.MARGIN*5
  },
  text2:{
    fontSize: Constants.FONT*15,
    marginLeft: Constants.MARGIN*3
  },
  sortdown:{
    width: Constants.MARGIN*3,
    height: Constants.MARGIN*3
  },
  renderView:{
    marginTop: Constants.MARGIN*3,
    marginHorizontal: Constants.MARGIN*2,
    backgroundColor: 'white',
    borderRadius: Constants.MARGIN*1.5,
    height: Constants.MARGIN*29,
    paddingTop: Constants.MARGIN*3
  },
  timeView:{
    width: Constants.MARGIN*19,
    height: Constants.MARGIN*6,
    borderRadius: Constants.MARGIN*3,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: 'black',
    marginLeft: Constants.MARGIN*3,
    marginTop: Constants.MARGIN*3
  },
  timeText:{
    fontSize: Constants.FONT*14
  },
  wrapView:{
    flexWrap: 'wrap',
    flexDirection: 'row'
  }
})

















