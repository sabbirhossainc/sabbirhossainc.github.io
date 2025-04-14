class About extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `

    <section>
<div class="mx-auto h-auto max-w-7xl p-6 py-6 scroll-my-16"
 id="about">
      <div class="flex flex-wrap py-4 mb-10 justify-around items-center font-bold text-3xl">
            <p class="text-teal dark:text-success">About Me</p>
            </div>
      <div
        class="bg-teal text-white text-justify p-12 my-6 mb-20 shadow-md rounded-md md:shadow-lg bg-opacity-90 hover:bg-opacity-100 duration-200"
      >
        <p class="text-success font-bold text-center uppercase">
          _ Hello, Sabbir here _
        </p>
     </br> 
        <p
          class="text-success flow-root pt-6 first-letter:text-3xl indent-8 font-medium justify-center"
        >
        Next.js Developer with a solid foundation in creating fast, scalable, and SEO-friendly web applications. Proficient in
modern React architecture, API integration, server-side rendering, and performance optimization. Committed to
writing clean code, focusing on user-centric design, and ensuring smooth developer experiences.
    </br>     </br> 
        I am a quick learner and a self-motivated individual. Additionally, I have participated in a variety of seminars and workshops. 
I earned my Bachelor’s degree in Computer Science and Engineering from Daffodil International University. My goal is to become a Full Stack Developer, and I am passionate about inspiring others to achieve their own goals. I believe in the power of motivation and effective people management, which fascinates me in my work.
      </p>
      <!--  <p class="text-success font-medium justify-center py-5">
          <strong class="text-yellow">Front-End:</strong> &nbsp; HTML,CSS, Tailwind CSS, Chart.js, React.js, Redux, Next.js <br>
          <strong class="text-yellow">Tools:</strong>&nbsp; Git, GitHub, Chrome Dev Tools<br>
          <strong class="text-yellow">Professional:</strong>&nbsp; Remote Work, Pair-Programming, Teamwork<br>
        </p> -->
        </br> 
        <p class="text-success pb-10 font-medium justify-center">
        Feel free to reach out if you are interested in collaborating or need assistance with your application. You can connect with me here or email me at <span class="text-yellow select-all">shr472978@gmail.com</span>.
        </p>
      </div>
    </div>
    </section>
    `;
  }
}

window.customElements.define("about-card", About);
