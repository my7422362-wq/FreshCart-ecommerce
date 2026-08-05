import type { Product } from '../types/product'

interface Seed {
  title: string
  price: number
  image: string
  description: string
  rating: number
  isNew: boolean
  isBestSeller: boolean
  discountPercentage?: number
}

function build(category: Product['category'], prefix: string, seeds: Seed[]): Product[] {
  return seeds.map((seed, index) => ({
    id: `${prefix}${String(index + 1).padStart(3, '0')}`,
    category,
    title: seed.title,
    price: seed.price,
    image: `https://images.unsplash.com/${seed.image}?auto=format&fit=crop&w=900&q=80`,
    description: seed.description,
    rating: seed.rating,
    isNew: seed.isNew,
    isBestSeller: seed.isBestSeller,
    ...(seed.discountPercentage ? { discountPercentage: seed.discountPercentage } : {}),
  }))
}

const shoes = build('shoes', 'shoe', [
  { title: 'Nike Air Zoom Runner (Red)', price: 3450, image: 'photo-1542291026-7eec264c27ff', description: 'Lightweight red running shoe built for long-distance comfort and daily training.', rating: 4.6, isNew: true, isBestSeller: false, discountPercentage: 12 },
  { title: 'Nike Free Run Trainer (Gray)', price: 2890, image: 'photo-1491553895911-0055eca6402d', description: 'Flexible gray trainer with a natural stride feel for everyday runs.', rating: 4.4, isNew: false, isBestSeller: true },
  { title: 'Nike Air Max Classic (White/Red)', price: 4200, image: 'photo-1600185365926-3a2ce3cdb9eb', description: 'Iconic white and red silhouette with visible air cushioning for all-day wear.', rating: 4.8, isNew: false, isBestSeller: true },
  { title: 'New Balance 574 Sport (Gray)', price: 2650, image: 'photo-1562183241-b937e95585b6', description: 'Classic gray suede-and-mesh sneaker balancing retro style with everyday comfort.', rating: 4.3, isNew: false, isBestSeller: false },
  { title: 'Urban Trail Running Shoes', price: 1450, image: 'photo-1709258228137-19a8c193be39', description: 'Versatile trainers designed for city pavement and light trail routes alike.', rating: 4.1, isNew: true, isBestSeller: false },
  { title: 'Nike Air Force Low (White/Red/Black)', price: 3800, image: 'photo-1600185365778-7875a359b924', description: 'Timeless low-top silhouette with a durable leather upper and rubber sole.', rating: 4.7, isNew: false, isBestSeller: true, discountPercentage: 10 },
  { title: 'CloudStep Lightweight Sneaker (White)', price: 1290, image: 'photo-1746206673199-5b75dcec1018', description: 'Feather-light everyday sneaker built for walking and casual wear.', rating: 4.0, isNew: true, isBestSeller: false },
  { title: 'Nike Air Max Bold (Purple/Black)', price: 3950, image: 'photo-1604671801908-6f0c6a092c05', description: 'Bold colorway athletic shoe with responsive cushioning for training days.', rating: 4.5, isNew: false, isBestSeller: false },
  { title: 'Heritage High-Top Canvas Sneakers', price: 1650, image: 'photo-1726133731483-d4b8bcabeb43', description: 'Classic high-top canvas sneakers with a timeless streetwear look.', rating: 4.2, isNew: false, isBestSeller: false, discountPercentage: 15 },
  { title: 'Nike Air Max Mono (Black/White)', price: 3700, image: 'photo-1582588678413-dbf45f4823e9', description: 'Monochrome athletic sneaker that pairs with any casual outfit.', rating: 4.6, isNew: false, isBestSeller: true },
  { title: 'FlexFit Studio Training Shoes', price: 1190, image: 'photo-1637437757614-6491c8e915b5', description: 'Grippy, flexible sole built for studio workouts and gym sessions.', rating: 3.9, isNew: true, isBestSeller: false },
  { title: 'Nike Air Huarache Retro (Orange/White)', price: 3300, image: 'photo-1465877783223-4eba513e27c6', description: 'Retro-inspired runner with a snug neoprene fit and standout colorway.', rating: 4.4, isNew: false, isBestSeller: false },
])

