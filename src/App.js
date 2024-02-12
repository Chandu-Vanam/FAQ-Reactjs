import './App.css';
import Question from './components/Question.js';

const questions = [
{
  id:1,
  ques:'What is Netflix?',
  answer:'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price.'
},
{
  id:2,
  ques:'How much does Netflix cost?',
  answer:'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.'
},
{
  id:3,
  ques:'How do I cancel?',
  answer:'Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.'
}
]
// const questions = ['What is Netflix?','How much does Netflix cost?','How do I cancel?'];

// const answers = ['Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price.','Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.','Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.'];

function App() {
  return (
    <div className="App">
      <h1>FAQ - Accordian</h1>
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        {/* <Question question= {questions[0]} answer = {answers[0]}/>
        <Question question= {questions[1]} answer = {answers[1]}/>
        <Question question= {questions[2]} answer = {answers[2]}/> */}

        {questions.map((element)=>{
            return <Question key={element.id} question= {element.ques} answer= {element.answer}/>
          })
        }
      </div>
    </div>
  );
}

export default App;
