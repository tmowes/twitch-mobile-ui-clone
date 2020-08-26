import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  /* padding-top: 16px; */
  /* padding-right: 16px; */
  padding: 16px 16px 8px 0;
  /* background: orange; */
`;
export const Avatar = styled.View`
  background: ${colors.tag};
  width: 32px;
  height: 32px;
  border-radius: 16px;
`;
export const Status = styled.View`
  background: ${colors.green};
  width: 12px;
  height: 12px;
  border-radius: 6px;
  border: 2px solid ${colors.primary};
  position: absolute;
  bottom: 0;
  right: 0;
`;
export const RightSide = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Button = styled.TouchableOpacity`
  margin-left: 16px;
`;
