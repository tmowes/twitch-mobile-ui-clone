export interface ItemProps {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
}
