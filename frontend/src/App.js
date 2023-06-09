import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Container className='py-3'>
          <Routes>
            <Route path='/login/shipping' Component={ShippingScreen} />
            <Route path='/login' Component={LoginScreen} />
            <Route path='/payment' Component={PaymentScreen} />
            <Route path='/placeorder' Component={PlaceOrderScreen} />
            <Route path='/register' Component={RegisterScreen} />
            <Route path='/profile' Component={ProfileScreen} />
            <Route path='/product/:id' Component={ProductScreen} />
            <Route path='/cart/:id?' Component={CartScreen} />
            <Route path='/' Component={HomeScreen} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
