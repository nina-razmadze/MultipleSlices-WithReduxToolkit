import React from 'react';
import CarList from './components/CarList';
import CarSeacrh from './components/CarSearch';
import CarValue from './components/CarValue';
import CarForm from './components/CarForm';

export default function App() {
  return (
    <div className='container is-fluid'>
      <CarForm />
      <CarSeacrh />
      <CarList />
      <CarValue />
    </div>
  );
}
