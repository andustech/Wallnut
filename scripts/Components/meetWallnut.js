import React from 'react';

const meetWallnut = ({ settings }) => {
  return (
    <div className="py-16 px-5 text-black">
      <div className="text-center mb-24">
        <p className="text-2xl mb-8">Meet Wallnut:a better way to art</p>
        <p className="text-base mt-0">
          We're taking the work out of artwork with premium, framed art that's easy to hang.
        </p>
      </div>

      <div className="container mx-auto py-2 px-5 lg:px-3">
        <div className="video_items_container mb-16 flex items-center flex-col lg:flex-row lg:items-center md:items-start">
          <div className="lg:w-7/12 lg: items-center">
            <img
              src="https://cdn.shopify.com/s/files/1/0627/3476/2207/files/meet-wallnut-1.jpg?v=1652355017"
              alt="how-it-works"
              className="w-full"
            />
          </div>
          <div className="video_content lg:w-5/12 lg:px-10">
            <h1 className="text-2xl font-bold text-black">Hassle-free hanging</h1>
            <p className="mb-5 text-base">
              Skip the trip to the hardware store. Wallnut artwork arrievs with everything you need
              to hang it. The Wallnut<sup>TM</sup> Mounting System comes with two pieces:
            </p>
            <ul className="text-base pl-5 list-disc">
              <li>
                <h3 className="mb-2">
                  <span className="font-bold">Wall mount.*</span> It's adhesive-based, so you don't
                  have to worry about wall damage. It also comes with a built-in level, which makes
                  it easy to find the perfect placement.
                </h3>
              </li>
              <li>
                <h3 className="mb-2">
                  <span className="font-bold">Frame hook.</span> It arrievs already attached to the
                  frame, so you can just slide it right into the amount.
                </h3>
              </li>
            </ul>
            <a
              href="#"
              className="text-xs flex items-center mb-8 lg:mb-2 text-black hover:text-red-100"
            >
              <img
                src="https://cdn.shopify.com/s/files/1/0627/3476/2207/files/video-play-black.svg?v=1652851742"
                alt="Video Play"
                className="mr-3"
              />{' '}
              SEE IT IN ACTION
            </a>
            <p className="text-xs">
              *We recommend using the included hanging nails when extra support is needed. For more
              information, visit our FAQS.
            </p>
          </div>
        </div>

        <div className="how_it_work_items_container flex items-center flex-col lg:flex-row lg:items-center md:items-start">
          <div className="h-full lg:w-6/12 lg:px-16 py-5 lg:pt-5 my-auto">
            <div className="items-center">
              <h2 className="text-2xl font-bold text-black mb-4">Framed and ready to hang</h2>
              <p className="mb-7 text-base">
                Your artwork arrives already framed, using premium materials that are thoughtfully
                sourced. Simply hang it in your living room, bedroom, bathroom, kid's room, craft
                room... or any room!
              </p>
              <a href="#" className="primary_btn">
                SHOP BEST SELLERS
              </a>
            </div>
          </div>
          <div className="w-9/12">
            <img
              src="https://cdn.shopify.com/s/files/1/0627/3476/2207/files/meet-wallnut-2.jpg?v=1652355484"
              alt="how-it-works"
              className="w-full"
            />
          </div>
        </div>
      </div>
      <div className="main_banner mt-28 relative">
        <img
          src="https://cdn.shopify.com/s/files/1/0627/3476/2207/files/meet-wallnut-3.jpg?v=1652355498"
          className="bannr_img"
          alt="Banner"
        />
        <div className="banner_content">
          <div className="container w-full">
            <div className="meet_wallnut_overlay text-white">
              <h1 className="mb-1 text-white">How it works</h1>
              <p>Sound too good to be true? This video explains everything.</p>
              <a href="#" className="flex items-center mb-8 lg:mb-2 text-white hover:text-red-100">
                <img
                  src="https://i.ibb.co/PFvTSLq/video-play.png"
                  alt="Video Play"
                  className="mr-3"
                />{' '}
                WATCH THE VIDEO
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default meetWallnut;
