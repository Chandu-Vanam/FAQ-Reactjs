import {useState} from "react";
import './Question.css'

const Question = (props) => {
    const [icon,setIcon] = useState(false);

    const isOpen = () =>{
        setIcon(!icon);
    }
    return(
        <div className="inner-container" key={props.id}> 
            <div className="ques" onClick={isOpen}>
                <h4><span>{props.question}</span><span className="btn" >{icon?'-':'+'}</span></h4>
            </div>
            {icon && 
            <div className="answer-para" >
            <p>{props.answer}</p>
            </div>
            }
        </div>
    )
}

export default Question;