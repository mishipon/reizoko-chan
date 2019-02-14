import axios from 'axios'
import React from 'react'
import ReactDOM from 'react-dom'

async function bootstrap() {
  const response = await axios.get('http://localhost:3000/items')
  const items = response.data

  ReactDOM.render(
    <ul>
      {items.map((item) =>
        <li key={item.id}>{item.name}</li>
      )}
    </ul>,
    document.querySelector('#app')
  )
}

bootstrap()
