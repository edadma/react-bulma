import React from 'react'
import './bulma.min.css'
import { Box, Tabs } from './index'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'

const App: React.FC = () => (
  <Tabs
    panes={[
      { tab: 'one', pane: <Box>one</Box> },
      { tab: 'two', pane: <Box>two</Box> },
    ]}
  />
)

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
export { Table } from './Table'
export { Tag, Tags } from './Tag'
export { Title, Subtitle } from './Title'
export { Form, Field, FieldLabel, FieldBody, Control, Label } from './Form'
export { Message } from './Message'
export { Breadcrumbs, Breadcrumb } from './Breadcrumb'
export { Input } from './Input'
export { Textarea } from './Textarea'
export { Checkbox } from './Checkbox'
export { Tabs } from './Tabs'

// import {
//   Box,
//   Columns,
//   Column,
//   Field,
//   FieldLabel,
//   FieldBody,
//   Control,
//   Form,
//   Button,
//   Buttons,
//   Textarea,
//   Checkbox,
//   Tabs,
//   Tab,
// } from './index'
// import ReactDOM from 'react-dom'
// import reportWebVitals from './reportWebVitals'
//
// const App: React.FC = () => {
//   const [input, setInput] = useState<any>({})
//
//   return (
//     <>
//       <Tabs
//         panes={[
//           { tab: 'one', pane: 'one' },
//           { tab: 'two', pane: 'two' },
//         ]}
//       />
//       <Columns>
//         <Column size="3">
//           <Box>
//             <Form onSubmit={setInput}>
//               <Field horizontal>
//                 <FieldLabel>Input</FieldLabel>
//                 <FieldBody>
//                   <Field>
//                     <Control>
//                       <Textarea
//                         style={{ fontFamily: 'monospace' }}
//                         name="input"
//                         placeholder="Text input"
//                         color="success"
//                         required
//                       />
//                     </Control>
//                   </Field>
//                 </FieldBody>
//               </Field>
//               <Field horizontal grouped>
//                 <FieldLabel />
//                 <FieldBody>
//                   <Field>
//                     <Control>
//                       <Checkbox>checkbox</Checkbox>
//                     </Control>
//                   </Field>
//                 </FieldBody>
//               </Field>
//               <Field horizontal grouped>
//                 <FieldLabel />
//                 <FieldBody>
//                   <Field>
//                     <Control>
//                       <Buttons>
//                         <Button type="submit" rounded color="success">
//                           Submit
//                         </Button>
//                         <Button type="reset" rounded outlined color="success">
//                           Reset
//                         </Button>
//                       </Buttons>
//                     </Control>
//                   </Field>
//                 </FieldBody>
//               </Field>
//             </Form>
//           </Box>
//         </Column>
//         <Column size="3">
//           <Box>{JSON.stringify(input)}</Box>
//         </Column>
//       </Columns>
//     </>
//   )
// }

// import { Box, Columns, Column, Field, Label, Control, Input, Form, Submit } from './index'
// import ReactDOM from 'react-dom'
// import reportWebVitals from './reportWebVitals'
//
// const App: React.FC = () => {
//   const [input, setInput] = useState<any>({})
//
//   return (
//     <Columns>
//       <Column size="3">
//         <Box>
//           <Form onSubmit={setInput}>
//             <Field>
//               <Label>Input</Label>
//               <Control>
//                 <Input name="input" type="text" placeholder="Text input" color="success" rounded />
//               </Control>
//             </Field>
//             <Field>
//               <Control>
//                 <Submit rounded color="success" />
//               </Control>
//             </Field>
//           </Form>
//         </Box>
//       </Column>
//       <Column size="3">
//         <Box>{JSON.stringify(input)}</Box>
//       </Column>
//     </Columns>
//   )
// }

// const data = [
//   {
//     key: '1',
//     name: 'Mike',
//     age: 32,
//     address: '10 Downing Street',
//   },
//   {
//     key: '2',
//     name: 'John',
//     age: 42,
//     address: '20 Downing Street',
//   },
// ]
//
// const columns = [
//   {
//     title: 'Name',
//     index: 'name',
//     key: 'name',
//   },
//   {
//     title: 'Age',
//     index: 'age',
//     key: 'age',
//   },
//   {
//     title: 'Address',
//     index: 'address',
//     key: 'address',
//   },
// ]
//
// const App: React.FC = () => {
//   return (
//     <Columns>
//       <Column size="3">
//         <Box>
//           <Table striped hoverable bordered columns={columns} data={data} />
//         </Box>
//       </Column>
//     </Columns>
//   )
// }
