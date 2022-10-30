const express = require("express");
const app = express();

const port = process.env.PORT || 1000;

app.listen(port, () => {
  console.log(`Server is live on ${port}`);
});

app.get("/", (req, res) => {
  res.json({
    slackUsername: "Henshaw",
    backend: true,
    age: 25,
    bio: "Hello World, my name is Eghosasere Osaghae, I am a junior backend developer, currently registered to the HNG internship. My hobbies include playing and watching football, playing video games, reading books and watching movies.",
  });
});
