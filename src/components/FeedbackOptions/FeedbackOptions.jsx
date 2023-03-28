import PropTypes from 'prop-types';
export const FeedbackOptions = ({ options }) => {
  return (
    <ul>
      {options.map(name => (
        <button type="button" key={name}>
          {name}
        </button>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  //onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
