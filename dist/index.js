"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core = require("@actions/core");
const github = require("@actions/github");
async function run() {
    try {
        const { pull_request: pr } = github.context.payload;
        if (!pr) {
            throw new Error('Event payload missing `pull_request`');
        }
        core.info(`total number of commits are: ${pr['commits']}`);
        if (pr['commits'] > 1) {
            core.setFailed(`PRs can only contain a single commit, please squash your commits`);
        }
    }
    catch (error) {
        core.setFailed(error.message);
    }
}
run();
//# sourceMappingURL=index.js.map