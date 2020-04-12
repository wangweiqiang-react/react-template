import React, { Component } from 'react'
import BreadcrumbCustom from '@/modules/twicePackage/BreadcrumbCustom'
import '@/style/app/index.scss'
class Home extends Component {
  constructor(props) {
    super(props)
    this.titles = [
      {
        label: '首页',
        path: '/app/index'
      }
    ]
  }
  render() {
    return (
      <div className="app-index">
        <BreadcrumbCustom titles={this.titles} />
        <div className="app-content"></div>
      </div>
    )
  }
}
export default Home
