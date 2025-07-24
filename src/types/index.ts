export interface Author {
	name: string;
	picture: string;
}

export interface Post {
	slug: string;
	title: string;
	summary: string;
	date: string;
	author: Author;
}
