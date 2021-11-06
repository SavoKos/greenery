import styled, { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    green: '#50ba64',
    border: '#dbece2',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
