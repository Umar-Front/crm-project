import { Container, Counter } from "./stle";

export const Subtitle = (props) => {
  return <Container {...props}>
    {props?.children} {props?.count && <Counter>{props.count}</Counter>}  </Container>;
};

export default Subtitle;