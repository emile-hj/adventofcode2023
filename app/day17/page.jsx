'use client';

import Link from "next/link";

import DayHeader from '../../components/dayHeader/dayHeader.component';
// import CodeBlock from '../../components/codeBlock/codeBlock.component';


export default function Page() {

  return (
    <main>
      <div>
        <DayHeader
          title='Day 17: Clumsy Crucible'
          starCount={0}
          puzzleLink='https://adventofcode.com/2023/day/17'
        />

        <p>I had a look at the problem but haven't attempted it yet. It seems I will need to calculate many combinations of routes to see which has the lowest cost, and I'm not sure yet how I could do that, and whether it would take too long to compute.</p>

        <Link href="/">All days</Link> / <Link href="/day18">Day 18</Link>
      </div>
    </main>
  )
}