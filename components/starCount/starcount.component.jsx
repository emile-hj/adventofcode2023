
const StarCount = ({count}) => {
  return (
    <div className="starCount">
      { count == 1 ?
        <>⭐</>
        : null
      } 
      { count == 2 ?
        <>⭐⭐</>
        : null
      } 
    </div>
  )
}

export default StarCount;