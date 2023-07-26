import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';

export default function CarValue() {
  const totalCost = useSelector(({ cars: { data, searchTerm } }) => {
    return data
      .filter((car) => {
        return car.name.toLowerCase().includes(searchTerm.toLowerCase());
      })
      .reduce((acc, car) => acc + car.cost, 0);
  });

  return <div className='car-value'>Total Cost:${totalCost}</div>;
}
