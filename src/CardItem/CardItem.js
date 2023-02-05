import React from 'react';
import style from './CardItem.module.css'

const CardItem = ({ item }) => {
    return (
        <div className={style.card}>
            <div className={style.card_inner}>
              <div className={style.card_front}>
                     <img className={style.art_image} src={item.primaryImage} alt='Not public' />
              </div>
              <div className={style.card_back}>
                <h3>{item.title}</h3>
                <ul>
                  <li>Dept: {item.department}</li>
                  <li>Country: {item.country !== "" ? item.country : "Unknown"}</li>
                  <li>Artist: {item.artistDisplayName !== "" ? item.artistDisplayName : "Unknown"}</li>
                  <li>Culture: {item.culture !== "" ? item.culture : "Unknown"}</li>
                  <li>Date: {item.objectDate}</li>
                </ul>
              </div>
            </div>
        </div>
    )
}

export default CardItem
