import React from 'react';

const Demo = ({data}) => {
    return (
        <div>
            {JSON.stringify(data.categories)}
        </div>
    );
};

export default Demo;