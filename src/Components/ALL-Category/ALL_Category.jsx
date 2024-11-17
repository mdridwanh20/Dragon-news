import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function ALL_Category() {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch(`https://openapi.programming-hero.com/api/news/categories`)
      .then(res => res.json())
      .then(data => setCategories(data.data.news_category
      ))
  }, [])

  return (
    <div className=''>
      <h1 className='font-medium py-5'>All Category {categories.length} </h1>
      <div className='flex flex-col gap-1'>

        {
          categories.map((category) =>
          <NavLink
              to={`/category/${category.category_id}`}
              key={category.category_id}
              className=' text-left hover:bg-[#04a16d] hover:text-white btn justify-start  bg-slate-200 rounded-md border'
            > {category.category_name}
          </NavLink>)

        }

      </div>

    </div>
  )
}

