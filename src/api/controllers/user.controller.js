const users = [
  {
    "id": "user001",
    "username": "john.doe",
    "email": "john.doe@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "isActive": true,
    "roles": ["admin", "editor"],
    "lastLogin": "2025-10-12T10:30:00Z"
  },
  {
    "id": "user002",
    "username": "jane.smith",
    "email": "jane.smith@example.com",
    "firstName": "Jane",
    "lastName": "Smith",
    "isActive": false,
    "roles": ["viewer"],
    "lastLogin": "2025-10-11T14:15:00Z"
  },
  {
    "id": "user003",
    "username": "peter.jones",
    "email": "peter.jones@example.com",
    "firstName": "Peter",
    "lastName": "Jones",
    "isActive": true,
    "roles": ["editor"],
    "lastLogin": "2025-10-12T09:00:00Z"
  }
];
const { message } = require('../../utils/message');

const getUsers = (req, res, next) => {
    res.status(200).send(users);
}

const saveUser = (req, res, next) => {
  res.status(200).send(req.body);
}

const getUserById = (req, res, next) => {
  const user = users.find(x => x.id == req.params.id);
  if(user) {
      res.status(200).send(user);
  } else {
    res.status(404).json(message('NOTFOUND', 'User Not Found'));
  }
}

const updateUserById = (req, res, next) => {
  const user = users.find(x => x.id == req.params.id);
  if(user) {
      res.status(200).send(user);
  } else {
    res.status(404).json(message('NOTFOUND', 'User Not Found'));
  }
}

const deleteUserById = (req, res, next) => {
  const user = users.find(x => x.id == req.params.id);
  if(user) {
      res.status(200).send(user);
  } else {
    res.status(404).json(message('NOTFOUND', 'User Not Found'));
  }
}

module.exports = {
    getUsers,
    saveUser,
    getUserById,
    updateUserById,
    deleteUserById,
    users,
}