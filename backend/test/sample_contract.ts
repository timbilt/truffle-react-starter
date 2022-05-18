const SampleContractInstance = artifacts.require('SampleContract');

contract('SampleContract', function (accounts) {
  it('...should store the value 89.', async function () {
    const sampleContractInstance = await SampleContractInstance.deployed();

    // Set value of 89
    await sampleContractInstance.set(89, { from: accounts[1] });

    // Get stored value
    const storedData = await sampleContractInstance.get();

    assert.equal(storedData.toString(), '89', 'The value 89 was not stored.');
  });
});
