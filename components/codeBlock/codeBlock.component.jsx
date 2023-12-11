import { CopyBlock,dracula } from "react-code-blocks"; 

import './codeBlock.scss';

const CodeBlock = ({codeToShow}) => {

  return (
    <div class="codeBlock">
       <CopyBlock 
          text={codeToShow}
          language='javascript'
          showLineNumbers={true}
          wrapLines={true}
          theme={dracula} 
        /> 
    </div>
  )
}

export default CodeBlock;