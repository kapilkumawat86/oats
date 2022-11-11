/* eslint-disable no-console */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import swagger2openapi from 'swagger2openapi';
import type { OpenAPIV3 } from 'openapi-types';
import chalk from 'chalk';
import { has } from 'lodash-es';

const DIR_NAME = getDirNameForCurrentFile(import.meta);

// internal function
export function _convertToOpenAPI(schema: unknown): Promise<OpenAPIV3.Document> {
	return new Promise((resolve, reject) => {
		swagger2openapi.convertObj(schema, {}, (err, convertedObj) => {
			if (err) {
				reject(err);
			} else {
				resolve(convertedObj.openapi);
			}
		});
	});
}

// internal function
export function _readTemplate(name: string): string {
	return fs.readFileSync(path.resolve(DIR_NAME, `./templates/${name}`), 'utf8');
}

export function isReferenceObject(data: unknown): data is OpenAPIV3.ReferenceObject {
	return typeof data === 'object' && data !== null && has(data, '$ref');
}

export function logInfo(msg: string): void {
	if (process.env.DEBUG_OATS === 'true') {
		console.log(chalk.cyan(`oa2ts: [INFO]: ${msg}`));
	}
}

export function logWarning(msg: string): void {
	console.log(chalk.yellow(`oa2ts: [WARN]: ${msg}`));
}

export function logError(msg: string): void {
	console.log(chalk.red(`oa2ts: [ERROR]: ${msg}`));
}

export function padChunk(chunk: string, spacing = 6): string {
	return chunk
		.split('\n')
		.map((line) => ' '.repeat(spacing) + line)
		.join('\n');
}

export function getDirNameForCurrentFile(meta: ImportMeta): string {
	return path.dirname(fileURLToPath(meta.url));
}

export function pathToTemplate(val: string): string {
	return val.replace(/\{/g, '${');
}
