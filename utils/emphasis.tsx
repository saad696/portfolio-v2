import React from 'react';

/**
 * Turns `**bold**` inside a data string into <strong>, so bullet copy stays
 * readable in `utils/data.ts` without pulling in a markdown renderer.
 * Anything that isn't a matched pair is left as literal text.
 */
export function renderEmphasis(text: string): React.ReactNode[] {
    return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
            return (
                <strong key={index} className="font-semibold text-paper">
                    {part.slice(2, -2)}
                </strong>
            );
        }
        return <React.Fragment key={index}>{part}</React.Fragment>;
    });
}
