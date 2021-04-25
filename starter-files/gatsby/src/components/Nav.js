import React from 'react';
import { Link, navigate } from 'gatsby';

function goToSlicemasters() {
  setTimeout(() => {
    console.log('Go to Slicemasters');
    navigate('/slicemasters');
  }, 2000);
}

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">LOGO</Link>
        </li>
        <li>
          <Link to="/">Hot Now</Link>
        </li>
        <li>
          <Link to="/order">Order Ahead</Link>
        </li>
        <li>
          <Link to="/pizzas">Pizza Menu</Link>
        </li>
        <li>
          <Link to="/slicemasters">Slicemasters</Link>
        </li>
      </ul>
    </nav>
  );
}
