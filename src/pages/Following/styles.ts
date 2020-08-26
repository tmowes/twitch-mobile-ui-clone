import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { Platform } from 'react-native';
import colors from '../../styles/colors';

const statusBarHeight =
  Platform.OS === 'android' ? Constants.statusBarHeight : 0;

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background: ${colors.primary};
  padding-top: ${statusBarHeight}px;
`;
export const Container = styled.View`
  padding-left: 16px;
  /* background: ${colors.gray}; */
`;
export const Main = styled.View`
  /* padding-bottom: 16px; */
`;
