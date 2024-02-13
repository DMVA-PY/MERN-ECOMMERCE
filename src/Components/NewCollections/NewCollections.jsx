import React from 'react'
import '/home/vare/Documents/projects2/e-commerce/frontend/src/Components/NewCollections/NewCollections.css'
import new_collections from '/home/vare/Documents/projects2/e-commerce/frontend/src/Components/Assets/new_collections.js'
import Item from '../Item/Item'

const NewCollections = () => {
  return (
    <div className='new-collection'>
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className='collection'>
            {new_collections.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default NewCollections