import { type Metadata } from 'next'

import { Projects } from '~/app/(main)/projects/Projects'
import { Container } from '~/components/ui/Container'

const title = '我的项目'
const description =
  '多年来，我一直在做动画相关的事情。2024年开始，我尝试转型做独立开发，这里是一些我觉得还不错的项目，算是我在技术领域中尝试和探索的最好见证。'
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
} satisfies Metadata

export default function ProjectsPage() {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          我的一些产品和项目
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          多年来，我一直在做动画相关的事情。2024年开始，我尝试<b>转型</b>做独立开发，
          有<b>练手</b>的，也有 <b>实战</b>
          的，下面是一些我觉得还不错的项目，算是我在技术领域中尝试和探索的最好见证。
        </p>
      </header>
      <div className="mt-16 sm:mt-20">
        <Projects />
      </div>
    </Container>
  )
}

export const revalidate = 3600
