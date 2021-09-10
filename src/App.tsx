import React, { useState } from 'react';
import Styled from 'styled-components';

import { Button } from 'Components';

const Container = Styled.div`
  min-height: 100vh;
  background-color: #EEEEEE;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Contents = Styled.div`
  display: flex;
  background-color: #FFFFFF;
  flex-direction: row;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;


function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <Container>
      <h1>{count}</h1>
      <Contents>
        <Button label="+1" onClick={() => setCount(count + 1)} /> 
        <Button label="-1" onClick={() => setCount(count - 1)} />
      </Contents>
    </Container>
  );
}

export default App;
