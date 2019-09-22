interface QueryHandler{
    /**
     * Default `file`
     */
    type: string;
}

interface FileHandler extends QueryHandler{

}

interface ActionCallback extends Function{
    (err: Error, data: any): any;
}

interface SelectAllCallback extends ActionCallback{
    (err: Error, list: Array<any>);
}
interface SelectOneCallback extends ActionCallback{
    (err: Error, one: any);
}

interface Query{
    /**
     * Can be full path including filename of file, database .e.g...
     */
    reference: any;
    /**
     * a handler to query(select), insert, delete, and update.
     * Default `FileHandler`
     */
    handler: QueryHandler;
    
    constructor(reference: any, handler?: QueryHandler): Query;

    /**
     * 设置主键名，以及是否自增
     * Set primary key field, and assign whether it need increase automatically, default `false`
     * the same to `pk`
     * @param field 
     * @param autoIncrement default `false`
     */
    primaryKey(field: string, autoIncrement?: boolean): Query;
    /**
     * 设置主键名，以及是否自增
     * Set primary key field, and assign whether it need increase automatically, default `false`
     * the same to `primaryKey`
     * @param field 
     * @param autoIncrement default `false`
     */
    pk(field: string, autoIncrement: boolean): Query;

    /**
     * 条件
     * where
     * @param field 字段名
     * @param expression 比较表达式、运算符-operator
     * @param expected 期望值
     */
    where(field: string, expression: string, expected: string | Array<any>): Query;
    /**
     * @deprecated
     * where and
     * @param field 
     * @param operator 
     * @param expected 
     */
    and(field: string, expression: string, expected: string | Array<any>): Query;
    /**
     * where or
     * @param field 
     * @param operator 
     * @param expected 
     */
    or(field: string, expression: string, expected: string | Array<any>): Query;

    /**
     * Equal to expected value, the same to `eq`
     * @param field 
     * @param expected 
     */
    equal(field: string, expected: any): Query;
    /**
     * Equal to expected value, the same to `equal`
     * @param field 
     * @param expected 
     */
    eq(field: string, expected: any): Query;

    /**
     * Not equal to expected value, the same to `ne`
     * @param field 
     * @param expected 
     */
    notEqual(field: string, expected: any): Query;
    /**
     * Not equal to expected value, the same to `notEqual`
     * @param field 
     * @param expected 
     */
    ne(field: string, expected: any): Query;

    /**
     * Greater than expected value, the same to `gt`
     * @param field 
     * @param expected 
     */
    greaterThan(field: string, expected: number): Query;
    /**
     * Greater than expected value, the same to `greaterThan`
     * @param field 
     * @param expected 
     */
    gt(field: string, expected: number): Query;

    /**
     * Greater than or equal to expected value, the same to `ge`
     * @param field 
     * @param expected 
     */
    greaterEqual(field: string, expected: number): Query;
    /**
     * Greater than or equal to expected value, the same to `greaterEqual`
     * @param field 
     * @param expected 
     */
    ge(field: string, expected: number): Query;

    /**
     * Less than expected value, the same to `lt`
     * @param field 
     * @param expected 
     */
    lessThan(field: string, expected: number): Query;
    /**
     * Less than expected value, the same to `lessThan`
     * @param field 
     * @param expected 
     */
    lt(field: string, expected: number): Query;

    /**
     * Less than or equal to expected value, the same to `le`
     * @param field 
     * @param expected 
     */
    lessEqual(field: string, expected: number): Query;
    /**
     * Less than or equal to expected value, the same to `lessEqual`
     * @param field 
     * @param expected 
     */
    le(field: string, expected: number): Query;

    /**
     * Whose value is in `list`
     * @param field 
     * @param expected 
     */
    in(field: string, list: Array<any>): Query;
    /**
     * Whose value is not in `list`
     * @param field 
     * @param expected 
     */
    nin(field: string, list: Array<any>): Query;

    
    /**
     * 返回所有字段
     * @param callback 
     */
    select(callback: (err: Error, list: Array<any>) => any): any;
    /**
     * 返回指定字段
     * @param fields 指定返回数据中应包含的字段
     * @param callback 回调函数
     */
    select(fields: Array<string>, callback: (err: Error, list: Array<any>) => any): any;
    
    /**
     * 返回所有字段
     * @param callback 
     */
    selectOne(callback: (err: Error, one: any) => any): any;
    /**
     * 返回指定字段
     * @param fields 指定返回数据中应包含的字段
     * @param callback 回调函数
     */
    selectOne(fields: Array<string>, callback: (err: Error, one: any) => any): any;

    /**
     * 插入单条数据
     * Insert a single piece of data
     * @param data 
     * @param callback 
     */
    insert(data: Object, callback?: (err: Error, result: any) => any): any;
    /**
     * 插入多条数据
     * Multiply insert a list of data
     * @param data 
     * @param callback 
     */
    insertAll(list: Array<any>, callback?: (err: Error, result: any) => any): any;

    /**
     * 
     * @param data 
     * @param callback 
     */
    delete(conditons: Object, callback: (err: Error, result: any) => any): any;

}

interface StaticQuery{
    (reference: any, handler?: QueryHandler): Query;
}

// 编码问题，最好先设置编码
declare var query: StaticQuery;
export = query;
