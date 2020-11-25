import { useState } from 'react';

export const CustomState = initValues => {
    const [values, setValues] = useState(initValues);

    return [
        values,
        e => {
            setValues({
                ...values,
                [e.target.name]: e.target.value
            });
        }
    ];
};
