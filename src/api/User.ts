/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

// 自定义的api
/**
Actor, Asset, AssetPatch, Assets, Assignees, Blob, Blobs, Branch, Branches, CodeFrequencyStats, Comment, CommentBody, Comments, Commit, CommitActivityStats, CommitComment, CommitCommentBody, Commits, CompareCommits, ContentsPath, ContributorsStats, CreateFile, CreateFileBody, DeleteFile, DeleteFileBody, Deployment, DeploymentResp, DeploymentStatuses, DeploymentStatusesCreate, Download, Downloads, EditTeam, EmailsPost, Emojis, Event, Events, Feeds, ForkBody, Forks, Gist, Gists, GitCommit, GitRefPatch, Gitignore, GitignoreLang, HeadBranch, Hook, HookBody, Issue, IssueEvent, IssueEvents, Issues, IssuesComment, IssuesComments, Keys, Label, Labels, Languages, Markdown, Merge, MergePullBody, MergesBody, MergesConflict, MergesSuccessful, Meta, Milestone, MilestoneUpdate, NotificationMarkRead, Notifications, OrgTeamsPost, Organization, OrganizationAsTeamMember, ParticipationStats, PatchGist, PatchOrg, PostGist, PostRepo, PullRequest, PullUpdate, Pulls, PullsComment, PullsCommentPost, PullsComments, PullsPost, PutSubscription, RateLimit, Ref, RefStatus, Refs, RefsBody, Release, ReleaseCreate, Releases, Repo, RepoDeployments, RepoComments, RepoCommit, RepoCommitBody, RepoEdit, Repos, SearchCode, SearchIssues, SearchIssuesByKeyword, SearchRepositories, SearchRepositoriesByKeyword, SearchUserByEmail, SearchUsers, SearchUsersByKeyword, Subscription, SubscriptionBody, Tag, TagBody, Tags, Team, TeamMembership, TeamRepos, Teams, TeamsList, Tree, Trees, User, UserEmails, UserKeysKeyId, UserKeysPost, UserUpdate, Users*/
import http from "@/utils/http";
import { AxiosRequestConfig } from "axios";
import defs from "./data-contracts";

/**
 * 获取 tag的描述
 * routeDocs.lines
 */