const tech = build('tech', 'tech', [
  { title: 'Apple Watch SE (Red Sport Band)', price: 10500, image: 'photo-1589410978622-a56c8715a0f1', description: 'Fitness and health tracking on your wrist with a vibrant red sport band.', rating: 4.7, isNew: true, isBestSeller: true },
  { title: 'Apple Watch SE (Black Sport Band)', price: 10900, image: 'photo-1602248145578-9e5bc50c77b3', description: 'Sleek black aluminum case with all-day activity and heart-rate tracking.', rating: 4.6, isNew: false, isBestSeller: true },
  { title: 'Wireless Earbuds & Headphones Set', price: 2450, image: 'photo-1676902496097-c5a9c7dc64f9', description: 'A bundled pair of true-wireless earbuds and over-ear headphones for any mood.', rating: 4.2, isNew: false, isBestSeller: false, discountPercentage: 8 },
  { title: 'Apple Watch Series 9 (Purple Loop)', price: 15800, image: 'photo-1566036655097-0dbc3253a818', description: 'The latest Apple Watch with a soft purple sport loop and brighter display.', rating: 4.9, isNew: true, isBestSeller: true },
  { title: 'Apple Watch + Earbuds Combo', price: 13200, image: 'photo-1566036655089-ab8b7d160a24', description: 'A matched smartwatch and earbuds combo for training and daily commutes.', rating: 4.5, isNew: false, isBestSeller: false },
  { title: 'TrueWireless Earbuds with Case', price: 1850, image: 'photo-1568614213442-9023b31ca184', description: 'Compact true-wireless earpiece with a pocket-friendly charging case.', rating: 4.1, isNew: true, isBestSeller: false },
  { title: 'Apple Watch & AirPods Bundle', price: 16500, image: 'photo-1566036653839-c66930877168', description: 'Apple Watch and AirPods paired together for a complete wearable setup.', rating: 4.8, isNew: false, isBestSeller: true, discountPercentage: 10 },
  { title: 'Compact Wireless Earbuds', price: 990, image: 'photo-1566036635021-bdd9eeacb6df', description: 'Budget-friendly wireless earbuds with a snug in-ear fit and charging case.', rating: 3.9, isNew: false, isBestSeller: false },
  { title: 'Apple Watch Series 9 (Steel)', price: 16900, image: 'photo-1599007612731-a09b3072caaa', description: 'Premium stainless-steel Apple Watch resting on a warm wooden desk shot.', rating: 4.7, isNew: false, isBestSeller: false },
  { title: 'Chronograph Watch & AirPods Set', price: 12400, image: 'photo-1555762894-d8b5956368a1', description: 'A classic chronograph watch bundled with AirPods for work and travel.', rating: 4.3, isNew: false, isBestSeller: false },
  { title: 'iPhone with AirPods Pro', price: 32000, image: 'photo-1550029402-8ea9bfe19f04', description: 'Latest iPhone paired with AirPods Pro for a complete Apple ecosystem start.', rating: 4.9, isNew: true, isBestSeller: true, discountPercentage: 6 },
  { title: 'Smartphone & Earbuds Pack', price: 8900, image: 'photo-1634188456838-9accd68d7dfc', description: 'A capable everyday smartphone bundled with wireless earbuds.', rating: 4.0, isNew: false, isBestSeller: false },
])

