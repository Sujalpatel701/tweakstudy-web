import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./PaperDetail.css";

const PaperDetail = () => {
    const { subjectId, paperYear } = useParams();
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [betterAnswer, setBetterAnswer] = useState("");
    const [paperInfo, setPaperInfo] = useState(null); // store paper file info

    // Fetch questions
    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/examquestion?paperId=${subjectId}`);
                const data = await response.json();
                setQuestions(data);
            } catch (error) {
                console.error("Error fetching questions:", error);
            }
        };

        fetchQuestions();
    }, [subjectId]);

    // Fetch answers
    useEffect(() => {
        const fetchAnswers = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/examanswer");
                const data = await response.json();
                setAnswers(data);
            } catch (error) {
                console.error("Error fetching answers:", error);
            }
        };

        fetchAnswers();
    }, []);

    // Fetch paper info for download
    useEffect(() => {
        const fetchPaperInfo = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/exampaper/${subjectId}`);
                const data = await response.json();
                setPaperInfo(data);
            } catch (error) {
                console.error("Error fetching paper info:", error);
            }
        };

        fetchPaperInfo();
    }, [subjectId]);

    const handleDownload = () => {
        if (!paperInfo || !paperInfo.file) {
            alert("Download file not available.");
            return;
        }

        const fileUrl = `http://localhost:5000/api/exampaper/download/${paperInfo.file}`;
        const link = document.createElement("a");
        link.href = fileUrl;
        link.setAttribute("download", paperInfo.file);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleNext = () => {
        setSelectedIndex((prev) => (prev < questions.length - 1 ? prev + 1 : prev));
    };

    const handlePrevious = () => {
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
    };

    const handleSubmit = () => {
        alert(`Your better answer: ${betterAnswer}`);
        setBetterAnswer("");
    };

    const findAnswerForQuestion = (questionId) => {
        const answer = answers.find((answer) => answer.que_id === questionId);
        return answer ? answer.ans : "Answer not available.";
    };

    return (
        <div className="paper-detail-container">
            <div className="paper-header">
                <h1>Subject: {decodeURIComponent(subjectId)} | Year: {paperYear}</h1>
                <button className="download-btn" onClick={handleDownload}>
                    📥 Download Paper
                </button>
            </div>

            <div className="content">
                <div className="question-list">
                    <h2>Questions</h2>
                    <ul>
                        {questions.map((q, index) => (
                            <li
                                key={q.id}
                                className={index === selectedIndex ? "active" : ""}
                                onClick={() => setSelectedIndex(index)}
                            >
                                <div dangerouslySetInnerHTML={{ __html: q.question }} />
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="solution-box">
                    <h2>Solution</h2>
                    <p>{questions[selectedIndex] ? questions[selectedIndex].solution : "Solution is not available."}</p>

                    <h3>Answer</h3>
                    <div dangerouslySetInnerHTML={{ __html: findAnswerForQuestion(questions[selectedIndex]?.id) }} />

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

export default PaperDetail;
