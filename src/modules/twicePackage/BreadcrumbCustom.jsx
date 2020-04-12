/**
 * 面包屑>>>接受数据格式titles: [{ path: '', label: ''}].
 */
import React, { PureComponent } from 'react'
import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class BreadcrumbCustom extends PureComponent {
  getItems(data) {
    return data.map(item => {
      return (
        <Breadcrumb.Item>
          <Link to={item.path}>{item.label}</Link>
        </Breadcrumb.Item>
      )
    })
  }
  render() {
    const { titles } = this.props
    return (
      <div>
        <Breadcrumb style={{ margin: '6px 0' }}>
          {this.getItems(titles)}
        </Breadcrumb>
      </div>
    )
  }
}
BreadcrumbCustom.propTypes = {
  titles: PropTypes.array.isRequired
}

export default BreadcrumbCustom
