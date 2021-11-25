import React, { useState, useEffect } from 'react'
import { useFetch } from './2-useFetch'

const url = 'https://course-api.com/javascript-store-products'

const Example = () => {
  //calling my Custom hook
  //Since it was returning an Object
  //i have to destructre it
  const { loading, products } = useFetch(url)
  console.log(products)
  return (
    <div>
      <h2>{loading ? 'loading...' : 'data'}</h2>
    </div>
  )
}

export default Example
