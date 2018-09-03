import React from 'react';
import { Row } from '../styles/theme';

const Footer = () => {
  return (
    <Row footrow>
      <p>
        {' '}
        Copyright (c) 2018 SinForsaken || Design & Code by{' '}
        <a
          className="footerSerrow"
          href="https://github.com/Serrowxd"
          target="_blank"
          rel="noopener noreferrer"
        >
          Serrow
        </a>{' '}
        (OvO")
      </p>
    </Row>
  );
};

export default Footer;
