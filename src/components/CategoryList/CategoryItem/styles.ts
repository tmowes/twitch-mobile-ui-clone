import styled from 'styled-components/native';
import colors from '../../../styles/colors';

export const Container = styled.TouchableOpacity`
  /* background: orange; */
  margin-right: 8px;
`;
export const Image = styled.Image`
  width: 96px;
  height: 128px;
`;
export const Name = styled.Text`
  margin-top: 8px;
  max-width: 96px;
  color: ${colors.black};
  font-family: roboto_700;
  font-size: 13px;
`;
export const Status = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const RedCircles = styled.View`
  background: ${colors.red};
  width: 8px;
  height: 8px;
  border-radius: 4px;
`;
export const Info = styled.Text`
  color: ${colors.gray};
  font-family: roboto_500;
  margin-left: 4px;
  padding-bottom: 1px;
`;
