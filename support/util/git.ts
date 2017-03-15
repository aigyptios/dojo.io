import exec from '../commands/exec';
import { existsSync } from 'fs';
import { join as joinPath } from 'path';
const shell = require('shelljs');

export interface GitUser {
	name: string;
	email: string;
}

export function clone(url: string, targetDirectory: string, user: GitUser = null): Promise<any> {
	const promise = user ? Promise.all([
			setConfig('user.name', user.name, true),
			setConfig('user.email', user.email, true)
		]) : Promise.resolve();
	return promise.then(function () {
		shell.mkdir('-p', targetDirectory);
		return exec(`git clone ${ url } ${ targetDirectory }`)
	});
}

export function config(key: string): Promise<string> {
	return exec(`git config ${ key }`, false)
		.then(useStdout);
}

export function currentBranch() {
	return exec(`git rev-parse --abbrev-ref HEAD`, false)
		.then(useStdout);
}

export function ensureGitRepo(path: string, repoUrl: string) {
	return getRemoteUrl()
		.then(function (url) {
			shell.cd(path);

			if (!existsSync(joinPath(path, '.git'))) {
				throw new Error('Not a git repository');
			}

			if (url !== repoUrl) {
				throw new Error(`expected repo url of ${ repoUrl }. Instead got ${ url }`);
			}
		});
}

export async function fetchTag(dir: string, url: string, version: string) {
	shell.mkdir('-p', dir);
	shell.rm('-rf', dir);

	await clone(url, dir);
	shell.cd(dir);
	await usetag(version);
}

export function getRemoteUrl() {
	return exec(`git config --get remote.origin.url`, false)
		.then(useStdout);
}

export function headRevision() {
	return exec(`git rev-parse HEAD`, false)
		.then(useStdout);
}

export function pull() {
	return exec(`git pull`);
}

export function setConfig(key: string, value: string, global: boolean = false) {
	return exec(`git config ${ global ? '--global ' : '' }${ key } ${ value }`, false);
}

function useStdout(result: { stdout: string }) {
	return result.stdout.trim();
}

export function usetag(version: string) {
	return exec(`git checkout ${ version }`);
}
