import './global.module.css'
import styles from './app.module.css'
import { BsPlusCircle } from "react-icons/bs";
import {Post} from './Components/Post'
import todoLogo from './assets/fogute.svg'
import  { useState } from 'react';






export function App(){

  const [inputValue, setInputValue] = useState('');
  const [tarefas, setTarefas] = useState([]);
  const [totalPosts, setTotalPosts] = useState(0);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTarefas([...tarefas, inputValue]);
    setInputValue('');
    setTotalPosts(totalPosts + 1); // Atualiza a contagem total de posts
  };

  const removeTask = (taskToDelete) => {
    const tarefasWithoutDeletedOne = tarefas.filter(tarefa => tarefa !== taskToDelete);
    setTarefas(tarefasWithoutDeletedOne);
    setTotalPosts(totalPosts - 1); // Atualiza a contagem total de posts
  };

  // Restante do código



  
  return (
    <div className={styles.container} >
    <header>
    <img src={todoLogo}  />
    <h1 className={styles.to}>to</h1>

    <h1 className={styles.do} >do</h1>
    </header>

    <main>
      
      <div  className={styles.search}>
        <form onSubmit={handleSubmit} >
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button>  Criar <BsPlusCircle size={16}/> </button>
        </form>
        
      </div>


      <div className={styles.content}>

        <div className={styles.title}>
          <div>
            <h3>Tarefas</h3>
            <span className={styles.number}> {totalPosts}</span>
          </div>
          <div>
            <h3>Concluidas</h3>
            <span  className={styles.number}>0</span>
          </div>
        </div>

        <div className={styles.post}>

        {tarefas.map((tarefa, index) => (
          <Post key={index} inputValue={tarefa} removeTask={removeTask} totalPosts={totalPosts} />      ))}

        







        </div>


        


      </div>
    </main>

    </div>
    
  )
}