import PropTypes from 'prop-types';
import { PanelTitle } from './Section.styled';
import { Box } from 'components/Box';

export const Panel = ({ title, children }) => (
  <Box pb={4}>
    <PanelTitle>{title}</PanelTitle>
    {children}
  </Box>
);

Panel.propTypes = {
  title: PropTypes.string.isRequired,
  children:  PropTypes.node.isRequired, 
};