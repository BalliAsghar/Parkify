const {
  fetchUsers,
  insertUser,
  fetchUser,
  updateUser,
  removeUser,
} = require("../models/userModel.js");

exports.getUsers = async (req, res, next) => {
  try {
    const users = await fetchUsers();
    res.status(200).send({ users });
  } catch (err) {
    next(err);
  }
};

exports.postUser = async (req, res) => {
  const { body } = req;
  try {
    const reponse = await insertUser(body);
  } catch {
    console.log("failed");
  }
};

exports.getUser = async (req, res, next) => {
  const { user_id } = req.params;
  try {
    console.log(user_id);
    const user = await fetchUser(user_id);
    res.status(200).send({ user });
  } catch (err) {
    next(err);
  }
};

exports.patchUser = async (req, res) => {
  const { user_id } = req.params;
  const { body } = req;
  try {
    const response = await updateUser(user_id, body);
    console.log(response);
  } catch {
    console.log("error in controller");
  }
};

exports.deleteUser = async (req, res) => {
  const { user_id } = req.params;
  try {
    const response = await removeUser(user_id);
    console.log(response);
  } catch {
    console.log("error in controller");
  }
};
