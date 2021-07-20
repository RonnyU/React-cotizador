import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Msg = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;

const TextResult = styled.div`
  background-color: rgb(127, 224, 237);
  text-align: center;
  padding: 0.5rem;
  border: 1px solid #26c6da;
  margin-top: 1rem;
  position: relative;
`;

const TextC = styled.p`
  color: #00838f;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`;

const Result = ({ cotizacion }) => {
  console.log(cotizacion);
  const nodeRef = React.useRef(null);

  return cotizacion === 0 ? (
    <Msg>Elige marca, año y tipo de seguro</Msg>
  ) : (
    <TextResult>
      <TransitionGroup component='span' className='resultado'>
        <CSSTransition
          classNames='resultado'
          key={cotizacion}
          nodeRef={nodeRef}
          timeout={{ enter: 500, exit: 500 }}
        >
          <TextC ref={nodeRef}>
            el total es: $ <span>{cotizacion}</span>
          </TextC>
        </CSSTransition>
      </TransitionGroup>
    </TextResult>
  );
};

Result.propTypes = {
  cotizacion: PropTypes.number.isRequired,
};

export default Result;
