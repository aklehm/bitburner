/** @param {NS} ns */
export async function main(ns) {
  var ram = ns.args[0];
  ns.tprint("Cost: " + ns.getPurchasedServerCost(ram) + " for " + ram + "GB");
  ns.tprint("Server limit: " + ns.getPurchasedServerLimit());
  ns.tprint("Max RAM: " + ns.getPurchasedServerMaxRam());
}