const accessories = build('accessories', 'acc', [
  { title: 'Tortoiseshell Aviator Sunglasses', price: 1450, image: 'photo-1537832816519-689ad163238b', description: 'Classic aviator frame in a warm tortoiseshell finish with UV protection.', rating: 4.4, isNew: true, isBestSeller: false },
  { title: 'Classic Black Frame Sunglasses', price: 990, image: 'photo-1600025109398-07b69e2bf7f1', description: 'Timeless black-framed sunglasses that suit any face shape.', rating: 4.2, isNew: false, isBestSeller: false },
  { title: 'Retro Round Sunglasses', price: 1290, image: 'photo-1756725519484-f5aff6ca6bc7', description: 'Round retro-inspired lenses for a vintage, laid-back look.', rating: 4.1, isNew: true, isBestSeller: false },
  { title: 'Leather Wallet & Sunglasses Set', price: 1850, image: 'photo-1780148651078-4a9244334d51', description: 'A matched leather wallet and sunglasses set, ready to gift or carry.', rating: 4.5, isNew: false, isBestSeller: true },
  { title: 'Ray-Ban Style Sunglasses & Leather Wallet', price: 2650, image: 'photo-1570993492887-02f5bf2aff21', description: 'Everyday-carry pairing of statement sunglasses and a slim leather wallet.', rating: 4.6, isNew: false, isBestSeller: true, discountPercentage: 10 },
  { title: 'Leather Card Holder & Zip Pouch', price: 750, image: 'photo-1534666623429-c698a1f59104', description: 'Slim leather card holder paired with a zip pouch for small essentials.', rating: 4.0, isNew: false, isBestSeller: false },
  { title: 'Straw Beach Bag', price: 890, image: 'photo-1733707105493-deb47d12214a', description: 'Woven straw tote roomy enough for a day at the beach or market.', rating: 4.3, isNew: true, isBestSeller: false },
  { title: 'Leather Wallet Classic', price: 690, image: 'photo-1676276550322-7623a2545b24', description: 'A dependable classic leather wallet with card slots and a coin pocket.', rating: 4.2, isNew: false, isBestSeller: false },
  { title: 'Black Sling Crossbody Bag', price: 1350, image: 'photo-1523464900179-ed2e879f4e6c', description: 'Compact sling bag for hands-free carrying of daily essentials.', rating: 4.1, isNew: false, isBestSeller: false, discountPercentage: 15 },
  { title: 'Everyday Carry Pouch Set', price: 590, image: 'photo-1751242865091-ddaee15de69f', description: 'A practical set of pouches to keep small items organized on the go.', rating: 3.9, isNew: false, isBestSeller: false },
  { title: 'Leather Wallet & Sunglasses Duo', price: 1990, image: 'photo-1689844495806-321b5adaf5d5', description: 'A polished duo of leather wallet and sunglasses for everyday style.', rating: 4.4, isNew: false, isBestSeller: false },
  { title: 'Sunglasses Case & Patterned Bag', price: 1150, image: 'photo-1785461333443-e29ebbf7b840', description: 'Protective sunglasses case paired with a patterned carry bag.', rating: 4.0, isNew: true, isBestSeller: false },
])

const clothing = build('clothing', 'cloth', [
  { title: 'Casual Button-Up Shirt (Blue)', price: 850, image: 'photo-1740711152088-88a009e877bb', description: 'Breathable blue button-up shirt for smart-casual everyday wear.', rating: 4.2, isNew: true, isBestSeller: false },
  { title: 'Under Armour Polo Shirt (Black)', price: 1450, image: 'photo-1625910513413-c23b8bb81cba', description: 'Performance black polo with moisture-wicking fabric for active days.', rating: 4.5, isNew: false, isBestSeller: true },
  { title: 'Crew Neck T-Shirt Set', price: 690, image: 'photo-1586363104862-3a5e2ab60d99', description: 'Soft cotton crew-neck tees in green and gray, sold as a matching set.', rating: 4.1, isNew: false, isBestSeller: false },
  { title: 'Oxford Button-Up Shirt (Blue)', price: 950, image: 'photo-1602810316693-3667c854239a', description: 'Crisp Oxford-weave shirt that dresses up or down with ease.', rating: 4.3, isNew: false, isBestSeller: false, discountPercentage: 10 },
  { title: 'Classic Polo Shirt Multipack', price: 1250, image: 'photo-1714317438040-0e8584215699', description: 'A multicolor pack of classic-fit polo shirts for the whole week.', rating: 4.4, isNew: true, isBestSeller: true },
  { title: 'Cotton T-Shirt Duo', price: 590, image: 'photo-1759572095317-3a96f9a98e2b', description: 'Two everyday cotton tees in black and light green.', rating: 3.9, isNew: false, isBestSeller: false },
  { title: 'Heather Gray Polo Shirt', price: 780, image: 'photo-1625910513394-ea511bed44ca', description: 'Soft heather-gray polo with a relaxed, everyday fit.', rating: 4.0, isNew: false, isBestSeller: false },
  { title: "Men's Polo Shirt 3-Pack", price: 1650, image: 'photo-1720514496268-44bb31c03815', description: 'Three wardrobe-staple polo shirts bundled at a better price.', rating: 4.5, isNew: false, isBestSeller: true },
  { title: 'Forest Green Polo Shirt', price: 760, image: 'photo-1586363129094-d7a38564fae1', description: 'A rich forest-green polo made from breathable cotton pique.', rating: 4.2, isNew: false, isBestSeller: false },
  { title: 'Washed Denim Jacket', price: 1890, image: 'photo-1543076447-215ad9ba6923', description: 'Classic washed-denim jacket that layers well in any season.', rating: 4.6, isNew: true, isBestSeller: false, discountPercentage: 12 },
  { title: 'Slim Fit Denim Jeans', price: 1350, image: 'photo-1617178388553-a9d022974a5c', description: 'Slim-fit denim jeans paired here with a brown leather belt.', rating: 4.3, isNew: false, isBestSeller: false },
  { title: "Levi's Classic Denim Jeans", price: 2200, image: 'photo-1573662073208-1f58a071c756', description: 'The original straight-fit Levi’s denim in authentic indigo wash.', rating: 4.7, isNew: false, isBestSeller: true },
])

