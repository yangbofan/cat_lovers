import { Component, PropsWithChildren } from 'react'
import { View, Image, Text } from '@tarojs/components'
import './index.less'

export default class Index extends Component<PropsWithChildren> {
  render () {
    return (
      <View className='card_c'>
        <Image 
          className='card-photo'
          src='http://p0.meituan.net/wmadfe/f63d884e377405d6dfae28b30bd1fdcb506277.png' 
        />
        <View className='content'>
          <View className='description'>
              <Text>柠檬猫咪</Text>
              <Text>柠檬猫咪</Text>
          </View>
          <View>
            zou
          </View>
        </View>
      </View>
    )
  }
}
