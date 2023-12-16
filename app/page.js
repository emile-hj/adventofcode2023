'use client' ;

import Link from "next/link";



export default function Home() {

  return (
    <main>
      <div>
        <h1 className="visually-hidden">Days</h1>
        <nav className="dayList">
          <ul>
            <li>
              <Link href="day1">Day 1: Trebuchet?! ⭐⭐</Link>
            </li>
            <li>
              <Link href="day2">Day 2: Cube Conundrum ⭐⭐</Link>
            </li>
            <li>
              <Link href="day3">Day 3: Gear Ratios ⭐⭐</Link>
            </li>
            <li>
              <Link href="day4">Day 4: Scratchcards ⭐⭐</Link>
            </li>
            <li>
              <Link href="day5">Day 5: If You Give A Seed A Fertilizer ⭐⭐</Link>
            </li>
            <li>
              <Link href="day6">Day 6: Wait For It ⭐⭐</Link>
            </li>
            <li>
              <Link href="day7">Day 7: Camel Cards ⭐⭐</Link>
            </li>
            <li>
              <Link href="day8">Day 8: Haunted Wasteland ⭐⭐</Link>
            </li>
            <li>
              <Link href="day9">Day 9: Mirage Maintenance ⭐⭐</Link>
            </li>
            <li>
              <Link href="day10">Day 10: Pipe Maze ⭐</Link>
            </li>
            <li>
              <Link href="day11">Day 11: Cosmic Expansion ⭐⭐</Link>
            </li>
            <li>
              <Link href="day12">Day 12: Hot Springs</Link>
            </li>
            <li>
              <Link href="day13">Day 13: Point of Incidence ⭐</Link>
            </li>
            <li>
              <Link href="day14">Day 14: Parabolic Reflector Dish ⭐</Link>
            </li>
          </ul>
        </nav>

        <p>You can get the <a href="https://github.com/emile-hj/adventofcode2023" target="_blank">full code for this website here</a></p>
      </div>
    </main>
  )
}
