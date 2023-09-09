import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// global state (Model)
import { useGetFeedsQuery } from "@global-state/features/feed/feedApiSlice";

import { getSearchData } from "@lib/searchData";
import useDebounce from "./useDebounce";

// zod schemas
import {
  PartialFeedSchemaProps,
  SectionWithSubSectionSchemaProps,
} from "@models/Feed";

const searchSchema = zod.object({
  search: zod.string().nonempty(),
});

type SearchSchemaProps = zod.infer<typeof searchSchema>;

export default function useSearchController() {
    const { data } = useGetFeedsQuery();
    const [searchResult, setSearchResult] =
      useState<SectionWithSubSectionSchemaProps[]>([]);
  const form = useForm<SearchSchemaProps>({
    resolver: zodResolver(searchSchema),
  });
  const { search } = form.watch();
  const debouncedSearchTerm = useDebounce(search as string, 300);


  useEffect(() => {
    const unsubscribe = () => {
      const result = getSearchData(data as PartialFeedSchemaProps, debouncedSearchTerm as string);
      setSearchResult(result);
    };
    return () => {
      unsubscribe();
    };
  }, [debouncedSearchTerm]);

  return { searchResult, form };
}
