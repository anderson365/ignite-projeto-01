import style from './Header.module.css'

import logoSvg from '../assets/logo-beer-barbecue.svg'

export function Header(){

  return (
    <header className={style.header}>
      <img src={logoSvg} alt='Logo BB - Beer & Barbecue'></img>
      <h1>Beer & Barbecue</h1>
    </header>
  )


} 