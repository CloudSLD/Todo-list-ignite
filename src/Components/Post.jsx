import styles from './Post.module.css'
import { BsCircle, BsBackspaceFill  } from "react-icons/bs";








// eslint-disable-next-line react/prop-types
export function Post({ inputValue, removeTask, })  {


    const handleDeleteComment = () => {
        removeTask(inputValue);
      };

        

    return (
        <div>

            <div className={styles.post}>

            <button className={styles.btn1}> <BsCircle/> </button>

            <p >{inputValue}</p>

            <button onClick={handleDeleteComment} className={styles.btn2}><BsBackspaceFill /></button>
            </div>

        </div>

    )
}