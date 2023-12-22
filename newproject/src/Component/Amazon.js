import React from 'react'
import list from './MenuApi'
import './Style/Amazon.css'
import Cards from './Cards'
const Amazon = ({handle}) => {
  return (
    <section>
      {
        list.map((item)=>(
        <Cards item={item} handle={handle}/>
        ))
      }
    </section>
  )
}

export default Amazon