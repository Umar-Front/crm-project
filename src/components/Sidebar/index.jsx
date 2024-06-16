import React from 'react'
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Arrow, Body, ChildWrapper, Container, ExitIcon, Logo, LogoOut, Menu, MenuItem, Side, Wrapper } from './style'
import Navbar from '../Navbar'
import Profile from './profile'
import sidebar from '../../utils/sidebar'
import { BreadCrumb } from '../Generics/BreadCrumb'

export const Sidebar = () => {

  const [open, setopen] = useState([]);
  // const [active, setactive] = useState(['']);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = JSON.parse(localStorage.getItem('open'));
    setopen(path || [])
  }, [])
  useEffect(() => {
  }, [location])

  const onClickLogo = () => {
    navigate(path)
  }

  const onLogout = () => {
    navigate('/login')
  }


  const onClickParent = ({ id, path, children, title }, event) => {
    event.preventDefault();
    if (open?.includes(id)) {
      let data = open.filter((val) => val !== id);
      localStorage.setItem('open', JSON.stringify(data))
      setopen(data)
    } else {
      localStorage.setItem('open', JSON.stringify([...open, id]))
      setopen([...open, id])
    }

    if (!children) {

      navigate(path, { state: { parent: title } });
    }
  }

  const onClickChild = (parent, child, path, e) => {
    e.preventDefault();
    navigate(path, { state: { parent, child } });
  };
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
            const activePath = location.pathname.includes(parent.path)

            return !parent.hidden ? (
              <React.Fragment key={parent.id}>
                <MenuItem

                  onClick={(event) => onClickParent(parent, event)}
                  active={activePath.toString()}

                >
                  <MenuItem.Title active={activePath.toString()}>
                    <Icon className="icon" /> {parent.title}
                  </MenuItem.Title >
                  {parent?.children?.length && <Arrow active={active.toString()} />}
                </MenuItem>
                <ChildWrapper active={active.toString()}>
                  {parent?.children?.map((child) => {
                    return (
                      <MenuItem
                        key={child.id}
                        to={child.path}
                        onClick={(e) => onClickChild(parent.title, child.title, child.path, e)}
                        active={(location.pathname === child.path).toString()}
                      >
                        <MenuItem.Title > {child.title} </MenuItem.Title >
                      </MenuItem>
                    )
                  })}
                </ChildWrapper>
              </React.Fragment>
            ) : null
          })}
        </Menu>
        <LogoOut onClick={onLogout}> <ExitIcon />
          Chiqish
        </LogoOut>
      </Side>
      <Body>
        <Navbar />
        <Wrapper>
          <BreadCrumb />
          <Outlet />
        </Wrapper>
      </Body>
    </Container>
  )
}
