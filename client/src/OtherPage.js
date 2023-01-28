import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      <h4>Kalkulator liczby fibonacciego</h4>
      <p>Kamil Zagajewski</p>
      <p>I2S 2.5</p>
      <Link to="/">Go back home</Link>
    </div>
  );
};
