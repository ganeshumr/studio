'use client';

import {useState} from 'react';
import {posts as initialPosts} from '@/lib/data';
import type {Post} from '@/lib/types';
import {Button} from '@/components/ui/button';
import {Trash2} from 'lucide-react';
import {Card, CardContent} from '@/components/ui/card';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

export function ExistingPosts() {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [postToDelete, setPostToDelete] = useState<Post | null>(null);

  const handleDelete = () => {
    if (postToDelete) {
      setPosts(prevPosts => prevPosts.filter(post => post.id !== postToDelete.id));
      setPostToDelete(null);
    }
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-4">
          {posts.length > 0 ? (
            posts.map(post => (
              <div
                key={post.id}
                className="flex items-center justify-between rounded-lg border p-4"
              >
                <div className="font-medium">{post.title}</div>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => setPostToDelete(post)}
                    >
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Delete Post</span>
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete the blog post
                        "{postToDelete?.title}".
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel onClick={() => setPostToDelete(null)}>
                        Cancel
                      </AlertDialogCancel>
                      <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-12 text-center">
              <h3 className="text-xl font-bold tracking-tight">No posts found</h3>
              <p className="text-sm text-muted-foreground">
                You haven't published any posts yet.
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
