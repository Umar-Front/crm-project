import { styled } from "styled-components";
import search from '../../assets/icons/search.svg?react'

const Container = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  background-color:white;
  height:60px;
  padding:0 16px 0 24px;
`;

const InputWrapper = styled.div`
  display:flex;
  align-items:center;
  flex:1;
  max-width:500px;
  width:100%;
  width:fit-content;
  height:40px;
  border:1px solid var(--secondaryColor);
  border-radius:8px;
  padding:2px;
`;


const Input = styled.input`
  flex:1;
  max-width:500px;
  width:100%;
  outline:none;
  height:38px;
  border:0;
  border-radius:8px;
  size:14px;
  line-height:20px;
  color:#bbc3cd;
  &::placeholder{
    color:#bbc3cd;
    font-weight:300;
    size:14px;
    line-height:20px;
 }

`;

const SearchIcon = styled(search)`
 margin:0 16px;
`;



// right-navbar // time wrapper
const Section = styled.div`
 display:flex;
 align-items:center;
 gap:16px;

`;

const Timer = styled.div`
    color:${({ status }) =>
    status ? "var(--secondaryColor)" : "var(--primaryColor)"
  };
    font-weight:600;
    font-size:18px;
    line-height:32px;;
    /* padding:5px; */
 `;







export { Container, InputWrapper, Input, SearchIcon, Section, Timer }