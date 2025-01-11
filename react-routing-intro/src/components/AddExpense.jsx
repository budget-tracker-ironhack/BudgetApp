import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function AddExpense({ handleAddExpense }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const categoryIcons = {
    Trabajo: "bi-briefcase-fill",
    Vivienda: "bi-house-fill",
    Alimentacion: "bi-basket2-fill",
    Transporte: "bi-car-front-fill",
    Otros: "bi-three-dots",
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const expenseData = {
      id: uuidv4(),
      name,
      amount: parseFloat(amount),
      category,
      date: new Date(date),
      icon: categoryIcons[category],
    };

    handleAddExpense(expenseData);
    setName('');
    setAmount('');
    setCategory('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-sm">
          <label htmlFor="name">Nombre</label>
          <input
            required="required"
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="col-sm">
          <label htmlFor="amount">Cantidad</label>
          <input
            required="required"
            type="number"
            className="form-control"
            id="amount"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            min = "0"
            step="0.01"
          ></input>
        </div>
        <div className="col-l my-3">
          <select
            className="form-select"
            aria-label="Default select example"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" disabled>
              Categoría
            </option>
            <option value="Trabajo">Trabajo</option>
            <option value="Alimentacion">Alimentacion</option>
            <option value="Vivienda">Vivienda</option>
            <option value="Transporte">Transporte</option>
            <option value="Otros">Otros</option>
          </select>
        </div>
        <div className="col-l mb-2">
          <label htmlFor="amount">Fecha</label>
          <input
            required="required"
            type="date"
            id="category"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          ></input>
        </div>
        <div className="row">
          <div className="col-1 my-4">
            <button type="submit" className="btn" style={{ backgroundColor: '#562f5eff', color: 'white' }}>
              Guardar
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default AddExpense;
