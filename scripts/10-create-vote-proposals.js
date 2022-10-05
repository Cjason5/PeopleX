import sdk from "./1-initialize-sdk.js";
import { ethers } from "ethers";

// This is our governance contract.
const vote = sdk.getVote("0xd950B1D071026AFBfbe59DaDCab3f5C1fb70A4B1");

// This is our ERC-20 contract.
const token = sdk.getToken("0x84e9Bcb8C7344c0C9C47f4EFB0A2a703a926d308");

(async () => {
  try {
    // Create proposal to show the best alpha caller in solana.
    const description = "0xJosh is the best Alpha caller in Solana NFt space ";

    await vote.propose(description);

    console.log(
      "✅ Successfully created proposal to show the best alpha caller in solana, let's hope people vote for it!"
    );
  } catch (error) {
    console.error("failed to create proposal", error);
  }
})();