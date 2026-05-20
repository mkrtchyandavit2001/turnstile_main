import React from 'react';

export const BottomArrowIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width={props.width || 12} height={props.height || 6} viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.928 0.818248L5.92798 5.18188L0.927979 0.818248" stroke={props.color || '#fff'} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
  
);


