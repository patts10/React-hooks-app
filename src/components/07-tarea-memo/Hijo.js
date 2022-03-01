import React from 'react'

export const Hijo = React.memo(({ numero, incrementar }) => {

    console.log('  Me volví a generar :(  ');

    return (
        <button
            className="bg-blue-500 shadow-lg shadow-blue-500/50 rounded py-1 px-2 mt-3 text-white mr-3"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
})
