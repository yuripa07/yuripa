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
    image: ({ value }: { value: any }) => {
      if (!value?.asset?._ref) {
        return null;
      }

      const postImageUrl = value ? urlFor(value)?.url() : null;
      return (
        <Image
          src={postImageUrl!}
          alt={value.alt || "Imagem do post"}
          width={1920}
          height={1080}
          className="rounded-lg my-6"
          // sizes="(max-width: 800px) 100vw, 800px"
        />
      );
    },
    // Renderizador para o tipo 'codeBlock'
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
