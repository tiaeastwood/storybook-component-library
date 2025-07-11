import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import { Button } from './Button';

const buttonLabel = "Click Me"

describe('Button', () => {
    it('renders the button with provided text', () => {
        render(<Button label={buttonLabel}/>);
        expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
    });

    it('calls onClick handler when clicked', () => {
        const handleClick = vi.fn();
        render(<Button label={buttonLabel} onClick={handleClick}/>);
        fireEvent.click(screen.getByRole('button'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('is disabled when disabled prop is true', () => {
        render(<Button label={buttonLabel} disabled={true}/>);
        expect(screen.getByRole('button')).toBeDisabled();
    });
});