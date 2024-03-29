class Footer extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
        <footer
        class="z-10 fixed bottom-0 left-0 w-screen flex flex-col md:flex-row md:gap-2 items-center justify-center 
        bg-teal text-success
        h-16 opacity-90">
        <p class="text-sm text-center antialiased">
        Copyright &copy; 2024. All Rights reserved. 
        </p>
        <em class="text-sm text-center tracking-wider font-bold"> 
        Md Sabbir Hossain
        </em>
        </footer>
        `;
  }
}

window.customElements.define("footer-card", Footer);
