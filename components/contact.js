class Contact extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `

<section class="flex min-h-screen justify-center">
        <div class="mx-auto h-auto max-w-7xl p-6  rounded-lg scroll-my-16" id="contact">
            <div class="flex flex-wrap p-4 justify-around items-center font-bold text-3xl">
                <p class="p-4 text-teal dark:text-success">Contact</p>
            </div>
            <div class="w-full items-center justify-around grid grid-cols-9 gap-2 md:gap-6 mx-auto mt-6 rounded-lg">
                <div class="w-full col-span-9 md:col-span-4 rounded-lg bg-teal py-6 md:py-36 shadow-xl">
                     <p class="font-semibold text-xl h-full text-center text-success">Keep In Touch</p>
                </div>

                <div class="col-span-1 w-full h-full"></div>

                <div class="w-full col-span-9 md:col-span-4 rounded-lg bg-teal p-6 shadow-xl">

                    <div class="flex inline-block items-center px-4 gap-2 justify-start 
                    shadow-lg rounded-lg hover:bg-blue hover:bg-opacity-50 duration-200">
                    <div class="m-3">
                    <i class="fa-brands fa-square-whatsapp text-success scale-[3]"></i>
                    </div>
                        <p class="font-medium text-base h-full m-3 text-yellow">
                            WhatsApp  
                            <br>
                            +8801827062978
                        </p>
                    </div>

                    <div class="w-full h-3"></div>

                    <div class="flex inline-block items-center px-4 gap-2 justify-start
                    shadow-lg rounded-lg hover:bg-blue hover:bg-opacity-50 duration-200">
                    <div class="m-3">
                    <i class="fa-solid fa-square-envelope text-success scale-[3]"></i>
                    </div>
                        <p class="font-medium text-base h-full m-3 text-yellow">
                            Email  
                            <br>
                            shr472978@gmail.com
                        </p>
                    </div>

                    <div class="w-full h-3"></div>

                    <div class="flex inline-block items-center px-4 gap-2 justify-center
                    shadow-lg rounded-lg hover:bg-blue hover:bg-opacity-50 duration-200">
                    <div class="m-3">
                    <i class="fa-solid fa-location-crosshairs text-success scale-[3]"></i>
                    </div>
                        <p class="font-medium text-justify text-base h-full m-3 text-yellow">
                            Location<br>
                            2 B/GHA 9, Road-2, Block B, Mirpur-2 
                            <br class="md:block hidden">
                            Dhaka 1216.
                        </p>
                    </div>

                </div>
                
            </div>

        </div>
</section>

          `;
    }
}

window.customElements.define("contact-card", Contact);
