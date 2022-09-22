/**
 * Creating a sidebar enables you to:
 * - create an ordered group of docs
 * - render a sidebar for each doc of that group
 * - provide next/previous navigation.
 *
 * The sidebars can be generated from the filesystem, or explicitly defined here.
 *
 * Create as many sidebars as you want.
 */

module.exports = {
  docs: [
    {
      type: 'category',
      label: '📖 Introduction',
      items: [
        'why',
        'getting-started',
        'security-and-audits',
        // 'what-is-delegatable',
      ],
    },
    {
      type: 'category',
      label: '🧱 How It Works',
      items: [
        'how-it-works/off-chain-signatures',
        'how-it-works/on-chain-execution',
        'how-it-works/access-controls',
        'counterfactual-delegation',
        // 'how-it-works/caveat-enforcers',
        // 'how-it-works/invocations',
        // 'how-it-works/revocations',
      ],
    },
    {
      type: 'category',
      label: '📱 JavaScript',
      items: [
        // 'delegatable-js/installation',
        'delegatable-js/quickstart',
        'delegatable-js/eip712-signing',
        'delegatable-js/delegations',
        'delegatable-js/caveat-enforcers',
        'delegatable-js/invocations',
        'delegatable-js/revocations',
      ],
    },
    {
      type: 'category',
      label: '⛓️ Delegatable.sol',
      items: [
        'delegatable-sol/installation',
        'delegatable-sol/delegations',
        'delegatable-sol/caveat-enforcers',
        'delegatable-sol/invocations',
        'delegatable-sol/revocations',
      ],
    },
    {
      type: 'category',
      label: '🗺️ Guides & Examples',
      items: [
        'guide/erc20-delegatable',
        'guide/token-gated-transactions',
        'guide/time-constrained-transactions',
      ],
    },
    {
      type: 'category',
      label: '📚 Theory & Concepts',
      items: [
        'concept/object-capabilities',
        'concept/web-of-trust',
        'concept/private-state-networks',
      ],
    },
  ],
};
