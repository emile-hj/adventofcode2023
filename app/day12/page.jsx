'use client';

import Link from "next/link";

import DayHeader from '../../components/dayHeader/dayHeader.component';
import CodeBlock from '../../components/codeBlock/codeBlock.component';




export default function Page() {
    

  return (
    <main>
      <div>
        <DayHeader
          title='Day 12'
          starCount={0}
          puzzleLink='https://adventofcode.com/2023/day/12'
        />

        <p>This problem seems very difficult to me and perhaps the most difficult so far. I thought about it for a long time on the plane and I think I have an idea to start trying out, but I don't think it is the complete solution. In any case I know I am bound to struggle with this one and haven't written any code for it yet. I haven't had time but I would like to at least attempt it.</p>
        <p>At the very least, at least I have considered this problem.</p>
{/*   
        <CodeBlock 
          codeToShow={codeToShowOnPage}
        />  */}

        <Link href="/">All days</Link> / <Link href="/day13">Day 13</Link>
      </div>
    </main>
  )
}