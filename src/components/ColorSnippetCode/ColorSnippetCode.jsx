import { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css'; // Cambia por el tema que prefieras


const ColorSnippetCode = ({code, language}) => {
    console.log(language)
    useEffect(() => {
        Prism.highlightAll(); // Resalta el código al renderizar
    }, []);

    return (
        <pre>
            <code className={`language-${language}`}>{code}</code>
        </pre>
    )
}

export default ColorSnippetCode