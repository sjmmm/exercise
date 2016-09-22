import React, { Component, PropTypes } from 'react';
import Tabs from './Tabs/Tabs';
import MainLayout from '../layouts/MainLayout/MainLayout';

const App = ({ location }) => {
  return (
    <MainLayout>
      <Tabs location={location} />
    </MainLayout>
  );
};

App.propTypes = {
};

export default App;
