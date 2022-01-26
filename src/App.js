import React, { useEffect, useState } from 'react';
import FirstCalculator from './components/FirstCalculator';
import SecondCalculator from './components/SecondCalculator';
import {GetJsonData} from './utils/api';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function GetApi() {
      const jsonData = await GetJsonData();
      setData(jsonData);
    }
    GetApi();
  }, []);

  return (
    <>
      <FirstCalculator data={data} />
      <br />
      <SecondCalculator data={data} />
    </>
  );
}

export default App;
