'use client';

import Link from "next/link";

import DayHeader from '../../components/dayHeader/dayHeader.component';
import CodeBlock from '../../components/codeBlock/codeBlock.component';


export default function Page() {

  const testInput = `broadcaster -> a, b, c
  %a -> b
  %b -> c
  %c -> inv
  &inv -> a`;

  const inputToUse = testInput;

  const inputLines = testInput.split(/\n/);
  console.log('inputLines',inputLines);

  const broadcaster = [];
  const modules = [];

  inputLines.forEach(function(line) {
    const cleanLine = line.trim();

    const lineArr = cleanLine.split('->');
    const linePt1 = lineArr[0].trim();
    const linePt2 = lineArr[1].trim();

    if( linePt1 === 'broadcaster' ) {
      if( linePt2.includes(',') ) {
        const pt2Arr = linePt2.split(',');
        pt2Arr.forEach(function(pt) {
          broadcaster.push( pt.trim() );
        });
      } else {
        broadcaster.push(linePt2);
      }
    } else {
      const char1 = linePt1.charAt(0);
      const modName = linePt1.slice(1,linePt1.length);
      const sends = [];
      var type = '';

      if( linePt2.includes(',') ) {
        const pt2Arr = linePt2.split(',');
        pt2Arr.forEach(function(pt) {
          sends.push( pt.trim() );
        });
      } else {
        sends.push(linePt2);
      }


      if( char1 === '%' ) {
        // it's a flipflop  
        type = 'flipflop';
      } else if( char1 === '&' ) {
        // its a conjunction
        type = 'conjunction';
      }

      const modObj = {
        name: modName,
        type: type,
        sends: sends
      }
      modules.push(modObj);

    }

  });

  console.log('broadcaster', broadcaster);
  console.log('modules', modules);


  var pulsesPropagated = true;
  var pressesCompleted = 0;
  var highPulseCount = 0;
  var lowPulseCount = 0;

  while( pressesCompleted < 1 ) {

    if( pulsesPropagated ) {
      pressBtn();
    }

    function pressBtn() {
      pulsesPropagated = false;
      sendPulse('low');

      // the broadcaster sends a low pulse to all
      broadcaster.forEach(function(module) {
        const modObj = Object.values(modules).find( (obj) => {
          return obj.name === module;
        });
        console.log('modObj',modObj);
        const modType = modObj.type;

        activateModule('low', modType);
      });

      pressesCompleted = pressesCompleted + 1;
      pulsesPropagated = true;
    }

    // function activateBroadcasters($pulseType) {

    // }

    async function activateModule($pulseType, $moduleType) {
      sendPulse($pulseType);
    }

    function sendPulse($pulseType) {
      if( $pulseType === 'low' ) {
        lowPulseCount = lowPulseCount + 1;
      } else if( $pulseType === 'high' ) {
        highPulseCount = highPulseCount + 1;
      }
    }
  }

  console.log('highPulseCount',highPulseCount);
  console.log('lowPulseCount',lowPulseCount);


  return (
    <main>
      <div>
        <DayHeader
          title='Day 20: Pulse Propagation'
          starCount={0}
          puzzleLink='https://adventofcode.com/2023/day/20'
        />

       

        <Link href="/">All days</Link>
      </div>
    </main>
  )
}