import { styled } from "styled-components";
import arrow from "../../assets/icons/rightArrow.svg?react"

const Arrow = styled(arrow)`
  display:flex;
  margin-left:auto;
  transform:${({ active }) => active && 'rotate(90deg)'};
  transition-all: 0.1s;
`


const Container = styled.div`
 display:flex;
`

const Side = styled.div`
   position:relative;
   display:flex;
   flex-direction:column;
   max-width:280px;
   min-width:280px;
   height:100vh;
   background-color: white;
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

`;


const Logo = styled.div`
  font-weight:600;
  font-size:20px;
  line-height:28px;
  color: rgba(24,144,255,1);
  padding:16px 24px;
  border-bottom:1px solid rgba(248,250,252,1);
  cursor:pointer;
  background-color:white;
`;

const LogoOut = styled(Logo)`
  display:flex;
  position:sticky;
  margin-top:auto;
  font-weight:600;
  font-size:20px;
  line-height:28px;
  color: rgba(24,144,255,1);
  padding:16px 24px;
  border-bottom:0;
  border-top:1px solid rgba(248,250,252,1);
  cursor:pointer;
  background-color:white;

`;


const ProfileContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  margin:23px 24px 32px 24px;

`;

ProfileContainer.Image = styled.img`
 width:48px;
 height:48px;
 margin-right:16px;
 border-radius:50%;
`;

ProfileContainer.Name = styled.div`
  width:168px;
  font-weight:600;
  font-size:12px;
  line-height:20px;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
  color: var(--primaryColor)
`;

ProfileContainer.Email = styled.div`
  width:168px;
  font-weight:500;
  font-size:12px;
  line-height:20px;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
  color: var(--secondaryColor)

`;


/* Menu */

const Menu = styled.div`
 display:flex;
 flex-direction:column;
 /* padding: 0 24px; */

`;


const MenuItem = styled.div`
   display:flex;
   align-items:center;
   &:hover{
    cursor:pointer;
    background-color: rgba(248,250,252,1);

  }
`;

MenuItem.Title = styled.div`
  display:flex;
  align-items:center;
  flex:1;
  font-weight:500;
  font-size:14px;
  line-height:20px;
  padding:12px 0 12px 24px;
  &:hover{
    color:var(--activeColor);
    & path {
      fill:var(--activeColor);
    }
  }

  .icon{
    margin-right:16px;

  }

`;

const ChildWrapper = styled.div`
  margin-left:35px;
  height: ${({ active }) => active ? "auto" : "0px"};
  overflow:hidden;
`




export { Container, Side, Body, Wrapper, Logo, LogoOut, ProfileContainer, Menu, MenuItem, Arrow, ChildWrapper }