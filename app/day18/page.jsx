'use client';

import Link from "next/link";

import DayHeader from '../../components/dayHeader/dayHeader.component';
// import CodeBlock from '../../components/codeBlock/codeBlock.component';


export default function Page() {

  return (
    <main>
      <div>
        <DayHeader
          title='Day 18: Lavaduct Lagoon'
          starCount={0}
          puzzleLink='https://adventofcode.com/2023/day/18'
        />

        <p>This puzzle looks really interesting but I haven't attempted it yet. I think I will have trouble setting up the starting data structure.</p>

        <Link href="/">All days</Link> / <Link href="/day19">Day 19</Link>
      </div>
    </main>
  )
}