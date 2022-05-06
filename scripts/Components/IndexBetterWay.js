import React from 'react';

const IndexBetterWay = ({ settings }) => {
  const { blocks } = settings;

  console.log('vidhi' ,{blocks});

  return (
    <div className="bg-deep-moss py-16 text-white">
      <div className="container mx-auto py-2 px-5 lg:px-0">
        <div className="flex items-center flex-col lg:flex-row">
          <div className="lg:w-6/12 lg:px-16 pb-5 lg:pb-5">
            <h2 className="h2-nib-pro text-5xl font-bold text-white mb-4">A better way to art</h2>
            <p className="mb-7">We believe art can transform a house into a home. So why is art so difficult to find, frustrating to frame, and impossible to hang? That’s why we created an all-in-one solution for finding, framing, and hanging art, mess-free and stress-free. Your walls will thank you.</p>
            <a href="#" className="flex items-center text-white hover:text-red-100"><img src="https://i.ibb.co/PFvTSLq/video-play.png" alt="Video Play" className="mr-3" /> Watch the video</a>
          </div>
          <div className="w-6/12">
            <img src="https://i.ibb.co/VQc3QV1/how-it-works.png" alt="how-it-works" />
            {/* <a href="https://ibb.co/j8frZ7t"><img src="https://i.ibb.co/Cw8HsxL/better-way.png" alt="better-way" border="0"></a> */}
          </div>
        </div>
        <div className="flex items-center flex-col lg:flex-row">
          <div className="w-6/12">
            <img src="https://i.ibb.co/Cw8HsxL/better-way.png" alt="how-it-works" />
          </div>
          <div className="lg:w-6/12 lg:px-16 pt-5 lg:pt-5">
            <h2 className="h2-nib-pro text-5xl font-bold text-white mb-4">How it works</h2>
            <p className="mb-7">It's easy. Just pick a piece you love from our curated collection of high quality prints. Then, it’s made to order and delivered to you, fully assembled in the frame of your choice. The best part? Hanging is a breeze with our innovative Wallnut Mounting System™. It’s an adhesive-based wall mount with a built-in bubble level, so your frame slides right into place, super straight and damage-free. We’ve rethought everything, so all you have to do is enjoy it.</p>
            <a href="#" className="primary_btn">Shop All</a>
            <a href="#" className=" text-white hover:text-red-100">Learn more <img src="https://i.ibb.co/f9QMBy5/arrow-right-white.png" alt="Arrow Right" className="ml-6" /></a>
          </div>
        </div>
      </div>

      <div tabindex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed left-1/2 top-1/2 translate-y-2/4 z-50">
        <div class="flex items-start modal-body pr-4">
          <video width="100%" height="100%" controls autoplay class="pr-3">
            <source src="https://cdn.shopify.com/s/files/1/1564/7647/files/monthly_packages.mp4?v=1614849415" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button type="button" className="bg-transparent hover:text-gray-900 items-center ml-auto rounded-lg text-gray-400 text-sm">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
          </button>
        </div>
      </div>
    
    </div>
  );
};


export default IndexBetterWay;
