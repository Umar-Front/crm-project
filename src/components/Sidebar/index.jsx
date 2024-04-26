import React from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Arrow, Body, ChildWrapper, Container, Logo, LogoOut, Menu, MenuItem, Side, Wrapper } from './style'
import Navbar from '../Navbar'
import Profile from './profile'
import sidebar from '../../utils/sidebar'

export const Sidebar = () => {

  const [open, setopen] = useState(['bosh'])

  const onClickParent = (id) => {
    if (open.includes(id)) {
      console.log(open, 'if');

      let data = open.filter((val) => val !== id);
      setopen(data)
    } else {
      setopen([...open, id])
    }
    console.log(open);
  }

  const navigate = useNavigate()
  const onClickLogo = () => {
    navigate('/')
  }



  return (
    <Container>
      <Side>
        <Logo onClick={onClickLogo}>
          Webbrain Crm
        </Logo>
        <Profile />
        <Menu>
          {sidebar.map((parent) => {
            const active = open.includes(parent.id)
            const { icon: Icon } = parent
            return (
              <>
                <MenuItem key={parent.id} onClick={() => onClickParent(parent.id)} >
                  <MenuItem.Title >
                    <Icon className="icon" /> {parent.title}
                  </MenuItem.Title >
                  {parent?.children?.length && <Arrow active={active} />}
                </MenuItem>
                <ChildWrapper active={active}>
                  {parent?.children?.map((child) => {
                    return (
                      <MenuItem key={child.id}>
                        <MenuItem.Title > {child.title} </MenuItem.Title >
                      </MenuItem>
                    )
                  })}
                </ChildWrapper>
              </>



            )
          })}
        </Menu>
        <LogoOut>Chiqish</LogoOut>
      </Side>
      <Body>

        <Navbar />
        <Wrapper>
          <Outlet />
        </Wrapper>
      </Body>
    </Container>
  )
}
