import marked from 'marked';
import sanitizeHtmlLibrary from 'sanitize-html';
import TurndownService from 'turndown';

async function sanitizeMarkdownContent(markdownContent: string) {
    const convertedHtml = await marked.parse(markdownContent);

    const santizedHtml = sanitizeHtmlLibrary(convertedHtml, {
        allowedTags: sanitizeHtmlLibrary.defaults.allowedTags.concat(['img'])
    });

    const turndownService = new TurndownService();
    const sanitizedMarkdown = turndownService.turndown(santizedHtml);

    return sanitizedMarkdown;
}

export default sanitizeMarkdownContent;