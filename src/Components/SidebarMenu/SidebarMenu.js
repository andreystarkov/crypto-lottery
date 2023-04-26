import React, { Component } from 'react'

import { stack as Menu } from 'react-burger-menu'
import { withRouter } from 'react-router-dom'

import { MenuItem, Cross, Burger, menuStyles } from './SidebarMenuStyles'

import './SidebarMenu.css'

const SidebarMenuComponent = withRouter(props => <SidebarMenu {...props}/>)
class SidebarMenu extends Component {
  followLink = (href) => {
    const { history, closeSidebar } = this.props
    document.body.scrollTop = document.documentElement.scrollTop = 0
    history.push(href)
    closeSidebar()
  }

  getMenuStyles = () => {
    const { routes, location } = this.props
    const { pathname } = location
    const currentRoute = routes.find(f => f.path === pathname)
    const { menu } = currentRoute

    if (menu && menu.visible) {
      const { topOffset } = menu
      return {
        ...menuStyles,
        ...{
          bmBurgerButton: {
            ...menuStyles.bmBurgerButton,
            top: `${topOffset}rem`,
            zIndex: 2000
          },
          bmMenu: {
            ...menuStyles.bmMenu,
            marginTop: `${topOffset + 2.7}rem`
          }
        }
      }
    }
    return menuStyles
  }

  onStateChange = ({ isOpen }) => {
    const { closeSidebar } = this.props
    if (!isOpen) closeSidebar()
  }

  renderItem = (route, key) => {
    const { location, isOpen } = this.props
    const { name, path } = route
    const { pathname } = location
    return (
      <MenuItem
        active={path === pathname}
        isOpen={isOpen}
        onClick={() => this.followLink(path)}
        key={`menu:${key}`}>
        {name}
      </MenuItem>
    )
  }

  renderItems = () => {
    const { routes, isAuth } = this.props
    let data = routes.filter(f => !f.hidden)
    if (!isAuth) data = data.filter(f => !f.private)
    return data.map(this.renderItem)
  }

  openModal = (modalType, params) => {
    const { closeSidebar, openModal } = this.props
    closeSidebar()
    openModal(modalType, params)
  }

  logout = () => {
    const { closeSidebar, logout, history } = this.props
    closeSidebar()
    logout()
    history.push('/')
  }

  render () {
    const { isOpen, isAuth } = this.props
    return (
      <Menu
        styles={menuStyles}
        onStateChange={this.onStateChange}
        pageWrapId={'content-container'}
        outerContainerId={'top-container'}
        isOpen={isOpen}
        customCrossIcon={<Cross />}
        customBurgerIcon={<Burger isOpen={isOpen} />}
        {...this.props}>
        {this.renderItems()}
        {!isAuth ? <MenuItem onClick={() => this.openModal('signIn')}>Sign In</MenuItem> : null}
        {!isAuth ? <MenuItem onClick={() => this.openModal('signUp')}>Sign Up</MenuItem> : null}
        {isAuth ? <MenuItem onClick={() => this.logout()}>Logout</MenuItem> : null}
      </Menu>
    )
  }
}

export default SidebarMenuComponent
