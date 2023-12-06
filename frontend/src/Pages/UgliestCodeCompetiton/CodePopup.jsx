import React, { useState, useRef, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodePopup = ({ title, code, onClose }) => {
  const [isHovered, setIsHovered] = useState(false);
  const preRef = useRef(null);

  useEffect(() => {
    if (preRef.current) {
      preRef.current.style.maxHeight = '360px';
      preRef.current.style.width = '100%'; // Set width to 100%
      preRef.current.style.maxWidth = '700px'; // Set max width to 700px
    }
  }, []);
  
  const popupStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: '#1a1a1a',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 30px rgba(0, 0, 0, 0.7)',
    zIndex: 9999,
    color: '#fff',
    fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
    width: '60%',
    height: '70%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const popupHeaderStyle = {
    fontSize: '1.5em',
    marginBottom: '15px',
    borderBottom: '1px solid #333',
    paddingBottom: '10px',
    position: 'sticky',
    top: 0,
    background: '#1a1a1a',
    zIndex: 1,
  };

  const popupButtonStyle = {
    backgroundColor: isHovered ? '#c0392b' : '#e74c3c',
    color: '#fff',
    padding: '12px 20px',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
    marginTop: '15px',
    transition: 'background 0.3s ease-in-out',
  };

  const syntaxHighlighterStyle = {
    ...dark,
    fontSize: '1em',
    borderRadius: '5px',
    margin: '20px 0',
    overflow: 'auto',
    width: '750px',
    maxWidth: '600px',
    height: '300px',
    fontFamily: 'monospace',
    border: '1px solid #bbb',
    boxShadow: '0 5px 50px rgba(30, 20, 10, 0.1)',
    maxHeight: '360px',
    overflowY: 'auto !important',
    overflowX: 'auto !important',

    lineHeight: '1.5', // Adjust line height if needed
  };
      
  return (
    <div style={popupStyle}>
      <div style={popupHeaderStyle}>
        <h2>{title}</h2>
      </div>
      <div style={{ maxHeight: '360px', height: '100%', width: '100%', maxWidth: '700px' }}>

        <SyntaxHighlighter
          language="java"
          style={syntaxHighlighterStyle}
          showLineNumbers={true}
          wrapLines={true}
          ref={preRef}
        >
          {code}
        </SyntaxHighlighter>
      </div>
      <button
        style={popupButtonStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClose}
      >
        Close
      </button>
    </div>
  );
};

export default CodePopup;
