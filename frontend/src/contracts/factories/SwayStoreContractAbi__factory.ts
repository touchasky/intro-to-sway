/* Autogenerated file. Do not edit manually. */

/* tslint:disable */
/* eslint-disable */

/*
  Fuels version: 0.29.1
  Forc version: 0.32.2
  Fuel-Core version: 0.15.1
*/

import { Interface, Contract } from "fuels";
import type { Provider, BaseWalletLocked, AbstractAddress } from "fuels";
import type { SwayStoreContractAbi, SwayStoreContractAbiInterface } from "../SwayStoreContractAbi";

const _abi = {
  "types": [
    {
      "typeId": 0,
      "type": "()",
      "components": [],
      "typeParameters": null
    },
    {
      "typeId": 1,
      "type": "b256",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 2,
      "type": "enum Identity",
      "components": [
        {
          "name": "Address",
          "type": 5,
          "typeArguments": null
        },
        {
          "name": "ContractId",
          "type": 6,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 3,
      "type": "enum InvalidError",
      "components": [
        {
          "name": "IncorrectAssetId",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "NotEnoughTokens",
          "type": 8,
          "typeArguments": null
        },
        {
          "name": "OnlyOwner",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "OwnerNotInitialized",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "OwnerAlreadyInitialized",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "IncorrectItemID",
          "type": 0,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 4,
      "type": "str[20]",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 5,
      "type": "struct Address",
      "components": [
        {
          "name": "value",
          "type": 1,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 6,
      "type": "struct ContractId",
      "components": [
        {
          "name": "value",
          "type": 1,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 7,
      "type": "struct Item",
      "components": [
        {
          "name": "id",
          "type": 8,
          "typeArguments": null
        },
        {
          "name": "price",
          "type": 8,
          "typeArguments": null
        },
        {
          "name": "owner",
          "type": 2,
          "typeArguments": null
        },
        {
          "name": "metadata",
          "type": 4,
          "typeArguments": null
        },
        {
          "name": "total_bought",
          "type": 8,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 8,
      "type": "u64",
      "components": null,
      "typeParameters": null
    }
  ],
  "functions": [
    {
      "inputs": [
        {
          "name": "item_id",
          "type": 8,
          "typeArguments": null
        }
      ],
      "name": "buy_item",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      }
    },
    {
      "inputs": [],
      "name": "get_count",
      "output": {
        "name": "",
        "type": 8,
        "typeArguments": null
      }
    },
    {
      "inputs": [
        {
          "name": "item_id",
          "type": 8,
          "typeArguments": null
        }
      ],
      "name": "get_item",
      "output": {
        "name": "",
        "type": 7,
        "typeArguments": null
      }
    },
    {
      "inputs": [],
      "name": "initialize_owner",
      "output": {
        "name": "",
        "type": 2,
        "typeArguments": null
      }
    },
    {
      "inputs": [
        {
          "name": "price",
          "type": 8,
          "typeArguments": null
        },
        {
          "name": "metadata",
          "type": 4,
          "typeArguments": null
        }
      ],
      "name": "list_item",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      }
    },
    {
      "inputs": [],
      "name": "withdraw_funds",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      }
    }
  ],
  "loggedTypes": [
    {
      "logId": 0,
      "loggedType": {
        "name": "",
        "type": 3,
        "typeArguments": []
      }
    },
    {
      "logId": 1,
      "loggedType": {
        "name": "",
        "type": 3,
        "typeArguments": []
      }
    },
    {
      "logId": 2,
      "loggedType": {
        "name": "",
        "type": 3,
        "typeArguments": []
      }
    },
    {
      "logId": 3,
      "loggedType": {
        "name": "",
        "type": 3,
        "typeArguments": []
      }
    },
    {
      "logId": 4,
      "loggedType": {
        "name": "",
        "type": 3,
        "typeArguments": []
      }
    },
    {
      "logId": 5,
      "loggedType": {
        "name": "",
        "type": 3,
        "typeArguments": []
      }
    },
    {
      "logId": 6,
      "loggedType": {
        "name": "",
        "type": 3,
        "typeArguments": []
      }
    }
  ]
}

export class SwayStoreContractAbi__factory {
  static readonly abi = _abi
  static createInterface(): SwayStoreContractAbiInterface {
    return new Interface(_abi) as unknown as SwayStoreContractAbiInterface
  }
  static connect(
    id: string | AbstractAddress,
    walletOrProvider: BaseWalletLocked | Provider
  ): SwayStoreContractAbi {
    return new Contract(id, _abi, walletOrProvider) as unknown as SwayStoreContractAbi
  }
}
