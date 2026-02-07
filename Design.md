@import "tailwindcss";

@theme {
  --color-primary: #6366f1;
  --color-secondary: #0ea5e9;
  --color-danger: #ef4444;
  --color-muted: #64748b;
  --color-bg: #0b0f19;
  --color-card: #111827;

  --radius-xl: 14px;
}

Create src/components/layout/Container.jsx:

export default function Container({ children }) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {children}
    </div>
  );
}

Set base styles once
@layer base {
  body {
    @apply bg-bg text-white antialiased;
  }

  h1 {
    @apply text-3xl font-semibold;
  }

  h2 {
    @apply text-2xl font-semibold;
  }

  button {
    @apply rounded-xl;
  }
}

Most pages follow:

<Container>
  <div className="space-y-8">
    <Header />
    <Content />
  </div>
</Container>


Sections: py-12 or py-16

Cards: p-6

Gaps: gap-6

Inputs: h-10 px-3


Typography scale (super important)

Pick this and never change:

Use	Class
Page title	text-3xl font-semibold
Section title	text-xl font-semibold
Muted text	text-sm text-muted
Labels	text-sm font-medium