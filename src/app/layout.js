// src/app/layout.js
"use client"; // Menandai file ini sebagai komponen klien

import React from 'react';
import './styles.css'; // Mengimpor CSS
import Calculator from './Calculator'; // Mengimpor komponen kalkulator

const Layout = () => {
    return (
        <html lang="en"> {/* Menambahkan tag html */}
            <head>
                <title>Kalkulator Sederhana</title> {/* Menambahkan judul */}
            </head>
            <body> {/* Menambahkan tag body */}
                <Calculator />
            </body>
        </html>
    );
};

export default Layout;