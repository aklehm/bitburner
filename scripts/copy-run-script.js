/** @param {NS} ns */
export async function main(ns) {
  var script = "simple-hack.js";
  // Array of all servers that don't need any ports opened
  // to gain root access. These have 16 GB of RAM
  var servers0Port = ["n00dles", "sigma-cosmetics", "joesguns", "nectar-net", "hong-fang-tea", "harakiri-sushi"];

  // Array of all servers that only need 1 port opened
  // to gain root access. These have 32 GB of RAM
  var servers1Port = ["zer0", "max-hardware", "iron-gym"];

  var servers2Port = ["phantasy", "avmnite-02h", "omega-net", "silver-helix", "the-hub"];

  var servers3Port = ["rothman-uni", "catalyst", "I.I.I.I", "netlink", "summit-uni"];

  // Copy our scripts onto each server that requires 0 ports
  // to gain root access. Then use nuke() to gain admin access and
  // run the scripts.
  for (var i = 0; i < servers0Port.length; ++i) {
    var serv = servers0Port[i];
    var mem = ns.getScriptRam(script);
    var serverRam = ns.getServerMaxRam(serv);
    var threads = Math.floor(serverRam / mem);

    ns.scp(script, serv);
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
    var serv = servers1Port[i];
    var mem = ns.getScriptRam(script);
    ns.tprint(mem);
    var serverRam = ns.getServerMaxRam(serv);
    var threads = Math.floor(serverRam / mem);
    ns.tprint(threads);

    ns.scp(script, serv);
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
    var serv = servers2Port[i];
    var mem = ns.getScriptRam(script);
    var serverRam = ns.getServerMaxRam(serv);
    var threads = Math.floor(serverRam / mem);
    ns.scp(script, serv);
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
  // to gain root access. Then use brutessh(), ftpcrack(), relaysmtp() and nuke()
  // to gain admin access and run the scripts.
  for (var i = 0; i < servers3Port.length; ++i) {
    var serv = servers3Port[i];
    var mem = ns.getScriptRam(script);
    var serverRam = ns.getServerMaxRam(serv);
    var threads = Math.floor(serverRam / mem);
    ns.scp(script, serv);
    ns.brutessh(serv);
    ns.ftpcrack(serv);
    ns.relaysmtp(serv);
    ns.nuke(serv);
    ns.killall(serv);
    ns.exec(script, serv, threads);
  }
}
