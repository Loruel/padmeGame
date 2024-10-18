import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
    return (
        <div className='bg-blue-700 w-full h-screen flex justify-center items-center'>

            <div className='w-2/3'>
                <h1 className='text-white font-bold text-6xl w-full text-center'>
                    ¡Hola!
                </h1>
                <h2 className='text-white font-semibold text-xl text-center mt-4'>
                    ¿Estas muy seguro de que eres el mejor?
                </h2>

                <h3 className='text-white font-medium text-center mt-6'>
                    Gracias por estar aquí ¿Qué deseas jugar hoy?
                </h3>

                <div className='flex space-x-4 w-full h-16 justify-center mt-6 '>
                    <div className='bg-red-600 w-1/2 flex justify-center items-center rounded-md shadow-black shadow-md'>
                        <p className='text-white'>
                            Suma
                        </p>
                    </div>

                    <div className='bg-green-600 w-1/2 flex justify-center items-center rounded-md shadow-black shadow-md'>
                        <p className='text-white'>
                            Ruma
                        </p>
                    </div>
                </div>

                <div className='flex space-x-4 w-full h-16 justify-center mt-6 '>
                    <div className='bg-yellow-500 w-1/2 flex justify-center items-center rounded-md shadow-black shadow-md'>
                        <p className='text-white'>
                            Division
                        </p>
                    </div>

                    <Link
                        className='w-1/2'
                        to={'/multiply'}>
                        <div className='bg-orange-600 h-full flex justify-center items-center rounded-md shadow-black shadow-md'>
                            <p className='text-white'>
                                Multiplicacion
                            </p>
                        </div>
                    </Link>
                </div>

                <div className='mt-6 flex justify-center items-center flex-col'>
                    <p className='text-xs text-white text-center'>
                        Si quieres diversion adicional y recompensas
                    </p>
                    <p className='mt-2 text-xs text-white underline'>
                        Inisia sesion
                    </p>
                </div>

            </div>

        </div>
    )
}
