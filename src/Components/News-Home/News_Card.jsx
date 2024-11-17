import React from 'react';
import { FaEye, FaStar } from 'react-icons/fa'; // Importing icons from React Icons
import { Link } from 'react-router-dom';

export default function NewsCard({ news }) {
    return (

        <div className="card w-full mb-5 bg-white shadow-lg rounded-lg">
            {/* Author Section */}
            <div className="flex items-center p-4">
                <img
                    src={news.author.img}
                    alt={news.author.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                    <h3 className="font-semibold">{news.author.name}</h3>
                    <p className="text-gray-500 text-sm">{new Date(news.author.published_date).toDateString()}</p>
                </div>
                <div className="ml-auto">
                    <button className="btn btn-sm btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-1.833 1.833a4.008 4.008 0 010 5.672l-.034.033c-1.56 1.56-4.086 1.56-5.646 0-1.56-1.56-1.56-4.086 0-5.646l1.83-1.832a4.008 4.008 0 015.673 0l.01.01z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 11.75v-3.5A2.25 2.25 0 0110.25 6h3.5A2.25 2.25 0 0116 8.25v3.5M8 11.75H6.25a2.25 2.25 0 00-2.25 2.25v1.5a2.25 2.25 0 002.25 2.25h11.5a2.25 2.25 0 002.25-2.25v-1.5a2.25 2.25 0 00-2.25-2.25H8z" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Title Section */}
            <div className="p-4">
                <h2 className="text-xl font-bold text-gray-900">{news.title}</h2>
            </div>

            {/* Image Section */}
            <figure>
                <img
                    src={news.image_url}
                    alt={news.title}
                    className="w-full h-48 object-cover"
                />
            </figure>

            {/* Details Section */}
            <div className="p-4 text-gray-700 text-sm">
                {news.details.substring(0, 150)}...

                <Link
                    to={`/news/${news._id}`}
                    className="text-red-500 font-semibold cursor-pointer">Read More
                </Link>

            </div>

            {/* Footer Section (Rating and Views) */}
            <div className="flex items-center justify-between p-4 border-t">
                <div className="flex items-center text-yellow-500">
                    <FaStar className="mr-1" />
                    <span>{news.rating.number}</span>
                </div>
                <div className="flex items-center text-gray-600">
                    <FaEye className="mr-1" />
                    <span>{news.total_view}</span>
                </div>
            </div>
        </div>
    )
}
