import './todo.css';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import forward from '../../images/back_button_icon.png';

function Todo() {
  const navigate = useNavigate();
  
  const initialTodos = [
    { date: 'Jul 15', title: 'ISS', subtitle: 'Visa documents, I-20, OPT, CPT', officeName: 'transcript', dueInDays: 1 },
    { date: 'Sep 27', title: 'First Day of School', subtitle: 'Go Huskies!', officeName: 'school', dueInDays: 74 },
    { date: 'Jul 30', title: 'Meeting', subtitle: 'Project discussion', officeName: 'meeting', dueInDays: 14 },
    { date: 'Aug 1', title: 'Workshop', subtitle: 'React Workshop', officeName: 'workshop', dueInDays: 16 },
    { date: 'Jul 20', title: 'Doctor Appointment', subtitle: 'Annual check-up', officeName: 'doctor', dueInDays: 5 },
    { date: 'Jul 22', title: 'Grocery Shopping', subtitle: 'Buy vegetables', officeName: 'grocery', dueInDays: 7 },
    { date: 'Aug 10', title: 'Vacation', subtitle: 'Beach trip', officeName: 'vacation', dueInDays: 25 },
    { date: 'Aug 15', title: 'Conference', subtitle: 'Tech Conference', officeName: 'conference', dueInDays: 30 },
    { date: 'Jul 28', title: 'Birthday Party', subtitle: "John's Birthday", officeName: 'birthday', dueInDays: 12 },
    { date: 'Aug 5', title: 'Library', subtitle: 'Return books', officeName: 'library', dueInDays: 20 },
    { date: 'Jul 18', title: 'Dentist Appointment', subtitle: 'Teeth cleaning', officeName: 'dentist', dueInDays: 3 },
    { date: 'Jul 25', title: 'Gym', subtitle: 'Workout session', officeName: 'gym', dueInDays: 10 },
    { date: 'Aug 3', title: 'Car Service', subtitle: 'Oil change', officeName: 'car', dueInDays: 18 },
  ].sort((a, b) => new Date(a.date) - new Date(b.date));

  const [selectedCategory, setSelectedCategory] = useState('');
  const [todos, setTodos] = useState(initialTodos);
  const [filteredTodos, setFilteredTodos] = useState(initialTodos);
  const [message, setMessage] = useState('');

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

    setFilteredTodos(newFilteredTodos.sort((a, b) => new Date(a.date) - new Date(b.date)));
    setMessage('Refresh successfully');
    setTimeout(() => {
      setMessage('');
    }, 10000);
  };

  useEffect(() => {
    setFilteredTodos(todos.sort((a, b) => new Date(a.date) - new Date(b.date)));
  }, [todos]);

  const TodoCard = ({ date, title, subtitle, officeName }) => (
    <button className="card" type="button" onClick={() => handleClick(officeName)}>
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
        {filteredTodos.map((todo, index) => (
          <TodoCard key={index} {...todo} />
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
