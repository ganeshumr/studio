import {BlogEditor} from '@/components/blog/blog-editor';

export default function BlogEditorPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
            <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">
                Blog Post Editor
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                Create and publish a new article for your blog.
            </p>
        </div>
        <BlogEditor />
      </div>
    </div>
  );
}
