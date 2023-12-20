'use client';

import Link from "next/link";

import DayHeader from '../../components/dayHeader/dayHeader.component';
import CodeBlock from '../../components/codeBlock/codeBlock.component';




export default function Page() {
  // reflector dish

  const testInput = `O....#....
  O.OO#....#
  .....##...
  OO.#O....O
  .O.....O#.
  O.#..O.#.#
  ..O..#O..O
  .......O..
  #....###..
  #OO..#....`;

  const realInput = `...##OOOO...#..#.OO..#O........O.O.#..O........#...O#.O..#O.............O....#....O.O#.#.O......OO.O
  O.......#..O.O.....O..O.OO.O#O..#.#.OO.OO.O.O.....O.#..O....O...O.......O..O#O.O.O.........O#OOO..OO
  ..O.OO..#...O#O.....O...##O.O..#...O##OO..#.O..#O#O...#.O.OO..#..#.#...........O..###...OOO##......O
  O####O#....O.O##OO.O...#O...O.O...O#...O...#..#....#...OO.#.#.O#O..O..#O...#...#.....#.O#.O...##....
  #O..O..O..#.###.....O.#....O#...#..##..OO....OO.#.#O#O...O#..#........O.O....#...OO..O......#.......
  O.O....O.#.......#.....O...........O..#.....#.O.....#...O.......O#.#.......O..#.........#......OO.O.
  .O..#.......O.............#..O...##.OO##..O...#.....OO.O.#.....#.O..O..........#O#..##.#.#O#.O....#.
  ......O..O#O.##.O...#.##..OO....O#..#.O.##.OO...#..#.....O...#..OO.....OO.O......####..O.......O.#.O
  ...O.OO.....OO.#OO..#.....#......O.#....#.#...O....#.O#....O...O..#...##...O.#...#.O.....O#O...O....
  OO#.O..O...O.#......#.....O#.O..O.OO....#......#...O#...#.#..O..O...#.#.O#...OO#....OO#O.......#....
  O.....OO..#.#..#..O.#...........O.O..##.#.O.#.O.O.OO.O...O.O.O.OO##..O.......##.OO....O....OO....#OO
  O..O#.O#.....####.#....#.##.OO..O...OO##....#.....#O.#O..#.O....#.O.#.O..O...##...O.......O.O..OO.#.
  ...O.#..O.O.....#..O##.....#OO.O............O......O.#..#.OO#....O.O..O........#.#.#O...O....#..OO#O
  ##.#.O##..#.##O....OOOO...#........#..O..OOO....O...O...O..O...O.O..OOO...##...O#O.O.OO.OOOOO#.#..##
  ...#..O.O##.O.#O.#..O#.#..O#..#...OO#...OOO.........O.O..O.#..O.....O.#........O....#...O....#..OO.#
  .......#.#...#OO.O#..OO..OO.##.#O.OO.OO.OO.#....O..#O...#.O..O..O#.O.O.O.O...O#......O..O#....#...#.
  ....O....O#....OOO.....OO.#O......#.OO..O.#OO........O..O.O..O....OO...##..OO#.......#..OO.#O.O.##.O
  OO.#...O.OO.#O#....##O#O.#....#.O.#.O.#.OO.....#...#.###.#.O..OO.O.O.OO.#.O#O...O.O#..OO...#O...OOO.
  .......#....OO#..##O.#..O.O.O..#.#.#..OO.#..#.................O....OO##.##O..OO.O..#O.#.#..#.....O#O
  ..OO...O.O....O.O....O.O....#O.O....OO.........#..........#...#..OO...OO.......#.O...##.#.O.O##...OO
  .OO.O#O.#....OOO..O.O.#..#O...O.O#.#O.O.##..##....#..OO.....#....#OO#.##........OOO.OO#O......#..O.#
  ...##.....#.........#.##..O.....#.O.#O.##..#..##O.OO#.....O#.......O.O..O#..O..#.....#....O.........
  O....O....O.#...#...#OO#.O....#O##......O..#O..#..#..O#...O..O..#...OOOO#.OO..............O#....#.OO
  .O.O..OO.##...OOO...O..OO.O....#.#....OO#O#......O#O.....O#.OO...OOOO..#....#..##..........#.O....O.
  ..#..O..#.......O#O..OO..O.........OOO..##....O..O..OO.#....O.....#.O.#.O.#.#OO#....#.....##.#O...O.
  #....O.......O.#......OO.OO...O..O......#.O.O.O...#....#.#..#.O....#.#O.OOO..#.O..O.O.#.##........#.
  OO..OO##..#.O..#OOO...O..O.O......O.#.#.O#....O#O#..O#........##.O#....OO..#O#..O..##.........O.#...
  .OOO......O#.OO...........OO#..#.O.O..#...OO#...#.....#........O...O##....OO.....O..OOOO...#........
  O#.O....#.#..O.O..O.#.OOO.O..O......O.OOO..#..O..##..O.O....O.O.OO.##.....#.#O..##O..O......O##..#..
  #...#..O.OO..#.#.#......O.#..O.#.OO.#............#O#....#....O.......O...O....###....O.#.#O...OO#O.O
  O..O..#....O.#.O..#.O.#.#OO#...O.O..#...O.#O......OO.O.O.....O...OO.#O#......#..#.......O#...#..O...
  ..O..O.#O.O#.##O..#OOO.O#.O.#....O.##.#..O..O...#......O..#O..OO....#O#..#O#.#OOO.#O.OO......OO#....
  #.....O#O..O..O.OO.#.......O........O.OO.#OO........O...O......O..O.O.......#.#....O#..O..#.....##..
  .....O.......#........OO...OOO#.#.#.#.O..##..O........#O.#.#O.#..#O.....#O....OO.......#......O....O
  ....#..#..O.#..#O#O..O....O..#.#....#..##.........O..O.#O.O..OO...O.##....#.O.#.#OOO..O..#.....#..O.
  .#OO......O...#..##.O...#.O..........#.##.O....OO.O#....O.OOO....O..OO...#.#.O#...OO.O#O#O......#.##
  O....O.#....O.#......OO.##..O..#...O.#..#..O....#..##...#....#........OO.......#..O.#.#...#..O......
  .#.#..O..O.#..#.O.#O..#..O....O...OO.#.#...OO.##..##.O..O..O..O.#...O.#OO##O..#.O.....#.##..O....O..
  ..##................O#O#....#..#O.O....##.#...O...O.....#.....OO.#.#............OO#....O.#.O.O...O#.
  .#..O.O...#O.O....#O....OO.#..O#...........O#.....##.O..#OO...#...O.OO.........OOOO.O...##.#....O##.
  ..O.......OOO...O.#OO.#......O.O......O.....O.OO......O#..#OO..#.O.......O.#.#.....#.O.O#O..O...O.#O
  #............O#..O..O#.....#.O.#.O...O....#O..#...O........##OO..O.OO.OO.....O...###O.O#..#.##....#.
  ..#O..#.#...O......O......O....#.##O#.O.#OOO.....O..#.O.....#O..#..#.O.O...O..#.....#....#.......OO#
  #..O..#O..#.O........###....OO.O.O...OOO#..OO.#..O...#..O...O#...O..O.O.O..O.......OO.O#..O..O...O.#
  OO.OO.#OO.........O...#.OO.OO#..OO...#.....#O.O.O..#O..#.....O..##......O###O.......#.##..O.........
  .#..O..O.O..OO.O..OOO..#...#.#..O.....O.....#.#...OO....O..#.OO#..##O#..OO.O...O..O...###.#..O#...O.
  O...O.O................#....#...O#.#.#O#.O..#O..OO.O.OOO...O...O.OO.....#.OO..#.....#.....#.O.....OO
  O...O..##O...####O###....O##O..O#.O.........#..O..O.###......O#..O...O#O...O#...O......O.O#..O.#...#
  O..#.O...O.#..##O.#.....O........O.......OOO....#...#..O..#...##....#.##.O.O..#....O#...O.....#..OOO
  O..#O#...O..O.O#....#...O..O..#....O.O..#.O..#O.......O#.O.........O.#.#..O.....O....#.OO.O........O
  ..#.........O..#OO.#O...O..#..O.#.O.O...O####........OO.##.O..#.#..#.#O#.OO..O.#.O..OOO...O..O...O..
  ...#.....#.#...O.#.O#...O#..#.O....#.....#......O....#O#..O#O........O#....###OO....#...O##......#O#
  ..#.#..O.O#......O.O.OO........#O.#O..#.O#O......O.........O#O...#..#........#.....O............OOO.
  .#O...####O#...#..O#..OO.O.OO..##O.#O...#...O....O.#......O..O...O..O.#..OO..#..#.##OO#.#..O......##
  #..O.#.O..#.O#O#.O.#....O#..#.O.O...OO#O..O#.O.##O.O.OO......O##..###.O#....O..O.#.##.OO.O#OO....#..
  ..O#.O....O.....#....OO#.O.....OO.#..OO..O....O..#..#O.#OO...O..O....##.O#.OOO.O#...#O..O..##O..OOO.
  O...#........OO.OO.#O......#O..........##....O.#......O..#O.....O...#...O.O.#....##.....##.O.O.#..##
  ...O#..O.O.....OO.O......#.OO.O...O..O###OO....O.......#.O.OO..#O#...#.....#.........#OO......O..OOO
  ##...O..#OOO..O.#.O.O#..OOO##..O.....O#..O.OO........OO...O..#..O..###..#....O#.#.#......#..........
  ..#.O.OOO..OO#..#....O.#.O..O.#.#.........OO...##......#.O.O#O...O...O.O.#..........##....#.#..O#..#
  #...O#.....O..O........#...#.#.#O.##O#.O.#O..O.......O#...#.#.......##.#..OO...#.#O#..#.O..O.......#
  .##.OO.#.#.#.O.#.........O..O.O#O...OO.....#..#OOO.#...O....O....O...##O.#O....OO.#O........###OO#..
  .##............O.#O.#O.....##..O.#...#.....O.OOO............O..#.#........#...#.O..#..#...#O..#.....
  ##O#..##O....#OO..#..#OOO..O.#OO.#..#..#OO#.OO.#.OO..O....OOO...O...O....O...O........#......#...O..
  #.#O.....#.OOO#O#...#.O....#O...#.OO.OO.O..O#.O##.O.O.O.O..O......#..OO...#O..O##.......O...O#O#O..#
  #.....O...........O....#O##.O...O...........#..O...OO.###..OO.........OO..O.#....##.##.##...#.#...O.
  O.#....OO#..O..OO.#O..OO...#O....O.O.OOOO##.#.....O..O........O.#....##O#..#..#.#..O.O....OO...O....
  ..#O.#...#.O.#O.O..O.O#.......#.#...O.#......##OO..##O..O.O...#O...........O.#.#..O.O...O......O...#
  .O....#O#.OO#..#.......#.O.....#......#OOO..O#..OO.....O.O...O..O#...OO.......#.O.#.O#........O.O..O
  O....O.O.#.OO........O#..#..O.O...#......#...#...##.#.O#...OO.....#O#...#..#....O.O#.#.#....O..O....
  OO#.#..#OO###.O...#.O.#..#OOO.O....O..OO..O...O.#O#...#O.O.O.O..#O..O...##...O.#O...O....OO..O..#.OO
  OOO....#OO....O..O#O.#O.....O#...O.#..O....O.....#O..........O#.#.#.OO.....O.....O.##.........O....#
  .OO..#....#O..O.......O.##.O.......#.....#.....O.O..........#.O.O.O..#....#..#....O..#......#...O.O.
  ..#.#.#....OO.O#O..O#.#...OO..O.#OO..#O.##......#...#.O......#..#O.#O.#..O.#..O.........#.#........O
  ...O#.OO#.###.#..O.#...O..O#.O....#..O..O.#O.O........#..O..O..#.#.#OO.OO##O#............#..OOO#.O..
  ....#..OO.O...O#.#.##O.O...O#...#.##.#.###...O..O...#...#...#..#.#O...#.........#.#.O.O#O..O..O#O...
  .#.......O#O.#..##.OO#..OO..##...O#O.#.O...##..O..OO..#...O.#..#..........#....O...#....O.#.#...O...
  ..O..O..#.O..OO..O.##.O.OO.#.O.O....O.#O#.#.O..#.O...O.#...#O...#..O.......O....#O#..O..#OO...##....
  ..O....O..OOO........OO..#..#..O.#...#.##OO...O...OOO..###O#.O.OO#.....O#...........OOO..OOOO.#O..##
  .##.O##.#O.#..O......#.....O...#....O.O..#.......#...O..#.OOOO..#.#.##.#..O.....O...#.#..OO..#O#..O.
  O.......O..O.O...O..#....O.#...OO........#....#O...O..OO....#...O.#O...OO....#.##O......#.O.O....OOO
  O........O##..#.OO.O...#..OO..OO....#.O.O#.#..........OOO.#.O..###.#O..##...........O.#.O....#...O.O
  ..O.#OO...O..#...O###..O.#...O........#O.O...#.O#..#O..........O...#O...#...#.O..O....#O###.....#...
  .OO#O###.O##O.O...O#...#..O#.........#..#.#.#OO#...O#O...#....##.#..#.O.OO...O...O.#O.OO.OO.#...O..O
  OO.O.O#...O...#O#O.OOO...O....#OO..OO....O...#..O.O.O....#.O#.......O.#.O..#.O.#O..O..#O.O..O.O##O.#
  .......#.....O.#....O.O.O.#..O#O#....O..O........O...OO...O.O.O.##.O..O.......#..........O#.#O..#...
  .O..OO..O##......##......OOO........O...O..O.O##..#...O.O.#O#.#...#..........#.O...#O.OO...O....##..
  O........#...OO#....O..#OOO.O.#.#.O..O......O..O.O#.....#....O.....####.........#O...#O.####.OO.....
  #..#O...#.#......OOO.OO..O#.O..O....#........O.......#.O........O..........O...O..#.....#O#.O.#..OO.
  O#.....#OO......#..O..#.##OO.O..#.#O.OO....O..O.#....O.......###..#OO...#..O#.............O.........
  O....#..O.O.#O#....O#...###.#O.#........O...#.......#.O.#O.#OO#OO.#O#....#O.....#.O##...O..#.#......
  .##......O....###...........O......#.....O..#.O...#.OO.##O...O.O#....#O.##...#O.O#..O..OO.O...#.O.O.
  .##.#..#.##.O#.#.....##...#.O..#..##...O..O..#.#.O...#O..#...O#..O.#...O..#..#.O#.O#.O.##.O.#.#..#.O
  .O..O....O...#O..OO..##O.O...##..#....#.....OO.O.O.####O..OO.......#...#....OO...O..#O.#.#......#O..
  O...#..O.....#..#......##O#O#.O#OO...O#..O.#.OO.O#.O#O..#.O#.#......OO...O.....O....OO.OOO.#....O#..
  #..##..........O...#....#.....#OO......O#####.....O.....O##O..O#O..O...O.O......OOO..OO......O.O..#.
  ...O#...OO#......OO.O....#..O..#........O.O......#O..#.....O............O.....O##.OO..O..#.O.#......
  ..OO...O.#..O..O..........##O.OOO.....O..O.#...#.#..........#..#O...O.O.#..#.#.O.O...O..##..#.OO....
  O.............O.####O...O...#.O...##.O#.O.O..OOO..OO..#...#....#.O..O##...#..##...O..#..O..###.#.#.O
  ...O.O.....O.....O.....#.O.O..OO...O..O....OO##.....#.O.....#.#.#...O#.....#OO....O..........#..#.O.`;

  const inputToUse = realInput;

  const dish = [];
  const lines = inputToUse.split(/\n/);
  lines.forEach(function(line){
    const chars = line.trim().split('');
    dish.push(chars);
  });
  console.log('dish',dish);

  dish.forEach(function(row,i){

    row.forEach(function(node,j){
      // if the node contains a rolling stone
      if( node === 'O' ) {  
        var shifting = true;
        var stonePos = [i,j];

        while( shifting ) {
          // console.log('stonePos',stonePos);
          const nodeAbovePosY = stonePos[0] - 1;
          if( nodeAbovePosY >= 0 ) {
            const valueAtNodeAbove = dish[nodeAbovePosY][stonePos[1]];
            // console.log('valueAtNodeAbove',valueAtNodeAbove);
            if( valueAtNodeAbove === '.' ) {
              dish[stonePos[0]][stonePos[1]] = '.'; // old pos is now empty
              dish[nodeAbovePosY][stonePos[1]] = 'O'; // rolling stone moves to pos above

              stonePos = [nodeAbovePosY, stonePos[1]];
            } else {
              shifting = false;
            }
          } else {
            shifting = false;
          }
        }
      }
    });


  });
  console.log('dish after shifting',dish);

  // calculate weights
  const dishHeight = dish.length;
  var totalWeight = 0;
  dish.forEach(function(row,i){
    
    var stoneCount = 0;
    row.forEach(function(char){
      if( char === 'O' ) {
        stoneCount = stoneCount + 1;
      }
    });

    var singleStoneWeight = dishHeight - i;
    const stonesWeight = singleStoneWeight * stoneCount;
    totalWeight = totalWeight + stonesWeight;

  });
  console.log('totalWeight',totalWeight);

  const codeToShow = `  const inputToUse = realInput;

  const dish = [];
  const lines = inputToUse.split(/\\n/);
  lines.forEach(function(line){
    const chars = line.trim().split('');
    dish.push(chars);
  });
  console.log('dish',dish);

  dish.forEach(function(row,i){

    row.forEach(function(node,j){
      // if the node contains a rolling stone
      if( node === 'O' ) {  
        var shifting = true;
        var stonePos = [i,j];

        while( shifting ) {
          console.log('stonePos',stonePos);
          const nodeAbovePosY = stonePos[0] - 1;
          if( nodeAbovePosY >= 0 ) {
            const valueAtNodeAbove = dish[nodeAbovePosY][stonePos[1]];
            console.log('valueAtNodeAbove',valueAtNodeAbove);
            if( valueAtNodeAbove === '.' ) {
              dish[stonePos[0]][stonePos[1]] = '.'; // old pos is now empty
              dish[nodeAbovePosY][stonePos[1]] = 'O'; // rolling stone moves to pos above

              stonePos = [nodeAbovePosY, stonePos[1]];
            } else {
              shifting = false;
            }
          } else {
            shifting = false;
          }
        }
      }
    });


  });
  console.log('dish after shifting',dish);

  // calculate weights
  const dishHeight = dish.length;
  var totalWeight = 0;
  dish.forEach(function(row,i){
    
    var stoneCount = 0;
    row.forEach(function(char){
      if( char === 'O' ) {
        stoneCount = stoneCount + 1;
      }
    });

    var singleStoneWeight = dishHeight - i;
    const stonesWeight = singleStoneWeight * stoneCount;
    totalWeight = totalWeight + stonesWeight;

  });
  console.log('totalWeight',totalWeight);`;

  return (
    <main>
      <div>
        <DayHeader
          title='Day 14: Parabolic Reflector Dish'
          starCount={1}
          puzzleLink='https://adventofcode.com/2023/day/14'
        />

        <p>Part one done. What a joy to have such an easy puzzle after those other challenging ones!</p>
        <p>Okay now I've looked at part two… and it says to tilt the dish in four directions for 1,000,000,000 cycles. After the previous challenges I'm wondering how this problem could be condensed rather than brute forcing it, but this seems difficult. Maybe the answer is to again find a point that each rock reaches a loop, find the lowest common multiple so that all rocks complete their loop, and divide the cycle total by that number to find at what part of the loop the rocks would be in at that cycle point. Well, I think that must be it! Or close to it. It also seems difficult to program… I think I will leave it for now.</p>

        <CodeBlock 
          codeToShow={codeToShow}
        />

        <Link href="/">All days</Link> / <Link href="/day15">Day 15</Link>
      </div>
    </main>
  )
}