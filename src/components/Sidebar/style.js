import { styled } from "styled-components";

const Container = styled.div`
 display:flex;
`

const Side = styled.div`

   max-width:280px;
   min-width:280px;
   height:100vh;
   border:2px solid red;
   background-color:white;
   overflow:hidden;
   overflow-y:scroll;
   &::-webkit-scrollbar{
    width:0;
   }
  `
const Body = styled.div`
   flex:1;

  `


const Wrapper = styled.div`
  background-color:white;
  border:2px solid blue;
  margin:16px;

`

export { Container, Side, Body, Wrapper }