
//function calls random user api, call made in onload event
function callRandomUserApi() {
  var queryURL = "https://randomuser.me/api/?results=10&nat=us&exc=login";
  $.ajax({
    url: queryURL,
    method: "GET",
    success: function (data) {
      if (data.Response === "False") {
        console.log(data.Response);
      } else {
        console.log(data);
        renderResults(data); //if successful, data sent to renderResults function.
      }
    },
    error: function (error) {
      console.log(error);
    },
  });
}

//function receives JSON data from API, stores it in variables, injects it into html string literal and appends to table-body.
function renderResults(response) {
  var results = response.results;

  for (var i = 0; i < results.length; i++) {
    var photo = results[i].picture.medium;
    var firstN = results[i].name.first;
    var lastN = results[i].name.last;
    var streetNumber = results[i].location.street.number;
    var streetName = results[i].location.street.name;
    var city = results[i].location.city;
    var state = results[i].location.state;
    var phone = results[i].phone;

    var rowHTML = `<tr>
        <td><img src="${photo}" alt="Dr.${firstN} ${lastN}"></td>
        <td>${firstN} ${lastN}</td>
        <td>${streetNumber} ${streetName}</td>
        <td>${city}</td>
        <td>${state}</td>
        <td>${phone}</td>
      </tr>`;

    $(".table_content").append(rowHTML);
  }
}

//listen for document ready, then run callRandomUserApi
$(document).ready(callRandomUserApi());
