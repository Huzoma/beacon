
# Beacon Job Portal

A modern job portal built with Next.js, React, and Tailwind CSS. Beacon makes job search simple, reliable, and transparent—helping you see the opportunities that matter most.

## Features

- Job search and filtering
- Employer and jobseeker dashboards
- Job posting and application
- Responsive, accessible UI
- Optimized images with Next.js `<Image />`
- SEO meta and Open Graph tags
- PropTypes for type safety
- Prettier, Husky, and lint-staged for code quality
- Jest and React Testing Library for testing
- GitHub Actions CI for linting and tests
- Environment variable support

## Getting Started

### Prerequisites
- Node.js 18 or 20
- npm

### Installation

```bash
git clone https://github.com/your-username/my-capstone-25-job-portal.git
cd my-capstone-25-job-portal
npm install
```

### Running the App

```bash
npm run dev
```

## Environment Variables

Create a `.env.local` file in the project root:

```
NEXT_PUBLIC_API_URL=https://api.example.com
```

## Testing

Run all tests:

```bash
npm test
```

## Linting & Formatting

- Lint: `npm run lint`
- Format: `npx prettier --write .`
- Pre-commit hooks run lint-staged automatically

## Continuous Integration

GitHub Actions workflow runs lint and tests on every push/PR to `main`.

## Contributing

Pull requests are welcome! Please open an issue first to discuss changes.

## License

MIT
