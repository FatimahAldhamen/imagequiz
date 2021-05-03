import '../App.css';
import React, { useState } from 'react';
import { Container, Figure, Row, Col, Card, Button } from "react-bootstrap";

let quizzes = [];
let flowers = [];
let score = 0;
let result = '';
let resultColor = '';

const flowersURL = `https://fatimahaldhamen-imagequiz.herokuapp.com/flowers`;
fetch(flowersURL, { method: 'GET' })
.then((res) => res.json())
.then((data) => {
    flowers = data;
});

const quizzesURL = `https://fatimahaldhamen-imagequiz.herokuapp.com/quizzes`;
fetch(quizzesURL, { method: 'GET' })
.then((res) => res.json())
.then((data) => {
    quizzes = data;
});

function Homepage(email) {
const postResults = () =>{
    fetch('https://fatimahaldhamen-imagequiz.herokuapp.com/score', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ customerid:1,quizid:currentQuiz , score:score})
    })
    .then(response => response.json())
    .then(data => console.log(data));
}


const [currentQuiz, setCurrentQuiz] = useState(-1);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const imageClickHandler = (e) => {
        setCurrentQuiz(e);
    }
    const answerHandler = (e) => {
        if (quizzes[currentQuiz].quiz[currentQuestion].answer === e) {
            score += 1;
            result = "Correct";
            resultColor = 'lime';
        } else {
            result = "InCorrect";
            resultColor = 'red';
        }
        setTimeout(() => {

            setCurrentQuestion(currentQuestion + 1);
            result = '';
        }, 500);
    }
    const navQuizBtnHandler = (e) => {
        if (e === "home") {
            setCurrentQuiz(-1);
            setCurrentQuestion(0);
            score = 0;
        } else {
            setCurrentQuestion(0);
            score = 0;
        }
    }
    return (
        (currentQuiz === -1) ? (
            <Container >
                {flowers.map((flower, i) => (
                    <Figure onClick={() => imageClickHandler(i)} key={i}>
                        <Figure.Image src={flower.picture} alt="" />
                        <Figure.Caption >{flower.name}
                        </Figure.Caption>
                    </Figure>
                ))}
            </Container >
        ) : (
            (currentQuestion < 6) ? (<Container>
                <Card className="rounded quiz-container">
                    <Card.Body>
                        <h4 id="Qheading">Select suitable name from the following options by looking at the flower image:</h4>
                        <Row>
                            <Col>
                                <Figure>
                                    <Figure.Image className="rounded" src={quizzes[currentQuiz].quiz[currentQuestion].picture} alt="" />
                                </Figure>
                            </Col>
                            <Col>
                                {quizzes[currentQuiz].quiz[currentQuestion].choices.map((choice, i) => (
                                    <label htmlFor={i + "option"} className="optionLabel" key={i}><input key={i} id={i + "option"} value={choice} checked={false} onChange={() => answerHandler(choice)} name="options" className="mr-2" type="radio" />{choice}</label>
                                ))}
                                <div id="result" style={{ color: resultColor }}>{result}</div>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>) : (<Container className="quiz-score-container">
                <Card className="rounded quiz-container">
                    <Card.Body className="quiz-score-container">
                        <h2 className="Score">
                            {postResults()}
                            Your Score is {score}
                        </h2>
                        <Row className="nav-quiz-btn-wrapper">
                            <Button className="nav-quiz-btn btn" onClick={() => navQuizBtnHandler("home")}>Go to Homepage</Button>
                            <Button className="nav-quiz-btn btn" onClick={() => navQuizBtnHandler("")}>Retry</Button>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>)
        )



    );
}

export default Homepage;