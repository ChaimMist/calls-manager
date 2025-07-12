import type { SuggestedTask } from '../../models/suggestedTask.ts';

export interface AssignableSuggestedTaskProps {
  suggestedTask: SuggestedTask;
  isAssigned?: boolean;
}