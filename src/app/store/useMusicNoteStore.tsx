type Note = {
    id: number;
    title: string;
    content: string;
    audio?: string;
    tags: string[];
  };
  
  type Song = {
    id: number;
    title: string;
    fileUrl: string;
    genre: string;
    status: string;
    noteId?: number;
  };
  