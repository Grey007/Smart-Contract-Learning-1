var uberContractABI = [
  {
    "constant": true,
    "inputs": [],
    "name": "feePerKM",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "rides",
    "outputs": [
      {
        "name": "rider",
        "type": "address"
      },
      {
        "name": "driver",
        "type": "address"
      },
      {
        "name": "pickUpLocation",
        "type": "string"
      },
      {
        "name": "dropOffLocation",
        "type": "string"
      },
      {
        "name": "distance",
        "type": "uint256"
      },
      {
        "name": "rideValue",
        "type": "uint256"
      },
      {
        "name": "status",
        "type": "uint8"
      },
      {
        "name": "rideCompleteDriver",
        "type": "bool"
      },
      {
        "name": "rideCompleteRider",
        "type": "bool"
      },
      {
        "name": "driveRating",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "listDrivers",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "rideId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "driver",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "rider",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "pickup",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "dropoff",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "rideValue",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "status",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "CmD",
        "type": "bool"
      },
      {
        "indexed": false,
        "name": "CmR",
        "type": "bool"
      },
      {
        "indexed": false,
        "name": "rating",
        "type": "uint256"
      }
    ],
    "name": "RideEvent",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "rideId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "name": "driver",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "rider",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "rideValue",
        "type": "uint256"
      }
    ],
    "name": "RideComplete",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "rideId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "status",
        "type": "uint256"
      }
    ],
    "name": "RidePaid",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "newFee",
        "type": "uint256"
      }
    ],
    "name": "FeeUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "previousOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipRenounced",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_contract",
        "type": "address"
      }
    ],
    "name": "setdriverContract",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_newFee",
        "type": "uint256"
      }
    ],
    "name": "setRideFee",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "numOfDrivers",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getAllDriver",
    "outputs": [
      {
        "name": "",
        "type": "address[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getRideCount",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_rideId",
        "type": "uint256"
      }
    ],
    "name": "getRide",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      },
      {
        "name": "",
        "type": "address"
      },
      {
        "name": "",
        "type": "address"
      },
      {
        "name": "",
        "type": "uint256"
      },
      {
        "name": "",
        "type": "uint256"
      },
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_rideId",
        "type": "uint256"
      }
    ],
    "name": "getRideLocationDetails",
    "outputs": [
      {
        "name": "",
        "type": "string"
      },
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_driver",
        "type": "address"
      },
      {
        "name": "_pickUpLocation",
        "type": "string"
      },
      {
        "name": "_dropOffLocation",
        "type": "string"
      },
      {
        "name": "_distance",
        "type": "uint256"
      }
    ],
    "name": "requestRide",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_rideId",
        "type": "uint256"
      }
    ],
    "name": "payForRide",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_rideId",
        "type": "uint256"
      }
    ],
    "name": "startRide",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_rideId",
        "type": "uint256"
      }
    ],
    "name": "cancelRide",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_rideId",
        "type": "uint256"
      }
    ],
    "name": "completeRide",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_rideId",
        "type": "uint256"
      },
      {
        "name": "_rating",
        "type": "uint256"
      }
    ],
    "name": "rateRide",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_rideId",
        "type": "uint256"
      }
    ],
    "name": "statusOfRide",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];