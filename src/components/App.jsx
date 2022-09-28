import {useState} from "react";
import { Panel } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Box } from "./Box";


export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = { good, neutral, bad };

   const onLeaveFeedback = event => {
     const value = event.target.dataset.name;
     switch (value) {
       case 'good':
         setGood(prev => prev + 1);
         break;
       case 'neutral':
         setNeutral(prev => prev + 1);
         break;
       case 'bad':
         setBad(prev => prev + 1);
         break;
       default:
         return;
    }    
  }

  const countTotalFeedback = () => {
    return Object.values(options).reduce((total, number) => total += number, 0);
  }

  const countPositiveFeedbackPercentage = (total) => {
    const percentage = Math.round((good / total)*100);
    return percentage
  }

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage(total);

 return (
      <Box width="30%" mt={3} mb={3} ml={6}
        p={ 4} bg='white' borderRadius='normal'
        boxShadow='card'>
          <Panel title="Please leave feedback">
             <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback}/>
          </Panel>
          <Panel title="Statistics">
              <Statistics good={good} 
                  neutral={neutral}
                  bad={bad} 
                  total={total} 
                  positivePercentage={`${positivePercentage}%`}>
              </Statistics>
          </Panel>
      </Box>
    
    )
}
