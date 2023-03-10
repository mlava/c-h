import express from 'express';
import cors from 'cors';
import request from 'request';
const app = express();
var port = process.env.PORT || 3000;
app.use(cors());

var corsOptions = {
  origin: 'https://roamresearch.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.get('/', cors(corsOptions), (req, res) => {

  var today = req.query.today;

  var CHUrl = "https://www.gocomics.com/calvinandhobbes/" + today + "";
  var url = "https://jsonlink.io/api/extract?url=" + CHUrl;

  request(url, (error, response, html) => {
    if (!error) {
      console.log(html);
      res.json(html);
    }
  })

})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})