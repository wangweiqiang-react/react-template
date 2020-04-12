import React, { useEffect } from 'react'
import BreadcrumbCustom from '@/modules/twicePackage/BreadcrumbCustom'

function UIMap() {
  const titles = [
    {
      label: '首页',
      path: '/app/index'
    },
    {
      label: '地图',
      path: ''
    }
  ]
  useEffect(() => {})
  return (
    <div>
      <BreadcrumbCustom titles={titles} />
      <div>map</div>
    </div>
  )
}
export default UIMap
