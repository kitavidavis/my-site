import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"David Kitavi's personal website. Engineering undergraduate "
    + 'and software engineer at GeoPsy Research.'}
  >
    <article className="post" id="index">
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        read <Link to="/blogs">my blogs</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <blockquote>
        There are two ways of constructing a software design:
        One way is to make it so simple that there are obviously no deficiencies and
        the other way is to make it so complicated that there are no obvious deficiencies.
        <footer>C.A.R. Hoare</footer>
      </blockquote>
    </article>
  </Main>
);

export default Index;
