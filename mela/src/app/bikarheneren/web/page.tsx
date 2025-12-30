// Bismillahirrahmanirrahim



import PostEditor from "@/hemanen/web/editor/PostEditor";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/hemanen/ui/tabs";

import ForYouFeed from "./ForYouFeed";

import SearchField from "@/hemanen/web/SearchField";
import { Alert } from "react-bootstrap";

export default function Home() {
  return (
    <main className="flex w-full min-w-0 gap-5 p-">
      <div className="w-full min-w-0 space-y-5">

      <Alert variant="success"> Manage Products Page </Alert>
        <Tabs defaultValue="mm">
          <TabsList>
            <TabsTrigger value="for-you">For You</TabsTrigger>
            <TabsTrigger value="mm">New Post</TabsTrigger>

          </TabsList>
          <TabsContent value="for-you">
            <ForYouFeed />
          </TabsContent>
          <TabsContent value="following">

      <SearchField/>
          </TabsContent>
    





        <TabsContent value="mm">

  <PostEditor />

    </TabsContent>
    </Tabs>
      </div>
    </main>
  );
}
