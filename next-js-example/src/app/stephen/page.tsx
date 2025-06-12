'use client';

import {useState} from 'react';

import DeleteableHeader from '@/app/ui/DeleteableHeader';

const Stephen = () => {


  return (
    <>
      <p className="blue">Stephen is a software engineer.</p>
    <div>
      <DeleteableHeader>Stephen</DeleteableHeader>
      <p>Stephen is a software engineer.</p>
      <p id="green" className="blue">Stephen is a software engineer.</p>
      <p className="blue">Stephen is a software engineer.</p>
      <p id="green">Stephen is a software engineer.</p>
    </div>
    </>
  );
}

export default Stephen;