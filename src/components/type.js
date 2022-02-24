import React, { useState, useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedDemo = () => {
      const hello = useRef()
      useEffect(()=>{
          var options = {
            strings: [
                'These are the default values...',
                'You know what you should do?',
                'Use your own!',
                'Have a great day!'
              ],
              typeSpeed: 40,
              showCursor: false,
            };
            
            var typed = new Typed(hello.current, options);
        
            // return typed.destroy()

      },[])
    return (
       <div className="TypedDemo">
          
          this is type sss
          <div ref={hello} >

          </div>
          </div>
    );
}

export default TypedDemo;