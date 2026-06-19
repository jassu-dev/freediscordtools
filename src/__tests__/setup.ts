import '@testing-library/jest-dom';
import { vi } from 'vitest';

vi.mock('next/font/google', () => ({
  Inter: () => ({
    className: 'inter',
    variable: '--font-inter',
  }),
}));
