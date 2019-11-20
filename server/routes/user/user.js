const express = require('express');
const router = express.Router();
const {
  getUserById,
  getAllUsers,
  createNewUser,
  editUser
} = require('../../controllers/User');
const { isValidObjectId } = require('../../helpers/ObjectIdValidator');

/* GET User by their ids. */
router.get('/:id', async function(req, res) {
  //  Validate the id provided to know if it is a valid mongoose id type and not just a random string
  if (isValidObjectId(req.params.id)) {
    const user = await getUserById(req.params.id);
    res.status(200).json({ success: true, data: user });
  }
});

/** GET ALL UserS */
router.get('/', async function(req, res) {
  //  Validate the id provided to know if it is a valid mongoose id type and not just a random string
  try {
    const users = await getAllUsers(req.params.id);
    return res.status(200).json({ data: users });
  } catch (err) {
    return res.status(500).send(err.body);
  }
});

/** CREATE A User */
router.post('/', async function(req, res) {
  try {
    const User = await createNewUser(req.body);
    return res.status(201).json({ data: User });
  } catch (err) {
    return res.status(400).json(err);
  }
});

/**EDIT A USER */

router.put('/:id', async function(req, res) {
  try {
    const user = await editUser(req.params.id, req.body);
    return res.status(200).json({ data: user });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

module.exports = router;
