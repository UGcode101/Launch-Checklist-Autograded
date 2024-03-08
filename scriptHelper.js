function validateInput(testInput) {
  if (testInput === "") {
    return "Empty";
  } else if (isNaN(Number(testInput))) {
    return "Not a Number";
  } else {
    return "Is a Number";
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  if (pilot.trim() === "" || !isNaN(pilot)) {
    document.getElementById("pilotStatus").textContent =
      "Pilot Name is Required and must be a string";
    document.getElementById("launchStatus").textContent =
      "Shuttle Not Ready for Launch";
    document.getElementById("launchStatus").style.color = "red";
    document.getElementById("faultyItems").style.visibility = "visible";
    return;
  } else {
    document.getElementById(
      "pilotStatus"
    ).textContent = `Pilot ${pilot} is ready for launch`;
  }

  if (copilot.trim() === "" || !isNaN(copilot)) {
    document.getElementById("copilotStatus").textContent =
      "Co-pilot Name is Required and must be a string";
    document.getElementById("launchStatus").textContent =
      "Shuttle Not Ready for Launch";
    document.getElementById("launchStatus").style.color = "red";
    document.getElementById("faultyItems").style.visibility = "visible";
    return;
  } else {
    document.getElementById(
      "copilotStatus"
    ).textContent = `Co-pilot ${copilot} is ready for launch`;
  }

  let fuelReady = Number(fuelLevel) >= 10000;
  let cargoReady = Number(cargoLevel) <= 10000;

  document.getElementById("fuelStatus").textContent = fuelReady
    ? "Fuel level high enough for launch"
    : "Fuel level too low for launch";
  document.getElementById("cargoStatus").textContent = cargoReady
    ? "Cargo mass low enough for launch"
    : "Cargo mass too heavy for launch";

  if (fuelReady && cargoReady) {
    document.getElementById("launchStatus").textContent =
      "Shuttle is Ready for Launch";
    document.getElementById("launchStatus").style.color = "green";
  } else {
    document.getElementById("launchStatus").textContent =
      "Shuttle Not Ready for Launch";
    document.getElementById("launchStatus").style.color = "red";
  }

  document.getElementById("faultyItems").style.visibility = "visible";
}

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  document.getElementById("missionTarget").innerHTML = `
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <img src="${imageUrl}">
    `;
}

async function myFetch() {
  try {
    const response = await fetch(
      "https://handlers.education.launchcode.org/static/planets.json"
    );
    return await response.json();
  } catch (error) {
    console.error("Fetch error: ", error);
  }
}

function pickPlanet(planets) {
  if (planets.length > 0) {
    const index = Math.floor(Math.random() * planets.length);
    return planets[index];
  }
  alert("No planets available to choose from.");
  return null;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
