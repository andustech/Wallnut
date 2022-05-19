import React from 'react';

const ShopOurBestSellers = ({ settings }) => {
  const valueProps = [
    {
      name: 'ART NAME-1',
      img: 'https://cdn.shopify.com/s/files/1/0627/3476/2207/files/Rectangle-10.jpg?v=1652698508',
      price: '$24 - $78',
    },
    {
      name: 'ART NAME-2',
      img: 'https://cdn.shopify.com/s/files/1/0627/3476/2207/files/Rectangle-11.jpg?v=1652698671',
      price: '$24 - $78',
    },
    {
      name: 'ART NAME-3',
      img: 'https://cdn.shopify.com/s/files/1/0627/3476/2207/files/Rectangle-12.jpg?v=1652698671',
      price: '$24 - $78',
    },
    {
      name: 'ART NAME-4',
      img: 'https://cdn.shopify.com/s/files/1/0627/3476/2207/files/Rectangle-13.jpg?v=1652698686',
      price: '$24 - $78',
    },
  ];

  return (
    <div className="py-16 px-5 text-black">
      <div className="text-center mb-24">
        <p className="text-4xl mb-2">Shop our best sellers</p>
        <div className="grid justify-center">
          <div className="grid grid-cols-1 pt-6 justify-items-start w-full gap-4 mb-12 max-w-screen-xxl sm:grid-cols-2 lg:gap-8 lg:grid-cols-4">
            {valueProps.map((item, i) => (
              <div key={i} class="PLPItem__ItemContainer-sc-cy9xe9-0 hkkjzZ">
                <div class="relative overflow-hidden bg-gray-50">
                  <a href="/products/the-scandinavian-lounge-chair?color=Mustard Yellow">
                    <div class="PLPItem__ImageContainer-sc-cy9xe9-4 lmQyDJ">
                      <img alt="the-scandinavian-lounge-chair-mustard yellow" src={item.img} />
                    </div>
                  </a>
                </div>
                <a
                  class="no-underline test"
                  href="/products/the-scandinavian-lounge-chair?color=Mustard Yellow"
                >
                  <div class="PLPItem__TitlePriceContainer-sc-cy9xe9-2 flex justify-start flex-col text-left mt-2.5 md:mt-3.5 lg:mt-2.5">
                    <span class="text-sm lg:text-xl font-normal">{item.name}</span>
                    <span class="text-xs lg:text-xl font-medium">{item.price}</span>
                  </div>
                </a>
                <div class="PLPItem__ColorContainer-sc-cy9xe9-8 flex w-full justify-between pr-3 py-2">
                  <div>
                    <div class="flex">
                      <div
                        className="w-5 h-5 border border-solid border-black rounded-full flex items-center justify-center bg-white mr-3"
                        role="button"
                        tabindex="0"
                      >
                        <div
                          className="w-3 h-3 bg-no-repeat rounded-full"
                          style={{ backgroundColor: '#000000' }}
                          aria-label="change to mustard yellow variant"
                        ></div>
                      </div>
                      <div
                        className="w-5 h-5 border border-solid border-black rounded-full flex items-center justify-center mr-3"
                        role="button"
                        tabindex="0"
                      >
                        <div
                          className="w-3 h-3 bg-no-repeat rounded-full"
                          style={{ backgroundColor: '#8F513B' }}
                          aria-label="change to mustard yellow variant"
                        ></div>
                      </div>
                      <div
                        className="w-5 h-5 border border-solid border-black rounded-full flex items-center justify-center"
                        role="button"
                        tabindex="0"
                      >
                        <div
                          className="w-3 h-3 bg-no-repeat rounded-full"
                          style={{ backgroundColor: '#FFFFFF' }}
                          aria-label="change to mustard yellow variant"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopOurBestSellers;
