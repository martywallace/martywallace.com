import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism';

type Props = {
  readonly children: string;
};

export default function MarkdownRenderer({ children }: Props) {
  return (
    <Markdown
      className="prose prose-invert max-w-none"
      components={{
        code: ({ node, className, children, ...props }) => {
          const match = /language-(\w+)/.exec(className || '');

          return match ? (
            <SyntaxHighlighter
              PreTag="div"
              style={nord}
              customStyle={{
                padding: 0,
                margin: 0,
                background: 'transparent',
                fontFamily: 'JetBrains Mono, monospace',
              }}
              codeTagProps={{ style: { fontFamily: 'inherit' } }}
              language={match[1]}
            >
              {String(children)}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    >
      {children}
    </Markdown>
  );
}
