import React from 'react'
import './bulma.min.css'
import { Box, Columns, Column, Field, Label, Control, Input } from './index'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'

const App: React.FC = () => {
  return (
    <section className="hero is-primary is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-5-tablet is-4-desktop is-3-widescreen">
            <div className="column">
              <form className="box" onSubmit={(x) => console.log(x)}>
                <div className="field has-text-centered">
                  <img src="images/logo.png" width="167" />
                </div>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control has-icons-left">
                    <input type="text" className="input" placeholder="e.g. hkakehas@cisco.com" />
                    <span className="icon is-small is-left">
                      <i className="fa fa-envelope"></i>
                    </span>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Password</label>
                  <div className="control has-icons-left">
                    <input type="password" className="input" placeholder="*********" required />
                    <span className="icon is-small is-left">
                      <i className="fa fa-lock"></i>
                    </span>
                  </div>
                </div>
                <div className="field">
                  <label className="checkbox">
                    <input type="checkbox" />
                    Remember me
                  </label>
                </div>
                <div className="field">
                  <input type="submit" title="Login" className="button is-success" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
  /*  return (

    <Columns>
      <Column size="3">
        <Box>
          <Field>
            <Label>Input</Label>
            <Control>
              <Input onInputCapture={(x) => console.log(x)} type="text" placeholder="Text input" />
            </Control>
          </Field>
        </Box>
      </Column>
      <Column size="3">asdf</Column>
    </Columns>
  )*/
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
export { Table } from './Table'
export { Tag, Tags } from './Tag'
export { Title, Subtitle } from './Title'
export { Field, FieldLabel, Control, Label, Input } from './Form'

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
