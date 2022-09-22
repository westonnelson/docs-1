---
title: Why
sidebar_label: Why
---

When deciding to use a new framework, especially a smart contract one, you always have to ask the question "Why?"

**What problem are you trying to solve?**

The Delegatable framework is designed to overcome a number of challenges with native EVM transactions.

### Problems with EVM native transactions today:

- **Authorization**: Permissions handled on a contact-by-contract basis. Instead of at the protocol or generalized framework level.
- **Ordering**: No expressive and dynamic transaction flows. Transactions must be processed in sequential order.
- **Scalability**: Fine-tuned permissions and delegations generally require on-chain storage.
- **Unbounded**: Access controls are not limited by timestamp, blockNumber or other on-chain conditionals.

# Examples

### Timestamp and/or BlockNumber Constrained Transactions

Uniswap, a very popular decentralized application, includes a blockNumber range enforcer as an input in the `swap()` function.

You might be saying to yourself right about now _**"But why does that matter?"**_

With the Delegatable framework, a decentralized exchange like Uniswap, could use the `BlockNumberEnforcer` or `TimestampEnforcer` caveat-enforcers to constrain transaction execution across time, without also requiring the `blockNumber` and/or `timestamp` ranges as method inputs.

_Why is this important, you might ask?_

First, we have to ask the question "**Why does Uniswap have to enforce transaction AccessControls at all?**" It's actually kind'of odd that Uniswap developers are required to include AccessControl logic in an AutomatedMarketMaker financial primitive when you think about it. Ultimately that's a decision, which should be made independently of which protocol a User is interacting with.
