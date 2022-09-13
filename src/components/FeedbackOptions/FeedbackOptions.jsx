import PropTypes from 'prop-types';
import { FeedbackList, FeedbackButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <FeedbackList>
            {Object.keys(options)
                .map(key => (
                    <li key = {key}>
                        <FeedbackButton type="button" onClick={onLeaveFeedback}>{key}</FeedbackButton>
                    </li>))}
        </FeedbackList>
    )
    
} 

FeedbackOptions.propTypes = {
  options: PropTypes.exact ({
        good: PropTypes.number.isRequired,   
        neutral: PropTypes.number.isRequired,   
        bad: PropTypes.number.isRequired,          
                
        }),  
 
};