import React from 'react';

const IndexBetterWay = ({ settings }) => {

  return (
    <div className="better_way_main_container bg-deep-moss text-white">
      <div className="container">
        <div className='main_section_container'>
          <div className="video_items_containe">
            <div className="video_content ">
              <h2 className="">A better way to art</h2>
              <p className="">We believe art can transform a house into a home. So <br />why is art so difficult to find, frustrating to frame, and  <br />impossible to hang? That’s why we created an all-in- <br />one solution for finding, framing, and hanging art, mess- <br />free and stress-free. Your walls will thank you.</p>
              <a href="#" className=""><img src="https://i.ibb.co/PFvTSLq/video-play.png" alt="Video Play" className="mr-3" /> Watch the video</a>
            </div>
            <div className="sec_img">
              <img src="https://i.ibb.co/VQc3QV1/how-it-works.png" alt="how-it-works" className="w-full" />
              {/* <a href="https://ibb.co/j8frZ7t"><img src="https://i.ibb.co/Cw8HsxL/better-way.png" alt="better-way" border="0"></a> */}
            </div>
          </div>
          <div className="how_it_work_items_containe">
            <div className="sec_img">
              <img src="https://i.ibb.co/Cw8HsxL/better-way.png" alt="how-it-works" className="w-full" />
            </div>
            <div className="how_it_work_content">
              <h2 className="">How it works</h2>
              <p className="">It's easy. Just pick a piece you love from our curated  <br />collection of high quality prints. Then, it’s made to order <br />and delivered to you, fully assembled in the frame of <br />your choice. The best part? Hanging is a breeze with <br />our innovative Wallnut Mounting System™. It’s an <br />adhesive-based wall mount with a built-in bubble level, <br />so your frame slides right into place, super straight and <br />damage-free. We’ve rethought everything, so all you <br />have to do is enjoy it.</p>
              <a href="#" className="primary_btn">Shop All</a>
              <a href="#" className=" ">Learn more <img src="https://i.ibb.co/f9QMBy5/arrow-right-white.png" alt="Arrow Right" className="ml-6" /></a>
            </div>
          </div>
        </div>
      </div>

      <div tabindex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed left-1/2 top-1/2 translate-y-2/4 z-50">
        <div class="flex md:flex-col-reverse items-start modal-body pr-4">
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
