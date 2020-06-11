//client 

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
          ". "+burgers[i].burger_name +
          "<button type='button' class='btn btn-primary devour' data-id='" +
          burgers[i].id +
          "' data-devourBurger='" +
          !burgers[i].devoured +
          "'>";

        if (burgers[i].devoured) {
          new_elem += "DELETE!";
        //   new_elem += "DELETE!" + "<class='delete-burger'>";
        } else {
          new_elem += "DEVOUR!";
        }
  
        new_elem += "</button>";

  
        if (burgers[i].devoured) {
            devouredElem.append(new_elem);
        } else {
            notDevouredElem.append(new_elem);
        }
    }
  });



$(document).on("click", ".devour", function(event) {
    var id = $(this).data("id");
    var devourBurger = $(this).data("devourBurger")===true;

    var newBurgerState = {
        devoured: devourBurger
    };

    // Send the PUT request.
    $.ajax("/burgers/" + id, {
      type: "PUT",
      data: JSON.stringify(newBurgerState),
      dataType:'json',
      contentType: 'application/json'
    }).then(function() {
      console.log("changed to devoured", devourBurger);
      // Reload the page to get the updated list
      location.reload();
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


      //DELETE
      $(document).on("click", ".delete-burger", function(event) {
        var id = $(this).data("id");
    
        // Send the DELETE request.
        $.ajax("/burgers/" + id, {
          type: "DELETE"
        }).then(function() {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        });
      });
    });