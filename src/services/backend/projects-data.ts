export const data = [
  {
    projectId: 331,
    symbol: "OneK",
    title: "First project - Only stake sales",
    description:
      "Dev test project, Dev test project,Dev test project,Dev test project,Dev test project,",
    projectImage:
      "https://dummyjson.com/image/60x60/008080/ffffff?text=First_Project",
    bannerImage:
      "https://dummyjson.com/image/800x400/008080/ffffff?text=First_Project",
    startPublishTime: "2024-08-01T12:00:00-03:00", // Assuming backend
    tag: "Testing",
    saleDetailsLink: "https://example.com",
    sales: [
      {
        projectId: 331,
        saleId: 33101,
        saleTitle: "Unlimited Stake - Ends 30/11/2024",
        stepsRequirement: ["KYC"],
        chainId: 0,
        createdAt: "2024-10-31T16:48:05.259Z",
        masterAddress:
          "fuel1c07gfgqthu3l3ttlhl8ddfmdsvfvwvy3qqt6vz77p38wtrafe92qyumq6e",
        trackId: 0,
        stakingToken: {
          tokenAddress:
            "0xf8f8b6283d7fa5b672b530cbb84fcccb4ff8dc40f8176ef4544ddb1f1952ad07",
        },
        subscribePeriod: {
          startTime: "2024-10-31T16:51:02.813Z",
          endTime: "2024-11-30T16:48:00.000Z",
          isLimited: false,
          //maxTotalStake: "Unlimited",
        },
        isWhitelistSaved: false,
        saleAmount: 5000000,
        saleToken: {
          tokenAddress:
            "0x0107ec42cb70a1fff13699d67684a9fa0714b0583c7525ccfb905d2afc38b9d9",
        },
      },
      {
        saleTitle: "Unlimited stake - Ended 31/10/2024",
        projectId: 331,
        saleId: 33102,
        saleAmount: 12000000,
        chainId: 0,
        createdAt: "2024-10-31T16:48:05.259Z",
        trackId: 2,
        masterAddress:
          "fuel1c07gfgqthu3l3ttlhl8ddfmdsvfvwvy3qqt6vz77p38wtrafe92qyumq6e",
        stakingToken: {
          tokenAddress:
            "0xf8f8b6283d7fa5b672b530cbb84fcccb4ff8dc40f8176ef4544ddb1f1952ad07",
        },
        subscribePeriod: {
          startTime: "2024-10-31T17:02:31.613Z",
          endTime: "2024-10-31T17:48:00.000Z",
          isLimited: false,
          //maxTotalStake: "Unlimited",
        },
        saleToken: {
          tokenAddress:
            "0x0107ec42cb70a1fff13699d67684a9fa0714b0583c7525ccfb905d2afc38b9d9",
        },
      },
      {
        saleTitle: "Limited stake - Ends 30/11/2024",
        projectId: 331,
        saleId: 33103,
        saleAmount: 12000000,
        chainId: 0,
        createdAt: "2024-10-31T16:48:05.259Z",
        trackId: 1,
        masterAddress:
          "fuel1c07gfgqthu3l3ttlhl8ddfmdsvfvwvy3qqt6vz77p38wtrafe92qyumq6e",
        stakingToken: {
          tokenAddress:
            "0xf8f8b6283d7fa5b672b530cbb84fcccb4ff8dc40f8176ef4544ddb1f1952ad07",
        },
        subscribePeriod: {
          startTime: "2024-10-31T16:58:52.083Z",
          endTime: "2024-11-30T16:48:00.000Z",
          isLimited: true,
          maxTotalStake: 50000000,
        },
        saleToken: {
          tokenAddress:
            "0x0107ec42cb70a1fff13699d67684a9fa0714b0583c7525ccfb905d2afc38b9d9",
        },
      },
    ],
  },
  {
    projectId: 332,
    symbol: "TwoK",
    title: "Second Project - Purchase sales",
    description:
      "Second test project, Dev test project,Dev test project,Dev test project,Dev test project,",
    projectImage:
      "https://dummyjson.com/image/60x60/0c33c0/ffffff?fontFamily=marhey&text=Second_Project",
    bannerImage:
      "https://dummyjson.com/image/800x400/0c33c0/ffffff?fontFamily=marhey&text=Second_Project",
    startPublishTime: "2024-07-19T17:00:00Z",
    tag: "Testing",
    saleDetailsLink: "https://example.com",
    postSaleInfo: {},
    sales: [
      {
        projectId: 332,
        saleId: 33201,
        saleTitle: "Unlimited Stake & Purchase - Ends 24/12/2024",
        chainId: 0,
        createdAt: "2024-10-31T17:22:21.466Z",
        trackId: 1,
        masterAddress:
          "fuel1xt2k76ghgd7gk2veaksaszt793zukfww2vgtuwh9lsjsfnscvlqqyv7y0d",
        stakingToken: {
          tokenAddress:
            "0xf8f8b6283d7fa5b672b530cbb84fcccb4ff8dc40f8176ef4544ddb1f1952ad07",
        },
        subscribePeriod: {
          startTime: "2024-10-31T17:24:03.012Z",
          endTime: "2024-11-30T17:48:00.000Z",
          isLimited: true,
          maxTotalStake: 5000000000,
        },
        saleAddress:
          "fuel1cwy8artxvm8dyc3uw4j49dg8lj4fyse2wn8m4yff4ldmv6u6hngq6m3tl5",
        paymentToken: {
          tokenAddress:
            "0x00dc5cda67b6a53b60fa53f95570fdaabb5b916c0e6d614a3f5d9de68f832e61",
        },
        purchasePeriod: {
          startTime: "2024-12-01T17:48:00.000Z",
          endTime: "2024-12-24T17:48:00.000Z",
          salePrice: 2,
        },
        saleToken: {
          tokenAddress:
            "0x0107ec42cb70a1fff13699d67684a9fa0714b0583c7525ccfb905d2afc38b9d9",
        },
        saleAmount: 120000,
      },
      {
        saleAmount: 120000,
        projectId: 332,
        saleId: 1766,
        saleTitle: "Unlimited Stake & Purchase - Ended 28/10/2024",
        chainId: 0,
        trackId: 1,
        masterAddress:
          "fuel14sy8yd0w8j3v259f5yvzr7cmvjnnwk6knf4xeavsvuccn7fx2sus34hlxm",
        stakingToken: {
          tokenAddress:
            "0xf8f8b6283d7fa5b672b530cbb84fcccb4ff8dc40f8176ef4544ddb1f1952ad07",
        },
        subscribePeriod: {
          startTime: "2024-10-27T17:57:03.526Z",
          endTime: "2024-10-28T17:47:03.526Z",
          isLimited: false,
        },
        saleAddress:
          "fuel1efpz2w2dm0rhml0n4h9jvaqer5esl79r2mcffz0nmj37fe2ru2usppttts",
        paymentToken: {
          tokenAddress:
            "0x00dc5cda67b6a53b60fa53f95570fdaabb5b916c0e6d614a3f5d9de68f832e61",
        },
        purchasePeriod: {
          startTime: "2024-10-28T18:47:03.526Z",
          endTime: "2024-10-30T17:47:03.526Z",
          salePrice: 0.02,
        },
        saleToken: {
          tokenAddress:
            "0x0107ec42cb70a1fff13699d67684a9fa0714b0583c7525ccfb905d2afc38b9d9",
        },
      },
      {
        projectId: 332,
        saleId: 1769,
        saleTitle: "Test Solo Purchase - Ends 01/11/2024",
        chainId: 0,
        createdAt: "2024-10-29T13:30:30.267Z",
        trackId: 1,
        masterAddress:
          "fuel1e27mgar2e3vy0au9rt7s6hkm056hwumeag775km24laueldlpp2qdns479",
        stepsRequirement: ["KYC"],
        saleToken: {
          tokenAddress:
            "0x0107ec42cb70a1fff13699d67684a9fa0714b0583c7525ccfb905d2afc38b9d9",
        },
        saleAmount: 120000,
        saleAddress:
          "fuel18mzksu880s0053eq4g70sk4lgq7pwzg2z3snncz2g3unsvvps62sk75xgu",
        paymentToken: {
          tokenAddress:
            "0xf8f8b6283d7fa5b672b530cbb84fcccb4ff8dc40f8176ef4544ddb1f1952ad07",
        },
        purchasePeriod: {
          startTime: "2024-10-29T19:10:02.000Z",
          endTime: "2024-12-01T18:17:34.000Z",
          salePrice: 0.02,
        },
      },
    ],
  },
];

