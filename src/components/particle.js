import React, { useState, useEffect } from 'react';
import Particles from 'react-particles-js';
// import {} from "../image/"
const ParticleDemo = () => {
      
    return (
    //    <div className="ParticleDemo">
            <Particles
            params={{
                particles: {
                    shape: {
                        type: 'images',
                        image: [
                            {src: 'g3288.png', height: 20, width: 20},
                            {src: 'path/to/second/image.jpg', height: 20, width: 20},
                        ]
                    }
                }
            }} 
    style={{
        background:'#a5a5a5'
      }}
    />
    //    </div>
    );
}

export default ParticleDemo;