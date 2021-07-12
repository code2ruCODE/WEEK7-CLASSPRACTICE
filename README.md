# WEEK7-CLASSPRACTICE
First task was to create a server
Next we created a folder called models
under the folder models we created a file called friendlist
friendlist was an arrray of objects{Name, age..}
the file friendlist was exported to index.js using "module.exports"
open index.js to to request the exported file(friendlist) using const Friendlist = require('models/friendlist')
remember to change 'test' to 'dev' in your package.json file
use app.get('/',(req,res) =>{ res.json(Friendlist)}) to convert file to json
go to postman copy localhost and send 
