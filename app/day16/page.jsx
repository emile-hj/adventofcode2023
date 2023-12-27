'use client';

import Link from "next/link";

import DayHeader from '../../components/dayHeader/dayHeader.component';
import CodeBlock from '../../components/codeBlock/codeBlock.component';


export default function Page() {

  // fetch('./inputs/day16/testInput.txt')
  //   .then((res) => res.text())
  //   .then((text)=> {
  //     console.log('text',text);
  //     const thing = text.trim().split("\n");
  //     console.log(thing);
  //   });

  const testInput = `.|...\....
  |.-.\.....
  .....|-...
  ........|.
  ..........
  .........\
  ..../.\\..
  .-.-/..|..
  .|....-|.\
  ..//.|....`;

  const inputToUse = testInput;
  // console.log('inputToUse',inputToUse);
  // const filteredInput = inputToUse.replace('\\n','\ \n');
  // console.log(filteredInput);
  const inputLines = inputToUse.split(/\n/);
  console.log(inputLines);

  // const map = [];

  // inputLines.forEach(function(inputLine){
  //   const chars = inputLine.trim().split('');

  //   map.push(chars);

  // });

  // console.log('map',map);

  return (
    <main>
      <div>
        <DayHeader
          title='Day 16: The Floor Will Be Lava'
          starCount={0}
          puzzleLink='https://adventofcode.com/2023/day/16'
        />

        <p>I worked on this for a little while and couldn't get past a bug. Will try to come back to it.</p>

        <Link href="/">All days</Link> / <Link href="/day17">Day 17</Link>
      </div>
    </main>
  )
}