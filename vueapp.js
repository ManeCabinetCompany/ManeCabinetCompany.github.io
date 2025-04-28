Vue.createApp({
    data: function () {
        return {
            hi: "hey there",
            pics: [
                "pics/IMG_5677.jpg",
                "pics/IMG_3523.jpg",
                "pics/IMG_5677.jpg",
                "pics/IMG_3523.jpg",
                "pics/IMG_5677.jpg",
                "pics/IMG_3523.jpg",
                "pics/IMG_5677.jpg",
                "pics/IMG_3523.jpg",
                "pics/IMG_5677.jpg",
            ],
            isModalOpen: false,
            currentIndex: 0,
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
        openModal: function (index) {
            this.currentIndex = index; // Set the clicked image's index
            this.isModalOpen = true;
        },
        closeModal: function () {
            this.isModalOpen = false;
        },
        nextImage: function () {
            // Move to the next image; wrap around to the first image if at the end
            this.currentIndex = (this.currentIndex + 1) % this.pics.length;
        },
        prevImage: function () {
            // Move to the previous image; wrap around to the last image if at the beginning
            this.currentIndex = (this.currentIndex - 1 + this.pics.length) % this.pics.length;
        },
    },
    created: function () {
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

