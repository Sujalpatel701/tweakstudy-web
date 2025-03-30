import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./TopicView.css";

const questions = [
    { id: 1, question: "What is a variable?", solution: "A variable is a storage location in memory with an associated name and type." },
    { id: 2, question: "Explain data types in programming.", solution: "Data types define the type of value a variable can hold, such as int, float, string, etc." },
    { id: 3, question: "What is a function?", solution: "A function is a reusable block of code that performs a specific task when called." },
    { id: 4, question: "What are control structures?", solution: "Control structures determine the flow of execution in a program, e.g., loops and conditionals." },
];

const TopicView = () => {
    const { subjectId, topicName } = useParams();
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [betterAnswer, setBetterAnswer] = useState("");

    const handleNext = () => {
        setSelectedIndex((prev) => (prev < questions.length - 1 ? prev + 1 : prev));
    };

    const handlePrevious = () => {
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
    };

    const handleSubmit = () => {
        alert(`Your better answer: ${betterAnswer}`);
        setBetterAnswer(""); // Clear input after submission
    };

    return (
        <div className="topic-view-container">
            <h1>Topic: {decodeURIComponent(topicName)}</h1>

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
                                {q.question}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="solution-box">
                    <h2>Solution</h2>
                    <p>{questions[selectedIndex].solution}</p>

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
