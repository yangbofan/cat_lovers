import { Component, PropsWithChildren } from 'react'
import { View } from '@tarojs/components'
import StatusBarHeight from '../../components/statusBarHeight'
import Headers from '../../components/header'
import Cards from '../../components/card'
import './index.less'

export default class Index extends Component<PropsWithChildren> {
  componentDidMount () { }
  componentDidShow () { }
  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <StatusBarHeight />
        <Headers />
        <Cards />
      </View>
    )
  }
}
