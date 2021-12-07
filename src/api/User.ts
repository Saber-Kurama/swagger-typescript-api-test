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

import http from "@/utils/http";
import { AxiosRequestConfig } from "axios";

/**
 * 获取 tag的描述  routeDocs.lines */
export interface FollowingDelete_ {
  /**
   * @description Name of user.
   */
  username: string;
}
export interface FollowingDetail_ {
  /**
   * @description Name of user.
   */
  username: string;
}
export interface FollowingUpdate_ {
  /**
   * @description Name of user.
   */
  username: string;
}
export interface IssuesList_ {
  /**
 * @description Issues assigned to you / created by you / mentioning you / you're
subscribed to updates for / All issues the authenticated user can see

*/
  filter: "assigned" | "created" | "mentioned" | "subscribed" | "all";
  /**
   * @description
   */
  state: "open" | "closed";
  /**
   * @description String list of comma separated Label names. Example - bug,ui,@high.
   */
  labels: string;
  /**
   * @description
   */
  sort: "created" | "updated" | "comments";
  /**
   * @description
   */
  direction: "asc" | "desc";
  /**
 * @description Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
Only issues updated at or after this time are returned.

*/
  since?: string;
}
export interface KeysDelete_ {
  /**
   * @description ID of key.
   */
  keyId: number;
}
export interface KeysDetail_ {
  /**
   * @description ID of key.
   */
  keyId: number;
}
export interface ReposList_ {
  /**
   * @description
   */
  type?: "all" | "public" | "private" | "forks" | "sources" | "member";
}
export interface StarredList_ {
  /**
   * @description Ignored without 'sort' parameter.
   */
  direction?: string;
  /**
   * @description
   */
  sort?: "created" | "updated";
}
export interface StarredDelete_ {
  /**
   * @description Name of a repository owner.
   */
  owner: string;
  /**
   * @description Name of a repository.
   */
  repo: string;
}
export interface StarredDetail_ {
  /**
   * @description Name of a repository owner.
   */
  owner: string;
  /**
   * @description Name of a repository.
   */
  repo: string;
}
export interface StarredUpdate_ {
  /**
   * @description Name of a repository owner.
   */
  owner: string;
  /**
   * @description Name of a repository.
   */
  repo: string;
}
export interface SubscriptionsDelete_ {
  /**
   * @description Name of the owner.
   */
  owner: string;
  /**
   * @description Name of repository.
   */
  repo: string;
}
export interface SubscriptionsDetail_ {
  /**
   * @description Name of the owner.
   */
  owner: string;
  /**
   * @description Name of repository.
   */
  repo: string;
}
export interface SubscriptionsUpdate_ {
  /**
   * @description Name of the owner.
   */
  owner: string;
  /**
   * @description Name of repository.
   */
  repo: string;
}

