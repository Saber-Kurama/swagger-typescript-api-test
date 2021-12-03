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

// 使用自己的模板？
declare namespace defs {
  /**
   * An order for a pets from the pet store
   * @example {"petId":6,"quantity":1,"id":0,"shipDate":"2000-01-23T04:56:07.000+00:00","complete":false,"status":"placed"}
   */
  export interface Order {
    /** @format int64 */
    id?: number;

    /** @format int64 */
    petId?: number;

    /** @format int32 */
    quantity?: number;

    /** @format date-time */
    shipDate?: string;

    /** Order Status */
    status?: "placed" | "approved" | "delivered" | null;
    complete?: boolean;
  }

  /**
   * A category for a pet
   * @example {"name":"name","id":6}
   */
  export interface Category {
    /** @format int64 */
    id?: number;
    name?: string;
  }

  /**
   * A User who is purchasing from the pet store
   * @example {"firstName":"firstName","lastName":"lastName","password":"password","userStatus":6,"phone":"phone","id":0,"email":"email","username":"username"}
   */
  export interface User {
    /** @format int64 */
    id?: number;
    username?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    phone?: string;

    /**
     * User Status
     * @format int32
     */
    userStatus?: number;
  }

  /**
   * A tag for a pet
   * @example {"name":"name","id":1}
   */
  export interface Tag {
    /** @format int64 */
    id?: number;
    name?: string;
  }

  export enum PetNames {
    FluffyHero = "Fluffy Hero",
    PiggyPo = "Piggy Po",
    SwaggerTypescriptApi = "Swagger Typescript Api",
    UPPER_CASE = "UPPER_CASE",
  }

  export type PetIds = 10 | 20 | 30 | 40;

  export type PetIdsWithWrongEnum = 10 | 20 | 30 | 40;

  /**
   * A pet for sale in the pet store
   * @example {"photoUrls":["photoUrls","photoUrls"],"name":"doggie","id":0,"category":{"name":"name","id":6},"tags":[{"name":"name","id":1},{"name":"name","id":1}],"status":"available"}
   */
  export interface Pet {
    /** @format int64 */
    id?: number;

    /** A category for a pet */
    category?: Category;

    /** @example doggie */
    name: string;
    photoUrls: string[];
    tags?: Tag[];

    /** pet status in the store */
    status?: "available" | "pending" | "sold";
  }

  /**
   * Describes the result of uploading an image resource
   * @example {"code":0,"type":"type","message":"message"}
   */
  export interface ApiResponse {
    /** @format int32 */
    code?: number;
    type?: string;
    message?: string;
  }

  /**
   * some description
   */
  export interface Amount {
    /**
     * some description
     *
     * @format double
     * @min 0.01
     * @max 1000000000000000
     */
    value: number;

    /**
     * some description
     *
     */
    currency: Currency;
  }

  /**
   * some description
   * @pattern ^[A-Z]{3,3}$
   */
  export type Currency = string;
}
