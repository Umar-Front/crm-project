import { styled } from "styled-components";
import arrow from "../../assets/icons/rightArrow.svg?react"
export const Wrapper = styled.div`
  padding:24px;
  border: 1px solid #f0f0f0;
  border-radius:8px;
`;

export const Section = styled.div`
  display:flex;
  flex-direction:column;
`;


export const ArrowIcon = styled(arrow)`
  transform: ${({ left }) => left && "rotate(180deg)"};
  cursor: pointer;
  &:active {
    & path {
      fill: var(--primaryColor);
    }
  }
`;

export const Fragment = styled.div`
  display:flex;
  justify-content:space-between;
  margin: ${({ mt = 0, mb = 0, ml = 0, mr = 0 }) => `${mt}px ${mb}px ${ml}px ${mr}px`}
`;


export const DateCard = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  width:48px;
  height:72px;
  border-radius:24px;
  border: 1px solid #f0f0f0;
  background-color: ${({ active }) => active ? 'var(--activeColor)' : 'white'};
  cursor:pointer;
`;