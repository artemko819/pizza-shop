import React, { useState } from 'react'

export const Categories: React.FC = () => {
  const categories: string[] = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

  const [activeItem, setActiveItem] = useState<number>(0)

  const handleClick = (index: number) => {
    setActiveItem(index)
  }
  return (
    <div className="categories">
      <ul>
        {categories.map((value, index) => (
          <li className={activeItem === index ? 'active' : ''}
            onClick={() => handleClick(index)}
            key={index}
          >{value}</li>
        ))
        }

      </ul>
    </div>
  )
}
