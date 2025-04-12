const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
// const csrf = require("csurf");
const path = require("path");
const bodyParser = require('body-parser');  
const paperRoutes = require("./routes/paperRoutes");
const branchRoutes = require("./routes/branchRoutes");
const branchAdminRoutes = require("./routes/branchAdminRoutes");
const collegeRoutes = require("./routes/collegeRoutes");
const collegeAdminRoutes = require("./routes/collegeAdminRoutes");
const subjectRoutes = require("./routes/subjectRoutes");
const subjectAdminRoutes = require("./routes/subjectAdminRoutes");
const favoriteRoutes = require("./routes/favoriteRoutes");
const favoriteAdminRoutes = require("./routes/favoriteAdminRoutes");
const feedbackRoutes = require("./routes/feedbackRoutes");
const feedbackAdminRoutes = require("./routes/feedbackAdminRoutes");
const messageRoutes = require("./routes/messageRoutes");
const messageAdminRoutes = require("./routes/messageAdminRoutes");
const semesterRoutes = require("./routes/semesterRoutes");
const semesterAdminRoutes = require("./routes/semesterAdminRoutes");
const universityRoutes = require("./routes/universityRoutes");
const universityAdminRoutes = require("./routes/universityAdminRoutes");
const adminRoutes = require("./routes/adminRoutes");
const notificationRoutes = require("./routes/notificationRoutes");
const notificationAdminRoutes = require("./routes/notificationAdminRoutes");
const notificationallRoutes = require("./routes/notificationallRoutes");
const notificationallAdminRoutes = require("./routes/notificationallAdminRoutes");
const examPaperQuestionRoutes = require("./routes/examPaperQuestionRoutes");
const examPaperQuestionAdminRoutes = require("./routes/examPaperQuestionAdminRoutes");
const examPaperAnswerRoutes = require("./routes/examPaperAnswerRoutes");
const examPaperAnswerAdminRoutes = require("./routes/examPaperAnswerAdminRoutes");
const examPaperRoutes = require("./routes/examPaperRoutes");
const examPaperAdminRoutes = require("./routes/examPaperAdminRoutes");
const faqRoutes = require("./routes/faqRoutes");
const faqAdminRoutes = require("./routes/faqAdminRoutes");
const authRoutes = require("./routes/authRoutes");
const authAdminRoutes = require("./routes/authAdminRoutes");
const userCommentRoutes = require("./routes/userCommentRoutes");
const userCommentAdminRoutes = require("./routes/userCommentAdminRoutes");
const userAnswerRoutes = require("./routes/userAnswerRoutes");
const userAnswerAdminRoutes = require("./routes/userAnswerAdminRoutes");
const topicRoutes = require("./routes/topicRoutes");

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(cookieParser());
app.use(helmet());
// app.use(csrf({ cookie: true })); // CSRF protection

// Routes
app.use("/api/papers", paperRoutes);
app.use("/api/branch", branchRoutes);
app.use("/api/admin/branch", branchAdminRoutes);
app.use("/api/college", collegeRoutes);
app.use("/api/admin/college", collegeAdminRoutes);
app.use("/api/subject", subjectRoutes);
app.use("/api/admin/subject", subjectAdminRoutes);
app.use("/api/favorite", favoriteRoutes);
app.use("/api/admin/favorite", favoriteAdminRoutes);
app.use("/api/feedback", feedbackRoutes);
app.use("/api/admin/feedback", feedbackAdminRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/admin/message", messageAdminRoutes);
app.use("/api/semester", semesterRoutes);
app.use("/api/admin/semester", semesterAdminRoutes);
app.use("/api/university", universityRoutes);
app.use("/api/admin/university", universityAdminRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/notification", notificationRoutes);
app.use("/api/admin/notification", notificationAdminRoutes);
app.use("/api/notificationall", notificationallRoutes);
app.use("/api/admin/notificationall", notificationallAdminRoutes);
app.use("/api/examquestion", examPaperQuestionRoutes);
app.use("/api/admin/examquestion", examPaperQuestionAdminRoutes);
app.use("/api/examanswer", examPaperAnswerRoutes);
app.use("/api/admin/examanswer", examPaperAnswerAdminRoutes);
app.use("/api/exampaper", examPaperRoutes);
app.use("/api/admin/exampaper", examPaperAdminRoutes);
app.use("/api/faq", faqRoutes);
app.use("/api/admin/faq", faqAdminRoutes);
app.use("/auth", authRoutes);
app.use("/authAdmin", authAdminRoutes);
app.use("/api/usercomment", userCommentRoutes);
app.use("/api/admin/usercomment", userCommentAdminRoutes);
app.use("/api/useranswer", userAnswerRoutes);
app.use("/api/admin/useranswer", userAnswerAdminRoutes);
app.use("/api/topic", topicRoutes);
app.use("/api/admin/topic", topicRoutes);

module.exports = app;