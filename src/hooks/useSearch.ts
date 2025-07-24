// src/hooks/useSearch.ts
"use client";

import { useMemo, useState } from "react";

export function useSearch<T>(items: T[], searchKeys: (keyof T)[]) {
	const [searchTerm, setSearchTerm] = useState("");

	const filteredItems = useMemo(() => {
		const term = searchTerm.toLowerCase();
		if (!term) {
			return items;
		}

		return items.filter((item) => {
			return searchKeys.some((key) => {
				const value = item[key];
				if (typeof value === "string") {
					return value.toLowerCase().includes(term);
				}
				return false;
			});
		});
	}, [items, searchTerm, searchKeys]);

	return { searchTerm, setSearchTerm, filteredItems };
}
