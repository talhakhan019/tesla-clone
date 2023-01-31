import React from 'react'
import styled from 'styled-components'
import Section from './Section'
function Home() {
  return (
    <Container>
      <Section title='Model S' Description = 'Order Online for Touchless Delivery' img = 'model-s.jpg' leftBtn = 'Custom Order' rightBtn = 'Existing Inventory' />
      <Section title='Model Y' Description = 'Order Online for Touchless Delivery' img = 'model-y.jpg' leftBtn = 'Custom Order' rightBtn = 'Existing Inventory' />
      <Section title='Model 3' Description = 'Order Online for Touchless Delivery' img = 'model-3.jpg' leftBtn = 'Custom Order' rightBtn = 'Existing Inventory' />
      <Section title='Model X' Description = 'Order Online for Touchless Delivery' img = 'model-x.jpg' leftBtn = 'Custom Order' rightBtn = 'Existing Inventory' />
      <Section title='Lower Cost Solar Panel in America' Description = 'Money-back guarantee' img = 'solar-panel.jpg' leftBtn = 'Order Now' rightBtn = 'Learn More' />
      <Section title='Accessories' Description = '' img = 'Accessories.jpg' leftBtn = 'Shop Now' rightBtn = '' />
    </Container>
    
  )
}

export default Home
const Container = styled .div`
  height: 100vh;
`
