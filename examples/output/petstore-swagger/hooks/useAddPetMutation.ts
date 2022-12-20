/* This is a sample header */
/* eslint-disable */
// This code is autogenerated using @harnessio/oats-cli.
// Please do not modify this code directly.
import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import type { PetRequestBody } from '../requestBodies/PetRequestBody';
import { fetcher, FetcherOptions } from './fetcher';

export type AddPetRequestBody = PetRequestBody;

export type AddPetOkResponse = unknown;

export type AddPetErrorResponse = unknown;

export interface AddPetProps extends Omit<FetcherOptions<unknown, AddPetRequestBody>, 'url'> {
	body: AddPetRequestBody;
}

export function addPet(props: AddPetProps): Promise<AddPetOkResponse> {
	return fetcher<AddPetOkResponse, unknown, AddPetRequestBody>({
		url: `/pet`,
		method: 'POST',
		...props,
	});
}

export type AddPetMutationProps<T extends keyof AddPetProps> = Omit<AddPetProps, T> &
	Partial<Pick<AddPetProps, T>>;

/**
 *
 */
export function useAddPetMutation<T extends keyof AddPetProps>(
	props: Pick<Partial<AddPetProps>, T>,
	options?: Omit<
		UseMutationOptions<AddPetOkResponse, AddPetErrorResponse, AddPetMutationProps<T>>,
		'mutationKey' | 'mutationFn'
	>,
) {
	return useMutation<AddPetOkResponse, AddPetErrorResponse, AddPetMutationProps<T>>(
		(mutateProps: AddPetMutationProps<T>) => addPet({ ...props, ...mutateProps } as AddPetProps),
		options,
	);
}
