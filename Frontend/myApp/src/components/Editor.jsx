import React, { useState } from 'react';
import axios from 'axios';
import SimpleCodeEditor from 'react-simple-code-editor';
import Prism from 'prismjs';
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";
import Markdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight';
import "highlight.js/styles/github-dark.css"
const Editor = () => {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [loading,setLoading] = useState(false)
  // Function for syntax highlighting using Prism
  const highlightCode = (code) => {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  };

  // Function to call your API with the code
  const handleRunCode = async () => {
    try {
      setLoading(true)
      const response = await axios.post('https://ai-1o1-codereviewer-1.onrender.com', { code });
      console.log(response.data);
      setOutput(response.data);
    } catch (error) {
      console.error('Error running code:', error);
      setOutput('Error executing code');
    }
    setLoading(false)
  };

  return (
    <div className="flex h-172 lg:mt-12 mt-30">
      {/* Editor Panel (Left Side) */}
      <div className="w-1/2 p-4 border-r border-gray-300 flex flex-col">
        <h2 className="text-xl font-semibold mb-2">Editor</h2>
        {/* Scrollable editor container */}
        <div className="flex-1 overflow-auto">
          <SimpleCodeEditor
            value={code}
            onValueChange={setCode}
            highlight={highlightCode}
            padding={10}
            style={{
              fontFamily: '"Fira Code", "Fira Mono", monospace',
              fontSize: 16,
              minHeight: '100%', // Ensures it fills the container
              backgroundColor: '#262726',
              color: '#fff',   
              borderRadius: '0.375rem',
            }}
            className="w-full"
          />
        </div>
        <button
          onClick={handleRunCode}
          className="mt-4 px-4 py-2 bg-emerald-500 hover:bg-gray-500 text-white rounded font-bold text-xl"
        >
          Run Code
        </button>
      </div>

      {/* Output Panel (Right Side) */}
      <div className="w-1/2 p-4 flex flex-col">
        <h2 className="text-xl font-semibold mb-2">Output</h2>
        {/* Scrollable output container */}

        <div className="flex-1 overflow-auto p-4 rounded border border-[#30363d] bg-[#262726] text-[#c9d1d9]">
            {loading
             ? 
             (
            <div className="loader-container">
            
                 <div className='loader '>...</div>
                 </div>) 
             :
          <pre>
            <Markdown
            rehypePlugins={[rehypeHighlight]}
            >

            {output}
            </Markdown>
            </pre>
        }
        </div>
      </div>
    </div>
  );
};

export default Editor;
