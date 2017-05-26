interface Author {
  name: string;
  checked: boolean;
}
interface Course {
  _id: string;
  title: string;
  description: string;
  duration: number;
  date: number;
  topRated: boolean;
  authors: Author[];
}

export { Course };
