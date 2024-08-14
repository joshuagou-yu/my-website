import Image from 'next/image'
import Balancer from 'react-wrap-balancer'

import { RichLink } from '~/components/links/RichLink'
import { Container } from '~/components/ui/Container'

import AlipayQR from './alipay-qr.jpg'
import ThankYouLetterScreenshot1 from './Arc aagD26w9@2x.png'
import ThankYouLetterScreenshot2 from './Arc ynleUdHy@2x.png'

const title = 'AMA 一对一咨询'
const description =
  '小春 提供一对一的咨询服务（Ask Me Anything）。我有游戏动画设计、3D动画制作、全栈开发、创业经验、内容创作等经验，可以为你解答相关的问题。'

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
  },
}

export default function AskMeAnythingPage() {
  return (
    <Container className="mt-16 sm:mt-24">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Ask Me Anything / 一对一咨询
        </h1>
        <p className="my-6 text-base text-zinc-600 dark:text-zinc-400">
          <Balancer>{description}</Balancer>
        </p>
      </header>

      <article className="prose dark:prose-invert">
        <h2>咨询内容</h2>
        <p>我可以为你解答以下相关的问题：</p>
        <ul>
          <li>
            <b>游戏动画设计</b>
            ：工作难找，或是寻求职场建议？想提升自己的动画师水平？还是想锐评
            React vs Vue？
          </li>
          <li>
            <b>3D动画制作</b>
            ：想学习3D动画？不知道如何开始？我可以帮你解答。
          </li>
          <li>
            <b>创业经验</b>
            ：我是
            <RichLink href="https://cdhumodor.com" target="_blank">
              黑慕道
            </RichLink>
            的创始人，现在带领着团队为游戏开发者提供美术管线解决方案。
          </li>
          <li>
            <b>其他</b>
            ：我的全栈开发，内容创作，SEO经验等等都可以帮助你解答一些其他的问题。
          </li>
        </ul>

        <h2>定价</h2>
        <p>我的一对一咨询的价格为：</p>
        <ul>
          <li>
            <strong>¥150 - 30分钟</strong>
          </li>
          <li>
            <strong>¥300 - 60分钟</strong>
          </li>
        </ul>

        <p className="flex justify-center md:block md:justify-start">
          <span className="inline-flex flex-col items-center">
            <Image src={AlipayQR} alt="" className="w-44 dark:brightness-90" />
            <span className="mt-1 text-sm font-medium">支付宝二维码</span>
          </span>
        </p>
        <p>
          一旦你完成支付，通过{' '}
          <RichLink
            href="https://cal.com/xiaochun/ask-me-anything"
            target="_blank"
          >
            这个链接
          </RichLink>
          来跟我预约一个合适你的时间。
        </p>

        {/* <h2>感谢信</h2>
        <p>
          下面两个截图摘选自两名 Twitter
          朋友的私信，能够帮助到更多的人一直是我的使命：
        </p>
        <p className="grid items-center gap-4 lg:grid-cols-2">
          <Image
            src={ThankYouLetterScreenshot1}
            alt=""
            className="max-w-full"
          />
          <Image
            src={ThankYouLetterScreenshot2}
            alt=""
            className="max-w-full"
          />
        </p> */}
      </article>
    </Container>
  )
}
