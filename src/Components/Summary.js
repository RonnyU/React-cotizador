import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { toUpperCaseFirtsLetter } from '../helper';

const SummaryContainer = styled.header`
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color: #fff;
  margin-top: 1rem;
`;

const Summary = ({ data }) => {
  const { brand, year, plan } = data;

  if (brand === '' || year === '' || plan === '') return null;

  return (
    <SummaryContainer>
      <h2>Resumen de cotizacion</h2>
      <ul>
        <li>Marca: {toUpperCaseFirtsLetter(brand)}</li>
        <li>Plan: {toUpperCaseFirtsLetter(plan)}</li>
        <li>Año del auto: {toUpperCaseFirtsLetter(year)}</li>
      </ul>
    </SummaryContainer>
  );
};

Summary.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Summary;
