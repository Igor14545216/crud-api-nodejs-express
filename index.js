const customExpress = require('./config/customExpress')

const app = customExpress()

app.listen(3000, () => console.log('rodando em localhost:3000'))