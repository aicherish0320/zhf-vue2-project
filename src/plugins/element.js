import Vue from 'vue'
import {
  Button,
  Container,
  Header,
  Main,
  Footer,
  Row,
  Col,
  Menu,
  MenuItem,
  Submenu
} from 'element-ui'

const components = [
  Button,
  Container,
  Header,
  Main,
  Footer,
  Row,
  Col,
  Menu,
  MenuItem,
  Submenu
]

components.forEach((component) => {
  Vue.use(component)
})
