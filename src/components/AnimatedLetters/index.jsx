/* eslint-disable react/prop-types */
import './index.scss'

// eslint-disable-next-line react/prop-types
const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    <span>
    {console.log('problem here ')}
   {console.log(letterClass)}
    {/* //so that each letter gets class */}
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters