import { styled } from "styled-components";

const Wrapper = styled.div`
  padding:24px;
  border: 1px solid #f0f0f0;
  border-radius:8px;
`;

const Info = styled.div`
  display:flex;
&:hover{
  background:#f0f5ff;
}
`;

const Section = styled.div`
  display:flex;
  align-items:center;
  flex:1;
  justify-content: ${({ end }) => end && "flex-end"};
  padding:12px;
  background-color:inherit;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
`;


Info.Img = styled.img`
  width:40px;
  height:40px;
  margin-right:24px;
  border-radius:50%;
`;

Info.SMS = styled.div`
  display:flex;
  align-items:center;
  flex:1;
  max-width:230px;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
  /* font-family:Monserat; */
  font-size:14px;
  font-weight:500;
  line-height:20px;
  color: var(--primaryColor);
`


export {
  Wrapper,
  Info,
  Section,
}