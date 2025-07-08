import { useEffect, useState } from 'react';
import fetchTransactions from './API/GET';
import List from './components/List';
import Form from './components/Form';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({ initialDate: '', endDate: '' });

  useEffect(() => {
    const response = fetchTransactions();
    setData(response);
    setIsLoading(false);
  }, []);


  return (
    <div className="App">
      <h2>Transactions</h2>
      <Form formData={formData} setFormData={setFormData} />
      {
        isLoading ? <p>Loading . . .</p> : <List data={data} formData={formData} />
      }
    </div>
  );
}

export default App;
