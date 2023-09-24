import removeMD from 'remove-markdown'

export const removeMarkdown = (markdown: string) => removeMD(markdown).replace(/\s+/g, ' ')