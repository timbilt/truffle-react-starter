const SampleContract = artifacts.require('SampleContract');

module.exports = function (deployer: any) {
  deployer.deploy(SampleContract);
};
