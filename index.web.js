
import { AppRegistry } from 'react-native'
import App from './App'
import { name as appName } from './app.json'

// Generate required css
import iconFont from './src/assets/fonts/iconmoon.ttf'
const iconFontStyles = `@font-face {
  src: url(${iconFont});
  font-family: iconmoon;
}`

// Create stylesheet
const style = document.createElement('style')
if (style.styleSheet) {
  style.styleSheet.cssText = iconFontStyles
} else {
  style.appendChild(document.createTextNode(iconFontStyles))
}

// Inject stylesheet
document.head.appendChild(style)

AppRegistry.registerComponent(appName, () => App)

AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag: document.getElementById('root')
})