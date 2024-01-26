/** @param {NS} ns */
export async function main(ns) {
  var money = parseInt(ns.args[0]);

  var potenzen = [];

  var serverCostPerGB = 55000;
  var maxServers = 25;
  var moneyPerServer = money / maxServers;
  var rawRam = moneyPerServer / serverCostPerGB;

  for (var i = 1; i <= 20; i++) {
    potenzen.push(Math.pow(2, i));
  }
  for (let i = 0; i < potenzen.length; i++) {
    if (potenzen[i] >= rawRam) {
      ns.tprint(potenzen[i - 1]);
    }
  }
}
