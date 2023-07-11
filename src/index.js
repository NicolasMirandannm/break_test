const express = require('express')
const app = express()
const port = 3000

const teste = async (param) => {
  return await param.nullPointer;
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/erro', async (req, res) => {
  const teste1 = await teste(null);
  res.send(teste1)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})