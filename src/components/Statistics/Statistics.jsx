import PropTypes from 'prop-types';
import { StatisticItem } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <ul>
        <StatisticItem>Good: {good}</StatisticItem>
        <StatisticItem>Neutral: {neutral}</StatisticItem>
        <StatisticItem>Bad: {bad}</StatisticItem>
        <StatisticItem>Total: {total}</StatisticItem>
        {good ? <StatisticItem>Positive feedback: {positivePercentage}</StatisticItem> : null}
   </ul>
)

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.node.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,    
  ]),
 
};