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
Order, Category, User, Tag, PetNames, PetIds, PetIdsWithWrongEnum, Pet, ApiResponse, Amount, Currency*/
import { Order } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";
/**
 * 获取 tag的描述
 * routeDocs.lines
 */
export class Store<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Returns a map of status codes to quantities
   *
   * @tags store
   * @name GetInventory
   * @summary Returns pet inventories by status
   * @request GET:/store/inventory
   * @secure
   */
  getInventory = (params: RequestParams = {}) =>
    this.request<Record<string, number>, any>({
      path: `/store/inventory`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags store
   * @name PlaceOrder
   * @summary Place an order for a pet
   * @request POST:/store/order
   */
  placeOrder = (body: Order, params: RequestParams = {}) =>
    this.request<Order, void>({
      path: `/store/order`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions
   *
   * @tags store
   * @name GetOrderById
   * @summary Find purchase order by ID
   * @request GET:/store/order/{orderId}
   */
  getOrderById = (orderId: number, params: RequestParams = {}) =>
    this.request<Order, void>({
      path: `/store/order/${orderId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
   *
   * @tags store
   * @name DeleteOrder
   * @summary Delete purchase order by ID
   * @request DELETE:/store/order/{orderId}
   */
  deleteOrder = (orderId: string, params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/store/order/${orderId}`,
      method: "DELETE",
      ...params,
    });
}
