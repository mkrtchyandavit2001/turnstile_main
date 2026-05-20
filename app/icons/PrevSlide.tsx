import React from 'react';

export const PrevSlideIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width={props.width || 20} height={props.height || 36} viewBox="0 0 20 36" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M18 2L2 18L18 34" stroke={props.color || "#0E0449"} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
</svg>

);


