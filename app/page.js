'use client' ;

import Link from "next/link";



export default function Home() {

  return (
    <main>
      <div>
        <h1>Days</h1>
        <nav>
          <ul>
            <li>
              <Link href="day1">Day 1</Link>
            </li>
            <li>
              <Link href="day2">Day 2</Link>
            </li>
            <li>
              <Link href="day3">Day 3</Link>
            </li>
            <li>
              <Link href="day4">Day 4</Link>
            </li>
            <li>
              <Link href="day5">Day 5</Link>
            </li>
            <li>
              <Link href="day6">Day 6</Link>
            </li>
            <li>
              <Link href="day7">Day 7</Link>
            </li>
            <li>
              <Link href="day8">Day 8</Link>
            </li>
            <li>
              <Link href="day9">Day 9</Link>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  )
}
