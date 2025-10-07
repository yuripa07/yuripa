// components/PortableTextComponents.tsx
import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
// import { urlFor } from '@/lib/sanity' // Ajuste o caminho se necessário

// O objeto 'components' que ensina o <PortableText> como renderizar cada tipo
export const myPortableTextComponents = {
  types: {
    // Renderizador para o tipo 'image'
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    image: ({ value }: { value: any }) => {
      if (!value?.asset?._ref) {
        return null;
      }

      const postImageUrl = value ? urlFor(value)?.url() : null;

      return (
        <Image
          src={postImageUrl!}
          alt={value.alt || "Note image"}
          width={1024}
          height={1024}
          className="rounded-lg"
          // sizes="(max-width: 800px) 100vw, 800px"
        />
      );
    },
    // Renderizador para o tipo 'codeBlock'
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    codeBlock: ({ value }: { value: any }) => {
      const { code, language, filename } = value;
      if (!code) {
        return null;
      }
      return (
        <div className="my-6">
          {filename && (
            <div className="bg-slate-800 text-slate-300 text-sm py-2 px-4 rounded-t-md font-mono">
              {filename}
            </div>
          )}
          <SyntaxHighlighter
            language={language || "text"}
            style={atomDark}
            showLineNumbers // Opcional: mostrar números de linha
            customStyle={{
              padding: "1.25rem",
              margin: "0",
              borderRadius: filename ? "0 0 0.375rem 0.375rem" : "0.375rem",
            }}
          >
            {code}
          </SyntaxHighlighter>
        </div>
      );
    },
  },
};
