import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Multiplicacion() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [correctAnswer, setCorrectAnswer] = useState(0);
    const [attempts, setAttempts] = useState(0);
    const [correctCount, setCorrectCount] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [startTime, setStartTime] = useState(0); // Tiempo de inicio
    const [endTime, setEndTime] = useState(0); // Tiempo de finalización

    // Función para generar números aleatorios y respuestas
    const generateNumbers = () => {
        const randomNum1 = Math.floor(Math.random() * 11);
        const randomNum2 = Math.floor(Math.random() * 11);

        setNum1(randomNum1);
        setNum2(randomNum2);

        const correct = randomNum1 * randomNum2;
        setCorrectAnswer(correct);

        let wrongAnswer1 = Math.floor(Math.random() * 101);
        let wrongAnswer2 = Math.floor(Math.random() * 101);

        while (wrongAnswer1 === correct) {
            wrongAnswer1 = Math.floor(Math.random() * 101);
        }
        while (wrongAnswer2 === correct || wrongAnswer2 === wrongAnswer1) {
            wrongAnswer2 = Math.floor(Math.random() * 101);
        }

        const shuffledAnswers = [correct, wrongAnswer1, wrongAnswer2].sort(() => Math.random() - 0.5);
        setAnswers(shuffledAnswers);
    };

    // Ejecutar la función al cargar el componente
    useEffect(() => {
        generateNumbers();
        setStartTime(Date.now()); // Registrar el tiempo de inicio cuando el juego comienza
    }, []);

    // Función para manejar la selección de respuesta
    const handleAnswerClick = (selectedAnswer) => {
        if (gameOver) return; // No permitir más clics si el juego ha terminado

        setAttempts(attempts + 1); // Incrementar el contador de intentos

        if (selectedAnswer === correctAnswer) {
            setCorrectCount(correctCount + 1); // Incrementar respuestas correctas
        }

        if (attempts + 1 === 10) {
            setEndTime(Date.now()); // Registrar el tiempo de finalización
            setGameOver(true); // Terminar el juego después de 10 intentos
        } else {
            generateNumbers(); // Recargar números y respuestas si aún no se han hecho 10 intentos
        }
    };

    // Calcular la duración del juego
    const getTimeElapsed = () => {
        const duration = (endTime - startTime) / 1000; // Tiempo en segundos
        return duration.toFixed(2); // Limitar a 2 decimales
    };

    // Función para reiniciar el juego
    const restartGame = () => {
        setNum1(0);
        setNum2(0);
        setAnswers([]);
        setCorrectAnswer(0);
        setAttempts(0);
        setCorrectCount(0);
        setGameOver(false);
        generateNumbers();
        setStartTime(Date.now()); // Reiniciar el tiempo de inicio
    };

    return (
        <div className='bg-orange-600 w-full h-screen flex justify-center items-center'>
            <div className='w-2/3'>
                <h1 className='w-full text-white font-medium text-3xl text-center'>
                    Multiplicación
                </h1>

                {gameOver ? (
                    // Mostrar el resultado final si el juego ha terminado
                    <div className='mt-6 flex flex-col items-center'>
                        <p className='text-white text-2xl font-semibold'>
                            Juego terminado. Aciertos: {correctCount} de 10.
                        </p>
                        <p className='text-white text-2xl font-semibold'>
                            Tiempo: {getTimeElapsed()} segundos.
                        </p>
                        <div className='flex flex-col'>
                            <button
                                className='mt-4 bg-blue-500 text-white px-4 py-2 rounded'
                                onClick={restartGame}
                            >
                                Reiniciar
                            </button>
                            <Link to={'/'}>
                                <button
                                    className='mt-4 bg-blue-500 text-white px-4 py-2 rounded'>
                                    Home
                                </button>
                            </Link>
                        </div>

                    </div>
                ) : (
                    <>
                        <div className='mt-6 flex flex-col items-center'>
                            <div className='bg-white w-1/2 h-10 rounded-xl flex justify-center items-center'>
                                <p className='text-2xl font-semibold'>
                                    {num1}
                                </p>
                            </div>
                            <p className='font-semibold text-xl mt-4 mb-4'>
                                X
                            </p>
                            <div className='bg-white w-1/2 h-10 rounded-xl flex justify-center items-center'>
                                <p className='text-2xl font-semibold'>
                                    {num2}
                                </p>
                            </div>
                        </div>

                        <div className='mt-10 flex space-x-2'>
                            {answers.map((answer, index) => (
                                <div
                                    key={index}
                                    className='bg-blue-700 w-1/3 h-10 flex justify-center items-center rounded-md shadow-black shadow-md font-semibold'
                                    onClick={() => handleAnswerClick(answer)} // Detecta el clic en la respuesta
                                >
                                    {answer}
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
