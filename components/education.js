
class Education extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `

<section class="flex min-h-screen justify-center">
  <div class="mx-auto h-auto max-w-7xl p-6 py-10 rounded-lg scroll-my-16" id="education">
    <div class="flex flex-wrap justify-around items-center font-bold text-3xl">
      <p class="p-4 text-teal dark:text-success">Qualification</p>
    </div>

    <div class="flex justify-around items-center">
      <p class="text-xl font-medium m-6 dark:text-yellow underline underline-offset-8 decoration-from-font decoration-teal">
        <i class="fa-solid fa-user-graduate"></i> Education |
        <i class="fa-solid fa-briefcase"></i> Work
      </p>
    </div>
    <ul>
      <li class="relative flex gap-3 md:gap-6 items-baseline py-4">
        <div class="z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            class="bi bi-circle-fill fill-teal dark:fill-yellow"
            viewBox="0 0 16 16"
          >
            <circle cx="8" cy="8" r="8" />
          </svg>
        </div>
        <div class="before:absolute before:left-[5.5px] before:lg:left-[6px] before:h-full before:w-[2px] before:bg-yellow dark:before:bg-teal"></div>
        <div class="bg-yellow dark:bg-success bg-opacity-50 rounded-lg p-3 hover:bg-opacity-80 dark:hover:bg-opacity-90 shadow-xl duration-200">
          <p class="text-xl font-bold text-teal">2017-2020</p>
          <p class="pt-2 text-base font-semibold">
            Computer Science and Engineering
          </p>
          <p class="pt-2 text-base font-medium">
            Daffodil International University
          </p>
        </div>
      </li>
      <li class="relative flex gap-3 md:gap-6 items-baseline py-4">
        <div class="z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            class="bi bi-circle-fill fill-teal dark:fill-yellow"
            viewBox="0 0 16 16"
          >
            <circle cx="8" cy="8" r="8" />
          </svg>
        </div>
        <div class="before:absolute before:left-[5.5px] before:lg:left-[6px] before:h-full before:w-[2px] before:bg-yellow dark:before:bg-teal"></div>
        <div class="bg-yellow dark:bg-success bg-opacity-50 rounded-lg p-3 hover:bg-opacity-80 dark:hover:bg-opacity-90 shadow-xl duration-200">
          <p class="text-xl font-bold text-teal">2018 | 2019</p>
          <p class="pt-2 text-base font-semibold">
            Trained on UX/UI Design | Bootcamp Workshop
          </p>
          <p class="pt-2 text-base font-medium">ICT DIVISION | Userhub</p>
        </div>
      </li>
      <li class="relative flex gap-3 md:gap-6 items-baseline py-4">
        <div class="z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            class="bi bi-circle-fill fill-teal dark:fill-yellow"
            viewBox="0 0 16 16"
          >
            <circle cx="8" cy="8" r="8" />
          </svg>
        </div>
        <div class="before:absolute before:left-[5.5px] before:lg:left-[6px] before:h-full before:w-[2px] before:bg-yellow dark:before:bg-teal"></div>
        <div class="bg-yellow dark:bg-success bg-opacity-50 rounded-lg p-3 hover:bg-opacity-80 dark:hover:bg-opacity-90 shadow-xl duration-200">
          <p class="text-xl font-bold text-teal">2021</p>
          <p class="pt-2 text-base font-semibold">Junior Fornt-end Developer</p>
          <p class="pt-2 text-base font-medium">Expert Consortium Ltd.</p>
        </div>
      </li>
      <li class="relative flex gap-3 md:gap-6 items-baseline py-4">
        <div class="z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            class="bi bi-circle-fill fill-teal dark:fill-yellow"
            viewBox="0 0 16 16"
          >
            <circle cx="8" cy="8" r="8" />
          </svg>
        </div>
        <div class="before:absolute before:left-[5.5px] before:lg:left-[6px] before:h-full before:bg-yellow dark:before:bg-teal"></div>
        <div class="bg-yellow dark:bg-success bg-opacity-50 rounded-lg p-3 hover:bg-opacity-80 dark:hover:bg-opacity-90 shadow-xl duration-200">
          <p class="text-xl font-bold text-teal">2022</p>
          <p class="pt-2 text-base font-semibold">Junior Back-end Developer</p>
          <p class="pt-2 text-base font-medium">Beautysiaa Ltd.</p>
        </div>
      </li>
    </ul>
  </div>
</section>

        `;
    }
}


window.customElements.define('education-card', Education);
