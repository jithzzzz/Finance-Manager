// import logo from './logo.svg';
import FinanceDashboard from './DashBoard/index';
import SignIn from './Aouth/SignIn';
import SignUp from './Aouth/SignUp';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
/**
 * @return {function} index page from Dashboard file
 */
function App() {
  return (
    <ChakraProvider>
      <SignIn/>
    </ChakraProvider>
  );
}

export default App;
