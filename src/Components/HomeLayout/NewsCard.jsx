import React from "react";
import { Link } from "react-router";

export default function NewsCard({ news }) {
  const {
    title,
    author,
    published_date,
    rating,
    thumbnail_url,
    image_url,
    details,
    tags,
    total_view,
    category_id,
  } = news;
  return (
    <section className=" flex flex-col items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8 ">
        {/* Thumbnail */}
        <img
          className="w-full h-56 object-cover"
          src={thumbnail_url}
          alt={title}
        />

        <div className="p-6">
          {/* Tag and Rating */}
          <div className="flex items-center justify-between">
            <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
              {rating.badge}
            </span>
            <span className="text-sm text-gray-500">{rating.number} Stars</span>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold mt-2">{title}</h2>

          {/* Author and Date */}
          <div className="text-sm text-gray-500 mt-2">
            <span>By {author.name}</span> |{" "}
            <span>{new Date(published_date).toLocaleDateString()}</span>
          </div>

          {/* Details */}
         <Link> <p className="mt-4 text-gray-700">
            {details.slice(0, 150)}... <span className="text-red-600">read more</span>
     
          </p></Link>

          {/* Tags */}
          <div className="mt-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-200 text-sm text-gray-600 px-2 py-1 rounded-full mr-2 mb-2 inline-block"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* View count */}
          <div className="mt-2 text-gray-500 text-sm">
            <span>{total_view} Views</span>
          </div>

          {/* Read more link */}
        </div>
      </div>
    </section>
  );
}
