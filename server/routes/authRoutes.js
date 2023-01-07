const mongoose = require("mongoose");
const Profile = mongoose.model("profiles");

const authRoutes = (app) => {
  app.post(`/login/`, async (req, res) => {
    const { username, password } = req.body;

    // Check if username and password is provided
    if (!username || !password) {
      return res.status(400).json({
        message: "Username or Password not present",
      });
    }

    try {
      const user = await Profile.findOne({ username, password });

      if (!user) {
        res.status(401).json({
          message: "Login not successful",
          error: "User not found",
        });
      } else {
        res.status(200).json({
          message: "Login successful",
          user,
        });
      }
    } catch (error) {
      res.status(400).json({
        message: "An error occurred",
        error: error.message,
      });
    }

    // return res.status(200).send(profiles);
    // return res;
  });
};

module.exports = authRoutes;
