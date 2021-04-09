export class SearchResult {
    words: string[];
    pages: {
        url: string;
        title: string;
        paragraphs: string[];
    }[];
}
