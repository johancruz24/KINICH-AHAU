export const radiation = (temperatures) => {
  var med = Object.keys(temperatures.T2M).map((key) => {
    return {
      name: new Date(
        key.substring(0, 4),
        key.substring(4, 6) - 1,
        key.substring(6, 8)
      ).toLocaleDateString(),
      radiation: Math.pow(5.670373, -8) * Math.pow(temperatures.T2M[key], 4),
    };
  });
  return med;
};