class About extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `

    <section>
<div class="mx-auto h-auto max-w-7xl p-6 py-6 scroll-my-16"
 id="about">
      <div class="flex flex-wrap py-4 mb-10 justify-around items-center font-bold text-3xl">
            <p class="text-teal dark:text-success">About</p>
            </div>
      <div
        class="bg-teal text-white text-justify p-12 my-6 mb-20 shadow-md rounded-md md:shadow-lg bg-opacity-90 hover:bg-opacity-100 duration-200"
      >
        <p class="text-success font-bold text-center uppercase">
          _ Hello, Sabbir here _
        </p>
        <!-- <br> -->
        <p
          class="text-success flow-root pt-10 first-letter:text-3xl indent-8 font-medium justify-center"
        >
        The first quality that comes to my mind is I am a quick learner and a self-motivated person. On top of that, I managed to participate in range of seminars and workshops.
        I have completed my bachelor of computer science and engineering degree from Daffodil International University. My goal is to become a Full Stack Developer and I love to inspire people who can eventually help to reach their goals. I believe in people motivation and people management which I am passionate about fascinated by work.
      </p>
        <p class="text-success font-medium justify-center py-5">
          <strong class="text-yellow">Front-End:</strong> &nbsp; HTML5, Tailwind CSS, Alpine.js, React, Redux, Next <br>
          <strong class="text-yellow">Back-End:</strong>&nbsp; MongoDb, MySQL, PostgreSQL<br>
          <strong class="text-yellow">Tools & Methods:</strong>&nbsp; Git, GitHub, Mobile/Responsive Development, Chrome Dev Tools<br>
          <strong class="text-yellow">Professional:</strong>&nbsp; Remote Work, Pair-Programming, Teamwork<br>
        </p>
        <p class="text-success pb-10 font-medium justify-center">
        Do not hesitate to contact me if you are willing to collaborate or need your application coded. Connect with me or send me an email at <span class="text-yellow select-all">shr472978@gmail.com</span> 
        </p>
      </div>
    </div>
    </section>
    `;
  }
}

window.customElements.define("about-card", About);
