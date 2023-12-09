'use client' ;

import Link from "next/link";

import { CopyBlock,dracula } from "react-code-blocks"; 

export default function Page() {
  // Please note the second part of the puzzle, checking for gear ratios based of *, using recursion, done very inelegantly to try find solution. All could be rewritten better

  const engineSchema = `311...672...34...391.....591......828.......................738....................223....803..472..................................714.840.
  .......*...........*.....*...........*........631%...703.......*..12....652.................*.$............368.769*148.................*....
  ....411...........2....837.121........511.745...........*.48.422.@.........@.............311........887......*................457........595
  ........*328...............&..........................144.*...................138............48.......*......682.........@...*.......777....
  .....144.....+........170...................207............813..../.&....139..*.....346........*..147..143.+.....78....536..79........*.....
  ...........828...559.................181...%..........613.......10...928...*...993.+.........758.*.........471...#../...............573.....
  ....................*164...132..........*........=.......*.................47.........186.........313..............411......................
  ...............342............+..823.....533....519.....899...310................@........325...........15....................407.....#.....
  515......916......*.@...........*.............................*......961.........827......*.......=.........567....=238...874*.......420....
  ...=.......*...207...882......719....455.973...................369...*.....*913........978...%..720..........-..............................
  ........306................................................182.....534......................229........744.........+.....=..........918.....
  303...........745...........361..............223..243.129.....=.................830.....%.................%......493....106............&....
  .................*209..17.........494.910................*90....496.....709......&....896...................................................
  ....%..562............*.....@...........*..528.......321...........*673......................887..%231...............700..............116...
  .988..=....944...596........806...24..519./..........*......../...............146...........*...................554..*......................
  ..........$.......................................822...621..771..151.504.......*.628*343..34...+.&..............*..329.303..641..678..+....
  ........................361.....347*524..538...........*.........*.....-......790.............933..724......699...........*....*........262.
  .716..517...+..........*................*......955$..544.....238..593.....399.......#..=...................*...........241.....930..........
  ...%.+.......744....550..........#131....964.............234..*.............*.....856..809..450....%....332.....419..................389....
  ........264...............798......................816....%....228.......501..224........../.......645.............*499.....*.......*.......
  .......*.......939........*.....@..............795*..............................*........................789................907.....647....
  .....612..........*.612..291..592........#.................567...................391.........................*....387............64.........
  ................24.....*.................814......=........$......./....346................444............833....*..........845...*.........
  ...........303.........605..326.....108.......%..56..842=.....*....387...*..478-..272=....*..........#........778.....299=..@...722.........
  ......484=..=.....753..........$......+.....449...............559.......144.............695.........675..................................253
  ...-...............*.........*................................................................987.......200......*......445.......124...*...
  ....825............603....544.634........................432...=875...738...............731..*.............&..488.363..*.....663.........876
  ........755.................................#............-............/.............*....*....470..314.145..............277...@.....234-....
  ....323.........221..............892...284..473.....44......342.622.........707....413...984..........*....../..............................
  ..............$....*..............*...&........................*.......351%...*.............................226..........155....973+........
  ...............177.991..........268.............532=......./.....277........183......*935.........917....*........825.....-.................
  .....+.%................#...413........304...............384....*.................748........./....*...955.......#...........885.970........
  ...44...627..........368.../...........=.........................314..293...................102..108............................*...........
  ......=.........................=........733..433...128..............*.......889...........................661.........-358...$....281......
  .....35..........$...........834.../699...../.-......................461.......-........*...................*..................374....=.#412
  ............763..201..$............................392........341........96......723.340.........327.736...1..$897.....471..................
  .....*512..*.........221.............125$....257.....@.....................*.277.*................*...*................................@....
  ..301......694..............54.............../.........611...............596.../..100.......164.801....596..490....&361.........415....412..
  ..................243...927*.........29*293........645*.......862*2...........................=............*.....................*..$.......
  ............$......&.........655.906...........500....................125.613..844.........@......435......984....725-..531.....711..79.....
  ...817...450.....................*........431...%........................*..........957.....739..*.....................*....................
  .....#........237......122.66.942............*.........548..................506.435...............73.883............644...101...............
  .863.............*......&..*..................98..283........532......750..............*........#.......+....594*...........................
  ....*.........451.........623.....*....*...........&............%..50*.......44.....123......951.................62.943......365...995......
  .639..............827.265......132..354.127...........350....................*..........................11..........*....%...*..............
  ........41..#175....@...*..*.....................+......*..247.353...#.....44.....912-......757...............144..481.693.271.........993..
  .........*.............993.707...857*...........375.....90...@...*..386.......403.............*..................*..............208....=....
  .......343.437....391..........&.....117....637.....345.........43.......*662..@...........908.........956.......908.............&..........
  389.............&...........670.............$...42.....*...=..........564................................%...............+..................
  ...*............435....*.............913..............574..149.......................962....................953...77..641....514............
  ....448.....783.....892..381.....593.*.........................403*149................%..863*954....373-..+........*...........*.+...663....
  906........................#......*...922.........950......................993...3.........................379....450.......877..804.#......
  ...............768.......*......-.198.........160*............820......382...*......169.........*555..257...................................
  260..............*.....68.....281.......871...................*...980......875.......*.......169........*.............531......@............
  ....*......@.....587...................#......48..251..316@...848..................303................931..132..............790.............
  .....205...572................696........&.....@.....@............709..611.............=.......270........*....165......783.......790.......
  ......................965.........709..826....................882*......%..775.........391....*......985.5........*179.....*47.......&......
  .....451............@................#..................804..................$..161...........837..............*................$904....176.
  720.................70..........899.....868..............=.......357.252.......*..................707.......898.139.....704............*....
  ....................................307*....510..................*.....*.......17..501.............*................@....*..........855.....
  .............745............451................*..689..980..@670.594.716..........*.................565......595..622.....793...............
  .....890......$...73...422...*...977&.......324..%.......@................29.......945....*.............298-..................#.........#642
  ........*........*....%......................................$645......-...*...150.....434.259..609*560....../............266..524..../.....
  .....203..........133.....596.619.................*...............676.107..811...*...........................115...........*.........178....
  ............................=..*...............157.682.......262..*............196......$..........707................14..386...............
  .........871............605....721...........................*...867.................685..866.......*.............602...............628.....
  ......#.....*....413.......@.......380....872................372.......277......277.........*.......166...........@..........656....*....748
  .....841..664.......*.422............................945...........%............*.........959.863.........187........299.......*.....887....
  .708..............311....+..296*497.....751...639....*..........269..........875....%.........................-.................36..........
  .........834..............................@...........708...........................87....298..*471.....$.....463...........................
  ............+...739..........701........................................779................=.........265..642...............................
  ......504..........*...............871*314....127..36..639.196..48..................96......../785.........*..854=.....607=...542...........
  ...73............254.591.........................*..$.....*......*.........35......*...@................150...................-........340..
  ........224............/....*214...=..........949..............455.........*.......377.88....................823......582.............*.....
  .......*.......643.......901........191..267.......293...................194..266.................987.......*........&....+.........545.....
  ....604...583.....*............*742........*.........*........$..................*..365............*....=...880.55......540.520#............
  ............*..272.....843..201.....*....&.128..+....433.......563......281*77.540.+.......979&..134....514.......*..............46.........
  ...966.....67.......................19.934......224..........#....................................................693............*.....525..
  ....*.........188.....904......*..............................210....*958.........811...............574....965................288..20.$.....
  ..213.........*...137*.......325.....628..................406......34..............*.......406...$.*.........*.........867..........*.......
  ...........810............................*.....926.........*..............372.....372.....*...266.716........985......*.............1......
  ...............399*126.....*.......*...379..729.+........245.........893....-..866.....101.299..........8.544........784....................
  954......................63.501.529........-.......695/.................................*..........320....................211.55...533......
  ............457..........................=.......................375#..........961*......720......*...............542........*.....+...327..
  ........396...*.476.774.680.189@.438......669............936.......................195.......405.926.213.....254.....*.................*....
  ...-.......-.......*.....&...........$........22....732.*.......$121.200...............-.......*........*.............522.825..77...........
  ....272..............#............925.....378*......&....53.............*....605.....329.116..501..=.765......537.680......*..*.........#...
  817........109....209...........................690...................573...&............/........48...........*.....*..169...581.......537.
  ...=..747.............171.70.........990........*..............529.............482.....................383......531.53.............#211.....
  ......*.....470........*...*.812.664.=.......141.....82...888...*.................@.312....9*860...........529............./...952..........
  .....906...*....810...966....*.....*.....................*.......616........327-.....*...............................80.655.................
  323......459......@.........185.....894..891..........254.................................938.........262........602*.......................
  .............110.........................$......*55..........155..................248*600.....66........*...............*......75..880......
  .....459...........928...............................*900.....@.....27............................526....434.402.....840.816.......*........
  ......*........241....*...70.465...668....110=....905...........252..*..............%..........74.............*.................817...290...
  .540...224........*.42......*........*.................705.......*..128...&.758=.512...884.....*..648*.......259.......486.627.......*......
  ....*..........467................462..321....296*211.*........283......488...........%......796......774.............%.......+.200.87......
  ...663..............$961..579...........................*...................189..........71................420..57...............*..........
  ...........617.645...........*........700..886...806.581.610.....132.379.......$......+....-..941$.....................504....589........528
  ......377.......+.....290...221..768.....*....&....&................*.................556..............132.............*....................
  ......................+.............*152.448............903.....339.....=.......709............991.......*.............865..................
  ....-.....$717.............552................40..458....*.....*......365.......-......762.732...*.....690.266.....222............122.......
  .414...........496...+.712..*...=....785.........*.......79...884.991................/....*.....844..-........@....*...782...........*627...
  .......$........%..560..*...873..739..#........368.991......*.....*.....27..........951..............864.........206...*...878..............
  .....231..995...........865................602......*....379.609.935...+......643................952.....@...........884...*................
  .............$....726........360..........=.................................................*990.+........959............932................
  .....................+.508.....=...194.......*30........./...........487......171...243..709........495.........995.464.......997...........
  ......292..............$.............*....253.........*.554...........*......../......................*.........*....%......*....*582.446...
  ...........802.....237.....*32...286.259............132.....236......683.....&.......................705...$855.37.....=...476.........*....
  .....418=.............*.664........*..........*11............$.....=.....70.380....138.....416.609..................452........43...156..260
  ....................20..........512........303.....-................491...*.......*.........*..&..........&962..........*......#........-...
  426.646....833...........821....................348.......537...668........92.....295.....620...................147=.753....................
  ......*.....*..................210.681...................$..........937.......350......................533............................+.....
  .65...22..656...#........*44...*.......178*.........446.........655..............*592.....952-.....680..*...........=..305#............704..
  ...*.............422..835......126.........552.......*....543..........-....444.......995.........=.....771........480.........782..........
  ............28............983$...........5............953.&.......216..749....=..........-....................232...........................
  .....................878................*.........426...............*.........................$........792%..*....898......264...39.........
  ...480.....674..149+...................740......#....*251..920.......552......................713...........639.......917.........*.........
  ...+........+...................$951..........*..968.......*............................................750.......479............770.959....
  ...............424..54*489..+...........14..355...........782...50................900.770..........639.....&.942.....*39.....477........+...
  ....888.....................412................................*...%123...579...../....&.....315.....#..........*..............*..66........
  ......*..........................793..402.......*807...854@...115........................=...*...204.......208..928..........121............
  ...........880=.818......982......*......*...923.......................................809.962...*.........&................................
  ...957*511.........*436..@......704.......................-......../....84/...369.496..........917.....................464..................
  ............................812.........785*...............848..506..................*116................=..#...............................
  ..........694..257..876.....................15.........176.............................................593...168...914.230-.200.........500.
  ...427...&.....*..........................................*.............=...%....233..616&....299*.................-....................=...
  ......&......598............571/....60.........897.......911....34....106...713.@.............................933..........288..............
  ..314...............563...&...........*...........*............*......................198........................*............*591....246...
  ....*......274.875.....+.114...........105.763..319...................*730.....158.....................487.......505........................
  .439..........*......................*........*.......595.190.173..653............*...882.812.....*230..-............522....=.......192.....
  ................554...825...845...797.572..814.......*.......*............*....167.......*.....581...................-.......330.......#....
  .......82......*......$....#.........................318...............326.924......880....288..........*.....44.....................+......
  .....-...-....526.........................=981...........959....................*.............*......915.116.*....$...=..............577....
  ..130..............................@330..............414.*....679........999.344.611.......432..................690....502..................
  .............476...#.........................................&.............%...........303.....731.........681..............................
  ....@791....*....152....397....*.....975............904................225...............*.......$........&.....169.207.....................
  ..........995...........&...558.857.......141..803.%....-........199.....*......573..63..315................*...........519.................
  ......................................158*....*........737.........%....399....*..................#47....100................574...#333......
  ..........56............822..................665............................563..383........................................................`;

  const testSchema = `467..114..123..687..
  432*...721...*......
  ..35..633...35..633.
  2.....#.........#.#3
  617*......617*......
  .....+.58......+.12.
  ..111.......592.....
  ......755..755$..999$
  ......755........755
  .664$598...213.456.$`;

  const partNumbers = [];
  const gearRatios = [];
  // var cumTot = 0;
  function isSymbol(char) {
    var isSymbol = true;

    // console.log('checking char', char)
    const isNum = !isNaN(char);
    if( isNum ) {
      isSymbol = false;
    }
    if( char === '.' ) {
      isSymbol = false;
    }

    if( isSymbol ) {
      return true;
    } else {
      return false;
    }
  }

  const schemaLines = engineSchema.split(/\n/);
  // console.log(schemaLines);
  schemaLines.forEach(function(line,index){
    const cleanLine = line.trim();
    schemaLines[index] = cleanLine;
  });
  
  schemaLines.forEach(function(line,index){

    const thisLinePartsFound = [];
    const lineIndex = index;
    // console.log('lineIndex', lineIndex);
    const cleanLine = line.trim();
    // console.log(cleanLine);
    const lineChars = cleanLine.split('');

    const numbers = [];
    var numberCount = 0;    
    var weAreBuildingNumber = false;
    var lineAbove = null;
    var lineBelow = false;

    console.log('-');
    console.log(`---- LINE ${lineIndex + 1} ANALYSIS -----`);

    lineChars.forEach(function(char, i){
      // console.log(char);
      const isNum = !isNaN(char);
      // console.log(`${char} is number`,isNum);

      if( weAreBuildingNumber ) {
        // already building a number
        if( isNum ) {
          const numberBeingBuilt = numbers[numberCount-1][0];
          const buildNumber = `${numberBeingBuilt}${char}`;
          numbers[numberCount - 1][0] = buildNumber;
        } else {
          weAreBuildingNumber = false;
        }
      } else {
        // new number
        if( isNum ) {
          weAreBuildingNumber = true;
          numberCount = numberCount + 1;
          // console.log('numberCount',numberCount);
          const numInstance = [char, i];
          numbers[numberCount - 1] = numInstance;
        }
      }

      if( char === '*' ) {
        const potentialGearNumbers = [];
        const starPos = i;
        console.log('found a * at pos',starPos);
        var buildingPrecedeNum = true;
        var precedeNum = '';        
        var posToCheck = starPos - 1;

        while( buildingPrecedeNum ) {
          if( posToCheck >= 0 ) {
            const checkingChar = cleanLine.charAt(posToCheck);
            const checkingCharIsNum = !isNaN(checkingChar);
            if( checkingCharIsNum ) {
              precedeNum = `${checkingChar}${precedeNum}`;
              posToCheck = posToCheck - 1;
            } else {
              buildingPrecedeNum = false;
            }
          } else {
            buildingPrecedeNum = false;
          }
        }

        if( precedeNum.length ) {
          potentialGearNumbers.push(precedeNum);
        }

        var buildingFollowNum = true;
        var followNum = '';
        var posToCheck = starPos + 1;

        while( buildingFollowNum ) {
          if( posToCheck < cleanLine.length ) {
            const checkingChar = cleanLine.charAt(posToCheck);
            const checkingCharIsNum = !isNaN(checkingChar);
            if( checkingCharIsNum ) {
              followNum = `${followNum}${checkingChar}`;
              posToCheck = posToCheck + 1;
            } else {
              buildingFollowNum = false;
            }
          } else {
            buildingFollowNum = false;
          }
        }

        if( followNum.length ) {
          potentialGearNumbers.push(followNum);
        }

        console.log('potentialGearNumbers',potentialGearNumbers);

        function buildNumBackNForth(string, startPos) {
          var number = string.charAt(startPos);
          var buildingLeft = true;
          var checkPos = startPos;

          // start recursing left
          while( buildingLeft ) {
            checkPos = checkPos - 1;
            if( checkPos >= 0 ) {
              const checkChar = string.charAt(checkPos);
              const checkCharIsNum = !isNaN(checkChar);
              if( checkCharIsNum ) {
                number = `${checkChar}${number}`;
              } else {
                buildingLeft = false;
              }
            } else {
              buildingLeft = false;
            }
          } 

          var buildingRight = true;
          checkPos = startPos;

          // start recursing right
          while( buildingRight ) {
            checkPos = checkPos + 1;
            if( checkPos < string.length ) {
              const checkChar = string.charAt(checkPos);
              const checkCharIsNum = !isNaN(checkChar);
              if( checkCharIsNum ) {
                number = `${number}${checkChar}`;
              } else {
                buildingRight = false;
              }
            } else {
              buildingRight = false;
            }
          }

          return number;
        }

        // lets see if we already found 2 because it seems like the people who designed the puzzle are geniuses and never allowed possibilities in both directions
        if( potentialGearNumbers.length === 2 ) {
          console.log('! Alert: found a gear at line level!');
          const num1 = parseFloat(potentialGearNumbers[0]);
          const num2 = parseFloat(potentialGearNumbers[1]);
          const gearRatio = num1*num2;
          console.log('gear ratio is ', gearRatio);
          gearRatios.push(gearRatio);
        } else {
          // lets keep looking for potential gears (above and below lol)
          // first, above
          const lineAboveIndex = lineIndex - 1;
          if( lineAboveIndex >= 0 ) {
            const lineAbove = schemaLines[lineAboveIndex];
            const charAbove = lineAbove.charAt(starPos);
            const charAboveIsNum = !isNaN(charAbove);
            if( charAboveIsNum ) {
              const number = buildNumBackNForth(lineAbove, starPos);
              // console.log('above number is', number);
              potentialGearNumbers.push(number);
            } else {
              const diagLeftPos = starPos - 1;
              if( diagLeftPos >= 0 ) {
                const charDiagLeft = lineAbove.charAt(diagLeftPos);
                const charDiagLeftIsNum = !isNaN(charDiagLeft);
                if( charDiagLeftIsNum ) {
                  const number = buildNumBackNForth(lineAbove, diagLeftPos);
                  potentialGearNumbers.push(number);
                }
              }
   
              const diagRightPos = starPos + 1;
              if( diagRightPos < cleanLine.length ) {
                const charDiagRight = lineAbove.charAt(diagRightPos);
                const charDiagRightsNum = !isNaN(charDiagRight);
                if( charDiagRightsNum ) {
                  const number = buildNumBackNForth(lineAbove, diagRightPos);
                  potentialGearNumbers.push(number);
                }
              }
            }

          }

          console.log('potentialGearNumbers', potentialGearNumbers);
          // lets see if we found 2
          if( potentialGearNumbers.length === 2 ) {
            const num1 = parseFloat(potentialGearNumbers[0]);
            const num2 = parseFloat(potentialGearNumbers[1]);
            const gearRatio = num1*num2;
            console.log('gear ratio is ', gearRatio);
            gearRatios.push(gearRatio);
          } else {
            // lets check below
            const lineBelowIndex = lineIndex + 1;
            if( lineBelowIndex < schemaLines.length ) {
              // start copy paste of above and inelegantly change to below
              const lineBelow = schemaLines[lineBelowIndex];
              const charBelow = lineBelow.charAt(starPos);
              const charBelowIsNum = !isNaN(charBelow);
              if( charBelowIsNum ) {
                const number = buildNumBackNForth(lineBelow, starPos);
                // console.log('above number is', number);
                potentialGearNumbers.push(number);
              } else {
                const diagLeftPos = starPos - 1;
                if( diagLeftPos >= 0 ) {
                  const charDiagLeft = lineBelow.charAt(diagLeftPos);
                  const charDiagLeftIsNum = !isNaN(charDiagLeft);
                  if( charDiagLeftIsNum ) {
                    const number = buildNumBackNForth(lineBelow, diagLeftPos);
                    potentialGearNumbers.push(number);
                  }
                }
     
                const diagRightPos = starPos + 1;
                if( diagRightPos < cleanLine.length ) {
                  const charDiagRight = lineBelow.charAt(diagRightPos);
                  const charDiagRightsNum = !isNaN(charDiagRight);
                  if( charDiagRightsNum ) {
                    const number = buildNumBackNForth(lineBelow, diagRightPos);
                    potentialGearNumbers.push(number);
                  }
                }
              }
              // end copy paste of above        
              
              console.log('potentialGearNumbers', potentialGearNumbers);
              // lets see if we found 2
              if( potentialGearNumbers.length === 2 ) {
                const num1 = parseFloat(potentialGearNumbers[0]);
                const num2 = parseFloat(potentialGearNumbers[1]);
                const gearRatio = num1*num2;
                console.log('gear ratio is ', gearRatio);
                gearRatios.push(gearRatio);
              }
            }
          }

        }


      }
    });

    // console.log('numbers found', numbers);

    numbers.forEach(function(numberInstance){
      var isPart = false;
      // const numStartPos = cleanLine.indexOf(number); // this obviously doesn't work if there are two same numbers in a line
      const numStartPos = numberInstance[1];
      // console.log(`------ number ${number} found at ${numStartPos}`);
      const number = numberInstance[0];

      // check preceding char
      const precedingPos = numStartPos - 1;
      if( precedingPos >= 0 ) {
        const precedingChar = cleanLine.charAt(precedingPos);
        // console.log('the preceding char is',precedingChar);
        const precedingIsSymbol = isSymbol(precedingChar);
        if( precedingIsSymbol ) {
          // console.log(`preceding char ${precedingChar} is a symbol`);
          // console.log("it's a part!");
          isPart = true;
          partNumbers.push(number);
          thisLinePartsFound.push(number);
          // cumTot = cumTot + +number;
        }
      }

      if( isPart ) {
        return;
      }

      // check following char
      const numLen = number.length;
      // console.log(`the length of number ${number} is ${numLen}`);
      const followingPos = numStartPos + numLen;
      // console.log('the following position is', followingPos);
      if( followingPos < cleanLine.length ) {
        const followingChar = cleanLine.charAt(followingPos);
        // console.log('the following char is',followingChar);
        const followingIsSymbol = isSymbol(followingChar);
        if( followingIsSymbol ) {
          // console.log(`following char ${followingChar} is a symbol`);
          // console.log("it's a part!");
          isPart = true;
          partNumbers.push(number);
          thisLinePartsFound.push(number);
          // cumTot = cumTot + +number;
        }
      }

      if( isPart ) {
        return;
      }

      function checkAdjacentLine(line, firstPosToCheck, lastPosToCheck) {
        var partCaseFound = false;

        if( firstPosToCheck < 0 ) {
          firstPosToCheck = 0;
        }
        // console.log(`firstPosToCheck is ${firstPosToCheck} in check function`);
        if( followingPos > cleanLine.length - 1 ) {
          lastPosToCheck = cleanLine.length - 1;
        }
        // console.log(`lastPosToCheck is ${lastPosToCheck} in check function`);

        const rangeToCheck = lastPosToCheck - firstPosToCheck;
        for( var i=0; i <= rangeToCheck; i++ ) {
          const posToCheck = firstPosToCheck + i;
          // console.log(`we are checking the line at position ${posToCheck}`);
          const checkingChar = line[posToCheck];
          const checkingCharIsSymbol = isSymbol(checkingChar);
          if( checkingCharIsSymbol ) {
            // console.log(`char ${checkingChar} is a symbol`);
            partCaseFound = true;
            
          }
        }

        if( partCaseFound ) {
          return true;
        } else {
          return false;
        }
      }

      // start checking adjacent lines
      var firstPosToCheck = precedingPos;
      var lastPosToCheck = followingPos;


      // check the line above, if there is one
      const lineAboveIndex = lineIndex - 1;
      if( lineAboveIndex >= 0 ) {
        lineAbove = schemaLines[lineAboveIndex];
        // console.log('lineAbove', lineAbove);

        // console.log(`we are checking number ${number}`);
        // console.log('firstPosToCheck',firstPosToCheck);
        // console.log('lastPosToCheck',lastPosToCheck);
        // console.log('linelength',cleanLine.length);
        const partCaseFound = checkAdjacentLine(lineAbove, firstPosToCheck, lastPosToCheck);
        if( partCaseFound ) {
          // console.log(`part found because line above has symbol adjacent to number ${number}`);
          isPart = true;
          partNumbers.push(number);
          thisLinePartsFound.push(number);
          // cumTot = cumTot + +number;
        }
      }

      if( isPart ) {
        return;
      }
      // check the line below, if there is one
      const lineBelowIndex = lineIndex + 1;
      if( lineBelowIndex < schemaLines.length ) {
        lineBelow = schemaLines[lineBelowIndex];
        // console.log('lineBelow', lineBelow);


        const partCaseFound = checkAdjacentLine(lineBelow, firstPosToCheck, lastPosToCheck);
        if( partCaseFound ) {
          // console.log(`part found because line below has symbol adjacent to number ${number}`);
          isPart = true;
          partNumbers.push(number);
          thisLinePartsFound.push(number);
          // cumTot = cumTot + +number;
        }
      }
    });

    // if( lineAbove ) {
    //   console.log(lineAbove);
    // }
    // console.log(line);
    // if( lineBelow ) {
    //   console.log(lineBelow);
    // }
    // console.log(`on line ${lineIndex + 1} the numbers are`, numbers);
    // console.log(`on line ${lineIndex + 1} found parts`, thisLinePartsFound);
  });

  console.log('partNumbers', partNumbers);
  var total = 0;
  partNumbers.forEach(function(partNumber) {
    // console.log(typeof partNumber);
    const number = parseFloat(partNumber);
    total = total + number;
  });
  
  console.log('total',total);
  // console.log('cumTot',cumTot);

  // var noDupTotal = 0;
  // const partNumbersNoDups = new Set(partNumbers);
  // console.log('partNumbersNoDups',partNumbersNoDups);
  // partNumbersNoDups.forEach(function(number){
  //   noDupTotal = noDupTotal + +number;
  // });
  // console.log('noDupTotal',noDupTotal);

  console.log('gear ratios are:',gearRatios)
  var totalFromGearRatios = 0;
  gearRatios.forEach(function(gearRatio){
    totalFromGearRatios = totalFromGearRatios + +gearRatio;
  });

  console.log('totalFromGearRatios',totalFromGearRatios);

  const codeToShowOnPage = `
  const partNumbers = [];
  const gearRatios = [];
  // var cumTot = 0;
  function isSymbol(char) {
    var isSymbol = true;

    // console.log('checking char', char)
    const isNum = !isNaN(char);
    if( isNum ) {
      isSymbol = false;
    }
    if( char === '.' ) {
      isSymbol = false;
    }

    if( isSymbol ) {
      return true;
    } else {
      return false;
    }
  }

  const schemaLines = engineSchema.split(/\\n/);
  // console.log(schemaLines);
  schemaLines.forEach(function(line,index){
    const cleanLine = line.trim();
    schemaLines[index] = cleanLine;
  });
  
  schemaLines.forEach(function(line,index){

    const thisLinePartsFound = [];
    const lineIndex = index;
    // console.log('lineIndex', lineIndex);
    const cleanLine = line.trim();
    // console.log(cleanLine);
    const lineChars = cleanLine.split('');

    const numbers = [];
    var numberCount = 0;    
    var weAreBuildingNumber = false;
    var lineAbove = null;
    var lineBelow = false;

    console.log('-');
    console.log(\`---- LINE \${lineIndex + 1} ANALYSIS -----\`);

    lineChars.forEach(function(char, i){
      // console.log(char);
      const isNum = !isNaN(char);
      // console.log(\`\${char} is number\`,isNum);

      if( weAreBuildingNumber ) {
        // already building a number
        if( isNum ) {
          const numberBeingBuilt = numbers[numberCount-1][0];
          const buildNumber = \`\${numberBeingBuilt}\${char}\`;
          numbers[numberCount - 1][0] = buildNumber;
        } else {
          weAreBuildingNumber = false;
        }
      } else {
        // new number
        if( isNum ) {
          weAreBuildingNumber = true;
          numberCount = numberCount + 1;
          // console.log('numberCount',numberCount);
          const numInstance = [char, i];
          numbers[numberCount - 1] = numInstance;
        }
      }

      if( char === '*' ) {
        const potentialGearNumbers = [];
        const starPos = i;
        console.log('found a * at pos',starPos);
        var buildingPrecedeNum = true;
        var precedeNum = '';        
        var posToCheck = starPos - 1;

        while( buildingPrecedeNum ) {
          if( posToCheck >= 0 ) {
            const checkingChar = cleanLine.charAt(posToCheck);
            const checkingCharIsNum = !isNaN(checkingChar);
            if( checkingCharIsNum ) {
              precedeNum = \`\${checkingChar}\${precedeNum}\`;
              posToCheck = posToCheck - 1;
            } else {
              buildingPrecedeNum = false;
            }
          } else {
            buildingPrecedeNum = false;
          }
        }

        if( precedeNum.length ) {
          potentialGearNumbers.push(precedeNum);
        }

        var buildingFollowNum = true;
        var followNum = '';
        var posToCheck = starPos + 1;

        while( buildingFollowNum ) {
          if( posToCheck < cleanLine.length ) {
            const checkingChar = cleanLine.charAt(posToCheck);
            const checkingCharIsNum = !isNaN(checkingChar);
            if( checkingCharIsNum ) {
              followNum = \`\${followNum}\${checkingChar}\`;
              posToCheck = posToCheck + 1;
            } else {
              buildingFollowNum = false;
            }
          } else {
            buildingFollowNum = false;
          }
        }

        if( followNum.length ) {
          potentialGearNumbers.push(followNum);
        }

        console.log('potentialGearNumbers',potentialGearNumbers);

        function buildNumBackNForth(string, startPos) {
          var number = string.charAt(startPos);
          var buildingLeft = true;
          var checkPos = startPos;

          // start recursing left
          while( buildingLeft ) {
            checkPos = checkPos - 1;
            if( checkPos >= 0 ) {
              const checkChar = string.charAt(checkPos);
              const checkCharIsNum = !isNaN(checkChar);
              if( checkCharIsNum ) {
                number = \`\${checkChar}\${number}\`;
              } else {
                buildingLeft = false;
              }
            } else {
              buildingLeft = false;
            }
          } 

          var buildingRight = true;
          checkPos = startPos;

          // start recursing right
          while( buildingRight ) {
            checkPos = checkPos + 1;
            if( checkPos < string.length ) {
              const checkChar = string.charAt(checkPos);
              const checkCharIsNum = !isNaN(checkChar);
              if( checkCharIsNum ) {
                number = \`\${number}\${checkChar}\`;
              } else {
                buildingRight = false;
              }
            } else {
              buildingRight = false;
            }
          }

          return number;
        }

        // lets see if we already found 2 because it seems like the people who designed the puzzle are geniuses and never allowed possibilities in both directions
        if( potentialGearNumbers.length === 2 ) {
          console.log('! Alert: found a gear at line level!');
          const num1 = parseFloat(potentialGearNumbers[0]);
          const num2 = parseFloat(potentialGearNumbers[1]);
          const gearRatio = num1*num2;
          console.log('gear ratio is ', gearRatio);
          gearRatios.push(gearRatio);
        } else {
          // lets keep looking for potential gears (above and below lol)
          // first, above
          const lineAboveIndex = lineIndex - 1;
          if( lineAboveIndex >= 0 ) {
            const lineAbove = schemaLines[lineAboveIndex];
            const charAbove = lineAbove.charAt(starPos);
            const charAboveIsNum = !isNaN(charAbove);
            if( charAboveIsNum ) {
              const number = buildNumBackNForth(lineAbove, starPos);
              // console.log('above number is', number);
              potentialGearNumbers.push(number);
            } else {
              const diagLeftPos = starPos - 1;
              if( diagLeftPos >= 0 ) {
                const charDiagLeft = lineAbove.charAt(diagLeftPos);
                const charDiagLeftIsNum = !isNaN(charDiagLeft);
                if( charDiagLeftIsNum ) {
                  const number = buildNumBackNForth(lineAbove, diagLeftPos);
                  potentialGearNumbers.push(number);
                }
              }
   
              const diagRightPos = starPos + 1;
              if( diagRightPos < cleanLine.length ) {
                const charDiagRight = lineAbove.charAt(diagRightPos);
                const charDiagRightsNum = !isNaN(charDiagRight);
                if( charDiagRightsNum ) {
                  const number = buildNumBackNForth(lineAbove, diagRightPos);
                  potentialGearNumbers.push(number);
                }
              }
            }

          }

          console.log('potentialGearNumbers', potentialGearNumbers);
          // lets see if we found 2
          if( potentialGearNumbers.length === 2 ) {
            const num1 = parseFloat(potentialGearNumbers[0]);
            const num2 = parseFloat(potentialGearNumbers[1]);
            const gearRatio = num1*num2;
            console.log('gear ratio is ', gearRatio);
            gearRatios.push(gearRatio);
          } else {
            // lets check below
            const lineBelowIndex = lineIndex + 1;
            if( lineBelowIndex < schemaLines.length ) {
              // start copy paste of above and inelegantly change to below
              const lineBelow = schemaLines[lineBelowIndex];
              const charBelow = lineBelow.charAt(starPos);
              const charBelowIsNum = !isNaN(charBelow);
              if( charBelowIsNum ) {
                const number = buildNumBackNForth(lineBelow, starPos);
                // console.log('above number is', number);
                potentialGearNumbers.push(number);
              } else {
                const diagLeftPos = starPos - 1;
                if( diagLeftPos >= 0 ) {
                  const charDiagLeft = lineBelow.charAt(diagLeftPos);
                  const charDiagLeftIsNum = !isNaN(charDiagLeft);
                  if( charDiagLeftIsNum ) {
                    const number = buildNumBackNForth(lineBelow, diagLeftPos);
                    potentialGearNumbers.push(number);
                  }
                }
     
                const diagRightPos = starPos + 1;
                if( diagRightPos < cleanLine.length ) {
                  const charDiagRight = lineBelow.charAt(diagRightPos);
                  const charDiagRightsNum = !isNaN(charDiagRight);
                  if( charDiagRightsNum ) {
                    const number = buildNumBackNForth(lineBelow, diagRightPos);
                    potentialGearNumbers.push(number);
                  }
                }
              }
              // end copy paste of above        
              
              console.log('potentialGearNumbers', potentialGearNumbers);
              // lets see if we found 2
              if( potentialGearNumbers.length === 2 ) {
                const num1 = parseFloat(potentialGearNumbers[0]);
                const num2 = parseFloat(potentialGearNumbers[1]);
                const gearRatio = num1*num2;
                console.log('gear ratio is ', gearRatio);
                gearRatios.push(gearRatio);
              }
            }
          }

        }


      }
    });

    // console.log('numbers found', numbers);

    numbers.forEach(function(numberInstance){
      var isPart = false;
      // const numStartPos = cleanLine.indexOf(number); // this obviously doesn't work if there are two same numbers in a line
      const numStartPos = numberInstance[1];
      // console.log(\`------ number \${number} found at \${numStartPos}\`);
      const number = numberInstance[0];

      // check preceding char
      const precedingPos = numStartPos - 1;
      if( precedingPos >= 0 ) {
        const precedingChar = cleanLine.charAt(precedingPos);
        // console.log('the preceding char is',precedingChar);
        const precedingIsSymbol = isSymbol(precedingChar);
        if( precedingIsSymbol ) {
          // console.log(\`preceding char \${precedingChar} is a symbol\`);
          // console.log("it's a part!");
          isPart = true;
          partNumbers.push(number);
          thisLinePartsFound.push(number);
          // cumTot = cumTot + +number;
        }
      }

      if( isPart ) {
        return;
      }

      // check following char
      const numLen = number.length;
      // console.log(\`the length of number \${number} is \${numLen}\`);
      const followingPos = numStartPos + numLen;
      // console.log('the following position is', followingPos);
      if( followingPos < cleanLine.length ) {
        const followingChar = cleanLine.charAt(followingPos);
        // console.log('the following char is',followingChar);
        const followingIsSymbol = isSymbol(followingChar);
        if( followingIsSymbol ) {
          // console.log(\`following char \${followingChar} is a symbol\`);
          // console.log("it's a part!");
          isPart = true;
          partNumbers.push(number);
          thisLinePartsFound.push(number);
          // cumTot = cumTot + +number;
        }
      }

      if( isPart ) {
        return;
      }

      function checkAdjacentLine(line, firstPosToCheck, lastPosToCheck) {
        var partCaseFound = false;

        if( firstPosToCheck < 0 ) {
          firstPosToCheck = 0;
        }
        // console.log(\`firstPosToCheck is \${firstPosToCheck} in check function\`);
        if( followingPos > cleanLine.length - 1 ) {
          lastPosToCheck = cleanLine.length - 1;
        }
        // console.log(\`lastPosToCheck is \${lastPosToCheck} in check function\`);

        const rangeToCheck = lastPosToCheck - firstPosToCheck;
        for( var i=0; i <= rangeToCheck; i++ ) {
          const posToCheck = firstPosToCheck + i;
          // console.log(\`we are checking the line at position \${posToCheck}\`);
          const checkingChar = line[posToCheck];
          const checkingCharIsSymbol = isSymbol(checkingChar);
          if( checkingCharIsSymbol ) {
            // console.log(\`char \${checkingChar} is a symbol\`);
            partCaseFound = true;
            
          }
        }

        if( partCaseFound ) {
          return true;
        } else {
          return false;
        }
      }

      // start checking adjacent lines
      var firstPosToCheck = precedingPos;
      var lastPosToCheck = followingPos;


      // check the line above, if there is one
      const lineAboveIndex = lineIndex - 1;
      if( lineAboveIndex >= 0 ) {
        lineAbove = schemaLines[lineAboveIndex];
        // console.log('lineAbove', lineAbove);

        // console.log(\`we are checking number \${number}\`);
        // console.log('firstPosToCheck',firstPosToCheck);
        // console.log('lastPosToCheck',lastPosToCheck);
        // console.log('linelength',cleanLine.length);
        const partCaseFound = checkAdjacentLine(lineAbove, firstPosToCheck, lastPosToCheck);
        if( partCaseFound ) {
          // console.log(\`part found because line above has symbol adjacent to number \${number}\`);
          isPart = true;
          partNumbers.push(number);
          thisLinePartsFound.push(number);
          // cumTot = cumTot + +number;
        }
      }

      if( isPart ) {
        return;
      }
      // check the line below, if there is one
      const lineBelowIndex = lineIndex + 1;
      if( lineBelowIndex < schemaLines.length ) {
        lineBelow = schemaLines[lineBelowIndex];
        // console.log('lineBelow', lineBelow);


        const partCaseFound = checkAdjacentLine(lineBelow, firstPosToCheck, lastPosToCheck);
        if( partCaseFound ) {
          // console.log(\`part found because line below has symbol adjacent to number \${number}\`);
          isPart = true;
          partNumbers.push(number);
          thisLinePartsFound.push(number);
          // cumTot = cumTot + +number;
        }
      }
    });

    // if( lineAbove ) {
    //   console.log(lineAbove);
    // }
    // console.log(line);
    // if( lineBelow ) {
    //   console.log(lineBelow);
    // }
    // console.log(\`on line \${lineIndex + 1} the numbers are\`, numbers);
    // console.log(\`on line \${lineIndex + 1} found parts\`, thisLinePartsFound);
  });

  console.log('partNumbers', partNumbers);
  var total = 0;
  partNumbers.forEach(function(partNumber) {
    // console.log(typeof partNumber);
    const number = parseFloat(partNumber);
    total = total + number;
  });
  
  console.log('total',total);
  // console.log('cumTot',cumTot);

  // var noDupTotal = 0;
  // const partNumbersNoDups = new Set(partNumbers);
  // console.log('partNumbersNoDups',partNumbersNoDups);
  // partNumbersNoDups.forEach(function(number){
  //   noDupTotal = noDupTotal + +number;
  // });
  // console.log('noDupTotal',noDupTotal);

  console.log('gear ratios are:',gearRatios)
  var totalFromGearRatios = 0;
  gearRatios.forEach(function(gearRatio){
    totalFromGearRatios = totalFromGearRatios + +gearRatio;
  });

  console.log('totalFromGearRatios',totalFromGearRatios);`;

  return (
    <main>
      <div>
        <h1>Day 3</h1>
        <p>This was an enjoyable but time intensive thing to do this Sunday. Ironically the easier part 1 took me longer, as I had a bug where having two of the same number on one line caused an issue, which was a bit difficult to find and resolve. I already feel like I have more flow with coding these problems and have improved and learnt a lot.</p>
        <p>Once that was done though, part 2 was fairly quick to solve although mentally intensive. The code for that is inelegant and verbose because I basically manually check the * characters for being potential gears manually in each direction to run the recursive steps afterwards. It would be better to condense that to a single flexible function. But, got the answer now and not going to refactor.</p>
        <p>Later after solving the puzzles, I checked out a video of a guy solving it in Rust. Watched maybe half and hated his approach, and didn't understand a lot of the Rust code. I think he was using vector maps. I realise that my way of approaching these problems is probably very JS orientated for someone who comes from a web background. There are likely way more elegant and efficient ways to tackle the problems, although in a way I found at least the start of how I tackled it nicer than the other guys approach. For sure I am learning a lot and this is great.</p>
        <CopyBlock 
          text={codeToShowOnPage}
          language='javascript'
          showLineNumbers='true'
          wrapLines 
          theme={dracula} 
        /> 
        <Link href="/">Back</Link>
      </div>
    </main>
  )
}
