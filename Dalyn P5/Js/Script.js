

fetch('https://randomuser.me/api?results=12&nat=us')
  .then(response => response.json())
  .then(data => insertProfiles(data.results));

function insertProfiles(results) {
          //Appends card for each user to gallery, interpolating users' info
          $.each(results, function(index, user) {
              $('#gallery').append(
               `<div class="card">
                  <div class="card-img-container">
                      <img class="card-img" src="${user.picture.medium}" alt="profile picture">
                  </div>
                  <div class="card-info-container">
                      <h3 id="name" class="card-name cap">${user.name.first} ${user.name.last}</h3>
                      <p class="card-text">${user.email}</p>
                      <p class="card-text cap">${user.location.city}, ${user.location.state}</p>
                  </div>
                </div>`);
          });
