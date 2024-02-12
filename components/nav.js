class Nav extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `

<!-- 
This example requires updating your template:
    <html class="h-full bg-gray-100">
     <body class="h-full">
-->

<nav class="bg-teal opacity-80 shadow-lg fixed top-0 left-0 w-screen z-10">
    <div x-data="{
                    isOpen: false,
                    tab: 'tab1'
                }" 
                class="mx-auto max-w-7xl px-12 sm:px-7 lg:px-8">
        <div class="flex h-16 items-center justify-between">
            <div class="flex items-center">

                <!-- Desktop Navigation  -->

                <div class="hidden md:block">
                    <div class="flex items-baseline space-x-4">
                        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                        <a href="#" @click="tab = 'tab1'" :class="{'bg-success text-blue' : tab ==='tab1'}"
                            class="hover:bg-success no-underline text-success hover:text-blue px-3 py-2 rounded-md text-sm font-medium"
                            aria-current="page">Dashboard</a>

                        <a href="#projects" @click="tab = 'tab5'" :class="{'bg-success text-blue' : tab ==='tab5'}"
                            class="no-underline hover:bg-success text-success hover:text-blue px-3 py-2 rounded-md text-sm font-medium">Projects</a>
                            
                        <a href="#about" @click="tab = 'tab2'" :class="{'bg-success text-blue' : tab ==='tab2'}"
                            class="no-underline hover:bg-success text-success hover:text-blue px-3 py-2 rounded-md text-sm font-medium">About</a>

                        <a href="#education" @click="tab = 'tab3'" :class="{'bg-success text-blue' : tab ==='tab3'}"
                            class="no-underline hover:bg-success text-success hover:text-blue px-3 py-2 rounded-md text-sm font-medium">Education</a>

                        <a href="#skills" @click="tab = 'tab4'" :class="{'bg-success text-blue' : tab ==='tab4'}"
                            class="no-underline hover:bg-success text-success hover:text-blue px-3 py-2 rounded-md text-sm font-medium">Skills</a>

                        <a href="#contact" @click="tab = 'tab6'" :class="{'bg-success text-blue' : tab ==='tab6'}"
                            class="no-underline hover:bg-success text-success hover:text-blue px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                    </div>
                </div>
            </div>
            <div class="block">
                <div class="ml-4 flex flex-row items-inline justify-center md:ml-6">

                    <!-- Profile -->

                    <div class="flex ml-4">
                        <div>
                            <span class="sr-only">Open user menu</span>
                            <p class="text-slate-300 py-2 rounded-md text-base font-medium antialiased">
                                Md. Sabbir Hossain
                            </p>
                        </div>
                        <div class="hidden md:block pl-3 py-1">
                            <img class="h-8 w-8 rounded-full ring-2 ring-slate-400"
                                src="/img/sabbir(350).png" alt="Your Company">
                        </div>
                    </div>
                </div>
            </div>

            <div class="-mr-2 flex items-inline justify-center md:hidden">

                <!-- Mobile menu button -->

                <button @click="isOpen = !isOpen" type="button"
                    class="inline-flex shadow-2xl rounded-md text-success p-2"
                    aria-controls="mobile-menu" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>

                    <!--Heroicon name: outline/bars-3
                        Menu open: "hidden", Menu closed: "block"-->

                    <svg :class="isOpen ? 'hidden' : 'block'" class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>

                    <!--  Heroicon name: outline/x-mark
                        Menu open: "block", Menu closed: "hidden"-->

                    <svg :class="isOpen ? 'block' : 'hidden'" class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>

        <!-- Mobile menu -->

        <div :class="isOpen ? 'block' : 'hidden'" class="md:hidden block" x-show="isOpen"
            x-transition:enter="transition transform origin-top-left ease-out duration-100"
            x-transition:enter-start="opacity-0 scale-90" x-transition:enter-end="opacity-100 scale-100"
            x-transition:leave="transition transform origin-top-left ease-in duration-75"
            x-transition:leave-start="opacity-100 scale-100" x-transition:leave-end="opacity-0 scale-90"
            id="mobile-menu">
            <div class="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                <a href="#" @click="tab = 'tab1'" :class="{'bg-success text-blue' : tab ==='tab1'}"
                    class="no-underline hover:bg-success text-success hover:text-blue block px-3 py-2 rounded-md text-base font-medium duration-100">Dashboard</a>

                <a href="#projects" @click="tab = 'tab5'" :class="{'bg-success text-blue' : tab ==='tab5'}"
                    class="no-underline hover:bg-success text-success hover:text-blue block px-3 py-2 rounded-md text-base font-medium duration-100">Projects</a>
                    
                <a href="#about" @click="tab = 'tab2'" :class="{'bg-success text-blue' : tab ==='tab2'}"
                    class="no-underline hover:bg-success text-success hover:text-blue block px-3 py-2 rounded-md text-base font-medium duration-100">About</a>

                <a href="#education" @click="tab = 'tab3'" :class="{'bg-success text-blue' : tab ==='tab3'}"
                    class="no-underline hover:bg-success text-success hover:text-blue block px-3 py-2 rounded-md text-base font-medium duration-100">Education</a>

                <a href="#skills" @click="tab = 'tab4'" :class="{'bg-success text-blue' : tab ==='tab4'}"
                    class="no-underline hover:bg-success text-success hover:text-blue block px-3 py-2 rounded-md text-base font-medium duration-100">Skills</a>

                <a href="#contact" @click="tab = 'tab6'" :class="{'bg-success text-blue' : tab ==='tab6'}"
                    class="no-underline hover:bg-success text-success hover:text-blue block px-3 py-2 rounded-md text-base font-medium duration-100">Contact</a>
            </div>

        </div>
    </div>
</nav>

<header class="bg-blue fixed-top">
    <div class="min-h-full">
        <div class="mx-auto max-w-6xl py-8 px-4 sm:px-6 lg:px-8 shadow-lg">
            <!--
                <h1 class="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
            -->
        </div>
</header>

        `;
    }
}


window.customElements.define('nav-card', Nav);
