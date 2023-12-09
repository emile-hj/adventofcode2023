'use client';

import { CopyBlock,dracula } from "react-code-blocks"; 

import Link from "next/link";

export default function Page() {

  const testInput = `Time:      7  15   30
  Distance:  9  40  200`;

  const realInput = `Time:        47     98     66     98
  Distance:   400   1213   1011   1540`;

  const inputToUse = realInput;

  // ! Get race times and distance records from input
  const inputLines = inputToUse.split(/\n/);
  // console.log(inputLines);

  // ! Get race times
  const inputTimeLine = inputLines[0];
  const inputTimeLineArr = inputTimeLine.split(':');
  // console.log('inputTimeLineArr',inputTimeLineArr);
  const timesStr = inputTimeLineArr[1].trim();
  // console.log('timesStr',timesStr);
  const timesArr = timesStr.split(/\s+/);
  console.log('timesArr',timesArr);

  // ! Get distance records
  const inputDistanceLine = inputLines[1];
  const inputDistanceLineArr = inputDistanceLine.split(':');
  // console.log('inputTimeLineArr',inputTimeLineArr);
  const distancesStr = inputDistanceLineArr[1].trim();
  // console.log('timesStr',timesStr);
  const distancesArr = distancesStr.split(/\s+/);
  console.log('distancesArr',distancesArr);

  // ! Check each race
  var powerOfWinningStratCounts = 0;
  timesArr.forEach(function(raceTime, i){
    const distanceToBeat = distancesArr[i];
    console.log(`for race ${i}, time to beat is ${distanceToBeat}`);

    // check possible strategies
    var winningStratCount = 0;
    for( var j=0; j<raceTime; j++) {
      const raceTimeNo = parseFloat(raceTime);
      const chargeTime = j;
      // console.log(`we charge for ${chargeTime}`);
      const remainingTime = raceTime - chargeTime;
      // console.log(`remaining time is ${remainingTime}`);
      const speed = chargeTime;
      const distanceDuringRace = speed * remainingTime;
      // console.log('distanceFromCharge',distanceFromCharge);
      // console.log(`for race ${i}, strat ${j} is to wait ${chargeTime} and achieve ${distanceDuringRace} distance`);
      if( distanceDuringRace > distanceToBeat ) {
        winningStratCount = winningStratCount + 1; 
      }
    }
    console.log(`for race ${i}, winningStratCount is ${winningStratCount}`);
    if( powerOfWinningStratCounts > 0 ) {
      powerOfWinningStratCounts = powerOfWinningStratCounts * winningStratCount;
    } else {
      powerOfWinningStratCounts = winningStratCount;
    }
  });

  console.log(`powerOfWinningStratCounts:`,powerOfWinningStratCounts);

  // part 2
  const realRaceTime = timesStr.replace(/\s+/g,'');
  console.log('realRaceTime',realRaceTime);
  const realRaceDistance = distancesStr.replace(/\s+/g,'');
  console.log('realRaceDistance',realRaceDistance);
  var finalWinningStratCount = 0;
  for( var j=0; j<realRaceTime; j++) {
    const chargeTime = j;
    // console.log(`we charge for ${chargeTime}`);
    const remainingTime = realRaceTime - chargeTime;
    // console.log(`remaining time is ${remainingTime}`);
    const speed = chargeTime;
    const distanceDuringRace = speed * remainingTime;
    // console.log('distanceFromCharge',distanceFromCharge);
    // console.log(`for race ${i}, strat ${j} is to wait ${chargeTime} and achieve ${distanceDuringRace} distance`);
    if( distanceDuringRace > realRaceDistance ) {
      finalWinningStratCount = finalWinningStratCount + 1; 
    }
  }
  console.log('finalWinningStratCount',finalWinningStratCount);

  const codeToShowOnPage = `
  const inputToUse = realInput;

  // ! Get race times and distance records from input
  const inputLines = inputToUse.split(/\\n/);
  // console.log(inputLines);

  // ! Get race times
  const inputTimeLine = inputLines[0];
  const inputTimeLineArr = inputTimeLine.split(':');
  // console.log('inputTimeLineArr',inputTimeLineArr);
  const timesStr = inputTimeLineArr[1].trim();
  // console.log('timesStr',timesStr);
  const timesArr = timesStr.split(/\\s+/);
  console.log('timesArr',timesArr);

  // ! Get distance records
  const inputDistanceLine = inputLines[1];
  const inputDistanceLineArr = inputDistanceLine.split(':');
  // console.log('inputTimeLineArr',inputTimeLineArr);
  const distancesStr = inputDistanceLineArr[1].trim();
  // console.log('timesStr',timesStr);
  const distancesArr = distancesStr.split(/\\s+/);
  console.log('distancesArr',distancesArr);

  // ! Check each race
  var powerOfWinningStratCounts = 0;
  timesArr.forEach(function(raceTime, i){
    const distanceToBeat = distancesArr[i];
    console.log(\`for race \${i}, time to beat is \${distanceToBeat}\`);

    // check possible strategies
    var winningStratCount = 0;
    for( var j=0; j<raceTime; j++) {
      const raceTimeNo = parseFloat(raceTime);
      const chargeTime = j;
      // console.log(\`we charge for \${chargeTime}\`);
      const remainingTime = raceTime - chargeTime;
      // console.log(\`remaining time is \${remainingTime}\`);
      const speed = chargeTime;
      const distanceDuringRace = speed * remainingTime;
      // console.log('distanceFromCharge',distanceFromCharge);
      // console.log(\`for race \${i}, strat \${j} is to wait \${chargeTime} and achieve \${distanceDuringRace} distance\`);
      if( distanceDuringRace > distanceToBeat ) {
        winningStratCount = winningStratCount + 1; 
      }
    }
    console.log(\`for race \${i}, winningStratCount is \${winningStratCount}\`);
    if( powerOfWinningStratCounts > 0 ) {
      powerOfWinningStratCounts = powerOfWinningStratCounts * winningStratCount;
    } else {
      powerOfWinningStratCounts = winningStratCount;
    }
  });

  console.log(\`powerOfWinningStratCounts:\`,powerOfWinningStratCounts);

  // part 2
  const realRaceTime = timesStr.replace(/\\s+/g,'');
  console.log('realRaceTime',realRaceTime);
  const realRaceDistance = distancesStr.replace(/\\s+/g,'');
  console.log('realRaceDistance',realRaceDistance);
  var finalWinningStratCount = 0;
  for( var j=0; j<realRaceTime; j++) {
    const chargeTime = j;
    // console.log(\`we charge for \${chargeTime}\`);
    const remainingTime = realRaceTime - chargeTime;
    // console.log(\`remaining time is \${remainingTime}\`);
    const speed = chargeTime;
    const distanceDuringRace = speed * remainingTime;
    // console.log('distanceFromCharge',distanceFromCharge);
    // console.log(\`for race \${i}, strat \${j} is to wait \${chargeTime} and achieve \${distanceDuringRace} distance\`);
    if( distanceDuringRace > realRaceDistance ) {
      finalWinningStratCount = finalWinningStratCount + 1; 
    }
  }
  console.log('finalWinningStratCount',finalWinningStratCount);`;
  
  return (
    <main>
      <div>
        <h1>Day 6</h1>
        <p>Well it seems I am well and truly obsessed. Part two today was so much easier than yesterday's XD. basically the same as part one with some spaces removed.</p>

        <CopyBlock 
          text={codeToShowOnPage}
          language='javascript'
          showLineNumbers='true'
          wrapLines 
          theme={dracula} 
        />  

        <Link href="/">Back</Link>
      </div>
    </main>
  )
}
