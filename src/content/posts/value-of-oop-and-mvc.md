---
title: "The Value of Thinking in OOP and MVC"
description: "A practical look at why object-oriented thinking and the MVC pattern still matter in 2024."
pubDate: 2024-08-07
tags: ["programming", "oop", "mvc", "architecture", "clean-code"]
---

Every few years someone declares OOP dead. Yet here we are, still passing objects around like they're going out of style. Here's why you should care.

## The Problem With Spaghetti

Remember that project where everything lived in one file? The one where changing a button color required scrolling through 2000 lines of code, only to find three different database calls hiding in what looked like a view file?

We all have that project. I have too. That's the thing about experience - it teaches you things you'd rather not learn.

## Enter OOP

Object-oriented programming isn't about using classes everywhere. It's about thinking in boundaries.

```php
class Order
{
    private array $items = [];
    private Customer $customer;
    
    public function addItem(Product $product, int $quantity): void
    {
        $this->items[] = new OrderItem($product, $quantity);
    }
    
    public function total(): float
    {
        return array_sum(
            array_map(fn($item) => $item->subtotal(), $this->items)
        );
    }
}
```

Notice something? The logic for calculating an order total lives inside the Order class. Not in a controller. Not in some helper function floating in namespace purgatory. Right where it belongs.

This is encapsulation. The data and the behavior that operates on that data are married. They're not going to see other people.

## The MVC Win

MVC gets a bad rap for being old. But here's the thing - separation of concerns is timeless.

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Controller │────▶│    Model    │────▶│    View     │
│  (HTTP logic)│     │(Business    │     │ (Presentation)
│             │◀────│   logic)    │◀────│             │
└─────────────┘     └─────────────┘     └─────────────┘
```

Your controller handles the request. Your model handles the business rules. Your view handles looking pretty. Each piece has one job.

When something breaks, you know exactly where to look.

## The Real Benefits

**Testability** - Want to test your order logic? Create an Order with fake items. No database required. No HTTP requests. Just pure code doing its thing.

**Maintainability** - Need to change how pricing works? It's in one place. Not spread across twelve files hoping you caught them all.

**Collaboration** - Two developers can work on the same codebase without stepping on each other. Their changes live in different classes. Different files. Different concerns.

## The Bottom Line

OOP and MVC aren't perfect. They can be overdone. You can have too many classes, too much abstraction, layers upon layers of indirection.

But when applied thoughtfully, they make your code behave. They make it testable. They make it survivable for the next person who has to maintain it.

And honestly, that's most of what clean code is about. Making life easier for the person who comes after you. Usually that's you, six months from now, wondering what you were thinking.
