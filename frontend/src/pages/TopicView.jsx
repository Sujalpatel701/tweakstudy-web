import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './TopicView.css';

const TopicView = () => {
  const { subjectId, topicId } = useParams();
  const [topic, setTopic] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [betterAnswer, setBetterAnswer] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const topicRes = await axios.get(`http://localhost:5000/api/topic/${topicId}`);
        setTopic(topicRes.data);

        const questionRes = await axios.get(`http://localhost:5000/api/examquestion`);
        const filteredQuestions = questionRes.data.filter(
          (q) => q.subject === parseInt(subjectId) && q.topic === topicId
        );
        setQuestions(filteredQuestions);

        const answerRes = await axios.get(`http://localhost:5000/api/examanswer`);
        setAnswers(answerRes.data);
      } catch (err) {
        console.error('Error fetching topic/questions/answers:', err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [subjectId, topicId]);

  const getAnswerForQuestion = (queId) => {
    const ans = answers.find((a) => a.que_id === queId);
    return ans ? ans.ans : '<i>No answer available</i>';
  };

  const handlePrevious = () => {
    if (selectedIndex > 0) setSelectedIndex(selectedIndex - 1);
  };

  const handleNext = () => {
    if (selectedIndex < questions.length - 1) setSelectedIndex(selectedIndex + 1);
  };

  const handleSubmit = () => {
    console.log("Better Answer Submitted:", betterAnswer);
    setBetterAnswer("");
  };

  if (loading) return <div>Loading...</div>;
  if (!topic) return <div>Topic not found.</div>;

  return (
    <div className="topic-view-container">
      <h1>Topic: {decodeURIComponent(topic.topic_name)}</h1>

      <div className="content">
        {/* Question List Box */}
        <div className="question-list">
          <h2>Questions</h2>
          <ul>
            {questions.map((q, index) => (
              <li
                key={q.id}
                className={index === selectedIndex ? "active" : ""}
                onClick={() => setSelectedIndex(index)}
                dangerouslySetInnerHTML={{ __html: q.question }}
              />
            ))}
          </ul>
        </div>

        {/* Solution Box */}
        <div className="solution-box">
          <h2>Solution</h2>
          <div
            dangerouslySetInnerHTML={{ __html: getAnswerForQuestion(questions[selectedIndex].id) }}
          />

          <div className="navigation-buttons">
            <button onClick={handlePrevious} disabled={selectedIndex === 0}>
              ⬅️ Previous
            </button>
            <button onClick={handleNext} disabled={selectedIndex === questions.length - 1}>
              Next ➡️
            </button>
          </div>

          <div className="better-answer">
            <h3>Have a better answer?</h3>
            <input
              type="text"
              placeholder="Write your answer here..."
              value={betterAnswer}
              onChange={(e) => setBetterAnswer(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicView;
