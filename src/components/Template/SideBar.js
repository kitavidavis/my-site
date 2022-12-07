import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/dave2.jpg`} alt="" />
      </Link>
      <header>
        <h2>David Kitavi</h2>
        <p><a href="mailto:daviskitavi98@gmail.com">daviskitavi98@gmail</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m David. I like building things.
        I am an engineering undergraduate, Technical University of Kenya, and
        a software engineer at <a href="https://geopsyresearch.org">GeoPsy Research</a>. I have also worked at <a href="https://orbital.co.ke">Orbital Africa</a>
        , <a href="https://hydrointelafrica.com">HydroIntel Africa Limited</a>
        , <a href="https://www.redcross.or.ke">Kenya Red Cross</a>
        , <a href="https://shantagold.com">Shanta Gold</a>
        , and <a href="https://oloo.co.ke/aceli">Aceli Africa</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright"><Link to="/">&copy; David Kitavi</Link>.</p>
    </section>
  </section>
);

export default SideBar;
