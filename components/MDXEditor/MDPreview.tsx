import * as DOMPurify from 'dompurify';
import { marked } from 'marked';
import './index.css'

export type MDPreviewProps = {
  value: string;
};

export const MDPreview = ({ value = '' }: MDPreviewProps) => {
  return (
    <div
      className="w-full markdown-body"
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(marked.parse(value)),
      }}
    />
  );
};