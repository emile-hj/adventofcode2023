'use client';

import Link from "next/link";

import DayHeader from '../../components/dayHeader/dayHeader.component';
import CodeBlock from '../../components/codeBlock/codeBlock.component';




export default function Page() {
    



  // const testInput = `#.##..##.
  // ..#.##.#.
  // ##......#
  // ##......#
  // ..#.##.#.
  // ..##..##.
  // #.#.##.#.
  
  // #...##..#
  // #....#..#
  // ..##..###
  // #####.##.
  // #####.##.
  // ..##..###
  // #....#..#`;

  // const inputToUse = testInput;
  // console.log('inputToUse',inputToUse);

  // const inputGroups = inputToUse.split(/\n\s*\n/);
  // console.log('inputGroups',inputGroups);

  // const blocks = [];
  // inputGroups.forEach(function(group){
  //   const block = [];
  //   const lines = group.split(/\n/);

  //   lines.forEach(function(line){

  //     console.log('line',line);
  //     const cleanLine = line.trim();
      
  //     const chars = cleanLine.split('');
  //     block.push(chars);
  //   });
  //   blocks.push(block);
  // });
  // console.log('blocks',blocks);
  // // we now have blocks

  // blocks.forEach(function(block){
  //   const horzMirrors = [];
  //   block.forEach(function(row,i){
  //     // Check for Horz mirrors
  //     var boundaryHit = false;
  //     var checkingRowNo = i;
  //     var horzMirrorAt = -1;

  //     while( !boundaryHit ) {
  //       const checkingRow = block[checkingRowNo];
  //       if( checkingRow ) {
  //         const checkingRowChars = block[checkingRowNo].toString();
  //         console.log(`row ${checkingRow} is`,checkingRowChars);

  //         const nextRow = block[checkingRow+1];
  //         if( nextRow ) {
  //           const nextRowChars = nextRow.toString();
  //           console.log('nextRowChars',nextRowChars);

  //           if( checkingRowChars === nextRowChars ) {
  //             if( horzMirrorAt < 0 ) {
  //               horzMirrorAt = i;
  //             }
  //           }
  //         } else {
  //           boundaryHit = true;
  //         }

  //       } else {
  //         boundaryHit = true;
  //       }

  //     }

  //     horzMirrors.push(horzMirrorAt);
  //   });

  //   console.log('horzMirrors',horzMirrors);
  // });


  return (
    <main>
      <div>
        <DayHeader
          title='Day 13'
          starCount={0}
          puzzleLink='https://adventofcode.com/2023/day/13'
        />
{/* 
        <CodeBlock 
          codeToShow={codeToShowOnPage}
        />  */}

        <Link href="/">All days</Link>
      </div>
    </main>
  )
}