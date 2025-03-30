import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./PaperDetail.css";
import samplePaper from "../assets/sample-paper.pdf";

const questions = [
    { id: 1, question: "What is a programming language?", solution: "A programming language is a set of instructions used to communicate with a computer. Examples: Python, Java, C++." },
    { id: 2, question: "Explain different types of loops in programming.", solution: "Loops in programming include for loop, while loop, and do-while loop. They help execute repetitive tasks." },
    { id: 3, question: "What is an algorithm?", solution: "An algorithm is a step-by-step procedure to solve a problem. Example: Sorting algorithms like Bubble Sort and Merge Sort." },
    { id: 4, question: "Define variables and data types.", solution: "Variables store data, and data types define the kind of data a variable can hold (e.g., int, float, string)." },
    { id: 5, question: "Write a program to reverse a string.", solution: "Python example:\n\ns = 'hello'\nprint(s[::-1])" },
];

const PaperDetail = () => {
    const { subjectId, paperYear } = useParams();
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [betterAnswer, setBetterAnswer] = useState("");

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = samplePaper;
        link.setAttribute("download", "Sample-Paper.pdf");
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

export default PaperDetail;
