'use client'
import React, { useState } from 'react';

export default function Signal() {
  return (
    <section className='flex gap-3 p-2'>
    <button className='bg-red-400 w-4 h-4 rounded-2xl'></button>
    <button className='bg-yellow-400 w-4 h-4 rounded-2xl'></button>
    <button className='bg-green-400 w-4 h-4 rounded-2xl'></button>
    </section>
  );
}