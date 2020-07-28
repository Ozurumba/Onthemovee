import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: 'white',
    borderRightColor: "#26ACD1",
    borderRightWidth: 1,
    
  },
  header: {
    backgroundColor: "#26ACD1",
    flex: 3,
    marginBottom: 20,
  },
  phoneNumber: {
    color: 'white',
    marginLeft: 20,
    fontSize: 12,
    marginTop: 20,
  },
  userIcon: {textAlign: 'center'},
  userImg: {
    padding: 20,
    marginLeft: 20,
    marginTop: 20,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    shadowRadius: 10,
    shadowColor: 'black',
    elevation: 20,
    width: '40%',
    position: 'relative',
    justifyContent: 'center',
    zIndex: 50,
    backgroundColor: 'white',
  },
  userName: {
    color: 'white',
    marginLeft: 20,
    marginTop: 5,
    fontWeight: 'bold',
  },
  content: {
    flex: 6,
    backgroundColor: 'white',
    marginRight: 20,
    marginLeft: 20,
  },
  itemText: {
    fontSize: 16,
    textAlignVertical: 'center',
  },
  itemRow: {
    flexDirection: 'row',
  },
  itemIcon: {
    textAlignVertical: 'center',
    marginRight: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});

export default styles;
