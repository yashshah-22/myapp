import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostList from './PostList';
import PostDetail from './PostDetail';
import PostForm from './PostForm';

function Routess() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={PostList} />
        <Route path="/posts/new" component={PostForm} />
        <Route path="/posts/:id" component={PostDetail} />
      </Routes>
    </Router>
  );
}

export default Routess;
