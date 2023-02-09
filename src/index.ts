interface todo {
  id: number;
  content: string;
  complete: boolean;
  category: string;
  tage: string[];
}
interface Create {
  content: string;
  complete: boolean;
  category: string;
  tage: string[];
}
interface Update {
  content: string;
  complete: boolean;
  category: string;
  tage: string[];
}
const create = (data: Create) => {};
const getAll = () => {};
const update = (data: Update) => {};
const deleteId = (id: number) => {};
const deleteAll = () => {};
const getId = (id: number) => {};
