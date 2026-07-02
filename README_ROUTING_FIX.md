# Routing Fix Notes

## What was wrong
Homepage buttons were using plain `<a href="/products">` and `<a href="/wishlist">`, which can trigger full page reloads.

## What was changed
- Updated `src/pages/Home.tsx` to use React Router `<Link>` for:
  - `/products` (Shop now)
  - `/wishlist` (View wishlist)

## Routes
`src/routes/AppRoutes.tsx` already contains:
- `/products`
- `/wishlist`
- `*` redirects to `/`

