import Subtitle from "../Generics/Subtitle"
import { ArrowIcon, Fragment, Wrapper } from "./moliyaStyle"


const Moliya = () => {
  return (
    <Wrapper>
      <Fragment>
        <ArrowIcon left />
        <Subtitle>May 13</Subtitle>
        <ArrowIcon />
      </Fragment>
    </Wrapper>
  )
}

export default Moliya