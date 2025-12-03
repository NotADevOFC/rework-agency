import { describe, it, expect } from 'vitest';

// Utility functions to test
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

describe('Email Validation', () => {
  it('should validate correct email addresses', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
    expect(isValidEmail('user.name@domain.fr')).toBe(true);
    expect(isValidEmail('contact@rework-agency.com')).toBe(true);
  });

  it('should reject invalid email addresses', () => {
    expect(isValidEmail('')).toBe(false);
    expect(isValidEmail('invalid')).toBe(false);
    expect(isValidEmail('missing@domain')).toBe(false);
    expect(isValidEmail('@nodomain.com')).toBe(false);
    expect(isValidEmail('spaces in@email.com')).toBe(false);
  });
});

describe('Date Formatting', () => {
  it('should format dates correctly', () => {
    const result = formatDate('2024-01-15');
    expect(result).toContain('2024');
    expect(result).toContain('15');
  });

  it('should include year in formatted date', () => {
    const result = formatDate('2023-12-25');
    expect(result).toContain('2023');
    expect(result).toContain('25');
  });
});

describe('Slugify', () => {
  it('should convert text to URL-friendly slug', () => {
    expect(slugify('Hello World')).toBe('hello-world');
    expect(slugify('E-commerce Design')).toBe('e-commerce-design');
  });

  it('should handle punctuation', () => {
    expect(slugify('Test!!!Multiple???Punctuation')).toBe('test-multiple-punctuation');
  });

  it('should trim leading and trailing hyphens', () => {
    expect(slugify('  spaces around  ')).toBe('spaces-around');
    expect(slugify('---dashes---')).toBe('dashes');
  });
});

describe('Text Truncation', () => {
  it('should not truncate short text', () => {
    expect(truncateText('Short', 10)).toBe('Short');
  });

  it('should truncate long text with ellipsis', () => {
    expect(truncateText('This is a very long text', 10)).toBe('This is a...');
  });

  it('should handle exact length', () => {
    expect(truncateText('Exact', 5)).toBe('Exact');
  });
});
