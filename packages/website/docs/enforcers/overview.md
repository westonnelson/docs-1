---
title: Caveat Enforcers
sidebar_label: Overview
---

Caveat Enforcers add run-time conditionals to EVM transactions.

**Native EVM transaction** can **NOT** enforce **when/how** the transaction is executed.

When signing a Transaction an Account is NOT able enforce important run-time rules and conditions:

#### Basic Run-Time Rules missing from native EVM transactions:

- When (`block.timestamp`) the transaction can be executed i.e. before/after/between timestamp(s).
- What block (`block.blockNumber`) the transaction must be included in i.e. before/after/between blockNumber(s).

#### Advanced Run-Time Rules missing from native EVM transactions:

- If the transaction requires other on-chain state conditionals (`oracles`) to be true/false before executing.

## Enforcers

- [AllowedMethodsEnforcer](/docs/enforcers/allowed-methods)
- [BlockNumberEnforcer](/docs/enforcers/blocknumber)
- [ERC20AllowanceEnforcer](/docs/enforcers//erc20-allowance)
- [LimitedCallsEnforcer](/docs/enforcers/limited-calls)
- [TimestampEnforcer](/docs/enforcers/timestamp)

## Composability

**Enforcers are designed to be composed together**. Possibly even multiple times in the same delegation.

For example a User may choose to use the `TimestampEnforcer` and the `ERC20Allowance` enforcers to give a friend permissions to only have permissions to spend `100 tokens` for `30 days` and afterwards any Delegations become invalid.

## Solution

The Delegatable framework's Caveat Enforcers enable nuanced run-time transaction execution rules that unlock these transaction signing **super powers**!

- [AllowedMethodsEnforcer](/docs/enforcers/allowed-methods)
- [BlockNumberEnforcer](/docs/enforcers/blocknumber)
- [ERC20AllowanceEnforcer](/docs/enforcers//erc20-allowance)
- [LimitedCallsEnforcer](/docs/enforcers/limited-calls)
- [TimestampEnforcer](/docs/enforcers/timestamp)
