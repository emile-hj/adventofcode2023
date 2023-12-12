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
  
  const inputToUse = testInput;
  
  const inputLines = inputToUse.split(/\n/);
  console.log('inputLines',inputLines);
  
  const spaceMap = [];
  // var mapHeight = 0;
  // var mapWidth = 0;
  inputLines.forEach(function(line,i){
    const cleanLine = line.trim();
    const spaceRow = [];
    const chars = cleanLine.split('');
    chars.forEach(function(char, i){
      spaceRow.push(char);
    });
    
    spaceMap.push(spaceRow);
  });
  console.log('spaceMap',spaceMap);
  // we now have spaceMap
  
  
  const vertExpandedSpaceMap = spaceMap;
  console.log('vertExpandedSpaceMap',vertExpandedSpaceMap);
  
  // ! Check map vertically. If a whole column is empty, space expands (another empty column)
  const mapWidth = vertExpandedSpaceMap[0].length
  var horzExpandOffset = 0;
  // for each column
  for( var m=0; m<mapWidth; m++ ) {
    // console.log(`checking column ${i} with offset ${horzExpandOffset}; column ${i+horzExpandOffset}`);
  
    const columnVals = [];
    // for each row
    for( var j=0; j<vertExpandedSpaceMap.length; j++ ) {
      const node = vertExpandedSpaceMap[j][m+horzExpandOffset];
      columnVals.push(node);
    } 
    // console.log(`vals in column ${i}`,columnVals);
    const colCharSet = new Set(columnVals);
    const uniqueCharCount = colCharSet.size;
    if( uniqueCharCount === 1 && Array.from(colCharSet)[0] === '.' ) {
      // console.log('this col is empty space');
      const splicePoint = m + horzExpandOffset;
      // console.log('splicePoint',splicePoint);
      // for each row
      for( var k=0; k<vertExpandedSpaceMap.length; k++ ) {
        console.log('ran',k);
        vertExpandedSpaceMap[k].splice(m + horzExpandOffset,0,'.');
      }
      horzExpandOffset = horzExpandOffset + 1;
      // console.log('prog expanded vertExpandedSpaceMap',vertExpandedSpaceMap);
    
    }
  }
  console.log('horz expanded vertExpandedSpaceMap is wide',vertExpandedSpaceMap[0].length);
  console.log('horz expanded vertExpandedSpaceMap',vertExpandedSpaceMap);
  
  // ! Check map horizontally. If a whole row is empty, space expands (another empty row)
  const rowCount = vertExpandedSpaceMap.length
  var vertExpandOffset = 0;
  // for each row
  for( var i=0; i<rowCount; i++ ) {
    const row = vertExpandedSpaceMap[i+vertExpandOffset];
  
    // for each node
    const rowCharSet = new Set(row);
    const uniqueCharCount = rowCharSet.size;
    console.log('uniqueCharCount',uniqueCharCount);  
    if( uniqueCharCount === 1 ) {
      const char  = Array.from(rowCharSet)[0];
      if( char === '.' ) {
        // this row is empty space
        const splicePoint = i+vertExpandOffset;
        vertExpandedSpaceMap.splice(splicePoint,0,row);
        vertExpandOffset = vertExpandOffset + 1;
      } 
    }
  }
  console.log('vert expanded vertExpandedSpaceMap is high',vertExpandedSpaceMap.length);
  console.log('vert expanded vertExpandedSpaceMap',vertExpandedSpaceMap);
  // we now have a vertically expanded space map
  
  
  

  return (
    <main>
      <div>
        <DayHeader
          title='Day 11'
          starCount={0}
          puzzleLink='https://adventofcode.com/2023/day/11'
        />

        <Link href="/">All days</Link>
      </div>
    </main>
  )
}