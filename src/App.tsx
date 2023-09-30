import React from 'react';
import { CountriesList } from './components';

const TITLE = '내가 가고 싶은 나라';

function App() {
  return (
    <>
      <CountriesList title={TITLE} />
    </>
  );
}

export default App;