export class User {
  /**
   * @description Get the authenticated user.
   *
   * @name UserList
   * @request GET:/user
   */
  userList = (requestParams: AxiosRequestConfig = {}) =>
    http.request<defs.User>({
      url: `/user`,
      method: "GET",
      ...requestParams,
    });
  /**
   * @description Update the authenticated user.
   *
   * @name UserPartialUpdate
   * @request PATCH:/user
   */
  userPartialUpdate = (body: defs.UserUpdate, requestParams: AxiosRequestConfig = {}) =>
    http.request<defs.User>({
      url: `/user`,
      method: "PATCH",
      data: body,
      ...requestParams,
    });
  /**
   * @description Delete email address(es). You can include a single email address or an array of addresses.
   *
   * @name EmailsDelete
   * @request DELETE:/user/emails
   */
  emailsDelete = (body: defs.UserEmails, requestParams: AxiosRequestConfig = {}) =>
    http.request<void>({
      url: `/user/emails`,
      method: "DELETE",
      data: body,
      ...requestParams,
    });
  /**
   * @description List email addresses for a user. In the final version of the API, this method will return an array of hashes with extended information for each email address indicating if the address has been verified and if it's primary email address for GitHub. Until API v3 is finalized, use the application/vnd.github.v3 media type to get other response format.
   *
   * @name EmailsList
   * @request GET:/user/emails
   */
  emailsList = (requestParams: AxiosRequestConfig = {}) =>
    http.request<defs.UserEmails>({
      url: `/user/emails`,
      method: "GET",
      ...requestParams,
    });
  /**
   * @description Add email address(es). You can post a single email address or an array of addresses.
   *
   * @name EmailsCreate
   * @request POST:/user/emails
   */
  emailsCreate = (body: defs.EmailsPost, requestParams: AxiosRequestConfig = {}) =>
    http.request<any>({
      url: `/user/emails`,
      method: "POST",
      data: body,
      ...requestParams,
    });
  /**
   * @description List the authenticated user's followers
   *
   * @name FollowersList
   * @request GET:/user/followers
   */
  followersList = (requestParams: AxiosRequestConfig = {}) =>
    http.request<defs.Users>({
      url: `/user/followers`,
      method: "GET",
      ...requestParams,
    });
  /**
   * @description List who the authenticated user is following.
   *
   * @name FollowingList
   * @request GET:/user/following
   */
  followingList = (requestParams: AxiosRequestConfig = {}) =>
    http.request<defs.Users>({
      url: `/user/following`,
      method: "GET",
      ...requestParams,
    });
  /**
   * @description Unfollow a user. Unfollowing a user requires the user to be logged in and authenticated with basic auth or OAuth with the user:follow scope.
   *
   * @name FollowingDelete
   * @request DELETE:/user/following/{username}
   */
  followingDelete = ({ username }: { username: string } | FollowingDelete_, requestParams: AxiosRequestConfig = {}) =>
    http.request<void>({
      url: `/user/following/${username}`,
      method: "DELETE",
      ...requestParams,
    });
  /**
   * @description Check if you are following a user.
   *
   * @name FollowingDetail
   * @request GET:/user/following/{username}
   */
  followingDetail = ({ username }: { username: string } | FollowingDetail_, requestParams: AxiosRequestConfig = {}) =>
    http.request<void>({
      url: `/user/following/${username}`,
      method: "GET",
      ...requestParams,
    });
  /**
   * @description Follow a user. Following a user requires the user to be logged in and authenticated with basic auth or OAuth with the user:follow scope.
   *
   * @name FollowingUpdate
   * @request PUT:/user/following/{username}
   */
  followingUpdate = ({ username }: { username: string } | FollowingUpdate_, requestParams: AxiosRequestConfig = {}) =>
    http.request<void>({
      url: `/user/following/${username}`,
      method: "PUT",
      ...requestParams,
    });
  /**
   * @description List issues. List all issues across owned and member repositories for the authenticated user.
   *
   * @name IssuesList
   * @request GET:/user/issues
   */
  issuesList = (
    query:
      | {
          filter: "assigned" | "created" | "mentioned" | "subscribed" | "all";
          state: "open" | "closed";
          labels: string;
          sort: "created" | "updated" | "comments";
          direction: "asc" | "desc";
          since?: string;
        }
      | IssuesList_,
    requestParams: AxiosRequestConfig = {},
  ) =>
    http.request<defs.Issues>({
      url: `/user/issues`,
      method: "GET",
      params: query,
      ...requestParams,
    });
  /**
   * @description List your public keys. Lists the current user's keys. Management of public keys via the API requires that you are authenticated through basic auth, or OAuth with the 'user', 'write:public_key' scopes.
   *
   * @name KeysList
   * @request GET:/user/keys
   */
  keysList = (requestParams: AxiosRequestConfig = {}) =>
    http.request<defs.Gitignore>({
      url: `/user/keys`,
      method: "GET",
      ...requestParams,
    });
  /**
   * @description Create a public key.
   *
   * @name KeysCreate
   * @request POST:/user/keys
   */
  keysCreate = (body: defs.UserKeysPost, requestParams: AxiosRequestConfig = {}) =>
    http.request<defs.UserKeysKeyId>({
      url: `/user/keys`,
      method: "POST",
      data: body,
      ...requestParams,
    });
  /**
   * @description Delete a public key. Removes a public key. Requires that you are authenticated via Basic Auth or via OAuth with at least admin:public_key scope.
   *
   * @name KeysDelete
   * @request DELETE:/user/keys/{keyId}
   */
  keysDelete = ({ keyId }: { keyId: number } | KeysDelete_, requestParams: AxiosRequestConfig = {}) =>
    http.request<void>({
      url: `/user/keys/${keyId}`,
      method: "DELETE",
      ...requestParams,
    });
  /**
   * @description Get a single public key.
   *
   * @name KeysDetail
   * @request GET:/user/keys/{keyId}
   */
  keysDetail = ({ keyId }: { keyId: number } | KeysDetail_, requestParams: AxiosRequestConfig = {}) =>
    http.request<defs.UserKeysKeyId>({
      url: `/user/keys/${keyId}`,
      method: "GET",
      ...requestParams,
    });
  /**
   * @description List public and private organizations for the authenticated user.
   *
   * @name OrgsList
   * @request GET:/user/orgs
   */
  orgsList = (requestParams: AxiosRequestConfig = {}) =>
    http.request<defs.Gitignore>({
      url: `/user/orgs`,
      method: "GET",
      ...requestParams,
    });
  /**
   * @description List repositories for the authenticated user. Note that this does not include repositories owned by organizations which the user can access. You can lis user organizations and list organization repositories separately.
   *
   * @name ReposList
   * @request GET:/user/repos
   */
  reposList = (
    query: { type?: "all" | "public" | "private" | "forks" | "sources" | "member" } | ReposList_,
    requestParams: AxiosRequestConfig = {},
  ) =>
    http.request<defs.Repos>({
      url: `/user/repos`,
      method: "GET",
      params: query,
      ...requestParams,
    });
  /**
   * @description Create a new repository for the authenticated user. OAuth users must supply repo scope.
   *
   * @name ReposCreate
   * @request POST:/user/repos
   */
  reposCreate = (body: defs.PostRepo, requestParams: AxiosRequestConfig = {}) =>
    http.request<defs.Repos>({
      url: `/user/repos`,
      method: "POST",
      data: body,
      ...requestParams,
    });
  /**
   * @description List repositories being starred by the authenticated user.
   *
   * @name StarredList
   * @request GET:/user/starred
   */
  starredList = (
    query: { direction?: string; sort?: "created" | "updated" } | StarredList_,
    requestParams: AxiosRequestConfig = {},
  ) =>
    http.request<defs.Gitignore>({
      url: `/user/starred`,
      method: "GET",
      params: query,
      ...requestParams,
    });
  /**
   * @description Unstar a repository
   *
   * @name StarredDelete
   * @request DELETE:/user/starred/{owner}/{repo}
   */
  starredDelete = (
    { owner, repo }: { owner: string; repo: string } | StarredDelete_,
    requestParams: AxiosRequestConfig = {},
  ) =>
    http.request<void>({
      url: `/user/starred/${owner}/${repo}`,
      method: "DELETE",
      ...requestParams,
    });
  /**
   * @description Check if you are starring a repository.
   *
   * @name StarredDetail
   * @request GET:/user/starred/{owner}/{repo}
   */
  starredDetail = (
    { owner, repo }: { owner: string; repo: string } | StarredDetail_,
    requestParams: AxiosRequestConfig = {},
  ) =>
    http.request<void>({
      url: `/user/starred/${owner}/${repo}`,
      method: "GET",
      ...requestParams,
    });
  /**
   * @description Star a repository.
   *
   * @name StarredUpdate
   * @request PUT:/user/starred/{owner}/{repo}
   */
  starredUpdate = (
    { owner, repo }: { owner: string; repo: string } | StarredUpdate_,
    requestParams: AxiosRequestConfig = {},
  ) =>
    http.request<void>({
      url: `/user/starred/${owner}/${repo}`,
      method: "PUT",
      ...requestParams,
    });
  /**
   * @description List repositories being watched by the authenticated user.
   *
   * @name SubscriptionsList
   * @request GET:/user/subscriptions
   */
  subscriptionsList = (requestParams: AxiosRequestConfig = {}) =>
    http.request<defs.Repos>({
      url: `/user/subscriptions`,
      method: "GET",
      ...requestParams,
    });
  /**
   * @description Stop watching a repository
   *
   * @name SubscriptionsDelete
   * @request DELETE:/user/subscriptions/{owner}/{repo}
   * @deprecated
   */
  subscriptionsDelete = (
    { owner, repo }: { owner: string; repo: string } | SubscriptionsDelete_,
    requestParams: AxiosRequestConfig = {},
  ) =>
    http.request<void>({
      url: `/user/subscriptions/${owner}/${repo}`,
      method: "DELETE",
      ...requestParams,
    });
  /**
   * @description Check if you are watching a repository.
   *
   * @name SubscriptionsDetail
   * @request GET:/user/subscriptions/{owner}/{repo}
   * @deprecated
   */
  subscriptionsDetail = (
    { owner, repo }: { owner: string; repo: string } | SubscriptionsDetail_,
    requestParams: AxiosRequestConfig = {},
  ) =>
    http.request<void>({
      url: `/user/subscriptions/${owner}/${repo}`,
      method: "GET",
      ...requestParams,
    });
  /**
   * @description Watch a repository.
   *
   * @name SubscriptionsUpdate
   * @request PUT:/user/subscriptions/{owner}/{repo}
   * @deprecated
   */
  subscriptionsUpdate = (
    { owner, repo }: { owner: string; repo: string } | SubscriptionsUpdate_,
    requestParams: AxiosRequestConfig = {},
  ) =>
    http.request<void>({
      url: `/user/subscriptions/${owner}/${repo}`,
      method: "PUT",
      ...requestParams,
    });
  /**
   * @description List all of the teams across all of the organizations to which the authenticated user belongs. This method requires user or repo scope when authenticating via OAuth.
   *
   * @name TeamsList
   * @request GET:/user/teams
   */
  teamsList = (requestParams: AxiosRequestConfig = {}) =>
    http.request<defs.TeamsList>({
      url: `/user/teams`,
      method: "GET",
      ...requestParams,
    });
}

export default new User();
