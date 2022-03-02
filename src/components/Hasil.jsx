import React, { useContext } from 'react';

import { hasilContext } from '../App';

const Hasil = (props) => {
    console.log(props)
    const { hasil } = useContext(hasilContext);
    return (
        <>
            <h1>hasil sort dari adalah {hasil.acak} adalah {hasil.sort}</h1>
        </>
    );
}

export default Hasil;
