// User Schema
const UserSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['student', 'instructor', 'admin'],
      default: 'student',
    },
  });
  
  // Class Schema
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
  
  // Unit Schema
  const UnitSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    class: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Class',
      required: true,
    },
    sessions: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Session',
    }],
  });
  
  // Session Schema
  const SessionSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    unit: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Unit',
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    discussions: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Discussion',
    }],
  });
  
  // Discussion Schema
  const DiscussionSchema = new mongoose.Schema({
    content: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    session: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Session',
      required: true,
    },
    parentDiscussion: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Discussion',
    },
    childDiscussions: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Discussion',
    }],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });