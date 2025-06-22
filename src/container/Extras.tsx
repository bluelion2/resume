import React from 'react'
import { ExpContainer } from './Exps'
import { Extra } from '../data'

export const Extras = () => {
  return (
    <ExpContainer>
      <h2>그 외</h2>
      {Extra.map((item, index) => {
        return (
          <div key={`${item.date}-${index}`}>
            <p>{item.date}</p>
            <p>
              - {item.name} / {item.status}
            </p>
          </div>
        )
      })}
    </ExpContainer>
  )
}
