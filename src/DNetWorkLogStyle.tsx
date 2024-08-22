import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapContent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'white',
  },
  headerWrapper: {
    height: 60,
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    color: 'black',
  },
  content: {
    flex: 1,
  },
  iconClose: {
    width: 34,
    height: 34,
  },
  btnWrapper: {
    padding: 10,
    width: 70,
  },
});
