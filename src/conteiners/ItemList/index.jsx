import React from 'react'
import Item from './Item'
import './styles.scss'

const ItemListConteiner = () => {
  return (
    <div className='item-list-conteiner'>
      <Item title={"Titulo 1"}/>
      <Item title={"Titulo 2"}/>
      <Item title={"Titulo 3"}/>
      <Item title={"Titulo 4"}/>
      <Item title={"Titulo 5"}/>
    </div>
  )
}

export default ItemListConteiner