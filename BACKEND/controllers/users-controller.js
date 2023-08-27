const { v4: uuidv4 } = require("uuid");
const { validationResult } = require("express-validator");

const HttpError = require("../models/http-error");

const DUMMY_USERS = [
  {
    id: "u1",
    name: "Marcel Frankowski",
    email: "test@test.com",
    password: "test123",
  },
  {
    id: "u2",
    name: "Kamil Frankowski",
    email: "test2@test.com",
    password: "test1234",
  },
];

const getAllUsers = (req, res, next) => {
  res.status(200).json({ users: DUMMY_USERS });
};

const signup = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }

  const { name, email, password } = req.body;

  const hasUser = DUMMY_USERS.find((u) => u.email === email);
  if (hasUser) {
    return next(
      new HttpError("User with the given address email already exist.", 422)
    );
  }

  const createdUser = {
    id: uuidv4(),
    name,
    email,
    password,
  };

  DUMMY_USERS.push(createdUser);

  res.status(201).json({ user: createdUser });
};
const login = (req, res, next) => {
  const { email, password } = req.body;

  const identifiedUser = DUMMY_USERS.find((u) => u.email === email);
  if (identifiedUser && identifiedUser.password === password) {
    res.status(200).json({ message: "Successful login." });
  } else {
    return next(new HttpError("Wrong credentials.", 401));
  }
};

exports.getAllUsers = getAllUsers;
exports.signup = signup;
exports.login = login;
