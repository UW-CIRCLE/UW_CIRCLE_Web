import './todo.css';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import forward from '../../images/back_button_icon.png';

function Todo() {
  const navigate = useNavigate();

  const initialTodos = [
    { id: 1, date: 'Jul 15', title: 'ISS', subtitle: 'Visa documents, I-20, OPT, CPT', officeName: 'transcript', dueInDays: 1, checked: false },
    { id: 2, date: 'Sep 27', title: 'First Day of School', subtitle: 'Go Huskies!', officeName: 'school', dueInDays: 74, checked: false },
    { id: 3, date: 'Jul 30', title: 'Meeting', subtitle: 'Project discussion', officeName: 'meeting', dueInDays: 14, checked: false },
    { id: 4, date: 'Aug 1', title: 'Workshop', subtitle: 'React Workshop', officeName: 'workshop', dueInDays: 16, checked: false },
    { id: 5, date: 'Jul 20', title: 'Doctor Appointment', subtitle: 'Annual check-up', officeName: 'doctor', dueInDays: 5, checked: false },
    { id: 6, date: 'Jul 22', title: 'Grocery Shopping', subtitle: 'Buy vegetables', officeName: 'grocery', dueInDays: 7, checked: false },
    { id: 7, date: 'Aug 10', title: 'Vacation', subtitle: 'Beach trip', officeName: 'vacation', dueInDays: 25, checked: false },
    { id: 8, date: 'Aug 15', title: 'Conference', subtitle: 'Tech Conference', officeName: 'conference', dueInDays: 30, checked: false },
    { id: 9, date: 'Jul 28', title: 'Birthday Party', subtitle: "John's Birthday", officeName: 'birthday', dueInDays: 12, checked: false },
    { id: 10, date: 'Aug 5', title: 'Library', subtitle: 'Return books', officeName: 'library', dueInDays: 20, checked: false },
    { id: 11, date: 'Jul 18', title: 'Dentist Appointment', subtitle: 'Teeth cleaning', officeName: 'dentist', dueInDays: 3, checked: false },
    { id: 12, date: 'Jul 25', title: 'Gym', subtitle: 'Workout session', officeName: 'gym', dueInDays: 10, checked: false },
    { id: 13, date: 'Aug 3', title: 'Car Service', subtitle: 'Oil change', officeName: 'car', dueInDays: 18, checked: false },
  ];

  const [selectedCategory, setSelectedCategory] = useState('');
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const sortedTodos = initialTodos.sort((a, b) => new Date(a.date) - new Date(b.date));
    setTodos(sortedTodos);
    setFilteredTodos(sortedTodos);
  }, []);

  const handleClick = (officeName) => {
    navigate(`/todo/${officeName}`);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleFilter = () => {
    const newFilteredTodos = todos.filter(todo => {
      switch (selectedCategory) {
        case '1_day': return todo.dueInDays <= 1;
        case '3_days': return todo.dueInDays <= 3;
        case '1_week': return todo.dueInDays <= 7;
        case '2_weeks': return todo.dueInDays <= 14;
        case '1_month': return todo.dueInDays <= 30;
        case '3_month': return todo.dueInDays <= 90;
        default: return true;
      }
    });

    setFilteredTodos(newFilteredTodos.sort((a, b) => a.checked - b.checked || new Date(a.date) - new Date(b.date)));
    setMessage('Refresh successfully');
    setTimeout(() => {
      setMessage('');
    }, 5000);
  };

  const handleCheckboxChange = (id) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, checked: !todo.checked };
      }
      return todo;
    });
    const sortedTodos = newTodos.sort((a, b) => a.checked - b.checked || new Date(a.date) - new Date(b.date));
    setTodos(sortedTodos);
    setFilteredTodos(sortedTodos.filter(todo => {
      switch (selectedCategory) {
        case '1_day': return todo.dueInDays <= 1;
        case '3_days': return todo.dueInDays <= 3;
        case '1_week': return todo.dueInDays <= 7;
        case '2_weeks': return todo.dueInDays <= 14;
        case '1_month': return todo.dueInDays <= 30;
        case '3_month': return todo.dueInDays <= 90;
        default: return true;
      }
    }).sort((a, b) => a.checked - b.checked || new Date(a.date) - new Date(b.date)));
  };

  const TodoCard = ({ id, date, title, subtitle, officeName, checked }) => (
    <div className="todo-card" key={id}>
      <input 
        type="checkbox" 
        checked={checked} 
        onChange={() => handleCheckboxChange(id)} 
        className="todo-checkbox"
      />
      <button className={`card ${checked ? 'checked' : ''}`} type="button" onClick={() => handleClick(officeName)}>
        <div className="todo-card-content">
          <div className="date">{date}</div>
          <div className="todo-vertical">
            <h2 className="card-title">{title}</h2>
            <p className="card-subtitle">{subtitle}</p>
          </div>
          <div className="arrow">
            <img className="forward-icon" src={forward} alt="Forward" />
          </div>
        </div>
      </button>
    </div>
  );

  return (
    <div>
      <div className="Header-Section">
        <h1 className="Header">To-Do List</h1>
      </div>
      <div className="category-section">
        <label htmlFor="category">Filter by:</label>
        <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">All</option>
          <option value="1_day">Due within 1 day</option>
          <option value="3_days">Due within 3 days</option>
          <option value="1_week">Due within 1 week</option>
          <option value="2_weeks">Due within 2 weeks</option>
          <option value="1_month">Due within 1 month</option>
          <option value="3_month">Due within 3 months</option>
        </select>
        <button onClick={handleFilter}>Submit</button>
        {message && <p className="refresh-message">{message}</p>}
      </div>
      <div className="todo-list">
        {filteredTodos.map((todo) => (
          <TodoCard key={todo.id} {...todo} />
        ))}
      </div>
      <nav className="bottom-nav">
        <Link to="/" className="nav-item">🏠 Home</Link>
        <Link to="/todo" className="nav-item">📝 Todo List</Link>
        <Link to="/discover" className="nav-item">👤 Discover</Link>
        <Link to="/more" className="nav-item">⚙️ More</Link>
      </nav>
    </div>
  );
}

export default Todo;
