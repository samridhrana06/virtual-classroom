// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const classRoutes = require('./routes/class');
const contentRoutes = require('./routes/content');
const discussionRoutes = require('./routes/discussion');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/virtualClassroom', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/class', classRoutes);
app.use('/api/content', contentRoutes);
app.use('/api/discussion', discussionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// routes/class.js
const express = require('express');
const router = express.Router();
const Class = require('../models/Class');
const auth = require('../middleware/auth');

router.post('/', auth, async (req, res) => {
  try {
    const newClass = new Class({
      name: req.body.name,
      instructor: req.user.id,
    });
    const savedClass = await newClass.save();
    res.json(savedClass);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/', auth, async (req, res) => {
  try {
    const classes = await Class.find({ instructor: req.user.id });
    res.json(classes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

// models/Class.js
const mongoose = require('mongoose');

const ClassSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  students: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
  units: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Unit',
  }],
});

module.exports = mongoose.model('Class', ClassSchema);