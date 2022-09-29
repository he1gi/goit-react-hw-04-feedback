import PropTypes from 'prop-types';
import { Wrap, Title } from './Section.styled';

export default function Section({ title, children }) {
  return (
    <Wrap>
      {title ? <Title>{title}</Title> : null}
      {children}
    </Wrap>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
