window.addEventListener("load", function () {
  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse
    .then(function (result) {
      let listedPlanets = result;
      if (listedPlanets && listedPlanets.length > 0) {
        let planet = pickPlanet(listedPlanets);
        addDestinationInfo(
          document,
          planet.name,
          planet.diameter,
          planet.star,
          planet.distance,
          planet.moons,
          planet.image
        );
      } else {
        console.error(
          "No planets found or an error occurred fetching planet data."
        );
      }
    })
    .catch((error) => {
      console.error("An error occurred while fetching planet data:", error);
    });

  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let pilotName = document.querySelector("input[name=pilotName]").value;
    let copilotName = document.querySelector("input[name=copilotName]").value;
    let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
    let cargoMass = document.querySelector("input[name=cargoMass]").value;

    formSubmission(
      document,
      null,
      pilotName,
      copilotName,
      fuelLevel,
      cargoMass
    );
  });
});
