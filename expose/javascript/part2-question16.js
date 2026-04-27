let statistics = {
  redCars: 21,
  blueCars: 45,
  greenCars: 12,
  raceCars: 5,
  blackCars: 40,
  rareCars: 2,
};

for (let key in statistics) {
  const value = statistics[key];
  if (key.startsWith('r') || value % 2 === 1) {
    console.log(value);
  }
}
