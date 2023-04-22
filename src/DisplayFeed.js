import React from 'react';
import Feed from './Feed';

function DisplayFeed() {
  const posts = [
    {
      id: 1,
      image: 'https://placeimg.com/640/480/animals',
      username: 'johndoe',
      date: 'April 14, 2023',
      caption: 'This is my first post!'
    },
    {
      id: 2,
      image: 'https://placeimg.com/640/480/nature',
      username: 'janedoe',
      date: 'April 13, 2023',
      caption: 'What a beautiful view!'
    }
  ];

  return (
    <div className="app">
      <Feed posts={posts} />
    </div>
  );
}

export default DisplayFeed;
