class Skill extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <section class="flex min-h-auto justify-center">
    <div class="mx-auto h-auto max-w-7xl p-6 mb-10 pb-16 bg-slate-300 rounded-lg bg-slate-100 shadow-2xl scroll-my-16" id="skills">
    <div class="flex flex-wrap p-4 justify-around items-center font-bold text-3xl">
      <p class="p-4 text-teal">Skills</p>
    </div>

    <div class="w-full grid grid-cols-9 items-center mx-auto py-6 rounded-lg">
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
        class="col-span-9 md:col-span-4 p-2 bg-teal rounded-lg ">
        <div class="inline-flex space-x-32 items-center md:space-x-60">
          <p class="text-success font-bold sm:text-xl md:text-2xl ml-4">
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

        x-transition:enter="transition transform origin-top-left ease-out duration-100"
        x-transition:enter-start="opacity-0 scale-90" 
        x-transition:enter-end="opacity-100 scale-100"
        x-transition:leave="transition transform origin-top-left ease-in duration-75"
        x-transition:leave-start="opacity-100 scale-100" 
        x-transition:leave-end="opacity-0 scale-90" 

        :id="$id('dropdown-button')"
          style="display: none;" class="col-span-9 md:col-span-4 w-full h-full">
          <div class="w-full h-full rounded-md p-3 md:pl-4">
            <h1 class="text-success text-base font-medium py-2 align-right">
              Html
            </h1>
            <div class="bg-success w-full h-2 rounded-lg"></div>
            <div class="relative -top-2 bg-yellow w-[255px] md:w-[400px] h-2 rounded-lg">
              <span
                class="relative bg-yellow -top-8 ml-64 md:ml-[100%] rounded-t-lg rounded-br-lg p-1 text-blue items-center">80%</span>
              <div class="relative ml-64 md:ml-[400px] -top-[35px] md:-top-9 -rotate-45"><i
                  class="fa-solid fa-caret-up text-yellow"></i></div>
            </div>
            <h1 class="text-success text-base font-medium py-2 align-right">
              Css
            </h1>
            <div class="bg-success w-full h-2 rounded-lg"></div>
            <div class="relative -top-2 bg-yellow w-52 md:w-80 h-2 rounded-lg">
              <span
                class="absolute bg-yellow -top-9 ml-[207px] md:ml-80 rounded-t-lg rounded-br-lg p-1 text-blue items-center">70%</span>
              <div class="relative ml-[208px] md:ml-80 -top-[11px] md:-top-3 -rotate-45"><i
                  class="fa-solid fa-caret-up text-yellow"></i></div>
            </div>

            <h1 class="text-success text-base font-medium py-2 align-right">
              React Js
            </h1>
            <div class="bg-success w-full h-2 rounded-lg"></div>
            <div class="relative -top-2 bg-yellow w-52 md:w-80 h-2 rounded-lg">
              <span
                class="absolute bg-yellow -top-9 ml-[207px] md:ml-80 rounded-t-lg rounded-br-lg p-1 text-blue items-center">70%</span>
              <div class="relative ml-[208px] md:ml-80 -top-[11px] md:-top-3 -rotate-45"><i
                  class="fa-solid fa-caret-up text-yellow"></i></div>
            </div>
            <h1 class="text-success text-base font-medium py-2 align-right">
              Alpine.js
            </h1>
            <div class="bg-success w-full h-2 rounded-lg"></div>
            <div class="relative -top-2 bg-yellow w-[160px] md:w-60 h-2 rounded-lg">
              <span
                class="relative bg-yellow -top-8 ml-[160px] md:ml-60 rounded-t-lg rounded-br-lg p-1 text-blue items-center">50%</span>
              <div class="relative ml-[160px] md:ml-60 -top-9 -rotate-45"><i
                  class="fa-solid fa-caret-up text-yellow"></i></div>
            </div>
            <h1 class="text-success text-base font-medium py-2 align-right">
              Tailwind CSS
            </h1>
            <div class="bg-success w-full h-2 rounded-lg"></div>
            <div class="relative -top-2 bg-yellow w-[160px] md:w-60 h-2 rounded-lg">
              <span
                class="relative bg-yellow -top-8 ml-[160px] md:ml-60 rounded-t-lg rounded-br-lg p-1 text-blue items-center">50%</span>
              <div class="relative ml-[160px] md:ml-60 -top-9 -rotate-45"><i
                  class="fa-solid fa-caret-up text-yellow"></i></div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-1 w-full h-full justify-around items-center">
        <div class="w-4 h-4"></div>
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
        class="col-span-9 md:col-span-4 p-2 bg-teal rounded-lg">
        <div class="inline-flex space-x-32 items-center md:space-x-60">
          <p class="text-success font-bold sm:text-xl md:text-2xl ml-4">
            <i class="fa-solid fa-terminal"></i>
            Back-end Skills&nbsp;
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
          style="display: none;" class="col-span-9 md:col-span-4 w-full h-full">
          <div class="w-full h-full rounded-md p-3 md:pl-4">
            <h1 class="text-success text-base font-medium py-2 align-right">
              Php
            </h1>
            <div class="bg-success w-full h-2 rounded-lg"></div>
            <div class="relative -top-2 bg-yellow w-52 md:w-80 h-2 rounded-lg">
              <span
                class="absolute bg-yellow -top-9 ml-[207px] md:ml-80 rounded-t-lg rounded-br-lg p-1 text-blue items-center">70%</span>
              <div class="relative ml-[208px] md:ml-80 -top-[11px] md:-top-3 -rotate-45"><i
                  class="fa-solid fa-caret-up text-yellow"></i></div>
            </div>
            <h1 class="text-success text-base font-medium py-2 align-right">
              Mysql
            </h1>
            <div class="bg-success w-full h-2 rounded-lg"></div>
            <div class="relative -top-2 bg-yellow w-52 md:w-80 h-2 rounded-lg">
              <span
                class="absolute bg-yellow -top-9 ml-[207px] md:ml-80 rounded-t-lg rounded-br-lg p-1 text-blue items-center">70%</span>
              <div class="relative ml-[208px] md:ml-80 -top-[11px] md:-top-3 -rotate-45"><i
                  class="fa-solid fa-caret-up text-yellow"></i></div>
            </div>
            <h1 class="text-success text-base font-medium py-2 align-right">
              Mongo DB
            </h1>
            <div class="bg-success w-full h-2 rounded-lg"></div>
            <div class="relative -top-2 bg-yellow w-[255px] md:w-[400px] h-2 rounded-lg">
              <span
                class="relative bg-yellow -top-8 ml-64 md:ml-[100%] rounded-t-lg rounded-br-lg p-1 text-blue items-center">80%</span>
              <div class="relative ml-64 md:ml-[400px] -top-[35px] md:-top-9 -rotate-45"><i
                  class="fa-solid fa-caret-up text-yellow"></i></div>
            </div>
            <h1 class="text-success text-base font-medium py-2 align-right">
              Laravel
            </h1>
            <div class="bg-success w-full h-2 rounded-lg"></div>
            <div class="relative -top-2 bg-yellow w-52 md:w-80 h-2 rounded-lg">
              <span
                class="absolute bg-yellow -top-9 ml-[207px] md:ml-80 rounded-t-lg rounded-br-lg p-1 text-blue items-center">70%</span>
              <div class="relative ml-[208px] md:ml-80 -top-[11px] md:-top-3 -rotate-45"><i
                  class="fa-solid fa-caret-up text-yellow"></i></div>
            </div>
            <h1 class="text-success text-base font-medium py-2 align-right">
              Node.js
            </h1>
            <div class="bg-success w-full h-2 rounded-lg"></div>
            <div class="relative -top-2 bg-yellow w-[160px] md:w-60 h-2 rounded-lg">
              <span
                class="relative bg-yellow -top-8 ml-[160px] md:ml-60 rounded-t-lg rounded-br-lg p-1 text-blue items-center">50%</span>
              <div class="relative ml-[160px] md:ml-60 -top-9 -rotate-45"><i
                  class="fa-solid fa-caret-up text-yellow"></i></div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-9 w-full h-full justify-around items-center">
        <div class="w-4 h-4"></div>
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
        class="col-span-9 md:col-span-4 p-2 bg-teal rounded-lg">
        <div class="inline-flex space-x-40 items-center md:space-x-72">
          <p class="text-success font-bold sm:text-xl md:text-2xl ml-4">
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
          <div class="w-full h-full rounded-md p-3 md:pl-4">
            <h1 class="text-success text-base font-medium py-2 align-right">
              Figma
            </h1>
            <div class="bg-success w-full h-2 rounded-lg"></div>
            <div class="relative -top-2 bg-yellow w-[160px] md:w-60 h-2 rounded-lg">
              <span
                class="relative bg-yellow -top-8 ml-[160px] md:ml-60 rounded-t-lg rounded-br-lg p-1 text-blue items-center">50%</span>
              <div class="relative ml-[160px] md:ml-60 -top-9 -rotate-45"><i
                  class="fa-solid fa-caret-up text-yellow"></i></div>
            </div>
            <h1 class="text-success text-base font-medium py-2 align-right">
              Adobe XD
            </h1>
            <div class="bg-success w-full h-2 rounded-lg"></div>
            <div class="relative -top-2 bg-yellow w-[160px] md:w-60 h-2 rounded-lg">
              <span
                class="relative bg-yellow -top-8 ml-[160px] md:ml-60 rounded-t-lg rounded-br-lg p-1 text-blue items-center">50%</span>
              <div class="relative ml-[160px] md:ml-60 -top-9 -rotate-45"><i
                  class="fa-solid fa-caret-up text-yellow"></i></div>
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
