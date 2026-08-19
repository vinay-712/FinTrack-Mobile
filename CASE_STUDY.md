# FinTrack Mobile — UX Case Study

## Project summary

FinTrack Mobile is a personal-finance experience designed to help people understand their financial position quickly and act with confidence. The product combines balances, spending insights, transaction history, budgets, goals, and recurring payments in one calm mobile interface.

## The challenge

Personal-finance products often present too much information at once. Dense charts, competing metrics, and unclear hierarchy can make a routine money check feel like work.

The design challenge was to create an experience that:

- Communicates financial health in seconds
- Makes spending patterns understandable without oversimplifying them
- Keeps frequent actions reachable
- Supports a growing set of financial tools without crowding the dashboard
- Feels trustworthy, modern, and calm

## Product goals

1. Make the current balance and monthly movement immediately visible.
2. Help users understand where their money goes.
3. Reduce friction when reviewing or adding transactions.
4. Create consistent patterns that scale across budgets, reports, accounts, goals, and settings.
5. Preserve readability and comfortable touch interaction on mobile.

## Information architecture

The primary navigation prioritizes four recurring destinations:

- **Home** — financial overview and recent activity
- **Transactions** — complete income and expense history
- **Budgets** — monthly category limits and progress
- **Profile** — account, security, notification, and appearance settings

A prominent center action gives fast access to transaction creation. Secondary financial tools live in the Finance Hub so the main navigation remains focused.

## Key design decisions

### A single dominant balance card

The balance card is the strongest visual element. It combines total balance, monthly trend, income, and expenses while keeping supporting information subordinate.

### A lightweight spending visualization

The category overview uses a donut chart and direct labels. Users can understand proportions and exact values without opening a separate analytics screen.

### Transaction rows optimized for scanning

Each transaction communicates merchant, category, amount, and direction. Income receives a positive status color, while expense amounts remain neutral to avoid visual alarm fatigue.

### Progressive disclosure

The dashboard shows what matters now. Deeper tools—reports, accounts, categories, goals, recurring payments, and settings—remain available without competing for attention.

## Visual language

FinTrack uses deep navy surfaces, indigo brand color, soft card elevations, and a restrained status palette. Inter provides clear number shapes and maintains legibility at compact mobile sizes.

## Prototype

The repository contains a responsive multi-screen prototype with:

- Home, Transactions, Budgets, and Profile navigation
- An interactive add-transaction bottom sheet
- Save-confirmation feedback
- Desktop product-presentation mode
- Full-screen mobile mode
- Automated GitHub Pages deployment

## Accessibility considerations

- Semantic landmarks and descriptive labels
- High-contrast primary text
- Status meaning supported by labels, not color alone
- Large primary touch targets
- Reduced interface density
- Responsive behavior without horizontal scrolling

## Next steps

- Add keyboard focus styling and focus trapping to the transaction sheet
- Add accessible text summaries for visual charts
- Persist editable demo transactions locally
- Validate the complete experience with screen readers
- Run usability sessions around budgeting and recurring payments
