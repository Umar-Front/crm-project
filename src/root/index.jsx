import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Sidebar } from '../components/Sidebar'
import sidebar from '../utils/sidebar'
import { Container } from './style'

const Root = () => {
  return (
    <Container>
      <Routes>
        <Route element={<Sidebar />}>
          {sidebar.map((parent) => {
            const ElementParent = parent.element;
            // console.log(parent.path, 'parent');
            if (parent?.children) {
              return parent.children.map((child) => {
                const ElementChild = child.element;
                console.log(child.path, 'child');
                return (
                  <Route
                    key={child.id}
                    path={child.path}
                    element={<ElementChild />} />
                );

              });

            } else
              return (
                <Route
                  key={parent.id}
                  path={parent.path}
                  element={<ElementParent />} />
              )
          })};
        </Route>
        <Route path='/' element={<Navigate to={'/analitika'} />} />
        <Route path='*' element={<h2>Not Found</h2>} />;
      </Routes>
    </Container>

  )
}


export default Root