const home = build('home', 'home', [
  { title: 'White Ceramic Serving Bowl', price: 380, image: 'photo-1544207240-8b1025eb7aeb', description: 'Minimalist white ceramic bowl for serving or display on open shelving.', rating: 4.2, isNew: false, isBestSeller: false },
  { title: 'Minimalist Ceramic Vase', price: 520, image: 'photo-1627042493632-fa4d12ff3b01', description: 'A clean-lined ceramic vase that suits modern and rustic interiors alike.', rating: 4.3, isNew: true, isBestSeller: false },
  { title: 'Modern Table Lamp (Green)', price: 1250, image: 'photo-1592195985871-2d326ada5d51', description: 'Warm ambient lighting from a compact green ceramic table lamp.', rating: 4.5, isNew: false, isBestSeller: true },
  { title: 'Botanical Ceramic Planter Vase', price: 450, image: 'photo-1525211867-7658f3b4f9a2', description: 'Planter-style vase designed to showcase trailing greenery.', rating: 4.1, isNew: false, isBestSeller: false },
  { title: 'Cobalt Blue Ceramic Vase', price: 610, image: 'photo-1583858995136-0d7d2dfc6696', description: 'Deep cobalt-blue vase that adds a bold accent to any room.', rating: 4.4, isNew: true, isBestSeller: false, discountPercentage: 10 },
  { title: 'Assorted Throw Pillow Set', price: 890, image: 'photo-1567247891402-88d2211d4334', description: 'A colorful mix of throw pillows to refresh any sofa or bed.', rating: 4.2, isNew: false, isBestSeller: false },
  { title: 'Clear Glass Flower Vase', price: 340, image: 'photo-1524265490809-ee2da0fcd355', description: 'Simple clear-glass vase that lets fresh-cut flowers take center stage.', rating: 4.0, isNew: false, isBestSeller: false },
  { title: 'Scented Candle & Vase Set', price: 590, image: 'photo-1551500519-f703bac72e8a', description: 'A cozy candle-and-vase pairing for a warm, styled tabletop.', rating: 4.3, isNew: false, isBestSeller: false },
  { title: 'Round Framed Wall Mirror', price: 1450, image: 'photo-1630893173199-9a1495764ab1', description: 'A round stainless-framed mirror that brightens any entryway.', rating: 4.5, isNew: false, isBestSeller: true },
  { title: 'Modern Wall Mirror', price: 1650, image: 'photo-1655146088834-3c26c96a1835', description: 'A sleek modern mirror designed to be a room’s focal point.', rating: 4.4, isNew: true, isBestSeller: false },
  { title: 'Decorative Floral Wreath', price: 420, image: 'photo-1603838813114-9dafc2fc7f8a', description: 'A gold-and-white floral wreath for door or wall decor.', rating: 3.9, isNew: false, isBestSeller: false },
  { title: 'Rustic Candle Set', price: 480, image: 'photo-1758077224268-b1e31442f423', description: 'Rustic tabletop candle set styled for cozy evenings at home.', rating: 4.1, isNew: false, isBestSeller: false, discountPercentage: 8 },
])

