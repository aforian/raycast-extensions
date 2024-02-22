import { useCachedPromise } from "@raycast/utils";

import * as db from "../lib/db";

export function useBookmarks(groupId?: string) {
  const { data, isLoading, revalidate } = useCachedPromise(
    async (id) => {
      return await db.getBookmarksByGroupId(id);
    },
    [groupId],
  );

  return { data: data?.data, error: data?.error, isLoading, revalidate };
}
