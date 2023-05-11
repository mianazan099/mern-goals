const asyncHandler = require("express-async-handler");

const Goal = require("../models/goalModel");

// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id });
  res.status(200).json(goals);
});

// @desc    Set goal
// @route   POST /api/goals
// @access  Private
const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text");
  }
  const goal = await Goal.create({ user: req.user.id, text: req.body.text });
  res.status(200).json(goal);
});

// @desc    Update goal
// @route   PUT /api/goals/:id
// @access  Private
const updateGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.find({ user: req.user.id, _id: req.params.id });
  if (goal.length === 0) {
    res.status(400);
    throw new Error("the goal was not found");
  }
  const updatedGoal = await Goal.findOneAndUpdate(
    { user: req.user.id, _id: req.params.id },
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedGoal);
});

// @desc    Delete goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.find({ user: req.user.id, _id: req.params.id });
  if (goal.length === 0) {
    res.status(400);
    throw new Error("the goal was not found");
  }
  await Goal.findOneAndRemove({ user: req.user.id, _id: req.params.id });
  res.status(200).json({ id: req.params.id });
});

module.exports = { getGoals, setGoals, updateGoals, deleteGoals };
