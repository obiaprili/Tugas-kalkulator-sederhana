"use client"; // Menandai file ini sebagai komponen klien

import React, { useState } from 'react';
import Calculator from './Calculator'; // Pastikan ini sesuai dengan lokasi file

const Page = () => {
    return (
        <div>
            <Calculator />
        </div>
    );
};

export default Page;