export interface OverrideOptions {
	/**
	 * By default, any operation expect "GET",
	 * will generate a mutation hook using `useMutation`.
	 * This option can be used to overide this
	 * behaviour for a given operation ID.
	 *
	 * When set to `true`, no matter what the verb,
	 * query hook will be generated using `useQuery`.
	 */
	useQuery?: boolean;
}

export interface Config {
	/**
	 * Path poiniting to the file where
	 * the custom fetcher resides.
	 *
	 * This path will be used as is, while
	 * generating the hooks.
	 *
	 * This path must be a relative path
	 * which can be resolved with respect
	 * to a file within the hooks folder.
	 */
	customFetcher?: string;
	/**
	 * This can be used to customize the generation
	 * of hooks at individual operation ID level.
	 *
	 * This will be a record/map of operation ID
	 * to the override options.
	 *
	 * See `OverrideOptions` for more details.
	 */
	overrides?: Record<string, OverrideOptions>;
	/**
	 * An allow-list, for filtering out operation IDs
	 * which are to be generated.
	 *
	 * When defined, hooks will be generated only for
	 * the operation IDs defined in this list.
	 */
	allowedOperationIds?: string[];
}
