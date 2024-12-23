"use client"; // Menandai file ini sebagai komponen klien

import React, { useState, useEffect } from 'react';

const Calculator = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [operation, setOperation] = useState('add');
    const [result, setResult] = useState('');

    const calculate = () => {
        let res;
        const number1 = parseFloat(num1);
        const number2 = parseFloat(num2);

        switch (operation) {
            case 'add':
                res = number1 + number2;
                break;
            case 'subtract':
                res = number1 - number2;
                break;
            case 'multiply':
                res = number1 * number2;
                break;
            case 'divide':
                res = number2 !== 0 ? number1 / number2 : 'Tidak bisa membagi dengan nol';
                break;
            default:
                res = 'Operasi tidak valid';
        }

        setResult(res);
    };

    return (
        <div className="container">
            <h1>Kalkulator Sederhana</h1>
            <input
                type="number"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
                placeholder="Angka Pertama"
            />
            <input
                type="number"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
                placeholder="Angka Kedua"
            />
            <select value={operation} onChange={(e) => setOperation(e.target.value)}>
                <option value="add">Tambah</option>
                <option value="subtract">Kurang</option>
                <option value="multiply">Kali</option>
                <option value="divide">Bagi</option>
            </select>
            <button onClick={calculate}>Hitung</button>
            <h2>Hasil: {result}</h2>
        </div>
    );
};

export default Calculator;