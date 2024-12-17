Vue.createApp({
    data: function () {
        return {
            hi: "hey there"
        };
    },
    methods: {
        changehi: function () {
            this.hi = "not hey there"
            console.log("hi")
        },
        navigateToGallery: function () {
            window.location.href = "gallery.html";
        },
        navigateToContact: function () {
            window.location.href = "contact.html";
        },
    },
    created: async function () {
    },
    mounted() {
        // This will run after the DOM has been rendered
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

        // Add a click event to each "navbar-burger"
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {
                console.log(el);

                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                console.log(target);
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            });
        });
    }
}).mount("#app")

