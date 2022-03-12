import React from 'react'
import { Typography } from 'antd';
import './MainImage.css'

const { Title } = Typography;

function MainImage(props) {
    return (
        <div
            style={{
                backgroundSize: '100%, cover',
                background:
                    `linear-gradient(to bottom, rgba(0,0,0,0)
                    39%,rgba(0,0,0,0)
                    41%,rgba(0,0,0,0.65)
                    100%),
                    url('${props.image}'), #1c1c1c`,
                height: '40em',

                backgroundPosition: 'center, center',
                width: '100vw',
                position: 'relative',
                marginTop: '1em'
            }}
        >
            <div>
                <div style={{ position: 'absolute', maxWidth: '500px', bottom: '2rem', marginLeft: '2rem' }} >
                    <Title style={{ color: 'white' }} level={2} > {props.title} </Title>
                    <p style={{ color: 'white', fontSize: '1rem' }}  >{props.text} </p>
                </div>
            </div>
        </div>
    )
}

export default MainImage