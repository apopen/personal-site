---
title: "Writing Testable Code"
description: "If it's hard to test, it's hard to maintain. Here's how to write code that's easy to verify."
pubDate: 2023-10-12
tags: ["testing", "clean-code", "tdd", "php"]
---

Tests are only as good as the code they're testing. But some code is nearly impossible to test well. Here's how to fix that.

## The Problem

```php
// Hard to test - uses static global
class OrderService
{
    public function process(int $orderId): void
    {
        $order = Order::find($orderId);
        $payment = PaymentGateway::charge($order->total());
        $order->markPaid($payment->id());
        Mail::send($order->customer->email, 'paid');
    }
}
```

Everything is coupled. You can't test this without a database, payment gateway, and mail server. That's not a unit test.

## The Fix: Dependency Injection

```php
// Easy to test
class OrderService
{
    public function __construct(
        private OrderRepository $orders,
        private PaymentGateway $payments,
        private Mailer $mail
    ) {}
    
    public function process(int $orderId): void
    {
        $order = $this->orders->find($orderId);
        $payment = $this->payments->charge($order->total());
        $order->markPaid($payment->id());
        $this->mail->send($order->customer->email, 'paid');
    }
}
```

Now you can pass in mocks. Test the logic without external dependencies.

## Principles

**Inject, don't import** - Pass dependencies in. Don't reach for globals.

**Single responsibility** - Classes that do one thing are easier to test than classes doing everything.

**Interface over concrete** - Depend on abstractions, not implementations. Makes mocking easier.

## The Test

```php
// This is now possible
$mockOrders = Mock::create(OrderRepository::class);
$mockPayments = Mock::create(PaymentGateway::class);
$mockMail = Mock::create(Mailer::class);

$service = new OrderService($mockOrders, $mockPayments, $mockMail);
$service->process(123);

// Verify interactions
$mockPayments->shouldHaveReceived('charge')->with(99.99);
$mockMail->shouldHaveReceived('send');
```

This is the power of testable code. You can verify behavior without setting up the world.

## The Payoff

Testable code is maintainable code. When you can test it, you can change it with confidence. That's worth the upfront effort.
