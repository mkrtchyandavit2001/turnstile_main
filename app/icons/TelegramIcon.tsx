import React from 'react';

export const TelegramIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width={props.width || 27} height={props.height || 23} viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.25719 9.58242L25.2018 0.609815C26.3131 0.219615 27.2838 0.873302 26.9237 2.50651L26.9257 2.5045L22.8487 21.1718C22.5466 22.4953 21.7374 22.8171 20.6053 22.1935L14.3967 17.7465L11.4021 20.5503C11.071 20.8721 10.7916 21.1436 10.15 21.1436L10.5908 15.003L22.0975 4.90001C22.5983 4.4716 21.9857 4.23024 21.3255 4.65664L7.10572 13.3577L0.975734 11.4992C-0.354982 11.0889 -0.383955 10.2059 1.25719 9.58242Z" fill={props.color || "white"} />
  </svg>
  

);
