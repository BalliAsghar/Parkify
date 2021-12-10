const userRouter = require("express").Router();
const {
  getUsers,
  postUser,
  getUser,
  patchUser,
  deleteUser,
  getEventsByUsername,
} = require("../controllers/userController");

/**
 * @Method GET
 * @Route /api/users
 * @Function getUsers()
 * @Description Get all users
 */
userRouter.get("/", getUsers);

/**
 * @Method POST
 * @Route /api/users
 * @Function postUser()
 * @Description Create a new user
 */
userRouter.post("/", postUser);

/**
 * @Route /api/users/:user_id
 * @Method GET
 * @Function getUser()
 * @Description Get a user by id
 * @Param id
 */
userRouter.get("/:user_id", getUser);

/**
 * @Method PATCH
 * @Route /api/users/:id
 * @Function patchUser()
 * @Description Update a user by id
 * @Param id
 */
userRouter.patch("/:id", patchUser);

/**
 * @Method DELETE
 * @Route /api/users/:id
 * @Function deleteUser()
 * @Description Delete a user by id
 * @Param id
 */
userRouter.delete("/:id", deleteUser);

/**
 * @Method GET
 * @Route /api/users/:username/events
 * @Function getEventsByUsername()
 * @Description get events by username
 * @Param username
 */
userRouter.get("/:username/events", getEventsByUsername);

module.exports = userRouter;
