// src/components/ContentAbout.tsx
import React from 'react';
import Image from 'next/image';

interface ContentAboutProps {
  date: string;
  category: string;
  title: string;
  description: string;
  author: string;
  imageSrc: string;
  authorImage: string;
}

const ContentAbout: React.FC<ContentAboutProps> = ({
  date,
  category,
  title,
  description,
  author,
  imageSrc,
  authorImage,
}) => {
  return (
    <div className="dark:bg-gray-100 dark:text-gray-800 mb-8">
      <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-sky-950 dark:bg-gray-50">
        <div className="flex items-center justify-between">
          <span className="text-sm dark:text-gray-600">{date}</span>
          <a
            rel="noopener noreferrer"
            href="#"
            className="px-2 py-1 font-bold rounded dark:bg-violet-600 dark:text-gray-50"
          >
            {category}
          </a>
        </div>
        <div className="mt-3">
          <a
            rel="noopener noreferrer"
            href="#"
            className="text-2xl font-bold hover:underline"
          >
            {title}
          </a>
          <p className="mt-2">{description}</p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <a
            rel="noopener noreferrer"
            href="#"
            className="hover:underline dark:text-violet-600"
          >
            Read more
          </a>
          <div>
            <a
              rel="noopener noreferrer"
              href="https://www.facebook.com/search/top?q=python%20cochabamba"
              target='_blank'
              className="flex items-center"
            >
              <Image
                src={authorImage}
                width={400}
                height={400}
                alt="avatar"
                className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500"
              />
              <span className="hover:underline dark:text-gray-600">
                {author}
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentAbout;
