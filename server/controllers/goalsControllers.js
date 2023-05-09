// @desc    Get goals
// @route   GET /api/goals
// @access  Private
function getGoals(req, res) {
  res.json({ message: "Get Goals" });
}

// @desc    Set goal
// @route   Post /api/goals
// @access  Private
function setGoals(req, res) {
  console.log(req.body.text);
  res.json({ message: "Set Goals" });
}

// @desc    Update goal
// @route   Post /api/goals/:id
// @access  Private
function updateGoals(req, res) {
  res.json({ message: "Update Goals" });
}

// @desc    Delete goal
// @route   Post /api/goals/:id
// @access  Private
function deleteGoals(req, res) {
  res.json({ message: "delete Goals" });
}

module.exports = { getGoals, setGoals, updateGoals, deleteGoals };
