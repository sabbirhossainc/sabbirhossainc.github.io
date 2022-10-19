class Project extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `

<section class="flex min-h-max justify-center">
    <div class="mx-auto h-auto max-w-7xl py-10 rounded-lg scroll-my-16" id="projects">
        <div class="flex flex-wrap p-4 justify-around items-center font-bold text-3xl">
            <p class="p-4 text-teal  dark:text-success">Projects</p>
        </div>
        <div class="bg-slate-100 w-screen md:w-auto md:px-12 md:mb-20 rounded-md bg-opacity-90">

            <div class="swiper mySwiper scroll-smooth">
                <div class="swiper-wrapper items-center py-2">

                    <div class="swiper-slide w-full flex-wrap md:flex-nowrap py-6 md:px-32 gap-8 md:gap-12">
                        <div class="p-2">
                            <img src="/img/laragig.png" alt="" class="flex-shrink-0 rounded-md shadow-xl">
                        </div>
                        <div class="w-fit md:w-full py-2 text-3xl">
                            <p class="font-bold text-3xl text-denger">
                                Lara<span class="text-black">gigs</span>
                            </p>
                            <p class="text-base text-justify p-8 md:p-3 w-screen md:w-auto">
                                Website adaptable to all devices,
                                with ui description and animated interactions.
                                User authentication, post jobs, manage jobs and so on.
                            </p>
                            <a href="https://laragig.herokuapp.com/" target="_blank"
                                class="bg-denger py-1 rounded-md text-white text-center text-base font-medium px-4 hover:text-black shadow-xl duration-200">
                                <span class="text-black">Live</span> preview <i
                                    class="fa-solid fa-arrow-up-right-from-square"></i>
                            </a>
                        </div>
                    </div>


                    <div class="swiper-slide w-full flex-wrap md:flex-nowrap py-6 md:px-32 gap-8 md:gap-12">

                        <div class="p-2">
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

                        <div class="p-2">
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

                        <div class="p-2">
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

{
  /* <div class="flex gap-6 p-8 w-full overflow-x-scroll snap-x">
    <div class="flex-shrink-0 w-80 h-52 bg-cyan-300 rounded-xl snap-center">
    </div>

</div> */
}
