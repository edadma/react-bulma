// import React, { useState } from 'react'
// import { Button, Buttons } from './Button'
// import { Box } from './Box'
// import { Text } from './Text'
// import ReactDOM from 'react-dom'
// import reportWebVitals from './reportWebVitals'
//
// console.log('react-bulma')
// const App: React.FC = () => {
//   const [counter, setCounter] = useState(0)
//
//   return (
//     <Box>
//       <Text size={3} weight="bold" family="code">
//         Counter: {counter}
//       </Text>
//       <Buttons>
//         <Button primary onClick={() => setCounter(counter - 1)}>
//           <Text size={3}>-</Text>
//         </Button>
//         <Button onClick={() => setCounter(counter + 1)}>
//           <Text size={3}>+</Text>
//         </Button>
//       </Buttons>
//     </Box>
//   )
// }
//
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// )
//
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()

export {Button, Buttons} from './Button'
export {Box} from './Box'
export {Text} from './Text'
export {Container} from './Container'
export {Card} from './Card'
export {Column, Columns} from './Column'
export {Content} from './Content'
