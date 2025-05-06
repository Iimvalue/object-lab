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

function sum(num1, num2) {
  return num1 + num2;
}

function sub(num1, num2) {
  return num1 - num2;
}

function mult(num1, num2) {
  return num1 * num2;
}

function div(num1, num2) {
  return num1 / num2;
}

console.log(bookFlight("الرياض"));

addDestination("دبي");

getSummary();

console.log(sum(1,2));
console.log(sub(2,1));
console.log(mult(3,1))
console.log(div(10,2))


