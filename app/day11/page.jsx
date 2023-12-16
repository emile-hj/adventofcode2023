'use client';

import Link from "next/link";

import DayHeader from '../../components/dayHeader/dayHeader.component';
import CodeBlock from '../../components/codeBlock/codeBlock.component';




export default function Page() {
    



  const testInput = `...#......
  .......#..
  #.........
  ..........
  ......#...
  .#........
  .........#
  ..........
  .......#..
  #...#.....`;
  
  const realInput = `.......................................#..........................................................#......................................#..
  .....................#................................#.....................................................................................
  ....#.....#...................#...............#....................#.....................#.....................#....................#.......
  ............................................................................................................................................
  .................#......................................................#......#..............#....................#........................
  ......................................#.....................................................................................................
  .......................................................#...................................................#..............#.................
  .............................................................#..........................#...................................................
  ............#..............................#.................................#.................................................#............
  #.................................#.............#................#....................................................................#.....
  ....................................................................................#................#......................................
  ....#..........#............#...........................................#..................#..................#...................#.........
  ......................................#...................#.................................................................#.............#.
  ........#....................................#.......#......................................................................................
  ........................................................................................#..........#........................................
  ..#................................................................#........................................................................
  ..............................#...............................................#.....................................#............#..........
  ...................#........................................................................................................................
  ...........#......................#........#................................................................................................
  ...............................................................#.................#.........................#................................
  ......................................................#.....................................#...............................................
  ........#............................................................................#................................#.........#...........
  ................#...........#...............................................................................................................
  .....................#........................#........................#.....................................#............................#.
  ....#........................................................#................#.............................................#...............
  ............................................................................................................................................
  .....................................................................................................#.............#...................#....
  ..........................#...........#.........................................................................................#...........
  #......................................................#.........................................#............#........#....................
  .........#.....................................#....................................#.......................................................
  .................................#..................................#......................................................#........#.......
  .........................................................................................................#..................................
  ......#.............#....................................................#..................................................................
  ..........................#........................................................................................#........................
  .#.......................................#...................#...............#........................#..................#..................
  ..................................#..............#...........................................................#.................#............
  .........#.........................................................#........................#...............................................
  ....................................................................................#.......................................................
  .....#........#............................#...............................#.........................................#......................
  ......................................................................#..................................#..................................
  ............................#..................#........#..............................................................................#....
  .......................#.............#......................................................................................................
  #..........#...................................................#.......................#........................#......#....................
  ....................................................#.............................................#.........................................
  .................................................................................................................................#..........
  ..................................#....................................................................#....................................
  ........#.......................................#............#.....#........#...............................................................
  ............................................................................................................................................
  ............................................................................................................................................
  ..........................#.............................................................#.........................#.........................
  ..#............................#..........#..................................................................................#..............
  ..................#...................................................#.............#.......................#.............................#.
  ............#.................................#........#.....#..............................................................................
  ............................................................................................................................................
  .......................................................................................#..............#.................#...........#.......
  ....................#.....#....................................................#............#.................#.............................
  ....#............................................................................................#..............................#..........#
  ............................................................................................................................................
  ...............................#......................#...............................................................#.....................
  .................................................#...............#..................#.........#.............................#...............
  ........#......#.....................#................................................................................................#.....
  .............................................#.................................#............................................................
  .#......................#..............................................................#................#...................................
  ............#.....#.....................................................................................................#...................
  ..................................#.....................................................................................................#...
  ............................................................................................................................................
  ......#...............................................................#........................#..............................#.............
  .....................#...........................#....................................#..............................#......................
  ............................................................................#...............................................................
  ............#................#........#.......................#.....................................#.......................................
  ............................................................................................#.................#...........#.................
  ...................#................................................................................................................#.......
  ...................................#...................#..........#............#............................................................
  #.........................................#.....#..................................................................#........................
  ............................................................................................................#....................#..........
  ..........#..........................................................#.................................#...................................#
  ............................................................................................................................................
  ......#.................#.......................................................#...............#.........................#.................
  .............................#................#...................#.............................................#...........................
  .............#.......................................#......................#.......#................................#......................
  ........................................#................................................#...........................................#......
  ...................................#........................................................................................................
  .................#...........................................#..............................................................#...............
  .........#................#.......................................................................................#.........................
  .....................#......................................................................................................................
  .#..............................................................#............#..........#.....#.........#...................................
  ......#.................................#.............................#.....................................................................
  ................................................................................................................................#...........
  ......................................................#............................................#....................#..............#....
  .........................#...................#..............................................................................................
  ...............................................................#............#..........#.................#..................................
  ..................................#.........................................................................................................
  ...............#..........................................................................................................#......#..........
  ............................................................................................................................................
  ......#........................................#..................................#................#..................................#.....
  .#..........................#.........#.............................................................................#.......................
  .......................................................#......................#.......#.....................................................
  .............................................................#.................................................................#............
  ...............#......................................................................................#.......#...........................#.
  .....#....................................................................#...................#.............................................
  ..........................#................#.....#................#.........................................................................
  ..................................................................................#.................................#......#...........#....
  .................#..........................................................................................................................
  ..................................#.........................................................................................................
  ...........#.........................................#.................#...............#....................................................
  ................................................................#..............................#..........#....................#............
  ...............#.............#............................#..................#..............................................................
  ..#............................................#...........................................................................#................
  ......................#.....................................................................................................................
  .......................................#.................................#..........................................................#.......
  ...................................................................#........................................................................
  ....#.............#................................................................#..................................#......#..............
  .............................................................#..............................................................................
  .........#................#.....................#.....................#.....#.....................#.......#.................................
  ...................................................................................................................................#........
  ...........................................#...............................................#................................................
  .....................................................#..........#....................#...........................#............#.........#...
  .#.............#......#.....................................................................................................................
  .............................#............................................#..............................#..................................
  .......................................#............................................................................#.......................
  ..................#......................................#............#.............................#.......................................
  .........#................#.....................................................#..............#.............#....................#.......#.
  ..#..............................................................#.........................................................#................
  ...................................#..........#.............................#.........................................................#.....
  ......#..............................................................................................................#......................
  ..............#.............................................................................................................................
  ......................................................#........#.................#.......................................#..................
  ......................#.......#.................#......................................#.......#...............#............................
  ..#..............#.......................#..................................................................................................
  .......................................................................#...................#.............#..................................
  .........#..........................................................................#.................................#.....................
  ......................................#..................#.......................................#....................................#.....
  .........................#............................................................................#.......#.............#...............
  ....................#.........................................#.............................................................................
  ...............#............................................................................................................................
  ......................................................................#...........#........#...................................#............
  .................................#..........#...............................................................................................
  ......#..........................................#............................#....................................#........................
  ...............................................................#...........................................#.............................#..
  ..#.........#..........#.................#..........................................................#.......................................`;
  
  const inputToUse = realInput;
  
  const inputLines = inputToUse.split(/\n/);
  // console.log('inputLines',inputLines);
  
  const spaceMap = [];
  inputLines.forEach(function(line,i){
    const cleanLine = line.trim();
    const spaceRow = [];
    const chars = cleanLine.split('');
    chars.forEach(function(char, i){
      spaceRow.push(char);
    });
    
    spaceMap.push(spaceRow);
  });
  // console.log('spaceMap',spaceMap);
  // we now have spaceMap
  // console.log('spaceMap.length', spaceMap.length);
  const expandedSpaceMap = spaceMap.slice();
  // console.log('expandedSpaceMap',expandedSpaceMap);
  
  
  // ! Check map vertically. If a whole column is empty, space expands (another empty column)
  const vertExpanseBoundaries = [];
  const mapWidth = expandedSpaceMap[0].length
  var horzExpandOffset = 0;
  // for each column
  for( var i=0; i<mapWidth; i++ ) {
    // console.log(`checking column ${i} with offset ${horzExpandOffset}; column ${i+horzExpandOffset}`);
  
    const columnVals = [];
    // for each row
    for( var j=0; j<expandedSpaceMap.length; j++ ) {
      const node = expandedSpaceMap[j][i+horzExpandOffset];
      columnVals.push(node);
    } 
    // console.log(`vals in column ${i}`,columnVals);
    const colCharSet = new Set(columnVals);
    const uniqueCharCount = colCharSet.size;
    if( uniqueCharCount === 1 && Array.from(colCharSet)[0] === '.' ) {
      // console.log('this col is empty space');
      const splicePoint = i + horzExpandOffset;
      // console.log('splicePoint',splicePoint);
      // for each row
      for( var k=0; k<expandedSpaceMap.length; k++ ) {
        expandedSpaceMap[k].splice(i + horzExpandOffset,0,'.');
      }
      horzExpandOffset = horzExpandOffset + 1;
      // console.log('prog expanded expandedSpaceMap',expandedSpaceMap);
      
      vertExpanseBoundaries.push(i);
    }
  }
  // console.log('horz expanded expandedSpaceMap',expandedSpaceMap);
  
  
  // ! Check map horizontally. If a whole row is empty, space expands (another empty row)
  const horzExpanseBoundaries = [];
  const rowCount = expandedSpaceMap.length
  var vertExpandOffset = 0;
  // for each row
  for( var i=0; i<rowCount; i++ ) {
    const row = expandedSpaceMap[i+vertExpandOffset];
  
    // for each node
    const rowCharSet = new Set(row);
    const uniqueCharCount = rowCharSet.size; 
    if( uniqueCharCount === 1 ) {
      const char  = Array.from(rowCharSet)[0];
      if( char === '.' ) {
        // this row is empty space
        const splicePoint = i+vertExpandOffset;
        expandedSpaceMap.splice(splicePoint,0,row);
        vertExpandOffset = vertExpandOffset + 1;
  
        horzExpanseBoundaries.push(i);
      } 
    }
  }
  // console.log('expandedSpaceMap',expandedSpaceMap);
  // we now have completely expanded space map
  
  const galaxies = [];
  
  expandedSpaceMap.forEach(function(row, i){
    row.forEach(function(node,j) {
      const value = node;
      if( value == '#' ) {
        const obj = {
          value:value,
          y:i,
          x:j
        }
        galaxies.push(obj);
      }
    });
  });
  // console.log('galaxies',galaxies);
  // we now have a list of galaxies
  
  const shortestPaths = [];
  galaxies.forEach(function(galaxy,i){
    // compare the galaxy with following galaxies
  
    for( var j=i+1; j<galaxies.length; j++ ) {
      const neighbour = galaxies[j];
      // console.log(`compare galaxy ${i}`, galaxy, `with neighbour ${j}`, neighbour);
  
      const largestY = Math.max(galaxy.y, neighbour.y);
      const smallestY = Math.min(galaxy.y, neighbour.y);
      const yDistance = largestY - smallestY;
  
      const largestX = Math.max(galaxy.x, neighbour.x);
      const smallestX = Math.min(galaxy.x, neighbour.x);
      const xDistance = largestX - smallestX;
  
      const distance = yDistance + xDistance;
      shortestPaths.push(distance);
    }
  });
  // console.log('shortestPaths',shortestPaths);
  
  var sumOfPaths = 0;
  shortestPaths.forEach(function(path){
    sumOfPaths = sumOfPaths + path;
  });
  console.log('sumOfPaths',sumOfPaths);
  
  // ––––––––––––––––––––––
  // ! pt 2 – the expanse
  // console.log('vertExpanseBoundaries',vertExpanseBoundaries);
  // console.log('horzExpanseBoundaries',horzExpanseBoundaries);
  // console.log('expanseBoundariesCrossed',expanseBoundariesCrossed);
  
  const origMap = []; // I am having real trouble with the original mutating
  inputLines.forEach(function(line,i){
    const cleanLine = line.trim();
    const spaceRow = [];
    const chars = cleanLine.split('');
    chars.forEach(function(char, i){
      spaceRow.push(char);
    });
    
    origMap.push(spaceRow);
  });
  // console.log('origMap',origMap);
  
  const oldGalaxies = [];
  origMap.forEach(function(row,i){
    row.forEach(function(node,j) {
      const value = node;
      if( value == '#' ) {
        const obj = {
          value:value,
          y:i,
          x:j
        }
        oldGalaxies.push(obj);
      }
    });
  });
  // console.log('oldGalaxies',oldGalaxies);
  
  const shortestPathsExcludingExpanse = [];
  var expanseBoundariesCrossed = 0;
  oldGalaxies.forEach(function(galaxy,i){
    // compare the galaxy with following galaxies
  
    for( var j=i+1; j<oldGalaxies.length; j++ ) {
      const neighbour = oldGalaxies[j];
      // console.log(`compare galaxy ${i}`, galaxy, `with neighbour ${j}`, neighbour);
  
      const largestY = Math.max(galaxy.y, neighbour.y);
      const smallestY = Math.min(galaxy.y, neighbour.y);
      const yDistance = largestY - smallestY;
  
      const largestX = Math.max(galaxy.x, neighbour.x);
      const smallestX = Math.min(galaxy.x, neighbour.x);
      const xDistance = largestX - smallestX;
  
      var boundariesCrossedThisJourney = 0;
      vertExpanseBoundaries.forEach(function(boundary){
        // console.log('analysing boundary',boundary);
        if( smallestX < boundary && largestX > boundary )  {
          // we crossed a vertical boundary
          boundariesCrossedThisJourney = boundariesCrossedThisJourney + 1;
        }
      });
  
      horzExpanseBoundaries.forEach(function(boundary){
        // console.log('analysing boundary',boundary);
        // console.log('smallestY',smallestY);
        // console.log('largestY',largestY);
        if( smallestY < boundary && largestY > boundary )  {
          // we crossed a horizontal boundary
          boundariesCrossedThisJourney = boundariesCrossedThisJourney + 1;
        }
      });
  
      expanseBoundariesCrossed = expanseBoundariesCrossed + boundariesCrossedThisJourney;
  
      const distance = yDistance + xDistance - boundariesCrossedThisJourney;
      shortestPathsExcludingExpanse.push(distance);
    }
  });
  // console.log('shortestPathsExcludingExpanse',shortestPathsExcludingExpanse);
  console.log('expanseBoundariesCrossed',expanseBoundariesCrossed);
  const expanseDistanceCovered = parseFloat(`${expanseBoundariesCrossed}000000`);
  console.log('expanseDistanceCovered',expanseDistanceCovered);
  var distanceCoveredWithExpanse = 0;
  shortestPathsExcludingExpanse.forEach(function(distance){
    distanceCoveredWithExpanse = distanceCoveredWithExpanse + distance;
  });
  console.log('total distance covered without expanse',distanceCoveredWithExpanse);
  distanceCoveredWithExpanse = distanceCoveredWithExpanse + expanseDistanceCovered;
  console.log('distanceCoveredWithExpanse',distanceCoveredWithExpanse);
  
  const codeToShowOnPage = `
const inputToUse = realInput;

const inputLines = inputToUse.split(/\\n/);
// console.log('inputLines',inputLines);

const spaceMap = [];
inputLines.forEach(function(line,i){
  const cleanLine = line.trim();
  const spaceRow = [];
  const chars = cleanLine.split('');
  chars.forEach(function(char, i){
    spaceRow.push(char);
  });
  
  spaceMap.push(spaceRow);
});
// console.log('spaceMap',spaceMap);
// we now have spaceMap
// console.log('spaceMap.length', spaceMap.length);
const expandedSpaceMap = spaceMap.slice();
// console.log('expandedSpaceMap',expandedSpaceMap);


// ! Check map vertically. If a whole column is empty, space expands (another empty column)
const vertExpanseBoundaries = [];
const mapWidth = expandedSpaceMap[0].length
var horzExpandOffset = 0;
// for each column
for( var i=0; i<mapWidth; i++ ) {
  // console.log(\`checking column \${i} with offset \${horzExpandOffset}; column \${i+horzExpandOffset}\`);

  const columnVals = [];
  // for each row
  for( var j=0; j<expandedSpaceMap.length; j++ ) {
    const node = expandedSpaceMap[j][i+horzExpandOffset];
    columnVals.push(node);
  } 
  // console.log(\`vals in column \${i}\`,columnVals);
  const colCharSet = new Set(columnVals);
  const uniqueCharCount = colCharSet.size;
  if( uniqueCharCount === 1 && Array.from(colCharSet)[0] === '.' ) {
    // console.log('this col is empty space');
    const splicePoint = i + horzExpandOffset;
    // console.log('splicePoint',splicePoint);
    // for each row
    for( var k=0; k<expandedSpaceMap.length; k++ ) {
      expandedSpaceMap[k].splice(i + horzExpandOffset,0,'.');
    }
    horzExpandOffset = horzExpandOffset + 1;
    // console.log('prog expanded expandedSpaceMap',expandedSpaceMap);
    
    vertExpanseBoundaries.push(i);
  }
}
// console.log('horz expanded expandedSpaceMap',expandedSpaceMap);


// ! Check map horizontally. If a whole row is empty, space expands (another empty row)
const horzExpanseBoundaries = [];
const rowCount = expandedSpaceMap.length
var vertExpandOffset = 0;
// for each row
for( var i=0; i<rowCount; i++ ) {
  const row = expandedSpaceMap[i+vertExpandOffset];

  // for each node
  const rowCharSet = new Set(row);
  const uniqueCharCount = rowCharSet.size; 
  if( uniqueCharCount === 1 ) {
    const char  = Array.from(rowCharSet)[0];
    if( char === '.' ) {
      // this row is empty space
      const splicePoint = i+vertExpandOffset;
      expandedSpaceMap.splice(splicePoint,0,row);
      vertExpandOffset = vertExpandOffset + 1;

      horzExpanseBoundaries.push(i);
    } 
  }
}
// console.log('expandedSpaceMap',expandedSpaceMap);
// we now have completely expanded space map

const galaxies = [];

expandedSpaceMap.forEach(function(row, i){
  row.forEach(function(node,j) {
    const value = node;
    if( value == '#' ) {
      const obj = {
        value:value,
        y:i,
        x:j
      }
      galaxies.push(obj);
    }
  });
});
// console.log('galaxies',galaxies);
// we now have a list of galaxies

const shortestPaths = [];
galaxies.forEach(function(galaxy,i){
  // compare the galaxy with following galaxies

  for( var j=i+1; j<galaxies.length; j++ ) {
    const neighbour = galaxies[j];
    // console.log(\`compare galaxy \${i}\`, galaxy, \`with neighbour \${j}\`, neighbour);

    const largestY = Math.max(galaxy.y, neighbour.y);
    const smallestY = Math.min(galaxy.y, neighbour.y);
    const yDistance = largestY - smallestY;

    const largestX = Math.max(galaxy.x, neighbour.x);
    const smallestX = Math.min(galaxy.x, neighbour.x);
    const xDistance = largestX - smallestX;

    const distance = yDistance + xDistance;
    shortestPaths.push(distance);
  }
});
// console.log('shortestPaths',shortestPaths);

var sumOfPaths = 0;
shortestPaths.forEach(function(path){
  sumOfPaths = sumOfPaths + path;
});
console.log('sumOfPaths',sumOfPaths);

// ––––––––––––––––––––––
// ! pt 2 – the expanse
// console.log('vertExpanseBoundaries',vertExpanseBoundaries);
// console.log('horzExpanseBoundaries',horzExpanseBoundaries);
// console.log('expanseBoundariesCrossed',expanseBoundariesCrossed);

const origMap = []; // I am having real trouble with the original mutating
inputLines.forEach(function(line,i){
  const cleanLine = line.trim();
  const spaceRow = [];
  const chars = cleanLine.split('');
  chars.forEach(function(char, i){
    spaceRow.push(char);
  });
  
  origMap.push(spaceRow);
});
// console.log('origMap',origMap);

const oldGalaxies = [];
origMap.forEach(function(row,i){
  row.forEach(function(node,j) {
    const value = node;
    if( value == '#' ) {
      const obj = {
        value:value,
        y:i,
        x:j
      }
      oldGalaxies.push(obj);
    }
  });
});
// console.log('oldGalaxies',oldGalaxies);

const shortestPathsExcludingExpanse = [];
var expanseBoundariesCrossed = 0;
oldGalaxies.forEach(function(galaxy,i){
  // compare the galaxy with following galaxies

  for( var j=i+1; j<oldGalaxies.length; j++ ) {
    const neighbour = oldGalaxies[j];
    // console.log(\`compare galaxy \${i}\`, galaxy, \`with neighbour \${j}\`, neighbour);

    const largestY = Math.max(galaxy.y, neighbour.y);
    const smallestY = Math.min(galaxy.y, neighbour.y);
    const yDistance = largestY - smallestY;

    const largestX = Math.max(galaxy.x, neighbour.x);
    const smallestX = Math.min(galaxy.x, neighbour.x);
    const xDistance = largestX - smallestX;

    var boundariesCrossedThisJourney = 0;
    vertExpanseBoundaries.forEach(function(boundary){
      // console.log('analysing boundary',boundary);
      if( smallestX < boundary && largestX > boundary )  {
        // we crossed a vertical boundary
        boundariesCrossedThisJourney = boundariesCrossedThisJourney + 1;
      }
    });

    horzExpanseBoundaries.forEach(function(boundary){
      // console.log('analysing boundary',boundary);
      // console.log('smallestY',smallestY);
      // console.log('largestY',largestY);
      if( smallestY < boundary && largestY > boundary )  {
        // we crossed a horizontal boundary
        boundariesCrossedThisJourney = boundariesCrossedThisJourney + 1;
      }
    });

    expanseBoundariesCrossed = expanseBoundariesCrossed + boundariesCrossedThisJourney;

    const distance = yDistance + xDistance - boundariesCrossedThisJourney;
    shortestPathsExcludingExpanse.push(distance);
  }
});
// console.log('shortestPathsExcludingExpanse',shortestPathsExcludingExpanse);
console.log('expanseBoundariesCrossed',expanseBoundariesCrossed);
const expanseDistanceCovered = parseFloat(\`\${expanseBoundariesCrossed}000000\`);
console.log('expanseDistanceCovered',expanseDistanceCovered);
var distanceCoveredWithExpanse = 0;
shortestPathsExcludingExpanse.forEach(function(distance){
  distanceCoveredWithExpanse = distanceCoveredWithExpanse + distance;
});
console.log('total distance covered without expanse',distanceCoveredWithExpanse);
distanceCoveredWithExpanse = distanceCoveredWithExpanse + expanseDistanceCovered;
console.log('distanceCoveredWithExpanse',distanceCoveredWithExpanse);`;
  

  return (
    <main>
      <div>
        <DayHeader
          title='Day 11: Cosmic Expansion'
          starCount={2}
          puzzleLink='https://adventofcode.com/2023/day/11'
        />

        <p>I initially looked at this puzzle yesterday morning, and was like nope, don't have time for this today, so have managed to solve part one today on day 12.</p>
        <p>The problem seemed a bit challenging to me because I wasn't completely sure how I could loop through the space whilst simultaneously growing it, but realised I could do this quite well by recording the growth offset and factoring that in. I had problems though in that I initally grew the space vertically before horizontally, and there was a bug I couldn't figure out, and didn't have time to. I resolved it by switching the order to grow horizontally first.</p>
        <p>The next part to analyse the distances between galaxies went smoothly and quickly. Looking at part two and it's an interesting challenge. Not sure of a solution straight away and no time now!</p>
        <p>I have brute forced many of the solutions to these puzzles, but I wasn't going to do that with the one million times bigger expanses of space for part two. No, no. I thought of a solution on the flight to London and have implemented it now. I liked this puzzle.</p>
        <p>I had a lot of trouble with my original array being mutated when I was trying to copy it, and I realised I don't understand how this works in JS properly. Advice online to copy rather than reference was not working, even the ones that were supposed to be supported with vanilla JS, so I will have to look into this.</p>

        <CodeBlock 
          codeToShow={codeToShowOnPage}
        /> 

        <Link href="/">All days</Link> / <Link href="/day12">Day 12</Link>
      </div>
    </main>
  )
}