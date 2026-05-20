import React from 'react';

export const FbIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width={props.width || 11} height={props.height || 20} viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.05085 20V10.8777H10.1159L10.5757 7.32156H7.05085V5.05147C7.05085 4.0222 7.3359 3.32076 8.81562 3.32076L10.6998 3.31999V0.13923C10.374 0.0969453 9.25546 0 7.95363 0C5.23522 0 3.37414 1.65697 3.37414 4.69927V7.32156H0.299805V10.8777H3.37414V20H7.05085Z" fill={props.color || "white"} />
    </svg>

);
