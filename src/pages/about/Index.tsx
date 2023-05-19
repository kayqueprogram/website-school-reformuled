import React, { useState, useEffect } from 'react';
import aboutApi from 'services/about';
import { useParams } from 'react-router-dom';

const About = () => {

    const [about, setAbout] = useState<any>({});
    const { id } = useParams();

    useEffect(() => {
        const getAbout = async () => {
            if (id) {
                const data = await aboutApi.getAboutSchool(id);
                setAbout(data);
            }
        };

        getAbout();
    }, [id]);

    return (
        <>
            {
                about?.title && (
                    <div>{about.title}</div>
                )
            }
        </>
    )
}

export default About