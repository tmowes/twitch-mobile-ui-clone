import styled from 'styled-components/native';
import colors from '../../../styles/colors';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  flex: 1;
  margin-bottom: 24px;
  margin-right: 24px;
  /* background: orange; */
`;
export const Thumbnail = styled.Image`
  width: 120px;
  height: 60px;
`;
export const Column = styled.View`
  flex: 1;
  margin-left: 12px;
`;
export const Row = styled.View`
  justify-content: space-between;
  height: 60px;
`;
export const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Avatar = styled.View`
  background: ${colors.tag};
  width: 20px;
  height: 20px;
  border-radius: 10px;
`;
export const UserName = styled.Text`
  color: ${colors.black};
  font-family: roboto_500;
  margin-left: 6px;
`;
export const Description = styled.Text`
  color: ${colors.black};
  /* font-family: roboto_500; */
`;
export const Category = styled.Text`
  color: ${colors.gray};
  font-family: roboto_500;
`;
export const TagRow = styled.View`
  margin-top: 8px;
  flex-direction: row;
`;
export const TagView = styled.View`
  background: ${colors.tag};
  padding: 2px 8px;
  border-radius: 10px;
  margin-right: 6px;
`;
export const TagText = styled.Text`
  color: ${colors.black};
  font-family: roboto_500;
  font-size: 14px;
`;
