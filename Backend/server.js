// const path = require('path');
// const _dirname = path.resolve();
require('dotenv').config();
const app = require('./src/app');

// app.use(express.static(path.join(_dirname, '/frontend/myapp/dist')));
// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(_dirname,"frontend" , "myapp" , "dist" , "index.html"));
// })

app.listen(3000,()=>{
    console.log("serverr is listening at",3000);
})

// require('dotenv').config()
// const app = require('./src/app')



// app.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000')
// })