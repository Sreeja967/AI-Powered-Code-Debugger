import React, { useState } from 'react'
import "./App.css"
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Editor from '@monaco-editor/react';
import Select from 'react-select';
import { GoogleGenAI } from "@google/genai";
import Markdown from 'react-markdown'
import RingLoader from "react-spinners/RingLoader";

const App = () => {
  const options = [
    { value: 'javascript', label: 'JavaScript' },
    { value: 'python', label: 'Python' },
    { value: 'java', label: 'Java' },
    { value: 'csharp', label: 'C#' },
    { value: 'cpp', label: 'C++' },
    { value: 'php', label: 'PHP' },
    { value: 'ruby', label: 'Ruby' },
    { value: 'go', label: 'Go' },
    { value: 'swift', label: 'Swift' },
    { value: 'kotlin', label: 'Kotlin' },
    { value: 'typescript', label: 'TypeScript' },
    { value: 'rust', label: 'Rust' },
    { value: 'dart', label: 'Dart' },
    { value: 'scala', label: 'Scala' },
    { value: 'perl', label: 'Perl' },
    { value: 'haskell', label: 'Haskell' },
    { value: 'elixir', label: 'Elixir' },
    { value: 'r', label: 'R' },
    { value: 'matlab', label: 'MATLAB' },
    { value: 'bash', label: 'Bash' }
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: '#18181b', // dark background (similar to bg-zinc-900)
      borderColor: '#3f3f46',
      color: '#fff',
      width: "100%"
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: '#18181b', // dropdown bg
      color: '#fff',
      width: "100%"
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#fff',  // selected option text
      width: "100%"
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#27272a' : '#18181b',  // hover effect
      color: '#fff',
      cursor: 'pointer',
      // width: "30%"
    }),
    input: (provided) => ({
      ...provided,
      color: '#fff',
      width: "100%"
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#a1a1aa',  // placeholder text color
      width: "100%"
    }),
  };

  const [code, setCode] = useState("");

  const ai = new GoogleGenAI({ 
    apiKey: import.meta.env.VITE_GEMINI_KEY 
  });
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  async function reviewCode() {
    setResponse("")
    setLoading(true);
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are an expert-level software developer trainer, skilled in writing efficient, clean, and advanced code.
I’m sharing a piece of code written in ${selectedOption.value}.
Your job is to deeply review this code and provide the following so that even begginer can understand it:

1️⃣ A quality rating: Better, Good, Normal, or Bad.
2️⃣ A list of any potential bugs or logical errors, if found.
3️⃣ A clear explanation of what the error is in few lines so that everyone can understand it..
4️⃣ Identification of syntax errors or runtime errors, if present.
5️⃣ Recommendations on how to fix each identified issue.
6️⃣ Solution of corrected code in few lines.

Analyze it like a senior developer trainer reviewing a pull request.

Code: ${code}
`,
    });
    setResponse(response.text)
    setLoading(false);
  }


  return (
  <>
    <Navbar />

    <div 
      className="main flex justify-between"
      style={{ height: "calc(100vh - 100px)" }}
    >
      <div className="left h-full w-[50%]">
        <div className="tabs !mt-5 !px-5 !mb-3 w-full flex items-center gap-[10px]">
          <Select
            value={selectedOption}
            onChange={(e) => { setSelectedOption(e) }}
            options={options}
            styles={customStyles}
          />

          <button
            onClick={() => {
              if (code === "") {
                alert("Please enter code first")
              } else {
                reviewCode()
              }
            }}
            disabled={loading}
            className="relative px-8 py-2 rounded-xl font-semibold text-white
            bg-gradient-to-r from-purple-600 to-pink-500
            shadow-lg shadow-purple-500/30
            hover:scale-105 hover:shadow-purple-500/50
            active:scale-95
            transition-all duration-300
            disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Reviewing..." : "Review Code"}
          </button>
        </div>

        <Editor
          height="100%"
          theme='vs-dark'
          language={selectedOption.value}
          value={code}
          onChange={(e) => { setCode(e) }}
        />
      </div>

      <div className="right overflow-scroll !p-[10px] bg-zinc-900 w-[50%] h-full">
        <div className="topTab border-b-[1px] border-t-[1px] border-[#27272a] flex items-center h-[60px]">
          <p className='font-[700] text-[17px]'>Response</p>
        </div>

        {loading && <RingLoader color='#9333ea' />}

        <Markdown>{response}</Markdown>
      </div>
    </div>

    {/* ✅ FOOTER ADDED HERE */}
    <Footer />
  </>
)
}

export default App