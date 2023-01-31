import { Component, PropsWithChildren } from 'react'
import { View, Text,Image } from '@tarojs/components'
import './index.less'

export default class Index extends Component<PropsWithChildren> {
  render () {
    return (
      <View className='calendar-c'>
          <View className='calendar-title'>
            <Image className='calendar-title-icon' src='http://p1.meituan.net/wmadfe/b85b47f6a9769fb45b4ef190330dd71b3162.png' />
            <Text className='calendar-title-text'>我的日程</Text>
          </View>
      </View>
    )
  }
}
