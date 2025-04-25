export interface Task {
    _id?: string;
    title: string;
    description: string;
    dueDate: string;
    priority: 'Low' | 'Medium' | 'High';
    status: 'Pending' | 'Completed';
    createdBy?: string; // Optional for authentication
  }
  