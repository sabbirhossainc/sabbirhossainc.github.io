class Project extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
<section>
    <div class="mx-auto h-auto max-w-7xl mb-20 rounded-lg scroll-my-16" id="projects">
        <div class="flex flex-wrap py-4 mb-10 justify-around items-center font-bold text-3xl">
            <p class="text-teal dark:text-success">Projects</p>
        </div>
        <div class="bg-slate-100 w-screen md:h-[80%] md:w-auto md:px-12 md:mb-20 rounded-md bg-opacity-90 shadow-xl">

            <div class="swiper mySwiper scroll-smooth">
                <div class="swiper-wrapper items-center py-2">

                <div class="swiper-slide w-full flex-wrap md:flex-nowrap py-6 md:px-32 gap-8 md:gap-12">

                        <div class="px-6">
                            <img src="/img/dashboard.png" alt="" class="flex-shrink-0 rounded-md shadow-xl">
                        </div>
                        <div class="w-fit md:w-full py-2 text-3xl">
                            <p class="font-bold text-3xl text-[#000]">
                                EMS<span class="text-[#5700AD]"> Dashboard</span>
                            </p>
                            <p class="text-base text-justify p-8 md:p-3 w-screen md:w-auto">
                                Employee management system (EMS),
                                Employee management dashboard page,
                                Next.js project 
                            </p>
                            <a href="https://dashboard-ems-two.vercel.app/dashboard/employee-management" target="_blank"
                                class="bg-[#5700AD] py-1 rounded-md text-white text-center text-base font-medium px-4 hover:text-[#FCECFE] shadow-xl duration-200">
                                <span class="text-[#FCECFE]">Live</span> preview <i
                                    class="fa-solid fa-arrow-up-right-from-square"></i>
                            </a>
                        </div>
                    </div>

                    <div class="swiper-slide w-full flex-wrap md:flex-nowrap py-6 md:px-32 gap-8 md:gap-12">

                        <div class="px-6">
                            <img src="/img/flight-booking.png" alt="" class="flex-shrink-0 rounded-md shadow-xl">
                        </div>
                        <div class="w-fit md:w-full py-2 text-3xl">
                            <p class="font-bold text-3xl text-[#780bcd]">
                                Flight<span class="text-[#000]"> Booking</span>
                            </p>
                            <p class="text-base text-justify p-8 md:p-3 w-screen md:w-auto">
                            React project, Flight Booking Webapp.
                                Website adaptable to all devices,
                                with ui description and animated interactions.
                            </p>
                            <a href="https://main--flight-bookingapp.netlify.app/" target="_blank"
                                class="bg-[#780bcd] py-1 rounded-md text-white text-center text-base font-medium px-4 hover:text-[#000] shadow-xl duration-200">
                                <span class="text-[#fff]">Live</span> preview <i
                                    class="fa-solid fa-arrow-up-right-from-square"></i>
                            </a>
                        </div>
                    </div>

                    <div class="swiper-slide w-full flex-wrap md:flex-nowrap py-6 md:px-32 gap-8 md:gap-12">

                        <div class="px-6">
                            <img src="/img/shopping-cart.png" alt="" class="flex-shrink-0 rounded-md shadow-xl">
                        </div>
                        <div class="w-fit md:w-full py-2 text-3xl">
                            <p class="font-bold text-3xl text-[#171C2A]">
                            Shopping<span class="text-[#00D991]"> Cart</span>
                            </p>
                            <p class="text-base text-justify p-8 md:p-3 w-screen md:w-auto">
                            React project, Shopping Cart Webapp.
                                Website adaptable to all devices,
                                with ui description and animated interactions.
                            </p>
                            <a href="https://main--real-shopping-cart.netlify.app/" target="_blank"
                                class="bg-[#171C2A] py-1 rounded-md text-white text-center text-base font-medium px-4 hover:text-[#00D991] shadow-xl duration-200">
                                <span class="text-[#00D991]">Live</span> preview <i
                                    class="fa-solid fa-arrow-up-right-from-square"></i>
                            </a>
                        </div>
                    </div>
                    
                    <div class="swiper-slide w-full flex-wrap md:flex-nowrap py-6 md:px-32 gap-8 md:gap-12">

                        <div class="px-6">
                            <img src="/img/gallery.png" alt="" class="flex-shrink-0 rounded-md shadow-xl">
                        </div>
                        <div class="w-fit md:w-full py-2 text-3xl">
                            <p class="font-bold text-3xl text-overRide">
                            PHOTO<span class="text-indigo-500"> GALLERY</span>
                            </p>
                            <p class="text-base text-justify p-8 md:p-3 w-screen md:w-auto">
                                Website adaptable to all devices,
                                with ui description and animated interactions.
                                React Tailwind CSS project, Pixabay api used fetching images, data and so on.
                            </p>
                            <a href="https://gallerypull.netlify.app/" target="_blank"
                                class="bg-overRide py-1 rounded-md text-slate-200 text-center text-base font-medium px-4 hover:text-slate-900 shadow-xl duration-200">
                                <span class="text-slate-900">Live</span> preview <i
                                    class="fa-solid fa-arrow-up-right-from-square"></i>
                            </a>
                        </div>
                    </div>

                    <div class="swiper-slide w-full flex-wrap md:flex-nowrap py-6 md:px-32 gap-8 md:gap-12">

                        <div class="px-6">
                            <img src="/img/kidas.png" alt="" class="flex-shrink-0 rounded-md shadow-xl">
                        </div>
                        <div class="w-fit md:w-full py-2 text-3xl">
                            <p class="font-bold text-3xl text-[#0f2b5b]">
                                Kidas<span class="text-[#51b5e0]"> School</span>
                            </p>
                            <p class="text-base text-justify p-8 md:p-3 w-screen md:w-auto">
                                Website adaptable to all devices,
                                with ui description and animated interactions.
                                React project, Autistic School Website. Innovate | Achieve and so on.
                            </p>
                            <a href="https://kidas.netlify.app/" target="_blank"
                                class="bg-[#0f2b5b] py-1 rounded-md text-white text-center text-base font-medium px-4 hover:text-[#51b5e0] shadow-xl duration-200">
                                <span class="text-[#51b5e0]">Live</span> preview <i
                                    class="fa-solid fa-arrow-up-right-from-square"></i>
                            </a>
                        </div>
                    </div>
               
               
                    <div class="swiper-slide w-full flex-wrap md:flex-nowrap py-6 md:px-32 gap-8 md:gap-12">
                
                <div class="px-6">
                            <img src="/img/losangeles.png" alt="" class="flex-shrink-0 rounded-md shadow-xl">
                        </div>
                        <div class="w-fit md:w-full py-2 text-3xl">
                            <p class="font-bold text-3xl text-Mbrow">
                                Los<span class="text-Mblue">angeles</span>
                            </p>
                            <p class="text-base text-justify p-8 md:p-3 w-screen md:w-auto">
                            Website adaptable to all devices,
                            Fully customized with html,css;
                            Psd to html,css and js conversion project.
                            </p>
                            <a href="https://losangelsmountain.netlify.app/" target="_blank"
                                class="bg-Mblue py-1 rounded-md text-white text-center text-base font-medium px-4 hover:text-black shadow-xl duration-200">
                                <span class="text-black">Live</span> preview <i
                                    class="fa-solid fa-arrow-up-right-from-square"></i>
                            </a>
                        </div>
                    </div>

                <div class="swiper-slide w-full flex-wrap md:flex-nowrap py-6 md:px-32 gap-8 md:gap-12">
                
                <div class="px-6">
                            <img src="/img/homefi.png" alt="" class="flex-shrink-0 rounded-md shadow-xl">
                        </div>
                        <div class="w-fit md:w-full py-2 text-3xl">
                            <p class="font-bold text-3xl text-oldBlu">
                                Home<span class="text-old">fi</span>
                            </p>
                            <p class="text-base text-justify p-8 md:p-3 w-screen md:w-auto">
                                Website adaptable to all devices,
                                Fully customized with html,css;
                                Figma to html,css and js conversion project.
                            </p>
                            <a href="https://homefi-pointflow.netlify.app/" target="_blank"
                                class="bg-oldBlu py-1 rounded-md text-white text-center text-base font-medium px-4 hover:text-old shadow-xl duration-200">
                                <span class="text-old">Live</span> preview <i
                                    class="fa-solid fa-arrow-up-right-from-square"></i>
                            </a>
                        </div>
                    </div>
                    
                    <div class="swiper-slide w-full flex-wrap md:flex-nowrap py-6 md:px-32 gap-8 md:gap-12">

                        <div class="px-6">
                            <img src="/img/portfolio.png" alt="" class="flex-shrink-0 rounded-md shadow-xl">
                        </div>
                        <div class="w-fit md:w-full py-2 text-3xl">
                            <p class="font-bold text-3xl text-teal">
                                Portfolio<span class="text-slate-600"> Website</span>
                            </p>
                            <p class="text-base text-justify p-8 md:p-3 w-screen md:w-auto">
                                Website adaptable to all devices,
                                with Tailwind Ui description and animated interactions.
                                Author description and so on.
                            </p>
                            <a href="#"
                                class="bg-teal py-1 rounded-md text-success text-center text-base font-medium px-4 hover:text-yellow shadow-xl duration-200">
                                <span class="text-yellow">Live</span> preview <i
                                    class="fa-solid fa-arrow-up-right-from-square"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="swiper-button-next hidden md:block"></div>
                <div class="swiper-button-prev hidden md:block"></div>
                <div class="swiper-pagination"></div>

            </div>
        </div>
    </div>

</section>
`;
  }
}

window.customElements.define("project-card", Project);