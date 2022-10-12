class Hero extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `

<section class="flex min-h-auto justify-center">
    <div class="mx-auto h-auto max-w-7xl
                    py-6 md:py-24 px-6 lg:py-28">
       
        <div class="flex flex-wrap h-auto md:gap-52
                    justify-center md:items-center rounded-lg 
                    border-2 border-dotted border-success">
        
                    <div class="md:order-2 m-6">
                        <img class="h-36 w-36 md:h-80 md:w-80 md:scale-110 lg:scale-125
                        bg-origin-content ring-4 ring-teal bg-center 
                        rounded-full drop-shadow-2xl" src="/img/sabbir(350).png" alt="">
                    </div>

            <div class="order-1 h-auto items-center px-4">
                <div class="order-2 px-4 dark:text-success md:mt-10">
                    <p class="text-2xl font-bold text-4xl md:text-5xl">
                    Hi, I'am Sabbir.
                    </p>
                    <p class="text-lg py-2 font-semibold md:text-xl">
                    Full Stack Web Developer
                    </p>
                    <p class="text-sm font-medium text-base">
                        Sound experience in web design, fornt-end.
                        </br> 
                        Good at backend development and producing quality work.
                    </p>
                    <div class="py-4">
                        <hr>
                    </div>

                    <div class="flex inline-block space-x-7 py-2 md:py-3 justify-center md:justify-start bg-slate-300 rounded-lg md:pl-4 items-center shadow-md">
                        <a href="https://github.com/sabbirhossainc" class="text-teal hover:text-blue p-1 rounded-full duration-200">
                            <i class="fa-brands fa-github scale-[2]"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/sabbirhossainbio" class="text-teal hover:text-blue p-1 rounded-full duration-200">
                            <i class="fa-brands fa-linkedin scale-[2]"></i>
                        </a>
                        <a href="https://www.facebook.com/sabbirhossainf" class="text-teal hover:text-blue p-1 rounded-full duration-200">
                            <i class="fa-brands fa-facebook scale-[2]"></i>
                        </a>
                    </div>

                    <div class="py-4"> <hr> </div>
                </div>
                    <div class="order-3 space-x-4 px-4 pb-4 md:pb-2 md:my-2">
                            <a href="#contact" class="rounded-md bg-teal text-success antialiased
                             p-2 md:p-3 items-center
                            hover:bg-success hover:text-blue duration-500 shadow-xl">
                                Contact Me
                                <i class="fa-solid fa-circle-chevron-right"></i>
                            </a>
                            <a href="/pdf/Sabbir Hossain-CV.pdf"
                            class="rounded-md bg-teal text-success antialiased
                            space-x-2 p-2 ml-4 md:p-3 items-center
                            hover:bg-success hover:text-blue
                            motion-safe:animate-pulse hover:animate-none duration-500 shadow-xl">
                                Download CV
                                <i class="fa-solid fa-file-arrow-down"></i>
                            </a>
                    </div>
            </div>
        </div>
    </div>
</section>

        `;
    }
}

window.customElements.define('hero-card', Hero);