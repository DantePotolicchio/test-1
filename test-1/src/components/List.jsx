import Transaction from './Transaction';

const List = ({ data, formData }) => {
  const {initialDate, endDate} = formData;
  const initialDateTime = initialDate ? new Date(initialDate) : 0;
  const endDateTime = endDate ? new Date(endDate) : new Date('1-1-2030');

  return (
    <>
      {data
        .filter((trx) => {
          let date = new Date(trx.date);
          return date >= initialDateTime && date <= endDateTime;
        })
        .map((item) => (
          <Transaction key={item.id} data={item} />
        ))}
    </>
  );
};

export default List;
