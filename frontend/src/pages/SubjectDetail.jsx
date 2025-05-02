import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SubjectDetail.css';

const SubjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [subject, setSubject] = useState(null);
    const [topics, setTopics] = useState([]);
    const [paperSets, setPaperSets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [subjectRes, topicRes, paperRes] = await Promise.all([
                    axios.get(`http://localhost:5000/api/subject/${id}`),
                    axios.get(`http://localhost:5000/api/topic`),
                    axios.get(`http://localhost:5000/api/exampaper`)
                ]);

                setSubject(subjectRes.data);

                const filteredTopics = topicRes.data.filter(t => t.sub_id === parseInt(id));
                setTopics(filteredTopics);

                const filteredPapers = paperRes.data.filter(p => p.sub_id === parseInt(id) && p.name?.length > 5);
                setPaperSets(filteredPapers);

                setLoading(false);
            } catch (err) {
                console.error(err);
                setError('Failed to load subject, topics, or paper sets');
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (loading) return <div className="subject-detail-container"><p>Loading...</p></div>;

    if (error || !subject) {
        return (
            <div className="subject-detail-container">
                <h2>{error || 'Subject not found'}</h2>
            </div>
        );
    }

    return (
        <div className="subject-detail-container">
            <h1 className="subject-title">{subject.name}</h1>
            <p className="subject-description">Subject Code: {subject.sub_code}</p>

            <div className="panels-container">
                {/* Topics Panel */}
                <div className="panel">
                    <h2 className="panel-title">Topics</h2>
                    <ul className="topics-list">
                        {topics.map((topic) => (
                            <li 
                                key={topic.id} 
                                className="topic-item" 
                                onClick={() => navigate(`/subject/${subject.id}/topic/${topic.id}`)} 
                            >
                                {topic.topic_name}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Paper Sets Panel */}
                <div className="panel">
                    <h2 className="panel-title">Paper Sets</h2>
                    <ul className="paper-sets-list">
                        {paperSets.map((paper) => (
                            <li 
                                key={paper.id} 
                                className="paper-set-item"
                                onClick={() => navigate(`/subject/${subject.id}/paper/${paper.year}?exam_id=${paper.id}`)}
                            >
                                {paper.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SubjectDetail;
