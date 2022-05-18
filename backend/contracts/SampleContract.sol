// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract SampleContract {
  uint storedData;

  function set(uint x) public {
    storedData = x;
  }

  function get() public view returns (uint) {
    return storedData;
  }
}
