'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Checkbox } from '../../../components/ui/checkbox';
import {  Plus, ListTodo } from 'lucide-react';
import { Button } from '../../../components/ui/button';

const INITIAL_TASKS = [
  { id: 'task1', title: 'Write unit tests' },
  { id: 'task2', title: 'Refactor auth module' },
  { id: 'task3', title: 'Optimize queries' },
  { id: 'task4', title: 'Update docs' },
];

export function TaskTracker({ className, ...props }) {
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleTaskComplete = (taskId) => {
    setCompletedTasks((prev) =>
      prev.includes(taskId)
        ? prev.filter((id) => id !== taskId)
        : [...prev, taskId]
    );
  };

  return (
    <Card className={className} {...props}>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='text-lg font-medium flex items-center gap-2'>
          <ListTodo className='h-5 w-5 text-rose-500 dark:text-rose-400' />
          Daily Tasks
        </CardTitle>
        <Button variant='ghost' size='icon'>
          <Plus className='h-4 w-4 text-emerald-500 dark:text-emerald-400' />
        </Button>
      </CardHeader>
      <CardContent>
        <div className='space-y-2'>
          {tasks.map((task) => (
            <div key={task.id} className='flex items-center space-x-2'>
              <Checkbox
                id={task.id}
                checked={completedTasks.includes(task.id)}
                onCheckedChange={() => handleTaskComplete(task.id)}
              />
              <label
                htmlFor={task.id}
                className={`text-sm ${
                  completedTasks.includes(task.id)
                    ? 'line-through text-muted-foreground'
                    : ''
                }`}
              >
                {task.title}
              </label>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
