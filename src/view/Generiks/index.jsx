import { useLocation } from "react-router-dom";
// import { BreadCrumb } from "../../components/Generics/BreadCrumb";

import Container from "./stle";

const Generics = () => {
  const location = useLocation();
  return (
    <Container>
      {/* <BreadCrumb /> */}
      <h1>{location.pathname} page</h1>
      <h1>Coming soon...</h1>
    </Container>
  );
};

export default Generics;