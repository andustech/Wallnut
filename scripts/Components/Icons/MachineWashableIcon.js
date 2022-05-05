import React from 'react';
import PropTypes from 'prop-types';

const MachineWashableIcon = ({ width = '100%', height = '100%', page }) => {
  if (page === 'patterns-landing') {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="40" cy="40" r="40" fill="#FCF9F7" />
        <path
          d="M53.0554 20.4C45.0552 14.8 35.4556 12 27.0554 12C18.6552 12 14.6554 20 13.4554 24.4C12.2554 28.8 12.6554 35.6 15.0554 39.6C17.4554 43.6 16.2554 46.4 16.2554 49.2C16.2554 52 17.4554 55.2 19.4554 58.8C21.4554 62.4 27.0554 66 31.4554 67.2C35.8554 68.4 40.2554 68 46.6556 67.6C53.0558 67.2 57.8554 62.4 60.6556 59.2C63.4558 56 66.6558 51.2 66.6556 47.6V47.5969C66.6554 43.9975 66.6552 39.5991 65.0556 36.4C63.4556 33.2 61.0556 26 53.0554 20.4Z"
          fill="#D6EAE7"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.7094 16.3999C18.7094 15.0192 19.8286 13.8999 21.2094 13.8999H58.8093C60.1901 13.8999 61.3093 15.0192 61.3093 16.3999V63.5999C61.3093 64.9806 60.1901 66.0999 58.8093 66.0999H21.2094C19.8286 66.0999 18.7094 64.9806 18.7094 63.5999V16.3999ZM21.2094 14.8999C20.3809 14.8999 19.7094 15.5715 19.7094 16.3999V63.5999C19.7094 64.4283 20.3809 65.0999 21.2094 65.0999H58.8093C59.6378 65.0999 60.3093 64.4283 60.3093 63.5999V16.3999C60.3093 15.5715 59.6378 14.8999 58.8093 14.8999H21.2094Z"
          fill="#435570"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M60.8093 25.5999L19.2094 25.5999L19.2094 24.5999L60.8093 24.5999L60.8093 25.5999Z"
          fill="#435570"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.9095 18.5999C21.9095 17.7714 22.5811 17.0999 23.4095 17.0999H32.6095C33.438 17.0999 34.1095 17.7714 34.1095 18.5999V21.3999C34.1095 22.2283 33.438 22.8999 32.6095 22.8999H23.4095C22.5811 22.8999 21.9095 22.2283 21.9095 21.3999V18.5999ZM23.4095 18.0999C23.1334 18.0999 22.9095 18.3237 22.9095 18.5999V21.3999C22.9095 21.676 23.1334 21.8999 23.4095 21.8999H32.6095C32.8857 21.8999 33.1095 21.676 33.1095 21.3999V18.5999C33.1095 18.3237 32.8857 18.0999 32.6095 18.0999H23.4095Z"
          fill="#435570"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M38.4092 18.0999C37.3598 18.0999 36.5092 18.9505 36.5092 19.9999C36.5092 21.0492 37.3598 21.8999 38.4092 21.8999C39.4585 21.8999 40.3092 21.0492 40.3092 19.9999C40.3092 18.9505 39.4585 18.0999 38.4092 18.0999ZM35.5092 19.9999C35.5092 18.3982 36.8075 17.0999 38.4092 17.0999C40.0108 17.0999 41.3092 18.3982 41.3092 19.9999C41.3092 21.6015 40.0108 22.8999 38.4092 22.8999C36.8075 22.8999 35.5092 21.6015 35.5092 19.9999Z"
          fill="#435570"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M40.0094 34.0999C34.9836 34.0999 30.9094 38.1741 30.9094 43.1999C30.9094 48.2256 34.9836 52.2999 40.0094 52.2999C45.0352 52.2999 49.1094 48.2256 49.1094 43.1999C49.1094 38.1741 45.0352 34.0999 40.0094 34.0999ZM29.9094 43.1999C29.9094 37.6218 34.4313 33.0999 40.0094 33.0999C45.5875 33.0999 50.1094 37.6218 50.1094 43.1999C50.1094 48.7779 45.5875 53.2999 40.0094 53.2999C34.4313 53.2999 29.9094 48.7779 29.9094 43.1999Z"
          fill="#435570"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M28.825 45.8756C29.5036 48.7121 31.2346 51.1848 33.6675 52.7932C36.1005 54.4016 39.0536 55.0255 41.9292 54.5386C44.8048 54.0517 47.388 52.4904 49.1559 50.1707C50.9238 47.8511 51.7442 44.9464 51.4512 42.0446C51.1582 39.1428 49.7736 36.4608 47.5777 34.5414C45.3818 32.622 42.5386 31.6086 39.6237 31.7064C36.7088 31.8043 33.94 33.0059 31.8777 35.0682C31.6824 35.2635 31.3658 35.2635 31.1706 35.0682C30.9753 34.873 30.9753 34.5564 31.1706 34.3611C33.4122 32.1195 36.4218 30.8133 39.5902 30.707C42.7585 30.6007 45.8489 31.7021 48.2358 33.7884C50.6226 35.8748 52.1277 38.79 52.4461 41.9441C52.7646 45.0982 51.8728 48.2555 49.9512 50.7769C48.0297 53.2982 45.2218 54.9953 42.0962 55.5245C38.9705 56.0538 35.7606 55.3756 33.116 53.6274C30.4715 51.8792 28.59 49.1915 27.8524 46.1083C27.1149 43.0252 27.5763 39.777 29.1433 37.0212C29.2798 36.7811 29.585 36.6972 29.8251 36.8337C30.0651 36.9702 30.1491 37.2754 30.0126 37.5155C28.5709 40.0508 28.1464 43.0392 28.825 45.8756Z"
          fill="#435570"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M45.6096 18.0999C44.5603 18.0999 43.7096 18.9505 43.7096 19.9999C43.7096 21.0492 44.5603 21.8999 45.6096 21.8999C46.6589 21.8999 47.5096 21.0492 47.5096 19.9999C47.5096 18.9505 46.6589 18.0999 45.6096 18.0999ZM42.7096 19.9999C42.7096 18.3982 44.008 17.0999 45.6096 17.0999C47.2112 17.0999 48.5096 18.3982 48.5096 19.9999C48.5096 21.6015 47.2112 22.8999 45.6096 22.8999C44.008 22.8999 42.7096 21.6015 42.7096 19.9999Z"
          fill="#435570"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M49.9094 20C49.9094 19.282 50.4915 18.7 51.2094 18.7H56.8094C57.5274 18.7 58.1094 19.282 58.1094 20C58.1094 20.7179 57.5274 21.3 56.8094 21.3H51.2094C50.4915 21.3 49.9094 20.7179 49.9094 20ZM51.2094 19.7C51.0437 19.7 50.9094 19.8343 50.9094 20C50.9094 20.1656 51.0437 20.3 51.2094 20.3H56.8094C56.9751 20.3 57.1094 20.1656 57.1094 20C57.1094 19.8343 56.9751 19.7 56.8094 19.7H51.2094Z"
          fill="#435570"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M30.6221 45.0746C30.6222 45.0746 30.6223 45.0745 30.4094 44.6221C30.1965 44.1697 30.1967 44.1696 30.1969 44.1695L30.1974 44.1693L30.199 44.1685L30.2039 44.1663L30.2211 44.1583C30.2359 44.1516 30.257 44.142 30.2843 44.1299C30.339 44.1057 30.4183 44.0712 30.5204 44.0289C30.7244 43.9444 31.0194 43.8284 31.3889 43.6999C32.1271 43.4431 33.1669 43.1349 34.3755 42.9292C36.7811 42.5197 39.9237 42.5053 42.6715 44.1963C45.179 45.7394 46.8221 45.6883 47.7952 45.3499C48.2926 45.1768 48.6469 44.9183 48.8751 44.706C48.9893 44.5999 49.0711 44.5059 49.1225 44.4415C49.1482 44.4093 49.1661 44.3847 49.1766 44.3698C49.1818 44.3624 49.1851 44.3574 49.1866 44.3552L49.1862 44.3559L49.1858 44.3565C49.1856 44.3568 49.1854 44.3571 49.6094 44.6221C50.0334 44.8871 50.0332 44.8875 50.033 44.8878L50.0325 44.8886L50.0314 44.8904L50.0285 44.8948L50.0205 44.9072C50.0141 44.9169 50.0055 44.9295 49.9948 44.9447C49.9734 44.9752 49.9433 45.0162 49.9041 45.0652C49.8259 45.1633 49.7109 45.2944 49.5562 45.4382C49.247 45.7259 48.7762 46.0674 48.1237 46.2944C46.7967 46.7559 44.8399 46.7049 42.1474 45.0479C39.6952 43.5389 36.8378 43.5245 34.5433 43.915C33.4019 44.1093 32.4168 44.4011 31.7174 44.6444C31.3682 44.7658 31.0913 44.8748 30.9032 44.9528C30.8091 44.9917 30.7373 45.0229 30.6898 45.044C30.6661 45.0545 30.6484 45.0625 30.6371 45.0677L30.6248 45.0733L30.6224 45.0745L30.6221 45.0746Z"
          fill="#435570"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.2094 61.1001C19.2094 60.824 19.4332 60.6001 19.7094 60.6001H48.3094C48.5855 60.6001 48.8094 60.824 48.8094 61.1001C48.8094 61.3762 48.5855 61.6001 48.3094 61.6001H19.7094C19.4332 61.6001 19.2094 61.3762 19.2094 61.1001Z"
          fill="#435570"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M52.0095 61.1001C52.0095 60.824 52.2334 60.6001 52.5095 60.6001L60.3095 60.6001C60.5857 60.6001 60.8095 60.824 60.8095 61.1001C60.8095 61.3762 60.5857 61.6001 60.3095 61.6001L52.5095 61.6001C52.2334 61.6001 52.0095 61.3762 52.0095 61.1001Z"
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
        <circle cx="38" cy="38" r="38" fill="white" />
        <path
          d="M50.7794 19.1C43.0649 13.7 33.8081 11 25.7079 11C17.6077 11 13.7508 18.7143 12.5937 22.9571C11.4365 27.2 11.8222 33.7571 14.1365 37.6143C16.4508 41.4714 15.2937 44.1714 15.2937 46.8714C15.2937 49.5714 16.4508 52.6571 18.3794 56.1286C20.3079 59.6 25.7079 63.0714 29.9508 64.2286C34.1937 65.3857 38.4365 65 44.6081 64.6143C50.7798 64.2286 55.4079 59.6 58.1081 56.5143C60.8083 53.4286 63.8941 48.8 63.8938 45.3286V45.3256C63.8937 41.8547 63.8934 37.6134 62.351 34.5286C60.8081 31.4429 58.4939 24.5 50.7794 19.1Z"
          fill="#D6EAE7"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.6598 15.2427C17.6598 13.9113 18.7391 12.832 20.0705 12.832H56.3276C57.659 12.832 58.7384 13.9113 58.7384 15.2427V60.757C58.7384 62.0884 57.659 63.1677 56.3276 63.1677H20.0705C18.7391 63.1677 17.6598 62.0884 17.6598 60.757V15.2427ZM20.0705 13.7963C19.2717 13.7963 18.6241 14.4439 18.6241 15.2427V60.757C18.6241 61.5559 19.2717 62.2035 20.0705 62.2035H56.3276C57.1265 62.2035 57.7741 61.5559 57.7741 60.757V15.2427C57.7741 14.4439 57.1265 13.7963 56.3276 13.7963H20.0705Z"
          fill="#435570"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M58.2564 24.1142L18.1421 24.1142L18.1421 23.1499L58.2564 23.1499L58.2564 24.1142Z"
          fill="#435570"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.7458 17.3642C20.7458 16.5653 21.3934 15.9177 22.1923 15.9177H31.0637C31.8625 15.9177 32.5101 16.5653 32.5101 17.3642V20.0642C32.5101 20.863 31.8625 21.5106 31.0637 21.5106H22.1923C21.3934 21.5106 20.7458 20.863 20.7458 20.0642V17.3642ZM22.1923 16.882C21.926 16.882 21.7101 17.0979 21.7101 17.3642V20.0642C21.7101 20.3304 21.926 20.5463 22.1923 20.5463H31.0637C31.33 20.5463 31.5458 20.3304 31.5458 20.0642V17.3642C31.5458 17.0979 31.33 16.882 31.0637 16.882H22.1923Z"
          fill="#435570"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M36.6563 16.882C35.6444 16.882 34.8241 17.7023 34.8241 18.7142C34.8241 19.726 35.6444 20.5463 36.6563 20.5463C37.6682 20.5463 38.4884 19.726 38.4884 18.7142C38.4884 17.7023 37.6682 16.882 36.6563 16.882ZM33.8599 18.7142C33.8599 17.1697 35.1119 15.9177 36.6563 15.9177C38.2007 15.9177 39.4527 17.1697 39.4527 18.7142C39.4527 20.2586 38.2007 21.5106 36.6563 21.5106C35.1119 21.5106 33.8599 20.2586 33.8599 18.7142Z"
          fill="#435570"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M38.1992 32.3105C33.3529 32.3105 29.4242 36.2392 29.4242 41.0855C29.4242 45.9318 33.3529 49.8605 38.1992 49.8605C43.0455 49.8605 46.9742 45.9318 46.9742 41.0855C46.9742 36.2392 43.0455 32.3105 38.1992 32.3105ZM28.46 41.0855C28.46 35.7066 32.8204 31.3462 38.1992 31.3462C43.5781 31.3462 47.9385 35.7066 47.9385 41.0855C47.9385 46.4643 43.5781 50.8248 38.1992 50.8248C32.8204 50.8248 28.46 46.4643 28.46 41.0855Z"
          fill="#435570"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27.4141 43.6658C28.0685 46.401 29.7376 48.7854 32.0837 50.3363C34.4298 51.8873 37.2775 52.4889 40.0504 52.0194C42.8233 51.5499 45.3142 50.0443 47.0189 47.8075C48.7237 45.5707 49.5148 42.7697 49.2323 39.9716C48.9497 37.1735 47.6146 34.5872 45.4971 32.7363C43.3796 30.8855 40.6379 29.9083 37.8272 30.0027C35.0164 30.097 32.3464 31.2558 30.3578 33.2444C30.1695 33.4327 29.8642 33.4327 29.6759 33.2444C29.4876 33.0561 29.4876 32.7508 29.6759 32.5625C31.8375 30.401 34.7396 29.1414 37.7948 29.0389C40.85 28.9364 43.8301 29.9985 46.1317 32.0103C48.4333 34.0221 49.8846 36.8333 50.1917 39.8747C50.4988 42.9162 49.6388 45.9607 47.7859 48.392C45.9329 50.8233 43.2254 52.4598 40.2114 52.9701C37.1973 53.4805 34.102 52.8265 31.5519 51.1407C29.0019 49.4549 27.1876 46.8632 26.4763 43.8902C25.7651 40.9172 26.21 37.7849 27.721 35.1276C27.8527 34.8961 28.147 34.8152 28.3785 34.9468C28.61 35.0784 28.6909 35.3728 28.5593 35.6042C27.1691 38.049 26.7598 40.9306 27.4141 43.6658Z"
          fill="#435570"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M43.5994 16.882C42.5875 16.882 41.7673 17.7023 41.7673 18.7142C41.7673 19.726 42.5875 20.5463 43.5994 20.5463C44.6113 20.5463 45.4316 19.726 45.4316 18.7142C45.4316 17.7023 44.6113 16.882 43.5994 16.882ZM40.803 18.7142C40.803 17.1697 42.055 15.9177 43.5994 15.9177C45.1438 15.9177 46.3958 17.1697 46.3958 18.7142C46.3958 20.2586 45.1438 21.5106 43.5994 21.5106C42.055 21.5106 40.803 20.2586 40.803 18.7142Z"
          fill="#435570"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M47.7458 18.714C47.7458 18.0217 48.3071 17.4604 48.9994 17.4604H54.3994C55.0917 17.4604 55.653 18.0217 55.653 18.714C55.653 19.4063 55.0918 19.9676 54.3994 19.9676H48.9994C48.3071 19.9676 47.7458 19.4063 47.7458 18.714ZM48.9994 18.4247C48.8397 18.4247 48.7101 18.5543 48.7101 18.714C48.7101 18.8738 48.8397 19.0033 48.9994 19.0033H54.3994C54.5592 19.0033 54.6887 18.8738 54.6887 18.714C54.6887 18.5543 54.5592 18.4247 54.3994 18.4247H48.9994Z"
          fill="#435570"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29.1472 42.8931C29.1473 42.8931 29.1474 42.893 28.9421 42.4568C28.7368 42.0205 28.737 42.0204 28.7372 42.0204L28.7377 42.0201L28.7392 42.0194L28.7439 42.0172L28.7606 42.0096C28.7747 42.0031 28.7951 41.9938 28.8215 41.9822C28.8742 41.9588 28.9507 41.9256 29.0491 41.8848C29.2459 41.8033 29.5303 41.6914 29.8866 41.5675C30.5984 41.3199 31.6012 41.0227 32.7666 40.8243C35.0862 40.4295 38.1166 40.4156 40.7662 42.0462C43.1842 43.5341 44.7687 43.4849 45.7069 43.1585C46.1867 42.9917 46.5283 42.7424 46.7483 42.5377C46.8584 42.4353 46.9373 42.3447 46.9869 42.2826C47.0117 42.2516 47.029 42.2278 47.039 42.2135C47.044 42.2063 47.0473 42.2016 47.0487 42.1994L47.0483 42.2001L47.0479 42.2006C47.0477 42.2009 47.0476 42.2012 47.4564 42.4568C47.8653 42.7123 47.8651 42.7126 47.8648 42.713L47.8644 42.7138L47.8633 42.7155L47.8605 42.7198L47.8528 42.7316C47.8466 42.741 47.8384 42.7532 47.828 42.7679C47.8074 42.7972 47.7784 42.8368 47.7406 42.8841C47.6651 42.9786 47.5542 43.105 47.4051 43.2437C47.1069 43.5211 46.653 43.8504 46.0237 44.0693C44.7442 44.5144 42.8572 44.4651 40.2609 42.8674C37.8963 41.4123 35.1409 41.3983 32.9284 41.7749C31.8277 41.9623 30.8778 42.2437 30.2034 42.4782C29.8666 42.5954 29.5997 42.7005 29.4182 42.7756C29.3275 42.8132 29.2583 42.8433 29.2125 42.8636C29.1896 42.8738 29.1726 42.8815 29.1616 42.8865L29.1498 42.8919L29.1474 42.893L29.1472 42.8931Z"
          fill="#435570"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.1421 58.3466C18.1421 58.0804 18.358 57.8645 18.6242 57.8645H46.2028C46.4691 57.8645 46.6849 58.0804 46.6849 58.3466C46.6849 58.6129 46.4691 58.8288 46.2028 58.8288H18.6242C18.358 58.8288 18.1421 58.6129 18.1421 58.3466Z"
          fill="#435570"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M49.7709 58.3466C49.7709 58.0804 49.9867 57.8645 50.253 57.8645L57.7744 57.8645C58.0407 57.8645 58.2566 58.0804 58.2566 58.3466C58.2566 58.6129 58.0407 58.8288 57.7744 58.8288L50.253 58.8288C49.9867 58.8288 49.7709 58.6129 49.7709 58.3466Z"
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
        d="M18 7.54033C18 6.13735 19.1404 5 20.5472 5H58.8566C60.2634 5 61.4038 6.13734 61.4038 7.54032V55.5016C61.4038 56.9046 60.2634 58.0419 58.8566 58.0419H20.5472C19.1404 58.0419 18 56.9046 18 55.5016V7.54033ZM20.5472 6.01613C19.7031 6.01613 19.0189 6.69854 19.0189 7.54033V55.5016C19.0189 56.3434 19.7031 57.0258 20.5472 57.0258H58.8566C59.7007 57.0258 60.3849 56.3434 60.3849 55.5016V7.54032C60.3849 6.69853 59.7007 6.01613 58.8566 6.01613H20.5472Z"
        fill="#435570"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M60.8942 16.8886L18.5093 16.8886L18.5093 15.8725L60.8942 15.8725L60.8942 16.8886Z"
        fill="#435570"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.2607 9.77572C21.2607 8.93393 21.945 8.25153 22.789 8.25153H32.1626C33.0067 8.25153 33.6909 8.93393 33.6909 9.77572V12.6209C33.6909 13.4627 33.0067 14.1451 32.1626 14.1451H22.789C21.945 14.1451 21.2607 13.4627 21.2607 12.6209V9.77572ZM22.789 9.26765C22.5077 9.26765 22.2796 9.49512 22.2796 9.77572V12.6209C22.2796 12.9015 22.5077 13.1289 22.789 13.1289H32.1626C32.444 13.1289 32.6721 12.9015 32.6721 12.6209V9.77572C32.6721 9.49512 32.444 9.26765 32.1626 9.26765H22.789Z"
        fill="#435570"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38.0714 9.26765C37.0023 9.26765 36.1356 10.132 36.1356 11.1983C36.1356 12.2646 37.0023 13.1289 38.0714 13.1289C39.1406 13.1289 40.0073 12.2646 40.0073 11.1983C40.0073 10.132 39.1406 9.26765 38.0714 9.26765ZM35.1167 11.1983C35.1167 9.57084 36.4396 8.25153 38.0714 8.25153C39.7033 8.25153 41.0261 9.57084 41.0261 11.1983C41.0261 12.8258 39.7033 14.1451 38.0714 14.1451C36.4396 14.1451 35.1167 12.8258 35.1167 11.1983Z"
        fill="#435570"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M39.7022 25.5258C34.5816 25.5258 30.4305 29.6657 30.4305 34.7725C30.4305 39.8794 34.5816 44.0193 39.7022 44.0193C44.8228 44.0193 48.9739 39.8794 48.9739 34.7725C48.9739 29.6657 44.8228 25.5258 39.7022 25.5258ZM29.4116 34.7725C29.4116 29.1045 34.0189 24.5096 39.7022 24.5096C45.3855 24.5096 49.9928 29.1045 49.9928 34.7725C49.9928 40.4406 45.3855 45.0355 39.7022 45.0355C34.0189 45.0355 29.4116 40.4406 29.4116 34.7725Z"
        fill="#435570"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.3067 37.4915C28.9981 40.3737 30.7617 42.8863 33.2406 44.5206C35.7195 46.1549 38.7284 46.7889 41.6582 46.2941C44.5881 45.7994 47.22 44.2129 49.0212 41.8558C50.8224 39.4988 51.6584 36.5472 51.3598 33.5986C51.0613 30.65 49.6506 27.9247 47.4132 25.9744C45.1759 24.024 42.2791 22.9943 39.3092 23.0937C36.3393 23.1931 33.5182 24.4142 31.417 26.5097C31.218 26.7082 30.8955 26.7082 30.6965 26.5097C30.4976 26.3113 30.4976 25.9896 30.6965 25.7912C32.9805 23.5135 36.0469 22.1862 39.275 22.0782C42.5031 21.9701 45.6518 23.0894 48.0837 25.2093C50.5156 27.3293 52.049 30.2916 52.3736 33.4965C52.6981 36.7015 51.7894 39.9097 49.8316 42.4718C47.8737 45.0338 45.0129 46.7582 41.8283 47.296C38.6437 47.8338 35.3731 47.1447 32.6787 45.3683C29.9843 43.5918 28.0673 40.8608 27.3158 37.7279C26.5643 34.595 27.0344 31.2944 28.631 28.4942C28.7701 28.2503 29.0811 28.165 29.3257 28.3037C29.5702 28.4424 29.6558 28.7525 29.5167 28.9965C28.0478 31.5727 27.6153 34.6092 28.3067 37.4915Z"
        fill="#435570"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M45.4078 9.26765C44.3387 9.26765 43.472 10.132 43.472 11.1983C43.472 12.2646 44.3387 13.1289 45.4078 13.1289C46.477 13.1289 47.3437 12.2646 47.3437 11.1983C47.3437 10.132 46.477 9.26765 45.4078 9.26765ZM42.4531 11.1983C42.4531 9.57084 43.776 8.25153 45.4078 8.25153C47.0397 8.25153 48.3626 9.57084 48.3626 11.1983C48.3626 12.8258 47.0397 14.1451 45.4078 14.1451C43.776 14.1451 42.4531 12.8258 42.4531 11.1983Z"
        fill="#435570"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M49.7886 11.1985C49.7886 10.4689 50.3816 9.8775 51.1131 9.8775H56.8188C57.5503 9.8775 58.1433 10.4689 58.1433 11.1985C58.1433 11.928 57.5503 12.5194 56.8188 12.5194H51.1131C50.3816 12.5194 49.7886 11.928 49.7886 11.1985ZM51.1131 10.8936C50.9443 10.8936 50.8074 11.0301 50.8074 11.1985C50.8074 11.3668 50.9443 11.5033 51.1131 11.5033H56.8188C56.9876 11.5033 57.1244 11.3668 57.1244 11.1985C57.1244 11.0301 56.9876 10.8936 56.8188 10.8936H51.1131Z"
        fill="#435570"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.1373 36.6776C30.1374 36.6775 30.1376 36.6775 29.9206 36.2177C29.7037 35.758 29.7039 35.758 29.7041 35.7579L29.7047 35.7576L29.7062 35.7569L29.7113 35.7545L29.7288 35.7465C29.7438 35.7396 29.7653 35.7299 29.7932 35.7176C29.8488 35.693 29.9297 35.658 30.0337 35.615C30.2416 35.5291 30.5422 35.4112 30.9186 35.2806C31.6707 35.0197 32.7302 34.7066 33.9616 34.4975C36.4125 34.0815 39.6144 34.0668 42.414 35.785C44.9689 37.353 46.643 37.3011 47.6344 36.9572C48.1413 36.7814 48.5022 36.5187 48.7347 36.303C48.851 36.1951 48.9344 36.0997 48.9868 36.0342C49.013 36.0015 49.0313 35.9765 49.0419 35.9614C49.0472 35.9538 49.0506 35.9488 49.0521 35.9466L49.0517 35.9473L49.0513 35.9478C49.0511 35.9481 49.0509 35.9485 49.4829 36.2177C49.9149 36.487 49.9147 36.4874 49.9145 36.4877L49.914 36.4885L49.9128 36.4903L49.9099 36.4949L49.9017 36.5074C49.8952 36.5172 49.8865 36.5301 49.8756 36.5455C49.8538 36.5765 49.8231 36.6182 49.7832 36.668C49.7034 36.7677 49.5862 36.9008 49.4287 37.047C49.1136 37.3393 48.634 37.6863 47.9691 37.917C46.6171 38.386 44.6234 38.3341 41.8801 36.6504C39.3816 35.1171 36.4703 35.1024 34.1325 35.4993C32.9696 35.6967 31.9659 35.9932 31.2533 36.2404C30.8975 36.3638 30.6154 36.4745 30.4237 36.5537C30.3279 36.5933 30.2547 36.625 30.2063 36.6464C30.1821 36.6571 30.1641 36.6653 30.1526 36.6706L30.1401 36.6763L30.1376 36.6774L30.1373 36.6776Z"
        fill="#435570"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.5093 52.9615C18.5093 52.6809 18.7374 52.4534 19.0187 52.4534H48.1583C48.4397 52.4534 48.6678 52.6809 48.6678 52.9615C48.6678 53.2421 48.4397 53.4696 48.1583 53.4696H19.0187C18.7374 53.4696 18.5093 53.2421 18.5093 52.9615Z"
        fill="#435570"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M51.9282 52.9615C51.9282 52.6809 52.1563 52.4534 52.4377 52.4534L60.3848 52.4534C60.6662 52.4534 60.8943 52.6809 60.8943 52.9615C60.8943 53.2421 60.6662 53.4696 60.3848 53.4696L52.4377 53.4696C52.1563 53.4696 51.9282 53.2421 51.9282 52.9615Z"
        fill="#435570"
      />
    </svg>
  );
};

MachineWashableIcon.defaultProps = {
  width: '90%',
  height: '90%',
  page: '',
};

MachineWashableIcon.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  page: PropTypes.string,
};

export default MachineWashableIcon;
