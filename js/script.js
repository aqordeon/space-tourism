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
                $('#title-destination').html(destination.name);
                $('#id-destination').html(destination.description);
                $('#avg-destination').html(destination.distance);
                $('#time-destination').html(destination.travel);
                $('#img-destination').html(destination.travel);
                document.getElementById("img-destination").src = `${destination.images.webp}`;

            }

        })

    })
})


// TECHNOLOGY
$('.technology-number').on('click', function() {
    $('.technology-number').removeClass('technology-active');
    $(this).addClass('technology-active');

    let technologyNumber = $(this).html()

    $.getJSON('data.json', function(data) {
        let technologies = data.technology[technologyNumber - 1];
        $('#content-name').html(technologies.name);
        $('#content-desc').html(technologies.description);
        document.getElementById("technology-image").src = `${technologies.images.portrait}`;
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
                $('#title-crew').html(data.crew[index].role);
                $('#content-name').html(data.crew[index].name);
                $('#content-desc').html(data.crew[index].bio);
                document.getElementById("crew-image").src = `${data.crew[index].images.webp}`;
            })
        }
    });




})