export const merkle = {
  proofs: [
    {
      node: "9b85732201bc2642383e3ebab7b50f6e6a078784bcb3f07bae0c0a138719ef81",
      proof_nodes: [
        "470a71167410dbf7741b2c638ae984252901089702e0efa9ac33b666cc662004",
        "ddedf04e87aad7b7fd3142c9210feee40e06e24b8a5213aec569b1e77c528c80",
        "fb74eff4869e9d1470546566afeb9e8f550d26376a04edb58cd329ec180333a8",
      ],
    },
    {
      node: "9b85732201bc2642383e3ebab7b50f6e6a078784bcb3f07bae0c0a138719ef81",
      proof_nodes: [
        "084a71ec624e85335823e25249c22fa9d7a483bd9e637f4a0baa4029fe4eaf06",
        "ddedf04e87aad7b7fd3142c9210feee40e06e24b8a5213aec569b1e77c528c80",
        "fb74eff4869e9d1470546566afeb9e8f550d26376a04edb58cd329ec180333a8",
      ],
    },
    {
      node: "9b85732201bc2642383e3ebab7b50f6e6a078784bcb3f07bae0c0a138719ef81",
      proof_nodes: [
        "ca4a65db71db395f8a923893b31f47e8d3fd99b09a02bb8e870b6da7707bd63c",
        "b3703cba3980c37b3c9d35bbbe18808071b436fd728c72b3443e8e4d5f1e3147",
        "fb74eff4869e9d1470546566afeb9e8f550d26376a04edb58cd329ec180333a8",
      ],
    },
    {
      node: "9b85732201bc2642383e3ebab7b50f6e6a078784bcb3f07bae0c0a138719ef81",
      proof_nodes: [
        "8b446ea266f55d9f9d1ed4c02b8a3f07786677d7c4242f4859d531183611dfb6",
        "b3703cba3980c37b3c9d35bbbe18808071b436fd728c72b3443e8e4d5f1e3147",
        "fb74eff4869e9d1470546566afeb9e8f550d26376a04edb58cd329ec180333a8",
      ],
    },
    {
      node: "9b85732201bc2642383e3ebab7b50f6e6a078784bcb3f07bae0c0a138719ef81",
      proof_nodes: [
        "8f0cc3345397ef6f9f8fc2169c751704cdd5a6c69e4b14c0fffbced959c6fd2e",
        "7ab7891b4ab80184520ae0f1bf60dd7387483fb3c47ae5d5c5d37e382c4004c3",
        "7d96b84af1a93490a58cd06bb44a4e13802e3b4582bcb6528d70840e19e9a07c",
      ],
    },
    {
      node: "9b85732201bc2642383e3ebab7b50f6e6a078784bcb3f07bae0c0a138719ef81",
      proof_nodes: [
        "ff18f4d3cd503adda893c98c3f8ced7d015c428088dbdb4b4e62c5ea3abf23e8",
        "7ab7891b4ab80184520ae0f1bf60dd7387483fb3c47ae5d5c5d37e382c4004c3",
        "7d96b84af1a93490a58cd06bb44a4e13802e3b4582bcb6528d70840e19e9a07c",
      ],
    },
    {
      node: "9b85732201bc2642383e3ebab7b50f6e6a078784bcb3f07bae0c0a138719ef81",
      proof_nodes: [
        "af326891943d1562d4c73c556ddd8f2306fa4f9779d88030cce5aec63fb79f92",
        "7d96b84af1a93490a58cd06bb44a4e13802e3b4582bcb6528d70840e19e9a07c",
      ],
    },
  ],
  root: "9b85732201bc2642383e3ebab7b50f6e6a078784bcb3f07bae0c0a138719ef81",
  users: [
    {
      address:
        "eb8f73d09b72dfaca1761b249339341b7375522a7a81c106c14521a1b3bedbea",
      value: 600000000,
    },
    {
      address:
        "a7aDB9363bBF3330B1db689759E9CD2f88B1Ff11C732C134d4663776271D3347",
      value: 600000000,
    },
    {
      address:
        "6dc7c5247570fecbc73ab678f1d442c3973087774d083a34889d0328cd51edd7",
      value: 600000000,
    },
    {
      address:
        "1b0bd15109f788ceaca082df837eb6636b60c5fb23d98d8d7bf3dbd29c0f365e",
      value: 300000000,
    },
    {
      address:
        "da9eb66944b03bcd5e55030f6c13ea6c3e378bb68cfeb9028b1a73b8facd64fc",
      value: 150000000,
    },
    {
      address:
        "e8ceb2c4feddfe626eaaab9e40daf6c1ecf62ac9d3f8d94b43b1c42729fc3940",
      value: 150000000,
    },
    {
      address:
        "f8bb0b81227b2b542bf6e091fd49c50bded6fcfadccfa517935b116634cb0af9",
      value: 150000000,
    },
  ],
};

