import React from 'react'
import { Menu } from 'antd'
import { createFromIconfontCN } from '@ant-design/icons'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import MenuConfig from '@/router/config'
import '@/style/layout/index.scss'

const SubMenu = Menu.SubMenu
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1664879_6aoqbr3eil8.js'
})

class NavLeft extends React.Component {
  menuli = { paddingLeft: 0, padding: '0 16px' }
  rootSubmenuKeys = []
  state = {
    currentKey: '',
    collapsed: false,
    openKeys: []
  }
  // 菜单点击
  handleClick = ({ item, key }) => {
    if (key == this.state.currentKey) {
      return false
    }
    this.setState({
      currentKey: key
    })
  }
  componentWillMount() {
    const menuTreeNode = this.renderMenu(MenuConfig)
    this.setState({
      menuTreeNode,
      currentKey: MenuConfig[0].key
    })
  }

  componentDidUpdate() {
    // console.log(this.props.match, 'this.props.match')
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(
      key => this.state.openKeys.indexOf(key) === -1
    )
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys })
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : []
      })
    }
  }
  // 菜单渲染
  renderMenu = data => {
    return data.map(item => {
      this.rootSubmenuKeys.push(item.key)
      if (item.subs) {
        return (
          <SubMenu
            title={
              <span key={item.key}>
                <IconFont type={item.icon} />
                <span>{item.title}</span>
              </span>
            }
            key={item.key}
          >
            {this.renderMenu(item.subs)}
          </SubMenu>
        )
      }
      return (
        <Menu.Item title={item.title} key={item.key}>
          <NavLink to={item.key}>
            <IconFont type={item.icon} />
            <span>{item.title}</span>
          </NavLink>
        </Menu.Item>
      )
    })
  }
  homeHandleClick = () => {
    const { dispatch } = this.props
    this.setState({
      currentKey: ''
    })
  }
  render() {
    const { currentKey, openKeys } = this.state
    const { toggle } = this.props
    const path = this.props.location.pathname

    return (
      <div style={{ width: !toggle ? '140px' : '60px' }}>
        <Menu
          onClick={this.handleClick}
          theme="dark"
          defaultSelectedKeys={[currentKey]}
          mode="inline"
          openKeys={openKeys}
          onOpenChange={this.onOpenChange}
          inlineCollapsed={toggle}
          selectedKeys={[path]}
        >
          {this.state.menuTreeNode}
        </Menu>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    toggle: state.header.menuToggle
  }
}
export default connect(mapStateToProps)(withRouter(NavLeft))
