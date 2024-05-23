import styled from "styled-components";
import getValue from "../../../hooks/style";

const Container = styled.div`
  display: flex;
  align-items: inherit;
  font-family: Montserrat;
  font-weight: 500;
  line-height: 24px;
  color: var(--primaryColor);
  font-size: ${({ size }) => (size ? getValue(size) : "16px")};
  color: ${({ color }) => (color ? color : "var(--primaryColor)")};
  margin-top: ${({ mt }) => getValue(mt)};
  margin-bottom: ${({ mb }) => getValue(mb)};
  margin-right: ${({ mr }) => getValue(mr)};
  margin-left: ${({ ml }) => getValue(ml)};
  padding-top: ${({ pt }) => getValue(pt)};
  padding-bottom: ${({ pb }) => getValue(pb)};
  padding-right: ${({ br }) => getValue(br)};
  padding-left: ${({ bl }) => getValue(bl)};
`;


const Counter = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  margin-left:8px;
  font-size:12px;
  font-weight:500;
  line-height:12px;
  width: 28px;
  height:28px;
  background-color:#1890ff;
  border-radius:50%;
  color:white;


`;




export { Container, Counter };