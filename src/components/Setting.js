import React from 'react'
import styled from 'styled-components'
import { NavLink, Route } from 'react-router-dom'

const NavWrapper = styled.nav`
  height: 50px;
  background-color: #44e4ff;
  border: 1px solid transparent;

  > ul {
    list-style: none;
    display: flex;

    > li ~ li {
      margin-left: 20px;
    }
  }

  a {
    text-decoration: none;

    &:visited {
      color: inherit;
    }
  }
`

export const Navbar = () => (
  <NavWrapper>
    <ul>
      <li>
        <NavLink to="/settings/">Settings</NavLink>
      </li>
      <li>
        <NavLink to="/settings/profile/">Profile</NavLink>
      </li>
      <li>
        <NavLink to="/settings/company/">Company</NavLink>
      </li>
    </ul>
  </NavWrapper>
)

export const Settings = () => (
  <div>
    <h1>Settings</h1>
    <Navbar />
    <Route path="/settings/" exact render={() => <h2>Main settings page</h2>} />
    <Route path="/settings/profile/" render={() => <h2>profile</h2>} />
    <Route path="/settings/company/" render={() => <h2>company</h2>} />
  </div>
)
