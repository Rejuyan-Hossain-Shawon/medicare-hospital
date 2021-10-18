
import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';

import SingleArticle from './SingleArticle/SingleArticle';

const LatestNews = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        fetch("./healthNews.json")
            .then(res => res.json())
            .then(data => {
                setNews((data.articles).slice(0, 8));
                setIsLoading(false);
            })

    }, [])

    const [isLoaing, setIsLoading] = useState(true);
    if (isLoaing) {
        return <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    }
    return (
        <div className="mt-5">
            <h2 className="text-primary">Latest News In Health Related Issue</h2>
            <Row xs={2} md={4} className="g-4">


                {
                    news.map(article => <SingleArticle key={article.title} article={article}></SingleArticle>)
                }


            </Row>
        </div>
    );
};

export default LatestNews;