class Skill extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <section>
    <div class="mx-auto h-auto max-w-7xl p-6 mb-16 pb-16 bg-slate-300 rounded-lg bg-slate-100 shadow-2xl scroll-my-16" id="skills">
    <div class="flex flex-wrap p-4 justify-around items-center font-bold text-3xl">
      <p class="p-4 text-teal">My Skills</p>
    </div>

    <div class="w-full grid grid-cols-9 items-center mx-auto py-6 rounded-lg space-y-4">
      <div x-data="{
        open: true,
        toggle() {
            if (this.open) {
                return this.close()
            }

            this.$refs.button.focus()

            this.open = true
        },
        close(focusAfter) {
            if (! this.open) return

            this.open = false

            focusAfter && focusAfter.focus()
        }
      }" x-on:keydown.escape.prevent.stop="close($refs.button)" x-id="['dropdown-button']"
        class="col-span-9 p-2 bg-teal rounded-lg ">
        <div class="flex items-center justify-between px-2">
          <p class="text-success font-bold sm:text-md md:text-lg">
            <i class="fa-solid fa-code"></i> Fornt-end Skills
          </p>
          <button x-ref="button" x-on:click="toggle()" :aria-expanded="open" :aria-controls="$id('dropdown-button')"
            type="button" class="text-success hover:bg-success hover:text-blue rounded-full duration-200 p-1 hover:bg-opacity-80">
            <svg :class="open ? 'hidden' : 'block'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
              class="w-6 h-6 block" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path fill-rule="evenodd"
                d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                clip-rule="evenodd" />
            </svg>
            <svg :class="open ? 'block' : 'hidden'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
              class="w-6 h-6 block" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path fill-rule="evenodd"
                d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z"
                clip-rule="evenodd" />
            </svg>
          </button>
        </div>

        <div x-ref="panel" x-show="open"

        x-transition:enter="transition transform origin-top-left ease-in-out duration-100"
        x-transition:enter-start="opacity-0 scale-90" 
        x-transition:enter-end="opacity-100 scale-100"
        x-transition:leave="transition transform origin-top-left ease-in-out duration-75"
        x-transition:leave-start="opacity-100 scale-100" 
        x-transition:leave-end="opacity-0 scale-90" 

        :id="$id('dropdown-button')"
          style="display: none;" class="col-span-9 w-full h-full">
          <div class="w-full h-full rounded-md p-3 md:pl-4">
            <h1 class="text-success text-base font-medium py-2 align-right">
              Html
            </h1>
            <div class="relative bg-success w-full h-2 rounded-lg">
            <div class="bg-yellow w-[80%] h-2 rounded-lg animate-progress-80"></div>
              <div class="absolute -top-8 right-[calc((100%-80%)-(6rem-8px))] animate-badge-80">
                <div class="relative flex flex-col">
                  <span class="bg-yellow rounded-t-lg rounded-br-lg px-2 text-blue items-center">
                    80%
                  </span>
                  <span class="absolute rotate-45 translate-y-[15px] -translate-x-[2px] transform">
                    <i class="fa-solid fa-caret-left text-yellow"></i>
                  </span>
                </div>
              </div>
            </div>
            <h1 class="text-success text-base font-medium py-2 align-right">
              Css
            </h1>
            <div class="relative bg-success w-full h-2 rounded-lg">
            <div class="bg-yellow w-[70%] h-2 rounded-lg animate-progress-70"></div>
              <div class="absolute -top-8 right-[calc((100%-70%)-(5rem-3px))] animate-badge-70">
                <div class="relative flex flex-col">
                  <span class="bg-yellow rounded-t-lg rounded-br-lg px-2 text-blue items-center">
                    70%
                  </span>
                  <span class="absolute rotate-45 translate-y-[15px] -translate-x-[2px] transform">
                    <i class="fa-solid fa-caret-left text-yellow"></i>
                  </span>
                </div>
              </div>
            </div>
            <h1 class="text-success text-base font-medium py-2 align-right">
              React Js
            </h1>
           <div class="relative bg-success w-full h-2 rounded-lg">
            <div class="bg-yellow w-[85%] h-2 rounded-lg animate-progress-85"></div>
              <div class="absolute -top-8 right-[calc((100%-85%)-(6rem-6px))] animate-badge-85">
                <div class="relative flex flex-col">
                  <span class="bg-yellow rounded-t-lg rounded-br-lg px-2 text-blue items-center">
                    85%
                  </span>
                  <span class="absolute rotate-45 translate-y-[15px] -translate-x-[2px] transform">
                    <i class="fa-solid fa-caret-left text-yellow"></i>
                  </span>
                </div>
              </div>
            </div>
            <h1 class="text-success text-base font-medium py-2 align-right">
              Next.js
            </h1>
            <div class="relative bg-success w-full h-2 rounded-lg">
            <div class="bg-yellow w-[80%] h-2 rounded-lg animate-progress-80"></div>
              <div class="absolute -top-8 right-[calc((100%-80%)-(6rem-8px))] animate-badge-80">
                <div class="relative flex flex-col">
                  <span class="bg-yellow rounded-t-lg rounded-br-lg px-2 text-blue items-center">
                    80%
                  </span>
                  <span class="absolute rotate-45 translate-y-[15px] -translate-x-[2px] transform">
                    <i class="fa-solid fa-caret-left text-yellow"></i>
                  </span>
                </div>
              </div>
            </div>
            <h1 class="text-success text-base font-medium py-2 align-right">
              Tailwind CSS
            </h1>
            <div class="relative bg-success w-full h-2 rounded-lg">
            <div class="bg-yellow w-[70%] h-2 rounded-lg animate-progress-70"></div>
              <div class="absolute -top-8 right-[calc((100%-70%)-(5rem-3px))] animate-badge-70">
                <div class="relative flex flex-col">
                  <span class="bg-yellow rounded-t-lg rounded-br-lg px-2 text-blue items-center">
                    70%
                  </span>
                  <span class="absolute rotate-45 translate-y-[15px] -translate-x-[2px] transform">
                    <i class="fa-solid fa-caret-left text-yellow"></i>
                  </span>
                </div>
              </div>
            </div>
            <h1 class="text-success text-base font-medium py-2 align-right">
              Chart.js
            </h1>
            <div class="relative bg-success w-full h-2 rounded-lg">
            <div class="bg-yellow w-[60%] h-2 rounded-lg animate-progress-60"></div>
              <div class="absolute -top-8 right-[calc((100%-60%)-(5rem-5px))] animate-badge-60">
                <div class="relative flex flex-col">
                  <span class="bg-yellow rounded-t-lg rounded-br-lg px-2 text-blue items-center">
                    60%
                  </span>
                  <span class="absolute rotate-45 translate-y-[15px] -translate-x-[2px] transform">
                    <i class="fa-solid fa-caret-left text-yellow"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div x-data="{
        open: false,
        toggle() {
            if (this.open) {
                return this.close()
            }
  
            this.$refs.button.focus()
  
            this.open = true
        },
        close(focusAfter) {
            if (! this.open) return
  
            this.open = false
  
            focusAfter && focusAfter.focus()
        }
        }" x-on:keydown.escape.prevent.stop="close($refs.button)" x-id="['dropdown-button']"
        class="col-span-9 p-2 bg-teal rounded-lg">
        <div class="flex items-center justify-between px-2">
          <p class="text-success font-bold sm:text-md md:text-lg">
            <i class="fa-solid fa-bezier-curve"></i> UX/UI Skills &nbsp;
          </p>
          <button x-ref="button" x-on:click="toggle()" :aria-controls="$id('dropdown-button')" type="button"
            class="text-success hover:bg-success hover:text-blue rounded-full duration-200 p-1 hover:bg-opacity-80">
            <svg :class="open ? 'hidden' : 'block'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
              class="w-6 h-6 block" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path fill-rule="evenodd"
                d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                clip-rule="evenodd" />
            </svg>
            <svg :class="open ? 'block' : 'hidden'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
              class="w-6 h-6 block" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path fill-rule="evenodd"
                d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z"
                clip-rule="evenodd" />
            </svg>
          </button>
        </div>

        <div x-ref="panel" x-show="open" 

        x-transition:enter="transition transform origin-top-left ease-out duration-100"
        x-transition:enter-start="opacity-0 scale-90" 
        x-transition:enter-end="opacity-100 scale-100"
        x-transition:leave="transition transform origin-top-left ease-in duration-75"
        x-transition:leave-start="opacity-100 scale-100" 
        x-transition:leave-end="opacity-0 scale-90"
        
        :id="$id('dropdown-button')"
          style="display: none;" class="col-span-4 w-full h-full">
          <div class=" w-full h-full rounded-md p-3 md:pl-4">
            <h1 class="text-success text-base font-medium py-2 align-right">
              Figma
            </h1>
            <div class="relative bg-success w-full h-2 rounded-lg">
            <div class="bg-yellow w-[50%] h-2 rounded-lg animate-progress-50"></div>
              <div class="absolute -top-8 right-[calc(100%-50%-(5rem-5px))] animate-badge-50">
                <div class="relative flex flex-col">
                  <span class="bg-yellow rounded-t-lg rounded-br-lg px-2 text-blue items-center">
                    50%
                  </span>
                  <span class="absolute rotate-45 translate-y-[15px] -translate-x-[2px] transform">
                    <i class="fa-solid fa-caret-left text-yellow"></i>
                  </span>
                </div>
              </div>
            </div>
             
            <h1 class="text-success text-base font-medium py-2 align-right">
              Adobe XD
            </h1>
            <div class="relative bg-success w-full h-2 rounded-lg">
            <!-- Progress bar -->
            <div class="bg-yellow w-[50%] h-2 rounded-lg animate-progress-50"></div>
              <!-- Badge -->
              <div class="absolute -top-8 right-[calc(100%-50%-(5rem-5px))] animate-badge-50">
                <div class="relative flex flex-col">
                  <span class="bg-yellow rounded-t-lg rounded-br-lg px-2 text-blue items-center">
                    50%
                  </span>
                  <span class="absolute rotate-45 translate-y-[15px] -translate-x-[2px] transform">
                    <i class="fa-solid fa-caret-left text-yellow"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-1 w-full h-full justify-around items-center">
        <div class="w-4 h-4"></div>
      </div>

      <div class="col-span-4 w-full h-full justify-around items-center">
        <div class="w-4 h-4"></div>
      </div>
    </div>

  </div>
  </div>
  </section>
        `;
  }
}

window.customElements.define('skill-card', Skill);
