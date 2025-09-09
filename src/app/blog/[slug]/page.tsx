import {notFound} from 'next/navigation';
import Image from 'next/image';
import type {Metadata} from 'next';
import {posts, categories} from '@/lib/data';
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';
import {Badge} from '@/components/ui/badge';
import Link from 'next/link';
import {PostSidebar} from '@/components/blog/post-sidebar';
import {SeoOptimizer} from '@/components/blog/seo-optimizer';
import {Breadcrumb} from '@/components/common/breadcrumb';
import {Separator} from '@/components/ui/separator';

type Props = {
  params: {slug: string};
};

export async function generateStaticParams() {
  return posts.map(post => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const post = posts.find(p => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: 'article',
      url: `https://www.jaaga.ai/blog/${post.slug}`,
      images: [
        {
          url: post.featuredImage,
          width: 800,
          height: 450,
          alt: post.title,
        },
      ],
    },
  };
}

export default function BlogPostPage({params}: Props) {
  const post = posts.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const category = categories.find(c => c.slug === post.category);
  const relatedPosts = posts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 2);

  const breadcrumbItems = [
    {label: 'Home', href: '/'},
    {label: 'Blog', href: '/blog'},
    {label: post.title, href: `/blog/${post.slug}`},
  ];
  
  const contentString = React.Children.toArray(post.content.props.children)
    .map(child => {
        if (typeof child === 'string') return child;
        if (React.isValidElement(child) && typeof child.props.children === 'string') {
            return child.props.children;
        }
        return '';
    }).join(' ');

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
        <article className="lg:col-span-2 bg-background p-6 sm:p-8 rounded-xl shadow-md">
          <header className="space-y-4 mb-8">
            <Breadcrumb items={breadcrumbItems} />
            {category && (
              <Link href={`/category/${category.slug}`}>
                <Badge variant="default">{category.name}</Badge>
              </Link>
            )}
            <h1 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
              {post.title}
            </h1>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={post.author.avatar} alt={post.author.name} />
                  <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <span>{post.author.name}</span>
              </div>
              <span>•</span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>
          </header>

          <div className="relative aspect-video rounded-lg overflow-hidden mb-8">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none text-foreground prose-h2:font-headline prose-h2:font-bold prose-h3:font-headline prose-h3:font-bold prose-a:text-primary hover:prose-a:underline">
            {post.content}
          </div>

          <Separator className="my-8" />

          <div className="space-y-2">
            <h3 className="font-headline font-bold text-lg">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          
          <Separator className="my-8" />

          <div>
            <h3 className="font-headline font-bold text-xl mb-4">AI Tools</h3>
            <SeoOptimizer content={contentString} keywords={post.keywords} />
          </div>

        </article>

        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-8">
            <PostSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
