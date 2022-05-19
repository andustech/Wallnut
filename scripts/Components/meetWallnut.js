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
                <p className="mb-2">
                  <span className="font-bold">Wall mount.*</span> It's adhesive-based, so you don't
                  have to worry about wall damage. It also comes with a built-in level, which makes
                  it easy to find the perfect placement.
                </p>
              </li>
              <li>
                <p className="mb-2">
                  <span className="font-bold">Frame hook.</span> It arrievs already attached to the
                  frame, so you can just slide it right into the amount.
                </p>
              </li>
            </ul>
            <a href="#" className="flex items-center mb-8 lg:mb-2 text-black hover:text-red-100">
              <img
                src="https://i.ibb.co/PFvTSLq/video-play.png"
                alt="Video Play"
                className="mr-3"
              />{' '}
              SEE IT IN ACTION
            </a>
            <p className="text-sm">
              *We recommend using the included hanging nails when extra support is needed. For more
              information, visit our FAQs.
            </p>
          </div>
        </div>

        <div className="how_it_work_items_container flex items-center flex-col lg:flex-row md:flex-col-reverse md:items-start">
          <div className="h-full lg:w-6/12 lg:px-16 pt-5 lg:pt-5 my-auto">
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
      {/* <div
        tabindex="-1"
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed left-1/2 top-1/2 translate-y-2/4 z-50"
      >
        <div class="flex md:flex-col-reverse items-start modal-body pr-4">
          <video width="100%" height="100%" controls autoplay class="pr-3">
            <source
              src="https://cdn.shopify.com/s/files/1/1564/7647/files/monthly_packages.mp4?v=1614849415"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <button
            type="button"
            className="bg-transparent hover:text-gray-900 items-center ml-auto rounded-lg text-gray-400 text-sm"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default meetWallnut;
