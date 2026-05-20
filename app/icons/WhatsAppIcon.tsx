import React from 'react';

export const WhatsAppIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width={props.width || 61} height={props.height || 61} viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_464_2120)">
      <path d="M30.5034 17H30.4966C23.0531 17 17 23.0547 17 30.5C17 33.4531 17.9518 36.1903 19.5701 38.4127L17.8876 43.4279L23.0767 41.7691C25.2114 43.1833 27.7578 44 30.5034 44C37.9469 44 44 37.9436 44 30.5C44 23.0564 37.9469 17 30.5034 17Z" fill={props.color || "white"} />
      <path d="M38.3589 36.0637C38.0332 36.9834 36.7406 37.7461 35.7095 37.9689C35.0042 38.1191 34.0828 38.2389 30.9812 36.953C27.0139 35.3094 24.459 31.2779 24.2599 31.0164C24.0692 30.7548 22.6567 28.8817 22.6567 26.9444C22.6567 25.0072 23.6406 24.0639 24.0371 23.6589C24.3628 23.3264 24.9011 23.1746 25.4175 23.1746C25.5846 23.1746 25.7347 23.183 25.8697 23.1897C26.2663 23.2066 26.4654 23.2302 26.727 23.8563C27.0527 24.641 27.8458 26.5782 27.9403 26.7774C28.0365 26.9765 28.1327 27.2465 27.9977 27.5081C27.8711 27.7781 27.7597 27.8979 27.5606 28.1274C27.3615 28.3569 27.1725 28.5324 26.9734 28.7787C26.7911 28.9931 26.5852 29.2226 26.8147 29.6191C27.0442 30.0072 27.8374 31.3016 29.0051 32.3411C30.5121 33.6826 31.7338 34.1112 32.1709 34.2935C32.4965 34.4285 32.8847 34.3964 33.1226 34.1433C33.4247 33.8176 33.7976 33.2776 34.1773 32.7461C34.4473 32.3647 34.7882 32.3174 35.1459 32.4524C35.5104 32.579 37.4392 33.5324 37.8358 33.7299C38.2324 33.929 38.4939 34.0235 38.5901 34.1906C38.6846 34.3576 38.6846 35.1423 38.3589 36.0637Z" fill="#4CAF50" />
    </g>
    <defs>
      <filter id="filter0_d_464_2120" x="0.299999" y="0.299999" width="60.4" height="60.4" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset />
        <feGaussianBlur stdDeviation="8.35" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_464_2120" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_464_2120" result="shape" />
      </filter>
    </defs>
  </svg>
  

);
