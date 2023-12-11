import StarCount from '../../components/starcount/starcount.component';

import Link from "next/link";

import './dayHeader.scss';

const DayHeader = ({
  title,
  starCount,
  puzzleLink
}) => {

  return (
    <div className="dayHeader">
      <h1>{title}</h1>

      <div className="underTitle">
        <StarCount count={starCount} />
        <Link href={puzzleLink} target="_blank">Link to puzzle</Link>
      </div>        
    </div>
  )
}

export default DayHeader;