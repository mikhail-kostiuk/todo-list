export default interface Todo {
  id?: string;
  name: string;
  deadline: number;
  priority: string;
  createdAt: number;
  createdBy: string;
  checked: boolean;
}
