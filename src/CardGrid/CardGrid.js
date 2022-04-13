import React from 'react'
import style from './CardGrid.module.css'
import CardItem from '../CardItem/CardItem';

const CardGrid = ({ items }) => {
  return (
    <div className={style.cards}>
        {items.slice(0,9).map(item => (
          <CardItem 
           key={item.objectID} 
           item = {item}
          />
        )
      )}
      </div>
  )
}

export default CardGrid;