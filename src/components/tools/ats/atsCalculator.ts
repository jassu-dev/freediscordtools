export const calculateAtsScore = (resumeText: string): number => {
  if (!resumeText) return 0;
  let score = 50; // Base score
  const keywords = ['experience', 'skills', 'education', 'project', 'contact', 'summary'];
  const text = resumeText.toLowerCase();
  
  // Keyword density check
  keywords.forEach(word => {
    if (text.includes(word)) score += 5;
  });
  
  // Length check (resumes should have substance)
  if (text.length > 1000) score += 10;
  if (text.length > 2000) score += 10;
  
  // Formatting check
  if (!/[^a-zA-Z0-9\s.,\-]/.test(resumeText.substring(0, 500))) score += 5;
  
  return Math.min(100, score);
};
