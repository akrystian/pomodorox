const baseState = {
  labels: [],
  mode: [],
  numTask: 1,
  label: '',
  estimate: 0,
  selected: null,
  notificationsState: {
    title: 'Yep!',
    body: 'Time is up!',
  },
  events: [],
  version: 4,
}

export function withTasks(labels: Array<{ id: string; label: string; done?: boolean; points?: number; estimate?: number }>) {
  return {
    ...baseState,
    labels: labels.map(task => ({
      done: false,
      points: 0,
      estimate: 0,
      ...task,
    })),
  }
}

export function withSelectedTask(selectedId: string) {
  return {
    ...withTasks([
      { id: 'task-1', label: 'Task 1' },
      { id: 'task-2', label: 'Task 2' },
    ]),
    selected: selectedId,
  }
}

export function withMode(mode: string) {
  return {
    ...withSelectedTask('task-1'),
    mode: [mode],
  }
}

export function wrongVersionState() {
  return {
    ...withTasks([{ id: 'task-1', label: 'Old task' }]),
    version: 3,
  }
}