const beauty = build('beauty', 'beau', [
  { title: 'Professional Makeup Brush Set (Pink)', price: 650, image: 'photo-1596462502278-27bfdc403348', description: 'A full pink-handled brush set for flawless everyday makeup application.', rating: 4.5, isNew: true, isBestSeller: true },
  { title: 'Everyday Cosmetics Collection', price: 890, image: 'photo-1512496015851-a90fb38ba796', description: 'A curated collection of daily-use cosmetics in one convenient set.', rating: 4.2, isNew: false, isBestSeller: false },
  { title: 'Makeup Brush Set (Pink/Black)', price: 590, image: 'photo-1583209814683-c023dd293cc6', description: 'A dual-tone brush set covering blending, contour, and precision work.', rating: 4.1, isNew: false, isBestSeller: false },
  { title: 'Assorted Makeup Products Set', price: 950, image: 'photo-1522335789203-aabd1fc54bc9', description: 'A gray-surface flat-lay set covering the basics of a makeup routine.', rating: 4.3, isNew: false, isBestSeller: false, discountPercentage: 15 },
  { title: 'Pink Edition Makeup Collection', price: 780, image: 'photo-1631730486572-226d1f595b68', description: 'A pastel-pink makeup collection for a soft, everyday look.', rating: 4.0, isNew: true, isBestSeller: false },
  { title: 'Makeup Brush Set (White Handle)', price: 520, image: 'photo-1608979048467-6194dabc6a3d', description: 'Clean white-handled brushes for a minimalist vanity setup.', rating: 3.9, isNew: false, isBestSeller: false },
  { title: 'Makeup Brushes & Compact Powder Set', price: 690, image: 'photo-1515688594390-b649af70d282', description: 'Brushes paired with compact powders for touch-ups on the go.', rating: 4.2, isNew: false, isBestSeller: false },
  { title: 'Hydrating Skincare Bottle Set', price: 450, image: 'photo-1629198688000-71f23e745b6e', description: 'A set of hydrating skincare bottles for a simple daily routine.', rating: 4.4, isNew: false, isBestSeller: true },
  { title: 'Eyeshadow Palette Box', price: 380, image: 'photo-1511923199659-1c16881689de', description: 'A richly pigmented eyeshadow palette for day-to-night looks.', rating: 4.3, isNew: false, isBestSeller: false },
  { title: 'Colorful Makeup Brush Set', price: 560, image: 'photo-1583784561105-a674080f391e', description: 'A vibrant, color-coded brush set for a full face routine.', rating: 4.0, isNew: true, isBestSeller: false },
  { title: 'Signature Perfume (Gold Bottle)', price: 1150, image: 'photo-1600634999623-864991678406', description: 'An elegant gold-accented fragrance bottle for a signature scent.', rating: 4.6, isNew: false, isBestSeller: true, discountPercentage: 10 },
  { title: 'Pressed Powder Compact', price: 320, image: 'photo-1531646317777-0619c7c5d1d3', description: 'A lightweight pressed powder compact for a smooth, matte finish.', rating: 4.1, isNew: false, isBestSeller: false },
])

const electronics = build('electronics', 'elec', [
  { title: 'PlayStation Wireless Controller', price: 3200, image: 'photo-1592840496694-26d035b52b48', description: 'Official wireless controller with precise analog sticks and haptic buttons.', rating: 4.6, isNew: false, isBestSeller: true },
  { title: 'Wireless Game Controller (White/Orange)', price: 2450, image: 'photo-1604846887565-640d2f52d564', description: 'A comfortable wireless controller compatible with popular consoles.', rating: 4.2, isNew: false, isBestSeller: false },
  { title: 'Nintendo Switch Console', price: 18500, image: 'photo-1749531086082-47444e5174a9', description: 'Hybrid console for handheld or TV play, ready with the latest titles.', rating: 4.8, isNew: true, isBestSeller: true },
  { title: 'Nintendo Wii Controller', price: 1450, image: 'photo-1680007966627-d49ae18dbbae', description: 'Motion-sensing remote controller for classic Wii gameplay.', rating: 3.9, isNew: false, isBestSeller: false },
  { title: 'Handheld Gaming Console', price: 22000, image: 'photo-1682939634659-3091157aa3ec', description: 'Portable gaming console streaming your favorite titles on the go.', rating: 4.5, isNew: true, isBestSeller: false },
  { title: 'Android Tablet 10"', price: 9800, image: 'photo-1585857188908-5b6de3179683', description: 'A 10-inch Android tablet for browsing, streaming, and study.', rating: 4.3, isNew: false, isBestSeller: false, discountPercentage: 8 },
  { title: 'Nintendo Wii Console', price: 12500, image: 'photo-1737055056934-0d274175b161', description: 'The classic motion-controlled console, ready to play out of the box.', rating: 4.1, isNew: false, isBestSeller: false },
  { title: 'MacBook Pro Laptop', price: 65000, image: 'photo-1589979034086-5885b60c8f59', description: 'Apple’s pro laptop for creative work, development, and everyday tasks.', rating: 4.9, isNew: true, isBestSeller: true },
  { title: 'Ultra-Slim Laptop (Silver)', price: 28500, image: 'photo-1558965088-2e9062616292', description: 'A slim, lightweight laptop built for productivity on the move.', rating: 4.4, isNew: false, isBestSeller: false },
  { title: 'Laptop & Smartphone Bundle', price: 45000, image: 'photo-1654555023156-0a1c9cdf1130', description: 'A matched laptop and smartphone bundle for work and life.', rating: 4.5, isNew: false, isBestSeller: true, discountPercentage: 6 },
  { title: 'MacBook, iPad & iPhone Set', price: 95000, image: 'photo-1426024084828-5da21e13f5dc', description: 'The complete Apple set: MacBook, iPad, and iPhone together.', rating: 4.9, isNew: false, isBestSeller: true },
  { title: 'Android Smartphone', price: 15800, image: 'photo-1710409690405-1bab0d8cb655', description: 'A reliable everyday Android smartphone with a crisp display.', rating: 4.2, isNew: true, isBestSeller: false },
])

