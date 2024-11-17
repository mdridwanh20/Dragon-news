import React from 'react'
import { useLoaderData } from 'react-router-dom'
import News_Card from '../News-Home/News_Card';

export default function Category_News() {
    const {data: news} = useLoaderData()

  return (
    <>
      <p className='text-gray-500 text-sm'> {news.length} : News Found On The Category </p>

    <div >
          {
            news.map((singleNews) => <News_Card
            key={singleNews._id}
            news={singleNews}
            ></News_Card>)
          }
    </div>
    </>

  )
}
