export const seo = {
  title: '小春 | 开发者、动画师、细节控、创始人',
  description:
    '我叫 小春，一名开发者，动画师，细节控，同时也是黑慕道创始人，目前带领着黑慕道致力于创造一个充满创造力的工作环境，同时希望独立开发出让生活更美好产品。',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://xiaochun.cc'
      : 'http://localhost:3000'
  ),
} as const
