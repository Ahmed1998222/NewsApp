import theme, { COLORS } from '@assets/theme/theme';
import { scaleHeight, scaleWidth } from '@utils/scaling';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  layout: {
    paddingHorizontal: scaleWidth(16),
  },

  searchCont: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    paddingHorizontal: scaleWidth(5),
    borderRadius: 10,
    marginTop: scaleHeight(55),
    marginBottom: scaleHeight(20),
  },
  searchInput: {
    flex: 1,
    marginStart: scaleWidth(10),
    paddingVertical: scaleHeight(12),
  },
    
  errorCont: {
    flex: 1,
    justifyContent: 'center',
  },
    
 });
