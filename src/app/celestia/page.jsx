'use client';

import FloorPlan from "./../../components/Floorplan";
import React, { useEffect, useState } from 'react';


export default function Celestia() {
  return (
    <div className="w-full h-full relative overflow-hidden">
      {/* Spacer to push content below fixed navbar */}
      <div className="h-[80px] shrink-0" />
      <main className="flex-1 min-h-[calc(100vh-80px)] w-full">
        <FloorPlan />
        
      </main>
    </div>
  );
}
