import { border } from "@mui/system";
import { styled } from "styled-components";

const getValue = (value) => {
  switch (value) {
    case 'string': return value;
    case 'number': return `${value}px`;
    default: return "";
  }
}

const Container = styled.div`
  display:flex;
  flex:1;
  border:1px solid var(--secondaryColor);
  align-items:center;
  overflow:hidden;
  border-radius: ${({ borderRadius }) => typeof borderRadius === 'string' ? borderRadius : `${borderRadius}px`};
  width: ${({ width }) => getValue(width)};
  height:${({ height }) => height && (typeof height === 'string' ? height : `${height}px`)};
  max-width: ${({ width }) => width && (typeof width === 'string' ? width : `${width}px`)};

`;


const Input = styled.input`
outline: none;
flex:1;
border: 0;
width:${({ width }) => width && (typeof width === "string" ? width : `${width}px`)};
height:${({ height }) => getValue(height)};
max-width:${({ width }) => getValue(width)};
font-size:${({ fontSize }) => getValue(fontSize)};
font-weight:${({ fontWeight }) => getValue(fontWeight)};
line-height:${({ lineHeight }) => getValue(lineHeight)};
color:${({ color }) => color ? color : '#bbc3cd'};
border-radius: ${({ borderRadius }) => getValue(borderRadius)};

&::placeholder{
  font-size:${({ placeholderStyle }) => getValue(placeholderStyle?.fontSize)};
  font-weight:${({ placeholderStyle }) => getValue(placeholderStyle?.fontWeight)};
  line-height:${({ placeholderStyle }) => getValue(placeholderStyle?.lineHeight)};
  color:${({ placeholderStyle }) => placeholderStyle?.color ? placeholderStyle.color : '#bbc3cd'};
}
`;


export { Container, Input }