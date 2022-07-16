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
  CarouselItem,
  Form,
  FormItem,
  Input,
  Message
} from 'element-ui'

Vue.prototype.$message = Message

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
  CarouselItem,
  Form,
  FormItem,
  Input
]

components.forEach((component) => {
  Vue.use(component)
})
