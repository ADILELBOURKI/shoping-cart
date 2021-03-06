import React from 'react'
import { Link } from 'react-router-dom';
import Cart from '../cart/Cart';
import './products.style.css'
const  Products = ()=> {
     const SHOP = [
    {
      id: 1,
      name: "Brown Brim",
      imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
      price: 25
    },
    {
      id: 2,
      name: "Blue Beanie",
      imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
      price: 18
    },
    {
      id: 3,
      name: "Brown Cowboy",
      imageUrl: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
      price: 35
    },
    {
      id: 4,
      name: "Grey Brim",
      imageUrl: "https://i.ibb.co/RjBLWxB/grey-brim.png",
      price: 25
    },
    {
      id: 5,
      name: "Green Beanie",
      imageUrl: "https://i.ibb.co/YTjW3vF/green-beanie.png",
      price: 18
    },
    {
      id: 6,
      name: "Palm Tree Cap",
      imageUrl: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
      price: 14
    },
    {
      id: 7,
      name: "Red Beanie",
      imageUrl: "https://i.ibb.co/bLB646Z/red-beanie.png",
      price: 18
    },
    {
      id: 8,
      name: "Wolf Cap",
      imageUrl: "https://i.ibb.co/1f2nWMM/wolf-cap.png",
      price: 14
    },
    {
      id: 9,
      name: "Blue Snapback",
      imageUrl: "https://i.ibb.co/X2VJP2W/blue-snapback.png",
      price: 16
    },
    {
      id: 10,
      name: "Adidas NMD",
      imageUrl: "https://i.ibb.co/0s3pdnc/adidas-nmd.png",
      price: 220
    },
    {
      id: 11,
      name: "Adidas Yeezy",
      imageUrl: "https://i.ibb.co/dJbG1cT/yeezy.png",
      price: 280
    },
    {
      id: 12,
      name: "Black Converse",
      imageUrl: "https://i.ibb.co/bPmVXyP/black-converse.png",
      price: 110
    },
    {
      id: 13,
      name: "Nike White AirForce",
      imageUrl: "https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",
      price: 160
    },
    {
      id: 14,
      name: "Nike Red High Tops",
      imageUrl: "https://i.ibb.co/QcvzydB/nikes-red.png",
      price: 160
    },
    {
      id: 15,
      name: "Nike Brown High Tops",
      imageUrl: "https://i.ibb.co/fMTV342/nike-brown.png",
      price: 160
    },
    {
      id: 16,
      name: "Air Jordan Limited",
      imageUrl: "https://i.ibb.co/w4k6Ws9/nike-funky.png",
      price: 190
    },
    {
      id: 17,
      name: "Timberlands",
      imageUrl: "https://i.ibb.co/Mhh6wBg/timberlands.png",
      price: 200
    },
       {
        id: 30,
        name: 'Camo Down Vest',
        imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
        price: 325
      },
      {
        id: 31,
        name: 'Floral T-shirt',
        imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
        price: 20
      },
      {
        id: 32,
        name: 'Black & White Longsleeve',
        imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
        price: 25
      },
      {
        id: 33,
        name: 'Pink T-shirt',
        imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
        price: 25
      },
      {
        id: 34,
        name: 'Jean Long Sleeve',
        imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
        price: 40
      },
      
      {
        id: 35,
        name: 'Burgundy T-shirt',
        imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
        price: 25
      }
  ];
  const [products] = React.useState(SHOP)
  const [cart,setCart]=React.useState([])

/*here I add products to cart */
  const addToCart =(product)=>{
      console.log(product)
    //   setCart([...cart,product])
    setCart([...cart,product])
    console.log(cart)
    console.log(totalPrice)
        // setPrices([...prices,product.prices])
  }
    let totalPrice = cart.length==0? 0 : cart.reduce((acc,cur)=>{return acc+Number(cur.price)},0)

    return (
        
        <div>        
            <div className="header">
    <Link className ='link' to='/cart'><div className="header__cart" > cart ({cart.length})</div></Link> 
            <div className="headr__products">products</div>
    <div className="headr__products">Total : {totalPrice}</div>

            </div>
            <div className="products">
            {products.map(product=>{return <div className="products__item" key={product.id}>
                <img src={product.imageUrl}/>
                <div className="item__informations">

                <h1>{product.name}</h1>
            <span>{product.price}$</span>
            </div>
              <button onClick={() => { addToCart(product) }}>Add to cart</button>
            </div>
            })}
          <div>{cart.map(cart => { return <Cart id={cart.id} name={cart.name} price={cart.price} total={totalPrice}/>})}</div>
        </div>
        
        </div>

    )
}

export default Products
