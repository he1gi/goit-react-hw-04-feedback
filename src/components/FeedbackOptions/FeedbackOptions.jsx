import PropTypes from 'prop-types';
import { Btn, Wrapper } from './FeedbackOptions.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  const keys = Object.keys(options);

  return (
    <Wrapper>
      {keys.map(key => (
        <Btn type="button" key={key} name={key} onClick={onLeaveFeedback}>
          {key.toUpperCase()}
        </Btn>
      ))}
    </Wrapper>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.shape(PropTypes.number.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
