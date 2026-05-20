import React from 'react';

export const LineIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width={props.width || 27} height={props.height || 2} viewBox="0 0 27 2" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1H26" stroke={props.color || '#5939F5'} strokeLinecap="round" />
    </svg>
);
