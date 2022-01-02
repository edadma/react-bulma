import React, { useState } from 'react'
import { Button, Buttons } from './Button'
import { Box } from './Box'
import { Text } from './Text'

const App: React.FC = () => {
  const [counter, setCounter] = useState(0)

  return (
    <Box>
      <Text size={3} weight="bold" family="code">
        Counter: {counter}
      </Text>
      <Buttons>
        <Button primary onClick={() => setCounter(counter - 1)}>
          <Text size={3}>-</Text>
        </Button>
        <Button onClick={() => setCounter(counter + 1)}>
          <Text size={3}>+</Text>
        </Button>
      </Buttons>
    </Box>
  )
}
