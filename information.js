var data = {
  firstName: "Fred G",
  campus: "Marseille",
};

var cowsay = require("cowsay");

module.exports = { cowsay };

console.log(
  cowsay.say({
    text: `Coucou ${data.firstName} de ${data.campus}`,
    e: "oO",
    T: "U ",
  })
);
