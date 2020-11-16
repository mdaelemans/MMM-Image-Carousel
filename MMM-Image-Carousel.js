Module.register("MMM-Image-Carousel", {
    defaults: {
        images: [],
    },

    imageIndex: 0,

    start: function () {
        // Update data
        this.scheduleUpdate()
    },

    getDom: function () {
        // Create container
        var container = document.createElement('div')

        // Get image
        var image = this.config.images[ this.imageIndex ]

        // Create element
        var div = document.createElement('div')
        
        div.innerHTML = `<img src="${ image.url }" alt="${ image.name }" style="max-width: 400px;">`

        container.appendChild( div )

        return container
    },

    scheduleUpdate: function () {
        setInterval( () => {
            // Update image index
            var newIndex = this.imageIndex + 1

            // Check if image exists
            if( !this.config.images[ newIndex ] ) {
                newIndex = 0
            }

            // Set image index
            this.imageIndex = newIndex

            // Update DOM
            this.updateDom()
        }, 1000 * 10 ); // 10 seconds
    },

    notificationReceived: function () { },

    socketNotificationReceived: function () { },
})