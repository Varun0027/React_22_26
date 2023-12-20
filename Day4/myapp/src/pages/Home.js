import React from 'react'
import { Star, Trash2,BadgeMinus } from 'lucide-react'
const Home = () => {
  return (
    <div>
      <Star />
      <Trash2 />
      <BadgeMinus />
      <BadgeMinus size={48} color="#00ff2a" strokeWidth={3} />
    </div>
  )
}

export default Home