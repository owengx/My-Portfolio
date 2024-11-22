import React from 'react';

const h1 = {
color: 'white',
textAlign: 'left',
position: 'relative',
left : '60px',
fontSize: '20px'
}

export default function Header() {
  return (
    <div style={h1}>
     <h1>OWEN GAYLE</h1>
     <h2>Welcome to my Portfolio</h2>
    </div>
  );
}