/*
export const merkle = {
  proofs: [
    {
      node: "0681ad7e7115a472af718e72208ce00447d43ccc358363b57b9803c3f0af3bc5",
      proof_nodes: [
        "c837094ae2c7cc3345d6ba53e3745c55eeaabb09e3e1745a2486786c657b48da",
        "f9773eb492a415ec986052eb573422e01f51fb0f478f328df280ef58a067c4b0",
      ],
    },
    {
      node: "0681ad7e7115a472af718e72208ce00447d43ccc358363b57b9803c3f0af3bc5",
      proof_nodes: [
        "a60ca15f5bb9b2c91e86643f6368f0a5f258868ddbd77c9caefa89fa1d3f8b00",
        "f9773eb492a415ec986052eb573422e01f51fb0f478f328df280ef58a067c4b0",
      ],
    },
    {
      node: "0681ad7e7115a472af718e72208ce00447d43ccc358363b57b9803c3f0af3bc5",
      proof_nodes: [
        "70cabd04eb1eca79f44b1081ef42711dc1918ed3ca931c9d93ae9288d94448d1",
      ],
    },
  ],
  root: "0681ad7e7115a472af718e72208ce00447d43ccc358363b57b9803c3f0af3bc5",

  users: [
    {
      address:
        "eb8f73d09b72dfaca1761b249339341b7375522a7a81c106c14521a1b3bedbea",
      value: 10000,
    },
    {
      address:
        "a7aDB9363bBF3330B1db689759E9CD2f88B1Ff11C732C134d4663776271D3347",
      value: 10000,
    },
    {
      address:
        "6dc7c5247570fecbc73ab678f1d442c3973087774d083a34889d0328cd51edd7",
      value: 10000,
    },
  ],
};
*/
//[{"address":"eb8f73d09b72dfaca1761b249339341b7375522a7a81c106c14521a1b3bedbea","value": 600000000},{"address":"a7adb9363bbf3330b1db689759e9cd2f88b1ff11c732c134d4663776271d3347","value": 600000000},{"address":"6dc7c5247570fecbc73ab678f1d442c3973087774d083a34889d0328cd51edd7","value": 600000000},{"address":"1b0bd15109f788ceaca082df837eb6636b60c5fb23d98d8d7bf3dbd29c0f365e","value": 300000000},{"address":"da9eb66944b03bcd5e55030f6c13ea6c3e378bb68cfeb9028b1a73b8facd64fc","value": 150000000},{"address":"e8ceb2c4feddfe626eaaab9e40daf6c1ecf62ac9d3f8d94b43b1c42729fc3940","value": 150000000},{"address":"f8bb0b81227b2b542bf6e091fd49c50bded6fcfadccfa517935b116634cb0af9","value": 150000000}]
