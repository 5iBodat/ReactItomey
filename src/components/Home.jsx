import React, { useState, useContext } from 'react';

import { useNavigate } from 'react-router-dom';

import { hasilContext } from '../App';
const Home = () => {
  const initial = {
    arr: ''
  }
  const { setHasil } = useContext(hasilContext)

  const navigate = useNavigate();

  const [nilai, setNilai] = useState(initial)


  const handleInputChange = (e) => {
    setNilai({
      ...nilai,
      [e.target.name]: e.target.value
    })
  }


  const handleHasil = (e) => {
    e.preventDefault();

    const dataBody = {
      arr: nilai.arr
    }
    fetch('http://localhost:5000/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataBody)
    })
      .then(res => res.json())
      .then(values => setHasil({ acak: nilai.arr, sort: values.values }))
    navigate('/hasil')
  }
  return (
    <>
      <form onSubmit={handleHasil}>
        <div className='label'>Masukkan Nilai 0-9</div>
        <input
          type="text"
          value={nilai.arr}
          placeholder="Masukkan angka dari 0-9"
          className='input'
          name='arr'
          onChange={handleInputChange}
        />
        <button className='btn-submit' type='submit'>Hasil</button>
      </form>
    </>
  );
}

export default Home;
