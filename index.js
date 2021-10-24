const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World1!");
});
const users = [
  { id: 0, name: "sabana", email: "sabana@gmail.com" },
  { id: 1, name: "Bobita", email: "babita@gmail.com" },
  { id: 2, name: "Tompa", email: "tompa@gmail.com" },
];
app.get("/users", (req, res) => {
  const search = req.query.search;
  // use query parameter
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search)
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});
// app.METHOD
app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  console.log("hitting the post", req.body);
  // res.send(JSON.stringify(newUser))
  res.json(newUser);
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});
app.listen(port, () => {
  console.log("lisenting to port", port);
});
