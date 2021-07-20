import React, { useState, Fragment } from 'react';
import Header from './Components/Header';
import styled from '@emotion/styled';
import Form from './Components/Form';
import Summary from './Components/Summary';
import Result from './Components/Result';
import Spinner from './Components/Spinner';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FormContainer = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {
  const [summary, setSummary] = useState({
    cotizacion: 0,
    data: {
      brand: '',
      year: '',
      plan: '',
    },
  });

  const [loading, setLoading] = useState(false);
  const { cotizacion, data } = summary;

  return (
    <Container>
      <Header title='Cotizador de seguros' />

      <FormContainer>
        <Form setSummary={setSummary} setLoading={setLoading} />

        {loading ? <Spinner /> : null}

        {!loading ? (
          <Fragment>
            <Summary data={data} />
            <Result cotizacion={cotizacion} />
          </Fragment>
        ) : null}
      </FormContainer>
    </Container>
  );
}

export default App;
