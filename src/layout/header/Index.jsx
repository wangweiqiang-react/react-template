import React from 'react'
import { Dropdown, Menu, Button } from 'antd'
import { changeMenuToggle } from '@/store/header/actionCreators'
import { connect } from 'react-redux'
import '@/style/layout/index.scss'
// import logo from '@/statics/logo.png'
class Headers extends React.Component {
  constructor(props) {
    super(props)
    this.handlerToggle = this.handlerToggle.bind(this)
  }
  handlerToggle() {
    const { toggleCollapsed, toggle } = this.props
    toggleCollapsed(!toggle)
  }
  drapMenu(userInfo) {
    return (
      <Menu>
        <Menu.Item>
          <div className="flex flex-center">{userInfo.deptName}</div>
        </Menu.Item>
        <Menu.Item>
          <Button type="link">退出登录</Button>
        </Menu.Item>
      </Menu>
    )
  }

  render() {
    const { userInfo, marqueeTip } = this.props
    return (
      <div className="header-info flex h100">
        <div className="logo h100">
          {/*<img
            src={logo}
            alt="logo"
            className="h100 w100 cur-point"
            onClick={this.handlerToggle}
          />
          */}
          <div
            className="h100 w100 cur-point flex flex-center"
            onClick={this.handlerToggle}
            style={{ color: '#fff' }}
          >
            react-logo
          </div>
        </div>
        <div className="middle flex flex-align-center flex-align-center">
          <marquee scrollamount="8">{marqueeTip}</marquee>
        </div>
        <div className="user-info flex flex-just-end">
          <div className="flex flex-center cur-point">
            <Dropdown
              overlay={this.drapMenu(userInfo)}
              placement="bottomCenter"
            >
              <div className="user-logo flex flex-center">
                {userInfo.username.slice(-1)}
              </div>
            </Dropdown>

            <div className="user-name">{userInfo.username}</div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    userInfo: state.header.userInfo,
    toggle: state.header.menuToggle,
    marqueeTip: state.header.marqueeTip
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleCollapsed(val = false) {
      const action = changeMenuToggle(val)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Headers)
