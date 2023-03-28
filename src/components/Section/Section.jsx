import { Title } from './Section.styled';
import PropTypes from 'prop-types';
const Section = ({ title, children }) => {
  return (
    <Title>
      <>{title}</>
      {children}
    </Title>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};
export default Section;