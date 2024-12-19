import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

function AddExpense({ handleAddExpense }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Formulario enviado", { name, amount, category, date });
   const expenseData = {
    id: uuidv4(),
    name,
    amount: parseFloat(amount),
    category,
    date: new Date(date),
   };

   try {
    if (category === "Trabajo") {
      await axios.post("http://localhost:3000/income", expenseData);
    }else {
      await axios.post("http://localhost:3000/expenses", expenseData);
    }
    setName("");
    setAmount("");
    setCategory("");
    setDate("");

    handleAddExpense(expenseData);
   }catch (error) {
    console.error("Error al guardar el registro", error);
   }
  
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
            type="text"
            className="form-control"
            id="amount"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          ></input>
        </div>
        <div className="col-l m-4">
          <select
            className="form-select"
            aria-label="Default select example"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" disabled>Categorias</option>
            <option value="Trabajo">Trabajo</option>
            <option value="Alimentacion2">Alimentacion</option>
            <option value="Vivienda">Vivienda</option>
            <option value="Transporte">Transporte</option>
            <option value="Otros">Otros</option>
          </select>
        </div>
        <div className="col-l m-2">
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
          <div className="col-1">
            <button type="submit" className="btn btn-primary mt-3">
              Guardar
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default AddExpense;
