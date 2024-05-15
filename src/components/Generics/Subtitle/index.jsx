import { Container } from "./stle";

export const Subtitle = (props) => {
  return <Container {...props}>{props?.children}</Container>;
};

export default Subtitle;