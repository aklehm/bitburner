/** @param {NS} ns */
export async function main(ns) {
  // How much RAM each purchased server will have. In this case, it'll
  // be 8GB.
  var maxServers = ns.args[0];
  ns.tprint(maxServers)

  // Iterator we'll use for our loop
  var i = 0;
  while (i < maxServers) {
    ns.killall("pserv-" + i);
    ++i;
  }
}
