import PropTypes from 'prop-types';
import { Item, ItemBlock } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ItemBlock>
      <Item>{good}</Item>
      <Item>{neutral}</Item>
      <Item>{bad}</Item>
      <Item>{total}</Item>
      <Item>{positivePercentage}</Item>
    </ItemBlock>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
