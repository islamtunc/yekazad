// Bismillahirrahmanirrahim 
// Elhamdulillahi rabbil 'alamin
// Subhanallah,Elhamdulillah, Allahu Ekber
// La ilaha illallah, Muhammadan rasulullah
// Allahumma salli 'ala Muhammadin wa 'ala ali Muhammadin
"use client";

import InfiniteScrollContainer from "@/hemanen/InfiniteScrollContainer";
import Post from "@/hemanen/robotik/Post";
import PostsLoadingSkeleton from "@/hemanen/robotik/PostsLoadingSkeleton";
import kyInstance from "@/pirtukxane/ky";
import { RobotiksPage } from "@/pirtukxane/types";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";

export default function ForYouFeed() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["post-feed", "for-you"],
    queryFn: ({ pageParam }) =>
      kyInstance
        .get(
          "/api/parvekirin/robotik",
          pageParam ? { searchParams: { cursor: pageParam } } : {},
        )
        .json<RobotiksPage>(),
    initialPageParam: null as string | null,
  getNextPageParam: (lastPage) => lastPage.nextCursor,
  });

  const posts = data?.pages.flatMap((page) => (page as any).posts ?? []) || [];

  if (status === "pending") {
    return <PostsLoadingSkeleton />;
  }

  if (status === "success" && !posts.length && !hasNextPage) {
    return (
      <p className="text-center text-muted-foreground">
        Hê kesî tiştek parvenekirî ye
      </p>
    );
  }

  if (status === "error") {
    return (
      <p className="text-center text-destructive">
        Pirsgirek derket 
      </p>
    );
  }

  return (
    <InfiniteScrollContainer
      className="space-y-5"
      onBottomReached={() => hasNextPage && !isFetching && fetchNextPage()}
    >
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      {isFetchingNextPage && <Loader2 className="mx-auto my-3 animate-spin" />}
    </InfiniteScrollContainer>
  );
}
