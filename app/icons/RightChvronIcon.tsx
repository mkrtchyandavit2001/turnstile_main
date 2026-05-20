import React from 'react';

export const RightChvronIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width={props.width || 6} height={props.height || 11} viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.5 0.5L5.5 5.5L0.5 10.5" stroke={props.color || "#5939F5"} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
  
);
