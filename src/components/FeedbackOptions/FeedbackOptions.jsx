import PropTypes from 'prop-types';
import { FeedbackOptionsItem, FeedbackButton } from './FeedbackOptions.styled';
import { Box } from 'components/Box';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <Box display='flex' alignItems='center' gap={2} as='ul'>
            {Object.keys(options)
                .map(key => (
                    <FeedbackOptionsItem key = {key}>
                        <FeedbackButton type="button" onClick={onLeaveFeedback} data-name={key}>{key}</FeedbackButton>
                    </FeedbackOptionsItem>))}
        </Box>
    )
    
} 

FeedbackOptions.propTypes = {
  options: PropTypes.exact ({
        good: PropTypes.number.isRequired,   
        neutral: PropTypes.number.isRequired,   
        bad: PropTypes.number.isRequired,          
                
        }),  
 
};