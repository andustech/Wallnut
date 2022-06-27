import React from 'react';
import styled from 'styled-components';

const instructionsPdf = ({ settings, blocks}) => {
  const { heading } = settings;
  return (
    <>
        <section className='md:pb-6 pb-2 border-b md:mb-6 mb-4'>
            <p class="h3-attila-sans font-medium md:mb-5 mb-3">{heading}</p>
            {blocks?.map((block)=>{
                const {settings} = block;
                return (
                    <>
                    <Link href={settings.pdf_link} target="_blank">
                        {settings.pdf_title}
                    </Link>
                    </>
                )
            })}
        </section>
    </>
  );
};

const Link = styled.a.attrs({
    className: 'pdf_link block mb-3',
})`
    font-family: 'GoodSans-Light' !important;
    font-size: 20px;
    line-height: 26px;
    text-decoration: underline;
    text-transform: none;
    @media only screen and (max-width: 991px) {
        font-size: 18px;
        line-height: 24px;
    }
    @media only screen and (max-width: 767px) {
        font-size: 16px;
        line-height: 24px;
    }
`;

export default instructionsPdf;