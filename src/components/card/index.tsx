import { Component, PropsWithChildren } from 'react'
import { View, Image, Text } from '@tarojs/components'
import { SYMBOLIZE_LIST } from '../../pages/consts'
import './index.less'

export default class Index extends Component<PropsWithChildren> {
  render () {
    return (
      <View className='card_c'>
        <Image 
          className='card-photo'
          src='https://s1.ax1x.com/2023/01/29/pSaXNrQ.jpg' 
        />
        <View className='content'>
          <View className='description'>
              <Text className='dep-title'>柠檬猫咪</Text>
              <Text className='dep-subtitle'>柠檬猫咪</Text>
              <View className='iconlist'>
                {
                    SYMBOLIZE_LIST.map((r)=>(
                      <View className='icon-box-list'>
                        <View className='icon-list'>
                          <Image 
                            className='icon-list-image' 
                            src={r.icon} 
                          />
                        </View>
                        <Text className='price-text'>25</Text>
                        { r.unit && <Text className='unit'>{r.unit}</Text> }
                      </View>
                    ))
                }
              </View>
          </View>
          <View className='crad-join-view'>
            <Image 
              className='card-join-icon'
              src='http://p0.meituan.net/wmadfe/dc2af9975a3f434b9563e01cbb061f792091.png'
            />
          </View>
        </View>
      </View>
    )
  }
}
