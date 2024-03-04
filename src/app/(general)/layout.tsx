"use client";
import Footer from './components/footer';
import Topbar from './components/topbar';
import React, { useRef } from 'react';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Topbar  />
      {children}
      <Footer/>
    </>
  );
}
