import express from "express";
import {
  getUserByID,
  getUsers,
  createUser,
  updateUserByID,
  deleteUserByID,
} from "./models/users.js";
const PORT = 3000;
const app = express();

app.use(express.json());

//Read
app.get("/users", function (req, res) {
  const result = getUsers();
  res.json({
    success: true,
    payload: result
  })
});

//Read
app.get("/users/:id", function (req, res) {
  const id = Number(req.params.id);

  const result = getUserByID(id);

  if (result){
    res.json({
      success : true,
      payload: result
    });
  } else {
    res.json({
      success : false,
      payload: `No user with id ${id} found.`
    });
  }
});

//Create
app.post("/users", function (req, res) {
  const newUser = req.body;
  const result = createUser(newUser);

  res.json({
    success : true,
    payload: result
  });
});

//Update
app.put("/users/:id", function (req, res) {
  const id = Number(req.params.id);
  const updates = req.body;

  const result = updateUserByID(id, updates);

  res.json({
    success : true,
    payload: result
  });
});

app.delete("/users/:id", function(req, res){
  const id = Number(req.params.id);

  const result = deleteUserByID(id);

  res.json({
    success : true,
    payload: result
  });
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
