// import './App.css'
// // import Example from './Example';
// import { useState } from 'react'
// import ProfileCard from './ProfileCard';
// function App() {
//     return (
//         <div className="app">
//             <ProfileCard
//                 name="Aibek Asirbek"
//                 image="Изображение WhatsApp 2025-05-18 в 14.51.11_29ce74cf.jpg"
//                 bio="Qwerty"
//             />
//         </div>
//     );
// }

// export default App


// import './App.css';
// import ProductCard from './ProductCard';

// function App() {
//   return (
//     <div className='product-container'>
//       <ProductCard
//         name="Ноут"
//         image="https://jmart.kz/_next/image?url=https%3A%2F%2Fjmart.kz%2Fimages%2Fdetailed%2F4962%2Fasus-vivobook-s15-oled-m3502qa-ma034w-90nr07p2-m02360-seryi-108214868-1.jpg&w=1920&q=75"
//         price="500.000 tg"s
//       />
//       <ProductCard
//         name="iPhone"
//         image="https://gadgetstore.kz/wa-data/public/shop/products/68/10/1068/images/2907/2907.750x0.jpg"
//         price="700.000 tg"
//       />
//       <ProductCard
//         name="Наушник"
//         image="https://c.dns-shop.kz/thumb/st4/fit/300/300/23709c62f607e84368c8d23564eb1d6f/8dc832a76f5703b99ad04a44e13c0da909d1e0d70267849026e0e79ac1e54e7e.jpg"
//         price="150.000 tg"
//       />
//       <ProductCard
//         name="Ноут"
//         image="https://jmart.kz/_next/image?url=https%3A%2F%2Fjmart.kz%2Fimages%2Fdetailed%2F4962%2Fasus-vivobook-s15-oled-m3502qa-ma034w-90nr07p2-m02360-seryi-108214868-1.jpg&w=1920&q=75"
//         price="500.000 tg"s
//       />
//       <ProductCard
//         name="iPhone"
//         image="https://gadgetstore.kz/wa-data/public/shop/products/68/10/1068/images/2907/2907.750x0.jpg"
//         price="700.000 tg"
//       />
//       <ProductCard
//         name="Наушник"
//         image="https://c.dns-shop.kz/thumb/st4/fit/300/300/23709c62f607e84368c8d23564eb1d6f/8dc832a76f5703b99ad04a44e13c0da909d1e0d70267849026e0e79ac1e54e7e.jpg"
//         price="150.000 tg"
//       />
//       <ProductCard
//         name="Ноут"
//         image="https://jmart.kz/_next/image?url=https%3A%2F%2Fjmart.kz%2Fimages%2Fdetailed%2F4962%2Fasus-vivobook-s15-oled-m3502qa-ma034w-90nr07p2-m02360-seryi-108214868-1.jpg&w=1920&q=75"
//         price="500.000 tg"s
//       />
//       <ProductCard
//         name="iPhone"
//         image="https://gadgetstore.kz/wa-data/public/shop/products/68/10/1068/images/2907/2907.750x0.jpg"
//         price="700.000 tg"
//       />
//       <ProductCard
//         name="Наушник"
//         image="https://c.dns-shop.kz/thumb/st4/fit/300/300/23709c62f607e84368c8d23564eb1d6f/8dc832a76f5703b99ad04a44e13c0da909d1e0d70267849026e0e79ac1e54e7e.jpg"
//         price="150.000 tg"
//       />
//       <ProductCard
//         name="Ноут"
//         image="https://jmart.kz/_next/image?url=https%3A%2F%2Fjmart.kz%2Fimages%2Fdetailed%2F4962%2Fasus-vivobook-s15-oled-m3502qa-ma034w-90nr07p2-m02360-seryi-108214868-1.jpg&w=1920&q=75"
//         price="500.000 tg"s
//       />
//       <ProductCard
//         name="iPhone"
//         image="https://gadgetstore.kz/wa-data/public/shop/products/68/10/1068/images/2907/2907.750x0.jpg"
//         price="700.000 tg"
//       />
//       <ProductCard
//         name="Наушник"
//         image="https://c.dns-shop.kz/thumb/st4/fit/300/300/23709c62f607e84368c8d23564eb1d6f/8dc832a76f5703b99ad04a44e13c0da909d1e0d70267849026e0e79ac1e54e7e.jpg"
//         price="150.000 tg"
//       />
      
