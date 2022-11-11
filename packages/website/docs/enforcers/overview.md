---
title: Caveat Enforcers
sidebar_label: Overview
---

Caveat Enforcers add run-time conditionals to EVM transactions.

**Native EVM transaction** can **NOT** enforce **when/how** the transaction is executed.

When signing a Transaction an Account is NOT able to enforce important run-time rules and conditions:

#### Basic Run-Time Rules missing from native EVM transactions:

- When (`block.timestamp`) the transaction can be executed i.e. before/after/between timestamp(s).
- What block (`block.blockNumber`) the transaction must be included in i.e. before/after/between blockNumber(s).

#### Advanced Run-Time Rules missing from native EVM transactions:

- If the transaction requires other on-chain state conditionals (`oracles`) to be true/false before executing. 
- **SOLUTION**The Delegatable framework's Caveat Enforcers enable nuanced run-time transaction execution rules that unlock these transaction signing **super powers**!


## Enforcers

- [AllowedMethodsEnforcer](/docs/enforcers/AllowedMethodsEnforcer)
- [BlockNumberEnforcerAfter](/docs/enforcers/BlockNumberEnforcerAfter)
- [BlockNumberEnforcerBefore](/docs/enforcers/BlockNumberEnforcerBefore)
- [ERC20AllowanceEnforcer](/docs/enforcers/ERC20AllowanceEnforcer)
- [LimitedCallsEnforcer](/docs/enforcers/LimitedCallsEnforcer)
- [RevocationEnforcer](/docs/enforcers/RevocationEnforcer)
- [TimestampEnforcerAfter](/docs/enforcers/TimestampEnforcerAfter)
- [TimestampEnforcerBefore](/docs/enforcers/TimestampEnforcerBefore)

## Composability

**Enforcers are designed to be composed together**. Possibly even multiple times in the same delegation.

For example a User may choose to use the `TimestampEnforcerBefore` and the `ERC20AllowanceEnforcer` enforcers to give a friend permission to spend up to `100 tokens` for the next `30 days`. 
