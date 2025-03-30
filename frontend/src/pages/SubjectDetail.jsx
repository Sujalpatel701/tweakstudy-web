import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './SubjectDetail.css';
import subjects from './subjects'; 

const SubjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const numericId = parseInt(id, 10);

    const subject = subjects.find((s) => s.id === numericId);

    if (!subject) {
        return (
            <div className="subject-detail-container">
                <h2>Subject not found</h2>
            </div>
        );
    }

    return (
        <div className="subject-detail-container">
            <h1 className="subject-title">{subject.name}</h1>
            <p className="subject-description">{subject.description}</p>

            <div className="panels-container">
                {/* Topics Panel */}
                <div className="panel">
                    <h2 className="panel-title">Topics</h2>
                    <ul className="topics-list">
                        {subject.topics.map((topic, index) => (
                            <li 
                                key={index} 
                                className="topic-item" 
                                onClick={() => navigate(`/subject/${subject.id}/topic/${encodeURIComponent(topic)}`)}
                            >
                                {topic}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Paper Sets Panel */}
                <div className="panel">
                    <h2 className="panel-title">Paper Sets</h2>
                    <ul className="paper-sets-list">
                        {subject.paperSets.map((paper, index) => (
                            <li 
                                key={index} 
                                className="paper-set-item"
                                onClick={() => navigate(`/subject/${subject.id}/paper/${paper.year}`)}
                            >
                                {paper.year} Paper Set
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SubjectDetail;
