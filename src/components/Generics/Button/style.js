import { styled } from "styled-components";
import filter from '../../../assets/icons/filter.svg?react'
import impr from '../../../assets/icons/import.svg?react'
import add from '../../../assets/icons/Vector.svg?react'
export const Icon = styled.div`

`;

Icon.Filter = styled(filter)`
 & path{
   fill: white;
 }
`;
Icon.Import = styled(impr)`

`;

Icon.Add = styled(add)`

`;

const Button = styled.button`
 display:flex;
 align-items:center;
 justify-content:center;
 background-color:white;
 border:1px solid  var(--primaryColor);
 border-radius:8px;
 padding: 10px 16px;
 cursor:pointer;
 color:#253e5f;
 font-size:14px;
  font-weight:500;
  line-height:20px;
  text-align:left;
  gap:8px;
  -webkit-user-select: none; /* Safari */
  user-select: none; Standard syntax
 &:active{
  transform: scale(0.98);
  opacity:0.8;

 }
`;

Button.Primary = styled(Button)`
border:0;
 background-color: #1890ff;
 color: white;
`;
Button.Filter = styled(Button)`
   border:0;
   background-color: var(--primaryColor);
   color:  white;
`;
Button.Import = styled(Button)`
 border:0;
 background-color:white;
`;
Button.Save = styled(Button)`
 background-color: red;
`;
Button.Delete = styled(Button)`
 border-color: #ffa39e;
 color: #f5222d;
`;
Button.Add = styled(Button)`
   border:0;
 background-color: ${({ bgcolor }) => bgcolor ? bgcolor : "#1890ff"};
 color:white;
`;


export { Button }