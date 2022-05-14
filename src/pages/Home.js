import React from 'react'
import { useSelector } from 'react-redux'
import CityWeather from '../components/CityWeather';
export default function Home() {

  const cities = useSelector(store => store.cities);
  return (
    <div>{cities.length}</div>
  )
}
