
import Link from "next/link";

import './header.scss';


const Header = () => {
  return (
    <div className="pane pane__header">
      <div className="paneInner">
        
        <Link className="logo" href="/">Emile does Advent of Code 2023</Link>
      </div>
    </div>
  )
}

export default Header;