const app = require("express")();

app.get("/", (req, res) => {
  res.status(200).send("Ya Ali Madad!!!");
});
app.listen(3000, "", () => {
  console.log("Listening on 3000");
});
