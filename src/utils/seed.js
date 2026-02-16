import { db } from "@/utils/dbConnection.js";

const dataCheck = async (thisIndex, thisArray, pageIndex) => {
  console.log(
    `Checking for ${thisArray[thisIndex].name_1.replace("'", "_")} in data at page index ${pageIndex}, town index ${thisIndex} inserted into table:`,
  );
  try {
    const response = await db.query(
      `SELECT * FROM w12_locations WHERE town_name = '${thisArray[thisIndex].name_1.replace("'", "_")}'`,
    );
    //Would have been better to check other values too i ncase teh yare missing. It seems that not all counties are listed (most are) and I had to enter these in manually. had I put a check here, I could have done so "live" and then progress would resume once missing value found. Still ,this console log ensures that no further inserts are made until confirmed previous insert found:
    console.log(`town_name found: ${response.rows[0].town_name}`);
    setTimeout(() => {
      townLoop(thisIndex + 1, thisArray, pageIndex);
    }, 2000);
  } catch (err) {
    console.log("Data sent to table not found. Error:" + err.stack);
    console.log(`Re-attempting check on inserted data.`);
    setTimeout(() => {
      dataCheck(thisIndex, thisArray, pageIndex);
    }, 2000);
  }
};

const townLoop = async (townIndex, pageArray, pageIndex) => {
  console.log(`townIndex: ${townIndex}`);
  if (townIndex < pageArray.length) {
    if (
      pageArray[townIndex].local_type === "Town" ||
      pageArray[townIndex].local_type === "City"
    ) {
      console.log(pageArray[townIndex].local_type);
      console.log(pageArray[townIndex].name_1);
      db.query(
        `INSERT INTO w12_locations (town_name, county_unitary, country, longitude, latitude) VALUES ($1, $2, $3, $4, $5)`,
        [
          pageArray[townIndex].name_1.replace("'", "_"),
          pageArray[townIndex].county_unitary,
          pageArray[townIndex].country,
          pageArray[townIndex].longitude,
          pageArray[townIndex].latitude,
        ],
      );
      dataCheck(townIndex, pageArray, pageIndex);
    } else {
      console.log(pageArray[townIndex].name_1);
      console.log("Not a Town or City, skipping...");
      townLoop(townIndex + 1, pageArray, pageIndex);
    }
  } else {
    console.log("Page Done!");
    console.log("Incrementing pageIndex...");
    pageLoop(pageIndex + 1);
  }
};

const pageLoop = async (pageIndex) => {
  if (pageIndex < 296) {
    //There are no towns on page 296
    console.log(`Current pageIndex: ${pageIndex}`);
    try {
      const response = await fetch(
        `https://towns.online-tech.co.uk/api/v1/towns?page=${pageIndex}`,
      );
      const dataApi = await response.json();
      const pageArray = dataApi.data;
      townLoop(0, pageArray, pageIndex);
    } catch (err) {
      console.log("Api fetch failed, error:" + err.stack);
      console.log("Re-attempting fetch...");
      setTimeout(() => {
        pageLoop(pageIndex);
      }, 2000);
    }
  } else {
    console.log("All pages seeded");
  }
};

pageLoop(1);
