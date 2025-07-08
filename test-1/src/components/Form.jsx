const Form = ({ formData, setFormData }) => {
  const {initialDate, endDate} = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <label>Initial Date</label>
      <input type="date" max={endDate} value={initialDate} onChange={handleChange} name="initialDate"></input>
      <label>End Date</label>
      <input type="date" min={initialDate} value={endDate} onChange={handleChange} name="endDate"></input>
    </div>
  );
};

export default Form;