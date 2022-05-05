import React from 'react';
import PropTypes from 'prop-types';

const SupportIcon = ({ width = '100%', height = '100%', page }) => {
  if (page === 'patterns-landing') {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle r="40" transform="matrix(-1 0 0 1 40 40)" fill="#FCF9F7" />
        <path
          d="M38.7997 14.8002C35.9197 16.7202 32.2664 20.6669 30.7997 22.4002C27.4604 26.0003 27.9997 29.2001 25.9997 34.0001C23.9997 38.8001 17.9997 42.0001 18.3997 52.0001C18.7997 62.0001 23.1997 65.6001 29.1997 68.0001C35.1997 70.4001 43.9997 69.2001 51.1997 62.4001C58.3997 55.6001 60.7997 44.4001 61.1997 39.6001C61.5997 34.8001 60.3997 28.0001 57.5997 22.4002C54.7997 16.8003 51.1997 13.6002 47.9997 12.4002C44.7997 11.2002 42.3997 12.4002 38.7997 14.8002Z"
          fill="#FFFFC5"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.914 54.6373L57.8209 58.1171L57.6946 57.2824L21.0277 53.8252L20.914 54.6373ZM21.4773 50.6141L57.1953 53.9818L57.069 53.1471L21.591 49.802L21.4773 50.6141Z"
          fill="#435570"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.4775 40.1843C16.9296 40.4092 15.568 41.742 15.4459 43.5008L15.2015 46.0736L15.2008 46.0825C15.0848 47.6709 16.0516 49.2895 17.5615 49.8257L17.6425 48.9728C16.6182 48.5023 15.9323 47.3382 16.0175 46.1465L16.2621 43.5729L16.2629 43.5619C16.3508 42.2661 17.3055 41.2834 18.397 41.0325L18.4775 40.1843ZM21.6962 50.3245L51.3131 53.2223C53.2958 53.5142 54.9398 52.0091 55.0776 49.8833L55.322 47.3113L55.3227 47.3024C55.3728 46.6165 55.2209 45.9249 54.9106 45.3173C54.6657 45.4392 54.4068 45.5361 54.1384 45.6059C54.4083 46.0935 54.5471 46.6627 54.506 47.2383L54.2609 49.8184L54.2605 49.8249C54.1507 51.5589 52.863 52.627 51.4242 52.4106L51.4137 52.409L21.8099 49.5124L21.6962 50.3245ZM22.9526 41.3519L47.6272 43.7662C47.357 43.5052 47.128 43.2048 46.9458 42.8763L23.0663 40.5399L22.9526 41.3519Z"
          fill="#435570"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.729 37.8293L16.2523 63.8958C16.1606 64.396 16.3739 64.8335 16.7137 65.1264C17.0521 65.4182 17.5246 65.5809 18.0179 65.5809C18.8539 65.5809 19.5859 65.0764 19.7749 64.3242L19.7803 64.3029L23.4307 38.2328C23.1528 38.2092 22.8802 38.1859 22.6132 38.1631L18.9755 64.1432C18.884 64.466 18.5319 64.7617 18.0179 64.7617C17.6955 64.7617 17.4201 64.6539 17.2486 64.506C17.0836 64.3638 17.0262 64.2014 17.0598 64.0346L17.064 64.0137L19.5452 37.8998C19.2588 37.8751 18.9863 37.8516 18.729 37.8293Z"
          fill="#435570"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M54.7725 18.8306C55.2682 17.3345 56.9501 16.4669 58.6206 16.9544L61.5081 17.9013L61.5142 17.9031C63.1213 18.3752 63.882 20.041 63.3883 21.7197L58.5356 35.6208C58.6192 35.5906 58.7022 35.5603 58.7844 35.5298C59.0439 35.4336 59.2953 35.3366 59.5366 35.2407L64.1684 21.972L64.1711 21.9628C64.7741 19.9314 63.8703 17.7457 61.7505 17.1191L58.8627 16.1722L58.8566 16.1704C56.7958 15.565 54.6429 16.6215 53.9957 18.569L47.7551 36.4463C48.0461 36.4668 48.3288 36.4866 48.6027 36.5054L54.7705 18.8368L54.7725 18.8306ZM46.4896 40.0715L46.4516 40.1803L46.4489 40.1896C45.8389 42.2447 46.9055 44.3892 48.8636 45.0313L51.7573 45.9802L51.7635 45.982C53.104 46.3758 54.4835 46.0664 55.4621 45.2659L55.3114 44.2695C54.5556 45.1529 53.2742 45.57 51.9995 45.1979L49.118 44.2531C47.6137 43.7598 46.7448 42.0897 47.2318 40.4326L47.3371 40.1308C47.0609 40.1117 46.7782 40.092 46.4896 40.0715Z"
          fill="#435570"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M58.581 39.4843C58.8549 39.3926 59.1206 39.298 59.3767 39.2021L61.7728 63.8394C61.8697 64.3357 61.6375 64.7602 61.2933 65.0348C60.9496 65.3091 60.474 65.4594 59.9804 65.4594C59.5623 65.4594 59.1643 65.3446 58.8595 65.1287C58.5609 64.9172 58.3353 64.5923 58.3232 64.1902L54.719 40.367C54.9917 40.3366 55.2625 40.2988 55.5305 40.2548L59.1418 64.1252V64.156C59.1418 64.2488 59.1894 64.3585 59.333 64.4602C59.479 64.5636 59.7051 64.6402 59.9804 64.6402C60.3189 64.6402 60.606 64.5352 60.7824 64.3945C60.9523 64.2588 60.9954 64.1186 60.967 63.9875L60.9619 63.9641L58.581 39.4843Z"
          fill="#435570"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.4613 34.9545C15.3294 35.116 15.2318 35.3759 15.2318 35.7348C15.2318 36.0937 15.3294 36.3536 15.4613 36.5151C15.5873 36.6694 15.7627 36.7588 15.9925 36.7588H16.0104L16.0283 36.7604L15.9925 37.1684C16.0283 36.7604 16.0281 36.7604 16.0283 36.7604L16.396 36.7926C16.6362 36.8136 16.9891 36.8444 17.4399 36.8835C18.3414 36.9619 19.6345 37.0739 21.2005 37.2083C24.3326 37.4771 28.5561 37.8354 32.922 38.1938C41.6679 38.9116 50.9474 39.626 53.2076 39.626C57.2549 39.626 61.2198 37.5379 62.3686 36.9329C62.4703 36.8793 62.55 36.8374 62.6057 36.8096C62.9629 36.5906 63.1982 36.4422 63.3559 36.2766C63.491 36.1348 63.5647 35.9839 63.5647 35.7348C63.5647 35.4123 63.4322 35.1314 63.2463 34.9637C63.0699 34.8044 62.8444 34.7415 62.5882 34.8312C62.4597 34.8762 62.2195 34.9828 61.8726 35.1369C61.7202 35.2046 61.5471 35.2814 61.354 35.3662C60.738 35.6365 59.9508 35.9716 59.0698 36.2981C57.3173 36.9475 55.155 37.578 53.2076 37.578C51.372 37.578 42.0426 36.8587 33.2065 36.1431C28.7809 35.7846 24.4687 35.4262 21.263 35.1574C19.6601 35.023 18.3338 34.9109 17.4082 34.8325L15.9767 34.7109C15.7547 34.715 15.5844 34.8037 15.4613 34.9545ZM15.9925 34.3012L16.0273 33.8931L16.0099 33.8916H15.9925C15.5201 33.8916 15.1104 34.0889 14.8267 34.4364C14.549 34.7766 14.4126 35.2336 14.4126 35.7348C14.4126 36.236 14.549 36.693 14.8267 37.0332C15.1065 37.376 15.509 37.5726 15.9733 37.5779L16.3246 37.6087C16.5649 37.6297 16.918 37.6605 17.3689 37.6997C18.2707 37.7781 19.5642 37.8901 21.1305 38.0245C24.2632 38.2933 28.4877 38.6518 32.855 39.0102C41.5757 39.726 50.9038 40.4452 53.2076 40.4452C57.4885 40.4452 61.6568 38.2374 62.758 37.6542C62.8611 37.5996 62.9373 37.5592 62.9842 37.5362L63.0015 37.5278L63.0479 37.4994C63.3745 37.2994 63.7068 37.096 63.9491 36.8416C64.2235 36.5534 64.3839 36.2025 64.3839 35.7348C64.3839 35.1972 64.1653 34.6895 63.7952 34.3555C63.4159 34.0131 62.8806 33.8609 62.3176 34.058C62.1557 34.1146 61.8631 34.2446 61.4906 34.4101C61.3463 34.4741 61.1901 34.5435 61.0248 34.616C60.4156 34.8834 59.6448 35.2113 58.7851 35.5299C57.056 36.1707 55.0052 36.7588 53.2076 36.7588C51.4154 36.7588 42.1372 36.0445 33.2727 35.3265C28.848 34.9682 24.5367 34.6098 21.3314 34.341C19.7288 34.2066 18.4027 34.0947 17.4773 34.0163L16.0273 33.8931C16.0271 33.8931 16.0273 33.8931 15.9925 34.3012Z"
          fill="#435570"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M49.1806 14.52C49.495 14.7156 49.6098 15.0913 49.4891 15.4533C48.447 18.6318 46.88 20.7158 45.5629 22.0086C44.905 22.6544 44.3107 23.1017 43.8771 23.3892C43.6603 23.533 43.4836 23.637 43.3591 23.7059C43.2968 23.7404 43.2476 23.7661 43.2129 23.7836C43.1955 23.7924 43.1818 23.7992 43.1719 23.804L43.16 23.8097L43.1562 23.8115L43.1549 23.8121L43.1544 23.8124C43.1541 23.8125 43.1539 23.8126 42.9815 23.4411L43.1539 23.8126C43.0546 23.8587 42.9409 23.8631 42.8383 23.8248L41.3094 23.2544L41.3473 23.5181C41.35 23.5374 41.3514 23.5568 41.3514 23.5763C41.3514 24.0774 41.1777 24.6328 40.6243 24.9999C39.3912 25.8178 36.4976 27.6018 33.4509 28.5662C33.4458 28.5678 33.4408 28.5693 33.4357 28.5707C31.4303 29.1211 29.2923 29.371 27.4449 29.0529C25.5881 28.7332 23.9858 27.8288 23.1651 26.0474L23.1603 26.0367C22.6453 24.8288 22.6574 23.7433 22.982 22.8004C23.3026 21.869 23.9182 21.1045 24.5675 20.5027C25.2181 19.8998 25.9214 19.4431 26.4446 19.1321C26.6252 19.0248 26.7907 18.9311 26.9209 18.8575C26.9768 18.8258 27.0263 18.7979 27.0675 18.7741C27.1096 18.7499 27.1408 18.7314 27.1633 18.7176C27.2155 18.6538 27.2866 18.6061 27.3685 18.5829C27.511 18.5424 27.6643 18.5821 27.7693 18.6865C27.8871 18.8038 27.9111 18.9612 27.8792 19.0862C27.8749 19.1031 27.8697 19.1189 27.8641 19.1336L27.6039 20.2208L29.206 18.3081C29.2139 18.2986 29.2223 18.2894 29.2311 18.2807C29.3913 18.1213 29.5678 17.9856 29.7793 17.8921C29.9925 17.7978 30.2203 17.7557 30.4718 17.7557C30.9598 17.7557 31.7055 17.7898 32.6593 17.8335C33.0567 17.8517 33.4903 17.8716 33.9565 17.8913C35.5511 17.9588 37.5504 18.0262 39.854 18.0262C43.7856 18.0262 46.6821 15.9385 48.1457 14.6148C48.1608 14.6011 48.177 14.5886 48.194 14.5773C48.5017 14.3732 48.8805 14.3334 49.1806 14.52ZM26.8519 19.843C26.3527 20.1404 25.71 20.5608 25.1243 21.1036C24.5328 21.6517 24.0181 22.3075 23.7566 23.0671C23.4995 23.8139 23.4772 24.6881 23.9116 25.71C24.5874 27.1719 25.9074 27.9569 27.5839 28.2456C29.2695 28.5358 31.2757 28.3132 33.2112 27.7828C36.1446 26.8528 38.9582 25.122 40.1715 24.3172C40.4262 24.1483 40.5263 23.902 40.532 23.6038L40.4004 22.6876C40.3799 22.5445 40.4363 22.4011 40.5489 22.3104C40.6615 22.2197 40.8136 22.1951 40.949 22.2456L42.9541 22.9937C42.9569 22.9922 42.9596 22.9907 42.9624 22.9891C43.0689 22.9302 43.2268 22.8375 43.4243 22.7066C43.8193 22.4446 44.3722 22.0295 44.9891 21.424C46.2167 20.2189 47.7022 18.2553 48.6997 15.2314C48.6903 15.2352 48.6797 15.2403 48.668 15.2469C47.1309 16.6306 44.056 18.8454 39.854 18.8454C37.5345 18.8454 35.5226 18.7775 33.9218 18.7098C33.4396 18.6893 32.9968 18.6691 32.5951 18.6507C31.6551 18.6076 30.94 18.5749 30.4718 18.5749C30.3154 18.5749 30.2033 18.6003 30.1106 18.6413C30.0197 18.6815 29.9278 18.7453 29.8215 18.8491L27.1145 22.0807C26.9925 22.2264 26.7862 22.2691 26.6164 22.1836C26.4466 22.0982 26.3579 21.9072 26.4022 21.7224L26.8519 19.843Z"
          fill="#435570"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M43.2186 20.0256C43.3118 20.2317 43.2202 20.4744 43.0141 20.5676C40.7216 21.6043 38.9455 21.95 37.071 22.2066C36.7054 22.2567 36.3371 22.3033 35.961 22.3508C34.4141 22.5465 32.7358 22.7589 30.5706 23.2974C27.9256 23.9553 25.4602 25.4422 23.644 26.7807C22.7388 27.4478 22.0011 28.0733 21.4905 28.5314C21.2352 28.7603 21.037 28.9472 20.9032 29.0762C20.8362 29.1407 20.7855 29.1907 20.7517 29.2242L20.7141 29.262L20.705 29.2711L20.703 29.2732C20.703 29.2732 20.703 29.2732 20.703 29.2732C20.545 29.435 20.2853 29.4385 20.1234 29.2804C19.9616 29.1224 19.9585 28.8631 20.1165 28.7012L20.3861 28.9644C20.1165 28.7012 20.1164 28.7013 20.1165 28.7012L20.1179 28.6998L20.1209 28.6968L20.132 28.6855C20.1416 28.6758 20.1556 28.6617 20.174 28.6435C20.2106 28.607 20.2645 28.554 20.3346 28.4864C20.4748 28.3512 20.6803 28.1576 20.9434 27.9215C21.4696 27.4496 22.2276 26.8068 23.158 26.1212C25.0131 24.7541 27.5788 23.1973 30.3728 22.5024C32.5892 21.9512 34.3219 21.7321 35.8726 21.5361C36.2441 21.4892 36.6052 21.4435 36.9599 21.395C38.7907 21.1443 40.482 20.8136 42.6766 19.8212C42.8827 19.7279 43.1253 19.8195 43.2186 20.0256Z"
          fill="#435570"
        />
      </svg>
    );
  }
  if (page === 'patterns-section') {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 76 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle r="38" transform="matrix(-1 0 0 1 38 38)" fill="white" />
        <path
          d="M36.8597 14.0602C34.1237 15.8842 30.653 19.6336 29.2597 21.2802C26.0874 24.7003 26.5997 27.7402 24.6997 32.3002C22.7997 36.8602 17.0997 39.9002 17.4797 49.4002C17.8597 58.9002 22.0397 62.3202 27.7397 64.6002C33.4397 66.8802 41.7997 65.7402 48.6397 59.2802C55.4797 52.8202 57.7597 42.1802 58.1397 37.6202C58.5197 33.0602 57.3797 26.6002 54.7197 21.2802C52.0597 15.9603 48.6397 12.9202 45.5997 11.7802C42.5597 10.6402 40.2797 11.7802 36.8597 14.0602Z"
          fill="#FFFFC5"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.8683 51.9054L54.9299 55.2113L54.8099 54.4183L19.9763 51.134L19.8683 51.9054ZM20.4035 48.0834L54.3355 51.2827L54.2155 50.4897L20.5115 47.3119L20.4035 48.0834Z"
          fill="#435570"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.5537 38.1748C16.0831 38.3884 14.7897 39.6546 14.6737 41.3254L14.4414 43.7696L14.4408 43.7781C14.3306 45.287 15.2491 46.8247 16.6834 47.3341L16.7604 46.5239C15.7874 46.0769 15.1357 44.971 15.2167 43.8389L15.4491 41.394L15.4498 41.3835C15.5333 40.1525 16.4403 39.2189 17.4771 38.9806L17.5537 38.1748ZM20.6115 47.808L48.7475 50.5609C50.6311 50.8381 52.1928 49.4084 52.3238 47.3888L52.556 44.9454L52.5566 44.937C52.6042 44.2855 52.46 43.6286 52.1653 43.0514C51.9326 43.1672 51.6867 43.2593 51.4317 43.3256C51.688 43.7888 51.8198 44.3294 51.7807 44.8761L51.5479 47.3272L51.5475 47.3333C51.4432 48.9806 50.2199 49.9954 48.853 49.7898L48.843 49.7883L20.7195 47.0365L20.6115 47.808ZM21.805 39.284L45.2454 41.5776C44.9887 41.3296 44.7713 41.0442 44.5983 40.7322L21.913 38.5126L21.805 39.284Z"
          fill="#435570"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.7925 35.938L15.4397 60.7012C15.3526 61.1763 15.5552 61.5919 15.878 61.8702C16.1995 62.1474 16.6484 62.302 17.1171 62.302C17.9112 62.302 18.6066 61.8227 18.7862 61.1081L18.7913 61.0879L22.2591 36.3213C21.9952 36.2988 21.7362 36.2767 21.4826 36.2551L18.0267 60.9361C17.9399 61.2428 17.6053 61.5237 17.1171 61.5237C16.8107 61.5237 16.5491 61.4213 16.3862 61.2808C16.2295 61.1457 16.1749 60.9914 16.2068 60.8329L16.2108 60.8132L18.5679 36.005C18.2959 35.9815 18.037 35.9591 17.7925 35.938Z"
          fill="#435570"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M52.0339 17.8892C52.5048 16.4678 54.1026 15.6436 55.6896 16.1068L58.4327 17.0063L58.4385 17.008C59.9652 17.4565 60.688 19.039 60.2189 20.6338L55.6089 33.8398C55.6883 33.8112 55.767 33.7823 55.8451 33.7534C56.0917 33.662 56.3305 33.5699 56.5597 33.4787L60.96 20.8735L60.9626 20.8647C61.5354 18.9349 60.6768 16.8585 58.663 16.2633L55.9195 15.3637L55.9137 15.3619C53.956 14.7868 51.9107 15.7905 51.2959 17.6406L45.3674 34.624C45.6438 34.6436 45.9124 34.6623 46.1726 34.6802L52.032 17.8951L52.0339 17.8892ZM44.1651 38.068L44.1291 38.1714L44.1264 38.1802C43.5469 40.1326 44.5602 42.1698 46.4204 42.7798L49.1695 43.6812L49.1753 43.6829C50.4488 44.0571 51.7593 43.7631 52.689 43.0027L52.5458 42.0562C51.8278 42.8953 50.6105 43.2916 49.3995 42.9381L46.6621 42.0405C45.233 41.5719 44.4076 39.9853 44.8702 38.4111L44.9703 38.1244C44.7078 38.1062 44.4393 38.0874 44.1651 38.068Z"
          fill="#435570"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M55.652 37.5101C55.9122 37.423 56.1645 37.3331 56.4078 37.2421L58.6842 60.6475C58.7762 61.119 58.5556 61.5222 58.2287 61.7831C57.9022 62.0437 57.4503 62.1865 56.9814 62.1865C56.5842 62.1865 56.2061 62.0774 55.9166 61.8723C55.6329 61.6713 55.4186 61.3627 55.407 60.9807L51.983 38.3486C52.2421 38.3198 52.4994 38.2839 52.754 38.2421L56.1848 60.9189V60.9482C56.1848 61.0364 56.2299 61.1406 56.3664 61.2372C56.5051 61.3354 56.7199 61.4083 56.9814 61.4083C57.303 61.4083 57.5757 61.3085 57.7433 61.1748C57.9047 61.0459 57.9457 60.9127 57.9186 60.7882L57.9138 60.7659L55.652 37.5101Z"
          fill="#435570"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.6883 33.2067C14.563 33.3602 14.4703 33.6071 14.4703 33.9481C14.4703 34.2891 14.563 34.5359 14.6883 34.6894C14.808 34.836 14.9746 34.9209 15.1929 34.9209H15.21L15.2269 34.9224L15.1929 35.31C15.2269 34.9224 15.2267 34.9223 15.2269 34.9224L15.5762 34.9529C15.8044 34.9729 16.1397 35.0021 16.5679 35.0394C17.4244 35.1138 18.6529 35.2202 20.1406 35.3479C23.116 35.6032 27.1283 35.9437 31.276 36.2841C39.5846 36.966 48.4 37.6447 50.5473 37.6447C54.3922 37.6447 58.1588 35.6611 59.2502 35.0863C59.3469 35.0354 59.4225 34.9955 59.4754 34.9691C59.8148 34.7611 60.0383 34.6201 60.1881 34.4628C60.3165 34.328 60.3865 34.1847 60.3865 33.9481C60.3865 33.6417 60.2607 33.3749 60.0841 33.2155C59.9164 33.0641 59.7023 33.0044 59.4589 33.0896C59.3368 33.1323 59.1086 33.2337 58.779 33.3801C58.6342 33.4444 58.4698 33.5174 58.2863 33.5979C57.7011 33.8547 56.9533 34.173 56.1163 34.4832C54.4515 35.1001 52.3973 35.6991 50.5473 35.6991C48.8034 35.6991 39.9405 35.0158 31.5463 34.3359C27.3419 33.9954 23.2453 33.6549 20.1999 33.3995C18.6771 33.2718 17.4171 33.1654 16.5378 33.0909L15.1779 32.9754C14.967 32.9792 14.8052 33.0635 14.6883 33.2067ZM15.1929 32.5861L15.226 32.1984L15.2095 32.197H15.1929C14.7441 32.197 14.3549 32.3845 14.0854 32.7146C13.8216 33.0378 13.692 33.4719 13.692 33.9481C13.692 34.4242 13.8216 34.8583 14.0854 35.1815C14.3513 35.5072 14.7336 35.694 15.1747 35.699L15.5084 35.7282C15.7367 35.7482 16.0721 35.7774 16.5005 35.8147C17.3573 35.8892 18.586 35.9956 20.074 36.1233C23.0501 36.3787 27.0634 36.7192 31.2123 37.0597C39.4969 37.7397 48.3587 38.423 50.5473 38.423C54.6142 38.423 58.574 36.3256 59.6202 35.7715C59.7181 35.7196 59.7905 35.6812 59.8351 35.6594L59.8515 35.6514L59.8955 35.6244C60.2058 35.4344 60.5215 35.2412 60.7517 34.9995C61.0124 34.7258 61.1647 34.3924 61.1647 33.9481C61.1647 33.4373 60.957 32.9551 60.6055 32.6378C60.2451 32.3124 59.7366 32.1679 59.2018 32.3551C59.048 32.4089 58.77 32.5324 58.4161 32.6896C58.279 32.7504 58.1306 32.8163 57.9736 32.8852C57.3949 33.1392 56.6626 33.4508 55.8459 33.7534C54.2032 34.3622 52.255 34.9209 50.5473 34.9209C48.8447 34.9209 40.0304 34.2423 31.6091 33.5602C27.4057 33.2198 23.3099 32.8793 20.2649 32.624C18.7424 32.4963 17.4827 32.3899 16.6035 32.3155L15.226 32.1984C15.2258 32.1984 15.226 32.1984 15.1929 32.5861Z"
          fill="#435570"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M46.7215 13.7941C47.0203 13.9798 47.1293 14.3368 47.0146 14.6806C46.0247 17.7002 44.5359 19.68 43.2848 20.9082C42.6598 21.5217 42.0951 21.9466 41.6832 22.2198C41.4772 22.3564 41.3094 22.4552 41.1911 22.5206C41.1319 22.5534 41.0852 22.5778 41.0522 22.5945C41.0357 22.6028 41.0227 22.6092 41.0133 22.6138L41.002 22.6192L40.9984 22.6209L40.9971 22.6215L40.9966 22.6218C40.9964 22.6219 40.9962 22.622 40.8323 22.269L40.9962 22.622C40.9018 22.6658 40.7938 22.67 40.6963 22.6336L39.2439 22.0917L39.2799 22.3422C39.2825 22.3605 39.2838 22.379 39.2838 22.3975C39.2838 22.8736 39.1188 23.4012 38.5931 23.7499C37.4216 24.5269 34.6727 26.2217 31.7783 27.138C31.7735 27.1395 31.7687 27.1409 31.7639 27.1422C29.8588 27.6651 27.8277 27.9025 26.0726 27.6003C24.3086 27.2965 22.7864 26.4373 22.0068 24.7451L22.0023 24.7349C21.513 23.5874 21.5245 22.5562 21.8329 21.6604C22.1375 20.7756 22.7222 20.0493 23.339 19.4776C23.9572 18.9048 24.6253 18.471 25.1223 18.1755C25.2939 18.0735 25.4512 17.9846 25.5748 17.9146C25.628 17.8846 25.6749 17.858 25.7141 17.8354C25.7541 17.8124 25.7838 17.7949 25.8051 17.7817C25.8547 17.7212 25.9222 17.6759 26.0001 17.6538C26.1354 17.6153 26.281 17.653 26.3808 17.7522C26.4927 17.8636 26.5155 18.0132 26.4852 18.1319C26.4811 18.1479 26.4762 18.1629 26.4708 18.1769L26.2236 19.2098L27.7457 17.3927C27.7532 17.3837 27.7612 17.375 27.7695 17.3667C27.9217 17.2152 28.0894 17.0864 28.2903 16.9975C28.4928 16.908 28.7093 16.8679 28.9482 16.8679C29.4118 16.8679 30.1202 16.9003 31.0263 16.9418C31.4039 16.9591 31.8158 16.978 32.2586 16.9968C33.7735 17.0609 35.6729 17.1249 37.8613 17.1249C41.5963 17.1249 44.3479 15.1416 45.7384 13.8841C45.7528 13.8711 45.7681 13.8592 45.7843 13.8484C46.0766 13.6546 46.4364 13.6168 46.7215 13.7941ZM25.5093 18.8509C25.035 19.1334 24.4245 19.5328 23.868 20.0484C23.3062 20.5691 22.8171 21.1922 22.5687 21.9138C22.3245 22.6232 22.3033 23.4537 22.716 24.4245C23.358 25.8133 24.612 26.5591 26.2046 26.8333C27.806 27.109 29.7118 26.8976 31.5506 26.3937C34.3373 25.5102 37.0102 23.8659 38.1629 23.1014C38.4049 22.9409 38.4999 22.7069 38.5053 22.4236L38.3804 21.5533C38.3608 21.4173 38.4144 21.2811 38.5214 21.1949C38.6284 21.1088 38.7729 21.0854 38.9015 21.1334L40.8064 21.844C40.809 21.8426 40.8116 21.8412 40.8142 21.8397C40.9154 21.7837 41.0654 21.6957 41.253 21.5713C41.6283 21.3224 42.1536 20.928 42.7396 20.3528C43.9059 19.208 45.3171 17.3426 46.2647 14.4698C46.2557 14.4735 46.2456 14.4783 46.2346 14.4846C44.7743 15.7991 41.8532 17.9032 37.8613 17.9032C35.6578 17.9032 33.7464 17.8387 32.2257 17.7743C31.7676 17.7549 31.3469 17.7356 30.9653 17.7182C30.0723 17.6772 29.393 17.6461 28.9482 17.6461C28.7996 17.6461 28.6931 17.6703 28.605 17.7093C28.5186 17.7475 28.4314 17.808 28.3303 17.9066L25.7587 20.9767C25.6428 21.1151 25.4469 21.1556 25.2856 21.0745C25.1243 20.9933 25.04 20.8119 25.082 20.6363L25.5093 18.8509Z"
          fill="#435570"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M41.0576 19.0244C41.1462 19.2202 41.0592 19.4508 40.8634 19.5393C38.6855 20.5242 36.9982 20.8526 35.2175 21.0964C34.8701 21.1439 34.5202 21.1882 34.163 21.2334C32.6934 21.4193 31.099 21.621 29.042 22.1326C26.5293 22.7576 24.1872 24.1702 22.4618 25.4417C21.6018 26.0755 20.9011 26.6697 20.4159 27.1049C20.1735 27.3224 19.9851 27.4999 19.858 27.6225C19.7944 27.6837 19.7462 27.7313 19.7141 27.7631L19.6784 27.799L19.6698 27.8077L19.6679 27.8096C19.6678 27.8096 19.6679 27.8096 19.6679 27.8096C19.5177 27.9633 19.271 27.9666 19.1173 27.8165C18.9635 27.6664 18.9606 27.42 19.1107 27.2663L19.3668 27.5163C19.1107 27.2663 19.1106 27.2663 19.1107 27.2663L19.112 27.2649L19.1149 27.262L19.1254 27.2513C19.1345 27.2421 19.1479 27.2287 19.1653 27.2114C19.2001 27.1768 19.2512 27.1264 19.3179 27.0622C19.4511 26.9337 19.6463 26.7498 19.8963 26.5256C20.3961 26.0772 21.1163 25.4666 22.0001 24.8152C23.7625 23.5165 26.1999 22.0376 28.8542 21.3774C30.9598 20.8537 32.6058 20.6456 34.079 20.4594C34.4319 20.4148 34.7749 20.3715 35.1119 20.3253C36.8512 20.0872 38.4579 19.773 40.5427 18.8302C40.7386 18.7416 40.9691 18.8286 41.0576 19.0244Z"
          fill="#435570"
        />
      </svg>
    );
  }
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 80 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.5015 47.2373L58.4084 50.7172L58.2821 49.8825L21.6152 46.4253L21.5015 47.2373ZM22.0648 43.2141L57.7827 46.5818L57.6565 45.7471L22.1785 42.402L22.0648 43.2141Z"
        fill="#435570"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.0649 32.7845C17.517 33.0094 16.1554 34.3421 16.0334 36.101L15.7889 38.6738L15.7882 38.6827C15.6722 40.2711 16.639 41.8897 18.1489 42.4259L18.2299 41.573C17.2056 41.1025 16.5197 39.9384 16.6049 38.7467L16.8495 36.1731L16.8503 36.1621C16.9382 34.8663 17.8929 33.8835 18.9844 33.6327L19.0649 32.7845ZM22.2836 42.9247L51.9005 45.8225C53.8832 46.1143 55.5272 44.6093 55.665 42.4834L55.9094 39.9115L55.9101 39.9026C55.9602 39.2167 55.8083 38.5251 55.498 37.9175C55.2531 38.0394 54.9942 38.1362 54.7258 38.2061C54.9957 38.6937 55.1345 39.2629 55.0934 39.8385L54.8483 42.4186L54.8479 42.425C54.7381 44.1591 53.4504 45.2272 52.0116 45.0108L52.0011 45.0092L22.3973 42.1126L22.2836 42.9247ZM23.54 33.9521L48.2146 36.3664C47.9444 36.1054 47.7154 35.8049 47.5332 35.4765L23.6537 33.14L23.54 33.9521Z"
        fill="#435570"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.3164 30.4296L16.8397 56.4961C16.748 56.9962 16.9613 57.4337 17.3011 57.7267C17.6395 58.0184 18.112 58.1811 18.6053 58.1811C19.4413 58.1811 20.1733 57.6767 20.3623 56.9244L20.3677 56.9031L24.0181 30.8331C23.7402 30.8094 23.4676 30.7862 23.2006 30.7634L19.5629 56.7434C19.4715 57.0662 19.1193 57.3619 18.6053 57.3619C18.2829 57.3619 18.0075 57.2541 17.836 57.1062C17.671 56.964 17.6136 56.8016 17.6472 56.6348L17.6514 56.6139L20.1326 30.5001C19.8462 30.4754 19.5737 30.4518 19.3164 30.4296Z"
        fill="#435570"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M55.3599 11.4308C55.8556 9.93468 57.5375 9.06705 59.208 9.55461L62.0954 10.5014L62.1016 10.5032C63.7087 10.9754 64.4694 12.6412 63.9756 14.3199L59.123 28.221C59.2066 28.1908 59.2895 28.1605 59.3717 28.13C59.6312 28.0338 59.8826 27.9368 60.1239 27.8409L64.7558 14.5722L64.7585 14.5629C65.3615 12.5316 64.4577 10.3459 62.3379 9.71933L59.4501 8.77238L59.4439 8.77058C57.3832 8.16515 55.2303 9.22172 54.5831 11.1692L48.3425 29.0465C48.6335 29.067 48.9162 29.0867 49.1901 29.1056L55.3579 11.437L55.3599 11.4308ZM47.077 32.6717L47.039 32.7805L47.0363 32.7898C46.4262 34.8449 47.4929 36.9894 49.451 37.6315L52.3447 38.5804L52.3508 38.5822C53.6913 38.976 55.0709 38.6665 56.0495 37.8661L55.8988 36.8697C55.1429 37.7531 53.8616 38.1702 52.5868 37.7981L49.7054 36.8533C48.201 36.36 47.3322 34.6899 47.8192 33.0328L47.9245 32.731C47.6483 32.7119 47.3656 32.6922 47.077 32.6717Z"
        fill="#435570"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M59.1682 32.0843C59.4421 31.9927 59.7077 31.898 59.9638 31.8022L62.36 56.4395C62.4569 56.9357 62.2247 57.3602 61.8805 57.6348C61.5368 57.9091 61.0612 58.0595 60.5676 58.0595C60.1495 58.0595 59.7515 57.9446 59.4467 57.7287C59.1481 57.5172 58.9225 57.1923 58.9104 56.7902L55.3062 32.967C55.5789 32.9366 55.8497 32.8989 56.1177 32.8548L59.729 56.7252V56.756C59.729 56.8489 59.7766 56.9585 59.9202 57.0602C60.0662 57.1636 60.2923 57.2403 60.5676 57.2403C60.9061 57.2403 61.1932 57.1353 61.3695 56.9945C61.5395 56.8589 61.5826 56.7187 61.5541 56.5876L61.5491 56.5641L59.1682 32.0843Z"
        fill="#435570"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.0487 27.5546C15.9168 27.7161 15.8192 27.976 15.8192 28.3349C15.8192 28.6938 15.9168 28.9537 16.0487 29.1152C16.1747 29.2695 16.3501 29.3589 16.5799 29.3589H16.5978L16.6157 29.3605L16.5799 29.7685C16.6157 29.3605 16.6155 29.3605 16.6157 29.3605L16.9834 29.3927C17.2236 29.4137 17.5765 29.4445 18.0273 29.4836C18.9288 29.562 20.2219 29.674 21.7879 29.8084C24.92 30.0772 29.1435 30.4355 33.5094 30.7939C42.2553 31.5117 51.5348 32.2261 53.795 32.2261C57.8423 32.2261 61.8072 30.138 62.956 29.533C63.0577 29.4794 63.1374 29.4375 63.1931 29.4097C63.5503 29.1907 63.7856 29.0423 63.9433 28.8767C64.0784 28.7348 64.1521 28.584 64.1521 28.3349C64.1521 28.0124 64.0196 27.7315 63.8338 27.5638C63.6573 27.4045 63.4318 27.3416 63.1756 27.4313C63.0471 27.4763 62.8069 27.5829 62.46 27.737C62.3076 27.8047 62.1346 27.8815 61.9414 27.9663C61.3254 28.2366 60.5382 28.5717 59.6572 28.8982C57.9047 29.5476 55.7424 30.1781 53.795 30.1781C51.9594 30.1781 42.63 29.4588 33.7939 28.7432C29.3683 28.3847 25.0561 28.0263 21.8504 27.7575C20.2475 27.6231 18.9212 27.511 17.9956 27.4326L16.5641 27.311C16.3421 27.315 16.1718 27.4038 16.0487 27.5546ZM16.5799 26.9013L16.6147 26.4932L16.5973 26.4917H16.5799C16.1075 26.4917 15.6978 26.689 15.4141 27.0365C15.1364 27.3767 15 27.8337 15 28.3349C15 28.8361 15.1364 29.2931 15.4141 29.6333C15.6939 29.9761 16.0964 30.1727 16.5607 30.178L16.912 30.2088C17.1523 30.2298 17.5054 30.2606 17.9563 30.2998C18.8581 30.3782 20.1516 30.4902 21.7179 30.6246C24.8506 30.8934 29.0751 31.2519 33.4424 31.6103C42.1631 32.3261 51.4912 33.0453 53.795 33.0453C58.0759 33.0453 62.2442 30.8375 63.3454 30.2543C63.4485 30.1997 63.5247 30.1593 63.5716 30.1363L63.5889 30.1279L63.6353 30.0995C63.9619 29.8995 64.2942 29.6961 64.5365 29.4417C64.8109 29.1535 64.9713 28.8026 64.9713 28.3349C64.9713 27.7973 64.7527 27.2896 64.3827 26.9556C64.0033 26.6132 63.468 26.461 62.905 26.6581C62.7431 26.7147 62.4505 26.8447 62.078 27.0102C61.9337 27.0742 61.7775 27.1436 61.6122 27.2161C61.003 27.4835 60.2322 27.8114 59.3725 28.13C57.6434 28.7708 55.5926 29.3589 53.795 29.3589C52.0028 29.3589 42.7246 28.6446 33.8601 27.9266C29.4354 27.5683 25.1241 27.2099 21.9188 26.9411C20.3162 26.8067 18.9901 26.6948 18.0648 26.6164L16.6147 26.4932C16.6145 26.4932 16.6147 26.4932 16.5799 26.9013Z"
        fill="#435570"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M49.7682 5.12013C50.0827 5.31565 50.1975 5.69141 50.0767 6.05339C49.0347 9.23189 47.4676 11.3159 46.1506 12.6087C45.4927 13.2545 44.8983 13.7018 44.4647 13.9893C44.2479 14.1331 44.0712 14.2371 43.9467 14.306C43.8844 14.3405 43.8352 14.3662 43.8005 14.3837C43.7832 14.3925 43.7695 14.3993 43.7596 14.4041L43.7477 14.4098L43.7439 14.4116L43.7425 14.4122L43.742 14.4125C43.7418 14.4126 43.7416 14.4127 43.5691 14.0412L43.7416 14.4127C43.6422 14.4588 43.5285 14.4632 43.4259 14.4249L41.8971 13.8545L41.9349 14.1182C41.9377 14.1375 41.9391 14.1569 41.9391 14.1764C41.9391 14.6775 41.7654 15.2329 41.212 15.6C39.9788 16.4179 37.0853 18.2019 34.0385 19.1663C34.0335 19.1679 34.0284 19.1694 34.0233 19.1708C32.018 19.7212 29.88 19.9711 28.0325 19.653C26.1757 19.3333 24.5734 18.4288 23.7527 16.6475L23.748 16.6368C23.2329 15.4289 23.245 14.3434 23.5696 13.4005C23.8903 12.4691 24.5058 11.7046 25.1551 11.1028C25.8058 10.4999 26.5091 10.0432 27.0323 9.73221C27.2129 9.62486 27.3784 9.53122 27.5085 9.4576C27.5645 9.42594 27.6139 9.39798 27.6552 9.37422C27.6973 9.34998 27.7285 9.3315 27.751 9.31768C27.8031 9.25393 27.8742 9.20624 27.9562 9.18297C28.0987 9.14253 28.2519 9.18217 28.3569 9.28664C28.4748 9.40391 28.4988 9.5613 28.4668 9.68629C28.4625 9.70315 28.4574 9.71897 28.4517 9.73368L28.1915 10.8209L29.7936 8.90817C29.8016 8.89867 29.81 8.88954 29.8188 8.88081C29.979 8.72139 30.1554 8.58571 30.3669 8.49219C30.5801 8.39792 30.808 8.35575 31.0595 8.35575C31.5475 8.35575 32.2932 8.3899 33.2469 8.43359C33.6444 8.4518 34.078 8.47166 34.5441 8.49139C36.1387 8.5589 38.1381 8.6263 40.4417 8.6263C44.3733 8.6263 47.2697 6.53864 48.7333 5.21492C48.7485 5.20121 48.7646 5.18865 48.7817 5.17736C49.0893 4.9733 49.4681 4.93352 49.7682 5.12013ZM27.4396 10.4431C26.9403 10.7405 26.2976 11.1609 25.7119 11.7037C25.1205 12.2518 24.6057 12.9076 24.3442 13.6672C24.0871 14.414 24.0649 15.2882 24.4992 16.3101C25.1751 17.772 26.495 18.557 28.1715 18.8457C29.8572 19.1359 31.8633 18.9133 33.7989 18.3829C36.7323 17.4529 39.5458 15.7221 40.7592 14.9173C41.0138 14.7484 41.1139 14.5021 41.1196 14.2039L40.9881 13.2877C40.9675 13.1446 41.0239 13.0012 41.1365 12.9105C41.2491 12.8198 41.4012 12.7952 41.5367 12.8457L43.5418 13.5938C43.5445 13.5923 43.5472 13.5908 43.55 13.5892C43.6566 13.5303 43.8145 13.4376 44.0119 13.3067C44.407 13.0447 44.9599 12.6296 45.5767 12.0241C46.8044 10.819 48.2898 8.85541 49.2874 5.83149C49.2779 5.83534 49.2673 5.8404 49.2556 5.84702C47.7185 7.23066 44.6437 9.44551 40.4417 9.44551C38.1222 9.44551 36.1103 9.37763 34.5095 9.30986C34.0273 9.28945 33.5844 9.26916 33.1827 9.25076C32.2427 9.2077 31.5277 9.17495 31.0595 9.17495C30.903 9.17495 30.7909 9.20042 30.6982 9.24142C30.6073 9.28161 30.5154 9.34539 30.4091 9.44916L27.7022 12.6808C27.5801 12.8265 27.3739 12.8692 27.2041 12.7837C27.0343 12.6983 26.9456 12.5073 26.9898 12.3225L27.4396 10.4431Z"
        fill="#435570"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M43.806 10.6257C43.8992 10.8318 43.8076 11.0745 43.6015 11.1677C41.309 12.2044 39.5329 12.5501 37.6584 12.8067C37.2928 12.8568 36.9245 12.9033 36.5484 12.9509C35.0015 13.1466 33.3232 13.359 31.158 13.8975C28.513 14.5554 26.0477 16.0423 24.2314 17.3808C23.3262 18.0479 22.5885 18.6734 22.0779 19.1314C21.8226 19.3604 21.6244 19.5473 21.4906 19.6763C21.4236 19.7408 21.3729 19.7908 21.3391 19.8243L21.3015 19.8621L21.2924 19.8712L21.2904 19.8733C21.2904 19.8733 21.2904 19.8733 21.2904 19.8733C21.1324 20.0351 20.8727 20.0386 20.7108 19.8805C20.549 19.7225 20.5459 19.4632 20.7039 19.3013L20.9735 19.5645C20.7039 19.3013 20.7038 19.3014 20.7039 19.3013L20.7053 19.2999L20.7083 19.2969L20.7194 19.2856C20.729 19.2759 20.743 19.2618 20.7614 19.2436C20.798 19.2071 20.8519 19.1541 20.922 19.0865C21.0622 18.9513 21.2677 18.7577 21.5308 18.5216C22.057 18.0497 22.815 17.4069 23.7454 16.7213C25.6005 15.3542 28.1662 13.7974 30.9602 13.1025C33.1766 12.5513 34.9093 12.3322 36.46 12.1362C36.8315 12.0893 37.1926 12.0436 37.5473 11.9951C39.3781 11.7444 41.0694 11.4137 43.264 10.4213C43.4701 10.328 43.7128 10.4196 43.806 10.6257Z"
        fill="#435570"
      />
    </svg>
  );
};

SupportIcon.defaultProps = {
  width: '90%',
  height: '90%',
  page: '',
};

SupportIcon.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  page: PropTypes.string,
};

export default SupportIcon;
