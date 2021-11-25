import { useState, useEffect } from 'react'

//My custom hooks return my State
//Inside my hook i can manipulate my State so the Most  Important
//thing to return is my State
export const useFetch = (url) => {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const response = await fetch(url)
    const products = await response.json()
    setProducts(products)
    setLoading(false)
  }

  useEffect(() => {
    getProducts()
  }, [url])

  return { loading, products }
}
