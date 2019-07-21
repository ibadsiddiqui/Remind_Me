import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Layout = {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
  table: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  background: {
    position: 'absolute',
    width: width, height: height
  },
  tableRow: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row'
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  tableCell: {
    flex: 1,
    alignSelf: 'stretch',
  },
  tableCellCentered: () => {
    return {
      ...Layout.centered,
      ...Layout.tableCell
    }
  }
};

export default Layout