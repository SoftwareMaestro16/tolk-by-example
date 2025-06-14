export interface Token {
    content: string;
    type: string;
}

export const tolkThemeColors: Record<string, string> = {
    keyword: "#ff0000",
    type: "#0E6ECE",
    typedNumber: "#206EBC",
    identifier: "#ffffff",
    namedIdentifier: "#00CED1",
    number: "#ffffff",
    string: "#81669F",
    comment: "#969696af",
    annotation: "#09E574",
    error: "#ff4500",
    method: "#ffff00",
    control: "#C22E9C",
    delimiter: "#888888",
    default: "#cccccc",
};

export function simpleTolkTokenizer(code: string): Token[] {
    const tokens: Token[] = [];

    const regex =
        /\/\/.*$|"(?:[^"\\]|\\.)*"|@(?:inline|pure)|\b(int|uint)\d+\b|\b(struct|cell|address|slice|builder|null|never|tolk|uint|int|fun|get|var|val|compile|run|if|do|while|return|throw|catch|assert|error|warning|begin|store|load|end|inline|pure)\b|\.(?:store|load|begin|end)[A-Za-z]*|[a-zA-Z_]\w*|[0-9]+|[{}()\[\];.,]|./gm;
    let match;
    while ((match = regex.exec(code)) !== null) {
        const text = match[0];

        if (/^\/\//.test(text)) {
            tokens.push({ content: text, type: "comment" });
        } else if (/^"(?:[^"\\]|\\.)*"$/.test(text)) {
            tokens.push({ content: text, type: "string" });
        } else if (/\b(int|uint)\d+\b/.test(text)) {
            tokens.push({ content: text, type: "typedNumber" });
        } else if (/\b(struct|cell|address|slice|builder|null|never|tolk|uint|int)\b/.test(text)) {
            tokens.push({ content: text, type: "type" });
        } else if (/\b(fun|get|var|val)\b/.test(text)) {
            tokens.push({ content: text, type: "type" });
        } else if (/\b(compile|run)\b/.test(text)) {
            tokens.push({ content: text, type: "keyword" });
        } else if (/\b(if|do|while|return|throw|catch|assert)\b/.test(text)) {
            tokens.push({ content: text, type: "control" });
        } else if (/\b(error|warning)\b/.test(text)) {
            tokens.push({ content: text, type: "error" });
        } else if (
            /(begin)/.test(text) ||
            /\b(begin|store|load|end)\b/.test(text) ||
            /^\.(store|load|begin|end)[A-Za-z]*/.test(text)
        ) {
            tokens.push({ content: text, type: "method" });
        } else if (text === "@inline" || text === "@pure") {
            tokens.push({ content: text, type: "annotation" });
        } else if (/^[0-9]+$/.test(text)) {
            tokens.push({ content: text, type: "number" });
        } else if (/^[{}()\[\];.,]$/.test(text)) {
            tokens.push({ content: text, type: "delimiter" });
        } else if (/^[a-zA-Z_]\w*$/.test(text)) {
            tokens.push({ content: text, type: "identifier" });
        } else {
            tokens.push({ content: text, type: "default" });
        }
    }

    return tokens;
}