import React, { useState } from 'react'
import data from '../../data.json' // Assuming data.json is in the same directory

function List({ items }) {

  const [isOpen, setIsOpen] = useState({});
  return (
    <div className='ml-4 ' >
      {items.map((item, index) => (
        <div key={item.id}>

          <h2
            className='text-white cursor-pointer'>
            {item.isFolder &&
              <span
                onClick={() => {
                  setIsOpen(prev => ({
                    ...prev,
                    [item.name]: !prev[item.name],
                  }))
                }} >{isOpen?.[item.name] ? '-' : '+'}</span>
            }
            {item.name}
          </h2>
          {item.children && isOpen?.[item.name]
            && <List items={item.children} />}
        </div>
      ))}

      {/* {items.children.map(child => (

        <List items={child} />
      ))} */}
    </div>
  )
}

function Main() {
  return (
    <div>
      <h1 className='text-white'>Vs code sidebar

      </h1>
      <List items={data} />
    </div>
  )
}

export default Main 