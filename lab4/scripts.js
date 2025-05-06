let saudiaAirlines = {
  airlineName: "الخطوط الجوية السعودية",
  country: "السعودية",
  fleetSize: 5,
  destinations: ["الرياض", "جدة", "دبي", "نيويورك"],
  inOperation: true,
};

function bookFlight(destination) {
  let search = saudiaAirlines.destinations.find(function (value) {
    return value === destination;
  });

  return search
    ? `تم حجز الرحلة الى ${destination}`
    : `عذرا، لا توجد رحلات الى ${destination}`;
}

function addDestination(newDestination) {
  saudiaAirlines.destinations.push(newDestination);
  console.log(saudiaAirlines);
}

function getSummary() {
  console.log(
    `الخطوط الجوية السعودية تعمل في السعودية وتمتلك ${saudiaAirlines.fleetSize} طائرة وتطير إلى ${saudiaAirlines.destinations.length} وجهة.`
  );
}

console.log(bookFlight("الرياض"));

addDestination("دبي");

getSummary();
