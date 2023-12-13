const fs = require("fs");
const path = require("path");

const blackImgPath = "ipfs://black/ipfs/imagepath";
const purpleImgPath = "ipfs://purple/ipfs/imagepath";

const blackVideoUrl = "";
const purpleVideoUrl = "";

const generateBlackJSON = (index) => {
  return {
    description:
      "UNDOXXED, the finest in digital lifestyle culture, is an annual hybrid book that merges street and lifestyle culture with the digital world. It focuses on fashion, sneakers, and streetwear, cataloging the best of phygital culture. This publication bridges the physical and digital realms within the evolving Web3.0 space.",
    image: blackImgPath,
    name: `UNDXX vol.1 Black #${index}/300`,
    animation_ur: blackVideoUrl,
    attributes: [
      {
        trait_type: "COVER",
        value: "Black",
      },
      {
        value: "204 PAGES",
      },
      {
        value: "SAME CONTENT",
      },
      {
        value: "NFC CHIP",
      },
    ],
  };
};

const generatePurpleJSON = (index) => {
  return {
    description:
      "UNDOXXED, the finest in digital lifestyle culture, is an annual hybrid book that merges street and lifestyle culture with the digital world. It focuses on fashion, sneakers, and streetwear, cataloging the best of phygital culture. This publication bridges the physical and digital realms within the evolving Web3.0 space.",
    image: purpleImgPath,
    name: `UNDXX vol.1 Purple #${index}/500`,
    animation_ur: purpleVideoUrl,
    attributes: [
      {
        trait_type: "COVER",
        value: "Purple",
      },
      {
        value: "204 PAGES",
      },
      {
        value: "SAME CONTENT",
      },
      {
        value: "NFC CHIP",
      },
    ],
  };
};

const generateData = () => {
  const jsonData = [];

  for (let i = 1; i <= 300; i++) {
    const json = i <= 150 ? generateBlackJSON(i) : generatePurpleJSON(i);
    jsonData.push(json);
  }

  return jsonData;
};

const main = () => {
  const jsonData = generateData();
  const folderName = "json_folder";

  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
  }

  jsonData.forEach((json, index) => {
    const jsonString = JSON.stringify(json, null, 2);
    const filename = `${index + 1}.json`;
    const filePath = path.join(folderName, filename);
    fs.writeFileSync(filePath, jsonString, "utf-8");
  });

  console.log(
    `JSON data has been generated and saved to the "${folderName}" folder.`
  );
};

main();
