const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  updateThought,
  createThought,
  createReaction,
  deleteReaction,
} = require('../../controllers/thoughtController.js');

// /api/thoughts
// How do I know the created thought's ID will be pushed to the associated user's thoughts array field?
router.route('/').get(getThoughts).post(createThought)

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// How do I know the created thought's ID will be pushed to the associated user's thoughts array field?

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(createReaction).delete(deleteReaction)

module.exports = router;
