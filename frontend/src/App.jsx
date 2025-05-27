import { useState, useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import Editor from "react-simple-code-editor"
import prism from "prismjs"
import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight"
import "highlight.js/styles/github-dark.css"
import axios from 'axios'
import './App.css'

function App() {
  const [code, setCode] = useState(`// You can paste code in any language!

// JavaScript
function sum(a, b) {
  return a + b;
}

// Python
def sum(a, b):
    return a + b

// C++
int sum(int a, int b) {
    return a + b;
}
`)

  const [review, setReview] = useState(``)

  useEffect(() => {
    prism.highlightAll()
  }, [])

  async function reviewCode() {
    const response = await axios.post('http://localhost:3000/ai/get-review', { code })
    setReview(response.data)
  }

  return (
    <>
      <header className="main-header">
        <h1>💡 AI Code Reviewer</h1>
      </header>

      <main>
        <div className="left">
          <div className="section-header">✍️ Code Editor</div>

          <div className="instructions">
            Write or paste your code of any language below. Then click "Review" to receive suggestions and improvements.
          </div>

          <div className="code">
            <Editor
              value={code}
              onValueChange={code => setCode(code)}
              highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                border: "1px solid #444",
                borderRadius: "5px",
                height: "100%",
                width: "100%"
              }}
            />
          </div>

          <div onClick={reviewCode} className="review">Review</div>
        </div>

        <div className="right">
          <div className="section-header">🧠 AI Review Output</div>

          <Markdown rehypePlugins={[rehypeHighlight]}>
            {review}
          </Markdown>
        </div>
      </main>
    </>
  )
}

export default App
