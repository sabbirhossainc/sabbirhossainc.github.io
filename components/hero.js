class Hero extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `

<section>
    <div class="mx-auto h-auto max-w-7xl 
                    py-6 md:py-24 px-6 lg:py-28">
       
        <div class="flex flex-wrap h-auto md:gap-52
                    justify-center md:items-center rounded-lg border-2 border-navy
                    dark:border-2 border-dotted dark:border-success shadow-2xl">
        
                    <div class="md:order-2 m-6">
                        <img class="h-36 w-36 md:h-80 md:w-80 md:scale-110 lg:scale-125
                        bg-origin-content ring-4 ring-teal bg-center 
                        rounded-full drop-shadow-2xl" src="/img/sabbir_black.png" alt="">
                    </div>

            <div class="order-1 h-auto items-center px-4">
                <div class="order-2 md:px-4 dark:text-success md:mt-10">
                    <p class="text-2xl font-medium text-4xl md:text-5xl">
                    Hi, I'am Sabbir.
                    </p>
                    <p class="text-lg py-2 font-semibold md:text-xl">
                    Front-end Developer
                    </p>
                    <p class="text-sm font-medium text-base">
                        Sound experience in Fornt-end and UX/UI.
                        </br> 
                        High level experience in web design and development, producing quality work.
                    </p>
                    <div class="border-b-2 mt-2 border-navy"></div>

                    <div class="flex inline-block space-x-7 my-3 py-3 md:py-2 justify-center md:justify-start bg-slate-300 rounded-md md:pl-4 items-center shadow-md">
                        <a href="https://github.com/sabbirhossainc" target="_blank"
                        class="text-teal hover:text-blue p-1 rounded-full motion-safe:animate-pulse hover:animate-none duration-200">
                            <i class="fa-brands fa-github scale-[2]"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/sabbirhossainbio" target="_blank"
                        class="text-teal hover:text-blue p-1 rounded-full motion-safe:animate-pulse hover:animate-none duration-200">
                            <i class="fa-brands fa-linkedin scale-[2]"></i>
                        </a>
                        <a href="https://www.facebook.com/sabbirhossainf" target="_blank"
                        class="text-teal hover:text-blue p-1 rounded-full motion-safe:animate-pulse hover:animate-none duration-200">
                            <i class="fa-brands fa-facebook scale-[2]"></i>
                        </a>
                    </div>

                    <div class="border-t-2 mb-2 border-navy"></div>
                    
                    </div>
                    <div class="flex order-3 md:space-x-6 md:px-4 py-3 items-center md:items-start justify-around md:justify-start">
                    <a href="#contact" class="rounded-md bg-teal text-success antialiased
                    p-2 md:p-3 items-center uppercase font-medium
                    hover:bg-success hover:text-blue duration-500 shadow-xl">
                    Contact Me
                    <i class="fa-solid fa-circle-chevron-right"></i>
                    </a>
                    <a href="/pdf/sabbir_hossain_resume.pdf"
                    class="rounded-md bg-teal text-success antialiased
                    space-x-2 p-2 md:p-3 items-center uppercase font-medium
                    hover:bg-success hover:text-blue
                    
                            dark:ring-offset-0 dark:ring-inset dark:ring-success hover:ring-teal
                            duration-300 shadow-xl">
                            Download CV
                            <i class="fa-solid fa-file-arrow-down motion-safe:animate-bounce"></i>
                            </a>
                            </div>
                            </div>
                            </div>
                            </div>
                            </section>
                            
                            `;
  }
}
// md:ring-2 md:dark:ring-2 ring-offset-2 ring-blue

window.customElements.define("hero-card", Hero);
