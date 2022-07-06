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
  Submenu,
  Carousel,
  CarouselItem
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
  Submenu,
  Carousel,
  CarouselItem
]

components.forEach((component) => {
  Vue.use(component)
})