//     </div>
//   );
// }

// export default App;

// import {useState} from 'react'
// import './App.css'

// function App() {
//     let [san, setSan] = useState(0)
//     let [text, setText] = useState ('Galymbek')
//     let [items, setItems] = useState({
//         name:"Galymber",
//         hobby:"Coding"
//     })
//     let [texts, setTexts] = useState(['Name1', 'Name2', 'Name3'])
//     function handleClick() {setSan(san + 1)}
//     function handleChangeName() {
//         setText ('Damir')
//     }
//     function handleAddName(){
//         setTexts([...texts,'Aibek'])
//     }
//     return (
//         <> 
//           <p id='number'>{san}</p>
//         <button onClick={handleClick}>+</button>
//             {text}
//         <button onClick={handleChangeName}>Ataudi ozgert</button>
//         <ul>
//             {texts.map(element=>(<li>{element}</li>))}
//             <button onClick={handleAddName}>Aibekti qos</button>
//             {items.hobby}
//             {items.name}
//         </ul>
//         </>
     

//     );
// }

// export default App

// import React, {useState } from "react";
// function LiveInput() {
//     const [text, setText] = useState('');

//     const handleChange = (e) => {
//         setText(e.target.value);
//     };
//     return (
//         <div>
//             <input type="text"
//             placeholder="Печатай"
//             value={text}
//             onChange={handleChange}/>
//             <p>{text}</p>
//         </div>
//     );
// }

// export default LiveInput;

//To-Do-List
// import React, { useState } from "react";
// import "./App.css";

// function App() {
//     const [tasks, setTasks] = useState([]);
//     const [input, setInput] = useState('');
//     const [filter, setFilter] = useState('all');

//     const handleAddTasks = () => {
//         if (input.trim() === '') return;
//         setTasks([...tasks, { text: input, completed: false }]);
//         setInput('');
//     };

//     const handleDeleteTask = (index) => {
//         const updatedTasks = tasks.filter((_, i) => i !== index);
//         setTasks(updatedTasks);
//     };

//     const toggleTaskStatus = (index) => {
//         const updatedTasks = [...tasks];
//         updatedTasks[index].completed = !updatedTasks[index].completed;
//         setTasks(updatedTasks);
//     };

//     const filteredTasks = tasks.filter(task => {
//         if (filter === 'complete') return task.completed;
//         if (filter === 'incomplete') return !task.completed;
//         return true;
//     });

//     return (
//         <div className="app">
//             <h2 className="title">To-Do List</h2>

//             <div className="input-container">
//                 <input
//                     type="text"
//                     value={input}
//                     placeholder="New task"
//                     onChange={(e) => setInput(e.target.value)}
//                     className="input"
//                 />
//                 <button onClick={handleAddTasks} className="add-button">Add</button>
//             </div>

//             <div className="filter-box">
//                 <button onClick={() => setFilter('all')}>All</button>
//                 <button onClick={() => setFilter('complete')}>Complete</button>
//                 <button onClick={() => setFilter('incomplete')}>Incomplete</button>
//             </div>

//             <ul className="task-list">
//                 {filteredTasks.map((task, index) => (
//                     <li key={index} className="task-item">
//                         <div>
//                             {task.text}
//                         </div>
//                         <div className="btn-box">
//                             <button
//                                 onClick={() => toggleTaskStatus(index)}
//                                 className="status-button"
//                             >
//                                 {task.completed ? "Выполнено" : "Не выполнена"}
//                             </button>
//                             <button
//                                 onClick={() => handleDeleteTask(index)}
//                                 className="delete-button"
//                             >
//                                 ✖
//                             </button>
//                         </div>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default App;


// import React, { useState } from 'react';
// import './App.css';

// function App() {
//     const [bgColor, setBgColor] = useState('#ffffff');

//     const changeColor = (color) => {
//         setBgColor(color);
//     };

//     return (
//         <div className="app" style={{ backgroundColor: bgColor }}>
//             <h1>Измени цвет фона</h1>
//             <div className="button-container">
//                 <button onClick={() => changeColor('#ff9999')}>Красный</button>
//                 <button onClick={() => changeColor('#99ccff')}>Синий</button>
//                 <button onClick={() => changeColor('#99ff99')}>Зелёный</button>
//             </div>
//         </div>
//     );
// }

// export default App;

// import {useState} from 'react'

