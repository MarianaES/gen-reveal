import { useMemo } from 'react';

interface PregnancyProgress {
  week: number;
  days: number;
  loadingBar: string;
  remainingWeeks: number;
  isOverdue: boolean;
  overdueWeeks: number;
  overdueDays: number;
  totalProgress: number;
}

export const usePregnancyProgress = (dueDate: string): PregnancyProgress => {
  return useMemo(() => {
    const dueDateObj = new Date(dueDate);
    const today = new Date();
    
    // Total pregnancy duration in milliseconds (40 weeks)
    const pregnancyDuration = 40 * 7 * 24 * 60 * 60 * 1000;
    
    const conceptionDate = new Date(dueDateObj.getTime() - pregnancyDuration);
    
    const elapsedTime = today.getTime() - conceptionDate.getTime();
    
    // Calculate current week and days
    const totalDays = Math.floor(elapsedTime / (24 * 60 * 60 * 1000));
    const currentWeek = Math.floor(totalDays / 7);
    const remainingDays = totalDays % 7;
    
    // Handle overdue cases
    const isOverdue = currentWeek >= 40;
    const overdueWeeks = Math.floor((today.getTime() - dueDateObj.getTime()) / (7 * 24 * 60 * 60 * 1000));
    const overdueDays = Math.floor((today.getTime() - dueDateObj.getTime()) / (24 * 60 * 60 * 1000)) % 7;
    
    const progressSegments = 10;
    const filledSegments = isOverdue ? progressSegments : Math.floor((currentWeek / 40) * progressSegments);
    
    const loadingBar = Array(progressSegments)
      .fill('□')
      .fill('■', 0, filledSegments)
      .join('');

    return {
      week: currentWeek,
      days: remainingDays,
      loadingBar,
      remainingWeeks: isOverdue ? 0 : 40 - currentWeek,
      isOverdue,
      overdueWeeks,
      overdueDays,
      totalProgress: isOverdue ? 100 : (currentWeek / 40) * 100
    };
  }, [dueDate]);
};