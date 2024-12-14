import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function AddExpense({ handleAddExpense }) {
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddExpense({
      id: uuidv4(),
      name: name,
      cost: parseFloat(cost),
      category: undefined,
      date: new Date(date),
    });
    setName('');
    setCost('');
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
          <label htmlFor="cost">Coste</label>
          <input
            required="required"
            type="text"
            className="form-control"
            id="cost"
            name="cost"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
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
            <option selected>Categorias</option>
            <option value="1">Trabajo</option>
            <option value="2">Alimentacion</option>
            <option value="3">Vivienda</option>
            <option value="3">Trasporte</option>
          </select>
        </div>
        <div className="col-l m-2">
          <label htmlFor="cost">Fecha</label>
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
