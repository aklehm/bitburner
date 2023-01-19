/** @param {NS} ns */
export async function main(ns) {
  var script = "simple-hack.js";
  // Array of all servers that don't need any ports opened
  // to gain root access. These have 16 GB of RAM
  var servers0Port = [
    ["n00dles", 4],
    ["sigma-cosmetics", 16],
    ["joesguns", 16],
    ["nectar-net", 16],
    ["hong-fang-tea", 16],
    ["harakiri-sushi", 16],
  ];

  // Array of all servers that only need 1 port opened
  // to gain root access. These have 32 GB of RAM
  var servers1Port = [
    ["zer0", 32],
    ["max-hardware", 32],
    ["iron-gym", 32],
  ];

  var servers2Port = [
    ["phantasy", 32],
    ["avmnite-02h", 32],
    ["omega-net", 32],
    ["silver-helix", 64],
    ["the-hub", 16],
  ];

  var servers3Port = [
    ["rothman-uni", 64],
    ["catalyst", 16],
    ["I.I.I.I", 64],
    ["netlink", 64],
    ["summit-uni", 32],
  ];

  // Copy our scripts onto each server that requires 0 ports
  // to gain root access. Then use nuke() to gain admin access and
  // run the scripts.
  for (var i = 0; i < servers0Port.length; ++i) {
    var serv = servers0Port[i][0];
    var mem = ns.getScriptRam(script);
    var threads = Math.floor(servers0Port[i][1] / mem);

    await ns.scp(script, serv);
    ns.nuke(serv);
	ns.killall(serv);
    ns.exec(script, serv, threads);
  }

  // Wait until we acquire the "BruteSSH.exe" program
  while (!ns.fileExists("BruteSSH.exe")) {
    await ns.sleep(60000);
  }

  // Copy our scripts onto each server that requires 1 port
  // to gain root access. Then use brutessh() and nuke()
  // to gain admin access and run the scripts.
  for (var i = 0; i < servers1Port.length; ++i) {
    var serv = servers1Port[i][0];
    var mem = ns.getScriptRam(script);
	ns.tprint(mem);
    var threads = Math.floor(servers1Port[i][1] / mem);
	ns.tprint(threads);

    await ns.scp(script, serv);
    ns.brutessh(serv);
    ns.nuke(serv);
	ns.killall(serv);
    ns.exec(script, serv, threads);
  }

  // Wait until we acquire the "BruteSSH.exe" program
  while (!ns.fileExists("FTPCrack.exe")) {
    await ns.sleep(60000);
  }

  // Copy our scripts onto each server that requires 2 port
  // to gain root access. Then use brutessh(), ftpcrack() and nuke()
  // to gain admin access and run the scripts.
  for (var i = 0; i < servers2Port.length; ++i) {
    var serv = servers2Port[i][0];
    var mem = ns.getScriptRam(script);
    var threads = Math.floor(servers2Port[i][1] / mem);
    await ns.scp(script, serv);
    ns.brutessh(serv);
    ns.ftpcrack(serv);
    ns.nuke(serv);
	ns.killall(serv);
    ns.exec(script, serv, threads);
  }

  // Wait until we acquire the "BruteSSH.exe" program
  while (!ns.fileExists("relaySMTP.exe")) {
    await ns.sleep(60000);
  }

  // Copy our scripts onto each server that requires 2 port
  // to gain root access. Then use brutessh(), ftpcrack() and nuke()
  // to gain admin access and run the scripts.
  for (var i = 0; i < servers3Port.length; ++i) {
    var serv = servers3Port[i][0];
    var mem = ns.getScriptRam(script);
    var threads = Math.floor(servers3Port[i][1] / mem);
    await ns.scp(script, serv);
    ns.brutessh(serv);
    ns.ftpcrack(serv);
    ns.relaysmtp(serv);
    ns.nuke(serv);
	ns.killall(serv);
    ns.exec(script, serv, threads);
  }
}
