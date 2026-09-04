import { useState } from 'react'

import Newapp from './new app.jsx'
import products from './products'
import Item from "./Product."



function App(props) {
  var a = 10
  var b = 20

  return (
    <>
      <h1 style={{ color: 'blue', backgroundColor: 'lightgray' }}>
        Vite + React
      </h1>

      <h2>welcome</h2>

      <p>{a} + {b} = {a + b}</p>

      <Newapp />
      <Newapp />

      <Product name="Watch" price="126" description="A stylish watch" />
      <Product name="Shoes" price="199" description="Comfortable running shoes" />

      {products.map(p => (
        <Item name={p.name} price={p.price}
          description={p.description} brand={p.brand} />
      ))}
    </>
  )
}

export default App