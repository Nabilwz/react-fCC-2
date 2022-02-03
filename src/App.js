import React, { useState } from 'react'
import { marked } from 'marked'
import './App.css'

function App() {
  const firstLoadText =
    "Markdown syntax typed into the first pane will be automatically converted to HTML and rendered in the second pane. Go ahead, give it a try!  \n\n#### Headings:  \n# Heading 1\n## Heading 2\n### Heading 3\n---\n#### Hyperlink:   \n[Google](https://google.com)  \n\n---\n#### Inline code:\nFrom the console, run `console.log('Hello world!');` to see the output.    \n\n---\n\n#### Code block:\n```javascript\nfunction sayHello() {\n  return 'Hello world!';\n}\n```\n---\n\n#### List items:\n1. Ordered list item 1  \n2. Ordered list item 2  \n\n\n- Unordered list item  \n- Unordered list item  \n\n---\n\n#### Blockquote:  \n> Part of the inhumanity of the computer is that, once it is competently programmed and working smoothly, it is completely honest. -Isaac Asimov \n\n---\n#### Image:  \n![alt text](https://avatars2.githubusercontent.com/u/9892522?s=100&v=4 'freeCodeCamp Avatar')  \n\n---\n#### Formatted text:\nAs **bolded** or *emphasized* text.  "

  const [text, setText] = useState(firstLoadText)

  const writeText = (e) => {
    setText(e.target.value)
  }

  const getMarkdownText = () => {
    const markedText = marked(text, { sanitize: true })
    return { __html: markedText }
  }

  return (
    <div className=' bg-slate-600'>
      <div className='flex justify-center mt-36'>
        <div className='p-5 mr-40'>
          <textarea
            onChange={writeText}
            value={text}
            name=''
            id='editor'
            className='form-control
            block
           
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
           h-80
           w-80
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
         '
          ></textarea>
        </div>
        <div
          className='p-3 bg-white w-1/4'
          id='preview'
          dangerouslySetInnerHTML={getMarkdownText()}
        />
        ;
      </div>
    </div>
  )
}

export default App
