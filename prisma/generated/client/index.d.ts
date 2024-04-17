
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Make
 * 
 */
export type Make = $Result.DefaultSelection<Prisma.$MakePayload>
/**
 * Model CarModal
 * 
 */
export type CarModal = $Result.DefaultSelection<Prisma.$CarModalPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Rent
 * 
 */
export type Rent = $Result.DefaultSelection<Prisma.$RentPayload>
/**
 * Model Purchase
 * 
 */
export type Purchase = $Result.DefaultSelection<Prisma.$PurchasePayload>
/**
 * Model Watchlist
 * 
 */
export type Watchlist = $Result.DefaultSelection<Prisma.$WatchlistPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Makes
 * const makes = await prisma.make.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Makes
   * const makes = await prisma.make.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.make`: Exposes CRUD operations for the **Make** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Makes
    * const makes = await prisma.make.findMany()
    * ```
    */
  get make(): Prisma.MakeDelegate<ExtArgs>;

  /**
   * `prisma.carModal`: Exposes CRUD operations for the **CarModal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CarModals
    * const carModals = await prisma.carModal.findMany()
    * ```
    */
  get carModal(): Prisma.CarModalDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.rent`: Exposes CRUD operations for the **Rent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rents
    * const rents = await prisma.rent.findMany()
    * ```
    */
  get rent(): Prisma.RentDelegate<ExtArgs>;

  /**
   * `prisma.purchase`: Exposes CRUD operations for the **Purchase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Purchases
    * const purchases = await prisma.purchase.findMany()
    * ```
    */
  get purchase(): Prisma.PurchaseDelegate<ExtArgs>;

  /**
   * `prisma.watchlist`: Exposes CRUD operations for the **Watchlist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Watchlists
    * const watchlists = await prisma.watchlist.findMany()
    * ```
    */
  get watchlist(): Prisma.WatchlistDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.11.0
   * Query Engine version: 473ed3124229e22d881cb7addf559799debae1ab
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Make: 'Make',
    CarModal: 'CarModal',
    User: 'User',
    Rent: 'Rent',
    Purchase: 'Purchase',
    Watchlist: 'Watchlist'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'make' | 'carModal' | 'user' | 'rent' | 'purchase' | 'watchlist'
      txIsolationLevel: never
    },
    model: {
      Make: {
        payload: Prisma.$MakePayload<ExtArgs>
        fields: Prisma.MakeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MakeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MakePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MakeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MakePayload>
          }
          findFirst: {
            args: Prisma.MakeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MakePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MakeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MakePayload>
          }
          findMany: {
            args: Prisma.MakeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MakePayload>[]
          }
          create: {
            args: Prisma.MakeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MakePayload>
          }
          createMany: {
            args: Prisma.MakeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MakeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MakePayload>
          }
          update: {
            args: Prisma.MakeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MakePayload>
          }
          deleteMany: {
            args: Prisma.MakeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MakeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MakeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MakePayload>
          }
          aggregate: {
            args: Prisma.MakeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMake>
          }
          groupBy: {
            args: Prisma.MakeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MakeGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.MakeFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.MakeAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.MakeCountArgs<ExtArgs>,
            result: $Utils.Optional<MakeCountAggregateOutputType> | number
          }
        }
      }
      CarModal: {
        payload: Prisma.$CarModalPayload<ExtArgs>
        fields: Prisma.CarModalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarModalFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarModalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarModalFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarModalPayload>
          }
          findFirst: {
            args: Prisma.CarModalFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarModalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarModalFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarModalPayload>
          }
          findMany: {
            args: Prisma.CarModalFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarModalPayload>[]
          }
          create: {
            args: Prisma.CarModalCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarModalPayload>
          }
          createMany: {
            args: Prisma.CarModalCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CarModalDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarModalPayload>
          }
          update: {
            args: Prisma.CarModalUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarModalPayload>
          }
          deleteMany: {
            args: Prisma.CarModalDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CarModalUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CarModalUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarModalPayload>
          }
          aggregate: {
            args: Prisma.CarModalAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCarModal>
          }
          groupBy: {
            args: Prisma.CarModalGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CarModalGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CarModalFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.CarModalAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.CarModalCountArgs<ExtArgs>,
            result: $Utils.Optional<CarModalCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Rent: {
        payload: Prisma.$RentPayload<ExtArgs>
        fields: Prisma.RentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RentPayload>
          }
          findFirst: {
            args: Prisma.RentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RentPayload>
          }
          findMany: {
            args: Prisma.RentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RentPayload>[]
          }
          create: {
            args: Prisma.RentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RentPayload>
          }
          createMany: {
            args: Prisma.RentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.RentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RentPayload>
          }
          update: {
            args: Prisma.RentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RentPayload>
          }
          deleteMany: {
            args: Prisma.RentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RentPayload>
          }
          aggregate: {
            args: Prisma.RentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRent>
          }
          groupBy: {
            args: Prisma.RentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RentGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.RentFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.RentAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.RentCountArgs<ExtArgs>,
            result: $Utils.Optional<RentCountAggregateOutputType> | number
          }
        }
      }
      Purchase: {
        payload: Prisma.$PurchasePayload<ExtArgs>
        fields: Prisma.PurchaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PurchaseFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PurchaseFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          findFirst: {
            args: Prisma.PurchaseFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PurchaseFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          findMany: {
            args: Prisma.PurchaseFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>[]
          }
          create: {
            args: Prisma.PurchaseCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          createMany: {
            args: Prisma.PurchaseCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PurchaseDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          update: {
            args: Prisma.PurchaseUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          deleteMany: {
            args: Prisma.PurchaseDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PurchaseUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PurchaseUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          aggregate: {
            args: Prisma.PurchaseAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePurchase>
          }
          groupBy: {
            args: Prisma.PurchaseGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PurchaseGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PurchaseFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.PurchaseAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.PurchaseCountArgs<ExtArgs>,
            result: $Utils.Optional<PurchaseCountAggregateOutputType> | number
          }
        }
      }
      Watchlist: {
        payload: Prisma.$WatchlistPayload<ExtArgs>
        fields: Prisma.WatchlistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WatchlistFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WatchlistFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>
          }
          findFirst: {
            args: Prisma.WatchlistFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WatchlistFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>
          }
          findMany: {
            args: Prisma.WatchlistFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>[]
          }
          create: {
            args: Prisma.WatchlistCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>
          }
          createMany: {
            args: Prisma.WatchlistCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.WatchlistDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>
          }
          update: {
            args: Prisma.WatchlistUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>
          }
          deleteMany: {
            args: Prisma.WatchlistDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.WatchlistUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.WatchlistUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>
          }
          aggregate: {
            args: Prisma.WatchlistAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateWatchlist>
          }
          groupBy: {
            args: Prisma.WatchlistGroupByArgs<ExtArgs>,
            result: $Utils.Optional<WatchlistGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.WatchlistFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.WatchlistAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.WatchlistCountArgs<ExtArgs>,
            result: $Utils.Optional<WatchlistCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type MakeCountOutputType
   */

  export type MakeCountOutputType = {
    CarModal: number
  }

  export type MakeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CarModal?: boolean | MakeCountOutputTypeCountCarModalArgs
  }

  // Custom InputTypes

  /**
   * MakeCountOutputType without action
   */
  export type MakeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MakeCountOutputType
     */
    select?: MakeCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * MakeCountOutputType without action
   */
  export type MakeCountOutputTypeCountCarModalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarModalWhereInput
  }



  /**
   * Count Type CarModalCountOutputType
   */

  export type CarModalCountOutputType = {
    Rent: number
    Purchase: number
  }

  export type CarModalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Rent?: boolean | CarModalCountOutputTypeCountRentArgs
    Purchase?: boolean | CarModalCountOutputTypeCountPurchaseArgs
  }

  // Custom InputTypes

  /**
   * CarModalCountOutputType without action
   */
  export type CarModalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarModalCountOutputType
     */
    select?: CarModalCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CarModalCountOutputType without action
   */
  export type CarModalCountOutputTypeCountRentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentWhereInput
  }


  /**
   * CarModalCountOutputType without action
   */
  export type CarModalCountOutputTypeCountPurchaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseWhereInput
  }



  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    purchase: number
    watchlist: number
    CarModal: number
    Rent: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchase?: boolean | UserCountOutputTypeCountPurchaseArgs
    watchlist?: boolean | UserCountOutputTypeCountWatchlistArgs
    CarModal?: boolean | UserCountOutputTypeCountCarModalArgs
    Rent?: boolean | UserCountOutputTypeCountRentArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPurchaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWatchlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchlistWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCarModalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarModalWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentWhereInput
  }



  /**
   * Count Type WatchlistCountOutputType
   */

  export type WatchlistCountOutputType = {
    car: number
  }

  export type WatchlistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | WatchlistCountOutputTypeCountCarArgs
  }

  // Custom InputTypes

  /**
   * WatchlistCountOutputType without action
   */
  export type WatchlistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistCountOutputType
     */
    select?: WatchlistCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * WatchlistCountOutputType without action
   */
  export type WatchlistCountOutputTypeCountCarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarModalWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Make
   */

  export type AggregateMake = {
    _count: MakeCountAggregateOutputType | null
    _min: MakeMinAggregateOutputType | null
    _max: MakeMaxAggregateOutputType | null
  }

  export type MakeMinAggregateOutputType = {
    id: string | null
    brandname: string | null
    brandimage: string | null
  }

  export type MakeMaxAggregateOutputType = {
    id: string | null
    brandname: string | null
    brandimage: string | null
  }

  export type MakeCountAggregateOutputType = {
    id: number
    brandname: number
    brandimage: number
    _all: number
  }


  export type MakeMinAggregateInputType = {
    id?: true
    brandname?: true
    brandimage?: true
  }

  export type MakeMaxAggregateInputType = {
    id?: true
    brandname?: true
    brandimage?: true
  }

  export type MakeCountAggregateInputType = {
    id?: true
    brandname?: true
    brandimage?: true
    _all?: true
  }

  export type MakeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Make to aggregate.
     */
    where?: MakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Makes to fetch.
     */
    orderBy?: MakeOrderByWithRelationInput | MakeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Makes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Makes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Makes
    **/
    _count?: true | MakeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MakeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MakeMaxAggregateInputType
  }

  export type GetMakeAggregateType<T extends MakeAggregateArgs> = {
        [P in keyof T & keyof AggregateMake]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMake[P]>
      : GetScalarType<T[P], AggregateMake[P]>
  }




  export type MakeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MakeWhereInput
    orderBy?: MakeOrderByWithAggregationInput | MakeOrderByWithAggregationInput[]
    by: MakeScalarFieldEnum[] | MakeScalarFieldEnum
    having?: MakeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MakeCountAggregateInputType | true
    _min?: MakeMinAggregateInputType
    _max?: MakeMaxAggregateInputType
  }

  export type MakeGroupByOutputType = {
    id: string
    brandname: string | null
    brandimage: string | null
    _count: MakeCountAggregateOutputType | null
    _min: MakeMinAggregateOutputType | null
    _max: MakeMaxAggregateOutputType | null
  }

  type GetMakeGroupByPayload<T extends MakeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MakeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MakeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MakeGroupByOutputType[P]>
            : GetScalarType<T[P], MakeGroupByOutputType[P]>
        }
      >
    >


  export type MakeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brandname?: boolean
    brandimage?: boolean
    CarModal?: boolean | Make$CarModalArgs<ExtArgs>
    _count?: boolean | MakeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["make"]>

  export type MakeSelectScalar = {
    id?: boolean
    brandname?: boolean
    brandimage?: boolean
  }

  export type MakeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CarModal?: boolean | Make$CarModalArgs<ExtArgs>
    _count?: boolean | MakeCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $MakePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Make"
    objects: {
      CarModal: Prisma.$CarModalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      brandname: string | null
      brandimage: string | null
    }, ExtArgs["result"]["make"]>
    composites: {}
  }


  type MakeGetPayload<S extends boolean | null | undefined | MakeDefaultArgs> = $Result.GetResult<Prisma.$MakePayload, S>

  type MakeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MakeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MakeCountAggregateInputType | true
    }

  export interface MakeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Make'], meta: { name: 'Make' } }
    /**
     * Find zero or one Make that matches the filter.
     * @param {MakeFindUniqueArgs} args - Arguments to find a Make
     * @example
     * // Get one Make
     * const make = await prisma.make.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MakeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MakeFindUniqueArgs<ExtArgs>>
    ): Prisma__MakeClient<$Result.GetResult<Prisma.$MakePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Make that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MakeFindUniqueOrThrowArgs} args - Arguments to find a Make
     * @example
     * // Get one Make
     * const make = await prisma.make.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MakeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MakeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MakeClient<$Result.GetResult<Prisma.$MakePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Make that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MakeFindFirstArgs} args - Arguments to find a Make
     * @example
     * // Get one Make
     * const make = await prisma.make.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MakeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MakeFindFirstArgs<ExtArgs>>
    ): Prisma__MakeClient<$Result.GetResult<Prisma.$MakePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Make that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MakeFindFirstOrThrowArgs} args - Arguments to find a Make
     * @example
     * // Get one Make
     * const make = await prisma.make.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MakeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MakeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MakeClient<$Result.GetResult<Prisma.$MakePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Makes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MakeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Makes
     * const makes = await prisma.make.findMany()
     * 
     * // Get first 10 Makes
     * const makes = await prisma.make.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const makeWithIdOnly = await prisma.make.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MakeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MakeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MakePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Make.
     * @param {MakeCreateArgs} args - Arguments to create a Make.
     * @example
     * // Create one Make
     * const Make = await prisma.make.create({
     *   data: {
     *     // ... data to create a Make
     *   }
     * })
     * 
    **/
    create<T extends MakeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MakeCreateArgs<ExtArgs>>
    ): Prisma__MakeClient<$Result.GetResult<Prisma.$MakePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Makes.
     *     @param {MakeCreateManyArgs} args - Arguments to create many Makes.
     *     @example
     *     // Create many Makes
     *     const make = await prisma.make.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MakeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MakeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Make.
     * @param {MakeDeleteArgs} args - Arguments to delete one Make.
     * @example
     * // Delete one Make
     * const Make = await prisma.make.delete({
     *   where: {
     *     // ... filter to delete one Make
     *   }
     * })
     * 
    **/
    delete<T extends MakeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MakeDeleteArgs<ExtArgs>>
    ): Prisma__MakeClient<$Result.GetResult<Prisma.$MakePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Make.
     * @param {MakeUpdateArgs} args - Arguments to update one Make.
     * @example
     * // Update one Make
     * const make = await prisma.make.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MakeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MakeUpdateArgs<ExtArgs>>
    ): Prisma__MakeClient<$Result.GetResult<Prisma.$MakePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Makes.
     * @param {MakeDeleteManyArgs} args - Arguments to filter Makes to delete.
     * @example
     * // Delete a few Makes
     * const { count } = await prisma.make.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MakeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MakeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Makes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MakeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Makes
     * const make = await prisma.make.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MakeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MakeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Make.
     * @param {MakeUpsertArgs} args - Arguments to update or create a Make.
     * @example
     * // Update or create a Make
     * const make = await prisma.make.upsert({
     *   create: {
     *     // ... data to create a Make
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Make we want to update
     *   }
     * })
    **/
    upsert<T extends MakeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MakeUpsertArgs<ExtArgs>>
    ): Prisma__MakeClient<$Result.GetResult<Prisma.$MakePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Makes that matches the filter.
     * @param {MakeFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const make = await prisma.make.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: MakeFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Make.
     * @param {MakeAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const make = await prisma.make.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: MakeAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Makes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MakeCountArgs} args - Arguments to filter Makes to count.
     * @example
     * // Count the number of Makes
     * const count = await prisma.make.count({
     *   where: {
     *     // ... the filter for the Makes we want to count
     *   }
     * })
    **/
    count<T extends MakeCountArgs>(
      args?: Subset<T, MakeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MakeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Make.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MakeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MakeAggregateArgs>(args: Subset<T, MakeAggregateArgs>): Prisma.PrismaPromise<GetMakeAggregateType<T>>

    /**
     * Group by Make.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MakeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MakeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MakeGroupByArgs['orderBy'] }
        : { orderBy?: MakeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MakeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMakeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Make model
   */
  readonly fields: MakeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Make.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MakeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    CarModal<T extends Make$CarModalArgs<ExtArgs> = {}>(args?: Subset<T, Make$CarModalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarModalPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Make model
   */ 
  interface MakeFieldRefs {
    readonly id: FieldRef<"Make", 'String'>
    readonly brandname: FieldRef<"Make", 'String'>
    readonly brandimage: FieldRef<"Make", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Make findUnique
   */
  export type MakeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Make
     */
    select?: MakeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MakeInclude<ExtArgs> | null
    /**
     * Filter, which Make to fetch.
     */
    where: MakeWhereUniqueInput
  }


  /**
   * Make findUniqueOrThrow
   */
  export type MakeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Make
     */
    select?: MakeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MakeInclude<ExtArgs> | null
    /**
     * Filter, which Make to fetch.
     */
    where: MakeWhereUniqueInput
  }


  /**
   * Make findFirst
   */
  export type MakeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Make
     */
    select?: MakeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MakeInclude<ExtArgs> | null
    /**
     * Filter, which Make to fetch.
     */
    where?: MakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Makes to fetch.
     */
    orderBy?: MakeOrderByWithRelationInput | MakeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Makes.
     */
    cursor?: MakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Makes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Makes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Makes.
     */
    distinct?: MakeScalarFieldEnum | MakeScalarFieldEnum[]
  }


  /**
   * Make findFirstOrThrow
   */
  export type MakeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Make
     */
    select?: MakeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MakeInclude<ExtArgs> | null
    /**
     * Filter, which Make to fetch.
     */
    where?: MakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Makes to fetch.
     */
    orderBy?: MakeOrderByWithRelationInput | MakeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Makes.
     */
    cursor?: MakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Makes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Makes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Makes.
     */
    distinct?: MakeScalarFieldEnum | MakeScalarFieldEnum[]
  }


  /**
   * Make findMany
   */
  export type MakeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Make
     */
    select?: MakeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MakeInclude<ExtArgs> | null
    /**
     * Filter, which Makes to fetch.
     */
    where?: MakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Makes to fetch.
     */
    orderBy?: MakeOrderByWithRelationInput | MakeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Makes.
     */
    cursor?: MakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Makes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Makes.
     */
    skip?: number
    distinct?: MakeScalarFieldEnum | MakeScalarFieldEnum[]
  }


  /**
   * Make create
   */
  export type MakeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Make
     */
    select?: MakeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MakeInclude<ExtArgs> | null
    /**
     * The data needed to create a Make.
     */
    data?: XOR<MakeCreateInput, MakeUncheckedCreateInput>
  }


  /**
   * Make createMany
   */
  export type MakeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Makes.
     */
    data: MakeCreateManyInput | MakeCreateManyInput[]
  }


  /**
   * Make update
   */
  export type MakeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Make
     */
    select?: MakeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MakeInclude<ExtArgs> | null
    /**
     * The data needed to update a Make.
     */
    data: XOR<MakeUpdateInput, MakeUncheckedUpdateInput>
    /**
     * Choose, which Make to update.
     */
    where: MakeWhereUniqueInput
  }


  /**
   * Make updateMany
   */
  export type MakeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Makes.
     */
    data: XOR<MakeUpdateManyMutationInput, MakeUncheckedUpdateManyInput>
    /**
     * Filter which Makes to update
     */
    where?: MakeWhereInput
  }


  /**
   * Make upsert
   */
  export type MakeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Make
     */
    select?: MakeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MakeInclude<ExtArgs> | null
    /**
     * The filter to search for the Make to update in case it exists.
     */
    where: MakeWhereUniqueInput
    /**
     * In case the Make found by the `where` argument doesn't exist, create a new Make with this data.
     */
    create: XOR<MakeCreateInput, MakeUncheckedCreateInput>
    /**
     * In case the Make was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MakeUpdateInput, MakeUncheckedUpdateInput>
  }


  /**
   * Make delete
   */
  export type MakeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Make
     */
    select?: MakeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MakeInclude<ExtArgs> | null
    /**
     * Filter which Make to delete.
     */
    where: MakeWhereUniqueInput
  }


  /**
   * Make deleteMany
   */
  export type MakeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Makes to delete
     */
    where?: MakeWhereInput
  }


  /**
   * Make findRaw
   */
  export type MakeFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Make aggregateRaw
   */
  export type MakeAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Make.CarModal
   */
  export type Make$CarModalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarModal
     */
    select?: CarModalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarModalInclude<ExtArgs> | null
    where?: CarModalWhereInput
    orderBy?: CarModalOrderByWithRelationInput | CarModalOrderByWithRelationInput[]
    cursor?: CarModalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarModalScalarFieldEnum | CarModalScalarFieldEnum[]
  }


  /**
   * Make without action
   */
  export type MakeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Make
     */
    select?: MakeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MakeInclude<ExtArgs> | null
  }



  /**
   * Model CarModal
   */

  export type AggregateCarModal = {
    _count: CarModalCountAggregateOutputType | null
    _avg: CarModalAvgAggregateOutputType | null
    _sum: CarModalSumAggregateOutputType | null
    _min: CarModalMinAggregateOutputType | null
    _max: CarModalMaxAggregateOutputType | null
  }

  export type CarModalAvgAggregateOutputType = {
    seating: number | null
    driven: number | null
    price: number | null
  }

  export type CarModalSumAggregateOutputType = {
    seating: number | null
    driven: bigint | null
    price: bigint | null
  }

  export type CarModalMinAggregateOutputType = {
    id: string | null
    Modal: string | null
    brandId: string | null
    engine: string | null
    fuel: string | null
    year: string | null
    submodal: string | null
    transmission: string | null
    seating: number | null
    coverimg: string | null
    frontimg: string | null
    sideimg: string | null
    backimg: string | null
    driven: bigint | null
    drivetrain: string | null
    mileage: string | null
    price: bigint | null
    Body: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userid: string | null
    rating: string | null
    verify: boolean | null
    Availablecity: string | null
    des: string | null
    Vehicleno: string | null
    RentorSell: string | null
    watchlistId: string | null
  }

  export type CarModalMaxAggregateOutputType = {
    id: string | null
    Modal: string | null
    brandId: string | null
    engine: string | null
    fuel: string | null
    year: string | null
    submodal: string | null
    transmission: string | null
    seating: number | null
    coverimg: string | null
    frontimg: string | null
    sideimg: string | null
    backimg: string | null
    driven: bigint | null
    drivetrain: string | null
    mileage: string | null
    price: bigint | null
    Body: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userid: string | null
    rating: string | null
    verify: boolean | null
    Availablecity: string | null
    des: string | null
    Vehicleno: string | null
    RentorSell: string | null
    watchlistId: string | null
  }

  export type CarModalCountAggregateOutputType = {
    id: number
    Modal: number
    brandId: number
    engine: number
    fuel: number
    year: number
    submodal: number
    transmission: number
    seating: number
    coverimg: number
    frontimg: number
    sideimg: number
    backimg: number
    driven: number
    drivetrain: number
    mileage: number
    price: number
    Body: number
    createdAt: number
    updatedAt: number
    userid: number
    rating: number
    verify: number
    Availablecity: number
    des: number
    Vehicleno: number
    RentorSell: number
    watchlistId: number
    _all: number
  }


  export type CarModalAvgAggregateInputType = {
    seating?: true
    driven?: true
    price?: true
  }

  export type CarModalSumAggregateInputType = {
    seating?: true
    driven?: true
    price?: true
  }

  export type CarModalMinAggregateInputType = {
    id?: true
    Modal?: true
    brandId?: true
    engine?: true
    fuel?: true
    year?: true
    submodal?: true
    transmission?: true
    seating?: true
    coverimg?: true
    frontimg?: true
    sideimg?: true
    backimg?: true
    driven?: true
    drivetrain?: true
    mileage?: true
    price?: true
    Body?: true
    createdAt?: true
    updatedAt?: true
    userid?: true
    rating?: true
    verify?: true
    Availablecity?: true
    des?: true
    Vehicleno?: true
    RentorSell?: true
    watchlistId?: true
  }

  export type CarModalMaxAggregateInputType = {
    id?: true
    Modal?: true
    brandId?: true
    engine?: true
    fuel?: true
    year?: true
    submodal?: true
    transmission?: true
    seating?: true
    coverimg?: true
    frontimg?: true
    sideimg?: true
    backimg?: true
    driven?: true
    drivetrain?: true
    mileage?: true
    price?: true
    Body?: true
    createdAt?: true
    updatedAt?: true
    userid?: true
    rating?: true
    verify?: true
    Availablecity?: true
    des?: true
    Vehicleno?: true
    RentorSell?: true
    watchlistId?: true
  }

  export type CarModalCountAggregateInputType = {
    id?: true
    Modal?: true
    brandId?: true
    engine?: true
    fuel?: true
    year?: true
    submodal?: true
    transmission?: true
    seating?: true
    coverimg?: true
    frontimg?: true
    sideimg?: true
    backimg?: true
    driven?: true
    drivetrain?: true
    mileage?: true
    price?: true
    Body?: true
    createdAt?: true
    updatedAt?: true
    userid?: true
    rating?: true
    verify?: true
    Availablecity?: true
    des?: true
    Vehicleno?: true
    RentorSell?: true
    watchlistId?: true
    _all?: true
  }

  export type CarModalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CarModal to aggregate.
     */
    where?: CarModalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarModals to fetch.
     */
    orderBy?: CarModalOrderByWithRelationInput | CarModalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarModalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarModals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarModals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CarModals
    **/
    _count?: true | CarModalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarModalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarModalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarModalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarModalMaxAggregateInputType
  }

  export type GetCarModalAggregateType<T extends CarModalAggregateArgs> = {
        [P in keyof T & keyof AggregateCarModal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarModal[P]>
      : GetScalarType<T[P], AggregateCarModal[P]>
  }




  export type CarModalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarModalWhereInput
    orderBy?: CarModalOrderByWithAggregationInput | CarModalOrderByWithAggregationInput[]
    by: CarModalScalarFieldEnum[] | CarModalScalarFieldEnum
    having?: CarModalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarModalCountAggregateInputType | true
    _avg?: CarModalAvgAggregateInputType
    _sum?: CarModalSumAggregateInputType
    _min?: CarModalMinAggregateInputType
    _max?: CarModalMaxAggregateInputType
  }

  export type CarModalGroupByOutputType = {
    id: string
    Modal: string
    brandId: string
    engine: string
    fuel: string
    year: string
    submodal: string
    transmission: string
    seating: number
    coverimg: string
    frontimg: string
    sideimg: string
    backimg: string
    driven: bigint
    drivetrain: string
    mileage: string
    price: bigint
    Body: string
    createdAt: Date
    updatedAt: Date
    userid: string
    rating: string | null
    verify: boolean | null
    Availablecity: string
    des: string
    Vehicleno: string
    RentorSell: string
    watchlistId: string | null
    _count: CarModalCountAggregateOutputType | null
    _avg: CarModalAvgAggregateOutputType | null
    _sum: CarModalSumAggregateOutputType | null
    _min: CarModalMinAggregateOutputType | null
    _max: CarModalMaxAggregateOutputType | null
  }

  type GetCarModalGroupByPayload<T extends CarModalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarModalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarModalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarModalGroupByOutputType[P]>
            : GetScalarType<T[P], CarModalGroupByOutputType[P]>
        }
      >
    >


  export type CarModalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Modal?: boolean
    brandId?: boolean
    engine?: boolean
    fuel?: boolean
    year?: boolean
    submodal?: boolean
    transmission?: boolean
    seating?: boolean
    coverimg?: boolean
    frontimg?: boolean
    sideimg?: boolean
    backimg?: boolean
    driven?: boolean
    drivetrain?: boolean
    mileage?: boolean
    price?: boolean
    Body?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userid?: boolean
    rating?: boolean
    verify?: boolean
    Availablecity?: boolean
    des?: boolean
    Vehicleno?: boolean
    RentorSell?: boolean
    watchlistId?: boolean
    brand?: boolean | MakeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    Watchlist?: boolean | CarModal$WatchlistArgs<ExtArgs>
    Rent?: boolean | CarModal$RentArgs<ExtArgs>
    Purchase?: boolean | CarModal$PurchaseArgs<ExtArgs>
    _count?: boolean | CarModalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carModal"]>

  export type CarModalSelectScalar = {
    id?: boolean
    Modal?: boolean
    brandId?: boolean
    engine?: boolean
    fuel?: boolean
    year?: boolean
    submodal?: boolean
    transmission?: boolean
    seating?: boolean
    coverimg?: boolean
    frontimg?: boolean
    sideimg?: boolean
    backimg?: boolean
    driven?: boolean
    drivetrain?: boolean
    mileage?: boolean
    price?: boolean
    Body?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userid?: boolean
    rating?: boolean
    verify?: boolean
    Availablecity?: boolean
    des?: boolean
    Vehicleno?: boolean
    RentorSell?: boolean
    watchlistId?: boolean
  }

  export type CarModalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brand?: boolean | MakeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    Watchlist?: boolean | CarModal$WatchlistArgs<ExtArgs>
    Rent?: boolean | CarModal$RentArgs<ExtArgs>
    Purchase?: boolean | CarModal$PurchaseArgs<ExtArgs>
    _count?: boolean | CarModalCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CarModalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CarModal"
    objects: {
      brand: Prisma.$MakePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      Watchlist: Prisma.$WatchlistPayload<ExtArgs> | null
      Rent: Prisma.$RentPayload<ExtArgs>[]
      Purchase: Prisma.$PurchasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      Modal: string
      brandId: string
      engine: string
      fuel: string
      year: string
      submodal: string
      transmission: string
      seating: number
      coverimg: string
      frontimg: string
      sideimg: string
      backimg: string
      driven: bigint
      drivetrain: string
      mileage: string
      price: bigint
      Body: string
      createdAt: Date
      updatedAt: Date
      userid: string
      rating: string | null
      verify: boolean | null
      Availablecity: string
      des: string
      Vehicleno: string
      RentorSell: string
      watchlistId: string | null
    }, ExtArgs["result"]["carModal"]>
    composites: {}
  }


  type CarModalGetPayload<S extends boolean | null | undefined | CarModalDefaultArgs> = $Result.GetResult<Prisma.$CarModalPayload, S>

  type CarModalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CarModalFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CarModalCountAggregateInputType | true
    }

  export interface CarModalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CarModal'], meta: { name: 'CarModal' } }
    /**
     * Find zero or one CarModal that matches the filter.
     * @param {CarModalFindUniqueArgs} args - Arguments to find a CarModal
     * @example
     * // Get one CarModal
     * const carModal = await prisma.carModal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CarModalFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CarModalFindUniqueArgs<ExtArgs>>
    ): Prisma__CarModalClient<$Result.GetResult<Prisma.$CarModalPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one CarModal that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CarModalFindUniqueOrThrowArgs} args - Arguments to find a CarModal
     * @example
     * // Get one CarModal
     * const carModal = await prisma.carModal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CarModalFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CarModalFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CarModalClient<$Result.GetResult<Prisma.$CarModalPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first CarModal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarModalFindFirstArgs} args - Arguments to find a CarModal
     * @example
     * // Get one CarModal
     * const carModal = await prisma.carModal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CarModalFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CarModalFindFirstArgs<ExtArgs>>
    ): Prisma__CarModalClient<$Result.GetResult<Prisma.$CarModalPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first CarModal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarModalFindFirstOrThrowArgs} args - Arguments to find a CarModal
     * @example
     * // Get one CarModal
     * const carModal = await prisma.carModal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CarModalFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CarModalFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CarModalClient<$Result.GetResult<Prisma.$CarModalPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more CarModals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarModalFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CarModals
     * const carModals = await prisma.carModal.findMany()
     * 
     * // Get first 10 CarModals
     * const carModals = await prisma.carModal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carModalWithIdOnly = await prisma.carModal.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CarModalFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CarModalFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarModalPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a CarModal.
     * @param {CarModalCreateArgs} args - Arguments to create a CarModal.
     * @example
     * // Create one CarModal
     * const CarModal = await prisma.carModal.create({
     *   data: {
     *     // ... data to create a CarModal
     *   }
     * })
     * 
    **/
    create<T extends CarModalCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CarModalCreateArgs<ExtArgs>>
    ): Prisma__CarModalClient<$Result.GetResult<Prisma.$CarModalPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many CarModals.
     *     @param {CarModalCreateManyArgs} args - Arguments to create many CarModals.
     *     @example
     *     // Create many CarModals
     *     const carModal = await prisma.carModal.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CarModalCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CarModalCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CarModal.
     * @param {CarModalDeleteArgs} args - Arguments to delete one CarModal.
     * @example
     * // Delete one CarModal
     * const CarModal = await prisma.carModal.delete({
     *   where: {
     *     // ... filter to delete one CarModal
     *   }
     * })
     * 
    **/
    delete<T extends CarModalDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CarModalDeleteArgs<ExtArgs>>
    ): Prisma__CarModalClient<$Result.GetResult<Prisma.$CarModalPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one CarModal.
     * @param {CarModalUpdateArgs} args - Arguments to update one CarModal.
     * @example
     * // Update one CarModal
     * const carModal = await prisma.carModal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CarModalUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CarModalUpdateArgs<ExtArgs>>
    ): Prisma__CarModalClient<$Result.GetResult<Prisma.$CarModalPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more CarModals.
     * @param {CarModalDeleteManyArgs} args - Arguments to filter CarModals to delete.
     * @example
     * // Delete a few CarModals
     * const { count } = await prisma.carModal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CarModalDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CarModalDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CarModals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarModalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CarModals
     * const carModal = await prisma.carModal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CarModalUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CarModalUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CarModal.
     * @param {CarModalUpsertArgs} args - Arguments to update or create a CarModal.
     * @example
     * // Update or create a CarModal
     * const carModal = await prisma.carModal.upsert({
     *   create: {
     *     // ... data to create a CarModal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CarModal we want to update
     *   }
     * })
    **/
    upsert<T extends CarModalUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CarModalUpsertArgs<ExtArgs>>
    ): Prisma__CarModalClient<$Result.GetResult<Prisma.$CarModalPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more CarModals that matches the filter.
     * @param {CarModalFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const carModal = await prisma.carModal.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: CarModalFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a CarModal.
     * @param {CarModalAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const carModal = await prisma.carModal.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: CarModalAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of CarModals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarModalCountArgs} args - Arguments to filter CarModals to count.
     * @example
     * // Count the number of CarModals
     * const count = await prisma.carModal.count({
     *   where: {
     *     // ... the filter for the CarModals we want to count
     *   }
     * })
    **/
    count<T extends CarModalCountArgs>(
      args?: Subset<T, CarModalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarModalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CarModal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarModalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CarModalAggregateArgs>(args: Subset<T, CarModalAggregateArgs>): Prisma.PrismaPromise<GetCarModalAggregateType<T>>

    /**
     * Group by CarModal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarModalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CarModalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarModalGroupByArgs['orderBy'] }
        : { orderBy?: CarModalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CarModalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarModalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CarModal model
   */
  readonly fields: CarModalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CarModal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarModalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    brand<T extends MakeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MakeDefaultArgs<ExtArgs>>): Prisma__MakeClient<$Result.GetResult<Prisma.$MakePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Watchlist<T extends CarModal$WatchlistArgs<ExtArgs> = {}>(args?: Subset<T, CarModal$WatchlistArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    Rent<T extends CarModal$RentArgs<ExtArgs> = {}>(args?: Subset<T, CarModal$RentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentPayload<ExtArgs>, T, 'findMany'> | Null>;

    Purchase<T extends CarModal$PurchaseArgs<ExtArgs> = {}>(args?: Subset<T, CarModal$PurchaseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the CarModal model
   */ 
  interface CarModalFieldRefs {
    readonly id: FieldRef<"CarModal", 'String'>
    readonly Modal: FieldRef<"CarModal", 'String'>
    readonly brandId: FieldRef<"CarModal", 'String'>
    readonly engine: FieldRef<"CarModal", 'String'>
    readonly fuel: FieldRef<"CarModal", 'String'>
    readonly year: FieldRef<"CarModal", 'String'>
    readonly submodal: FieldRef<"CarModal", 'String'>
    readonly transmission: FieldRef<"CarModal", 'String'>
    readonly seating: FieldRef<"CarModal", 'Int'>
    readonly coverimg: FieldRef<"CarModal", 'String'>
    readonly frontimg: FieldRef<"CarModal", 'String'>
    readonly sideimg: FieldRef<"CarModal", 'String'>
    readonly backimg: FieldRef<"CarModal", 'String'>
    readonly driven: FieldRef<"CarModal", 'BigInt'>
    readonly drivetrain: FieldRef<"CarModal", 'String'>
    readonly mileage: FieldRef<"CarModal", 'String'>
    readonly price: FieldRef<"CarModal", 'BigInt'>
    readonly Body: FieldRef<"CarModal", 'String'>
    readonly createdAt: FieldRef<"CarModal", 'DateTime'>
    readonly updatedAt: FieldRef<"CarModal", 'DateTime'>
    readonly userid: FieldRef<"CarModal", 'String'>
    readonly rating: FieldRef<"CarModal", 'String'>
    readonly verify: FieldRef<"CarModal", 'Boolean'>
    readonly Availablecity: FieldRef<"CarModal", 'String'>
    readonly des: FieldRef<"CarModal", 'String'>
    readonly Vehicleno: FieldRef<"CarModal", 'String'>
    readonly RentorSell: FieldRef<"CarModal", 'String'>
    readonly watchlistId: FieldRef<"CarModal", 'String'>
  }
    

  // Custom InputTypes

  /**
   * CarModal findUnique
   */
  export type CarModalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarModal
     */
    select?: CarModalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarModalInclude<ExtArgs> | null
    /**
     * Filter, which CarModal to fetch.
     */
    where: CarModalWhereUniqueInput
  }


  /**
   * CarModal findUniqueOrThrow
   */
  export type CarModalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarModal
     */
    select?: CarModalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarModalInclude<ExtArgs> | null
    /**
     * Filter, which CarModal to fetch.
     */
    where: CarModalWhereUniqueInput
  }


  /**
   * CarModal findFirst
   */
  export type CarModalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarModal
     */
    select?: CarModalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarModalInclude<ExtArgs> | null
    /**
     * Filter, which CarModal to fetch.
     */
    where?: CarModalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarModals to fetch.
     */
    orderBy?: CarModalOrderByWithRelationInput | CarModalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CarModals.
     */
    cursor?: CarModalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarModals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarModals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CarModals.
     */
    distinct?: CarModalScalarFieldEnum | CarModalScalarFieldEnum[]
  }


  /**
   * CarModal findFirstOrThrow
   */
  export type CarModalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarModal
     */
    select?: CarModalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarModalInclude<ExtArgs> | null
    /**
     * Filter, which CarModal to fetch.
     */
    where?: CarModalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarModals to fetch.
     */
    orderBy?: CarModalOrderByWithRelationInput | CarModalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CarModals.
     */
    cursor?: CarModalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarModals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarModals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CarModals.
     */
    distinct?: CarModalScalarFieldEnum | CarModalScalarFieldEnum[]
  }


  /**
   * CarModal findMany
   */
  export type CarModalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarModal
     */
    select?: CarModalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarModalInclude<ExtArgs> | null
    /**
     * Filter, which CarModals to fetch.
     */
    where?: CarModalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarModals to fetch.
     */
    orderBy?: CarModalOrderByWithRelationInput | CarModalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CarModals.
     */
    cursor?: CarModalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarModals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarModals.
     */
    skip?: number
    distinct?: CarModalScalarFieldEnum | CarModalScalarFieldEnum[]
  }


  /**
   * CarModal create
   */
  export type CarModalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarModal
     */
    select?: CarModalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarModalInclude<ExtArgs> | null
    /**
     * The data needed to create a CarModal.
     */
    data: XOR<CarModalCreateInput, CarModalUncheckedCreateInput>
  }


  /**
   * CarModal createMany
   */
  export type CarModalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CarModals.
     */
    data: CarModalCreateManyInput | CarModalCreateManyInput[]
  }


  /**
   * CarModal update
   */
  export type CarModalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarModal
     */
    select?: CarModalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarModalInclude<ExtArgs> | null
    /**
     * The data needed to update a CarModal.
     */
    data: XOR<CarModalUpdateInput, CarModalUncheckedUpdateInput>
    /**
     * Choose, which CarModal to update.
     */
    where: CarModalWhereUniqueInput
  }


  /**
   * CarModal updateMany
   */
  export type CarModalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CarModals.
     */
    data: XOR<CarModalUpdateManyMutationInput, CarModalUncheckedUpdateManyInput>
    /**
     * Filter which CarModals to update
     */
    where?: CarModalWhereInput
  }


  /**
   * CarModal upsert
   */
  export type CarModalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarModal
     */
    select?: CarModalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarModalInclude<ExtArgs> | null
    /**
     * The filter to search for the CarModal to update in case it exists.
     */
    where: CarModalWhereUniqueInput
    /**
     * In case the CarModal found by the `where` argument doesn't exist, create a new CarModal with this data.
     */
    create: XOR<CarModalCreateInput, CarModalUncheckedCreateInput>
    /**
     * In case the CarModal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarModalUpdateInput, CarModalUncheckedUpdateInput>
  }


  /**
   * CarModal delete
   */
  export type CarModalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarModal
     */
    select?: CarModalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarModalInclude<ExtArgs> | null
    /**
     * Filter which CarModal to delete.
     */
    where: CarModalWhereUniqueInput
  }


  /**
   * CarModal deleteMany
   */
  export type CarModalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CarModals to delete
     */
    where?: CarModalWhereInput
  }


  /**
   * CarModal findRaw
   */
  export type CarModalFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * CarModal aggregateRaw
   */
  export type CarModalAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * CarModal.Watchlist
   */
  export type CarModal$WatchlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WatchlistInclude<ExtArgs> | null
    where?: WatchlistWhereInput
  }


  /**
   * CarModal.Rent
   */
  export type CarModal$RentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rent
     */
    select?: RentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RentInclude<ExtArgs> | null
    where?: RentWhereInput
    orderBy?: RentOrderByWithRelationInput | RentOrderByWithRelationInput[]
    cursor?: RentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RentScalarFieldEnum | RentScalarFieldEnum[]
  }


  /**
   * CarModal.Purchase
   */
  export type CarModal$PurchaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PurchaseInclude<ExtArgs> | null
    where?: PurchaseWhereInput
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    cursor?: PurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }


  /**
   * CarModal without action
   */
  export type CarModalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarModal
     */
    select?: CarModalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarModalInclude<ExtArgs> | null
  }



  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    purchase?: boolean | User$purchaseArgs<ExtArgs>
    watchlist?: boolean | User$watchlistArgs<ExtArgs>
    CarModal?: boolean | User$CarModalArgs<ExtArgs>
    Rent?: boolean | User$RentArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchase?: boolean | User$purchaseArgs<ExtArgs>
    watchlist?: boolean | User$watchlistArgs<ExtArgs>
    CarModal?: boolean | User$CarModalArgs<ExtArgs>
    Rent?: boolean | User$RentArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      purchase: Prisma.$PurchasePayload<ExtArgs>[]
      watchlist: Prisma.$WatchlistPayload<ExtArgs>[]
      CarModal: Prisma.$CarModalPayload<ExtArgs>[]
      Rent: Prisma.$RentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: UserFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: UserAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    purchase<T extends User$purchaseArgs<ExtArgs> = {}>(args?: Subset<T, User$purchaseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, 'findMany'> | Null>;

    watchlist<T extends User$watchlistArgs<ExtArgs> = {}>(args?: Subset<T, User$watchlistArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, 'findMany'> | Null>;

    CarModal<T extends User$CarModalArgs<ExtArgs> = {}>(args?: Subset<T, User$CarModalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarModalPayload<ExtArgs>, T, 'findMany'> | Null>;

    Rent<T extends User$RentArgs<ExtArgs> = {}>(args?: Subset<T, User$RentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * User.purchase
   */
  export type User$purchaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PurchaseInclude<ExtArgs> | null
    where?: PurchaseWhereInput
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    cursor?: PurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }


  /**
   * User.watchlist
   */
  export type User$watchlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WatchlistInclude<ExtArgs> | null
    where?: WatchlistWhereInput
    orderBy?: WatchlistOrderByWithRelationInput | WatchlistOrderByWithRelationInput[]
    cursor?: WatchlistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WatchlistScalarFieldEnum | WatchlistScalarFieldEnum[]
  }


  /**
   * User.CarModal
   */
  export type User$CarModalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarModal
     */
    select?: CarModalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarModalInclude<ExtArgs> | null
    where?: CarModalWhereInput
    orderBy?: CarModalOrderByWithRelationInput | CarModalOrderByWithRelationInput[]
    cursor?: CarModalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarModalScalarFieldEnum | CarModalScalarFieldEnum[]
  }


  /**
   * User.Rent
   */
  export type User$RentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rent
     */
    select?: RentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RentInclude<ExtArgs> | null
    where?: RentWhereInput
    orderBy?: RentOrderByWithRelationInput | RentOrderByWithRelationInput[]
    cursor?: RentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RentScalarFieldEnum | RentScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Rent
   */

  export type AggregateRent = {
    _count: RentCountAggregateOutputType | null
    _avg: RentAvgAggregateOutputType | null
    _sum: RentSumAggregateOutputType | null
    _min: RentMinAggregateOutputType | null
    _max: RentMaxAggregateOutputType | null
  }

  export type RentAvgAggregateOutputType = {
    price: number | null
  }

  export type RentSumAggregateOutputType = {
    price: bigint | null
  }

  export type RentMinAggregateOutputType = {
    id: string | null
    startdatetime: Date | null
    enddatetime: Date | null
    paymentmode: string | null
    userId: string | null
    razorpay_order_id: string | null
    razorpay_payment_id: string | null
    razorpay_signature: string | null
    price: bigint | null
    createdAt: Date | null
    carModalId: string | null
  }

  export type RentMaxAggregateOutputType = {
    id: string | null
    startdatetime: Date | null
    enddatetime: Date | null
    paymentmode: string | null
    userId: string | null
    razorpay_order_id: string | null
    razorpay_payment_id: string | null
    razorpay_signature: string | null
    price: bigint | null
    createdAt: Date | null
    carModalId: string | null
  }

  export type RentCountAggregateOutputType = {
    id: number
    startdatetime: number
    enddatetime: number
    paymentmode: number
    userId: number
    razorpay_order_id: number
    razorpay_payment_id: number
    razorpay_signature: number
    price: number
    createdAt: number
    carModalId: number
    _all: number
  }


  export type RentAvgAggregateInputType = {
    price?: true
  }

  export type RentSumAggregateInputType = {
    price?: true
  }

  export type RentMinAggregateInputType = {
    id?: true
    startdatetime?: true
    enddatetime?: true
    paymentmode?: true
    userId?: true
    razorpay_order_id?: true
    razorpay_payment_id?: true
    razorpay_signature?: true
    price?: true
    createdAt?: true
    carModalId?: true
  }

  export type RentMaxAggregateInputType = {
    id?: true
    startdatetime?: true
    enddatetime?: true
    paymentmode?: true
    userId?: true
    razorpay_order_id?: true
    razorpay_payment_id?: true
    razorpay_signature?: true
    price?: true
    createdAt?: true
    carModalId?: true
  }

  export type RentCountAggregateInputType = {
    id?: true
    startdatetime?: true
    enddatetime?: true
    paymentmode?: true
    userId?: true
    razorpay_order_id?: true
    razorpay_payment_id?: true
    razorpay_signature?: true
    price?: true
    createdAt?: true
    carModalId?: true
    _all?: true
  }

  export type RentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rent to aggregate.
     */
    where?: RentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rents to fetch.
     */
    orderBy?: RentOrderByWithRelationInput | RentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rents
    **/
    _count?: true | RentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RentMaxAggregateInputType
  }

  export type GetRentAggregateType<T extends RentAggregateArgs> = {
        [P in keyof T & keyof AggregateRent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRent[P]>
      : GetScalarType<T[P], AggregateRent[P]>
  }




  export type RentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentWhereInput
    orderBy?: RentOrderByWithAggregationInput | RentOrderByWithAggregationInput[]
    by: RentScalarFieldEnum[] | RentScalarFieldEnum
    having?: RentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RentCountAggregateInputType | true
    _avg?: RentAvgAggregateInputType
    _sum?: RentSumAggregateInputType
    _min?: RentMinAggregateInputType
    _max?: RentMaxAggregateInputType
  }

  export type RentGroupByOutputType = {
    id: string
    startdatetime: Date
    enddatetime: Date
    paymentmode: string
    userId: string
    razorpay_order_id: string
    razorpay_payment_id: string
    razorpay_signature: string
    price: bigint
    createdAt: Date
    carModalId: string | null
    _count: RentCountAggregateOutputType | null
    _avg: RentAvgAggregateOutputType | null
    _sum: RentSumAggregateOutputType | null
    _min: RentMinAggregateOutputType | null
    _max: RentMaxAggregateOutputType | null
  }

  type GetRentGroupByPayload<T extends RentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RentGroupByOutputType[P]>
            : GetScalarType<T[P], RentGroupByOutputType[P]>
        }
      >
    >


  export type RentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startdatetime?: boolean
    enddatetime?: boolean
    paymentmode?: boolean
    userId?: boolean
    razorpay_order_id?: boolean
    razorpay_payment_id?: boolean
    razorpay_signature?: boolean
    price?: boolean
    createdAt?: boolean
    carModalId?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    CarModal?: boolean | Rent$CarModalArgs<ExtArgs>
  }, ExtArgs["result"]["rent"]>

  export type RentSelectScalar = {
    id?: boolean
    startdatetime?: boolean
    enddatetime?: boolean
    paymentmode?: boolean
    userId?: boolean
    razorpay_order_id?: boolean
    razorpay_payment_id?: boolean
    razorpay_signature?: boolean
    price?: boolean
    createdAt?: boolean
    carModalId?: boolean
  }

  export type RentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    CarModal?: boolean | Rent$CarModalArgs<ExtArgs>
  }


  export type $RentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rent"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
      CarModal: Prisma.$CarModalPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      startdatetime: Date
      enddatetime: Date
      paymentmode: string
      userId: string
      razorpay_order_id: string
      razorpay_payment_id: string
      razorpay_signature: string
      price: bigint
      createdAt: Date
      carModalId: string | null
    }, ExtArgs["result"]["rent"]>
    composites: {}
  }


  type RentGetPayload<S extends boolean | null | undefined | RentDefaultArgs> = $Result.GetResult<Prisma.$RentPayload, S>

  type RentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RentCountAggregateInputType | true
    }

  export interface RentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rent'], meta: { name: 'Rent' } }
    /**
     * Find zero or one Rent that matches the filter.
     * @param {RentFindUniqueArgs} args - Arguments to find a Rent
     * @example
     * // Get one Rent
     * const rent = await prisma.rent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RentFindUniqueArgs<ExtArgs>>
    ): Prisma__RentClient<$Result.GetResult<Prisma.$RentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Rent that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RentFindUniqueOrThrowArgs} args - Arguments to find a Rent
     * @example
     * // Get one Rent
     * const rent = await prisma.rent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RentClient<$Result.GetResult<Prisma.$RentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Rent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentFindFirstArgs} args - Arguments to find a Rent
     * @example
     * // Get one Rent
     * const rent = await prisma.rent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RentFindFirstArgs<ExtArgs>>
    ): Prisma__RentClient<$Result.GetResult<Prisma.$RentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Rent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentFindFirstOrThrowArgs} args - Arguments to find a Rent
     * @example
     * // Get one Rent
     * const rent = await prisma.rent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RentClient<$Result.GetResult<Prisma.$RentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Rents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rents
     * const rents = await prisma.rent.findMany()
     * 
     * // Get first 10 Rents
     * const rents = await prisma.rent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rentWithIdOnly = await prisma.rent.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Rent.
     * @param {RentCreateArgs} args - Arguments to create a Rent.
     * @example
     * // Create one Rent
     * const Rent = await prisma.rent.create({
     *   data: {
     *     // ... data to create a Rent
     *   }
     * })
     * 
    **/
    create<T extends RentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RentCreateArgs<ExtArgs>>
    ): Prisma__RentClient<$Result.GetResult<Prisma.$RentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Rents.
     *     @param {RentCreateManyArgs} args - Arguments to create many Rents.
     *     @example
     *     // Create many Rents
     *     const rent = await prisma.rent.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Rent.
     * @param {RentDeleteArgs} args - Arguments to delete one Rent.
     * @example
     * // Delete one Rent
     * const Rent = await prisma.rent.delete({
     *   where: {
     *     // ... filter to delete one Rent
     *   }
     * })
     * 
    **/
    delete<T extends RentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RentDeleteArgs<ExtArgs>>
    ): Prisma__RentClient<$Result.GetResult<Prisma.$RentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Rent.
     * @param {RentUpdateArgs} args - Arguments to update one Rent.
     * @example
     * // Update one Rent
     * const rent = await prisma.rent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RentUpdateArgs<ExtArgs>>
    ): Prisma__RentClient<$Result.GetResult<Prisma.$RentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Rents.
     * @param {RentDeleteManyArgs} args - Arguments to filter Rents to delete.
     * @example
     * // Delete a few Rents
     * const { count } = await prisma.rent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rents
     * const rent = await prisma.rent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rent.
     * @param {RentUpsertArgs} args - Arguments to update or create a Rent.
     * @example
     * // Update or create a Rent
     * const rent = await prisma.rent.upsert({
     *   create: {
     *     // ... data to create a Rent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rent we want to update
     *   }
     * })
    **/
    upsert<T extends RentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RentUpsertArgs<ExtArgs>>
    ): Prisma__RentClient<$Result.GetResult<Prisma.$RentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Rents that matches the filter.
     * @param {RentFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const rent = await prisma.rent.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: RentFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Rent.
     * @param {RentAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const rent = await prisma.rent.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: RentAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Rents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentCountArgs} args - Arguments to filter Rents to count.
     * @example
     * // Count the number of Rents
     * const count = await prisma.rent.count({
     *   where: {
     *     // ... the filter for the Rents we want to count
     *   }
     * })
    **/
    count<T extends RentCountArgs>(
      args?: Subset<T, RentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RentAggregateArgs>(args: Subset<T, RentAggregateArgs>): Prisma.PrismaPromise<GetRentAggregateType<T>>

    /**
     * Group by Rent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RentGroupByArgs['orderBy'] }
        : { orderBy?: RentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rent model
   */
  readonly fields: RentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    CarModal<T extends Rent$CarModalArgs<ExtArgs> = {}>(args?: Subset<T, Rent$CarModalArgs<ExtArgs>>): Prisma__CarModalClient<$Result.GetResult<Prisma.$CarModalPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Rent model
   */ 
  interface RentFieldRefs {
    readonly id: FieldRef<"Rent", 'String'>
    readonly startdatetime: FieldRef<"Rent", 'DateTime'>
    readonly enddatetime: FieldRef<"Rent", 'DateTime'>
    readonly paymentmode: FieldRef<"Rent", 'String'>
    readonly userId: FieldRef<"Rent", 'String'>
    readonly razorpay_order_id: FieldRef<"Rent", 'String'>
    readonly razorpay_payment_id: FieldRef<"Rent", 'String'>
    readonly razorpay_signature: FieldRef<"Rent", 'String'>
    readonly price: FieldRef<"Rent", 'BigInt'>
    readonly createdAt: FieldRef<"Rent", 'DateTime'>
    readonly carModalId: FieldRef<"Rent", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Rent findUnique
   */
  export type RentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rent
     */
    select?: RentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RentInclude<ExtArgs> | null
    /**
     * Filter, which Rent to fetch.
     */
    where: RentWhereUniqueInput
  }


  /**
   * Rent findUniqueOrThrow
   */
  export type RentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rent
     */
    select?: RentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RentInclude<ExtArgs> | null
    /**
     * Filter, which Rent to fetch.
     */
    where: RentWhereUniqueInput
  }


  /**
   * Rent findFirst
   */
  export type RentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rent
     */
    select?: RentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RentInclude<ExtArgs> | null
    /**
     * Filter, which Rent to fetch.
     */
    where?: RentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rents to fetch.
     */
    orderBy?: RentOrderByWithRelationInput | RentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rents.
     */
    cursor?: RentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rents.
     */
    distinct?: RentScalarFieldEnum | RentScalarFieldEnum[]
  }


  /**
   * Rent findFirstOrThrow
   */
  export type RentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rent
     */
    select?: RentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RentInclude<ExtArgs> | null
    /**
     * Filter, which Rent to fetch.
     */
    where?: RentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rents to fetch.
     */
    orderBy?: RentOrderByWithRelationInput | RentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rents.
     */
    cursor?: RentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rents.
     */
    distinct?: RentScalarFieldEnum | RentScalarFieldEnum[]
  }


  /**
   * Rent findMany
   */
  export type RentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rent
     */
    select?: RentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RentInclude<ExtArgs> | null
    /**
     * Filter, which Rents to fetch.
     */
    where?: RentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rents to fetch.
     */
    orderBy?: RentOrderByWithRelationInput | RentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rents.
     */
    cursor?: RentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rents.
     */
    skip?: number
    distinct?: RentScalarFieldEnum | RentScalarFieldEnum[]
  }


  /**
   * Rent create
   */
  export type RentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rent
     */
    select?: RentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RentInclude<ExtArgs> | null
    /**
     * The data needed to create a Rent.
     */
    data: XOR<RentCreateInput, RentUncheckedCreateInput>
  }


  /**
   * Rent createMany
   */
  export type RentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rents.
     */
    data: RentCreateManyInput | RentCreateManyInput[]
  }


  /**
   * Rent update
   */
  export type RentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rent
     */
    select?: RentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RentInclude<ExtArgs> | null
    /**
     * The data needed to update a Rent.
     */
    data: XOR<RentUpdateInput, RentUncheckedUpdateInput>
    /**
     * Choose, which Rent to update.
     */
    where: RentWhereUniqueInput
  }


  /**
   * Rent updateMany
   */
  export type RentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rents.
     */
    data: XOR<RentUpdateManyMutationInput, RentUncheckedUpdateManyInput>
    /**
     * Filter which Rents to update
     */
    where?: RentWhereInput
  }


  /**
   * Rent upsert
   */
  export type RentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rent
     */
    select?: RentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RentInclude<ExtArgs> | null
    /**
     * The filter to search for the Rent to update in case it exists.
     */
    where: RentWhereUniqueInput
    /**
     * In case the Rent found by the `where` argument doesn't exist, create a new Rent with this data.
     */
    create: XOR<RentCreateInput, RentUncheckedCreateInput>
    /**
     * In case the Rent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RentUpdateInput, RentUncheckedUpdateInput>
  }


  /**
   * Rent delete
   */
  export type RentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rent
     */
    select?: RentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RentInclude<ExtArgs> | null
    /**
     * Filter which Rent to delete.
     */
    where: RentWhereUniqueInput
  }


  /**
   * Rent deleteMany
   */
  export type RentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rents to delete
     */
    where?: RentWhereInput
  }


  /**
   * Rent findRaw
   */
  export type RentFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Rent aggregateRaw
   */
  export type RentAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Rent.CarModal
   */
  export type Rent$CarModalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarModal
     */
    select?: CarModalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarModalInclude<ExtArgs> | null
    where?: CarModalWhereInput
  }


  /**
   * Rent without action
   */
  export type RentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rent
     */
    select?: RentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RentInclude<ExtArgs> | null
  }



  /**
   * Model Purchase
   */

  export type AggregatePurchase = {
    _count: PurchaseCountAggregateOutputType | null
    _avg: PurchaseAvgAggregateOutputType | null
    _sum: PurchaseSumAggregateOutputType | null
    _min: PurchaseMinAggregateOutputType | null
    _max: PurchaseMaxAggregateOutputType | null
  }

  export type PurchaseAvgAggregateOutputType = {
    price: number | null
  }

  export type PurchaseSumAggregateOutputType = {
    price: bigint | null
  }

  export type PurchaseMinAggregateOutputType = {
    id: string | null
    price: bigint | null
    createdAt: Date | null
    userId: string | null
    razorpay_order_id: string | null
    razorpay_payment_id: string | null
    razorpay_signature: string | null
    carModalId: string | null
  }

  export type PurchaseMaxAggregateOutputType = {
    id: string | null
    price: bigint | null
    createdAt: Date | null
    userId: string | null
    razorpay_order_id: string | null
    razorpay_payment_id: string | null
    razorpay_signature: string | null
    carModalId: string | null
  }

  export type PurchaseCountAggregateOutputType = {
    id: number
    price: number
    createdAt: number
    userId: number
    razorpay_order_id: number
    razorpay_payment_id: number
    razorpay_signature: number
    carModalId: number
    _all: number
  }


  export type PurchaseAvgAggregateInputType = {
    price?: true
  }

  export type PurchaseSumAggregateInputType = {
    price?: true
  }

  export type PurchaseMinAggregateInputType = {
    id?: true
    price?: true
    createdAt?: true
    userId?: true
    razorpay_order_id?: true
    razorpay_payment_id?: true
    razorpay_signature?: true
    carModalId?: true
  }

  export type PurchaseMaxAggregateInputType = {
    id?: true
    price?: true
    createdAt?: true
    userId?: true
    razorpay_order_id?: true
    razorpay_payment_id?: true
    razorpay_signature?: true
    carModalId?: true
  }

  export type PurchaseCountAggregateInputType = {
    id?: true
    price?: true
    createdAt?: true
    userId?: true
    razorpay_order_id?: true
    razorpay_payment_id?: true
    razorpay_signature?: true
    carModalId?: true
    _all?: true
  }

  export type PurchaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Purchase to aggregate.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Purchases
    **/
    _count?: true | PurchaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PurchaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PurchaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchaseMaxAggregateInputType
  }

  export type GetPurchaseAggregateType<T extends PurchaseAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchase[P]>
      : GetScalarType<T[P], AggregatePurchase[P]>
  }




  export type PurchaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseWhereInput
    orderBy?: PurchaseOrderByWithAggregationInput | PurchaseOrderByWithAggregationInput[]
    by: PurchaseScalarFieldEnum[] | PurchaseScalarFieldEnum
    having?: PurchaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchaseCountAggregateInputType | true
    _avg?: PurchaseAvgAggregateInputType
    _sum?: PurchaseSumAggregateInputType
    _min?: PurchaseMinAggregateInputType
    _max?: PurchaseMaxAggregateInputType
  }

  export type PurchaseGroupByOutputType = {
    id: string
    price: bigint
    createdAt: Date
    userId: string
    razorpay_order_id: string
    razorpay_payment_id: string
    razorpay_signature: string
    carModalId: string | null
    _count: PurchaseCountAggregateOutputType | null
    _avg: PurchaseAvgAggregateOutputType | null
    _sum: PurchaseSumAggregateOutputType | null
    _min: PurchaseMinAggregateOutputType | null
    _max: PurchaseMaxAggregateOutputType | null
  }

  type GetPurchaseGroupByPayload<T extends PurchaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurchaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchaseGroupByOutputType[P]>
            : GetScalarType<T[P], PurchaseGroupByOutputType[P]>
        }
      >
    >


  export type PurchaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    price?: boolean
    createdAt?: boolean
    userId?: boolean
    razorpay_order_id?: boolean
    razorpay_payment_id?: boolean
    razorpay_signature?: boolean
    carModalId?: boolean
    User?: boolean | Purchase$UserArgs<ExtArgs>
    CarModal?: boolean | Purchase$CarModalArgs<ExtArgs>
  }, ExtArgs["result"]["purchase"]>

  export type PurchaseSelectScalar = {
    id?: boolean
    price?: boolean
    createdAt?: boolean
    userId?: boolean
    razorpay_order_id?: boolean
    razorpay_payment_id?: boolean
    razorpay_signature?: boolean
    carModalId?: boolean
  }

  export type PurchaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Purchase$UserArgs<ExtArgs>
    CarModal?: boolean | Purchase$CarModalArgs<ExtArgs>
  }


  export type $PurchasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Purchase"
    objects: {
      User: Prisma.$UserPayload<ExtArgs> | null
      CarModal: Prisma.$CarModalPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      price: bigint
      createdAt: Date
      userId: string
      razorpay_order_id: string
      razorpay_payment_id: string
      razorpay_signature: string
      carModalId: string | null
    }, ExtArgs["result"]["purchase"]>
    composites: {}
  }


  type PurchaseGetPayload<S extends boolean | null | undefined | PurchaseDefaultArgs> = $Result.GetResult<Prisma.$PurchasePayload, S>

  type PurchaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PurchaseFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PurchaseCountAggregateInputType | true
    }

  export interface PurchaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Purchase'], meta: { name: 'Purchase' } }
    /**
     * Find zero or one Purchase that matches the filter.
     * @param {PurchaseFindUniqueArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PurchaseFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PurchaseFindUniqueArgs<ExtArgs>>
    ): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Purchase that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PurchaseFindUniqueOrThrowArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PurchaseFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PurchaseFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Purchase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindFirstArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PurchaseFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PurchaseFindFirstArgs<ExtArgs>>
    ): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Purchase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindFirstOrThrowArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PurchaseFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PurchaseFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Purchases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Purchases
     * const purchases = await prisma.purchase.findMany()
     * 
     * // Get first 10 Purchases
     * const purchases = await prisma.purchase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const purchaseWithIdOnly = await prisma.purchase.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PurchaseFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PurchaseFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Purchase.
     * @param {PurchaseCreateArgs} args - Arguments to create a Purchase.
     * @example
     * // Create one Purchase
     * const Purchase = await prisma.purchase.create({
     *   data: {
     *     // ... data to create a Purchase
     *   }
     * })
     * 
    **/
    create<T extends PurchaseCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PurchaseCreateArgs<ExtArgs>>
    ): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Purchases.
     *     @param {PurchaseCreateManyArgs} args - Arguments to create many Purchases.
     *     @example
     *     // Create many Purchases
     *     const purchase = await prisma.purchase.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PurchaseCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PurchaseCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Purchase.
     * @param {PurchaseDeleteArgs} args - Arguments to delete one Purchase.
     * @example
     * // Delete one Purchase
     * const Purchase = await prisma.purchase.delete({
     *   where: {
     *     // ... filter to delete one Purchase
     *   }
     * })
     * 
    **/
    delete<T extends PurchaseDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PurchaseDeleteArgs<ExtArgs>>
    ): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Purchase.
     * @param {PurchaseUpdateArgs} args - Arguments to update one Purchase.
     * @example
     * // Update one Purchase
     * const purchase = await prisma.purchase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PurchaseUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PurchaseUpdateArgs<ExtArgs>>
    ): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Purchases.
     * @param {PurchaseDeleteManyArgs} args - Arguments to filter Purchases to delete.
     * @example
     * // Delete a few Purchases
     * const { count } = await prisma.purchase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PurchaseDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PurchaseDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Purchases
     * const purchase = await prisma.purchase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PurchaseUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PurchaseUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Purchase.
     * @param {PurchaseUpsertArgs} args - Arguments to update or create a Purchase.
     * @example
     * // Update or create a Purchase
     * const purchase = await prisma.purchase.upsert({
     *   create: {
     *     // ... data to create a Purchase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Purchase we want to update
     *   }
     * })
    **/
    upsert<T extends PurchaseUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PurchaseUpsertArgs<ExtArgs>>
    ): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Purchases that matches the filter.
     * @param {PurchaseFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const purchase = await prisma.purchase.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: PurchaseFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Purchase.
     * @param {PurchaseAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const purchase = await prisma.purchase.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: PurchaseAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseCountArgs} args - Arguments to filter Purchases to count.
     * @example
     * // Count the number of Purchases
     * const count = await prisma.purchase.count({
     *   where: {
     *     // ... the filter for the Purchases we want to count
     *   }
     * })
    **/
    count<T extends PurchaseCountArgs>(
      args?: Subset<T, PurchaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Purchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PurchaseAggregateArgs>(args: Subset<T, PurchaseAggregateArgs>): Prisma.PrismaPromise<GetPurchaseAggregateType<T>>

    /**
     * Group by Purchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PurchaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurchaseGroupByArgs['orderBy'] }
        : { orderBy?: PurchaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PurchaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Purchase model
   */
  readonly fields: PurchaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Purchase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PurchaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    User<T extends Purchase$UserArgs<ExtArgs> = {}>(args?: Subset<T, Purchase$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    CarModal<T extends Purchase$CarModalArgs<ExtArgs> = {}>(args?: Subset<T, Purchase$CarModalArgs<ExtArgs>>): Prisma__CarModalClient<$Result.GetResult<Prisma.$CarModalPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Purchase model
   */ 
  interface PurchaseFieldRefs {
    readonly id: FieldRef<"Purchase", 'String'>
    readonly price: FieldRef<"Purchase", 'BigInt'>
    readonly createdAt: FieldRef<"Purchase", 'DateTime'>
    readonly userId: FieldRef<"Purchase", 'String'>
    readonly razorpay_order_id: FieldRef<"Purchase", 'String'>
    readonly razorpay_payment_id: FieldRef<"Purchase", 'String'>
    readonly razorpay_signature: FieldRef<"Purchase", 'String'>
    readonly carModalId: FieldRef<"Purchase", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Purchase findUnique
   */
  export type PurchaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where: PurchaseWhereUniqueInput
  }


  /**
   * Purchase findUniqueOrThrow
   */
  export type PurchaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where: PurchaseWhereUniqueInput
  }


  /**
   * Purchase findFirst
   */
  export type PurchaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Purchases.
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Purchases.
     */
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }


  /**
   * Purchase findFirstOrThrow
   */
  export type PurchaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Purchases.
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Purchases.
     */
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }


  /**
   * Purchase findMany
   */
  export type PurchaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchases to fetch.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Purchases.
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }


  /**
   * Purchase create
   */
  export type PurchaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * The data needed to create a Purchase.
     */
    data: XOR<PurchaseCreateInput, PurchaseUncheckedCreateInput>
  }


  /**
   * Purchase createMany
   */
  export type PurchaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Purchases.
     */
    data: PurchaseCreateManyInput | PurchaseCreateManyInput[]
  }


  /**
   * Purchase update
   */
  export type PurchaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * The data needed to update a Purchase.
     */
    data: XOR<PurchaseUpdateInput, PurchaseUncheckedUpdateInput>
    /**
     * Choose, which Purchase to update.
     */
    where: PurchaseWhereUniqueInput
  }


  /**
   * Purchase updateMany
   */
  export type PurchaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Purchases.
     */
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyInput>
    /**
     * Filter which Purchases to update
     */
    where?: PurchaseWhereInput
  }


  /**
   * Purchase upsert
   */
  export type PurchaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * The filter to search for the Purchase to update in case it exists.
     */
    where: PurchaseWhereUniqueInput
    /**
     * In case the Purchase found by the `where` argument doesn't exist, create a new Purchase with this data.
     */
    create: XOR<PurchaseCreateInput, PurchaseUncheckedCreateInput>
    /**
     * In case the Purchase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PurchaseUpdateInput, PurchaseUncheckedUpdateInput>
  }


  /**
   * Purchase delete
   */
  export type PurchaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter which Purchase to delete.
     */
    where: PurchaseWhereUniqueInput
  }


  /**
   * Purchase deleteMany
   */
  export type PurchaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Purchases to delete
     */
    where?: PurchaseWhereInput
  }


  /**
   * Purchase findRaw
   */
  export type PurchaseFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Purchase aggregateRaw
   */
  export type PurchaseAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Purchase.User
   */
  export type Purchase$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * Purchase.CarModal
   */
  export type Purchase$CarModalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarModal
     */
    select?: CarModalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarModalInclude<ExtArgs> | null
    where?: CarModalWhereInput
  }


  /**
   * Purchase without action
   */
  export type PurchaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PurchaseInclude<ExtArgs> | null
  }



  /**
   * Model Watchlist
   */

  export type AggregateWatchlist = {
    _count: WatchlistCountAggregateOutputType | null
    _min: WatchlistMinAggregateOutputType | null
    _max: WatchlistMaxAggregateOutputType | null
  }

  export type WatchlistMinAggregateOutputType = {
    id: string | null
    createAt: Date | null
    userid: string | null
  }

  export type WatchlistMaxAggregateOutputType = {
    id: string | null
    createAt: Date | null
    userid: string | null
  }

  export type WatchlistCountAggregateOutputType = {
    id: number
    createAt: number
    userid: number
    _all: number
  }


  export type WatchlistMinAggregateInputType = {
    id?: true
    createAt?: true
    userid?: true
  }

  export type WatchlistMaxAggregateInputType = {
    id?: true
    createAt?: true
    userid?: true
  }

  export type WatchlistCountAggregateInputType = {
    id?: true
    createAt?: true
    userid?: true
    _all?: true
  }

  export type WatchlistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Watchlist to aggregate.
     */
    where?: WatchlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Watchlists to fetch.
     */
    orderBy?: WatchlistOrderByWithRelationInput | WatchlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WatchlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Watchlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Watchlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Watchlists
    **/
    _count?: true | WatchlistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WatchlistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WatchlistMaxAggregateInputType
  }

  export type GetWatchlistAggregateType<T extends WatchlistAggregateArgs> = {
        [P in keyof T & keyof AggregateWatchlist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWatchlist[P]>
      : GetScalarType<T[P], AggregateWatchlist[P]>
  }




  export type WatchlistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchlistWhereInput
    orderBy?: WatchlistOrderByWithAggregationInput | WatchlistOrderByWithAggregationInput[]
    by: WatchlistScalarFieldEnum[] | WatchlistScalarFieldEnum
    having?: WatchlistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WatchlistCountAggregateInputType | true
    _min?: WatchlistMinAggregateInputType
    _max?: WatchlistMaxAggregateInputType
  }

  export type WatchlistGroupByOutputType = {
    id: string
    createAt: Date
    userid: string
    _count: WatchlistCountAggregateOutputType | null
    _min: WatchlistMinAggregateOutputType | null
    _max: WatchlistMaxAggregateOutputType | null
  }

  type GetWatchlistGroupByPayload<T extends WatchlistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WatchlistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WatchlistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WatchlistGroupByOutputType[P]>
            : GetScalarType<T[P], WatchlistGroupByOutputType[P]>
        }
      >
    >


  export type WatchlistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createAt?: boolean
    userid?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    car?: boolean | Watchlist$carArgs<ExtArgs>
    _count?: boolean | WatchlistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watchlist"]>

  export type WatchlistSelectScalar = {
    id?: boolean
    createAt?: boolean
    userid?: boolean
  }

  export type WatchlistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    car?: boolean | Watchlist$carArgs<ExtArgs>
    _count?: boolean | WatchlistCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $WatchlistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Watchlist"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      car: Prisma.$CarModalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createAt: Date
      userid: string
    }, ExtArgs["result"]["watchlist"]>
    composites: {}
  }


  type WatchlistGetPayload<S extends boolean | null | undefined | WatchlistDefaultArgs> = $Result.GetResult<Prisma.$WatchlistPayload, S>

  type WatchlistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WatchlistFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WatchlistCountAggregateInputType | true
    }

  export interface WatchlistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Watchlist'], meta: { name: 'Watchlist' } }
    /**
     * Find zero or one Watchlist that matches the filter.
     * @param {WatchlistFindUniqueArgs} args - Arguments to find a Watchlist
     * @example
     * // Get one Watchlist
     * const watchlist = await prisma.watchlist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WatchlistFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, WatchlistFindUniqueArgs<ExtArgs>>
    ): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Watchlist that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {WatchlistFindUniqueOrThrowArgs} args - Arguments to find a Watchlist
     * @example
     * // Get one Watchlist
     * const watchlist = await prisma.watchlist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WatchlistFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WatchlistFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Watchlist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistFindFirstArgs} args - Arguments to find a Watchlist
     * @example
     * // Get one Watchlist
     * const watchlist = await prisma.watchlist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WatchlistFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, WatchlistFindFirstArgs<ExtArgs>>
    ): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Watchlist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistFindFirstOrThrowArgs} args - Arguments to find a Watchlist
     * @example
     * // Get one Watchlist
     * const watchlist = await prisma.watchlist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WatchlistFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WatchlistFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Watchlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Watchlists
     * const watchlists = await prisma.watchlist.findMany()
     * 
     * // Get first 10 Watchlists
     * const watchlists = await prisma.watchlist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const watchlistWithIdOnly = await prisma.watchlist.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WatchlistFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WatchlistFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Watchlist.
     * @param {WatchlistCreateArgs} args - Arguments to create a Watchlist.
     * @example
     * // Create one Watchlist
     * const Watchlist = await prisma.watchlist.create({
     *   data: {
     *     // ... data to create a Watchlist
     *   }
     * })
     * 
    **/
    create<T extends WatchlistCreateArgs<ExtArgs>>(
      args: SelectSubset<T, WatchlistCreateArgs<ExtArgs>>
    ): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Watchlists.
     *     @param {WatchlistCreateManyArgs} args - Arguments to create many Watchlists.
     *     @example
     *     // Create many Watchlists
     *     const watchlist = await prisma.watchlist.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WatchlistCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WatchlistCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Watchlist.
     * @param {WatchlistDeleteArgs} args - Arguments to delete one Watchlist.
     * @example
     * // Delete one Watchlist
     * const Watchlist = await prisma.watchlist.delete({
     *   where: {
     *     // ... filter to delete one Watchlist
     *   }
     * })
     * 
    **/
    delete<T extends WatchlistDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, WatchlistDeleteArgs<ExtArgs>>
    ): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Watchlist.
     * @param {WatchlistUpdateArgs} args - Arguments to update one Watchlist.
     * @example
     * // Update one Watchlist
     * const watchlist = await prisma.watchlist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WatchlistUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, WatchlistUpdateArgs<ExtArgs>>
    ): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Watchlists.
     * @param {WatchlistDeleteManyArgs} args - Arguments to filter Watchlists to delete.
     * @example
     * // Delete a few Watchlists
     * const { count } = await prisma.watchlist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WatchlistDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WatchlistDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Watchlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Watchlists
     * const watchlist = await prisma.watchlist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WatchlistUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, WatchlistUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Watchlist.
     * @param {WatchlistUpsertArgs} args - Arguments to update or create a Watchlist.
     * @example
     * // Update or create a Watchlist
     * const watchlist = await prisma.watchlist.upsert({
     *   create: {
     *     // ... data to create a Watchlist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Watchlist we want to update
     *   }
     * })
    **/
    upsert<T extends WatchlistUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, WatchlistUpsertArgs<ExtArgs>>
    ): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Watchlists that matches the filter.
     * @param {WatchlistFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const watchlist = await prisma.watchlist.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: WatchlistFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Watchlist.
     * @param {WatchlistAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const watchlist = await prisma.watchlist.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: WatchlistAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Watchlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistCountArgs} args - Arguments to filter Watchlists to count.
     * @example
     * // Count the number of Watchlists
     * const count = await prisma.watchlist.count({
     *   where: {
     *     // ... the filter for the Watchlists we want to count
     *   }
     * })
    **/
    count<T extends WatchlistCountArgs>(
      args?: Subset<T, WatchlistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WatchlistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Watchlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WatchlistAggregateArgs>(args: Subset<T, WatchlistAggregateArgs>): Prisma.PrismaPromise<GetWatchlistAggregateType<T>>

    /**
     * Group by Watchlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WatchlistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WatchlistGroupByArgs['orderBy'] }
        : { orderBy?: WatchlistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WatchlistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWatchlistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Watchlist model
   */
  readonly fields: WatchlistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Watchlist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WatchlistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    car<T extends Watchlist$carArgs<ExtArgs> = {}>(args?: Subset<T, Watchlist$carArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarModalPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Watchlist model
   */ 
  interface WatchlistFieldRefs {
    readonly id: FieldRef<"Watchlist", 'String'>
    readonly createAt: FieldRef<"Watchlist", 'DateTime'>
    readonly userid: FieldRef<"Watchlist", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Watchlist findUnique
   */
  export type WatchlistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * Filter, which Watchlist to fetch.
     */
    where: WatchlistWhereUniqueInput
  }


  /**
   * Watchlist findUniqueOrThrow
   */
  export type WatchlistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * Filter, which Watchlist to fetch.
     */
    where: WatchlistWhereUniqueInput
  }


  /**
   * Watchlist findFirst
   */
  export type WatchlistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * Filter, which Watchlist to fetch.
     */
    where?: WatchlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Watchlists to fetch.
     */
    orderBy?: WatchlistOrderByWithRelationInput | WatchlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Watchlists.
     */
    cursor?: WatchlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Watchlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Watchlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Watchlists.
     */
    distinct?: WatchlistScalarFieldEnum | WatchlistScalarFieldEnum[]
  }


  /**
   * Watchlist findFirstOrThrow
   */
  export type WatchlistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * Filter, which Watchlist to fetch.
     */
    where?: WatchlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Watchlists to fetch.
     */
    orderBy?: WatchlistOrderByWithRelationInput | WatchlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Watchlists.
     */
    cursor?: WatchlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Watchlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Watchlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Watchlists.
     */
    distinct?: WatchlistScalarFieldEnum | WatchlistScalarFieldEnum[]
  }


  /**
   * Watchlist findMany
   */
  export type WatchlistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * Filter, which Watchlists to fetch.
     */
    where?: WatchlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Watchlists to fetch.
     */
    orderBy?: WatchlistOrderByWithRelationInput | WatchlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Watchlists.
     */
    cursor?: WatchlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Watchlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Watchlists.
     */
    skip?: number
    distinct?: WatchlistScalarFieldEnum | WatchlistScalarFieldEnum[]
  }


  /**
   * Watchlist create
   */
  export type WatchlistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * The data needed to create a Watchlist.
     */
    data: XOR<WatchlistCreateInput, WatchlistUncheckedCreateInput>
  }


  /**
   * Watchlist createMany
   */
  export type WatchlistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Watchlists.
     */
    data: WatchlistCreateManyInput | WatchlistCreateManyInput[]
  }


  /**
   * Watchlist update
   */
  export type WatchlistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * The data needed to update a Watchlist.
     */
    data: XOR<WatchlistUpdateInput, WatchlistUncheckedUpdateInput>
    /**
     * Choose, which Watchlist to update.
     */
    where: WatchlistWhereUniqueInput
  }


  /**
   * Watchlist updateMany
   */
  export type WatchlistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Watchlists.
     */
    data: XOR<WatchlistUpdateManyMutationInput, WatchlistUncheckedUpdateManyInput>
    /**
     * Filter which Watchlists to update
     */
    where?: WatchlistWhereInput
  }


  /**
   * Watchlist upsert
   */
  export type WatchlistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * The filter to search for the Watchlist to update in case it exists.
     */
    where: WatchlistWhereUniqueInput
    /**
     * In case the Watchlist found by the `where` argument doesn't exist, create a new Watchlist with this data.
     */
    create: XOR<WatchlistCreateInput, WatchlistUncheckedCreateInput>
    /**
     * In case the Watchlist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WatchlistUpdateInput, WatchlistUncheckedUpdateInput>
  }


  /**
   * Watchlist delete
   */
  export type WatchlistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * Filter which Watchlist to delete.
     */
    where: WatchlistWhereUniqueInput
  }


  /**
   * Watchlist deleteMany
   */
  export type WatchlistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Watchlists to delete
     */
    where?: WatchlistWhereInput
  }


  /**
   * Watchlist findRaw
   */
  export type WatchlistFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Watchlist aggregateRaw
   */
  export type WatchlistAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Watchlist.car
   */
  export type Watchlist$carArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarModal
     */
    select?: CarModalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarModalInclude<ExtArgs> | null
    where?: CarModalWhereInput
    orderBy?: CarModalOrderByWithRelationInput | CarModalOrderByWithRelationInput[]
    cursor?: CarModalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarModalScalarFieldEnum | CarModalScalarFieldEnum[]
  }


  /**
   * Watchlist without action
   */
  export type WatchlistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WatchlistInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const MakeScalarFieldEnum: {
    id: 'id',
    brandname: 'brandname',
    brandimage: 'brandimage'
  };

  export type MakeScalarFieldEnum = (typeof MakeScalarFieldEnum)[keyof typeof MakeScalarFieldEnum]


  export const CarModalScalarFieldEnum: {
    id: 'id',
    Modal: 'Modal',
    brandId: 'brandId',
    engine: 'engine',
    fuel: 'fuel',
    year: 'year',
    submodal: 'submodal',
    transmission: 'transmission',
    seating: 'seating',
    coverimg: 'coverimg',
    frontimg: 'frontimg',
    sideimg: 'sideimg',
    backimg: 'backimg',
    driven: 'driven',
    drivetrain: 'drivetrain',
    mileage: 'mileage',
    price: 'price',
    Body: 'Body',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userid: 'userid',
    rating: 'rating',
    verify: 'verify',
    Availablecity: 'Availablecity',
    des: 'des',
    Vehicleno: 'Vehicleno',
    RentorSell: 'RentorSell',
    watchlistId: 'watchlistId'
  };

  export type CarModalScalarFieldEnum = (typeof CarModalScalarFieldEnum)[keyof typeof CarModalScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RentScalarFieldEnum: {
    id: 'id',
    startdatetime: 'startdatetime',
    enddatetime: 'enddatetime',
    paymentmode: 'paymentmode',
    userId: 'userId',
    razorpay_order_id: 'razorpay_order_id',
    razorpay_payment_id: 'razorpay_payment_id',
    razorpay_signature: 'razorpay_signature',
    price: 'price',
    createdAt: 'createdAt',
    carModalId: 'carModalId'
  };

  export type RentScalarFieldEnum = (typeof RentScalarFieldEnum)[keyof typeof RentScalarFieldEnum]


  export const PurchaseScalarFieldEnum: {
    id: 'id',
    price: 'price',
    createdAt: 'createdAt',
    userId: 'userId',
    razorpay_order_id: 'razorpay_order_id',
    razorpay_payment_id: 'razorpay_payment_id',
    razorpay_signature: 'razorpay_signature',
    carModalId: 'carModalId'
  };

  export type PurchaseScalarFieldEnum = (typeof PurchaseScalarFieldEnum)[keyof typeof PurchaseScalarFieldEnum]


  export const WatchlistScalarFieldEnum: {
    id: 'id',
    createAt: 'createAt',
    userid: 'userid'
  };

  export type WatchlistScalarFieldEnum = (typeof WatchlistScalarFieldEnum)[keyof typeof WatchlistScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type MakeWhereInput = {
    AND?: MakeWhereInput | MakeWhereInput[]
    OR?: MakeWhereInput[]
    NOT?: MakeWhereInput | MakeWhereInput[]
    id?: StringFilter<"Make"> | string
    brandname?: StringNullableFilter<"Make"> | string | null
    brandimage?: StringNullableFilter<"Make"> | string | null
    CarModal?: CarModalListRelationFilter
  }

  export type MakeOrderByWithRelationInput = {
    id?: SortOrder
    brandname?: SortOrder
    brandimage?: SortOrder
    CarModal?: CarModalOrderByRelationAggregateInput
  }

  export type MakeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    brandname?: string
    AND?: MakeWhereInput | MakeWhereInput[]
    OR?: MakeWhereInput[]
    NOT?: MakeWhereInput | MakeWhereInput[]
    brandimage?: StringNullableFilter<"Make"> | string | null
    CarModal?: CarModalListRelationFilter
  }, "id" | "brandname">

  export type MakeOrderByWithAggregationInput = {
    id?: SortOrder
    brandname?: SortOrder
    brandimage?: SortOrder
    _count?: MakeCountOrderByAggregateInput
    _max?: MakeMaxOrderByAggregateInput
    _min?: MakeMinOrderByAggregateInput
  }

  export type MakeScalarWhereWithAggregatesInput = {
    AND?: MakeScalarWhereWithAggregatesInput | MakeScalarWhereWithAggregatesInput[]
    OR?: MakeScalarWhereWithAggregatesInput[]
    NOT?: MakeScalarWhereWithAggregatesInput | MakeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Make"> | string
    brandname?: StringNullableWithAggregatesFilter<"Make"> | string | null
    brandimage?: StringNullableWithAggregatesFilter<"Make"> | string | null
  }

  export type CarModalWhereInput = {
    AND?: CarModalWhereInput | CarModalWhereInput[]
    OR?: CarModalWhereInput[]
    NOT?: CarModalWhereInput | CarModalWhereInput[]
    id?: StringFilter<"CarModal"> | string
    Modal?: StringFilter<"CarModal"> | string
    brandId?: StringFilter<"CarModal"> | string
    engine?: StringFilter<"CarModal"> | string
    fuel?: StringFilter<"CarModal"> | string
    year?: StringFilter<"CarModal"> | string
    submodal?: StringFilter<"CarModal"> | string
    transmission?: StringFilter<"CarModal"> | string
    seating?: IntFilter<"CarModal"> | number
    coverimg?: StringFilter<"CarModal"> | string
    frontimg?: StringFilter<"CarModal"> | string
    sideimg?: StringFilter<"CarModal"> | string
    backimg?: StringFilter<"CarModal"> | string
    driven?: BigIntFilter<"CarModal"> | bigint | number
    drivetrain?: StringFilter<"CarModal"> | string
    mileage?: StringFilter<"CarModal"> | string
    price?: BigIntFilter<"CarModal"> | bigint | number
    Body?: StringFilter<"CarModal"> | string
    createdAt?: DateTimeFilter<"CarModal"> | Date | string
    updatedAt?: DateTimeFilter<"CarModal"> | Date | string
    userid?: StringFilter<"CarModal"> | string
    rating?: StringNullableFilter<"CarModal"> | string | null
    verify?: BoolNullableFilter<"CarModal"> | boolean | null
    Availablecity?: StringFilter<"CarModal"> | string
    des?: StringFilter<"CarModal"> | string
    Vehicleno?: StringFilter<"CarModal"> | string
    RentorSell?: StringFilter<"CarModal"> | string
    watchlistId?: StringNullableFilter<"CarModal"> | string | null
    brand?: XOR<MakeRelationFilter, MakeWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
    Watchlist?: XOR<WatchlistNullableRelationFilter, WatchlistWhereInput> | null
    Rent?: RentListRelationFilter
    Purchase?: PurchaseListRelationFilter
  }

  export type CarModalOrderByWithRelationInput = {
    id?: SortOrder
    Modal?: SortOrder
    brandId?: SortOrder
    engine?: SortOrder
    fuel?: SortOrder
    year?: SortOrder
    submodal?: SortOrder
    transmission?: SortOrder
    seating?: SortOrder
    coverimg?: SortOrder
    frontimg?: SortOrder
    sideimg?: SortOrder
    backimg?: SortOrder
    driven?: SortOrder
    drivetrain?: SortOrder
    mileage?: SortOrder
    price?: SortOrder
    Body?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userid?: SortOrder
    rating?: SortOrder
    verify?: SortOrder
    Availablecity?: SortOrder
    des?: SortOrder
    Vehicleno?: SortOrder
    RentorSell?: SortOrder
    watchlistId?: SortOrder
    brand?: MakeOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    Watchlist?: WatchlistOrderByWithRelationInput
    Rent?: RentOrderByRelationAggregateInput
    Purchase?: PurchaseOrderByRelationAggregateInput
  }

  export type CarModalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CarModalWhereInput | CarModalWhereInput[]
    OR?: CarModalWhereInput[]
    NOT?: CarModalWhereInput | CarModalWhereInput[]
    Modal?: StringFilter<"CarModal"> | string
    brandId?: StringFilter<"CarModal"> | string
    engine?: StringFilter<"CarModal"> | string
    fuel?: StringFilter<"CarModal"> | string
    year?: StringFilter<"CarModal"> | string
    submodal?: StringFilter<"CarModal"> | string
    transmission?: StringFilter<"CarModal"> | string
    seating?: IntFilter<"CarModal"> | number
    coverimg?: StringFilter<"CarModal"> | string
    frontimg?: StringFilter<"CarModal"> | string
    sideimg?: StringFilter<"CarModal"> | string
    backimg?: StringFilter<"CarModal"> | string
    driven?: BigIntFilter<"CarModal"> | bigint | number
    drivetrain?: StringFilter<"CarModal"> | string
    mileage?: StringFilter<"CarModal"> | string
    price?: BigIntFilter<"CarModal"> | bigint | number
    Body?: StringFilter<"CarModal"> | string
    createdAt?: DateTimeFilter<"CarModal"> | Date | string
    updatedAt?: DateTimeFilter<"CarModal"> | Date | string
    userid?: StringFilter<"CarModal"> | string
    rating?: StringNullableFilter<"CarModal"> | string | null
    verify?: BoolNullableFilter<"CarModal"> | boolean | null
    Availablecity?: StringFilter<"CarModal"> | string
    des?: StringFilter<"CarModal"> | string
    Vehicleno?: StringFilter<"CarModal"> | string
    RentorSell?: StringFilter<"CarModal"> | string
    watchlistId?: StringNullableFilter<"CarModal"> | string | null
    brand?: XOR<MakeRelationFilter, MakeWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
    Watchlist?: XOR<WatchlistNullableRelationFilter, WatchlistWhereInput> | null
    Rent?: RentListRelationFilter
    Purchase?: PurchaseListRelationFilter
  }, "id">

  export type CarModalOrderByWithAggregationInput = {
    id?: SortOrder
    Modal?: SortOrder
    brandId?: SortOrder
    engine?: SortOrder
    fuel?: SortOrder
    year?: SortOrder
    submodal?: SortOrder
    transmission?: SortOrder
    seating?: SortOrder
    coverimg?: SortOrder
    frontimg?: SortOrder
    sideimg?: SortOrder
    backimg?: SortOrder
    driven?: SortOrder
    drivetrain?: SortOrder
    mileage?: SortOrder
    price?: SortOrder
    Body?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userid?: SortOrder
    rating?: SortOrder
    verify?: SortOrder
    Availablecity?: SortOrder
    des?: SortOrder
    Vehicleno?: SortOrder
    RentorSell?: SortOrder
    watchlistId?: SortOrder
    _count?: CarModalCountOrderByAggregateInput
    _avg?: CarModalAvgOrderByAggregateInput
    _max?: CarModalMaxOrderByAggregateInput
    _min?: CarModalMinOrderByAggregateInput
    _sum?: CarModalSumOrderByAggregateInput
  }

  export type CarModalScalarWhereWithAggregatesInput = {
    AND?: CarModalScalarWhereWithAggregatesInput | CarModalScalarWhereWithAggregatesInput[]
    OR?: CarModalScalarWhereWithAggregatesInput[]
    NOT?: CarModalScalarWhereWithAggregatesInput | CarModalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CarModal"> | string
    Modal?: StringWithAggregatesFilter<"CarModal"> | string
    brandId?: StringWithAggregatesFilter<"CarModal"> | string
    engine?: StringWithAggregatesFilter<"CarModal"> | string
    fuel?: StringWithAggregatesFilter<"CarModal"> | string
    year?: StringWithAggregatesFilter<"CarModal"> | string
    submodal?: StringWithAggregatesFilter<"CarModal"> | string
    transmission?: StringWithAggregatesFilter<"CarModal"> | string
    seating?: IntWithAggregatesFilter<"CarModal"> | number
    coverimg?: StringWithAggregatesFilter<"CarModal"> | string
    frontimg?: StringWithAggregatesFilter<"CarModal"> | string
    sideimg?: StringWithAggregatesFilter<"CarModal"> | string
    backimg?: StringWithAggregatesFilter<"CarModal"> | string
    driven?: BigIntWithAggregatesFilter<"CarModal"> | bigint | number
    drivetrain?: StringWithAggregatesFilter<"CarModal"> | string
    mileage?: StringWithAggregatesFilter<"CarModal"> | string
    price?: BigIntWithAggregatesFilter<"CarModal"> | bigint | number
    Body?: StringWithAggregatesFilter<"CarModal"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CarModal"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CarModal"> | Date | string
    userid?: StringWithAggregatesFilter<"CarModal"> | string
    rating?: StringNullableWithAggregatesFilter<"CarModal"> | string | null
    verify?: BoolNullableWithAggregatesFilter<"CarModal"> | boolean | null
    Availablecity?: StringWithAggregatesFilter<"CarModal"> | string
    des?: StringWithAggregatesFilter<"CarModal"> | string
    Vehicleno?: StringWithAggregatesFilter<"CarModal"> | string
    RentorSell?: StringWithAggregatesFilter<"CarModal"> | string
    watchlistId?: StringNullableWithAggregatesFilter<"CarModal"> | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    purchase?: PurchaseListRelationFilter
    watchlist?: WatchlistListRelationFilter
    CarModal?: CarModalListRelationFilter
    Rent?: RentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    purchase?: PurchaseOrderByRelationAggregateInput
    watchlist?: WatchlistOrderByRelationAggregateInput
    CarModal?: CarModalOrderByRelationAggregateInput
    Rent?: RentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    purchase?: PurchaseListRelationFilter
    watchlist?: WatchlistListRelationFilter
    CarModal?: CarModalListRelationFilter
    Rent?: RentListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RentWhereInput = {
    AND?: RentWhereInput | RentWhereInput[]
    OR?: RentWhereInput[]
    NOT?: RentWhereInput | RentWhereInput[]
    id?: StringFilter<"Rent"> | string
    startdatetime?: DateTimeFilter<"Rent"> | Date | string
    enddatetime?: DateTimeFilter<"Rent"> | Date | string
    paymentmode?: StringFilter<"Rent"> | string
    userId?: StringFilter<"Rent"> | string
    razorpay_order_id?: StringFilter<"Rent"> | string
    razorpay_payment_id?: StringFilter<"Rent"> | string
    razorpay_signature?: StringFilter<"Rent"> | string
    price?: BigIntFilter<"Rent"> | bigint | number
    createdAt?: DateTimeFilter<"Rent"> | Date | string
    carModalId?: StringNullableFilter<"Rent"> | string | null
    User?: XOR<UserRelationFilter, UserWhereInput>
    CarModal?: XOR<CarModalNullableRelationFilter, CarModalWhereInput> | null
  }

  export type RentOrderByWithRelationInput = {
    id?: SortOrder
    startdatetime?: SortOrder
    enddatetime?: SortOrder
    paymentmode?: SortOrder
    userId?: SortOrder
    razorpay_order_id?: SortOrder
    razorpay_payment_id?: SortOrder
    razorpay_signature?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    carModalId?: SortOrder
    User?: UserOrderByWithRelationInput
    CarModal?: CarModalOrderByWithRelationInput
  }

  export type RentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RentWhereInput | RentWhereInput[]
    OR?: RentWhereInput[]
    NOT?: RentWhereInput | RentWhereInput[]
    startdatetime?: DateTimeFilter<"Rent"> | Date | string
    enddatetime?: DateTimeFilter<"Rent"> | Date | string
    paymentmode?: StringFilter<"Rent"> | string
    userId?: StringFilter<"Rent"> | string
    razorpay_order_id?: StringFilter<"Rent"> | string
    razorpay_payment_id?: StringFilter<"Rent"> | string
    razorpay_signature?: StringFilter<"Rent"> | string
    price?: BigIntFilter<"Rent"> | bigint | number
    createdAt?: DateTimeFilter<"Rent"> | Date | string
    carModalId?: StringNullableFilter<"Rent"> | string | null
    User?: XOR<UserRelationFilter, UserWhereInput>
    CarModal?: XOR<CarModalNullableRelationFilter, CarModalWhereInput> | null
  }, "id">

  export type RentOrderByWithAggregationInput = {
    id?: SortOrder
    startdatetime?: SortOrder
    enddatetime?: SortOrder
    paymentmode?: SortOrder
    userId?: SortOrder
    razorpay_order_id?: SortOrder
    razorpay_payment_id?: SortOrder
    razorpay_signature?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    carModalId?: SortOrder
    _count?: RentCountOrderByAggregateInput
    _avg?: RentAvgOrderByAggregateInput
    _max?: RentMaxOrderByAggregateInput
    _min?: RentMinOrderByAggregateInput
    _sum?: RentSumOrderByAggregateInput
  }

  export type RentScalarWhereWithAggregatesInput = {
    AND?: RentScalarWhereWithAggregatesInput | RentScalarWhereWithAggregatesInput[]
    OR?: RentScalarWhereWithAggregatesInput[]
    NOT?: RentScalarWhereWithAggregatesInput | RentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Rent"> | string
    startdatetime?: DateTimeWithAggregatesFilter<"Rent"> | Date | string
    enddatetime?: DateTimeWithAggregatesFilter<"Rent"> | Date | string
    paymentmode?: StringWithAggregatesFilter<"Rent"> | string
    userId?: StringWithAggregatesFilter<"Rent"> | string
    razorpay_order_id?: StringWithAggregatesFilter<"Rent"> | string
    razorpay_payment_id?: StringWithAggregatesFilter<"Rent"> | string
    razorpay_signature?: StringWithAggregatesFilter<"Rent"> | string
    price?: BigIntWithAggregatesFilter<"Rent"> | bigint | number
    createdAt?: DateTimeWithAggregatesFilter<"Rent"> | Date | string
    carModalId?: StringNullableWithAggregatesFilter<"Rent"> | string | null
  }

  export type PurchaseWhereInput = {
    AND?: PurchaseWhereInput | PurchaseWhereInput[]
    OR?: PurchaseWhereInput[]
    NOT?: PurchaseWhereInput | PurchaseWhereInput[]
    id?: StringFilter<"Purchase"> | string
    price?: BigIntFilter<"Purchase"> | bigint | number
    createdAt?: DateTimeFilter<"Purchase"> | Date | string
    userId?: StringFilter<"Purchase"> | string
    razorpay_order_id?: StringFilter<"Purchase"> | string
    razorpay_payment_id?: StringFilter<"Purchase"> | string
    razorpay_signature?: StringFilter<"Purchase"> | string
    carModalId?: StringNullableFilter<"Purchase"> | string | null
    User?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    CarModal?: XOR<CarModalNullableRelationFilter, CarModalWhereInput> | null
  }

  export type PurchaseOrderByWithRelationInput = {
    id?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    razorpay_order_id?: SortOrder
    razorpay_payment_id?: SortOrder
    razorpay_signature?: SortOrder
    carModalId?: SortOrder
    User?: UserOrderByWithRelationInput
    CarModal?: CarModalOrderByWithRelationInput
  }

  export type PurchaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PurchaseWhereInput | PurchaseWhereInput[]
    OR?: PurchaseWhereInput[]
    NOT?: PurchaseWhereInput | PurchaseWhereInput[]
    price?: BigIntFilter<"Purchase"> | bigint | number
    createdAt?: DateTimeFilter<"Purchase"> | Date | string
    userId?: StringFilter<"Purchase"> | string
    razorpay_order_id?: StringFilter<"Purchase"> | string
    razorpay_payment_id?: StringFilter<"Purchase"> | string
    razorpay_signature?: StringFilter<"Purchase"> | string
    carModalId?: StringNullableFilter<"Purchase"> | string | null
    User?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    CarModal?: XOR<CarModalNullableRelationFilter, CarModalWhereInput> | null
  }, "id">

  export type PurchaseOrderByWithAggregationInput = {
    id?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    razorpay_order_id?: SortOrder
    razorpay_payment_id?: SortOrder
    razorpay_signature?: SortOrder
    carModalId?: SortOrder
    _count?: PurchaseCountOrderByAggregateInput
    _avg?: PurchaseAvgOrderByAggregateInput
    _max?: PurchaseMaxOrderByAggregateInput
    _min?: PurchaseMinOrderByAggregateInput
    _sum?: PurchaseSumOrderByAggregateInput
  }

  export type PurchaseScalarWhereWithAggregatesInput = {
    AND?: PurchaseScalarWhereWithAggregatesInput | PurchaseScalarWhereWithAggregatesInput[]
    OR?: PurchaseScalarWhereWithAggregatesInput[]
    NOT?: PurchaseScalarWhereWithAggregatesInput | PurchaseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Purchase"> | string
    price?: BigIntWithAggregatesFilter<"Purchase"> | bigint | number
    createdAt?: DateTimeWithAggregatesFilter<"Purchase"> | Date | string
    userId?: StringWithAggregatesFilter<"Purchase"> | string
    razorpay_order_id?: StringWithAggregatesFilter<"Purchase"> | string
    razorpay_payment_id?: StringWithAggregatesFilter<"Purchase"> | string
    razorpay_signature?: StringWithAggregatesFilter<"Purchase"> | string
    carModalId?: StringNullableWithAggregatesFilter<"Purchase"> | string | null
  }

  export type WatchlistWhereInput = {
    AND?: WatchlistWhereInput | WatchlistWhereInput[]
    OR?: WatchlistWhereInput[]
    NOT?: WatchlistWhereInput | WatchlistWhereInput[]
    id?: StringFilter<"Watchlist"> | string
    createAt?: DateTimeFilter<"Watchlist"> | Date | string
    userid?: StringFilter<"Watchlist"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    car?: CarModalListRelationFilter
  }

  export type WatchlistOrderByWithRelationInput = {
    id?: SortOrder
    createAt?: SortOrder
    userid?: SortOrder
    user?: UserOrderByWithRelationInput
    car?: CarModalOrderByRelationAggregateInput
  }

  export type WatchlistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WatchlistWhereInput | WatchlistWhereInput[]
    OR?: WatchlistWhereInput[]
    NOT?: WatchlistWhereInput | WatchlistWhereInput[]
    createAt?: DateTimeFilter<"Watchlist"> | Date | string
    userid?: StringFilter<"Watchlist"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    car?: CarModalListRelationFilter
  }, "id">

  export type WatchlistOrderByWithAggregationInput = {
    id?: SortOrder
    createAt?: SortOrder
    userid?: SortOrder
    _count?: WatchlistCountOrderByAggregateInput
    _max?: WatchlistMaxOrderByAggregateInput
    _min?: WatchlistMinOrderByAggregateInput
  }

  export type WatchlistScalarWhereWithAggregatesInput = {
    AND?: WatchlistScalarWhereWithAggregatesInput | WatchlistScalarWhereWithAggregatesInput[]
    OR?: WatchlistScalarWhereWithAggregatesInput[]
    NOT?: WatchlistScalarWhereWithAggregatesInput | WatchlistScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Watchlist"> | string
    createAt?: DateTimeWithAggregatesFilter<"Watchlist"> | Date | string
    userid?: StringWithAggregatesFilter<"Watchlist"> | string
  }

  export type MakeCreateInput = {
    id?: string
    brandname?: string | null
    brandimage?: string | null
    CarModal?: CarModalCreateNestedManyWithoutBrandInput
  }

  export type MakeUncheckedCreateInput = {
    id?: string
    brandname?: string | null
    brandimage?: string | null
    CarModal?: CarModalUncheckedCreateNestedManyWithoutBrandInput
  }

  export type MakeUpdateInput = {
    brandname?: NullableStringFieldUpdateOperationsInput | string | null
    brandimage?: NullableStringFieldUpdateOperationsInput | string | null
    CarModal?: CarModalUpdateManyWithoutBrandNestedInput
  }

  export type MakeUncheckedUpdateInput = {
    brandname?: NullableStringFieldUpdateOperationsInput | string | null
    brandimage?: NullableStringFieldUpdateOperationsInput | string | null
    CarModal?: CarModalUncheckedUpdateManyWithoutBrandNestedInput
  }

  export type MakeCreateManyInput = {
    id?: string
    brandname?: string | null
    brandimage?: string | null
  }

  export type MakeUpdateManyMutationInput = {
    brandname?: NullableStringFieldUpdateOperationsInput | string | null
    brandimage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MakeUncheckedUpdateManyInput = {
    brandname?: NullableStringFieldUpdateOperationsInput | string | null
    brandimage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CarModalCreateInput = {
    id?: string
    Modal: string
    engine: string
    fuel: string
    year: string
    submodal: string
    transmission: string
    seating: number
    coverimg: string
    frontimg: string
    sideimg: string
    backimg: string
    driven: bigint | number
    drivetrain: string
    mileage: string
    price: bigint | number
    Body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rating?: string | null
    verify?: boolean | null
    Availablecity: string
    des: string
    Vehicleno: string
    RentorSell: string
    brand: MakeCreateNestedOneWithoutCarModalInput
    user: UserCreateNestedOneWithoutCarModalInput
    Watchlist?: WatchlistCreateNestedOneWithoutCarInput
    Rent?: RentCreateNestedManyWithoutCarModalInput
    Purchase?: PurchaseCreateNestedManyWithoutCarModalInput
  }

  export type CarModalUncheckedCreateInput = {
    id?: string
    Modal: string
    brandId: string
    engine: string
    fuel: string
    year: string
    submodal: string
    transmission: string
    seating: number
    coverimg: string
    frontimg: string
    sideimg: string
    backimg: string
    driven: bigint | number
    drivetrain: string
    mileage: string
    price: bigint | number
    Body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userid: string
    rating?: string | null
    verify?: boolean | null
    Availablecity: string
    des: string
    Vehicleno: string
    RentorSell: string
    watchlistId?: string | null
    Rent?: RentUncheckedCreateNestedManyWithoutCarModalInput
    Purchase?: PurchaseUncheckedCreateNestedManyWithoutCarModalInput
  }

  export type CarModalUpdateInput = {
    Modal?: StringFieldUpdateOperationsInput | string
    engine?: StringFieldUpdateOperationsInput | string
    fuel?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    submodal?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    seating?: IntFieldUpdateOperationsInput | number
    coverimg?: StringFieldUpdateOperationsInput | string
    frontimg?: StringFieldUpdateOperationsInput | string
    sideimg?: StringFieldUpdateOperationsInput | string
    backimg?: StringFieldUpdateOperationsInput | string
    driven?: BigIntFieldUpdateOperationsInput | bigint | number
    drivetrain?: StringFieldUpdateOperationsInput | string
    mileage?: StringFieldUpdateOperationsInput | string
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    Body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: NullableStringFieldUpdateOperationsInput | string | null
    verify?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Availablecity?: StringFieldUpdateOperationsInput | string
    des?: StringFieldUpdateOperationsInput | string
    Vehicleno?: StringFieldUpdateOperationsInput | string
    RentorSell?: StringFieldUpdateOperationsInput | string
    brand?: MakeUpdateOneRequiredWithoutCarModalNestedInput
    user?: UserUpdateOneRequiredWithoutCarModalNestedInput
    Watchlist?: WatchlistUpdateOneWithoutCarNestedInput
    Rent?: RentUpdateManyWithoutCarModalNestedInput
    Purchase?: PurchaseUpdateManyWithoutCarModalNestedInput
  }

  export type CarModalUncheckedUpdateInput = {
    Modal?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    engine?: StringFieldUpdateOperationsInput | string
    fuel?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    submodal?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    seating?: IntFieldUpdateOperationsInput | number
    coverimg?: StringFieldUpdateOperationsInput | string
    frontimg?: StringFieldUpdateOperationsInput | string
    sideimg?: StringFieldUpdateOperationsInput | string
    backimg?: StringFieldUpdateOperationsInput | string
    driven?: BigIntFieldUpdateOperationsInput | bigint | number
    drivetrain?: StringFieldUpdateOperationsInput | string
    mileage?: StringFieldUpdateOperationsInput | string
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    Body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userid?: StringFieldUpdateOperationsInput | string
    rating?: NullableStringFieldUpdateOperationsInput | string | null
    verify?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Availablecity?: StringFieldUpdateOperationsInput | string
    des?: StringFieldUpdateOperationsInput | string
    Vehicleno?: StringFieldUpdateOperationsInput | string
    RentorSell?: StringFieldUpdateOperationsInput | string
    watchlistId?: NullableStringFieldUpdateOperationsInput | string | null
    Rent?: RentUncheckedUpdateManyWithoutCarModalNestedInput
    Purchase?: PurchaseUncheckedUpdateManyWithoutCarModalNestedInput
  }

  export type CarModalCreateManyInput = {
    id?: string
    Modal: string
    brandId: string
    engine: string
    fuel: string
    year: string
    submodal: string
    transmission: string
    seating: number
    coverimg: string
    frontimg: string
    sideimg: string
    backimg: string
    driven: bigint | number
    drivetrain: string
    mileage: string
    price: bigint | number
    Body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userid: string
    rating?: string | null
    verify?: boolean | null
    Availablecity: string
    des: string
    Vehicleno: string
    RentorSell: string
    watchlistId?: string | null
  }

  export type CarModalUpdateManyMutationInput = {
    Modal?: StringFieldUpdateOperationsInput | string
    engine?: StringFieldUpdateOperationsInput | string
    fuel?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    submodal?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    seating?: IntFieldUpdateOperationsInput | number
    coverimg?: StringFieldUpdateOperationsInput | string
    frontimg?: StringFieldUpdateOperationsInput | string
    sideimg?: StringFieldUpdateOperationsInput | string
    backimg?: StringFieldUpdateOperationsInput | string
    driven?: BigIntFieldUpdateOperationsInput | bigint | number
    drivetrain?: StringFieldUpdateOperationsInput | string
    mileage?: StringFieldUpdateOperationsInput | string
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    Body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: NullableStringFieldUpdateOperationsInput | string | null
    verify?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Availablecity?: StringFieldUpdateOperationsInput | string
    des?: StringFieldUpdateOperationsInput | string
    Vehicleno?: StringFieldUpdateOperationsInput | string
    RentorSell?: StringFieldUpdateOperationsInput | string
  }

  export type CarModalUncheckedUpdateManyInput = {
    Modal?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    engine?: StringFieldUpdateOperationsInput | string
    fuel?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    submodal?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    seating?: IntFieldUpdateOperationsInput | number
    coverimg?: StringFieldUpdateOperationsInput | string
    frontimg?: StringFieldUpdateOperationsInput | string
    sideimg?: StringFieldUpdateOperationsInput | string
    backimg?: StringFieldUpdateOperationsInput | string
    driven?: BigIntFieldUpdateOperationsInput | bigint | number
    drivetrain?: StringFieldUpdateOperationsInput | string
    mileage?: StringFieldUpdateOperationsInput | string
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    Body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userid?: StringFieldUpdateOperationsInput | string
    rating?: NullableStringFieldUpdateOperationsInput | string | null
    verify?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Availablecity?: StringFieldUpdateOperationsInput | string
    des?: StringFieldUpdateOperationsInput | string
    Vehicleno?: StringFieldUpdateOperationsInput | string
    RentorSell?: StringFieldUpdateOperationsInput | string
    watchlistId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    purchase?: PurchaseCreateNestedManyWithoutUserInput
    watchlist?: WatchlistCreateNestedManyWithoutUserInput
    CarModal?: CarModalCreateNestedManyWithoutUserInput
    Rent?: RentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    purchase?: PurchaseUncheckedCreateNestedManyWithoutUserInput
    watchlist?: WatchlistUncheckedCreateNestedManyWithoutUserInput
    CarModal?: CarModalUncheckedCreateNestedManyWithoutUserInput
    Rent?: RentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchase?: PurchaseUpdateManyWithoutUserNestedInput
    watchlist?: WatchlistUpdateManyWithoutUserNestedInput
    CarModal?: CarModalUpdateManyWithoutUserNestedInput
    Rent?: RentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchase?: PurchaseUncheckedUpdateManyWithoutUserNestedInput
    watchlist?: WatchlistUncheckedUpdateManyWithoutUserNestedInput
    CarModal?: CarModalUncheckedUpdateManyWithoutUserNestedInput
    Rent?: RentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentCreateInput = {
    id?: string
    startdatetime: Date | string
    enddatetime: Date | string
    paymentmode: string
    razorpay_order_id: string
    razorpay_payment_id: string
    razorpay_signature: string
    price: bigint | number
    createdAt?: Date | string
    User: UserCreateNestedOneWithoutRentInput
    CarModal?: CarModalCreateNestedOneWithoutRentInput
  }

  export type RentUncheckedCreateInput = {
    id?: string
    startdatetime: Date | string
    enddatetime: Date | string
    paymentmode: string
    userId: string
    razorpay_order_id: string
    razorpay_payment_id: string
    razorpay_signature: string
    price: bigint | number
    createdAt?: Date | string
    carModalId?: string | null
  }

  export type RentUpdateInput = {
    startdatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    enddatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentmode?: StringFieldUpdateOperationsInput | string
    razorpay_order_id?: StringFieldUpdateOperationsInput | string
    razorpay_payment_id?: StringFieldUpdateOperationsInput | string
    razorpay_signature?: StringFieldUpdateOperationsInput | string
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutRentNestedInput
    CarModal?: CarModalUpdateOneWithoutRentNestedInput
  }

  export type RentUncheckedUpdateInput = {
    startdatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    enddatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentmode?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    razorpay_order_id?: StringFieldUpdateOperationsInput | string
    razorpay_payment_id?: StringFieldUpdateOperationsInput | string
    razorpay_signature?: StringFieldUpdateOperationsInput | string
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    carModalId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RentCreateManyInput = {
    id?: string
    startdatetime: Date | string
    enddatetime: Date | string
    paymentmode: string
    userId: string
    razorpay_order_id: string
    razorpay_payment_id: string
    razorpay_signature: string
    price: bigint | number
    createdAt?: Date | string
    carModalId?: string | null
  }

  export type RentUpdateManyMutationInput = {
    startdatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    enddatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentmode?: StringFieldUpdateOperationsInput | string
    razorpay_order_id?: StringFieldUpdateOperationsInput | string
    razorpay_payment_id?: StringFieldUpdateOperationsInput | string
    razorpay_signature?: StringFieldUpdateOperationsInput | string
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentUncheckedUpdateManyInput = {
    startdatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    enddatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentmode?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    razorpay_order_id?: StringFieldUpdateOperationsInput | string
    razorpay_payment_id?: StringFieldUpdateOperationsInput | string
    razorpay_signature?: StringFieldUpdateOperationsInput | string
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    carModalId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PurchaseCreateInput = {
    id?: string
    price: bigint | number
    createdAt?: Date | string
    razorpay_order_id: string
    razorpay_payment_id: string
    razorpay_signature: string
    User?: UserCreateNestedOneWithoutPurchaseInput
    CarModal?: CarModalCreateNestedOneWithoutPurchaseInput
  }

  export type PurchaseUncheckedCreateInput = {
    id?: string
    price: bigint | number
    createdAt?: Date | string
    userId: string
    razorpay_order_id: string
    razorpay_payment_id: string
    razorpay_signature: string
    carModalId?: string | null
  }

  export type PurchaseUpdateInput = {
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    razorpay_order_id?: StringFieldUpdateOperationsInput | string
    razorpay_payment_id?: StringFieldUpdateOperationsInput | string
    razorpay_signature?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneWithoutPurchaseNestedInput
    CarModal?: CarModalUpdateOneWithoutPurchaseNestedInput
  }

  export type PurchaseUncheckedUpdateInput = {
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    razorpay_order_id?: StringFieldUpdateOperationsInput | string
    razorpay_payment_id?: StringFieldUpdateOperationsInput | string
    razorpay_signature?: StringFieldUpdateOperationsInput | string
    carModalId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PurchaseCreateManyInput = {
    id?: string
    price: bigint | number
    createdAt?: Date | string
    userId: string
    razorpay_order_id: string
    razorpay_payment_id: string
    razorpay_signature: string
    carModalId?: string | null
  }

  export type PurchaseUpdateManyMutationInput = {
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    razorpay_order_id?: StringFieldUpdateOperationsInput | string
    razorpay_payment_id?: StringFieldUpdateOperationsInput | string
    razorpay_signature?: StringFieldUpdateOperationsInput | string
  }

  export type PurchaseUncheckedUpdateManyInput = {
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    razorpay_order_id?: StringFieldUpdateOperationsInput | string
    razorpay_payment_id?: StringFieldUpdateOperationsInput | string
    razorpay_signature?: StringFieldUpdateOperationsInput | string
    carModalId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WatchlistCreateInput = {
    id?: string
    createAt?: Date | string
    user: UserCreateNestedOneWithoutWatchlistInput
    car?: CarModalCreateNestedManyWithoutWatchlistInput
  }

  export type WatchlistUncheckedCreateInput = {
    id?: string
    createAt?: Date | string
    userid: string
    car?: CarModalUncheckedCreateNestedManyWithoutWatchlistInput
  }

  export type WatchlistUpdateInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWatchlistNestedInput
    car?: CarModalUpdateManyWithoutWatchlistNestedInput
  }

  export type WatchlistUncheckedUpdateInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userid?: StringFieldUpdateOperationsInput | string
    car?: CarModalUncheckedUpdateManyWithoutWatchlistNestedInput
  }

  export type WatchlistCreateManyInput = {
    id?: string
    createAt?: Date | string
    userid: string
  }

  export type WatchlistUpdateManyMutationInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchlistUncheckedUpdateManyInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userid?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type CarModalListRelationFilter = {
    every?: CarModalWhereInput
    some?: CarModalWhereInput
    none?: CarModalWhereInput
  }

  export type CarModalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MakeCountOrderByAggregateInput = {
    id?: SortOrder
    brandname?: SortOrder
    brandimage?: SortOrder
  }

  export type MakeMaxOrderByAggregateInput = {
    id?: SortOrder
    brandname?: SortOrder
    brandimage?: SortOrder
  }

  export type MakeMinOrderByAggregateInput = {
    id?: SortOrder
    brandname?: SortOrder
    brandimage?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
    isSet?: boolean
  }

  export type MakeRelationFilter = {
    is?: MakeWhereInput
    isNot?: MakeWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type WatchlistNullableRelationFilter = {
    is?: WatchlistWhereInput | null
    isNot?: WatchlistWhereInput | null
  }

  export type RentListRelationFilter = {
    every?: RentWhereInput
    some?: RentWhereInput
    none?: RentWhereInput
  }

  export type PurchaseListRelationFilter = {
    every?: PurchaseWhereInput
    some?: PurchaseWhereInput
    none?: PurchaseWhereInput
  }

  export type RentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PurchaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CarModalCountOrderByAggregateInput = {
    id?: SortOrder
    Modal?: SortOrder
    brandId?: SortOrder
    engine?: SortOrder
    fuel?: SortOrder
    year?: SortOrder
    submodal?: SortOrder
    transmission?: SortOrder
    seating?: SortOrder
    coverimg?: SortOrder
    frontimg?: SortOrder
    sideimg?: SortOrder
    backimg?: SortOrder
    driven?: SortOrder
    drivetrain?: SortOrder
    mileage?: SortOrder
    price?: SortOrder
    Body?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userid?: SortOrder
    rating?: SortOrder
    verify?: SortOrder
    Availablecity?: SortOrder
    des?: SortOrder
    Vehicleno?: SortOrder
    RentorSell?: SortOrder
    watchlistId?: SortOrder
  }

  export type CarModalAvgOrderByAggregateInput = {
    seating?: SortOrder
    driven?: SortOrder
    price?: SortOrder
  }

  export type CarModalMaxOrderByAggregateInput = {
    id?: SortOrder
    Modal?: SortOrder
    brandId?: SortOrder
    engine?: SortOrder
    fuel?: SortOrder
    year?: SortOrder
    submodal?: SortOrder
    transmission?: SortOrder
    seating?: SortOrder
    coverimg?: SortOrder
    frontimg?: SortOrder
    sideimg?: SortOrder
    backimg?: SortOrder
    driven?: SortOrder
    drivetrain?: SortOrder
    mileage?: SortOrder
    price?: SortOrder
    Body?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userid?: SortOrder
    rating?: SortOrder
    verify?: SortOrder
    Availablecity?: SortOrder
    des?: SortOrder
    Vehicleno?: SortOrder
    RentorSell?: SortOrder
    watchlistId?: SortOrder
  }

  export type CarModalMinOrderByAggregateInput = {
    id?: SortOrder
    Modal?: SortOrder
    brandId?: SortOrder
    engine?: SortOrder
    fuel?: SortOrder
    year?: SortOrder
    submodal?: SortOrder
    transmission?: SortOrder
    seating?: SortOrder
    coverimg?: SortOrder
    frontimg?: SortOrder
    sideimg?: SortOrder
    backimg?: SortOrder
    driven?: SortOrder
    drivetrain?: SortOrder
    mileage?: SortOrder
    price?: SortOrder
    Body?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userid?: SortOrder
    rating?: SortOrder
    verify?: SortOrder
    Availablecity?: SortOrder
    des?: SortOrder
    Vehicleno?: SortOrder
    RentorSell?: SortOrder
    watchlistId?: SortOrder
  }

  export type CarModalSumOrderByAggregateInput = {
    seating?: SortOrder
    driven?: SortOrder
    price?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type WatchlistListRelationFilter = {
    every?: WatchlistWhereInput
    some?: WatchlistWhereInput
    none?: WatchlistWhereInput
  }

  export type WatchlistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type CarModalNullableRelationFilter = {
    is?: CarModalWhereInput | null
    isNot?: CarModalWhereInput | null
  }

  export type RentCountOrderByAggregateInput = {
    id?: SortOrder
    startdatetime?: SortOrder
    enddatetime?: SortOrder
    paymentmode?: SortOrder
    userId?: SortOrder
    razorpay_order_id?: SortOrder
    razorpay_payment_id?: SortOrder
    razorpay_signature?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    carModalId?: SortOrder
  }

  export type RentAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type RentMaxOrderByAggregateInput = {
    id?: SortOrder
    startdatetime?: SortOrder
    enddatetime?: SortOrder
    paymentmode?: SortOrder
    userId?: SortOrder
    razorpay_order_id?: SortOrder
    razorpay_payment_id?: SortOrder
    razorpay_signature?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    carModalId?: SortOrder
  }

  export type RentMinOrderByAggregateInput = {
    id?: SortOrder
    startdatetime?: SortOrder
    enddatetime?: SortOrder
    paymentmode?: SortOrder
    userId?: SortOrder
    razorpay_order_id?: SortOrder
    razorpay_payment_id?: SortOrder
    razorpay_signature?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    carModalId?: SortOrder
  }

  export type RentSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type PurchaseCountOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    razorpay_order_id?: SortOrder
    razorpay_payment_id?: SortOrder
    razorpay_signature?: SortOrder
    carModalId?: SortOrder
  }

  export type PurchaseAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type PurchaseMaxOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    razorpay_order_id?: SortOrder
    razorpay_payment_id?: SortOrder
    razorpay_signature?: SortOrder
    carModalId?: SortOrder
  }

  export type PurchaseMinOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    razorpay_order_id?: SortOrder
    razorpay_payment_id?: SortOrder
    razorpay_signature?: SortOrder
    carModalId?: SortOrder
  }

  export type PurchaseSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type WatchlistCountOrderByAggregateInput = {
    id?: SortOrder
    createAt?: SortOrder
    userid?: SortOrder
  }

  export type WatchlistMaxOrderByAggregateInput = {
    id?: SortOrder
    createAt?: SortOrder
    userid?: SortOrder
  }

  export type WatchlistMinOrderByAggregateInput = {
    id?: SortOrder
    createAt?: SortOrder
    userid?: SortOrder
  }

  export type CarModalCreateNestedManyWithoutBrandInput = {
    create?: XOR<CarModalCreateWithoutBrandInput, CarModalUncheckedCreateWithoutBrandInput> | CarModalCreateWithoutBrandInput[] | CarModalUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: CarModalCreateOrConnectWithoutBrandInput | CarModalCreateOrConnectWithoutBrandInput[]
    createMany?: CarModalCreateManyBrandInputEnvelope
    connect?: CarModalWhereUniqueInput | CarModalWhereUniqueInput[]
  }

  export type CarModalUncheckedCreateNestedManyWithoutBrandInput = {
    create?: XOR<CarModalCreateWithoutBrandInput, CarModalUncheckedCreateWithoutBrandInput> | CarModalCreateWithoutBrandInput[] | CarModalUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: CarModalCreateOrConnectWithoutBrandInput | CarModalCreateOrConnectWithoutBrandInput[]
    createMany?: CarModalCreateManyBrandInputEnvelope
    connect?: CarModalWhereUniqueInput | CarModalWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type CarModalUpdateManyWithoutBrandNestedInput = {
    create?: XOR<CarModalCreateWithoutBrandInput, CarModalUncheckedCreateWithoutBrandInput> | CarModalCreateWithoutBrandInput[] | CarModalUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: CarModalCreateOrConnectWithoutBrandInput | CarModalCreateOrConnectWithoutBrandInput[]
    upsert?: CarModalUpsertWithWhereUniqueWithoutBrandInput | CarModalUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: CarModalCreateManyBrandInputEnvelope
    set?: CarModalWhereUniqueInput | CarModalWhereUniqueInput[]
    disconnect?: CarModalWhereUniqueInput | CarModalWhereUniqueInput[]
    delete?: CarModalWhereUniqueInput | CarModalWhereUniqueInput[]
    connect?: CarModalWhereUniqueInput | CarModalWhereUniqueInput[]
    update?: CarModalUpdateWithWhereUniqueWithoutBrandInput | CarModalUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: CarModalUpdateManyWithWhereWithoutBrandInput | CarModalUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: CarModalScalarWhereInput | CarModalScalarWhereInput[]
  }

  export type CarModalUncheckedUpdateManyWithoutBrandNestedInput = {
    create?: XOR<CarModalCreateWithoutBrandInput, CarModalUncheckedCreateWithoutBrandInput> | CarModalCreateWithoutBrandInput[] | CarModalUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: CarModalCreateOrConnectWithoutBrandInput | CarModalCreateOrConnectWithoutBrandInput[]
    upsert?: CarModalUpsertWithWhereUniqueWithoutBrandInput | CarModalUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: CarModalCreateManyBrandInputEnvelope
    set?: CarModalWhereUniqueInput | CarModalWhereUniqueInput[]
    disconnect?: CarModalWhereUniqueInput | CarModalWhereUniqueInput[]
    delete?: CarModalWhereUniqueInput | CarModalWhereUniqueInput[]
    connect?: CarModalWhereUniqueInput | CarModalWhereUniqueInput[]
    update?: CarModalUpdateWithWhereUniqueWithoutBrandInput | CarModalUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: CarModalUpdateManyWithWhereWithoutBrandInput | CarModalUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: CarModalScalarWhereInput | CarModalScalarWhereInput[]
  }

  export type MakeCreateNestedOneWithoutCarModalInput = {
    create?: XOR<MakeCreateWithoutCarModalInput, MakeUncheckedCreateWithoutCarModalInput>
    connectOrCreate?: MakeCreateOrConnectWithoutCarModalInput
    connect?: MakeWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCarModalInput = {
    create?: XOR<UserCreateWithoutCarModalInput, UserUncheckedCreateWithoutCarModalInput>
    connectOrCreate?: UserCreateOrConnectWithoutCarModalInput
    connect?: UserWhereUniqueInput
  }

  export type WatchlistCreateNestedOneWithoutCarInput = {
    create?: XOR<WatchlistCreateWithoutCarInput, WatchlistUncheckedCreateWithoutCarInput>
    connectOrCreate?: WatchlistCreateOrConnectWithoutCarInput
    connect?: WatchlistWhereUniqueInput
  }

  export type RentCreateNestedManyWithoutCarModalInput = {
    create?: XOR<RentCreateWithoutCarModalInput, RentUncheckedCreateWithoutCarModalInput> | RentCreateWithoutCarModalInput[] | RentUncheckedCreateWithoutCarModalInput[]
    connectOrCreate?: RentCreateOrConnectWithoutCarModalInput | RentCreateOrConnectWithoutCarModalInput[]
    createMany?: RentCreateManyCarModalInputEnvelope
    connect?: RentWhereUniqueInput | RentWhereUniqueInput[]
  }

  export type PurchaseCreateNestedManyWithoutCarModalInput = {
    create?: XOR<PurchaseCreateWithoutCarModalInput, PurchaseUncheckedCreateWithoutCarModalInput> | PurchaseCreateWithoutCarModalInput[] | PurchaseUncheckedCreateWithoutCarModalInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutCarModalInput | PurchaseCreateOrConnectWithoutCarModalInput[]
    createMany?: PurchaseCreateManyCarModalInputEnvelope
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
  }

  export type RentUncheckedCreateNestedManyWithoutCarModalInput = {
    create?: XOR<RentCreateWithoutCarModalInput, RentUncheckedCreateWithoutCarModalInput> | RentCreateWithoutCarModalInput[] | RentUncheckedCreateWithoutCarModalInput[]
    connectOrCreate?: RentCreateOrConnectWithoutCarModalInput | RentCreateOrConnectWithoutCarModalInput[]
    createMany?: RentCreateManyCarModalInputEnvelope
    connect?: RentWhereUniqueInput | RentWhereUniqueInput[]
  }

  export type PurchaseUncheckedCreateNestedManyWithoutCarModalInput = {
    create?: XOR<PurchaseCreateWithoutCarModalInput, PurchaseUncheckedCreateWithoutCarModalInput> | PurchaseCreateWithoutCarModalInput[] | PurchaseUncheckedCreateWithoutCarModalInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutCarModalInput | PurchaseCreateOrConnectWithoutCarModalInput[]
    createMany?: PurchaseCreateManyCarModalInputEnvelope
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
    unset?: boolean
  }

  export type MakeUpdateOneRequiredWithoutCarModalNestedInput = {
    create?: XOR<MakeCreateWithoutCarModalInput, MakeUncheckedCreateWithoutCarModalInput>
    connectOrCreate?: MakeCreateOrConnectWithoutCarModalInput
    upsert?: MakeUpsertWithoutCarModalInput
    connect?: MakeWhereUniqueInput
    update?: XOR<XOR<MakeUpdateToOneWithWhereWithoutCarModalInput, MakeUpdateWithoutCarModalInput>, MakeUncheckedUpdateWithoutCarModalInput>
  }

  export type UserUpdateOneRequiredWithoutCarModalNestedInput = {
    create?: XOR<UserCreateWithoutCarModalInput, UserUncheckedCreateWithoutCarModalInput>
    connectOrCreate?: UserCreateOrConnectWithoutCarModalInput
    upsert?: UserUpsertWithoutCarModalInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCarModalInput, UserUpdateWithoutCarModalInput>, UserUncheckedUpdateWithoutCarModalInput>
  }

  export type WatchlistUpdateOneWithoutCarNestedInput = {
    create?: XOR<WatchlistCreateWithoutCarInput, WatchlistUncheckedCreateWithoutCarInput>
    connectOrCreate?: WatchlistCreateOrConnectWithoutCarInput
    upsert?: WatchlistUpsertWithoutCarInput
    disconnect?: boolean
    delete?: WatchlistWhereInput | boolean
    connect?: WatchlistWhereUniqueInput
    update?: XOR<XOR<WatchlistUpdateToOneWithWhereWithoutCarInput, WatchlistUpdateWithoutCarInput>, WatchlistUncheckedUpdateWithoutCarInput>
  }

  export type RentUpdateManyWithoutCarModalNestedInput = {
    create?: XOR<RentCreateWithoutCarModalInput, RentUncheckedCreateWithoutCarModalInput> | RentCreateWithoutCarModalInput[] | RentUncheckedCreateWithoutCarModalInput[]
    connectOrCreate?: RentCreateOrConnectWithoutCarModalInput | RentCreateOrConnectWithoutCarModalInput[]
    upsert?: RentUpsertWithWhereUniqueWithoutCarModalInput | RentUpsertWithWhereUniqueWithoutCarModalInput[]
    createMany?: RentCreateManyCarModalInputEnvelope
    set?: RentWhereUniqueInput | RentWhereUniqueInput[]
    disconnect?: RentWhereUniqueInput | RentWhereUniqueInput[]
    delete?: RentWhereUniqueInput | RentWhereUniqueInput[]
    connect?: RentWhereUniqueInput | RentWhereUniqueInput[]
    update?: RentUpdateWithWhereUniqueWithoutCarModalInput | RentUpdateWithWhereUniqueWithoutCarModalInput[]
    updateMany?: RentUpdateManyWithWhereWithoutCarModalInput | RentUpdateManyWithWhereWithoutCarModalInput[]
    deleteMany?: RentScalarWhereInput | RentScalarWhereInput[]
  }

  export type PurchaseUpdateManyWithoutCarModalNestedInput = {
    create?: XOR<PurchaseCreateWithoutCarModalInput, PurchaseUncheckedCreateWithoutCarModalInput> | PurchaseCreateWithoutCarModalInput[] | PurchaseUncheckedCreateWithoutCarModalInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutCarModalInput | PurchaseCreateOrConnectWithoutCarModalInput[]
    upsert?: PurchaseUpsertWithWhereUniqueWithoutCarModalInput | PurchaseUpsertWithWhereUniqueWithoutCarModalInput[]
    createMany?: PurchaseCreateManyCarModalInputEnvelope
    set?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    disconnect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    delete?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    update?: PurchaseUpdateWithWhereUniqueWithoutCarModalInput | PurchaseUpdateWithWhereUniqueWithoutCarModalInput[]
    updateMany?: PurchaseUpdateManyWithWhereWithoutCarModalInput | PurchaseUpdateManyWithWhereWithoutCarModalInput[]
    deleteMany?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
  }

  export type RentUncheckedUpdateManyWithoutCarModalNestedInput = {
    create?: XOR<RentCreateWithoutCarModalInput, RentUncheckedCreateWithoutCarModalInput> | RentCreateWithoutCarModalInput[] | RentUncheckedCreateWithoutCarModalInput[]
    connectOrCreate?: RentCreateOrConnectWithoutCarModalInput | RentCreateOrConnectWithoutCarModalInput[]
    upsert?: RentUpsertWithWhereUniqueWithoutCarModalInput | RentUpsertWithWhereUniqueWithoutCarModalInput[]
    createMany?: RentCreateManyCarModalInputEnvelope
    set?: RentWhereUniqueInput | RentWhereUniqueInput[]
    disconnect?: RentWhereUniqueInput | RentWhereUniqueInput[]
    delete?: RentWhereUniqueInput | RentWhereUniqueInput[]
    connect?: RentWhereUniqueInput | RentWhereUniqueInput[]
    update?: RentUpdateWithWhereUniqueWithoutCarModalInput | RentUpdateWithWhereUniqueWithoutCarModalInput[]
    updateMany?: RentUpdateManyWithWhereWithoutCarModalInput | RentUpdateManyWithWhereWithoutCarModalInput[]
    deleteMany?: RentScalarWhereInput | RentScalarWhereInput[]
  }

  export type PurchaseUncheckedUpdateManyWithoutCarModalNestedInput = {
    create?: XOR<PurchaseCreateWithoutCarModalInput, PurchaseUncheckedCreateWithoutCarModalInput> | PurchaseCreateWithoutCarModalInput[] | PurchaseUncheckedCreateWithoutCarModalInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutCarModalInput | PurchaseCreateOrConnectWithoutCarModalInput[]
    upsert?: PurchaseUpsertWithWhereUniqueWithoutCarModalInput | PurchaseUpsertWithWhereUniqueWithoutCarModalInput[]
    createMany?: PurchaseCreateManyCarModalInputEnvelope
    set?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    disconnect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    delete?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    update?: PurchaseUpdateWithWhereUniqueWithoutCarModalInput | PurchaseUpdateWithWhereUniqueWithoutCarModalInput[]
    updateMany?: PurchaseUpdateManyWithWhereWithoutCarModalInput | PurchaseUpdateManyWithWhereWithoutCarModalInput[]
    deleteMany?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
  }

  export type PurchaseCreateNestedManyWithoutUserInput = {
    create?: XOR<PurchaseCreateWithoutUserInput, PurchaseUncheckedCreateWithoutUserInput> | PurchaseCreateWithoutUserInput[] | PurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutUserInput | PurchaseCreateOrConnectWithoutUserInput[]
    createMany?: PurchaseCreateManyUserInputEnvelope
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
  }

  export type WatchlistCreateNestedManyWithoutUserInput = {
    create?: XOR<WatchlistCreateWithoutUserInput, WatchlistUncheckedCreateWithoutUserInput> | WatchlistCreateWithoutUserInput[] | WatchlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchlistCreateOrConnectWithoutUserInput | WatchlistCreateOrConnectWithoutUserInput[]
    createMany?: WatchlistCreateManyUserInputEnvelope
    connect?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
  }

  export type CarModalCreateNestedManyWithoutUserInput = {
    create?: XOR<CarModalCreateWithoutUserInput, CarModalUncheckedCreateWithoutUserInput> | CarModalCreateWithoutUserInput[] | CarModalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CarModalCreateOrConnectWithoutUserInput | CarModalCreateOrConnectWithoutUserInput[]
    createMany?: CarModalCreateManyUserInputEnvelope
    connect?: CarModalWhereUniqueInput | CarModalWhereUniqueInput[]
  }

  export type RentCreateNestedManyWithoutUserInput = {
    create?: XOR<RentCreateWithoutUserInput, RentUncheckedCreateWithoutUserInput> | RentCreateWithoutUserInput[] | RentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RentCreateOrConnectWithoutUserInput | RentCreateOrConnectWithoutUserInput[]
    createMany?: RentCreateManyUserInputEnvelope
    connect?: RentWhereUniqueInput | RentWhereUniqueInput[]
  }

  export type PurchaseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PurchaseCreateWithoutUserInput, PurchaseUncheckedCreateWithoutUserInput> | PurchaseCreateWithoutUserInput[] | PurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutUserInput | PurchaseCreateOrConnectWithoutUserInput[]
    createMany?: PurchaseCreateManyUserInputEnvelope
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
  }

  export type WatchlistUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WatchlistCreateWithoutUserInput, WatchlistUncheckedCreateWithoutUserInput> | WatchlistCreateWithoutUserInput[] | WatchlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchlistCreateOrConnectWithoutUserInput | WatchlistCreateOrConnectWithoutUserInput[]
    createMany?: WatchlistCreateManyUserInputEnvelope
    connect?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
  }

  export type CarModalUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CarModalCreateWithoutUserInput, CarModalUncheckedCreateWithoutUserInput> | CarModalCreateWithoutUserInput[] | CarModalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CarModalCreateOrConnectWithoutUserInput | CarModalCreateOrConnectWithoutUserInput[]
    createMany?: CarModalCreateManyUserInputEnvelope
    connect?: CarModalWhereUniqueInput | CarModalWhereUniqueInput[]
  }

  export type RentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RentCreateWithoutUserInput, RentUncheckedCreateWithoutUserInput> | RentCreateWithoutUserInput[] | RentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RentCreateOrConnectWithoutUserInput | RentCreateOrConnectWithoutUserInput[]
    createMany?: RentCreateManyUserInputEnvelope
    connect?: RentWhereUniqueInput | RentWhereUniqueInput[]
  }

  export type PurchaseUpdateManyWithoutUserNestedInput = {
    create?: XOR<PurchaseCreateWithoutUserInput, PurchaseUncheckedCreateWithoutUserInput> | PurchaseCreateWithoutUserInput[] | PurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutUserInput | PurchaseCreateOrConnectWithoutUserInput[]
    upsert?: PurchaseUpsertWithWhereUniqueWithoutUserInput | PurchaseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PurchaseCreateManyUserInputEnvelope
    set?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    disconnect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    delete?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    update?: PurchaseUpdateWithWhereUniqueWithoutUserInput | PurchaseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PurchaseUpdateManyWithWhereWithoutUserInput | PurchaseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
  }

  export type WatchlistUpdateManyWithoutUserNestedInput = {
    create?: XOR<WatchlistCreateWithoutUserInput, WatchlistUncheckedCreateWithoutUserInput> | WatchlistCreateWithoutUserInput[] | WatchlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchlistCreateOrConnectWithoutUserInput | WatchlistCreateOrConnectWithoutUserInput[]
    upsert?: WatchlistUpsertWithWhereUniqueWithoutUserInput | WatchlistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WatchlistCreateManyUserInputEnvelope
    set?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    disconnect?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    delete?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    connect?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    update?: WatchlistUpdateWithWhereUniqueWithoutUserInput | WatchlistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WatchlistUpdateManyWithWhereWithoutUserInput | WatchlistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WatchlistScalarWhereInput | WatchlistScalarWhereInput[]
  }

  export type CarModalUpdateManyWithoutUserNestedInput = {
    create?: XOR<CarModalCreateWithoutUserInput, CarModalUncheckedCreateWithoutUserInput> | CarModalCreateWithoutUserInput[] | CarModalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CarModalCreateOrConnectWithoutUserInput | CarModalCreateOrConnectWithoutUserInput[]
    upsert?: CarModalUpsertWithWhereUniqueWithoutUserInput | CarModalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CarModalCreateManyUserInputEnvelope
    set?: CarModalWhereUniqueInput | CarModalWhereUniqueInput[]
    disconnect?: CarModalWhereUniqueInput | CarModalWhereUniqueInput[]
    delete?: CarModalWhereUniqueInput | CarModalWhereUniqueInput[]
    connect?: CarModalWhereUniqueInput | CarModalWhereUniqueInput[]
    update?: CarModalUpdateWithWhereUniqueWithoutUserInput | CarModalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CarModalUpdateManyWithWhereWithoutUserInput | CarModalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CarModalScalarWhereInput | CarModalScalarWhereInput[]
  }

  export type RentUpdateManyWithoutUserNestedInput = {
    create?: XOR<RentCreateWithoutUserInput, RentUncheckedCreateWithoutUserInput> | RentCreateWithoutUserInput[] | RentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RentCreateOrConnectWithoutUserInput | RentCreateOrConnectWithoutUserInput[]
    upsert?: RentUpsertWithWhereUniqueWithoutUserInput | RentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RentCreateManyUserInputEnvelope
    set?: RentWhereUniqueInput | RentWhereUniqueInput[]
    disconnect?: RentWhereUniqueInput | RentWhereUniqueInput[]
    delete?: RentWhereUniqueInput | RentWhereUniqueInput[]
    connect?: RentWhereUniqueInput | RentWhereUniqueInput[]
    update?: RentUpdateWithWhereUniqueWithoutUserInput | RentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RentUpdateManyWithWhereWithoutUserInput | RentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RentScalarWhereInput | RentScalarWhereInput[]
  }

  export type PurchaseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PurchaseCreateWithoutUserInput, PurchaseUncheckedCreateWithoutUserInput> | PurchaseCreateWithoutUserInput[] | PurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutUserInput | PurchaseCreateOrConnectWithoutUserInput[]
    upsert?: PurchaseUpsertWithWhereUniqueWithoutUserInput | PurchaseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PurchaseCreateManyUserInputEnvelope
    set?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    disconnect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    delete?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    update?: PurchaseUpdateWithWhereUniqueWithoutUserInput | PurchaseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PurchaseUpdateManyWithWhereWithoutUserInput | PurchaseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
  }

  export type WatchlistUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WatchlistCreateWithoutUserInput, WatchlistUncheckedCreateWithoutUserInput> | WatchlistCreateWithoutUserInput[] | WatchlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchlistCreateOrConnectWithoutUserInput | WatchlistCreateOrConnectWithoutUserInput[]
    upsert?: WatchlistUpsertWithWhereUniqueWithoutUserInput | WatchlistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WatchlistCreateManyUserInputEnvelope
    set?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    disconnect?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    delete?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    connect?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    update?: WatchlistUpdateWithWhereUniqueWithoutUserInput | WatchlistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WatchlistUpdateManyWithWhereWithoutUserInput | WatchlistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WatchlistScalarWhereInput | WatchlistScalarWhereInput[]
  }

  export type CarModalUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CarModalCreateWithoutUserInput, CarModalUncheckedCreateWithoutUserInput> | CarModalCreateWithoutUserInput[] | CarModalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CarModalCreateOrConnectWithoutUserInput | CarModalCreateOrConnectWithoutUserInput[]
    upsert?: CarModalUpsertWithWhereUniqueWithoutUserInput | CarModalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CarModalCreateManyUserInputEnvelope
    set?: CarModalWhereUniqueInput | CarModalWhereUniqueInput[]
    disconnect?: CarModalWhereUniqueInput | CarModalWhereUniqueInput[]
    delete?: CarModalWhereUniqueInput | CarModalWhereUniqueInput[]
    connect?: CarModalWhereUniqueInput | CarModalWhereUniqueInput[]
    update?: CarModalUpdateWithWhereUniqueWithoutUserInput | CarModalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CarModalUpdateManyWithWhereWithoutUserInput | CarModalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CarModalScalarWhereInput | CarModalScalarWhereInput[]
  }

  export type RentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RentCreateWithoutUserInput, RentUncheckedCreateWithoutUserInput> | RentCreateWithoutUserInput[] | RentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RentCreateOrConnectWithoutUserInput | RentCreateOrConnectWithoutUserInput[]
    upsert?: RentUpsertWithWhereUniqueWithoutUserInput | RentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RentCreateManyUserInputEnvelope
    set?: RentWhereUniqueInput | RentWhereUniqueInput[]
    disconnect?: RentWhereUniqueInput | RentWhereUniqueInput[]
    delete?: RentWhereUniqueInput | RentWhereUniqueInput[]
    connect?: RentWhereUniqueInput | RentWhereUniqueInput[]
    update?: RentUpdateWithWhereUniqueWithoutUserInput | RentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RentUpdateManyWithWhereWithoutUserInput | RentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RentScalarWhereInput | RentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRentInput = {
    create?: XOR<UserCreateWithoutRentInput, UserUncheckedCreateWithoutRentInput>
    connectOrCreate?: UserCreateOrConnectWithoutRentInput
    connect?: UserWhereUniqueInput
  }

  export type CarModalCreateNestedOneWithoutRentInput = {
    create?: XOR<CarModalCreateWithoutRentInput, CarModalUncheckedCreateWithoutRentInput>
    connectOrCreate?: CarModalCreateOrConnectWithoutRentInput
    connect?: CarModalWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRentNestedInput = {
    create?: XOR<UserCreateWithoutRentInput, UserUncheckedCreateWithoutRentInput>
    connectOrCreate?: UserCreateOrConnectWithoutRentInput
    upsert?: UserUpsertWithoutRentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRentInput, UserUpdateWithoutRentInput>, UserUncheckedUpdateWithoutRentInput>
  }

  export type CarModalUpdateOneWithoutRentNestedInput = {
    create?: XOR<CarModalCreateWithoutRentInput, CarModalUncheckedCreateWithoutRentInput>
    connectOrCreate?: CarModalCreateOrConnectWithoutRentInput
    upsert?: CarModalUpsertWithoutRentInput
    disconnect?: boolean
    delete?: CarModalWhereInput | boolean
    connect?: CarModalWhereUniqueInput
    update?: XOR<XOR<CarModalUpdateToOneWithWhereWithoutRentInput, CarModalUpdateWithoutRentInput>, CarModalUncheckedUpdateWithoutRentInput>
  }

  export type UserCreateNestedOneWithoutPurchaseInput = {
    create?: XOR<UserCreateWithoutPurchaseInput, UserUncheckedCreateWithoutPurchaseInput>
    connectOrCreate?: UserCreateOrConnectWithoutPurchaseInput
    connect?: UserWhereUniqueInput
  }

  export type CarModalCreateNestedOneWithoutPurchaseInput = {
    create?: XOR<CarModalCreateWithoutPurchaseInput, CarModalUncheckedCreateWithoutPurchaseInput>
    connectOrCreate?: CarModalCreateOrConnectWithoutPurchaseInput
    connect?: CarModalWhereUniqueInput
  }

  export type UserUpdateOneWithoutPurchaseNestedInput = {
    create?: XOR<UserCreateWithoutPurchaseInput, UserUncheckedCreateWithoutPurchaseInput>
    connectOrCreate?: UserCreateOrConnectWithoutPurchaseInput
    upsert?: UserUpsertWithoutPurchaseInput
    disconnect?: boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPurchaseInput, UserUpdateWithoutPurchaseInput>, UserUncheckedUpdateWithoutPurchaseInput>
  }

  export type CarModalUpdateOneWithoutPurchaseNestedInput = {
    create?: XOR<CarModalCreateWithoutPurchaseInput, CarModalUncheckedCreateWithoutPurchaseInput>
    connectOrCreate?: CarModalCreateOrConnectWithoutPurchaseInput
    upsert?: CarModalUpsertWithoutPurchaseInput
    disconnect?: boolean
    delete?: CarModalWhereInput | boolean
    connect?: CarModalWhereUniqueInput
    update?: XOR<XOR<CarModalUpdateToOneWithWhereWithoutPurchaseInput, CarModalUpdateWithoutPurchaseInput>, CarModalUncheckedUpdateWithoutPurchaseInput>
  }

  export type UserCreateNestedOneWithoutWatchlistInput = {
    create?: XOR<UserCreateWithoutWatchlistInput, UserUncheckedCreateWithoutWatchlistInput>
    connectOrCreate?: UserCreateOrConnectWithoutWatchlistInput
    connect?: UserWhereUniqueInput
  }

  export type CarModalCreateNestedManyWithoutWatchlistInput = {
    create?: XOR<CarModalCreateWithoutWatchlistInput, CarModalUncheckedCreateWithoutWatchlistInput> | CarModalCreateWithoutWatchlistInput[] | CarModalUncheckedCreateWithoutWatchlistInput[]
    connectOrCreate?: CarModalCreateOrConnectWithoutWatchlistInput | CarModalCreateOrConnectWithoutWatchlistInput[]
    createMany?: CarModalCreateManyWatchlistInputEnvelope
    connect?: CarModalWhereUniqueInput | CarModalWhereUniqueInput[]
  }

  export type CarModalUncheckedCreateNestedManyWithoutWatchlistInput = {
    create?: XOR<CarModalCreateWithoutWatchlistInput, CarModalUncheckedCreateWithoutWatchlistInput> | CarModalCreateWithoutWatchlistInput[] | CarModalUncheckedCreateWithoutWatchlistInput[]
    connectOrCreate?: CarModalCreateOrConnectWithoutWatchlistInput | CarModalCreateOrConnectWithoutWatchlistInput[]
    createMany?: CarModalCreateManyWatchlistInputEnvelope
    connect?: CarModalWhereUniqueInput | CarModalWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutWatchlistNestedInput = {
    create?: XOR<UserCreateWithoutWatchlistInput, UserUncheckedCreateWithoutWatchlistInput>
    connectOrCreate?: UserCreateOrConnectWithoutWatchlistInput
    upsert?: UserUpsertWithoutWatchlistInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWatchlistInput, UserUpdateWithoutWatchlistInput>, UserUncheckedUpdateWithoutWatchlistInput>
  }

  export type CarModalUpdateManyWithoutWatchlistNestedInput = {
    create?: XOR<CarModalCreateWithoutWatchlistInput, CarModalUncheckedCreateWithoutWatchlistInput> | CarModalCreateWithoutWatchlistInput[] | CarModalUncheckedCreateWithoutWatchlistInput[]
    connectOrCreate?: CarModalCreateOrConnectWithoutWatchlistInput | CarModalCreateOrConnectWithoutWatchlistInput[]
    upsert?: CarModalUpsertWithWhereUniqueWithoutWatchlistInput | CarModalUpsertWithWhereUniqueWithoutWatchlistInput[]
    createMany?: CarModalCreateManyWatchlistInputEnvelope
    set?: CarModalWhereUniqueInput | CarModalWhereUniqueInput[]
    disconnect?: CarModalWhereUniqueInput | CarModalWhereUniqueInput[]
    delete?: CarModalWhereUniqueInput | CarModalWhereUniqueInput[]
    connect?: CarModalWhereUniqueInput | CarModalWhereUniqueInput[]
    update?: CarModalUpdateWithWhereUniqueWithoutWatchlistInput | CarModalUpdateWithWhereUniqueWithoutWatchlistInput[]
    updateMany?: CarModalUpdateManyWithWhereWithoutWatchlistInput | CarModalUpdateManyWithWhereWithoutWatchlistInput[]
    deleteMany?: CarModalScalarWhereInput | CarModalScalarWhereInput[]
  }

  export type CarModalUncheckedUpdateManyWithoutWatchlistNestedInput = {
    create?: XOR<CarModalCreateWithoutWatchlistInput, CarModalUncheckedCreateWithoutWatchlistInput> | CarModalCreateWithoutWatchlistInput[] | CarModalUncheckedCreateWithoutWatchlistInput[]
    connectOrCreate?: CarModalCreateOrConnectWithoutWatchlistInput | CarModalCreateOrConnectWithoutWatchlistInput[]
    upsert?: CarModalUpsertWithWhereUniqueWithoutWatchlistInput | CarModalUpsertWithWhereUniqueWithoutWatchlistInput[]
    createMany?: CarModalCreateManyWatchlistInputEnvelope
    set?: CarModalWhereUniqueInput | CarModalWhereUniqueInput[]
    disconnect?: CarModalWhereUniqueInput | CarModalWhereUniqueInput[]
    delete?: CarModalWhereUniqueInput | CarModalWhereUniqueInput[]
    connect?: CarModalWhereUniqueInput | CarModalWhereUniqueInput[]
    update?: CarModalUpdateWithWhereUniqueWithoutWatchlistInput | CarModalUpdateWithWhereUniqueWithoutWatchlistInput[]
    updateMany?: CarModalUpdateManyWithWhereWithoutWatchlistInput | CarModalUpdateManyWithWhereWithoutWatchlistInput[]
    deleteMany?: CarModalScalarWhereInput | CarModalScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
    isSet?: boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type CarModalCreateWithoutBrandInput = {
    id?: string
    Modal: string
    engine: string
    fuel: string
    year: string
    submodal: string
    transmission: string
    seating: number
    coverimg: string
    frontimg: string
    sideimg: string
    backimg: string
    driven: bigint | number
    drivetrain: string
    mileage: string
    price: bigint | number
    Body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rating?: string | null
    verify?: boolean | null
    Availablecity: string
    des: string
    Vehicleno: string
    RentorSell: string
    user: UserCreateNestedOneWithoutCarModalInput
    Watchlist?: WatchlistCreateNestedOneWithoutCarInput
    Rent?: RentCreateNestedManyWithoutCarModalInput
    Purchase?: PurchaseCreateNestedManyWithoutCarModalInput
  }

  export type CarModalUncheckedCreateWithoutBrandInput = {
    id?: string
    Modal: string
    engine: string
    fuel: string
    year: string
    submodal: string
    transmission: string
    seating: number
    coverimg: string
    frontimg: string
    sideimg: string
    backimg: string
    driven: bigint | number
    drivetrain: string
    mileage: string
    price: bigint | number
    Body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userid: string
    rating?: string | null
    verify?: boolean | null
    Availablecity: string
    des: string
    Vehicleno: string
    RentorSell: string
    watchlistId?: string | null
    Rent?: RentUncheckedCreateNestedManyWithoutCarModalInput
    Purchase?: PurchaseUncheckedCreateNestedManyWithoutCarModalInput
  }

  export type CarModalCreateOrConnectWithoutBrandInput = {
    where: CarModalWhereUniqueInput
    create: XOR<CarModalCreateWithoutBrandInput, CarModalUncheckedCreateWithoutBrandInput>
  }

  export type CarModalCreateManyBrandInputEnvelope = {
    data: CarModalCreateManyBrandInput | CarModalCreateManyBrandInput[]
  }

  export type CarModalUpsertWithWhereUniqueWithoutBrandInput = {
    where: CarModalWhereUniqueInput
    update: XOR<CarModalUpdateWithoutBrandInput, CarModalUncheckedUpdateWithoutBrandInput>
    create: XOR<CarModalCreateWithoutBrandInput, CarModalUncheckedCreateWithoutBrandInput>
  }

  export type CarModalUpdateWithWhereUniqueWithoutBrandInput = {
    where: CarModalWhereUniqueInput
    data: XOR<CarModalUpdateWithoutBrandInput, CarModalUncheckedUpdateWithoutBrandInput>
  }

  export type CarModalUpdateManyWithWhereWithoutBrandInput = {
    where: CarModalScalarWhereInput
    data: XOR<CarModalUpdateManyMutationInput, CarModalUncheckedUpdateManyWithoutBrandInput>
  }

  export type CarModalScalarWhereInput = {
    AND?: CarModalScalarWhereInput | CarModalScalarWhereInput[]
    OR?: CarModalScalarWhereInput[]
    NOT?: CarModalScalarWhereInput | CarModalScalarWhereInput[]
    id?: StringFilter<"CarModal"> | string
    Modal?: StringFilter<"CarModal"> | string
    brandId?: StringFilter<"CarModal"> | string
    engine?: StringFilter<"CarModal"> | string
    fuel?: StringFilter<"CarModal"> | string
    year?: StringFilter<"CarModal"> | string
    submodal?: StringFilter<"CarModal"> | string
    transmission?: StringFilter<"CarModal"> | string
    seating?: IntFilter<"CarModal"> | number
    coverimg?: StringFilter<"CarModal"> | string
    frontimg?: StringFilter<"CarModal"> | string
    sideimg?: StringFilter<"CarModal"> | string
    backimg?: StringFilter<"CarModal"> | string
    driven?: BigIntFilter<"CarModal"> | bigint | number
    drivetrain?: StringFilter<"CarModal"> | string
    mileage?: StringFilter<"CarModal"> | string
    price?: BigIntFilter<"CarModal"> | bigint | number
    Body?: StringFilter<"CarModal"> | string
    createdAt?: DateTimeFilter<"CarModal"> | Date | string
    updatedAt?: DateTimeFilter<"CarModal"> | Date | string
    userid?: StringFilter<"CarModal"> | string
    rating?: StringNullableFilter<"CarModal"> | string | null
    verify?: BoolNullableFilter<"CarModal"> | boolean | null
    Availablecity?: StringFilter<"CarModal"> | string
    des?: StringFilter<"CarModal"> | string
    Vehicleno?: StringFilter<"CarModal"> | string
    RentorSell?: StringFilter<"CarModal"> | string
    watchlistId?: StringNullableFilter<"CarModal"> | string | null
  }

  export type MakeCreateWithoutCarModalInput = {
    id?: string
    brandname?: string | null
    brandimage?: string | null
  }

  export type MakeUncheckedCreateWithoutCarModalInput = {
    id?: string
    brandname?: string | null
    brandimage?: string | null
  }

  export type MakeCreateOrConnectWithoutCarModalInput = {
    where: MakeWhereUniqueInput
    create: XOR<MakeCreateWithoutCarModalInput, MakeUncheckedCreateWithoutCarModalInput>
  }

  export type UserCreateWithoutCarModalInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    purchase?: PurchaseCreateNestedManyWithoutUserInput
    watchlist?: WatchlistCreateNestedManyWithoutUserInput
    Rent?: RentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCarModalInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    purchase?: PurchaseUncheckedCreateNestedManyWithoutUserInput
    watchlist?: WatchlistUncheckedCreateNestedManyWithoutUserInput
    Rent?: RentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCarModalInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCarModalInput, UserUncheckedCreateWithoutCarModalInput>
  }

  export type WatchlistCreateWithoutCarInput = {
    id?: string
    createAt?: Date | string
    user: UserCreateNestedOneWithoutWatchlistInput
  }

  export type WatchlistUncheckedCreateWithoutCarInput = {
    id?: string
    createAt?: Date | string
    userid: string
  }

  export type WatchlistCreateOrConnectWithoutCarInput = {
    where: WatchlistWhereUniqueInput
    create: XOR<WatchlistCreateWithoutCarInput, WatchlistUncheckedCreateWithoutCarInput>
  }

  export type RentCreateWithoutCarModalInput = {
    id?: string
    startdatetime: Date | string
    enddatetime: Date | string
    paymentmode: string
    razorpay_order_id: string
    razorpay_payment_id: string
    razorpay_signature: string
    price: bigint | number
    createdAt?: Date | string
    User: UserCreateNestedOneWithoutRentInput
  }

  export type RentUncheckedCreateWithoutCarModalInput = {
    id?: string
    startdatetime: Date | string
    enddatetime: Date | string
    paymentmode: string
    userId: string
    razorpay_order_id: string
    razorpay_payment_id: string
    razorpay_signature: string
    price: bigint | number
    createdAt?: Date | string
  }

  export type RentCreateOrConnectWithoutCarModalInput = {
    where: RentWhereUniqueInput
    create: XOR<RentCreateWithoutCarModalInput, RentUncheckedCreateWithoutCarModalInput>
  }

  export type RentCreateManyCarModalInputEnvelope = {
    data: RentCreateManyCarModalInput | RentCreateManyCarModalInput[]
  }

  export type PurchaseCreateWithoutCarModalInput = {
    id?: string
    price: bigint | number
    createdAt?: Date | string
    razorpay_order_id: string
    razorpay_payment_id: string
    razorpay_signature: string
    User?: UserCreateNestedOneWithoutPurchaseInput
  }

  export type PurchaseUncheckedCreateWithoutCarModalInput = {
    id?: string
    price: bigint | number
    createdAt?: Date | string
    userId: string
    razorpay_order_id: string
    razorpay_payment_id: string
    razorpay_signature: string
  }

  export type PurchaseCreateOrConnectWithoutCarModalInput = {
    where: PurchaseWhereUniqueInput
    create: XOR<PurchaseCreateWithoutCarModalInput, PurchaseUncheckedCreateWithoutCarModalInput>
  }

  export type PurchaseCreateManyCarModalInputEnvelope = {
    data: PurchaseCreateManyCarModalInput | PurchaseCreateManyCarModalInput[]
  }

  export type MakeUpsertWithoutCarModalInput = {
    update: XOR<MakeUpdateWithoutCarModalInput, MakeUncheckedUpdateWithoutCarModalInput>
    create: XOR<MakeCreateWithoutCarModalInput, MakeUncheckedCreateWithoutCarModalInput>
    where?: MakeWhereInput
  }

  export type MakeUpdateToOneWithWhereWithoutCarModalInput = {
    where?: MakeWhereInput
    data: XOR<MakeUpdateWithoutCarModalInput, MakeUncheckedUpdateWithoutCarModalInput>
  }

  export type MakeUpdateWithoutCarModalInput = {
    brandname?: NullableStringFieldUpdateOperationsInput | string | null
    brandimage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MakeUncheckedUpdateWithoutCarModalInput = {
    brandname?: NullableStringFieldUpdateOperationsInput | string | null
    brandimage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUpsertWithoutCarModalInput = {
    update: XOR<UserUpdateWithoutCarModalInput, UserUncheckedUpdateWithoutCarModalInput>
    create: XOR<UserCreateWithoutCarModalInput, UserUncheckedCreateWithoutCarModalInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCarModalInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCarModalInput, UserUncheckedUpdateWithoutCarModalInput>
  }

  export type UserUpdateWithoutCarModalInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchase?: PurchaseUpdateManyWithoutUserNestedInput
    watchlist?: WatchlistUpdateManyWithoutUserNestedInput
    Rent?: RentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCarModalInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchase?: PurchaseUncheckedUpdateManyWithoutUserNestedInput
    watchlist?: WatchlistUncheckedUpdateManyWithoutUserNestedInput
    Rent?: RentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WatchlistUpsertWithoutCarInput = {
    update: XOR<WatchlistUpdateWithoutCarInput, WatchlistUncheckedUpdateWithoutCarInput>
    create: XOR<WatchlistCreateWithoutCarInput, WatchlistUncheckedCreateWithoutCarInput>
    where?: WatchlistWhereInput
  }

  export type WatchlistUpdateToOneWithWhereWithoutCarInput = {
    where?: WatchlistWhereInput
    data: XOR<WatchlistUpdateWithoutCarInput, WatchlistUncheckedUpdateWithoutCarInput>
  }

  export type WatchlistUpdateWithoutCarInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWatchlistNestedInput
  }

  export type WatchlistUncheckedUpdateWithoutCarInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userid?: StringFieldUpdateOperationsInput | string
  }

  export type RentUpsertWithWhereUniqueWithoutCarModalInput = {
    where: RentWhereUniqueInput
    update: XOR<RentUpdateWithoutCarModalInput, RentUncheckedUpdateWithoutCarModalInput>
    create: XOR<RentCreateWithoutCarModalInput, RentUncheckedCreateWithoutCarModalInput>
  }

  export type RentUpdateWithWhereUniqueWithoutCarModalInput = {
    where: RentWhereUniqueInput
    data: XOR<RentUpdateWithoutCarModalInput, RentUncheckedUpdateWithoutCarModalInput>
  }

  export type RentUpdateManyWithWhereWithoutCarModalInput = {
    where: RentScalarWhereInput
    data: XOR<RentUpdateManyMutationInput, RentUncheckedUpdateManyWithoutCarModalInput>
  }

  export type RentScalarWhereInput = {
    AND?: RentScalarWhereInput | RentScalarWhereInput[]
    OR?: RentScalarWhereInput[]
    NOT?: RentScalarWhereInput | RentScalarWhereInput[]
    id?: StringFilter<"Rent"> | string
    startdatetime?: DateTimeFilter<"Rent"> | Date | string
    enddatetime?: DateTimeFilter<"Rent"> | Date | string
    paymentmode?: StringFilter<"Rent"> | string
    userId?: StringFilter<"Rent"> | string
    razorpay_order_id?: StringFilter<"Rent"> | string
    razorpay_payment_id?: StringFilter<"Rent"> | string
    razorpay_signature?: StringFilter<"Rent"> | string
    price?: BigIntFilter<"Rent"> | bigint | number
    createdAt?: DateTimeFilter<"Rent"> | Date | string
    carModalId?: StringNullableFilter<"Rent"> | string | null
  }

  export type PurchaseUpsertWithWhereUniqueWithoutCarModalInput = {
    where: PurchaseWhereUniqueInput
    update: XOR<PurchaseUpdateWithoutCarModalInput, PurchaseUncheckedUpdateWithoutCarModalInput>
    create: XOR<PurchaseCreateWithoutCarModalInput, PurchaseUncheckedCreateWithoutCarModalInput>
  }

  export type PurchaseUpdateWithWhereUniqueWithoutCarModalInput = {
    where: PurchaseWhereUniqueInput
    data: XOR<PurchaseUpdateWithoutCarModalInput, PurchaseUncheckedUpdateWithoutCarModalInput>
  }

  export type PurchaseUpdateManyWithWhereWithoutCarModalInput = {
    where: PurchaseScalarWhereInput
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyWithoutCarModalInput>
  }

  export type PurchaseScalarWhereInput = {
    AND?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
    OR?: PurchaseScalarWhereInput[]
    NOT?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
    id?: StringFilter<"Purchase"> | string
    price?: BigIntFilter<"Purchase"> | bigint | number
    createdAt?: DateTimeFilter<"Purchase"> | Date | string
    userId?: StringFilter<"Purchase"> | string
    razorpay_order_id?: StringFilter<"Purchase"> | string
    razorpay_payment_id?: StringFilter<"Purchase"> | string
    razorpay_signature?: StringFilter<"Purchase"> | string
    carModalId?: StringNullableFilter<"Purchase"> | string | null
  }

  export type PurchaseCreateWithoutUserInput = {
    id?: string
    price: bigint | number
    createdAt?: Date | string
    razorpay_order_id: string
    razorpay_payment_id: string
    razorpay_signature: string
    CarModal?: CarModalCreateNestedOneWithoutPurchaseInput
  }

  export type PurchaseUncheckedCreateWithoutUserInput = {
    id?: string
    price: bigint | number
    createdAt?: Date | string
    razorpay_order_id: string
    razorpay_payment_id: string
    razorpay_signature: string
    carModalId?: string | null
  }

  export type PurchaseCreateOrConnectWithoutUserInput = {
    where: PurchaseWhereUniqueInput
    create: XOR<PurchaseCreateWithoutUserInput, PurchaseUncheckedCreateWithoutUserInput>
  }

  export type PurchaseCreateManyUserInputEnvelope = {
    data: PurchaseCreateManyUserInput | PurchaseCreateManyUserInput[]
  }

  export type WatchlistCreateWithoutUserInput = {
    id?: string
    createAt?: Date | string
    car?: CarModalCreateNestedManyWithoutWatchlistInput
  }

  export type WatchlistUncheckedCreateWithoutUserInput = {
    id?: string
    createAt?: Date | string
    car?: CarModalUncheckedCreateNestedManyWithoutWatchlistInput
  }

  export type WatchlistCreateOrConnectWithoutUserInput = {
    where: WatchlistWhereUniqueInput
    create: XOR<WatchlistCreateWithoutUserInput, WatchlistUncheckedCreateWithoutUserInput>
  }

  export type WatchlistCreateManyUserInputEnvelope = {
    data: WatchlistCreateManyUserInput | WatchlistCreateManyUserInput[]
  }

  export type CarModalCreateWithoutUserInput = {
    id?: string
    Modal: string
    engine: string
    fuel: string
    year: string
    submodal: string
    transmission: string
    seating: number
    coverimg: string
    frontimg: string
    sideimg: string
    backimg: string
    driven: bigint | number
    drivetrain: string
    mileage: string
    price: bigint | number
    Body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rating?: string | null
    verify?: boolean | null
    Availablecity: string
    des: string
    Vehicleno: string
    RentorSell: string
    brand: MakeCreateNestedOneWithoutCarModalInput
    Watchlist?: WatchlistCreateNestedOneWithoutCarInput
    Rent?: RentCreateNestedManyWithoutCarModalInput
    Purchase?: PurchaseCreateNestedManyWithoutCarModalInput
  }

  export type CarModalUncheckedCreateWithoutUserInput = {
    id?: string
    Modal: string
    brandId: string
    engine: string
    fuel: string
    year: string
    submodal: string
    transmission: string
    seating: number
    coverimg: string
    frontimg: string
    sideimg: string
    backimg: string
    driven: bigint | number
    drivetrain: string
    mileage: string
    price: bigint | number
    Body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rating?: string | null
    verify?: boolean | null
    Availablecity: string
    des: string
    Vehicleno: string
    RentorSell: string
    watchlistId?: string | null
    Rent?: RentUncheckedCreateNestedManyWithoutCarModalInput
    Purchase?: PurchaseUncheckedCreateNestedManyWithoutCarModalInput
  }

  export type CarModalCreateOrConnectWithoutUserInput = {
    where: CarModalWhereUniqueInput
    create: XOR<CarModalCreateWithoutUserInput, CarModalUncheckedCreateWithoutUserInput>
  }

  export type CarModalCreateManyUserInputEnvelope = {
    data: CarModalCreateManyUserInput | CarModalCreateManyUserInput[]
  }

  export type RentCreateWithoutUserInput = {
    id?: string
    startdatetime: Date | string
    enddatetime: Date | string
    paymentmode: string
    razorpay_order_id: string
    razorpay_payment_id: string
    razorpay_signature: string
    price: bigint | number
    createdAt?: Date | string
    CarModal?: CarModalCreateNestedOneWithoutRentInput
  }

  export type RentUncheckedCreateWithoutUserInput = {
    id?: string
    startdatetime: Date | string
    enddatetime: Date | string
    paymentmode: string
    razorpay_order_id: string
    razorpay_payment_id: string
    razorpay_signature: string
    price: bigint | number
    createdAt?: Date | string
    carModalId?: string | null
  }

  export type RentCreateOrConnectWithoutUserInput = {
    where: RentWhereUniqueInput
    create: XOR<RentCreateWithoutUserInput, RentUncheckedCreateWithoutUserInput>
  }

  export type RentCreateManyUserInputEnvelope = {
    data: RentCreateManyUserInput | RentCreateManyUserInput[]
  }

  export type PurchaseUpsertWithWhereUniqueWithoutUserInput = {
    where: PurchaseWhereUniqueInput
    update: XOR<PurchaseUpdateWithoutUserInput, PurchaseUncheckedUpdateWithoutUserInput>
    create: XOR<PurchaseCreateWithoutUserInput, PurchaseUncheckedCreateWithoutUserInput>
  }

  export type PurchaseUpdateWithWhereUniqueWithoutUserInput = {
    where: PurchaseWhereUniqueInput
    data: XOR<PurchaseUpdateWithoutUserInput, PurchaseUncheckedUpdateWithoutUserInput>
  }

  export type PurchaseUpdateManyWithWhereWithoutUserInput = {
    where: PurchaseScalarWhereInput
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyWithoutUserInput>
  }

  export type WatchlistUpsertWithWhereUniqueWithoutUserInput = {
    where: WatchlistWhereUniqueInput
    update: XOR<WatchlistUpdateWithoutUserInput, WatchlistUncheckedUpdateWithoutUserInput>
    create: XOR<WatchlistCreateWithoutUserInput, WatchlistUncheckedCreateWithoutUserInput>
  }

  export type WatchlistUpdateWithWhereUniqueWithoutUserInput = {
    where: WatchlistWhereUniqueInput
    data: XOR<WatchlistUpdateWithoutUserInput, WatchlistUncheckedUpdateWithoutUserInput>
  }

  export type WatchlistUpdateManyWithWhereWithoutUserInput = {
    where: WatchlistScalarWhereInput
    data: XOR<WatchlistUpdateManyMutationInput, WatchlistUncheckedUpdateManyWithoutUserInput>
  }

  export type WatchlistScalarWhereInput = {
    AND?: WatchlistScalarWhereInput | WatchlistScalarWhereInput[]
    OR?: WatchlistScalarWhereInput[]
    NOT?: WatchlistScalarWhereInput | WatchlistScalarWhereInput[]
    id?: StringFilter<"Watchlist"> | string
    createAt?: DateTimeFilter<"Watchlist"> | Date | string
    userid?: StringFilter<"Watchlist"> | string
  }

  export type CarModalUpsertWithWhereUniqueWithoutUserInput = {
    where: CarModalWhereUniqueInput
    update: XOR<CarModalUpdateWithoutUserInput, CarModalUncheckedUpdateWithoutUserInput>
    create: XOR<CarModalCreateWithoutUserInput, CarModalUncheckedCreateWithoutUserInput>
  }

  export type CarModalUpdateWithWhereUniqueWithoutUserInput = {
    where: CarModalWhereUniqueInput
    data: XOR<CarModalUpdateWithoutUserInput, CarModalUncheckedUpdateWithoutUserInput>
  }

  export type CarModalUpdateManyWithWhereWithoutUserInput = {
    where: CarModalScalarWhereInput
    data: XOR<CarModalUpdateManyMutationInput, CarModalUncheckedUpdateManyWithoutUserInput>
  }

  export type RentUpsertWithWhereUniqueWithoutUserInput = {
    where: RentWhereUniqueInput
    update: XOR<RentUpdateWithoutUserInput, RentUncheckedUpdateWithoutUserInput>
    create: XOR<RentCreateWithoutUserInput, RentUncheckedCreateWithoutUserInput>
  }

  export type RentUpdateWithWhereUniqueWithoutUserInput = {
    where: RentWhereUniqueInput
    data: XOR<RentUpdateWithoutUserInput, RentUncheckedUpdateWithoutUserInput>
  }

  export type RentUpdateManyWithWhereWithoutUserInput = {
    where: RentScalarWhereInput
    data: XOR<RentUpdateManyMutationInput, RentUncheckedUpdateManyWithoutUserInput>
  }

  export type UserCreateWithoutRentInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    purchase?: PurchaseCreateNestedManyWithoutUserInput
    watchlist?: WatchlistCreateNestedManyWithoutUserInput
    CarModal?: CarModalCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRentInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    purchase?: PurchaseUncheckedCreateNestedManyWithoutUserInput
    watchlist?: WatchlistUncheckedCreateNestedManyWithoutUserInput
    CarModal?: CarModalUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRentInput, UserUncheckedCreateWithoutRentInput>
  }

  export type CarModalCreateWithoutRentInput = {
    id?: string
    Modal: string
    engine: string
    fuel: string
    year: string
    submodal: string
    transmission: string
    seating: number
    coverimg: string
    frontimg: string
    sideimg: string
    backimg: string
    driven: bigint | number
    drivetrain: string
    mileage: string
    price: bigint | number
    Body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rating?: string | null
    verify?: boolean | null
    Availablecity: string
    des: string
    Vehicleno: string
    RentorSell: string
    brand: MakeCreateNestedOneWithoutCarModalInput
    user: UserCreateNestedOneWithoutCarModalInput
    Watchlist?: WatchlistCreateNestedOneWithoutCarInput
    Purchase?: PurchaseCreateNestedManyWithoutCarModalInput
  }

  export type CarModalUncheckedCreateWithoutRentInput = {
    id?: string
    Modal: string
    brandId: string
    engine: string
    fuel: string
    year: string
    submodal: string
    transmission: string
    seating: number
    coverimg: string
    frontimg: string
    sideimg: string
    backimg: string
    driven: bigint | number
    drivetrain: string
    mileage: string
    price: bigint | number
    Body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userid: string
    rating?: string | null
    verify?: boolean | null
    Availablecity: string
    des: string
    Vehicleno: string
    RentorSell: string
    watchlistId?: string | null
    Purchase?: PurchaseUncheckedCreateNestedManyWithoutCarModalInput
  }

  export type CarModalCreateOrConnectWithoutRentInput = {
    where: CarModalWhereUniqueInput
    create: XOR<CarModalCreateWithoutRentInput, CarModalUncheckedCreateWithoutRentInput>
  }

  export type UserUpsertWithoutRentInput = {
    update: XOR<UserUpdateWithoutRentInput, UserUncheckedUpdateWithoutRentInput>
    create: XOR<UserCreateWithoutRentInput, UserUncheckedCreateWithoutRentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRentInput, UserUncheckedUpdateWithoutRentInput>
  }

  export type UserUpdateWithoutRentInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchase?: PurchaseUpdateManyWithoutUserNestedInput
    watchlist?: WatchlistUpdateManyWithoutUserNestedInput
    CarModal?: CarModalUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRentInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchase?: PurchaseUncheckedUpdateManyWithoutUserNestedInput
    watchlist?: WatchlistUncheckedUpdateManyWithoutUserNestedInput
    CarModal?: CarModalUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CarModalUpsertWithoutRentInput = {
    update: XOR<CarModalUpdateWithoutRentInput, CarModalUncheckedUpdateWithoutRentInput>
    create: XOR<CarModalCreateWithoutRentInput, CarModalUncheckedCreateWithoutRentInput>
    where?: CarModalWhereInput
  }

  export type CarModalUpdateToOneWithWhereWithoutRentInput = {
    where?: CarModalWhereInput
    data: XOR<CarModalUpdateWithoutRentInput, CarModalUncheckedUpdateWithoutRentInput>
  }

  export type CarModalUpdateWithoutRentInput = {
    Modal?: StringFieldUpdateOperationsInput | string
    engine?: StringFieldUpdateOperationsInput | string
    fuel?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    submodal?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    seating?: IntFieldUpdateOperationsInput | number
    coverimg?: StringFieldUpdateOperationsInput | string
    frontimg?: StringFieldUpdateOperationsInput | string
    sideimg?: StringFieldUpdateOperationsInput | string
    backimg?: StringFieldUpdateOperationsInput | string
    driven?: BigIntFieldUpdateOperationsInput | bigint | number
    drivetrain?: StringFieldUpdateOperationsInput | string
    mileage?: StringFieldUpdateOperationsInput | string
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    Body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: NullableStringFieldUpdateOperationsInput | string | null
    verify?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Availablecity?: StringFieldUpdateOperationsInput | string
    des?: StringFieldUpdateOperationsInput | string
    Vehicleno?: StringFieldUpdateOperationsInput | string
    RentorSell?: StringFieldUpdateOperationsInput | string
    brand?: MakeUpdateOneRequiredWithoutCarModalNestedInput
    user?: UserUpdateOneRequiredWithoutCarModalNestedInput
    Watchlist?: WatchlistUpdateOneWithoutCarNestedInput
    Purchase?: PurchaseUpdateManyWithoutCarModalNestedInput
  }

  export type CarModalUncheckedUpdateWithoutRentInput = {
    Modal?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    engine?: StringFieldUpdateOperationsInput | string
    fuel?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    submodal?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    seating?: IntFieldUpdateOperationsInput | number
    coverimg?: StringFieldUpdateOperationsInput | string
    frontimg?: StringFieldUpdateOperationsInput | string
    sideimg?: StringFieldUpdateOperationsInput | string
    backimg?: StringFieldUpdateOperationsInput | string
    driven?: BigIntFieldUpdateOperationsInput | bigint | number
    drivetrain?: StringFieldUpdateOperationsInput | string
    mileage?: StringFieldUpdateOperationsInput | string
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    Body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userid?: StringFieldUpdateOperationsInput | string
    rating?: NullableStringFieldUpdateOperationsInput | string | null
    verify?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Availablecity?: StringFieldUpdateOperationsInput | string
    des?: StringFieldUpdateOperationsInput | string
    Vehicleno?: StringFieldUpdateOperationsInput | string
    RentorSell?: StringFieldUpdateOperationsInput | string
    watchlistId?: NullableStringFieldUpdateOperationsInput | string | null
    Purchase?: PurchaseUncheckedUpdateManyWithoutCarModalNestedInput
  }

  export type UserCreateWithoutPurchaseInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    watchlist?: WatchlistCreateNestedManyWithoutUserInput
    CarModal?: CarModalCreateNestedManyWithoutUserInput
    Rent?: RentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPurchaseInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    watchlist?: WatchlistUncheckedCreateNestedManyWithoutUserInput
    CarModal?: CarModalUncheckedCreateNestedManyWithoutUserInput
    Rent?: RentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPurchaseInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPurchaseInput, UserUncheckedCreateWithoutPurchaseInput>
  }

  export type CarModalCreateWithoutPurchaseInput = {
    id?: string
    Modal: string
    engine: string
    fuel: string
    year: string
    submodal: string
    transmission: string
    seating: number
    coverimg: string
    frontimg: string
    sideimg: string
    backimg: string
    driven: bigint | number
    drivetrain: string
    mileage: string
    price: bigint | number
    Body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rating?: string | null
    verify?: boolean | null
    Availablecity: string
    des: string
    Vehicleno: string
    RentorSell: string
    brand: MakeCreateNestedOneWithoutCarModalInput
    user: UserCreateNestedOneWithoutCarModalInput
    Watchlist?: WatchlistCreateNestedOneWithoutCarInput
    Rent?: RentCreateNestedManyWithoutCarModalInput
  }

  export type CarModalUncheckedCreateWithoutPurchaseInput = {
    id?: string
    Modal: string
    brandId: string
    engine: string
    fuel: string
    year: string
    submodal: string
    transmission: string
    seating: number
    coverimg: string
    frontimg: string
    sideimg: string
    backimg: string
    driven: bigint | number
    drivetrain: string
    mileage: string
    price: bigint | number
    Body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userid: string
    rating?: string | null
    verify?: boolean | null
    Availablecity: string
    des: string
    Vehicleno: string
    RentorSell: string
    watchlistId?: string | null
    Rent?: RentUncheckedCreateNestedManyWithoutCarModalInput
  }

  export type CarModalCreateOrConnectWithoutPurchaseInput = {
    where: CarModalWhereUniqueInput
    create: XOR<CarModalCreateWithoutPurchaseInput, CarModalUncheckedCreateWithoutPurchaseInput>
  }

  export type UserUpsertWithoutPurchaseInput = {
    update: XOR<UserUpdateWithoutPurchaseInput, UserUncheckedUpdateWithoutPurchaseInput>
    create: XOR<UserCreateWithoutPurchaseInput, UserUncheckedCreateWithoutPurchaseInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPurchaseInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPurchaseInput, UserUncheckedUpdateWithoutPurchaseInput>
  }

  export type UserUpdateWithoutPurchaseInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    watchlist?: WatchlistUpdateManyWithoutUserNestedInput
    CarModal?: CarModalUpdateManyWithoutUserNestedInput
    Rent?: RentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPurchaseInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    watchlist?: WatchlistUncheckedUpdateManyWithoutUserNestedInput
    CarModal?: CarModalUncheckedUpdateManyWithoutUserNestedInput
    Rent?: RentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CarModalUpsertWithoutPurchaseInput = {
    update: XOR<CarModalUpdateWithoutPurchaseInput, CarModalUncheckedUpdateWithoutPurchaseInput>
    create: XOR<CarModalCreateWithoutPurchaseInput, CarModalUncheckedCreateWithoutPurchaseInput>
    where?: CarModalWhereInput
  }

  export type CarModalUpdateToOneWithWhereWithoutPurchaseInput = {
    where?: CarModalWhereInput
    data: XOR<CarModalUpdateWithoutPurchaseInput, CarModalUncheckedUpdateWithoutPurchaseInput>
  }

  export type CarModalUpdateWithoutPurchaseInput = {
    Modal?: StringFieldUpdateOperationsInput | string
    engine?: StringFieldUpdateOperationsInput | string
    fuel?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    submodal?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    seating?: IntFieldUpdateOperationsInput | number
    coverimg?: StringFieldUpdateOperationsInput | string
    frontimg?: StringFieldUpdateOperationsInput | string
    sideimg?: StringFieldUpdateOperationsInput | string
    backimg?: StringFieldUpdateOperationsInput | string
    driven?: BigIntFieldUpdateOperationsInput | bigint | number
    drivetrain?: StringFieldUpdateOperationsInput | string
    mileage?: StringFieldUpdateOperationsInput | string
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    Body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: NullableStringFieldUpdateOperationsInput | string | null
    verify?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Availablecity?: StringFieldUpdateOperationsInput | string
    des?: StringFieldUpdateOperationsInput | string
    Vehicleno?: StringFieldUpdateOperationsInput | string
    RentorSell?: StringFieldUpdateOperationsInput | string
    brand?: MakeUpdateOneRequiredWithoutCarModalNestedInput
    user?: UserUpdateOneRequiredWithoutCarModalNestedInput
    Watchlist?: WatchlistUpdateOneWithoutCarNestedInput
    Rent?: RentUpdateManyWithoutCarModalNestedInput
  }

  export type CarModalUncheckedUpdateWithoutPurchaseInput = {
    Modal?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    engine?: StringFieldUpdateOperationsInput | string
    fuel?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    submodal?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    seating?: IntFieldUpdateOperationsInput | number
    coverimg?: StringFieldUpdateOperationsInput | string
    frontimg?: StringFieldUpdateOperationsInput | string
    sideimg?: StringFieldUpdateOperationsInput | string
    backimg?: StringFieldUpdateOperationsInput | string
    driven?: BigIntFieldUpdateOperationsInput | bigint | number
    drivetrain?: StringFieldUpdateOperationsInput | string
    mileage?: StringFieldUpdateOperationsInput | string
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    Body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userid?: StringFieldUpdateOperationsInput | string
    rating?: NullableStringFieldUpdateOperationsInput | string | null
    verify?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Availablecity?: StringFieldUpdateOperationsInput | string
    des?: StringFieldUpdateOperationsInput | string
    Vehicleno?: StringFieldUpdateOperationsInput | string
    RentorSell?: StringFieldUpdateOperationsInput | string
    watchlistId?: NullableStringFieldUpdateOperationsInput | string | null
    Rent?: RentUncheckedUpdateManyWithoutCarModalNestedInput
  }

  export type UserCreateWithoutWatchlistInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    purchase?: PurchaseCreateNestedManyWithoutUserInput
    CarModal?: CarModalCreateNestedManyWithoutUserInput
    Rent?: RentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWatchlistInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    purchase?: PurchaseUncheckedCreateNestedManyWithoutUserInput
    CarModal?: CarModalUncheckedCreateNestedManyWithoutUserInput
    Rent?: RentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWatchlistInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWatchlistInput, UserUncheckedCreateWithoutWatchlistInput>
  }

  export type CarModalCreateWithoutWatchlistInput = {
    id?: string
    Modal: string
    engine: string
    fuel: string
    year: string
    submodal: string
    transmission: string
    seating: number
    coverimg: string
    frontimg: string
    sideimg: string
    backimg: string
    driven: bigint | number
    drivetrain: string
    mileage: string
    price: bigint | number
    Body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rating?: string | null
    verify?: boolean | null
    Availablecity: string
    des: string
    Vehicleno: string
    RentorSell: string
    brand: MakeCreateNestedOneWithoutCarModalInput
    user: UserCreateNestedOneWithoutCarModalInput
    Rent?: RentCreateNestedManyWithoutCarModalInput
    Purchase?: PurchaseCreateNestedManyWithoutCarModalInput
  }

  export type CarModalUncheckedCreateWithoutWatchlistInput = {
    id?: string
    Modal: string
    brandId: string
    engine: string
    fuel: string
    year: string
    submodal: string
    transmission: string
    seating: number
    coverimg: string
    frontimg: string
    sideimg: string
    backimg: string
    driven: bigint | number
    drivetrain: string
    mileage: string
    price: bigint | number
    Body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userid: string
    rating?: string | null
    verify?: boolean | null
    Availablecity: string
    des: string
    Vehicleno: string
    RentorSell: string
    Rent?: RentUncheckedCreateNestedManyWithoutCarModalInput
    Purchase?: PurchaseUncheckedCreateNestedManyWithoutCarModalInput
  }

  export type CarModalCreateOrConnectWithoutWatchlistInput = {
    where: CarModalWhereUniqueInput
    create: XOR<CarModalCreateWithoutWatchlistInput, CarModalUncheckedCreateWithoutWatchlistInput>
  }

  export type CarModalCreateManyWatchlistInputEnvelope = {
    data: CarModalCreateManyWatchlistInput | CarModalCreateManyWatchlistInput[]
  }

  export type UserUpsertWithoutWatchlistInput = {
    update: XOR<UserUpdateWithoutWatchlistInput, UserUncheckedUpdateWithoutWatchlistInput>
    create: XOR<UserCreateWithoutWatchlistInput, UserUncheckedCreateWithoutWatchlistInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWatchlistInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWatchlistInput, UserUncheckedUpdateWithoutWatchlistInput>
  }

  export type UserUpdateWithoutWatchlistInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchase?: PurchaseUpdateManyWithoutUserNestedInput
    CarModal?: CarModalUpdateManyWithoutUserNestedInput
    Rent?: RentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWatchlistInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchase?: PurchaseUncheckedUpdateManyWithoutUserNestedInput
    CarModal?: CarModalUncheckedUpdateManyWithoutUserNestedInput
    Rent?: RentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CarModalUpsertWithWhereUniqueWithoutWatchlistInput = {
    where: CarModalWhereUniqueInput
    update: XOR<CarModalUpdateWithoutWatchlistInput, CarModalUncheckedUpdateWithoutWatchlistInput>
    create: XOR<CarModalCreateWithoutWatchlistInput, CarModalUncheckedCreateWithoutWatchlistInput>
  }

  export type CarModalUpdateWithWhereUniqueWithoutWatchlistInput = {
    where: CarModalWhereUniqueInput
    data: XOR<CarModalUpdateWithoutWatchlistInput, CarModalUncheckedUpdateWithoutWatchlistInput>
  }

  export type CarModalUpdateManyWithWhereWithoutWatchlistInput = {
    where: CarModalScalarWhereInput
    data: XOR<CarModalUpdateManyMutationInput, CarModalUncheckedUpdateManyWithoutWatchlistInput>
  }

  export type CarModalCreateManyBrandInput = {
    id?: string
    Modal: string
    engine: string
    fuel: string
    year: string
    submodal: string
    transmission: string
    seating: number
    coverimg: string
    frontimg: string
    sideimg: string
    backimg: string
    driven: bigint | number
    drivetrain: string
    mileage: string
    price: bigint | number
    Body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userid: string
    rating?: string | null
    verify?: boolean | null
    Availablecity: string
    des: string
    Vehicleno: string
    RentorSell: string
    watchlistId?: string | null
  }

  export type CarModalUpdateWithoutBrandInput = {
    Modal?: StringFieldUpdateOperationsInput | string
    engine?: StringFieldUpdateOperationsInput | string
    fuel?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    submodal?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    seating?: IntFieldUpdateOperationsInput | number
    coverimg?: StringFieldUpdateOperationsInput | string
    frontimg?: StringFieldUpdateOperationsInput | string
    sideimg?: StringFieldUpdateOperationsInput | string
    backimg?: StringFieldUpdateOperationsInput | string
    driven?: BigIntFieldUpdateOperationsInput | bigint | number
    drivetrain?: StringFieldUpdateOperationsInput | string
    mileage?: StringFieldUpdateOperationsInput | string
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    Body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: NullableStringFieldUpdateOperationsInput | string | null
    verify?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Availablecity?: StringFieldUpdateOperationsInput | string
    des?: StringFieldUpdateOperationsInput | string
    Vehicleno?: StringFieldUpdateOperationsInput | string
    RentorSell?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutCarModalNestedInput
    Watchlist?: WatchlistUpdateOneWithoutCarNestedInput
    Rent?: RentUpdateManyWithoutCarModalNestedInput
    Purchase?: PurchaseUpdateManyWithoutCarModalNestedInput
  }

  export type CarModalUncheckedUpdateWithoutBrandInput = {
    Modal?: StringFieldUpdateOperationsInput | string
    engine?: StringFieldUpdateOperationsInput | string
    fuel?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    submodal?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    seating?: IntFieldUpdateOperationsInput | number
    coverimg?: StringFieldUpdateOperationsInput | string
    frontimg?: StringFieldUpdateOperationsInput | string
    sideimg?: StringFieldUpdateOperationsInput | string
    backimg?: StringFieldUpdateOperationsInput | string
    driven?: BigIntFieldUpdateOperationsInput | bigint | number
    drivetrain?: StringFieldUpdateOperationsInput | string
    mileage?: StringFieldUpdateOperationsInput | string
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    Body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userid?: StringFieldUpdateOperationsInput | string
    rating?: NullableStringFieldUpdateOperationsInput | string | null
    verify?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Availablecity?: StringFieldUpdateOperationsInput | string
    des?: StringFieldUpdateOperationsInput | string
    Vehicleno?: StringFieldUpdateOperationsInput | string
    RentorSell?: StringFieldUpdateOperationsInput | string
    watchlistId?: NullableStringFieldUpdateOperationsInput | string | null
    Rent?: RentUncheckedUpdateManyWithoutCarModalNestedInput
    Purchase?: PurchaseUncheckedUpdateManyWithoutCarModalNestedInput
  }

  export type CarModalUncheckedUpdateManyWithoutBrandInput = {
    Modal?: StringFieldUpdateOperationsInput | string
    engine?: StringFieldUpdateOperationsInput | string
    fuel?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    submodal?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    seating?: IntFieldUpdateOperationsInput | number
    coverimg?: StringFieldUpdateOperationsInput | string
    frontimg?: StringFieldUpdateOperationsInput | string
    sideimg?: StringFieldUpdateOperationsInput | string
    backimg?: StringFieldUpdateOperationsInput | string
    driven?: BigIntFieldUpdateOperationsInput | bigint | number
    drivetrain?: StringFieldUpdateOperationsInput | string
    mileage?: StringFieldUpdateOperationsInput | string
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    Body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userid?: StringFieldUpdateOperationsInput | string
    rating?: NullableStringFieldUpdateOperationsInput | string | null
    verify?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Availablecity?: StringFieldUpdateOperationsInput | string
    des?: StringFieldUpdateOperationsInput | string
    Vehicleno?: StringFieldUpdateOperationsInput | string
    RentorSell?: StringFieldUpdateOperationsInput | string
    watchlistId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RentCreateManyCarModalInput = {
    id?: string
    startdatetime: Date | string
    enddatetime: Date | string
    paymentmode: string
    userId: string
    razorpay_order_id: string
    razorpay_payment_id: string
    razorpay_signature: string
    price: bigint | number
    createdAt?: Date | string
  }

  export type PurchaseCreateManyCarModalInput = {
    id?: string
    price: bigint | number
    createdAt?: Date | string
    userId: string
    razorpay_order_id: string
    razorpay_payment_id: string
    razorpay_signature: string
  }

  export type RentUpdateWithoutCarModalInput = {
    startdatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    enddatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentmode?: StringFieldUpdateOperationsInput | string
    razorpay_order_id?: StringFieldUpdateOperationsInput | string
    razorpay_payment_id?: StringFieldUpdateOperationsInput | string
    razorpay_signature?: StringFieldUpdateOperationsInput | string
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutRentNestedInput
  }

  export type RentUncheckedUpdateWithoutCarModalInput = {
    startdatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    enddatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentmode?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    razorpay_order_id?: StringFieldUpdateOperationsInput | string
    razorpay_payment_id?: StringFieldUpdateOperationsInput | string
    razorpay_signature?: StringFieldUpdateOperationsInput | string
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentUncheckedUpdateManyWithoutCarModalInput = {
    startdatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    enddatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentmode?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    razorpay_order_id?: StringFieldUpdateOperationsInput | string
    razorpay_payment_id?: StringFieldUpdateOperationsInput | string
    razorpay_signature?: StringFieldUpdateOperationsInput | string
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseUpdateWithoutCarModalInput = {
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    razorpay_order_id?: StringFieldUpdateOperationsInput | string
    razorpay_payment_id?: StringFieldUpdateOperationsInput | string
    razorpay_signature?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneWithoutPurchaseNestedInput
  }

  export type PurchaseUncheckedUpdateWithoutCarModalInput = {
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    razorpay_order_id?: StringFieldUpdateOperationsInput | string
    razorpay_payment_id?: StringFieldUpdateOperationsInput | string
    razorpay_signature?: StringFieldUpdateOperationsInput | string
  }

  export type PurchaseUncheckedUpdateManyWithoutCarModalInput = {
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    razorpay_order_id?: StringFieldUpdateOperationsInput | string
    razorpay_payment_id?: StringFieldUpdateOperationsInput | string
    razorpay_signature?: StringFieldUpdateOperationsInput | string
  }

  export type PurchaseCreateManyUserInput = {
    id?: string
    price: bigint | number
    createdAt?: Date | string
    razorpay_order_id: string
    razorpay_payment_id: string
    razorpay_signature: string
    carModalId?: string | null
  }

  export type WatchlistCreateManyUserInput = {
    id?: string
    createAt?: Date | string
  }

  export type CarModalCreateManyUserInput = {
    id?: string
    Modal: string
    brandId: string
    engine: string
    fuel: string
    year: string
    submodal: string
    transmission: string
    seating: number
    coverimg: string
    frontimg: string
    sideimg: string
    backimg: string
    driven: bigint | number
    drivetrain: string
    mileage: string
    price: bigint | number
    Body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rating?: string | null
    verify?: boolean | null
    Availablecity: string
    des: string
    Vehicleno: string
    RentorSell: string
    watchlistId?: string | null
  }

  export type RentCreateManyUserInput = {
    id?: string
    startdatetime: Date | string
    enddatetime: Date | string
    paymentmode: string
    razorpay_order_id: string
    razorpay_payment_id: string
    razorpay_signature: string
    price: bigint | number
    createdAt?: Date | string
    carModalId?: string | null
  }

  export type PurchaseUpdateWithoutUserInput = {
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    razorpay_order_id?: StringFieldUpdateOperationsInput | string
    razorpay_payment_id?: StringFieldUpdateOperationsInput | string
    razorpay_signature?: StringFieldUpdateOperationsInput | string
    CarModal?: CarModalUpdateOneWithoutPurchaseNestedInput
  }

  export type PurchaseUncheckedUpdateWithoutUserInput = {
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    razorpay_order_id?: StringFieldUpdateOperationsInput | string
    razorpay_payment_id?: StringFieldUpdateOperationsInput | string
    razorpay_signature?: StringFieldUpdateOperationsInput | string
    carModalId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PurchaseUncheckedUpdateManyWithoutUserInput = {
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    razorpay_order_id?: StringFieldUpdateOperationsInput | string
    razorpay_payment_id?: StringFieldUpdateOperationsInput | string
    razorpay_signature?: StringFieldUpdateOperationsInput | string
    carModalId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WatchlistUpdateWithoutUserInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    car?: CarModalUpdateManyWithoutWatchlistNestedInput
  }

  export type WatchlistUncheckedUpdateWithoutUserInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    car?: CarModalUncheckedUpdateManyWithoutWatchlistNestedInput
  }

  export type WatchlistUncheckedUpdateManyWithoutUserInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarModalUpdateWithoutUserInput = {
    Modal?: StringFieldUpdateOperationsInput | string
    engine?: StringFieldUpdateOperationsInput | string
    fuel?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    submodal?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    seating?: IntFieldUpdateOperationsInput | number
    coverimg?: StringFieldUpdateOperationsInput | string
    frontimg?: StringFieldUpdateOperationsInput | string
    sideimg?: StringFieldUpdateOperationsInput | string
    backimg?: StringFieldUpdateOperationsInput | string
    driven?: BigIntFieldUpdateOperationsInput | bigint | number
    drivetrain?: StringFieldUpdateOperationsInput | string
    mileage?: StringFieldUpdateOperationsInput | string
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    Body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: NullableStringFieldUpdateOperationsInput | string | null
    verify?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Availablecity?: StringFieldUpdateOperationsInput | string
    des?: StringFieldUpdateOperationsInput | string
    Vehicleno?: StringFieldUpdateOperationsInput | string
    RentorSell?: StringFieldUpdateOperationsInput | string
    brand?: MakeUpdateOneRequiredWithoutCarModalNestedInput
    Watchlist?: WatchlistUpdateOneWithoutCarNestedInput
    Rent?: RentUpdateManyWithoutCarModalNestedInput
    Purchase?: PurchaseUpdateManyWithoutCarModalNestedInput
  }

  export type CarModalUncheckedUpdateWithoutUserInput = {
    Modal?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    engine?: StringFieldUpdateOperationsInput | string
    fuel?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    submodal?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    seating?: IntFieldUpdateOperationsInput | number
    coverimg?: StringFieldUpdateOperationsInput | string
    frontimg?: StringFieldUpdateOperationsInput | string
    sideimg?: StringFieldUpdateOperationsInput | string
    backimg?: StringFieldUpdateOperationsInput | string
    driven?: BigIntFieldUpdateOperationsInput | bigint | number
    drivetrain?: StringFieldUpdateOperationsInput | string
    mileage?: StringFieldUpdateOperationsInput | string
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    Body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: NullableStringFieldUpdateOperationsInput | string | null
    verify?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Availablecity?: StringFieldUpdateOperationsInput | string
    des?: StringFieldUpdateOperationsInput | string
    Vehicleno?: StringFieldUpdateOperationsInput | string
    RentorSell?: StringFieldUpdateOperationsInput | string
    watchlistId?: NullableStringFieldUpdateOperationsInput | string | null
    Rent?: RentUncheckedUpdateManyWithoutCarModalNestedInput
    Purchase?: PurchaseUncheckedUpdateManyWithoutCarModalNestedInput
  }

  export type CarModalUncheckedUpdateManyWithoutUserInput = {
    Modal?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    engine?: StringFieldUpdateOperationsInput | string
    fuel?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    submodal?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    seating?: IntFieldUpdateOperationsInput | number
    coverimg?: StringFieldUpdateOperationsInput | string
    frontimg?: StringFieldUpdateOperationsInput | string
    sideimg?: StringFieldUpdateOperationsInput | string
    backimg?: StringFieldUpdateOperationsInput | string
    driven?: BigIntFieldUpdateOperationsInput | bigint | number
    drivetrain?: StringFieldUpdateOperationsInput | string
    mileage?: StringFieldUpdateOperationsInput | string
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    Body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: NullableStringFieldUpdateOperationsInput | string | null
    verify?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Availablecity?: StringFieldUpdateOperationsInput | string
    des?: StringFieldUpdateOperationsInput | string
    Vehicleno?: StringFieldUpdateOperationsInput | string
    RentorSell?: StringFieldUpdateOperationsInput | string
    watchlistId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RentUpdateWithoutUserInput = {
    startdatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    enddatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentmode?: StringFieldUpdateOperationsInput | string
    razorpay_order_id?: StringFieldUpdateOperationsInput | string
    razorpay_payment_id?: StringFieldUpdateOperationsInput | string
    razorpay_signature?: StringFieldUpdateOperationsInput | string
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CarModal?: CarModalUpdateOneWithoutRentNestedInput
  }

  export type RentUncheckedUpdateWithoutUserInput = {
    startdatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    enddatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentmode?: StringFieldUpdateOperationsInput | string
    razorpay_order_id?: StringFieldUpdateOperationsInput | string
    razorpay_payment_id?: StringFieldUpdateOperationsInput | string
    razorpay_signature?: StringFieldUpdateOperationsInput | string
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    carModalId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RentUncheckedUpdateManyWithoutUserInput = {
    startdatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    enddatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentmode?: StringFieldUpdateOperationsInput | string
    razorpay_order_id?: StringFieldUpdateOperationsInput | string
    razorpay_payment_id?: StringFieldUpdateOperationsInput | string
    razorpay_signature?: StringFieldUpdateOperationsInput | string
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    carModalId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CarModalCreateManyWatchlistInput = {
    id?: string
    Modal: string
    brandId: string
    engine: string
    fuel: string
    year: string
    submodal: string
    transmission: string
    seating: number
    coverimg: string
    frontimg: string
    sideimg: string
    backimg: string
    driven: bigint | number
    drivetrain: string
    mileage: string
    price: bigint | number
    Body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userid: string
    rating?: string | null
    verify?: boolean | null
    Availablecity: string
    des: string
    Vehicleno: string
    RentorSell: string
  }

  export type CarModalUpdateWithoutWatchlistInput = {
    Modal?: StringFieldUpdateOperationsInput | string
    engine?: StringFieldUpdateOperationsInput | string
    fuel?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    submodal?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    seating?: IntFieldUpdateOperationsInput | number
    coverimg?: StringFieldUpdateOperationsInput | string
    frontimg?: StringFieldUpdateOperationsInput | string
    sideimg?: StringFieldUpdateOperationsInput | string
    backimg?: StringFieldUpdateOperationsInput | string
    driven?: BigIntFieldUpdateOperationsInput | bigint | number
    drivetrain?: StringFieldUpdateOperationsInput | string
    mileage?: StringFieldUpdateOperationsInput | string
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    Body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: NullableStringFieldUpdateOperationsInput | string | null
    verify?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Availablecity?: StringFieldUpdateOperationsInput | string
    des?: StringFieldUpdateOperationsInput | string
    Vehicleno?: StringFieldUpdateOperationsInput | string
    RentorSell?: StringFieldUpdateOperationsInput | string
    brand?: MakeUpdateOneRequiredWithoutCarModalNestedInput
    user?: UserUpdateOneRequiredWithoutCarModalNestedInput
    Rent?: RentUpdateManyWithoutCarModalNestedInput
    Purchase?: PurchaseUpdateManyWithoutCarModalNestedInput
  }

  export type CarModalUncheckedUpdateWithoutWatchlistInput = {
    Modal?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    engine?: StringFieldUpdateOperationsInput | string
    fuel?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    submodal?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    seating?: IntFieldUpdateOperationsInput | number
    coverimg?: StringFieldUpdateOperationsInput | string
    frontimg?: StringFieldUpdateOperationsInput | string
    sideimg?: StringFieldUpdateOperationsInput | string
    backimg?: StringFieldUpdateOperationsInput | string
    driven?: BigIntFieldUpdateOperationsInput | bigint | number
    drivetrain?: StringFieldUpdateOperationsInput | string
    mileage?: StringFieldUpdateOperationsInput | string
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    Body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userid?: StringFieldUpdateOperationsInput | string
    rating?: NullableStringFieldUpdateOperationsInput | string | null
    verify?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Availablecity?: StringFieldUpdateOperationsInput | string
    des?: StringFieldUpdateOperationsInput | string
    Vehicleno?: StringFieldUpdateOperationsInput | string
    RentorSell?: StringFieldUpdateOperationsInput | string
    Rent?: RentUncheckedUpdateManyWithoutCarModalNestedInput
    Purchase?: PurchaseUncheckedUpdateManyWithoutCarModalNestedInput
  }

  export type CarModalUncheckedUpdateManyWithoutWatchlistInput = {
    Modal?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    engine?: StringFieldUpdateOperationsInput | string
    fuel?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    submodal?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    seating?: IntFieldUpdateOperationsInput | number
    coverimg?: StringFieldUpdateOperationsInput | string
    frontimg?: StringFieldUpdateOperationsInput | string
    sideimg?: StringFieldUpdateOperationsInput | string
    backimg?: StringFieldUpdateOperationsInput | string
    driven?: BigIntFieldUpdateOperationsInput | bigint | number
    drivetrain?: StringFieldUpdateOperationsInput | string
    mileage?: StringFieldUpdateOperationsInput | string
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    Body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userid?: StringFieldUpdateOperationsInput | string
    rating?: NullableStringFieldUpdateOperationsInput | string | null
    verify?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Availablecity?: StringFieldUpdateOperationsInput | string
    des?: StringFieldUpdateOperationsInput | string
    Vehicleno?: StringFieldUpdateOperationsInput | string
    RentorSell?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use MakeCountOutputTypeDefaultArgs instead
     */
    export type MakeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MakeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CarModalCountOutputTypeDefaultArgs instead
     */
    export type CarModalCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CarModalCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WatchlistCountOutputTypeDefaultArgs instead
     */
    export type WatchlistCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WatchlistCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MakeDefaultArgs instead
     */
    export type MakeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MakeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CarModalDefaultArgs instead
     */
    export type CarModalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CarModalDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RentDefaultArgs instead
     */
    export type RentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PurchaseDefaultArgs instead
     */
    export type PurchaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PurchaseDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WatchlistDefaultArgs instead
     */
    export type WatchlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WatchlistDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}