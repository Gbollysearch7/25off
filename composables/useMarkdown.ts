import MarkdownIt from 'markdown-it'

/**
 * Vue composable for parsing markdown content
 * Provides a safe way to render markdown in Vue components
 */
export const useMarkdown = () => {
  const md = new MarkdownIt({
    html: false, // Disable HTML tags in source for security
    xhtmlOut: true, // Use '/' to close single tags (<br />)
    breaks: true, // Convert '\n' in paragraphs into <br>
    linkify: true, // Autoconvert URL-like text to links
    typographer: true // Enable smart quotes and other typographic replacements
  })

  /**
   * Parse markdown content to HTML
   * @param content - The markdown content to parse
   * @returns Parsed HTML string
   */
  const parseMarkdown = (content: string): string => {
    if (!content) return ''
    return md.render(content)
  }

  return {
    parseMarkdown
  }
}