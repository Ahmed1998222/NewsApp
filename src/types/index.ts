 
export interface INews {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}


export interface IOption {
  id?: string | number;
  title: string;
  value: any;
}

