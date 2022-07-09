import React from 'react'

import mealsImage from '../../assets/meals.jpg'
import './header.css'
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
  return (
    <React.Fragment>
        <header className='header'>
          <h1>ReactMeals</h1>
         <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className='main-image'>
          <img src={mealsImage} alt="A table full of delicious food" />
        </div>
    </React.Fragment>
  )
}

export default Header