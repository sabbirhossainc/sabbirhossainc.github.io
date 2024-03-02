class Contact extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
<section>
    <div class="mx-auto h-fit max-w-7xl p-6 md:px-16 pb-16 mb-32 bg-slate-300 rounded-lg shadow-2xl scroll-my-16"
        id="contact">
        <div class="flex flex-wrap p-4 justify-around items-center font-bold text-3xl">
            <p class="p-4 text-teal">Contact</p>
        </div>
        <div class="w-full items-center justify-around grid grid-cols-9 gap-2 md:gap-12 mx-auto pt-6 rounded-lg">

            <div
                class="w-full col-span-9 md:col-span-4 space-y-6 md:space-y-8 rounded-lg bg-teal py-8 md:py-24 shadow-2xl">
                <div class="flex justify-center p-2">
                    <i class="fa-solid fa-users-between-lines text-yellow scale-[3]"></i>
                </div>
                <div class="flex justify-center p-2">
                    <p class="font-semibold text-2xl md:text-3xl text-success">Get In Touch</p>
                </div>
                <div class="flex justify-center p-2">
                    <i class="fa-solid fa-face-smile text-yellow scale-[3]"></i>
                </div>
            </div>

            <div class="col-span-1 w-full h-full"></div>

            <div class="w-full h-full col-span-9 md:col-span-4 space-y-14 rounded-lg bg-teal p-6 shadow-2xl">

                <div class="flex inline-block items-center px-4 gap-2 justify-start 
                    shadow-2xl rounded-lg hover:bg-blue hover:bg-opacity-50 select-all duration-200">
                    <div class="m-3">
                        <i class="fa-brands fa-square-whatsapp text-success scale-[3]"></i>
                    </div>
                    <p class="font-medium text-base h-full m-5 text-yellow">
                        +8801827062978
                    </p>
                </div>


                <div class="flex inline-block items-center px-4 gap-2 justify-start
                    shadow-2xl rounded-lg hover:bg-blue hover:bg-opacity-50 select-all duration-200">
                    <div class="m-3">
                        <i class="fa-solid fa-square-envelope text-success scale-[3]"></i>
                    </div>
                    <p class="font-medium text-base h-full m-5 text-yellow">
                        shr472978@gmail.com
                    </p>
                </div>


                <div class="flex inline-block items-center px-4 gap-2 justify-start
                    shadow-2xl rounded-lg hover:bg-blue hover:bg-opacity-50 select-all duration-200">
                    <div class="m-3">
                        <i class="fa-solid fa-location-crosshairs text-success scale-[3]"></i>
                    </div>
                    <p class="font-medium text-justify text-base h-full m-5 text-yellow">
                        Mirpur, Dhaka.
                    </p>
                    <!-- <p class="font-medium text-justify text-base h-full m-5 text-yellow">
                            2 B/GHA 9, Road-2, Block B, Mirpur-2 
                            <br class="md:block hidden">
                            Dhaka 1216.
                        </p> -->
                </div>

            </div>

        </div>

    </div>
</section>
    `;
  }
}

window.customElements.define("contact-card", Contact);