export class User {
  /**
   * @description Get the authenticated user.
   *
   * @name UserList
   * @request GET:/user
   */
  userList = (params: AxiosRequestConfig = {}) =>
    http.request<defs.User>({
      url: `/user`,
      method: "GET",
      responseType: "json",
      ...params,
    });
  /**
   * @description Update the authenticated user.
   *
   * @name UserPartialUpdate
   * @request PATCH:/user
   */
  userPartialUpdate = (body: UserUpdate, params: AxiosRequestConfig = {}) =>
    http.request<defs.User>({
      url: `/user`,
      method: "PATCH",
      body: body,
      type: ContentType.Json,
      responseType: "json",
      ...params,
    });
  /**
   * @description Delete email address(es). You can include a single email address or an array of addresses.
   *
   * @name EmailsDelete
   * @request DELETE:/user/emails
   */
  emailsDelete = (body: UserEmails, params: AxiosRequestConfig = {}) =>
    http.request<defs.void>({
      url: `/user/emails`,
      method: "DELETE",
      body: body,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description List email addresses for a user. In the final version of the API, this method will return an array of hashes with extended information for each email address indicating if the address has been verified and if it's primary email address for GitHub. Until API v3 is finalized, use the application/vnd.github.v3 media type to get other response format.
   *
   * @name EmailsList
   * @request GET:/user/emails
   */
  emailsList = (params: AxiosRequestConfig = {}) =>
    http.request<defs.UserEmails>({
      url: `/user/emails`,
      method: "GET",
      ...params,
    });
  /**
   * @description Add email address(es). You can post a single email address or an array of addresses.
   *
   * @name EmailsCreate
   * @request POST:/user/emails
   */
  emailsCreate = (body: EmailsPost, params: AxiosRequestConfig = {}) =>
    http.request<defs.any>({
      url: `/user/emails`,
      method: "POST",
      body: body,
      ...params,
    });
  /**
   * @description List the authenticated user's followers
   *
   * @name FollowersList
   * @request GET:/user/followers
   */
  followersList = (params: AxiosRequestConfig = {}) =>
    http.request<defs.Users>({
      url: `/user/followers`,
      method: "GET",
      responseType: "json",
      ...params,
    });
  /**
   * @description List who the authenticated user is following.
   *
   * @name FollowingList
   * @request GET:/user/following
   */
  followingList = (params: AxiosRequestConfig = {}) =>
    http.request<defs.Users>({
      url: `/user/following`,
      method: "GET",
      responseType: "json",
      ...params,
    });
  /**
   * @description Unfollow a user. Unfollowing a user requires the user to be logged in and authenticated with basic auth or OAuth with the user:follow scope.
   *
   * @name FollowingDelete
   * @request DELETE:/user/following/{username}
   */
  followingDelete = (username: string, params: AxiosRequestConfig = {}) =>
    http.request<defs.void>({
      url: `/user/following/${username}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Check if you are following a user.
   *
   * @name FollowingDetail
   * @request GET:/user/following/{username}
   */
  followingDetail = (username: string, params: AxiosRequestConfig = {}) =>
    http.request<defs.void>({
      url: `/user/following/${username}`,
      method: "GET",
      ...params,
    });
  /**
   * @description Follow a user. Following a user requires the user to be logged in and authenticated with basic auth or OAuth with the user:follow scope.
   *
   * @name FollowingUpdate
   * @request PUT:/user/following/{username}
   */
  followingUpdate = (username: string, params: AxiosRequestConfig = {}) =>
    http.request<defs.void>({
      url: `/user/following/${username}`,
      method: "PUT",
      ...params,
    });
  /**
   * @description List issues. List all issues across owned and member repositories for the authenticated user.
   *
   * @name IssuesList
   * @request GET:/user/issues
   */
  issuesList = (
    query: {
      filter: "assigned" | "created" | "mentioned" | "subscribed" | "all";
      state: "open" | "closed";
      labels: string;
      sort: "created" | "updated" | "comments";
      direction: "asc" | "desc";
      since?: string;
    },
    params: AxiosRequestConfig = {},
  ) =>
    http.request<defs.Issues>({
      url: `/user/issues`,
      method: "GET",
      query: query,
      responseType: "json",
      ...params,
    });
  /**
   * @description List your public keys. Lists the current user's keys. Management of public keys via the API requires that you are authenticated through basic auth, or OAuth with the 'user', 'write:public_key' scopes.
   *
   * @name KeysList
   * @request GET:/user/keys
   */
  keysList = (params: AxiosRequestConfig = {}) =>
    http.request<defs.Gitignore>({
      url: `/user/keys`,
      method: "GET",
      responseType: "json",
      ...params,
    });
  /**
   * @description Create a public key.
   *
   * @name KeysCreate
   * @request POST:/user/keys
   */
  keysCreate = (body: UserKeysPost, params: AxiosRequestConfig = {}) =>
    http.request<defs.UserKeysKeyId>({
      url: `/user/keys`,
      method: "POST",
      body: body,
      responseType: "json",
      ...params,
    });
  /**
   * @description Delete a public key. Removes a public key. Requires that you are authenticated via Basic Auth or via OAuth with at least admin:public_key scope.
   *
   * @name KeysDelete
   * @request DELETE:/user/keys/{keyId}
   */
  keysDelete = (keyId: number, params: AxiosRequestConfig = {}) =>
    http.request<defs.void>({
      url: `/user/keys/${keyId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Get a single public key.
   *
   * @name KeysDetail
   * @request GET:/user/keys/{keyId}
   */
  keysDetail = (keyId: number, params: AxiosRequestConfig = {}) =>
    http.request<defs.UserKeysKeyId>({
      url: `/user/keys/${keyId}`,
      method: "GET",
      responseType: "json",
      ...params,
    });
  /**
   * @description List public and private organizations for the authenticated user.
   *
   * @name OrgsList
   * @request GET:/user/orgs
   */
  orgsList = (params: AxiosRequestConfig = {}) =>
    http.request<defs.Gitignore>({
      url: `/user/orgs`,
      method: "GET",
      responseType: "json",
      ...params,
    });
  /**
   * @description List repositories for the authenticated user. Note that this does not include repositories owned by organizations which the user can access. You can lis user organizations and list organization repositories separately.
   *
   * @name ReposList
   * @request GET:/user/repos
   */
  reposList = (
    query: { type?: "all" | "public" | "private" | "forks" | "sources" | "member" },
    params: AxiosRequestConfig = {},
  ) =>
    http.request<defs.Repos>({
      url: `/user/repos`,
      method: "GET",
      query: query,
      responseType: "json",
      ...params,
    });
  /**
   * @description Create a new repository for the authenticated user. OAuth users must supply repo scope.
   *
   * @name ReposCreate
   * @request POST:/user/repos
   */
  reposCreate = (body: PostRepo, params: AxiosRequestConfig = {}) =>
    http.request<defs.Repos>({
      url: `/user/repos`,
      method: "POST",
      body: body,
      responseType: "json",
      ...params,
    });
  /**
   * @description List repositories being starred by the authenticated user.
   *
   * @name StarredList
   * @request GET:/user/starred
   */
  starredList = (query: { direction?: string; sort?: "created" | "updated" }, params: AxiosRequestConfig = {}) =>
    http.request<defs.Gitignore>({
      url: `/user/starred`,
      method: "GET",
      query: query,
      responseType: "json",
      ...params,
    });
  /**
   * @description Unstar a repository
   *
   * @name StarredDelete
   * @request DELETE:/user/starred/{owner}/{repo}
   */
  starredDelete = (owner: string, repo: string, params: AxiosRequestConfig = {}) =>
    http.request<defs.void>({
      url: `/user/starred/${owner}/${repo}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Check if you are starring a repository.
   *
   * @name StarredDetail
   * @request GET:/user/starred/{owner}/{repo}
   */
  starredDetail = (owner: string, repo: string, params: AxiosRequestConfig = {}) =>
    http.request<defs.void>({
      url: `/user/starred/${owner}/${repo}`,
      method: "GET",
      ...params,
    });
  /**
   * @description Star a repository.
   *
   * @name StarredUpdate
   * @request PUT:/user/starred/{owner}/{repo}
   */
  starredUpdate = (owner: string, repo: string, params: AxiosRequestConfig = {}) =>
    http.request<defs.void>({
      url: `/user/starred/${owner}/${repo}`,
      method: "PUT",
      ...params,
    });
  /**
   * @description List repositories being watched by the authenticated user.
   *
   * @name SubscriptionsList
   * @request GET:/user/subscriptions
   */
  subscriptionsList = (params: AxiosRequestConfig = {}) =>
    http.request<defs.Repos>({
      url: `/user/subscriptions`,
      method: "GET",
      responseType: "json",
      ...params,
    });
  /**
   * @description Stop watching a repository
   *
   * @name SubscriptionsDelete
   * @request DELETE:/user/subscriptions/{owner}/{repo}
   * @deprecated
   */
  subscriptionsDelete = (owner: string, repo: string, params: AxiosRequestConfig = {}) =>
    http.request<defs.void>({
      url: `/user/subscriptions/${owner}/${repo}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Check if you are watching a repository.
   *
   * @name SubscriptionsDetail
   * @request GET:/user/subscriptions/{owner}/{repo}
   * @deprecated
   */
  subscriptionsDetail = (owner: string, repo: string, params: AxiosRequestConfig = {}) =>
    http.request<defs.void>({
      url: `/user/subscriptions/${owner}/${repo}`,
      method: "GET",
      ...params,
    });
  /**
   * @description Watch a repository.
   *
   * @name SubscriptionsUpdate
   * @request PUT:/user/subscriptions/{owner}/{repo}
   * @deprecated
   */
  subscriptionsUpdate = (owner: string, repo: string, params: AxiosRequestConfig = {}) =>
    http.request<defs.void>({
      url: `/user/subscriptions/${owner}/${repo}`,
      method: "PUT",
      ...params,
    });
  /**
   * @description List all of the teams across all of the organizations to which the authenticated user belongs. This method requires user or repo scope when authenticating via OAuth.
   *
   * @name TeamsList
   * @request GET:/user/teams
   */
  teamsList = (params: AxiosRequestConfig = {}) =>
    http.request<defs.TeamsList>({
      url: `/user/teams`,
      method: "GET",
      responseType: "json",
      ...params,
    });
}