// function App() {
//     const [count, setCount] = useState(0)

//     return(
//         <div>
//             <h1>{count}</h1>
//             <button onClick={()=> setCount(count+1)}>Increment</button>
//             <button onClick={()=> setCount(count-1)}>Decrement</button>
//         </div>
//     )
// }

// export default App

// import React, { useState } from 'react';
// import './App.css'

// function MovieApp() {
//   const [movieData, setMovieData] = useState({
//     title: '',
//     poster: '',
//     description: ''
//   });

//   const [savedMovies, setSavedMovies] = useState([]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setMovieData({
//       ...movieData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Проверяем, заполнено ли хотя бы название
//     if (!movieData.title.trim()) {
//       alert('Пожалуйста, введите название фильма');
//       return;
//     }
    
//     // Добавляем фильм в список сохраненных
//     setSavedMovies([...savedMovies, movieData]);
    
//     // Очищаем форму
//     setMovieData({
//       title: '',
//       poster: '',
//       description: ''
//     });
    
//     console.log('Фильм сохранен:', movieData);
//   };

//   return (
//     <div className="movie-app">
//       <h1>Movie Information</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="title">Название фильма:</label>
//           <input
//             type="text"
//             id="title"
//             name="title"
//             value={movieData.title}
//             onChange={handleInputChange}
//             placeholder="Введите название фильма"
//             required
//           />
//         </div>

//         <div>
//           <label htmlFor="poster">Ссылка на постер:</label>
//           <input
//             type="text"
//             id="poster"
//             name="poster"
//             value={movieData.poster}
//             onChange={handleInputChange}
//             placeholder="Введите URL постера"
//           />
//         </div>

//         <div>
//           <label htmlFor="description">Описание:</label>
//           <textarea
//             id="description"
//             name="description"
//             value={movieData.description}
//             onChange={handleInputChange}
//             placeholder="Введите описание фильма"
//           />
//         </div>

//         <button type="submit">
//           Сохранить
//         </button>
//       </form>

//       <div className="preview">
//         <h2>Предпросмотр:</h2>
//         {movieData.poster && (
//           <img 
//             src={movieData.poster} 
//             alt={movieData.title || "Movie poster"} 
//           />
//         )}
//         <h3>{movieData.title || "Название фильма"}</h3>
//         <p>{movieData.description || "Описание фильма появится здесь"}</p>
//       </div>

//       <div className="saved-movies">
//         <h2>Сохраненные фильмы:</h2>
//         {savedMovies.length === 0 ? (
//           <p>Нет сохраненных фильмов</p>
//         ) : (
//           <ul>
//             {savedMovies.map((movie, index) => (
//               <li key={index}>
//                 <h3>{movie.title}</h3>
//                 {movie.poster && <img src={movie.poster} alt={movie.title} />}
//                 <p>{movie.description}</p>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// }

// export default MovieApp;


import React, { useState } from 'react';
import "./App.css";

const App = () => {
  const [name, setName] = useState('');
  const [grade, setGrade] = useState(0);
  const [comment, setComment] = useState('');
  const [feedbacks, setFeedbacks] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();
    const newFeedback = { name, grade, comment };
    setFeedbacks([...feedbacks, newFeedback]);
    setName('');
    setGrade('');
    setComment('');
  };

  return (
    <div className="app-container">
      <h1 className="title">Student Feedback App</h1>
      <form onSubmit={handleSubmit} className="feedback-form">

        <label className="form-label">Имя:</label>
        <input
          type="text"
          placeholder='Напишите Имя'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-name"
        />
        
        <label className="form-label">Оценка (1–5):</label>
        <input
          type="number"
          min="1"
          max="5"
          value={grade}
          onChange={(e) => setGrade(Number(e.target.value))}
          className="input-grade"
        />

        <label className="form-label">Отзыв:</label>
        <textarea
          placeholder='Отзыв'
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="input-comment"
        ></textarea>

        <button type="submit" className="submit-button">Добавить</button>
      </form>

      <h2 className="subtitle">ОТЗЫВЫ</h2>
      <div className="feedback-list">
        {feedbacks.map((fb, index) => (
          <div key={index} className="feedback-item">
            <p><strong>Имя:</strong> {fb.name}</p>
            <p><strong>Оценка:</strong> {fb.grade}</p>
            <p><strong>Отзыв:</strong> {fb.comment}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;