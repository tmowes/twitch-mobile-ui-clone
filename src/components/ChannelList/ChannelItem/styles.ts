import styled from 'styled-components/native';
import colors from '../../../styles/colors';

export const Container = styled.TouchableOpacity`
  /* background: orange; */
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 16px;
  margin-bottom: 24px;
`;
export const LeftSide = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Avatar = styled.View`
  background: ${colors.tag};
  width: 48px;
  height: 48px;
  border-radius: 24px;
`;
export const Column = styled.View`
  padding-left: 12px;
`;
export const UserName = styled.Text`
  color: ${colors.black};
  font-family: roboto_500;
  font-size: 16px;
`;
export const Info = styled.Text`
  padding-top: 1px;
  color: ${colors.gray};
  font-size: 12px;
`;
export const RightSide = styled.View``;
export const WhiteCircle = styled.View`
  background: ${colors.black};
  width: 12px;
  height: 12px;
  border-radius: 6px;
  opacity: 0.85;
`;
