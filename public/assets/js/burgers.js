//client 

// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $.ajax("/burgers", {
      type: "GET"
    }).then(function(data) {
      var devouredElem = $("#devoured");
      var notDevouredElem = $("#not_devoured");
  
      var burgers = data.burgers;
      var len = burgers.length;
  
      for (var i = 0; i < len; i++) {
        var new_elem =
          "<li>" +
          burgers[i].id + 
          ". "+burgers[i].name +
          "<button class='change-burger' data-id='" +
          burgers[i].id +
          "' data-newburger='" +
          !burgers[i].devoured +
          "'>";
  
        if (burgers[i].devoured) {
          new_elem += "BURGER TIME!";
        } else {
          new_elem += "DEVOUR!";
        }
  
        new_elem += "</button>";
  
        new_elem +=
          "<button class='delete-burger' data-id='" +
          burgers[i].id +
          "'>DELETE!</button></li>";
  
        if (burgers[i].devoured) {
            devouredElem.append(new_elem);
        } else {
            notDevouredElem.append(new_elem);
        }
      }
    });
});

    $(".add-burger").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newburger = {
          burger_name: $("#ca")
            .val()
            .trim(),
          devoured: $("[name=devoured]:checked")
            .val()
            .trim()
        };

        // Send the POST request.
        $.ajax("/burgers", {
          type: "POST",
          data: JSON.stringify(newburger),
          dataType:'json',
          contentType: 'application/json'
        }).then(function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        });
      });