const kitchen = build('kitchen', 'kit', [
  { title: 'Automatic Coffee Maker', price: 3200, image: 'photo-1674504866626-fe4f19f68564', description: 'One-touch drip coffee maker for a fresh pot every morning.', rating: 4.4, isNew: false, isBestSeller: true },
  { title: 'Kenwood-Style Stand Mixer', price: 6500, image: 'photo-1693875161648-913e8680886c', description: 'A powerful stand mixer for dough, batter, and everything in between.', rating: 4.7, isNew: true, isBestSeller: true },
  { title: 'Stainless Steel Bread Toaster', price: 950, image: 'photo-1618506408870-64d8bec48248', description: 'A brushed-steel toaster with even browning for breakfast basics.', rating: 4.1, isNew: false, isBestSeller: false },
  { title: 'Electric Kettle & Thermal Carafe', price: 780, image: 'photo-1631193144538-d96464dee3d6', description: 'Keeps water hot and ready for tea, coffee, or instant meals.', rating: 4.2, isNew: false, isBestSeller: false },
  { title: 'Classic 2-Slice Toaster', price: 650, image: 'photo-1649264191340-86be9fac4043', description: 'A compact two-slice toaster that fits any kitchen counter.', rating: 3.9, isNew: false, isBestSeller: false, discountPercentage: 10 },
  { title: 'High-Speed Blender (Black)', price: 1450, image: 'photo-1695089028114-ce28248f0ab9', description: 'A high-speed blender for smoothies, sauces, and quick prep.', rating: 4.3, isNew: true, isBestSeller: false },
  { title: 'Stainless Steel Pot Set (3-Piece)', price: 2200, image: 'photo-1584990347193-6bebebfeaeee', description: 'A three-piece stainless steel pot set for everyday cooking.', rating: 4.5, isNew: false, isBestSeller: true },
  { title: 'Non-Stick Frying Pan Set', price: 1350, image: 'photo-1518291344630-4857135fb581', description: 'Durable non-stick frying pans that make weeknight cooking easier.', rating: 4.2, isNew: false, isBestSeller: false },
  { title: 'Ceramic Storage Bowl (Black)', price: 380, image: 'photo-1606744478773-03f64191a0ea', description: 'A sleek black ceramic bowl for prep, serving, or storage.', rating: 4.0, isNew: false, isBestSeller: false },
  { title: 'Ceramic Storage Bowl with Lid', price: 420, image: 'photo-1629306394113-87a4547af897', description: 'A lidded ceramic storage bowl that keeps leftovers fresh.', rating: 4.1, isNew: false, isBestSeller: false },
  { title: 'Professional Cookware Set', price: 3800, image: 'photo-1511224931379-b4e4324ea7fc', description: 'A full cookware set built for serious everyday kitchen use.', rating: 4.6, isNew: false, isBestSeller: true, discountPercentage: 12 },
  { title: 'Espresso Coffee Machine', price: 8900, image: 'photo-1745330231206-e21ec65197a8', description: 'A home espresso machine for barista-style coffee every day.', rating: 4.7, isNew: true, isBestSeller: false },
])

export const products: Product[] = [
  ...shoes,
  ...tech,
  ...accessories,
  ...clothing,
  ...home,
  ...beauty,
  ...electronics,
  ...kitchen,
]

export const featuredProducts: Product[] = [
  shoes[2], tech[0], accessories[3], clothing[9], home[2], beauty[0],
  electronics[7], kitchen[1], shoes[5], tech[10], clothing[11], kitchen[10],
]
