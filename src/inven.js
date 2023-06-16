import {useState, useEffect, useContext} from 'react';
import {Context1} from './App.js';

function Inven(){
    let {inven} = useContext(Context1)
    return (
        <div>{inven}</div>
    )
}

export default Inven;