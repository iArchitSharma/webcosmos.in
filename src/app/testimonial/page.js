"use client";
import React from 'react';
import Testimonials from '../components/Testimonials/testimonials';
import data from '../../../data/testimonials.json'

const Testimonial = () => {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    return (
        <div>
             
        
        <figure className="max-w-screen-md ml-36 text-left">
    <svg className="w-10 h-10 mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
    </svg>
    <blockquote>
        <p className="sm:text-xl md:text-3xl lg:text-5xl italic font-medium text-heading-white">
        &quot;There is only one boss: the customer. And he can fire everybody in the company from the chairman on down, simply by spending his money somewhere else.&quot;
        </p>
    </blockquote>
</figure>


            <Testimonials testimonials={data} />
        </div>
    );
}

export default Testimonial;