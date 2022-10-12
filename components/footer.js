class Footer extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
        <footer
        class="fixed bottom-0 left-0 w-full flex items-center justify-center 
        font-bold bg-teal text-success
        h-16 opacity-90">
        <p class="ml-2 text-xs md:text-sm antialiased">
        Copyright &copy; 2022. All Rights reserved. 
        <em class="font-weight-light"> 
        Md Sabbir Hossain
        </em>
        </p>
        </footer>
        `;
  }
}

window.customElements.define("footer-card", Footer);
