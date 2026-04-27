export type MenuCategory = 'All' | 'Hot & Cold Beverages' | 'Breakfast' | 'Light Meals & Lunch' | 'Grills, Pizza, Pasta & Seafood' | 'Delightful Pleasures' | 'Alcoholic Beverages';

export interface MenuItem {
    id: number;
    name: string;
    description: string;
    price: string;
    category: MenuCategory;
    isHot?: boolean;
    isVegan?: boolean;
}

export const categories: MenuCategory[] = [
    'All',
    'Hot & Cold Beverages',
    'Breakfast',
    'Light Meals & Lunch',
    'Grills, Pizza, Pasta & Seafood',
    'Delightful Pleasures',
    'Alcoholic Beverages'
];

let idCounter = 1;
const createItem = (name: string, description: string, price: string, category: MenuCategory, isVegan?: boolean, isHot?: boolean): MenuItem => ({
    id: idCounter++,
    name,
    description,
    price,
    category,
    isVegan,
    isHot
});

export const menuItems: MenuItem[] = [
    // HOT & COLD BEVERAGES
    createItem("Red cappuccino", "", "R50", "Hot & Cold Beverages"),
    createItem("Vanilla latte", "", "R50", "Hot & Cold Beverages"),
    createItem("Hazelnut latte", "", "R50", "Hot & Cold Beverages"),
    createItem("Mocha latte", "", "R50", "Hot & Cold Beverages"),
    createItem("Dirty chai latte", "", "R50", "Hot & Cold Beverages"),
    createItem("Hot chocolate", "", "R50", "Hot & Cold Beverages"),
    createItem("Milo", "", "R50", "Hot & Cold Beverages"),
    createItem("Spicy chai", "", "R50", "Hot & Cold Beverages", false, true),
    createItem("Decaf coffee", "", "R44", "Hot & Cold Beverages"),
    createItem("Decaf cappuccino", "", "R50", "Hot & Cold Beverages"),
    createItem("Decaf cremoccino", "", "R50", "Hot & Cold Beverages"),
    createItem("Decaf latte", "", "R54", "Hot & Cold Beverages"),
    createItem("Filter coffee plus 1 refill", "", "R37", "Hot & Cold Beverages"),
    createItem("Americano", "", "R40", "Hot & Cold Beverages"),
    createItem("Single espresso", "", "R27", "Hot & Cold Beverages"),
    createItem("Double espresso", "", "R37", "Hot & Cold Beverages"),
    createItem("Cappuccino", "", "R42", "Hot & Cold Beverages"),
    createItem("Cremoccino", "", "R45", "Hot & Cold Beverages"),
    createItem("Café latte", "", "R50", "Hot & Cold Beverages"),
    createItem("5 Roses / Rooibos tea", "", "R27", "Hot & Cold Beverages"),
    createItem("Twinings Teas", "Chamomile / Earl Grey / Green Tea", "R32", "Hot & Cold Beverages"),
    createItem("Hot Water, lemon & honey", "", "R15", "Hot & Cold Beverages"),
    createItem("Fruit Juices", "Apple / Orange / Mango / Strawberry / Fruit Cocktail", "R45", "Hot & Cold Beverages"),
    createItem("Iced Teas", "Lipton’s Lemon / Peach", "R34", "Hot & Cold Beverages"),
    createItem("Appletiser / Red Grapetiser", "", "R40", "Hot & Cold Beverages"),
    createItem("Sodas (300ml)", "Coke, Fanta, Crème Soda, Sprite, Stoney, Coke Light, Sprite no sugar", "R30", "Hot & Cold Beverages"),
    createItem("Sodas (200ml)", "Dry Lemon, Lemonade, Ginger Ale, Soda Water, Indian Tonic, Pink Tonic", "R25", "Hot & Cold Beverages"),
    createItem("Still / Sparkling Water", "", "R20", "Hot & Cold Beverages"),

    // BREAKFAST
    createItem("Mini Breakfast", "1 egg, bacon, grilled tomato & toast", "R55", "Breakfast"),
    createItem("Low Carb Breakfast", "2 eggs, bacon, halloumi, grilled tomato & mushrooms", "R90", "Breakfast"),
    createItem("EarlyBird Breakfast", "2 eggs, bacon, grilled tomato & 2 Flapjacks (no toast)", "R80", "Breakfast"),
    createItem("Classic Breakfast", "2 eggs, bacon, grilled tomato, fries & toast", "R90", "Breakfast"),
    createItem("Day Breaker Breakfast", "Beef patty topped with cheddar, served with grilled tomato, onion rings, mushrooms, fries & toast", "R135", "Breakfast"),
    createItem("Steak Breakfast", "120g rump steak, 2 eggs, bacon, mushrooms, grilled tomato, fries & toast", "R150", "Breakfast"),
    createItem("Cheesegriller Breakfast", "2 eggs, 2 Back bacon, Chips, grilled Tomato, Cheesegriller and Toast", "R110", "Breakfast"),

    // Omelettes
    createItem("Cheese, tomato & mushrooms Omelette", "3 egg omelette with cheese, tomato and mushrooms", "R76", "Breakfast", true),
    createItem("Mushrooms, creamed spinach & feta Omelette", "3 egg omelette", "R86", "Breakfast", true),
    createItem("Bacon/Ham, cheese & tomato Omelette", "3 egg omelette", "R94", "Breakfast"),
    createItem("Chicken livers & cheese Omelette", "3 egg omelette", "R98", "Breakfast"),
    createItem("Chicken, mixed peppers & cheese Omelette", "3 egg omelette", "R98", "Breakfast"),
    createItem("Savoury mince & cheese Omelette", "3 egg omelette", "R98", "Breakfast"),

    // French Toast
    createItem("French Toast: Plain", "2 slices of french toast", "R52", "Breakfast", true),
    createItem("French Toast: Bacon, banana & syrup", "2 slices of french toast", "R85", "Breakfast"),
    createItem("French Toast: Grilled mushrooms, onion & cheese", "2 slices of french toast", "R85", "Breakfast", true),

    // Benedicts
    createItem("Eggs Benedict", "Two poached eggs on a bagel with ham / bacon smothered in hollandaise sauce", "R96", "Breakfast"),
    createItem("Spinach Benedict", "Two poached eggs on a bagel with creamed spinach & mushrooms, smothered in hollandaise sauce", "R90", "Breakfast", true),

    // Croissants
    createItem("Plain Croissant", "With butter, jam / marmalade", "R50", "Breakfast", true),
    createItem("Cheese & tomato Croissant", "Freshly baked croissant", "R55", "Breakfast", true),
    createItem("Scrambled eggs, bacon, cheese & tomato Croissant", "Freshly baked croissant", "R90", "Breakfast"),
    createItem("Chicken mayo, bacon & cheese Croissant", "Freshly baked croissant", "R95", "Breakfast"),

    createItem("Yogurt Bowl", "Granola, seasonal fruit & berry coulis", "R85", "Breakfast", true),

    // LIGHT MEALS & LUNCH
    createItem("Focaccia Starter", "Mozzarella, origanum & garlic", "R75", "Light Meals & Lunch", true),
    createItem("Halloumi Starter", "4 Fingers fried & served with sweet chilli sauce", "R75", "Light Meals & Lunch", true),
    createItem("Crumbed Mushrooms", "6-8 mushrooms served with home made tartar sauce", "R75", "Light Meals & Lunch", true),
    createItem("Calamari Starter", "Served in a creamy lemon butter sauce", "R75", "Light Meals & Lunch"),
    createItem("Plain Fries", "Crispy hot chips", "R50", "Light Meals & Lunch", true),
    createItem("Fully Loaded Cheese Fries", "Topped with cheese sauce, bacon bits, spring onion & vienna's", "R75", "Light Meals & Lunch"),
    createItem("Piri-Piri Chicken Livers", "Mild / Hot – served with toast of your choice", "R80", "Light Meals & Lunch", false, true),

    createItem("Greek Salad", "With feta & olives", "R85", "Light Meals & Lunch", true),
    createItem("Grilled Cajun Chicken Salad", "With beetroot & croutons", "R100", "Light Meals & Lunch"),
    createItem("Chicken, Nut & Halloumi Salad", "With spring onion, bacon bits, fried halloumi & nuts", "R120", "Light Meals & Lunch"),

    createItem("Basket: Crumbed chicken strips", "Served with fries and sauce", "R100", "Light Meals & Lunch"),
    createItem("Basket: Chicken strips & wings", "Served with fries and sauce", "R110", "Light Meals & Lunch"),
    createItem("Basket: Chicken wings & ribs", "Served with fries and sauce", "R130", "Light Meals & Lunch"),
    createItem("Basket: Calamari & squid heads", "Served with fries and sauce", "R130", "Light Meals & Lunch"),
    createItem("Basket: Calamari & chicken strips", "Served with fries and sauce", "R130", "Light Meals & Lunch"),
    createItem("Basket: Halloumi and Mushroom", "Served with fries and sauce", "R100", "Light Meals & Lunch", true),

    // Savoury Pancakes
    createItem("Savoury Pancake: Cajun chicken & mushroom", "Folded and filled with a side salad", "R100", "Light Meals & Lunch"),
    createItem("Savoury Pancake: Creamed Spinach, mushrooms & feta", "Folded and filled with a side salad", "R85", "Light Meals & Lunch", true),
    createItem("Savoury Pancake: Savoury mince", "Folded and filled with a side salad", "R95", "Light Meals & Lunch"),

    // Stir-Fry
    createItem("Chicken Stir-Fry", "Vegetables doused with light soya sauce on rice/noodles", "R120", "Light Meals & Lunch"),
    createItem("Beef Stir-Fry", "Vegetables doused with light soya sauce on rice/noodles", "R135", "Light Meals & Lunch"),
    createItem("Vegetable Stir-Fry", "Vegetables doused with light soya sauce on rice/noodles", "R105", "Light Meals & Lunch", true),

    // Wraps
    createItem("Cajun Chicken Wrap", "Filled with lettuce, cucumber, tomato. Served with fries / salad", "R105", "Light Meals & Lunch"),
    createItem("Sweet Chilli Chicken Wrap", "Filled with lettuce, cucumber, tomato. Served with fries / salad", "R115", "Light Meals & Lunch"),
    createItem("Spare-Rib Wrap", "Deboned spare-rib, onion & bbq sauce. Served with fries / salad", "R120", "Light Meals & Lunch"),
    createItem("Crispy Chicken Strips Wrap", "With peppadew & jalapeno mayo. Served with fries / salad", "R105", "Light Meals & Lunch", false, true),

    // Sandwiches
    createItem("Cheese, tomato, mushrooms & onion Sandwich", "Served with fries / side salad", "R70", "Light Meals & Lunch", true),
    createItem("Bacon, egg, cheese & tomato Sandwich", "Served with fries / side salad", "R80", "Light Meals & Lunch"),
    createItem("Chicken mayo Sandwich", "With gherkins / mushrooms", "R80", "Light Meals & Lunch"),
    createItem("Cajun chicken, mozzarella & peppadew Sandwich", "Served with fries / side salad", "R90", "Light Meals & Lunch"),
    createItem("Club Sandwich", "Triple decker with grilled chicken, bacon, tomato & lettuce", "R125", "Light Meals & Lunch"),
    createItem("Dagwood", "Triple decker with beef patty, grilled onion, cheese, bacon & egg", "R125", "Light Meals & Lunch"),
    createItem("Creamed spinach & halloumi Tramezzini", "Served with fries / side salad", "R110", "Light Meals & Lunch", true),
    createItem("Bbq beef strips, onions & mushrooms Tramezzini", "Served with fries / side salad", "R120", "Light Meals & Lunch"),

    createItem("Curry and Rice / Bunny Chow", "Rich flavorful curry served your way", "R110", "Light Meals & Lunch"),

    // GRILLS, PIZZA, PASTA & SEAFOOD
    createItem("Rump Steak 300g", "Served with 1 starch, side salad / veggies", "R180", "Grills, Pizza, Pasta & Seafood"),
    createItem("Fillet Steak 200g", "Served with 1 starch, side salad / veggies", "R185", "Grills, Pizza, Pasta & Seafood"),
    createItem("Pork Spare Ribs 400g", "Served with 1 starch, side salad / veggies", "R175", "Grills, Pizza, Pasta & Seafood"),

    createItem("Beef Burger", "100% beef patty garnished with lettuce, grilled onion, tomato & gherkins", "R110", "Grills, Pizza, Pasta & Seafood"),
    createItem("Bacon & Cheese Burger", "100% beef patty with bacon and cheese", "R130", "Grills, Pizza, Pasta & Seafood"),
    createItem("Saucy Mushrooms & Cheese Burger", "100% beef patty thoroughly smothered", "R135", "Grills, Pizza, Pasta & Seafood"),
    createItem("Chicken Burger", "Chicken fillet served on a sesame seed bun", "R105", "Grills, Pizza, Pasta & Seafood"),
    createItem("Chicken, Bacon & Cheese Burger", "Chicken fillet with crispy bacon and melted cheese", "R130", "Grills, Pizza, Pasta & Seafood"),

    createItem("Cajun Chicken Breast", "Served with starch/salad", "R120", "Grills, Pizza, Pasta & Seafood"),
    createItem("Mediterranean Chicken", "Chicken breast topped with mozzarella, feta & peppadew", "R130", "Grills, Pizza, Pasta & Seafood"),
    createItem("Chicken Schnitzel", "Topped with bacon & Feta", "R135", "Grills, Pizza, Pasta & Seafood"),
    createItem("Cordon Bleu", "Crumbed chicken filled with ham & mozzarella", "R155", "Grills, Pizza, Pasta & Seafood"),

    createItem("Hake", "Grilled or fried fish", "R110", "Grills, Pizza, Pasta & Seafood"),
    createItem("Calamari Tubes", "Served in a creamy lemon butter sauce", "R125", "Grills, Pizza, Pasta & Seafood"),
    createItem("Hake & Calamari Combo", "Fish and calamari combo", "R145", "Grills, Pizza, Pasta & Seafood"),

    createItem("Four Seasons Pizza", "Ham, mushrooms, olives & green pepper", "R115", "Grills, Pizza, Pasta & Seafood"),
    createItem("Bacon & Feta Pizza", "Crispy bacon and creamy feta", "R115", "Grills, Pizza, Pasta & Seafood"),
    createItem("Spare-Rib Pizza", "Deboned marinated spare-rib", "R130", "Grills, Pizza, Pasta & Seafood"),
    createItem("Chicken Supreme Pizza", "Chicken, feta, onion & peppadew", "R125", "Grills, Pizza, Pasta & Seafood"),

    createItem("Alfredo Pasta", "Ham & sliced mushrooms in a creamy white sauce", "R130", "Grills, Pizza, Pasta & Seafood"),
    createItem("Chicken Alfredo Pasta", "Chicken & sliced mushrooms in a creamy white sauce", "R120", "Grills, Pizza, Pasta & Seafood"),
    createItem("Veggie Pasta", "Spinach, feta & olives in a creamy white sauce", "R110", "Grills, Pizza, Pasta & Seafood", true),
    createItem("Spaghetti Bolognese", "Bolognese mince served on spaghetti", "R120", "Grills, Pizza, Pasta & Seafood"),

    createItem("Sunday Carvery", "Eat-in: roast beef, roast potatoes, rice & 3 seasonal vegetables. (Sundays Only)", "R140", "Grills, Pizza, Pasta & Seafood"),

    // DELIGHTFUL PLEASURES
    createItem("Muffin: Blueberry / Carrot & nut", "Served warm with butter and jam", "R45", "Delightful Pleasures", true),
    createItem("Scones", "Served warm, with a choice of jam, marmalade, cheese / cream", "R48", "Delightful Pleasures", true),

    createItem("Waffle: Plain", "Served with syrup, cream / ice cream", "R55", "Delightful Pleasures", true),
    createItem("Waffle: Caramel, Banana & nuts", "Served with cream / ice cream", "R65", "Delightful Pleasures", true),
    createItem("Waffle: Bar-One", "Served with Bar-One sauce", "R65", "Delightful Pleasures", true),

    createItem("Sweet Pancake: Traditional", "Cinnamon & sugar", "R45", "Delightful Pleasures", true),
    createItem("Sweet Pancake: Bar-One sauce", "Smothered in chocolate", "R60", "Delightful Pleasures", true),
    createItem("Sweet Pancake: Caramel, banana & nuts", "Rich & decadent", "R60", "Delightful Pleasures", true),

    createItem("Flapjacks: Plain", "Stack of 3, served with syrup & cream", "R45", "Delightful Pleasures", true),
    createItem("Flapjacks: Fruit & yoghurt", "Stack of 3 flapjacks", "R65", "Delightful Pleasures", true),
    createItem("Flapjacks: Bacon 'n syrup", "Stack of 3 flapjacks", "R75", "Delightful Pleasures"),

    createItem("Cake: Lemon Meringue tart", "Freshly baked", "R65", "Delightful Pleasures", true),
    createItem("Cake: Bar-One / Chocolate Lindt", "Rich chocolate slices", "R65", "Delightful Pleasures", true),
    createItem("Cake: Carrot block", "Freshly baked", "R60", "Delightful Pleasures", true),
    createItem("Cake: Strawberry cheesecake", "Rich and creamy", "R65", "Delightful Pleasures", true),
    createItem("Cake: Baked cheesecake, caramel topping", "Rich and creamy baked dessert", "R70", "Delightful Pleasures", true),

    createItem("Smoothies", "Granadilla, Mango, Strawberry, Mixed Berry, Fruit Cocktail", "R58", "Delightful Pleasures"),
    createItem("Milkshakes", "Vanilla, Chocolate, Strawberry, Bubblegum, Lime, Banana", "R52", "Delightful Pleasures", true),
    createItem("Gourmet Milkshakes", "Milo, Oreo Cookies, Bar-One, Peanut Butter, Spicy Chai, Salted Caramel", "R57", "Delightful Pleasures", true),

    createItem("Ice-cream Sundae: Banana Split", "Ice-cream served on a split banana, topped with cream, sauce & nuts", "R55", "Delightful Pleasures", true),
    createItem("Ice-cream Sundae: Bar-one nut", "Ice-cream topped with cream, bar-one sauce & nuts", "R60", "Delightful Pleasures", true),

    // ALCOHOLIC BEVERAGES
    createItem("Red Wine", "Chapel Sweet Red, Cabernet Sauvignon, Merlot, Shiraz, Pinotage", "R145/bottle", "Alcoholic Beverages"),
    createItem("White Wine", "Sauvignon Blanc, Chennin Blanc, Nederburg Classic Stein", "R140/bottle", "Alcoholic Beverages"),
    createItem("Rose Wine", "Natural Sweet Rose, Light Pinotage Rose", "R145/bottle", "Alcoholic Beverages"),
    createItem("Sparkling Wine", "Brut Sparkling, Sweet White, Sweet Red", "R145/bottle", "Alcoholic Beverages"),
    createItem("House Wine", "Per Glass", "R48", "Alcoholic Beverages"),

    createItem("Beers", "Amstel, Black Label, Castle, Flying Fish, Hansa, Heineken, Windhoek", "R42", "Alcoholic Beverages"),
    createItem("Ciders", "Hunters Dry, Hunters Gold, Redd’s, Savanna Dry/Lemon/Light", "R45", "Alcoholic Beverages"),

    createItem("Spirits & Whiskeys", "Klipdrift, Bacardi, Captain Morgan, Gordon’s Gin, Smirnoff Vodka, Bells, Jameson", "R40", "Alcoholic Beverages"),

    createItem("Cocktails", "Mojito, Long Island Iced Tea, Pina Colada, Cosmopolitan", "R80", "Alcoholic Beverages"),
    createItem("Shooters", "Tequila Gold/Silver, Jagermeister", "R40", "Alcoholic Beverages"),

    createItem("Liqueurs", "Kahlua, Frangelico, Amarula, Cape Velvet, Malibu", "R40", "Alcoholic Beverages"),

    createItem("Speciality Coffees", "Irish Coffee, Kahlua Coffee, Amarula Coffee, Cape Velvet Coffee", "R75", "Alcoholic Beverages"),
];
