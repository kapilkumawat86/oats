/* This is a sample header */
/* eslint-disable */
// This code is autogenerated using @harnessio/oats-cli.
// Please do not modify this code directly.
import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import { fetcher, FetcherOptions } from './fetcher';

export interface DeletePetMutationPathParams {
	/**
	 * @format int64
	 */
	petId: number;
}

export type DeletePetOkResponse = unknown;

export type DeletePetErrorResponse = unknown;

export interface DeletePetProps
	extends DeletePetMutationPathParams,
		Omit<FetcherOptions<unknown, unknown>, 'url'> {}

export function deletePet(props: DeletePetProps): Promise<DeletePetOkResponse> {
	const { petId, ...rest } = props;

	return fetcher<DeletePetOkResponse, unknown, unknown>({
		url: `/pet/${petId}`,
		method: 'DELETE',
		...rest,
	});
}

/**
 *
 */
export function useDeletePetMutation(
	props: DeletePetProps,
	options?: Omit<
		UseMutationOptions<DeletePetOkResponse, DeletePetErrorResponse>,
		'mutationKey' | 'mutationFn'
	>,
) {
	return useMutation<DeletePetOkResponse, DeletePetErrorResponse>(() => deletePet(props), options);
}
