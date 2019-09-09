var random_result;
var lost = 0;
var win = 0;
var previous = 0;

var resetAndStart = function () {

    $(".crystals").empty();

    var images = [
        'https://i.etsystatic.com/13015452/r/il/d9eb95/1275014621/il_794xN.1275014621_8931.jpg',
        'https://smhttp-ssl-64693.nexcesscdn.net/media/catalog/product/cache/1/thumbnail/300x375/9df78eab33525d08d6e5fb8d27136e95/a/m/amethystpoint-energymuse.jpg',
        'https://thehealingchest.com/assets/images/blog/emotional-baggage.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5FSRSMgY_48AeCeXm-IB-YG3EJNj5gllTfN8joeH8jR6cP8KLkQ'];

    random_result = Math.floor(Math.random() * 69) + 30;


    $("#result").html('Random Result: ' + random_result);

    for (var i = 0; i < 4; i++) {

        var random = Math.floor(Math.random() * 11) + 1;

        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
        });
        crystal.css({
            "background-image": "url('" + images[i] + "')",
            "background-size": "cover"

        });


        $(".crystals").append(crystal);

    }

    $("#previous").html("Total Score: " + previous);

}


resetAndStart();


$(document).on('click', ".crystal", function () {

    var num = parseInt($(this).attr('data-random'));

    previous += num;


    $("#previous").html("Total score: " + previous);

    console.log(previous);

    if (previous > random_result) {

        lost++;

        $("#lost").html("You lost: " + lost);

        previous = 0;

        resetAndStart();

    }
    else if (previous === random_result) {

        win++;

        $("#win").html("You win: " + win);

        previous = 0;

        resetAndStart();

    }

});