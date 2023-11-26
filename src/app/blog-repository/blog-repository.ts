export class Blog {
    blogID: string;
    title: string;
    thumbnailUrl: string;
    body: string;
    creationDate?: Date;
    likes: number;
    dislikes: number;
    comments: any[];
}