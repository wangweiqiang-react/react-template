/**
 * Created by hao.cheng on 2017/5/7.
 */
import React from 'react'

class NotFound extends React.Component {
  state = {
    animated: ''
  }
  enter = () => {
    this.setState({ animated: 'hinge' })
  }
  render() {
    return (
      <div
        className="center"
        style={{ height: '100%', background: '#ececec', overflow: 'hidden' }}
      ></div>
    )
  }
}

export default NotFound
