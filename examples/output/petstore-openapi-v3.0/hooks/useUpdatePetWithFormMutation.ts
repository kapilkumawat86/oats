/* eslint-disable */
// This code is autogenerated using @harnessio/oats-cli.
// Please do not modify this code directly.
import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import { fetcher, FetcherOptions } from './fetcher';

export interface UpdatePetWithFormMutationPathParams {
	/**
	 * @format int64
	 */
	petId: number;
}

export interface UpdatePetWithFormMutationQueryParams {
	name?: string;
	status?: string;
}

export type UpdatePetWithFormOkResponse = unknown;

export type UpdatePetWithFormErrorResponse = unknown;

export interface UpdatePetWithFormProps
	extends UpdatePetWithFormMutationPathParams,
		Omit<FetcherOptions<UpdatePetWithFormMutationQueryParams, unknown>, 'url'> {
	queryParams: UpdatePetWithFormMutationQueryParams;
}

export function updatePetWithForm(
	props: UpdatePetWithFormProps,
): Promise<UpdatePetWithFormOkResponse> {
	return fetcher<UpdatePetWithFormOkResponse, UpdatePetWithFormMutationQueryParams, unknown>({
		url: `/pet/${props.petId}`,
		method: 'POST',
		...props,
	});
}

export type UpdatePetWithFormMutationProps<T extends keyof UpdatePetWithFormProps> = Omit<
	UpdatePetWithFormProps,
	T
> &
	Partial<Pick<UpdatePetWithFormProps, T>>;

/**
 *
 */
export function useUpdatePetWithFormMutation<T extends keyof UpdatePetWithFormProps>(
	props: Pick<Partial<UpdatePetWithFormProps>, T>,
	options?: Omit<
		UseMutationOptions<
			UpdatePetWithFormOkResponse,
			UpdatePetWithFormErrorResponse,
			UpdatePetWithFormMutationProps<T>
		>,
		'mutationKey' | 'mutationFn'
	>,
) {
	return useMutation<
		UpdatePetWithFormOkResponse,
		UpdatePetWithFormErrorResponse,
		UpdatePetWithFormMutationProps<T>
	>(
		(mutateProps: UpdatePetWithFormMutationProps<T>) =>
			updatePetWithForm({ ...props, ...mutateProps } as UpdatePetWithFormProps),
		options,
	);
}
