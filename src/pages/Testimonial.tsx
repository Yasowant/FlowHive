'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface TestimonialProps {
  name: string;
  handle: string;
  text: string;
  avatar?: string;
}

const testimonials: TestimonialProps[] = [
  {
    name: 'Eric Hilliard',
    handle: '@erichilliard',
    text: 'FlowHive is amazing stuff. I use it every day and it helps me to maintain my sanity. Highly recommended for those juggling projects.',
    avatar: '/avatars/eric.png',
  },
  {
    name: 'Rebecca Smetak',
    handle: '@rsdesigncreativ',
    text: "I'm loving @FlowHive! Best project management system yet! #designergoals",
    avatar: '/avatars/rebecca.png',
  },
  {
    name: 'Troy Coroles',
    handle: '@TroyCoroles',
    text: 'Started using @FlowHive for project management. Love it!',
    avatar: '/avatars/troy.png',
  },
  {
    name: 'Intellitonic',
    handle: '@Intellitonic',
    text: 'We love your product and are so glad we can help spread the news!',
    avatar: '/avatars/intellitonic.png',
  },
  {
    name: 'Milan Vuk Stankovic',
    handle: '@LanmiDCS',
    text: 'The best Project Management App is FlowHive, I absolutely love them.',
    avatar: '/avatars/milan.png',
  },
  {
    name: 'Robert Okadar',
    handle: '@araneanetwork',
    text: 'PM and QA are my passion, and it is a pleasure to use FlowHive. Thank you @FlowHive team!',
    avatar: '/avatars/robert.png',
  },
  {
    name: 'Michael Peters',
    handle: '@NewJerseySPCA',
    text: 'FlowHive is the market leader and we are proud to be a part of your community!',
    avatar: '/avatars/michael.png',
  },
  {
    name: 'Tina Sullivan',
    handle: '@TinaPSullivan',
    text: 'My new favorite FREE project management software. FlowHive.com',
    avatar: '/avatars/tina.png',
  },
];

export default function TestimonialGrid() {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 2);
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        Used by millions of productive people!
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {testimonials.slice(0, visibleCount).map((testimonial, index) => (
          <Card key={index} className="shadow-lg rounded-lg">
            <CardContent>
              <p className="text-gray-700">{testimonial.text}</p>
              <div className="flex items-center mt-4">
                {testimonial.avatar && (
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                )}
                <div className="ml-3">
                  <p className="text-sm font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.handle}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {visibleCount < testimonials.length && (
        <div className="flex justify-center mt-6">
          <Button onClick={handleLoadMore} className="px-6 py-2">
            Load More
          </Button>
        </div>
      )}
    </div>
  );
}
