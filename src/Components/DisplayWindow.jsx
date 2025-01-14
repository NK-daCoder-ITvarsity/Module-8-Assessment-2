import React from 'react'

const DisplayWindow = ({previous, current, operator, output}) => {
  return (
    <section className="shadow-neumorphism-dark-inset p-2 rounded-2xl w-full bg-gradient-to-br from-gray-950 to-gray-900 h-48 ">
        <div className="text-sm text-white">{previous || "x"} {operator || "operator"} {current || "y"}</div>
        <div className="text-2xl text-white">{output || "output"}</div>
    </section>
  )
}

export default DisplayWindow;
