"use client";
import Footer from './components/footer';
import Topbar from './components/topbar';
import React, { useRef } from 'react';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const contactRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <Topbar contactRef={contactRef} />
      {children}
      <Footer contactRef={contactRef}/>
    </>
  );
}
