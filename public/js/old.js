
$(document).ready(function() {
  $('.parallax').parallax();
  $('.sidenav').sidenav();
  var topics = [
    "kitten",
    "dogs",
    "puppy",
    "capybara",
    "hamster",
    "chinchilla",
    "rabbit",
    "alpaca",
    "baby tiger",
    "pallas cat",
    "dolphin",
    "trending"
  ];
  // $("#add-animal").on("click", function(event) {
  //   event.preventDefault();
  //   var newAnimal = $("input").eq(0).val();
  //   if (newAnimal.length > 2) {
  //     topics.push(newAnimal);
  //     alert(topics)
  //   }
  // });
  function populateButtons(arrayToUse, classToAdd, areaToAddTo) {
    $(areaToAddTo).empty();
    for (var i = 0; i < arrayToUse.length; i++) {
      var button = $("<button>");
      button.addClass(classToAdd);
      button.attr("data-type", arrayToUse[i]);
      button.text(arrayToUse[i]);
      $(areaToAddTo).append(button);
    }
  }
    //  $.each(topics, function(i, val) {
    //       var button = $("<button>");
    //       button.addClass("btn");
    //       button.text(val);
    //       button.attr("id", "topic_" + i + "  ");
    //       $("#buttonWell").append(button);
    // })

  $("#animal-buttons").on("click", 'button', function() {
    var animal = $(this).text();
    var queryURL ="https://api.giphy.com/v1/gifs/search?q=" + animal + 
    "&api_key=IRB5UHpnFotXqJl0k2m6bqbTX5PAdV67";
    $.ajax({
          url: queryURL,
          method: "GET",
            success: function() {
                console.log("success!")
            },
            error: function() {
                console.log("error", arguments[2])
            }
          }).done(function(response) {
            var results = response.data;
            for (var k = 0; k < results.length; k++) {
            var animated = results[k].images.fixed_height.url;
            var still = results[k].images.fixed_height_still.url;
            var rating =   results[k].rating;
             if (rating === "r") {
             var removed = results.splice(data);
            }
            var gLink = '<a href="' + results[k].url + '" target="_blank">Giphy</a>';
            var oUrl = '<a href="' + results[k].source + '" target="_blank">Source</a>';
            var p = $("<div class='descript'>").html( "<p class='titleCard'>"+ results[k].title + "</p>" + "<b>Added at:</b> " + 
            results[k].import_datetime + 
            "<br>" + "<b>Found at:</b> " + gLink + " | " + oUrl + "<br>" + "<b>Rating:</b> " + rating);
            // Creating and storing an image tag
            var cardHold = $("<div class=\"cardA animated fadeInDown delay-3s \">");
            var gifImage = $("<img class='imgdis animated fadeIn'>");
            gifImage.attr("src", still);
            gifImage.attr("data-still", still);
            gifImage.attr("data-animate", animated);
            gifImage.attr("data-state", "still");
            gifImage.attr("src", animated);
            gifImage.attr("alt", "image");
            
            cardHold.append(gifImage, p);
            $("#animals").prepend(cardHold)
             }
        });
  });

});
