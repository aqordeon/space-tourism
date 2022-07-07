// $.getJSON('data.json', function(data) {
//     let destinations = data.destinations
//     $.each(destinations, function(i, destination) {
//         $('#title-destination').html(destination.travel)
//     });
// });


// DESTINATION
$('.navbar-destination').on('click', function() {
    $('.navbar-destination').removeClass('destination-active');
    $(this).addClass('destination-active');

    let navbarDestinations = $(this).html()

    $.getJSON('data.json', function(data) {
        let destinations = data.destinations;
        $.each(destinations, function(i, destination) {
            if (destination.name == navbarDestinations) {
                // console.log(destination);
                $('#img-destination').remove();
                $('#title-destination').remove();
                $('#id-destination').remove();
                $('#avg-destination').remove();
                $('#time-destination').remove();
                $('#image-destination').append(`<img src='${destination.images.webp}' alt="" srcset="" id="img-destination" class="reveal">`);
                $('.planet-destination').after(`<h1 class='title-destination reveal' id='title-destination'>${destination.name}</h1>`);
                $('.desc-destination-wrapper').append(`<p class='content-desc-destination reveal' id='id-destination'>${destination.description}</p>`);
                $('.avg-distance').append(`<p class='description-distance reveal' id='avg-destination'>${destination.distance}</p>`);
                $('.avg-time').append(`<p class='description-time reveal' id='time-destination'>${destination.travel}</p>`);
            }
        })
    })
})


// CREW
$('.crew-bullets li').on('click', function() {
    $('.crew-bullets li').removeClass('crew-active');
    $(this).addClass('crew-active');

    const list = document.querySelectorAll(".crew-bullets li");

    $('.crew-bullets li').each(function(index) {
        const containList = $(list[index]).hasClass("crew-active")
        if (containList == true) {
            $.getJSON('data.json', function(data) {
                // $('#title-crew').html(data.crew[index].role);
                // $('#content-name').html(data.crew[index].name);
                // $('#content-desc').html(data.crew[index].bio);
                // document.getElementById("crew-image").src = `${data.crew[index].images.webp}`;

                $('#title-crew').remove();
                $('#content-name').remove();
                $('#content-desc').remove();
                $('#crew-image').remove();

                $('.content-main').prepend(`
                <div class="wrapper-swipe-up"><h5 class="title-crew swipe-up" id="title-crew">${data.crew[index].role}</h5></div>
                <div class="wrapper-swipe-up"><h1 class="content-name swipe-up-high" id="content-name">${data.crew[index].name}</h1></div>
                <div class="wrapper-swipe-up"><p class="content-desc swipe-up-high  " id="content-desc">${data.crew[index].bio}</p></div>`);
                $('.crew-right').append(`<img src="${data.crew[index].images.webp}" alt="" srcset="" id="crew-image" class="crew-image reveal">`);
            })
        }
    });
})


// TECHNOLOGY
$('.technology-number').on('click', function() {
    $('.technology-number').removeClass('technology-active');
    $(this).addClass('technology-active');

    let technologyNumber = $(this).html()
    $.getJSON('data.json', function(data) {
            let technologies = data.technology[technologyNumber - 1];
            $('.content-main > .slide').remove();
            $('.content-main').append(`
            <div class="slide">
                <h1 class="content-name" id="content-name">${technologies.name}</h1>
            </div>
            <div class="slide animdelay4">
                <p class="content-desc" id="content-desc">${technologies.description}</p>
            </div>
            `);
            $('.technology-image').remove();
            $('.content-right').append(`
                <div class="technology-image slide-reverse animdelay2">
                    <img src="${technologies.images.portrait}" alt="" srcset="" id="technology-image">
                </div>
            `);
            // document.getElementById("technology-image").src = `${technologies.images.portrait}`;
        })
        // $.getJSON('data.json', function(data) {
        //     let technologies = data.technology[technologyNumber - 1];
        //     $('#content-name').html(technologies.name);
        //     $('#content-desc').html(technologies.description);
        // })
})