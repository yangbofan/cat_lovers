import { Component, PropsWithChildren } from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.less'

export default class Index extends Component<PropsWithChildren> {
  render () {
    const windowInfo = Taro.getWindowInfo() 
    return (
      <View 
        style={{
            height: `${(windowInfo.statusBarHeight) || 0}px` 
        }}
      />
    )
  }
}
