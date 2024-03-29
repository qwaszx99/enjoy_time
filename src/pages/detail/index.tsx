import { APP } from 'config'
import React, { FC, useEffect } from 'react'
import { Platform, View } from 'react-native'
import WebView, { WebViewMessageEvent } from 'react-native-webview'
import { DetailScreenProps } from 'types'
import Orientation from 'react-native-orientation'

const injected = `["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "msfullscreenchange"].forEach(evenType => document.addEventListener(evenType, 
  function(e){  window.ReactNativeWebView.postMessage("fullscreenchange")}), false )`

let orientation: string
const Page: FC<DetailScreenProps> = ({ route }) => {

  const { link } = route.params

  console.log(link, 'link')

  useEffect(() => {
    if (Platform.OS === 'web') return
    orientation = Orientation.getInitialOrientation()
  }, [])

  const handleMessage = (data: WebViewMessageEvent) => {
    if (Platform.OS === 'web') return
    switch (data.nativeEvent.data) {
      case 'fullscreenchange':
        if (orientation === 'PORTRAIT') {
          orientation = 'LANDSCAPE'
          Orientation.lockToLandscape()
        } else {
          orientation = 'PORTRAIT'
          Orientation.lockToPortrait()
        }
        break;
      default:
        break;
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <WebView
        style={{ flex: 1 }}
        allowsFullscreenVideo={true}
        setSupportMultipleWindows={true}
        allowsInlineMediaPlayback={true}
        javaScriptEnabled={true}
        injectedJavaScript={injected}
        onMessage={handleMessage}
        source={{ uri: APP.baseUrl + link  }}
      />
    </View>
  )
}

export default Page