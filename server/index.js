const express = require("express");
const app = express()

app.get("/api", (req, rest) => {
  rest.json({ "users": ["userOne", "userTwo", "userThree", "userFour"]})  
})

app.listen(5000, () => {console.log("Server running");
})


