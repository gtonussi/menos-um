import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Button from '../../components/Button';

describe("Running test for Button", () => {
  test("Check rendering of Button", () => {
    render(<Button>TestButton</Button>);
    expect(screen.getByRole('button', {name: "TestButton"})).toBeVisible();
  })
})