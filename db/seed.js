//TODO: Just need to bugfix:

const factor = 5;
let intervalCount = 1;
let dataArray = [];
const array = [];
let nextPage = "";
let nextSuffix = `?page=${intervalCount}`;

async function getPaginated(start) {
  let response = {};
  let data = {};
  console.log(`start: ${start}`);
  for (let i = start; i < start + factor; i++) {
    console.log(`loop index: ${i}`);
    switch (nextPage) {
      default:
        response = await fetch(
          `https://towns.online-tech.co.uk/api/v1/towns${nextSuffix}`,
        );
        data = await response.json();
        dataArray = data.data;
        nextPage = data.next_page_url;
        nextSuffix = `?page=${start}`;
        for (let i = 0; i < dataArray.length; i++) {
          array.push(
            dataArray[i].name_1,
            dataArray[i].longitude,
            dataArray[i].latitude,
          );
        }
        break;
      case null:
        console.log("end of pages");
        break;
    }
  }
  //   console.log(array);
}

setInterval(function () {
  if (intervalCount === 1) {
    getPaginated(intervalCount);
  } else {
    getPaginated(intervalCount * factor);
  }
  intervalCount++;
  console.log(`Interval Count: ${intervalCount}`);
}, 10000);
