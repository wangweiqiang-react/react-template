import React from 'react'
import { Row, Col } from 'antd'
import Header from './header/Index'
// import Footer from './components/Footer'
import { connect } from 'react-redux'
import NavLeft from './menu/Index'
import '@/style/layout/index.scss'
class ReactLayout extends React.Component {
  render() {
    return (
      <div className="main-container">
        <div className="main-header">
          <Header />
        </div>
        <div className="main-content">
          <div className="nav-left">
            <NavLeft />
          </div>
          <div className="main">
            <div className="content">{this.props.children}</div>
          </div>
        </div>
      </div>
    )
  }
}
export default connect()(ReactLayout)
