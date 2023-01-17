import { Component, PropsWithChildren } from 'react'
import { View, Text,Image } from '@tarojs/components'
import './index.less'

export default class Index extends Component<PropsWithChildren> {
  render () {
    return (
      <View className='bar-header'>
        <View className='location'>
          <View className='location-logoand'>
            <Text className='location-logo-text'>位置</Text>
            <Image 
              className='location-logo-image' 
              src='http://p0.meituan.net/wmadfe/529563a49b888970bb34b7b68a7490d46200.png'
            />
          </View>
          <Text className='location-text'>北京</Text>
        </View> 
        <Image 
            className='profile-image' 
            src='http://p0.meituan.net/wmadfe/df582d5ea6d7ba4ded44cf9aea72f1a158625.jpg'
        />
      </View>
    )
  }
}
