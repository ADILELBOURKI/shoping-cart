import React from 'react'

const Cart = ({id,name,price,total})=>{
    return <div key = {id}>
        
       <h1>{price}</h1> 
        <h2>{name}</h2> 
        
        <h3>total : {total}  </h3>  
</div>
}

export default Cart; 