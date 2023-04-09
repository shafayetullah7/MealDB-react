import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div>
            <p>Page not found</p>
        </div>
    );
};

export default ErrorPage;