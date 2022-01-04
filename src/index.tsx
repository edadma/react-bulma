import React from 'react'
import './bulma.min.css'
import { Progress, Columns, Column } from './index'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'

const App: React.FC = () => {
  return (
    <>
      <Columns>
        <Column size="2">
          <Progress color="primary" size="large" value={0.5} />
        </Column>
      </Columns>
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

export { Button, Buttons, Delete } from './Button'
export { Box } from './Box'
export { Text } from './Text'
export { Container } from './Container'
export { Card } from './Card'
export { Column, Columns } from './Column'
export { Content } from './Content'
export { Block } from './Block'
export { IconFa } from './Icon'
export { Image } from './Image'
export { Notification } from './Notification'
export { Progress } from './Progress'
