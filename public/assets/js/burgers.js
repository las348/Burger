//client 

$(function () {
  $.ajax("/burgers", {
    type: "GET"
  }).then(function (data) {
    var devouredElem = $("#devoured");
    var notDevouredElem = $("#not_devoured");

    var burgers = data.burgers;
    var len = burgers.length;

    for (var i = 0; i < len; i++) {
      var new_elem =
        "<li>" +
        burgers[i].id +
        ". " + burgers[i].burger_name +
        "<button type='button' class='btn btn-primary devour' data-id='" +
        burgers[i].id +
        "' data-devourBurger='" +
        !burgers[i].devoured +
        "'>";


      if (burgers[i].devoured) {
        new_elem += "<div class='delete-burger'>" + "DELETE!" + "</div>";

        // $sql = "DELETE FROM burgers WHERE delete_burger = ?";
        //   new_elem += "DELETE!" + "<div class='delete-burger'>";
      } else {
        new_elem += "DEVOUR!";
      }

      new_elem += "</button>";

      // new_elem +=
      //   "<div class='delete-burger'" +
      //   burgers[i].id +
      //   "</div>";

      if (burgers[i].devoured) {
        devouredElem.append(new_elem);
      } else {
        notDevouredElem.append(new_elem);
      }
    }
  });

//DEVOUR
  $(document).on("click", ".devour", function (event) {
    var id = $(this).data("id");
 
    var newBurgerState = {
      devoured: 1
    };

    // Send the PUT request.
    $.ajax("/burgers/" + id, {
      type: "PUT",
      data: JSON.stringify(newBurgerState),
      dataType: 'json',
      contentType: 'application/json'
    }).then(function () {
      $("#devoured").push("#not_devoured");

      location.reload();
    });
  });


  //SUBMIT
  $(".add-burger").on("submit", function (event) {
    event.preventDefault();

    var newburger = {
      burger_name: $(".add-burger [name=burger_name]")
      .val()
      .trim()
    };

    $.ajax("/burgers", {
      type: "POST",
      data: JSON.stringify(newburger),
      dataType: 'json',
      contentType: 'application/json'
    }).then(function () {
      console.log("created new burger");
      // $("#devoured").push(".form-control");
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