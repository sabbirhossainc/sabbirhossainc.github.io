class About extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `

    <section class="flex min-h-auto justify-center" >
<div class="mx-auto h-auto max-w-7xl p-6 py-6 bg-slate-300 rounded-lg shadow-2xl scroll-my-16"
 id="about">
      <div
        class="flex flex-wrap p-4 justify-around items-center font-bold text-3xl text-teal"
      >
        About
      </div>
      <div
        class="bg-teal text-white text-justify p-12 my-6 mb-20 shadow-md rounded-md md:shadow-lg bg-opacity-90 hover:bg-opacity-100 duration-200"
      >
        <p class="text-success font-bold text-center uppercase">
          _ Hello Sabbir here _
        </p>
        <!-- <br> -->
        <p
          class="text-success flow-root py-10 first-letter:text-3xl indent-8 font-medium justify-center"
        >
          The first quality that comes to my mind is I am a quick learner and a
          self-motivated person. I am a good presenter. On top of that, I
          managed to participate in 5 seminars and workshops as
          well. My full name is Md. Sabbir Hossain and I was
          born in my hometown Chuadanga. I have completed my bachelor of
          computer science and engineering degree from Daffodil International
          University. My goal is to become a good Web Developer and I love to
          inspire people who can eventually help to reach their goals. So I
          believe in people motivation and people management which I am
          passionate about fascinated by work.
        </p>
      </div>
    </div>
    </section>
    `;
  }
}

window.customElements.define("about-card", About);
