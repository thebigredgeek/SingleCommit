import * as core from '@actions/core'
import * as github from '@actions/github'

async function run(): Promise<void> {
  try {
    const { pull_request: pr } = github.context.payload

    if (!pr) {
      throw new Error('Event payload missing `pull_request`')
    }

    core.info(`total number of commits are: ${pr['commits']}`)

    if (pr['commits'] > 1) {
      core.setFailed(
        `PRs can only contain a single commit, please squash your commits`
      )
    }
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()