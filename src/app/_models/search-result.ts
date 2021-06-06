export class SearchResult {
    result: {
        words: string[];
        pages: {
            url: string;
            title: string;
            paragraphs: string[];
        }[];
    };
    slice: number;
    slices: number;
}
