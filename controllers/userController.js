const {
  fetchUsers,
  insertUser,
  fetchUser,
  updateUser,
  removeUser,
  fetchEventsByUsername,
  signInUser,
  getUserProfile,
} = require("../models/userModel.js");

exports.getUsers = async (req, res, next) => {
  try {
    const users = await fetchUsers();
    res.status(200).send({ users });
  } catch (err) {
    next(err);
  }
};

exports.postUser = async (req, res, next) => {
  const { body } = req;
  try {
    const User = await insertUser(body, req.files);
    res.status(201).send(User);
  } catch (err) {
    next(err);
  }
};

exports.getUser = async (req, res, next) => {
  const { username } = req.params;
  try {
    const user = await fetchUser(username);
    res.status(200).send(user);
  } catch (err) {
    next(err);
  }
};

exports.patchUser = async (req, res, next) => {
  const { body } = req;
  try {
    const updatedUser = await updateUser(req.user, body, req.files);
    res.status(200).send({ updatedUser });
  } catch (err) {
    next(err);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const response = await removeUser(req.user);
    res.status(200).send({ response });
  } catch (err) {
    next(err);
  }
};

exports.getEventsByUsername = async (req, res, next) => {
  try {
    const { username } = req.params;
    const events = await fetchEventsByUsername(username);
    res.status(200).send({ events });
  } catch (error) {
    next(error);
  }
};

exports.loginUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const response = await signInUser(username, password);
    res.status(200).send({ response });
  } catch (error) {
    next(error);
  }
};

exports.userProfile = async (req, res, next) => {
  try {
    const user = await getUserProfile(req.user.id);
    res.status(200).send({ user });
  } catch (error) {
    next(error);
  }
};
