export interface Task {
  name: string;
  id?: string;
  completed: boolean;
  owner: string;
  description: string;
  duration: number;
}
