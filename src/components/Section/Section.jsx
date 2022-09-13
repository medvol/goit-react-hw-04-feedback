import PropTypes from 'prop-types';
import { PanelTitle } from './Section.styled';

export const Panel = ({ title, children }) => (
  <section>
    <PanelTitle>{title}</PanelTitle>
    {children}
  </section>
);

Panel.propTypes = {
  title: PropTypes.string.isRequired,
  children:  PropTypes.node.isRequired, 
};