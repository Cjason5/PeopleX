import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x4fD6f2CEd8d10ded5B5aADB7240f364162F6afaC");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "PeopleX Membership Pass",
        description: "This NFT will give you access to PeopleX DAO!",
        image: readFileSync("scripts/assets/members.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();