const Transaction = ({ data }) => {
  return (
    <div>
      <h3>Id: {data.id}</h3>
      <p>Date: {data.date} </p>
      <p>Description: {data.description}</p>
      <p>Amount: ${data.amount} (USD) </p>
    </div>
  );
};

export default Transaction;
