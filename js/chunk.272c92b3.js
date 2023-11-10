import { c as createComponent, r as renderUniqueStylesheet, a as renderScriptElement, b as createHeadAndContent, d as renderTemplate, e as renderComponent, u as unescapeHTML, m as maybeRenderHead, f as createAstro, g as defineStyleVars, s as spreadAttributes, h as addAttribute, i as renderSlot, F as Fragment, j as renderHead } from './chunk.db2b4c88.js';
import require$$0$2 from 'child_process';
import path$3 from 'path';
import require$$0$1 from 'fs';
import { constants } from 'node:os';
import { readFileSync } from 'node:fs';
import childProcess from 'node:child_process';
import 'stream';
import { A as AstroError, U as UnknownContentCollectionError, p as prependForwardSlash, f as ImageMissingAlt, i as isESMImportedImage, g as getImage$1 } from './chunk.65e20d8f.js';
/* empty css                *//* empty css                */import path$4, { basename, dirname } from 'node:path';
import url$1, { fileURLToPath } from 'node:url';
import { Buffer as Buffer$1 } from 'node:buffer';
import process$2 from 'node:process';
import 'node:timers/promises';
import { debuglog } from 'node:util';

function _mergeNamespaces(n, m) {
	for (var i = 0; i < m.length; i++) {
		const e = m[i];
		if (typeof e !== 'string' && !Array.isArray(e)) { for (const k in e) {
			if (k !== 'default' && !(k in n)) {
				const d = Object.getOwnPropertyDescriptor(e, k);
				if (d) {
					Object.defineProperty(n, k, d.get ? d : {
						enumerable: true,
						get: () => e[k]
					});
				}
			}
		} }
	}
	return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: 'Module' }));
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function getAugmentedNamespace(n) {
  if (n.__esModule) return n;
  var f = n.default;
	if (typeof f == "function") {
		var a = function a () {
			if (this instanceof a) {
        return Reflect.construct(f, arguments, this.constructor);
			}
			return f.apply(this, arguments);
		};
		a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

var util;
(function (util) {
    util.assertEqual = (val) => val;
    function assertIs(_arg) { }
    util.assertIs = assertIs;
    function assertNever(_x) {
        throw new Error();
    }
    util.assertNever = assertNever;
    util.arrayToEnum = (items) => {
        const obj = {};
        for (const item of items) {
            obj[item] = item;
        }
        return obj;
    };
    util.getValidEnumValues = (obj) => {
        const validKeys = util.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
        const filtered = {};
        for (const k of validKeys) {
            filtered[k] = obj[k];
        }
        return util.objectValues(filtered);
    };
    util.objectValues = (obj) => {
        return util.objectKeys(obj).map(function (e) {
            return obj[e];
        });
    };
    util.objectKeys = typeof Object.keys === "function" // eslint-disable-line ban/ban
        ? (obj) => Object.keys(obj) // eslint-disable-line ban/ban
        : (object) => {
            const keys = [];
            for (const key in object) {
                if (Object.prototype.hasOwnProperty.call(object, key)) {
                    keys.push(key);
                }
            }
            return keys;
        };
    util.find = (arr, checker) => {
        for (const item of arr) {
            if (checker(item))
                return item;
        }
        return undefined;
    };
    util.isInteger = typeof Number.isInteger === "function"
        ? (val) => Number.isInteger(val) // eslint-disable-line ban/ban
        : (val) => typeof val === "number" && isFinite(val) && Math.floor(val) === val;
    function joinValues(array, separator = " | ") {
        return array
            .map((val) => (typeof val === "string" ? `'${val}'` : val))
            .join(separator);
    }
    util.joinValues = joinValues;
    util.jsonStringifyReplacer = (_, value) => {
        if (typeof value === "bigint") {
            return value.toString();
        }
        return value;
    };
})(util || (util = {}));
var objectUtil;
(function (objectUtil) {
    objectUtil.mergeShapes = (first, second) => {
        return {
            ...first,
            ...second, // second overwrites first
        };
    };
})(objectUtil || (objectUtil = {}));
const ZodParsedType = util.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set",
]);
const getParsedType = (data) => {
    const t = typeof data;
    switch (t) {
        case "undefined":
            return ZodParsedType.undefined;
        case "string":
            return ZodParsedType.string;
        case "number":
            return isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
        case "boolean":
            return ZodParsedType.boolean;
        case "function":
            return ZodParsedType.function;
        case "bigint":
            return ZodParsedType.bigint;
        case "symbol":
            return ZodParsedType.symbol;
        case "object":
            if (Array.isArray(data)) {
                return ZodParsedType.array;
            }
            if (data === null) {
                return ZodParsedType.null;
            }
            if (data.then &&
                typeof data.then === "function" &&
                data.catch &&
                typeof data.catch === "function") {
                return ZodParsedType.promise;
            }
            if (typeof Map !== "undefined" && data instanceof Map) {
                return ZodParsedType.map;
            }
            if (typeof Set !== "undefined" && data instanceof Set) {
                return ZodParsedType.set;
            }
            if (typeof Date !== "undefined" && data instanceof Date) {
                return ZodParsedType.date;
            }
            return ZodParsedType.object;
        default:
            return ZodParsedType.unknown;
    }
};

const ZodIssueCode = util.arrayToEnum([
    "invalid_type",
    "invalid_literal",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of",
    "not_finite",
]);
class ZodError extends Error {
    constructor(issues) {
        super();
        this.issues = [];
        this.addIssue = (sub) => {
            this.issues = [...this.issues, sub];
        };
        this.addIssues = (subs = []) => {
            this.issues = [...this.issues, ...subs];
        };
        const actualProto = new.target.prototype;
        if (Object.setPrototypeOf) {
            // eslint-disable-next-line ban/ban
            Object.setPrototypeOf(this, actualProto);
        }
        else {
            this.__proto__ = actualProto;
        }
        this.name = "ZodError";
        this.issues = issues;
    }
    get errors() {
        return this.issues;
    }
    format(_mapper) {
        const mapper = _mapper ||
            function (issue) {
                return issue.message;
            };
        const fieldErrors = { _errors: [] };
        const processError = (error) => {
            for (const issue of error.issues) {
                if (issue.code === "invalid_union") {
                    issue.unionErrors.map(processError);
                }
                else if (issue.code === "invalid_return_type") {
                    processError(issue.returnTypeError);
                }
                else if (issue.code === "invalid_arguments") {
                    processError(issue.argumentsError);
                }
                else if (issue.path.length === 0) {
                    fieldErrors._errors.push(mapper(issue));
                }
                else {
                    let curr = fieldErrors;
                    let i = 0;
                    while (i < issue.path.length) {
                        const el = issue.path[i];
                        const terminal = i === issue.path.length - 1;
                        if (!terminal) {
                            curr[el] = curr[el] || { _errors: [] };
                            // if (typeof el === "string") {
                            //   curr[el] = curr[el] || { _errors: [] };
                            // } else if (typeof el === "number") {
                            //   const errorArray: any = [];
                            //   errorArray._errors = [];
                            //   curr[el] = curr[el] || errorArray;
                            // }
                        }
                        else {
                            curr[el] = curr[el] || { _errors: [] };
                            curr[el]._errors.push(mapper(issue));
                        }
                        curr = curr[el];
                        i++;
                    }
                }
            }
        };
        processError(this);
        return fieldErrors;
    }
    toString() {
        return this.message;
    }
    get message() {
        return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
    }
    get isEmpty() {
        return this.issues.length === 0;
    }
    flatten(mapper = (issue) => issue.message) {
        const fieldErrors = {};
        const formErrors = [];
        for (const sub of this.issues) {
            if (sub.path.length > 0) {
                fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
                fieldErrors[sub.path[0]].push(mapper(sub));
            }
            else {
                formErrors.push(mapper(sub));
            }
        }
        return { formErrors, fieldErrors };
    }
    get formErrors() {
        return this.flatten();
    }
}
ZodError.create = (issues) => {
    const error = new ZodError(issues);
    return error;
};

const errorMap = (issue, _ctx) => {
    let message;
    switch (issue.code) {
        case ZodIssueCode.invalid_type:
            if (issue.received === ZodParsedType.undefined) {
                message = "Required";
            }
            else {
                message = `Expected ${issue.expected}, received ${issue.received}`;
            }
            break;
        case ZodIssueCode.invalid_literal:
            message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
            break;
        case ZodIssueCode.unrecognized_keys:
            message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
            break;
        case ZodIssueCode.invalid_union:
            message = `Invalid input`;
            break;
        case ZodIssueCode.invalid_union_discriminator:
            message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
            break;
        case ZodIssueCode.invalid_enum_value:
            message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
            break;
        case ZodIssueCode.invalid_arguments:
            message = `Invalid function arguments`;
            break;
        case ZodIssueCode.invalid_return_type:
            message = `Invalid function return type`;
            break;
        case ZodIssueCode.invalid_date:
            message = `Invalid date`;
            break;
        case ZodIssueCode.invalid_string:
            if (typeof issue.validation === "object") {
                if ("includes" in issue.validation) {
                    message = `Invalid input: must include "${issue.validation.includes}"`;
                    if (typeof issue.validation.position === "number") {
                        message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
                    }
                }
                else if ("startsWith" in issue.validation) {
                    message = `Invalid input: must start with "${issue.validation.startsWith}"`;
                }
                else if ("endsWith" in issue.validation) {
                    message = `Invalid input: must end with "${issue.validation.endsWith}"`;
                }
                else {
                    util.assertNever(issue.validation);
                }
            }
            else if (issue.validation !== "regex") {
                message = `Invalid ${issue.validation}`;
            }
            else {
                message = "Invalid";
            }
            break;
        case ZodIssueCode.too_small:
            if (issue.type === "array")
                message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
            else if (issue.type === "string")
                message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
            else if (issue.type === "number")
                message = `Number must be ${issue.exact
                    ? `exactly equal to `
                    : issue.inclusive
                        ? `greater than or equal to `
                        : `greater than `}${issue.minimum}`;
            else if (issue.type === "date")
                message = `Date must be ${issue.exact
                    ? `exactly equal to `
                    : issue.inclusive
                        ? `greater than or equal to `
                        : `greater than `}${new Date(Number(issue.minimum))}`;
            else
                message = "Invalid input";
            break;
        case ZodIssueCode.too_big:
            if (issue.type === "array")
                message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
            else if (issue.type === "string")
                message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
            else if (issue.type === "number")
                message = `Number must be ${issue.exact
                    ? `exactly`
                    : issue.inclusive
                        ? `less than or equal to`
                        : `less than`} ${issue.maximum}`;
            else if (issue.type === "bigint")
                message = `BigInt must be ${issue.exact
                    ? `exactly`
                    : issue.inclusive
                        ? `less than or equal to`
                        : `less than`} ${issue.maximum}`;
            else if (issue.type === "date")
                message = `Date must be ${issue.exact
                    ? `exactly`
                    : issue.inclusive
                        ? `smaller than or equal to`
                        : `smaller than`} ${new Date(Number(issue.maximum))}`;
            else
                message = "Invalid input";
            break;
        case ZodIssueCode.custom:
            message = `Invalid input`;
            break;
        case ZodIssueCode.invalid_intersection_types:
            message = `Intersection results could not be merged`;
            break;
        case ZodIssueCode.not_multiple_of:
            message = `Number must be a multiple of ${issue.multipleOf}`;
            break;
        case ZodIssueCode.not_finite:
            message = "Number must be finite";
            break;
        default:
            message = _ctx.defaultError;
            util.assertNever(issue);
    }
    return { message };
};

let overrideErrorMap = errorMap;
function getErrorMap() {
    return overrideErrorMap;
}

const makeIssue = (params) => {
    const { data, path, errorMaps, issueData } = params;
    const fullPath = [...path, ...(issueData.path || [])];
    const fullIssue = {
        ...issueData,
        path: fullPath,
    };
    let errorMessage = "";
    const maps = errorMaps
        .filter((m) => !!m)
        .slice()
        .reverse();
    for (const map of maps) {
        errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
    }
    return {
        ...issueData,
        path: fullPath,
        message: issueData.message || errorMessage,
    };
};
function addIssueToContext(ctx, issueData) {
    const issue = makeIssue({
        issueData: issueData,
        data: ctx.data,
        path: ctx.path,
        errorMaps: [
            ctx.common.contextualErrorMap,
            ctx.schemaErrorMap,
            getErrorMap(),
            errorMap, // then global default map
        ].filter((x) => !!x),
    });
    ctx.common.issues.push(issue);
}
class ParseStatus {
    constructor() {
        this.value = "valid";
    }
    dirty() {
        if (this.value === "valid")
            this.value = "dirty";
    }
    abort() {
        if (this.value !== "aborted")
            this.value = "aborted";
    }
    static mergeArray(status, results) {
        const arrayValue = [];
        for (const s of results) {
            if (s.status === "aborted")
                return INVALID;
            if (s.status === "dirty")
                status.dirty();
            arrayValue.push(s.value);
        }
        return { status: status.value, value: arrayValue };
    }
    static async mergeObjectAsync(status, pairs) {
        const syncPairs = [];
        for (const pair of pairs) {
            syncPairs.push({
                key: await pair.key,
                value: await pair.value,
            });
        }
        return ParseStatus.mergeObjectSync(status, syncPairs);
    }
    static mergeObjectSync(status, pairs) {
        const finalObject = {};
        for (const pair of pairs) {
            const { key, value } = pair;
            if (key.status === "aborted")
                return INVALID;
            if (value.status === "aborted")
                return INVALID;
            if (key.status === "dirty")
                status.dirty();
            if (value.status === "dirty")
                status.dirty();
            if (key.value !== "__proto__" &&
                (typeof value.value !== "undefined" || pair.alwaysSet)) {
                finalObject[key.value] = value.value;
            }
        }
        return { status: status.value, value: finalObject };
    }
}
const INVALID = Object.freeze({
    status: "aborted",
});
const DIRTY = (value) => ({ status: "dirty", value });
const OK = (value) => ({ status: "valid", value });
const isAborted = (x) => x.status === "aborted";
const isDirty = (x) => x.status === "dirty";
const isValid = (x) => x.status === "valid";
const isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;

var errorUtil;
(function (errorUtil) {
    errorUtil.errToObj = (message) => typeof message === "string" ? { message } : message || {};
    errorUtil.toString = (message) => typeof message === "string" ? message : message === null || message === void 0 ? void 0 : message.message;
})(errorUtil || (errorUtil = {}));

class ParseInputLazyPath {
    constructor(parent, value, path, key) {
        this._cachedPath = [];
        this.parent = parent;
        this.data = value;
        this._path = path;
        this._key = key;
    }
    get path() {
        if (!this._cachedPath.length) {
            if (this._key instanceof Array) {
                this._cachedPath.push(...this._path, ...this._key);
            }
            else {
                this._cachedPath.push(...this._path, this._key);
            }
        }
        return this._cachedPath;
    }
}
const handleResult = (ctx, result) => {
    if (isValid(result)) {
        return { success: true, data: result.value };
    }
    else {
        if (!ctx.common.issues.length) {
            throw new Error("Validation failed but no issues detected.");
        }
        return {
            success: false,
            get error() {
                if (this._error)
                    return this._error;
                const error = new ZodError(ctx.common.issues);
                this._error = error;
                return this._error;
            },
        };
    }
};
function processCreateParams(params) {
    if (!params)
        return {};
    const { errorMap, invalid_type_error, required_error, description } = params;
    if (errorMap && (invalid_type_error || required_error)) {
        throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
    }
    if (errorMap)
        return { errorMap: errorMap, description };
    const customMap = (iss, ctx) => {
        if (iss.code !== "invalid_type")
            return { message: ctx.defaultError };
        if (typeof ctx.data === "undefined") {
            return { message: required_error !== null && required_error !== void 0 ? required_error : ctx.defaultError };
        }
        return { message: invalid_type_error !== null && invalid_type_error !== void 0 ? invalid_type_error : ctx.defaultError };
    };
    return { errorMap: customMap, description };
}
class ZodType {
    constructor(def) {
        /** Alias of safeParseAsync */
        this.spa = this.safeParseAsync;
        this._def = def;
        this.parse = this.parse.bind(this);
        this.safeParse = this.safeParse.bind(this);
        this.parseAsync = this.parseAsync.bind(this);
        this.safeParseAsync = this.safeParseAsync.bind(this);
        this.spa = this.spa.bind(this);
        this.refine = this.refine.bind(this);
        this.refinement = this.refinement.bind(this);
        this.superRefine = this.superRefine.bind(this);
        this.optional = this.optional.bind(this);
        this.nullable = this.nullable.bind(this);
        this.nullish = this.nullish.bind(this);
        this.array = this.array.bind(this);
        this.promise = this.promise.bind(this);
        this.or = this.or.bind(this);
        this.and = this.and.bind(this);
        this.transform = this.transform.bind(this);
        this.brand = this.brand.bind(this);
        this.default = this.default.bind(this);
        this.catch = this.catch.bind(this);
        this.describe = this.describe.bind(this);
        this.pipe = this.pipe.bind(this);
        this.readonly = this.readonly.bind(this);
        this.isNullable = this.isNullable.bind(this);
        this.isOptional = this.isOptional.bind(this);
    }
    get description() {
        return this._def.description;
    }
    _getType(input) {
        return getParsedType(input.data);
    }
    _getOrReturnCtx(input, ctx) {
        return (ctx || {
            common: input.parent.common,
            data: input.data,
            parsedType: getParsedType(input.data),
            schemaErrorMap: this._def.errorMap,
            path: input.path,
            parent: input.parent,
        });
    }
    _processInputParams(input) {
        return {
            status: new ParseStatus(),
            ctx: {
                common: input.parent.common,
                data: input.data,
                parsedType: getParsedType(input.data),
                schemaErrorMap: this._def.errorMap,
                path: input.path,
                parent: input.parent,
            },
        };
    }
    _parseSync(input) {
        const result = this._parse(input);
        if (isAsync(result)) {
            throw new Error("Synchronous parse encountered promise.");
        }
        return result;
    }
    _parseAsync(input) {
        const result = this._parse(input);
        return Promise.resolve(result);
    }
    parse(data, params) {
        const result = this.safeParse(data, params);
        if (result.success)
            return result.data;
        throw result.error;
    }
    safeParse(data, params) {
        var _a;
        const ctx = {
            common: {
                issues: [],
                async: (_a = params === null || params === void 0 ? void 0 : params.async) !== null && _a !== void 0 ? _a : false,
                contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap,
            },
            path: (params === null || params === void 0 ? void 0 : params.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data,
            parsedType: getParsedType(data),
        };
        const result = this._parseSync({ data, path: ctx.path, parent: ctx });
        return handleResult(ctx, result);
    }
    async parseAsync(data, params) {
        const result = await this.safeParseAsync(data, params);
        if (result.success)
            return result.data;
        throw result.error;
    }
    async safeParseAsync(data, params) {
        const ctx = {
            common: {
                issues: [],
                contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap,
                async: true,
            },
            path: (params === null || params === void 0 ? void 0 : params.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data,
            parsedType: getParsedType(data),
        };
        const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
        const result = await (isAsync(maybeAsyncResult)
            ? maybeAsyncResult
            : Promise.resolve(maybeAsyncResult));
        return handleResult(ctx, result);
    }
    refine(check, message) {
        const getIssueProperties = (val) => {
            if (typeof message === "string" || typeof message === "undefined") {
                return { message };
            }
            else if (typeof message === "function") {
                return message(val);
            }
            else {
                return message;
            }
        };
        return this._refinement((val, ctx) => {
            const result = check(val);
            const setError = () => ctx.addIssue({
                code: ZodIssueCode.custom,
                ...getIssueProperties(val),
            });
            if (typeof Promise !== "undefined" && result instanceof Promise) {
                return result.then((data) => {
                    if (!data) {
                        setError();
                        return false;
                    }
                    else {
                        return true;
                    }
                });
            }
            if (!result) {
                setError();
                return false;
            }
            else {
                return true;
            }
        });
    }
    refinement(check, refinementData) {
        return this._refinement((val, ctx) => {
            if (!check(val)) {
                ctx.addIssue(typeof refinementData === "function"
                    ? refinementData(val, ctx)
                    : refinementData);
                return false;
            }
            else {
                return true;
            }
        });
    }
    _refinement(refinement) {
        return new ZodEffects({
            schema: this,
            typeName: ZodFirstPartyTypeKind.ZodEffects,
            effect: { type: "refinement", refinement },
        });
    }
    superRefine(refinement) {
        return this._refinement(refinement);
    }
    optional() {
        return ZodOptional.create(this, this._def);
    }
    nullable() {
        return ZodNullable.create(this, this._def);
    }
    nullish() {
        return this.nullable().optional();
    }
    array() {
        return ZodArray.create(this, this._def);
    }
    promise() {
        return ZodPromise.create(this, this._def);
    }
    or(option) {
        return ZodUnion.create([this, option], this._def);
    }
    and(incoming) {
        return ZodIntersection.create(this, incoming, this._def);
    }
    transform(transform) {
        return new ZodEffects({
            ...processCreateParams(this._def),
            schema: this,
            typeName: ZodFirstPartyTypeKind.ZodEffects,
            effect: { type: "transform", transform },
        });
    }
    default(def) {
        const defaultValueFunc = typeof def === "function" ? def : () => def;
        return new ZodDefault({
            ...processCreateParams(this._def),
            innerType: this,
            defaultValue: defaultValueFunc,
            typeName: ZodFirstPartyTypeKind.ZodDefault,
        });
    }
    brand() {
        return new ZodBranded({
            typeName: ZodFirstPartyTypeKind.ZodBranded,
            type: this,
            ...processCreateParams(this._def),
        });
    }
    catch(def) {
        const catchValueFunc = typeof def === "function" ? def : () => def;
        return new ZodCatch({
            ...processCreateParams(this._def),
            innerType: this,
            catchValue: catchValueFunc,
            typeName: ZodFirstPartyTypeKind.ZodCatch,
        });
    }
    describe(description) {
        const This = this.constructor;
        return new This({
            ...this._def,
            description,
        });
    }
    pipe(target) {
        return ZodPipeline.create(this, target);
    }
    readonly() {
        return ZodReadonly.create(this);
    }
    isOptional() {
        return this.safeParse(undefined).success;
    }
    isNullable() {
        return this.safeParse(null).success;
    }
}
const cuidRegex = /^c[^\s-]{8,}$/i;
const cuid2Regex = /^[a-z][a-z0-9]*$/;
const ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/;
// const uuidRegex =
//   /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i;
const uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
// from https://stackoverflow.com/a/46181/1550155
// old version: too slow, didn't support unicode
// const emailRegex = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
//old email regex
// const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@((?!-)([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{1,})[^-<>()[\].,;:\s@"]$/i;
// eslint-disable-next-line
// const emailRegex =
//   /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/;
// const emailRegex =
//   /^[a-zA-Z0-9\.\!\#\$\%\&\'\*\+\/\=\?\^\_\`\{\|\}\~\-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
// const emailRegex =
//   /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
const emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
// const emailRegex =
//   /^[a-z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9\-]+)*$/i;
// from https://thekevinscott.com/emojis-in-javascript/#writing-a-regular-expression
const _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
let emojiRegex;
const ipv4Regex = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/;
const ipv6Regex = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
// Adapted from https://stackoverflow.com/a/3143231
const datetimeRegex = (args) => {
    if (args.precision) {
        if (args.offset) {
            return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${args.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`);
        }
        else {
            return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${args.precision}}Z$`);
        }
    }
    else if (args.precision === 0) {
        if (args.offset) {
            return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$`);
        }
        else {
            return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$`);
        }
    }
    else {
        if (args.offset) {
            return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$`);
        }
        else {
            return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$`);
        }
    }
};
function isValidIP(ip, version) {
    if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
        return true;
    }
    if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
        return true;
    }
    return false;
}
class ZodString extends ZodType {
    _parse(input) {
        if (this._def.coerce) {
            input.data = String(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.string) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.string,
                received: ctx.parsedType,
            }
            //
            );
            return INVALID;
        }
        const status = new ParseStatus();
        let ctx = undefined;
        for (const check of this._def.checks) {
            if (check.kind === "min") {
                if (input.data.length < check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_small,
                        minimum: check.value,
                        type: "string",
                        inclusive: true,
                        exact: false,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "max") {
                if (input.data.length > check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_big,
                        maximum: check.value,
                        type: "string",
                        inclusive: true,
                        exact: false,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "length") {
                const tooBig = input.data.length > check.value;
                const tooSmall = input.data.length < check.value;
                if (tooBig || tooSmall) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    if (tooBig) {
                        addIssueToContext(ctx, {
                            code: ZodIssueCode.too_big,
                            maximum: check.value,
                            type: "string",
                            inclusive: true,
                            exact: true,
                            message: check.message,
                        });
                    }
                    else if (tooSmall) {
                        addIssueToContext(ctx, {
                            code: ZodIssueCode.too_small,
                            minimum: check.value,
                            type: "string",
                            inclusive: true,
                            exact: true,
                            message: check.message,
                        });
                    }
                    status.dirty();
                }
            }
            else if (check.kind === "email") {
                if (!emailRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "email",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "emoji") {
                if (!emojiRegex) {
                    emojiRegex = new RegExp(_emojiRegex, "u");
                }
                if (!emojiRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "emoji",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "uuid") {
                if (!uuidRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "uuid",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "cuid") {
                if (!cuidRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "cuid",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "cuid2") {
                if (!cuid2Regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "cuid2",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "ulid") {
                if (!ulidRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "ulid",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "url") {
                try {
                    new URL(input.data);
                }
                catch (_a) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "url",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "regex") {
                check.regex.lastIndex = 0;
                const testResult = check.regex.test(input.data);
                if (!testResult) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "regex",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "trim") {
                input.data = input.data.trim();
            }
            else if (check.kind === "includes") {
                if (!input.data.includes(check.value, check.position)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_string,
                        validation: { includes: check.value, position: check.position },
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "toLowerCase") {
                input.data = input.data.toLowerCase();
            }
            else if (check.kind === "toUpperCase") {
                input.data = input.data.toUpperCase();
            }
            else if (check.kind === "startsWith") {
                if (!input.data.startsWith(check.value)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_string,
                        validation: { startsWith: check.value },
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "endsWith") {
                if (!input.data.endsWith(check.value)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_string,
                        validation: { endsWith: check.value },
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "datetime") {
                const regex = datetimeRegex(check);
                if (!regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_string,
                        validation: "datetime",
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "ip") {
                if (!isValidIP(input.data, check.version)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "ip",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else {
                util.assertNever(check);
            }
        }
        return { status: status.value, value: input.data };
    }
    _regex(regex, validation, message) {
        return this.refinement((data) => regex.test(data), {
            validation,
            code: ZodIssueCode.invalid_string,
            ...errorUtil.errToObj(message),
        });
    }
    _addCheck(check) {
        return new ZodString({
            ...this._def,
            checks: [...this._def.checks, check],
        });
    }
    email(message) {
        return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
    }
    url(message) {
        return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
    }
    emoji(message) {
        return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
    }
    uuid(message) {
        return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
    }
    cuid(message) {
        return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
    }
    cuid2(message) {
        return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
    }
    ulid(message) {
        return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
    }
    ip(options) {
        return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
    }
    datetime(options) {
        var _a;
        if (typeof options === "string") {
            return this._addCheck({
                kind: "datetime",
                precision: null,
                offset: false,
                message: options,
            });
        }
        return this._addCheck({
            kind: "datetime",
            precision: typeof (options === null || options === void 0 ? void 0 : options.precision) === "undefined" ? null : options === null || options === void 0 ? void 0 : options.precision,
            offset: (_a = options === null || options === void 0 ? void 0 : options.offset) !== null && _a !== void 0 ? _a : false,
            ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message),
        });
    }
    regex(regex, message) {
        return this._addCheck({
            kind: "regex",
            regex: regex,
            ...errorUtil.errToObj(message),
        });
    }
    includes(value, options) {
        return this._addCheck({
            kind: "includes",
            value: value,
            position: options === null || options === void 0 ? void 0 : options.position,
            ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message),
        });
    }
    startsWith(value, message) {
        return this._addCheck({
            kind: "startsWith",
            value: value,
            ...errorUtil.errToObj(message),
        });
    }
    endsWith(value, message) {
        return this._addCheck({
            kind: "endsWith",
            value: value,
            ...errorUtil.errToObj(message),
        });
    }
    min(minLength, message) {
        return this._addCheck({
            kind: "min",
            value: minLength,
            ...errorUtil.errToObj(message),
        });
    }
    max(maxLength, message) {
        return this._addCheck({
            kind: "max",
            value: maxLength,
            ...errorUtil.errToObj(message),
        });
    }
    length(len, message) {
        return this._addCheck({
            kind: "length",
            value: len,
            ...errorUtil.errToObj(message),
        });
    }
    /**
     * @deprecated Use z.string().min(1) instead.
     * @see {@link ZodString.min}
     */
    nonempty(message) {
        return this.min(1, errorUtil.errToObj(message));
    }
    trim() {
        return new ZodString({
            ...this._def,
            checks: [...this._def.checks, { kind: "trim" }],
        });
    }
    toLowerCase() {
        return new ZodString({
            ...this._def,
            checks: [...this._def.checks, { kind: "toLowerCase" }],
        });
    }
    toUpperCase() {
        return new ZodString({
            ...this._def,
            checks: [...this._def.checks, { kind: "toUpperCase" }],
        });
    }
    get isDatetime() {
        return !!this._def.checks.find((ch) => ch.kind === "datetime");
    }
    get isEmail() {
        return !!this._def.checks.find((ch) => ch.kind === "email");
    }
    get isURL() {
        return !!this._def.checks.find((ch) => ch.kind === "url");
    }
    get isEmoji() {
        return !!this._def.checks.find((ch) => ch.kind === "emoji");
    }
    get isUUID() {
        return !!this._def.checks.find((ch) => ch.kind === "uuid");
    }
    get isCUID() {
        return !!this._def.checks.find((ch) => ch.kind === "cuid");
    }
    get isCUID2() {
        return !!this._def.checks.find((ch) => ch.kind === "cuid2");
    }
    get isULID() {
        return !!this._def.checks.find((ch) => ch.kind === "ulid");
    }
    get isIP() {
        return !!this._def.checks.find((ch) => ch.kind === "ip");
    }
    get minLength() {
        let min = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "min") {
                if (min === null || ch.value > min)
                    min = ch.value;
            }
        }
        return min;
    }
    get maxLength() {
        let max = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "max") {
                if (max === null || ch.value < max)
                    max = ch.value;
            }
        }
        return max;
    }
}
ZodString.create = (params) => {
    var _a;
    return new ZodString({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodString,
        coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false,
        ...processCreateParams(params),
    });
};
// https://stackoverflow.com/questions/3966484/why-does-modulus-operator-return-fractional-number-in-javascript/31711034#31711034
function floatSafeRemainder(val, step) {
    const valDecCount = (val.toString().split(".")[1] || "").length;
    const stepDecCount = (step.toString().split(".")[1] || "").length;
    const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
    const valInt = parseInt(val.toFixed(decCount).replace(".", ""));
    const stepInt = parseInt(step.toFixed(decCount).replace(".", ""));
    return (valInt % stepInt) / Math.pow(10, decCount);
}
class ZodNumber extends ZodType {
    constructor() {
        super(...arguments);
        this.min = this.gte;
        this.max = this.lte;
        this.step = this.multipleOf;
    }
    _parse(input) {
        if (this._def.coerce) {
            input.data = Number(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.number) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.number,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        let ctx = undefined;
        const status = new ParseStatus();
        for (const check of this._def.checks) {
            if (check.kind === "int") {
                if (!util.isInteger(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_type,
                        expected: "integer",
                        received: "float",
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "min") {
                const tooSmall = check.inclusive
                    ? input.data < check.value
                    : input.data <= check.value;
                if (tooSmall) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_small,
                        minimum: check.value,
                        type: "number",
                        inclusive: check.inclusive,
                        exact: false,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "max") {
                const tooBig = check.inclusive
                    ? input.data > check.value
                    : input.data >= check.value;
                if (tooBig) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_big,
                        maximum: check.value,
                        type: "number",
                        inclusive: check.inclusive,
                        exact: false,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "multipleOf") {
                if (floatSafeRemainder(input.data, check.value) !== 0) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.not_multiple_of,
                        multipleOf: check.value,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "finite") {
                if (!Number.isFinite(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.not_finite,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else {
                util.assertNever(check);
            }
        }
        return { status: status.value, value: input.data };
    }
    gte(value, message) {
        return this.setLimit("min", value, true, errorUtil.toString(message));
    }
    gt(value, message) {
        return this.setLimit("min", value, false, errorUtil.toString(message));
    }
    lte(value, message) {
        return this.setLimit("max", value, true, errorUtil.toString(message));
    }
    lt(value, message) {
        return this.setLimit("max", value, false, errorUtil.toString(message));
    }
    setLimit(kind, value, inclusive, message) {
        return new ZodNumber({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind,
                    value,
                    inclusive,
                    message: errorUtil.toString(message),
                },
            ],
        });
    }
    _addCheck(check) {
        return new ZodNumber({
            ...this._def,
            checks: [...this._def.checks, check],
        });
    }
    int(message) {
        return this._addCheck({
            kind: "int",
            message: errorUtil.toString(message),
        });
    }
    positive(message) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: false,
            message: errorUtil.toString(message),
        });
    }
    negative(message) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: false,
            message: errorUtil.toString(message),
        });
    }
    nonpositive(message) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: true,
            message: errorUtil.toString(message),
        });
    }
    nonnegative(message) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: true,
            message: errorUtil.toString(message),
        });
    }
    multipleOf(value, message) {
        return this._addCheck({
            kind: "multipleOf",
            value: value,
            message: errorUtil.toString(message),
        });
    }
    finite(message) {
        return this._addCheck({
            kind: "finite",
            message: errorUtil.toString(message),
        });
    }
    safe(message) {
        return this._addCheck({
            kind: "min",
            inclusive: true,
            value: Number.MIN_SAFE_INTEGER,
            message: errorUtil.toString(message),
        })._addCheck({
            kind: "max",
            inclusive: true,
            value: Number.MAX_SAFE_INTEGER,
            message: errorUtil.toString(message),
        });
    }
    get minValue() {
        let min = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "min") {
                if (min === null || ch.value > min)
                    min = ch.value;
            }
        }
        return min;
    }
    get maxValue() {
        let max = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "max") {
                if (max === null || ch.value < max)
                    max = ch.value;
            }
        }
        return max;
    }
    get isInt() {
        return !!this._def.checks.find((ch) => ch.kind === "int" ||
            (ch.kind === "multipleOf" && util.isInteger(ch.value)));
    }
    get isFinite() {
        let max = null, min = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "finite" ||
                ch.kind === "int" ||
                ch.kind === "multipleOf") {
                return true;
            }
            else if (ch.kind === "min") {
                if (min === null || ch.value > min)
                    min = ch.value;
            }
            else if (ch.kind === "max") {
                if (max === null || ch.value < max)
                    max = ch.value;
            }
        }
        return Number.isFinite(min) && Number.isFinite(max);
    }
}
ZodNumber.create = (params) => {
    return new ZodNumber({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodNumber,
        coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
        ...processCreateParams(params),
    });
};
class ZodBigInt extends ZodType {
    constructor() {
        super(...arguments);
        this.min = this.gte;
        this.max = this.lte;
    }
    _parse(input) {
        if (this._def.coerce) {
            input.data = BigInt(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.bigint) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.bigint,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        let ctx = undefined;
        const status = new ParseStatus();
        for (const check of this._def.checks) {
            if (check.kind === "min") {
                const tooSmall = check.inclusive
                    ? input.data < check.value
                    : input.data <= check.value;
                if (tooSmall) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_small,
                        type: "bigint",
                        minimum: check.value,
                        inclusive: check.inclusive,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "max") {
                const tooBig = check.inclusive
                    ? input.data > check.value
                    : input.data >= check.value;
                if (tooBig) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_big,
                        type: "bigint",
                        maximum: check.value,
                        inclusive: check.inclusive,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "multipleOf") {
                if (input.data % check.value !== BigInt(0)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.not_multiple_of,
                        multipleOf: check.value,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else {
                util.assertNever(check);
            }
        }
        return { status: status.value, value: input.data };
    }
    gte(value, message) {
        return this.setLimit("min", value, true, errorUtil.toString(message));
    }
    gt(value, message) {
        return this.setLimit("min", value, false, errorUtil.toString(message));
    }
    lte(value, message) {
        return this.setLimit("max", value, true, errorUtil.toString(message));
    }
    lt(value, message) {
        return this.setLimit("max", value, false, errorUtil.toString(message));
    }
    setLimit(kind, value, inclusive, message) {
        return new ZodBigInt({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind,
                    value,
                    inclusive,
                    message: errorUtil.toString(message),
                },
            ],
        });
    }
    _addCheck(check) {
        return new ZodBigInt({
            ...this._def,
            checks: [...this._def.checks, check],
        });
    }
    positive(message) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: false,
            message: errorUtil.toString(message),
        });
    }
    negative(message) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: false,
            message: errorUtil.toString(message),
        });
    }
    nonpositive(message) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: true,
            message: errorUtil.toString(message),
        });
    }
    nonnegative(message) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: true,
            message: errorUtil.toString(message),
        });
    }
    multipleOf(value, message) {
        return this._addCheck({
            kind: "multipleOf",
            value,
            message: errorUtil.toString(message),
        });
    }
    get minValue() {
        let min = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "min") {
                if (min === null || ch.value > min)
                    min = ch.value;
            }
        }
        return min;
    }
    get maxValue() {
        let max = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "max") {
                if (max === null || ch.value < max)
                    max = ch.value;
            }
        }
        return max;
    }
}
ZodBigInt.create = (params) => {
    var _a;
    return new ZodBigInt({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodBigInt,
        coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false,
        ...processCreateParams(params),
    });
};
class ZodBoolean extends ZodType {
    _parse(input) {
        if (this._def.coerce) {
            input.data = Boolean(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.boolean) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.boolean,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        return OK(input.data);
    }
}
ZodBoolean.create = (params) => {
    return new ZodBoolean({
        typeName: ZodFirstPartyTypeKind.ZodBoolean,
        coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
        ...processCreateParams(params),
    });
};
class ZodDate extends ZodType {
    _parse(input) {
        if (this._def.coerce) {
            input.data = new Date(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.date) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.date,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        if (isNaN(input.data.getTime())) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_date,
            });
            return INVALID;
        }
        const status = new ParseStatus();
        let ctx = undefined;
        for (const check of this._def.checks) {
            if (check.kind === "min") {
                if (input.data.getTime() < check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_small,
                        message: check.message,
                        inclusive: true,
                        exact: false,
                        minimum: check.value,
                        type: "date",
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "max") {
                if (input.data.getTime() > check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_big,
                        message: check.message,
                        inclusive: true,
                        exact: false,
                        maximum: check.value,
                        type: "date",
                    });
                    status.dirty();
                }
            }
            else {
                util.assertNever(check);
            }
        }
        return {
            status: status.value,
            value: new Date(input.data.getTime()),
        };
    }
    _addCheck(check) {
        return new ZodDate({
            ...this._def,
            checks: [...this._def.checks, check],
        });
    }
    min(minDate, message) {
        return this._addCheck({
            kind: "min",
            value: minDate.getTime(),
            message: errorUtil.toString(message),
        });
    }
    max(maxDate, message) {
        return this._addCheck({
            kind: "max",
            value: maxDate.getTime(),
            message: errorUtil.toString(message),
        });
    }
    get minDate() {
        let min = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "min") {
                if (min === null || ch.value > min)
                    min = ch.value;
            }
        }
        return min != null ? new Date(min) : null;
    }
    get maxDate() {
        let max = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "max") {
                if (max === null || ch.value < max)
                    max = ch.value;
            }
        }
        return max != null ? new Date(max) : null;
    }
}
ZodDate.create = (params) => {
    return new ZodDate({
        checks: [],
        coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
        typeName: ZodFirstPartyTypeKind.ZodDate,
        ...processCreateParams(params),
    });
};
class ZodSymbol extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.symbol) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.symbol,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        return OK(input.data);
    }
}
ZodSymbol.create = (params) => {
    return new ZodSymbol({
        typeName: ZodFirstPartyTypeKind.ZodSymbol,
        ...processCreateParams(params),
    });
};
class ZodUndefined extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.undefined) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.undefined,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        return OK(input.data);
    }
}
ZodUndefined.create = (params) => {
    return new ZodUndefined({
        typeName: ZodFirstPartyTypeKind.ZodUndefined,
        ...processCreateParams(params),
    });
};
class ZodNull extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.null) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.null,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        return OK(input.data);
    }
}
ZodNull.create = (params) => {
    return new ZodNull({
        typeName: ZodFirstPartyTypeKind.ZodNull,
        ...processCreateParams(params),
    });
};
class ZodAny extends ZodType {
    constructor() {
        super(...arguments);
        // to prevent instances of other classes from extending ZodAny. this causes issues with catchall in ZodObject.
        this._any = true;
    }
    _parse(input) {
        return OK(input.data);
    }
}
ZodAny.create = (params) => {
    return new ZodAny({
        typeName: ZodFirstPartyTypeKind.ZodAny,
        ...processCreateParams(params),
    });
};
class ZodUnknown extends ZodType {
    constructor() {
        super(...arguments);
        // required
        this._unknown = true;
    }
    _parse(input) {
        return OK(input.data);
    }
}
ZodUnknown.create = (params) => {
    return new ZodUnknown({
        typeName: ZodFirstPartyTypeKind.ZodUnknown,
        ...processCreateParams(params),
    });
};
class ZodNever extends ZodType {
    _parse(input) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.never,
            received: ctx.parsedType,
        });
        return INVALID;
    }
}
ZodNever.create = (params) => {
    return new ZodNever({
        typeName: ZodFirstPartyTypeKind.ZodNever,
        ...processCreateParams(params),
    });
};
class ZodVoid extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.undefined) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.void,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        return OK(input.data);
    }
}
ZodVoid.create = (params) => {
    return new ZodVoid({
        typeName: ZodFirstPartyTypeKind.ZodVoid,
        ...processCreateParams(params),
    });
};
class ZodArray extends ZodType {
    _parse(input) {
        const { ctx, status } = this._processInputParams(input);
        const def = this._def;
        if (ctx.parsedType !== ZodParsedType.array) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.array,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        if (def.exactLength !== null) {
            const tooBig = ctx.data.length > def.exactLength.value;
            const tooSmall = ctx.data.length < def.exactLength.value;
            if (tooBig || tooSmall) {
                addIssueToContext(ctx, {
                    code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
                    minimum: (tooSmall ? def.exactLength.value : undefined),
                    maximum: (tooBig ? def.exactLength.value : undefined),
                    type: "array",
                    inclusive: true,
                    exact: true,
                    message: def.exactLength.message,
                });
                status.dirty();
            }
        }
        if (def.minLength !== null) {
            if (ctx.data.length < def.minLength.value) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.too_small,
                    minimum: def.minLength.value,
                    type: "array",
                    inclusive: true,
                    exact: false,
                    message: def.minLength.message,
                });
                status.dirty();
            }
        }
        if (def.maxLength !== null) {
            if (ctx.data.length > def.maxLength.value) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.too_big,
                    maximum: def.maxLength.value,
                    type: "array",
                    inclusive: true,
                    exact: false,
                    message: def.maxLength.message,
                });
                status.dirty();
            }
        }
        if (ctx.common.async) {
            return Promise.all([...ctx.data].map((item, i) => {
                return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
            })).then((result) => {
                return ParseStatus.mergeArray(status, result);
            });
        }
        const result = [...ctx.data].map((item, i) => {
            return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
        });
        return ParseStatus.mergeArray(status, result);
    }
    get element() {
        return this._def.type;
    }
    min(minLength, message) {
        return new ZodArray({
            ...this._def,
            minLength: { value: minLength, message: errorUtil.toString(message) },
        });
    }
    max(maxLength, message) {
        return new ZodArray({
            ...this._def,
            maxLength: { value: maxLength, message: errorUtil.toString(message) },
        });
    }
    length(len, message) {
        return new ZodArray({
            ...this._def,
            exactLength: { value: len, message: errorUtil.toString(message) },
        });
    }
    nonempty(message) {
        return this.min(1, message);
    }
}
ZodArray.create = (schema, params) => {
    return new ZodArray({
        type: schema,
        minLength: null,
        maxLength: null,
        exactLength: null,
        typeName: ZodFirstPartyTypeKind.ZodArray,
        ...processCreateParams(params),
    });
};
function deepPartialify(schema) {
    if (schema instanceof ZodObject) {
        const newShape = {};
        for (const key in schema.shape) {
            const fieldSchema = schema.shape[key];
            newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
        }
        return new ZodObject({
            ...schema._def,
            shape: () => newShape,
        });
    }
    else if (schema instanceof ZodArray) {
        return new ZodArray({
            ...schema._def,
            type: deepPartialify(schema.element),
        });
    }
    else if (schema instanceof ZodOptional) {
        return ZodOptional.create(deepPartialify(schema.unwrap()));
    }
    else if (schema instanceof ZodNullable) {
        return ZodNullable.create(deepPartialify(schema.unwrap()));
    }
    else if (schema instanceof ZodTuple) {
        return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
    }
    else {
        return schema;
    }
}
class ZodObject extends ZodType {
    constructor() {
        super(...arguments);
        this._cached = null;
        /**
         * @deprecated In most cases, this is no longer needed - unknown properties are now silently stripped.
         * If you want to pass through unknown properties, use `.passthrough()` instead.
         */
        this.nonstrict = this.passthrough;
        // extend<
        //   Augmentation extends ZodRawShape,
        //   NewOutput extends util.flatten<{
        //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
        //       ? Augmentation[k]["_output"]
        //       : k extends keyof Output
        //       ? Output[k]
        //       : never;
        //   }>,
        //   NewInput extends util.flatten<{
        //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
        //       ? Augmentation[k]["_input"]
        //       : k extends keyof Input
        //       ? Input[k]
        //       : never;
        //   }>
        // >(
        //   augmentation: Augmentation
        // ): ZodObject<
        //   extendShape<T, Augmentation>,
        //   UnknownKeys,
        //   Catchall,
        //   NewOutput,
        //   NewInput
        // > {
        //   return new ZodObject({
        //     ...this._def,
        //     shape: () => ({
        //       ...this._def.shape(),
        //       ...augmentation,
        //     }),
        //   }) as any;
        // }
        /**
         * @deprecated Use `.extend` instead
         *  */
        this.augment = this.extend;
    }
    _getCached() {
        if (this._cached !== null)
            return this._cached;
        const shape = this._def.shape();
        const keys = util.objectKeys(shape);
        return (this._cached = { shape, keys });
    }
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.object) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.object,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        const { status, ctx } = this._processInputParams(input);
        const { shape, keys: shapeKeys } = this._getCached();
        const extraKeys = [];
        if (!(this._def.catchall instanceof ZodNever &&
            this._def.unknownKeys === "strip")) {
            for (const key in ctx.data) {
                if (!shapeKeys.includes(key)) {
                    extraKeys.push(key);
                }
            }
        }
        const pairs = [];
        for (const key of shapeKeys) {
            const keyValidator = shape[key];
            const value = ctx.data[key];
            pairs.push({
                key: { status: "valid", value: key },
                value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
                alwaysSet: key in ctx.data,
            });
        }
        if (this._def.catchall instanceof ZodNever) {
            const unknownKeys = this._def.unknownKeys;
            if (unknownKeys === "passthrough") {
                for (const key of extraKeys) {
                    pairs.push({
                        key: { status: "valid", value: key },
                        value: { status: "valid", value: ctx.data[key] },
                    });
                }
            }
            else if (unknownKeys === "strict") {
                if (extraKeys.length > 0) {
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.unrecognized_keys,
                        keys: extraKeys,
                    });
                    status.dirty();
                }
            }
            else if (unknownKeys === "strip") ;
            else {
                throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
            }
        }
        else {
            // run catchall validation
            const catchall = this._def.catchall;
            for (const key of extraKeys) {
                const value = ctx.data[key];
                pairs.push({
                    key: { status: "valid", value: key },
                    value: catchall._parse(new ParseInputLazyPath(ctx, value, ctx.path, key) //, ctx.child(key), value, getParsedType(value)
                    ),
                    alwaysSet: key in ctx.data,
                });
            }
        }
        if (ctx.common.async) {
            return Promise.resolve()
                .then(async () => {
                const syncPairs = [];
                for (const pair of pairs) {
                    const key = await pair.key;
                    syncPairs.push({
                        key,
                        value: await pair.value,
                        alwaysSet: pair.alwaysSet,
                    });
                }
                return syncPairs;
            })
                .then((syncPairs) => {
                return ParseStatus.mergeObjectSync(status, syncPairs);
            });
        }
        else {
            return ParseStatus.mergeObjectSync(status, pairs);
        }
    }
    get shape() {
        return this._def.shape();
    }
    strict(message) {
        errorUtil.errToObj;
        return new ZodObject({
            ...this._def,
            unknownKeys: "strict",
            ...(message !== undefined
                ? {
                    errorMap: (issue, ctx) => {
                        var _a, _b, _c, _d;
                        const defaultError = (_c = (_b = (_a = this._def).errorMap) === null || _b === void 0 ? void 0 : _b.call(_a, issue, ctx).message) !== null && _c !== void 0 ? _c : ctx.defaultError;
                        if (issue.code === "unrecognized_keys")
                            return {
                                message: (_d = errorUtil.errToObj(message).message) !== null && _d !== void 0 ? _d : defaultError,
                            };
                        return {
                            message: defaultError,
                        };
                    },
                }
                : {}),
        });
    }
    strip() {
        return new ZodObject({
            ...this._def,
            unknownKeys: "strip",
        });
    }
    passthrough() {
        return new ZodObject({
            ...this._def,
            unknownKeys: "passthrough",
        });
    }
    // const AugmentFactory =
    //   <Def extends ZodObjectDef>(def: Def) =>
    //   <Augmentation extends ZodRawShape>(
    //     augmentation: Augmentation
    //   ): ZodObject<
    //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
    //     Def["unknownKeys"],
    //     Def["catchall"]
    //   > => {
    //     return new ZodObject({
    //       ...def,
    //       shape: () => ({
    //         ...def.shape(),
    //         ...augmentation,
    //       }),
    //     }) as any;
    //   };
    extend(augmentation) {
        return new ZodObject({
            ...this._def,
            shape: () => ({
                ...this._def.shape(),
                ...augmentation,
            }),
        });
    }
    /**
     * Prior to zod@1.0.12 there was a bug in the
     * inferred type of merged objects. Please
     * upgrade if you are experiencing issues.
     */
    merge(merging) {
        const merged = new ZodObject({
            unknownKeys: merging._def.unknownKeys,
            catchall: merging._def.catchall,
            shape: () => ({
                ...this._def.shape(),
                ...merging._def.shape(),
            }),
            typeName: ZodFirstPartyTypeKind.ZodObject,
        });
        return merged;
    }
    // merge<
    //   Incoming extends AnyZodObject,
    //   Augmentation extends Incoming["shape"],
    //   NewOutput extends {
    //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
    //       ? Augmentation[k]["_output"]
    //       : k extends keyof Output
    //       ? Output[k]
    //       : never;
    //   },
    //   NewInput extends {
    //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
    //       ? Augmentation[k]["_input"]
    //       : k extends keyof Input
    //       ? Input[k]
    //       : never;
    //   }
    // >(
    //   merging: Incoming
    // ): ZodObject<
    //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
    //   Incoming["_def"]["unknownKeys"],
    //   Incoming["_def"]["catchall"],
    //   NewOutput,
    //   NewInput
    // > {
    //   const merged: any = new ZodObject({
    //     unknownKeys: merging._def.unknownKeys,
    //     catchall: merging._def.catchall,
    //     shape: () =>
    //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
    //     typeName: ZodFirstPartyTypeKind.ZodObject,
    //   }) as any;
    //   return merged;
    // }
    setKey(key, schema) {
        return this.augment({ [key]: schema });
    }
    // merge<Incoming extends AnyZodObject>(
    //   merging: Incoming
    // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
    // ZodObject<
    //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
    //   Incoming["_def"]["unknownKeys"],
    //   Incoming["_def"]["catchall"]
    // > {
    //   // const mergedShape = objectUtil.mergeShapes(
    //   //   this._def.shape(),
    //   //   merging._def.shape()
    //   // );
    //   const merged: any = new ZodObject({
    //     unknownKeys: merging._def.unknownKeys,
    //     catchall: merging._def.catchall,
    //     shape: () =>
    //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
    //     typeName: ZodFirstPartyTypeKind.ZodObject,
    //   }) as any;
    //   return merged;
    // }
    catchall(index) {
        return new ZodObject({
            ...this._def,
            catchall: index,
        });
    }
    pick(mask) {
        const shape = {};
        util.objectKeys(mask).forEach((key) => {
            if (mask[key] && this.shape[key]) {
                shape[key] = this.shape[key];
            }
        });
        return new ZodObject({
            ...this._def,
            shape: () => shape,
        });
    }
    omit(mask) {
        const shape = {};
        util.objectKeys(this.shape).forEach((key) => {
            if (!mask[key]) {
                shape[key] = this.shape[key];
            }
        });
        return new ZodObject({
            ...this._def,
            shape: () => shape,
        });
    }
    /**
     * @deprecated
     */
    deepPartial() {
        return deepPartialify(this);
    }
    partial(mask) {
        const newShape = {};
        util.objectKeys(this.shape).forEach((key) => {
            const fieldSchema = this.shape[key];
            if (mask && !mask[key]) {
                newShape[key] = fieldSchema;
            }
            else {
                newShape[key] = fieldSchema.optional();
            }
        });
        return new ZodObject({
            ...this._def,
            shape: () => newShape,
        });
    }
    required(mask) {
        const newShape = {};
        util.objectKeys(this.shape).forEach((key) => {
            if (mask && !mask[key]) {
                newShape[key] = this.shape[key];
            }
            else {
                const fieldSchema = this.shape[key];
                let newField = fieldSchema;
                while (newField instanceof ZodOptional) {
                    newField = newField._def.innerType;
                }
                newShape[key] = newField;
            }
        });
        return new ZodObject({
            ...this._def,
            shape: () => newShape,
        });
    }
    keyof() {
        return createZodEnum(util.objectKeys(this.shape));
    }
}
ZodObject.create = (shape, params) => {
    return new ZodObject({
        shape: () => shape,
        unknownKeys: "strip",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params),
    });
};
ZodObject.strictCreate = (shape, params) => {
    return new ZodObject({
        shape: () => shape,
        unknownKeys: "strict",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params),
    });
};
ZodObject.lazycreate = (shape, params) => {
    return new ZodObject({
        shape,
        unknownKeys: "strip",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params),
    });
};
class ZodUnion extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        const options = this._def.options;
        function handleResults(results) {
            // return first issue-free validation if it exists
            for (const result of results) {
                if (result.result.status === "valid") {
                    return result.result;
                }
            }
            for (const result of results) {
                if (result.result.status === "dirty") {
                    // add issues from dirty option
                    ctx.common.issues.push(...result.ctx.common.issues);
                    return result.result;
                }
            }
            // return invalid
            const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_union,
                unionErrors,
            });
            return INVALID;
        }
        if (ctx.common.async) {
            return Promise.all(options.map(async (option) => {
                const childCtx = {
                    ...ctx,
                    common: {
                        ...ctx.common,
                        issues: [],
                    },
                    parent: null,
                };
                return {
                    result: await option._parseAsync({
                        data: ctx.data,
                        path: ctx.path,
                        parent: childCtx,
                    }),
                    ctx: childCtx,
                };
            })).then(handleResults);
        }
        else {
            let dirty = undefined;
            const issues = [];
            for (const option of options) {
                const childCtx = {
                    ...ctx,
                    common: {
                        ...ctx.common,
                        issues: [],
                    },
                    parent: null,
                };
                const result = option._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: childCtx,
                });
                if (result.status === "valid") {
                    return result;
                }
                else if (result.status === "dirty" && !dirty) {
                    dirty = { result, ctx: childCtx };
                }
                if (childCtx.common.issues.length) {
                    issues.push(childCtx.common.issues);
                }
            }
            if (dirty) {
                ctx.common.issues.push(...dirty.ctx.common.issues);
                return dirty.result;
            }
            const unionErrors = issues.map((issues) => new ZodError(issues));
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_union,
                unionErrors,
            });
            return INVALID;
        }
    }
    get options() {
        return this._def.options;
    }
}
ZodUnion.create = (types, params) => {
    return new ZodUnion({
        options: types,
        typeName: ZodFirstPartyTypeKind.ZodUnion,
        ...processCreateParams(params),
    });
};
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//////////                                 //////////
//////////      ZodDiscriminatedUnion      //////////
//////////                                 //////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
const getDiscriminator = (type) => {
    if (type instanceof ZodLazy) {
        return getDiscriminator(type.schema);
    }
    else if (type instanceof ZodEffects) {
        return getDiscriminator(type.innerType());
    }
    else if (type instanceof ZodLiteral) {
        return [type.value];
    }
    else if (type instanceof ZodEnum) {
        return type.options;
    }
    else if (type instanceof ZodNativeEnum) {
        // eslint-disable-next-line ban/ban
        return Object.keys(type.enum);
    }
    else if (type instanceof ZodDefault) {
        return getDiscriminator(type._def.innerType);
    }
    else if (type instanceof ZodUndefined) {
        return [undefined];
    }
    else if (type instanceof ZodNull) {
        return [null];
    }
    else {
        return null;
    }
};
class ZodDiscriminatedUnion extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.object) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.object,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        const discriminator = this.discriminator;
        const discriminatorValue = ctx.data[discriminator];
        const option = this.optionsMap.get(discriminatorValue);
        if (!option) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_union_discriminator,
                options: Array.from(this.optionsMap.keys()),
                path: [discriminator],
            });
            return INVALID;
        }
        if (ctx.common.async) {
            return option._parseAsync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx,
            });
        }
        else {
            return option._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx,
            });
        }
    }
    get discriminator() {
        return this._def.discriminator;
    }
    get options() {
        return this._def.options;
    }
    get optionsMap() {
        return this._def.optionsMap;
    }
    /**
     * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
     * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
     * have a different value for each object in the union.
     * @param discriminator the name of the discriminator property
     * @param types an array of object schemas
     * @param params
     */
    static create(discriminator, options, params) {
        // Get all the valid discriminator values
        const optionsMap = new Map();
        // try {
        for (const type of options) {
            const discriminatorValues = getDiscriminator(type.shape[discriminator]);
            if (!discriminatorValues) {
                throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
            }
            for (const value of discriminatorValues) {
                if (optionsMap.has(value)) {
                    throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
                }
                optionsMap.set(value, type);
            }
        }
        return new ZodDiscriminatedUnion({
            typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
            discriminator,
            options,
            optionsMap,
            ...processCreateParams(params),
        });
    }
}
function mergeValues(a, b) {
    const aType = getParsedType(a);
    const bType = getParsedType(b);
    if (a === b) {
        return { valid: true, data: a };
    }
    else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
        const bKeys = util.objectKeys(b);
        const sharedKeys = util
            .objectKeys(a)
            .filter((key) => bKeys.indexOf(key) !== -1);
        const newObj = { ...a, ...b };
        for (const key of sharedKeys) {
            const sharedValue = mergeValues(a[key], b[key]);
            if (!sharedValue.valid) {
                return { valid: false };
            }
            newObj[key] = sharedValue.data;
        }
        return { valid: true, data: newObj };
    }
    else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
        if (a.length !== b.length) {
            return { valid: false };
        }
        const newArray = [];
        for (let index = 0; index < a.length; index++) {
            const itemA = a[index];
            const itemB = b[index];
            const sharedValue = mergeValues(itemA, itemB);
            if (!sharedValue.valid) {
                return { valid: false };
            }
            newArray.push(sharedValue.data);
        }
        return { valid: true, data: newArray };
    }
    else if (aType === ZodParsedType.date &&
        bType === ZodParsedType.date &&
        +a === +b) {
        return { valid: true, data: a };
    }
    else {
        return { valid: false };
    }
}
class ZodIntersection extends ZodType {
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        const handleParsed = (parsedLeft, parsedRight) => {
            if (isAborted(parsedLeft) || isAborted(parsedRight)) {
                return INVALID;
            }
            const merged = mergeValues(parsedLeft.value, parsedRight.value);
            if (!merged.valid) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.invalid_intersection_types,
                });
                return INVALID;
            }
            if (isDirty(parsedLeft) || isDirty(parsedRight)) {
                status.dirty();
            }
            return { status: status.value, value: merged.data };
        };
        if (ctx.common.async) {
            return Promise.all([
                this._def.left._parseAsync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx,
                }),
                this._def.right._parseAsync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx,
                }),
            ]).then(([left, right]) => handleParsed(left, right));
        }
        else {
            return handleParsed(this._def.left._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx,
            }), this._def.right._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx,
            }));
        }
    }
}
ZodIntersection.create = (left, right, params) => {
    return new ZodIntersection({
        left: left,
        right: right,
        typeName: ZodFirstPartyTypeKind.ZodIntersection,
        ...processCreateParams(params),
    });
};
class ZodTuple extends ZodType {
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.array) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.array,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        if (ctx.data.length < this._def.items.length) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.too_small,
                minimum: this._def.items.length,
                inclusive: true,
                exact: false,
                type: "array",
            });
            return INVALID;
        }
        const rest = this._def.rest;
        if (!rest && ctx.data.length > this._def.items.length) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.too_big,
                maximum: this._def.items.length,
                inclusive: true,
                exact: false,
                type: "array",
            });
            status.dirty();
        }
        const items = [...ctx.data]
            .map((item, itemIndex) => {
            const schema = this._def.items[itemIndex] || this._def.rest;
            if (!schema)
                return null;
            return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
        })
            .filter((x) => !!x); // filter nulls
        if (ctx.common.async) {
            return Promise.all(items).then((results) => {
                return ParseStatus.mergeArray(status, results);
            });
        }
        else {
            return ParseStatus.mergeArray(status, items);
        }
    }
    get items() {
        return this._def.items;
    }
    rest(rest) {
        return new ZodTuple({
            ...this._def,
            rest,
        });
    }
}
ZodTuple.create = (schemas, params) => {
    if (!Array.isArray(schemas)) {
        throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    }
    return new ZodTuple({
        items: schemas,
        typeName: ZodFirstPartyTypeKind.ZodTuple,
        rest: null,
        ...processCreateParams(params),
    });
};
class ZodRecord extends ZodType {
    get keySchema() {
        return this._def.keyType;
    }
    get valueSchema() {
        return this._def.valueType;
    }
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.object) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.object,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        const pairs = [];
        const keyType = this._def.keyType;
        const valueType = this._def.valueType;
        for (const key in ctx.data) {
            pairs.push({
                key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
                value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
            });
        }
        if (ctx.common.async) {
            return ParseStatus.mergeObjectAsync(status, pairs);
        }
        else {
            return ParseStatus.mergeObjectSync(status, pairs);
        }
    }
    get element() {
        return this._def.valueType;
    }
    static create(first, second, third) {
        if (second instanceof ZodType) {
            return new ZodRecord({
                keyType: first,
                valueType: second,
                typeName: ZodFirstPartyTypeKind.ZodRecord,
                ...processCreateParams(third),
            });
        }
        return new ZodRecord({
            keyType: ZodString.create(),
            valueType: first,
            typeName: ZodFirstPartyTypeKind.ZodRecord,
            ...processCreateParams(second),
        });
    }
}
class ZodMap extends ZodType {
    get keySchema() {
        return this._def.keyType;
    }
    get valueSchema() {
        return this._def.valueType;
    }
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.map) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.map,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        const keyType = this._def.keyType;
        const valueType = this._def.valueType;
        const pairs = [...ctx.data.entries()].map(([key, value], index) => {
            return {
                key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
                value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"])),
            };
        });
        if (ctx.common.async) {
            const finalMap = new Map();
            return Promise.resolve().then(async () => {
                for (const pair of pairs) {
                    const key = await pair.key;
                    const value = await pair.value;
                    if (key.status === "aborted" || value.status === "aborted") {
                        return INVALID;
                    }
                    if (key.status === "dirty" || value.status === "dirty") {
                        status.dirty();
                    }
                    finalMap.set(key.value, value.value);
                }
                return { status: status.value, value: finalMap };
            });
        }
        else {
            const finalMap = new Map();
            for (const pair of pairs) {
                const key = pair.key;
                const value = pair.value;
                if (key.status === "aborted" || value.status === "aborted") {
                    return INVALID;
                }
                if (key.status === "dirty" || value.status === "dirty") {
                    status.dirty();
                }
                finalMap.set(key.value, value.value);
            }
            return { status: status.value, value: finalMap };
        }
    }
}
ZodMap.create = (keyType, valueType, params) => {
    return new ZodMap({
        valueType,
        keyType,
        typeName: ZodFirstPartyTypeKind.ZodMap,
        ...processCreateParams(params),
    });
};
class ZodSet extends ZodType {
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.set) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.set,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        const def = this._def;
        if (def.minSize !== null) {
            if (ctx.data.size < def.minSize.value) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.too_small,
                    minimum: def.minSize.value,
                    type: "set",
                    inclusive: true,
                    exact: false,
                    message: def.minSize.message,
                });
                status.dirty();
            }
        }
        if (def.maxSize !== null) {
            if (ctx.data.size > def.maxSize.value) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.too_big,
                    maximum: def.maxSize.value,
                    type: "set",
                    inclusive: true,
                    exact: false,
                    message: def.maxSize.message,
                });
                status.dirty();
            }
        }
        const valueType = this._def.valueType;
        function finalizeSet(elements) {
            const parsedSet = new Set();
            for (const element of elements) {
                if (element.status === "aborted")
                    return INVALID;
                if (element.status === "dirty")
                    status.dirty();
                parsedSet.add(element.value);
            }
            return { status: status.value, value: parsedSet };
        }
        const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
        if (ctx.common.async) {
            return Promise.all(elements).then((elements) => finalizeSet(elements));
        }
        else {
            return finalizeSet(elements);
        }
    }
    min(minSize, message) {
        return new ZodSet({
            ...this._def,
            minSize: { value: minSize, message: errorUtil.toString(message) },
        });
    }
    max(maxSize, message) {
        return new ZodSet({
            ...this._def,
            maxSize: { value: maxSize, message: errorUtil.toString(message) },
        });
    }
    size(size, message) {
        return this.min(size, message).max(size, message);
    }
    nonempty(message) {
        return this.min(1, message);
    }
}
ZodSet.create = (valueType, params) => {
    return new ZodSet({
        valueType,
        minSize: null,
        maxSize: null,
        typeName: ZodFirstPartyTypeKind.ZodSet,
        ...processCreateParams(params),
    });
};
class ZodFunction extends ZodType {
    constructor() {
        super(...arguments);
        this.validate = this.implement;
    }
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.function) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.function,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        function makeArgsIssue(args, error) {
            return makeIssue({
                data: args,
                path: ctx.path,
                errorMaps: [
                    ctx.common.contextualErrorMap,
                    ctx.schemaErrorMap,
                    getErrorMap(),
                    errorMap,
                ].filter((x) => !!x),
                issueData: {
                    code: ZodIssueCode.invalid_arguments,
                    argumentsError: error,
                },
            });
        }
        function makeReturnsIssue(returns, error) {
            return makeIssue({
                data: returns,
                path: ctx.path,
                errorMaps: [
                    ctx.common.contextualErrorMap,
                    ctx.schemaErrorMap,
                    getErrorMap(),
                    errorMap,
                ].filter((x) => !!x),
                issueData: {
                    code: ZodIssueCode.invalid_return_type,
                    returnTypeError: error,
                },
            });
        }
        const params = { errorMap: ctx.common.contextualErrorMap };
        const fn = ctx.data;
        if (this._def.returns instanceof ZodPromise) {
            // Would love a way to avoid disabling this rule, but we need
            // an alias (using an arrow function was what caused 2651).
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            const me = this;
            return OK(async function (...args) {
                const error = new ZodError([]);
                const parsedArgs = await me._def.args
                    .parseAsync(args, params)
                    .catch((e) => {
                    error.addIssue(makeArgsIssue(args, e));
                    throw error;
                });
                const result = await Reflect.apply(fn, this, parsedArgs);
                const parsedReturns = await me._def.returns._def.type
                    .parseAsync(result, params)
                    .catch((e) => {
                    error.addIssue(makeReturnsIssue(result, e));
                    throw error;
                });
                return parsedReturns;
            });
        }
        else {
            // Would love a way to avoid disabling this rule, but we need
            // an alias (using an arrow function was what caused 2651).
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            const me = this;
            return OK(function (...args) {
                const parsedArgs = me._def.args.safeParse(args, params);
                if (!parsedArgs.success) {
                    throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
                }
                const result = Reflect.apply(fn, this, parsedArgs.data);
                const parsedReturns = me._def.returns.safeParse(result, params);
                if (!parsedReturns.success) {
                    throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
                }
                return parsedReturns.data;
            });
        }
    }
    parameters() {
        return this._def.args;
    }
    returnType() {
        return this._def.returns;
    }
    args(...items) {
        return new ZodFunction({
            ...this._def,
            args: ZodTuple.create(items).rest(ZodUnknown.create()),
        });
    }
    returns(returnType) {
        return new ZodFunction({
            ...this._def,
            returns: returnType,
        });
    }
    implement(func) {
        const validatedFunc = this.parse(func);
        return validatedFunc;
    }
    strictImplement(func) {
        const validatedFunc = this.parse(func);
        return validatedFunc;
    }
    static create(args, returns, params) {
        return new ZodFunction({
            args: (args
                ? args
                : ZodTuple.create([]).rest(ZodUnknown.create())),
            returns: returns || ZodUnknown.create(),
            typeName: ZodFirstPartyTypeKind.ZodFunction,
            ...processCreateParams(params),
        });
    }
}
class ZodLazy extends ZodType {
    get schema() {
        return this._def.getter();
    }
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        const lazySchema = this._def.getter();
        return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
    }
}
ZodLazy.create = (getter, params) => {
    return new ZodLazy({
        getter: getter,
        typeName: ZodFirstPartyTypeKind.ZodLazy,
        ...processCreateParams(params),
    });
};
class ZodLiteral extends ZodType {
    _parse(input) {
        if (input.data !== this._def.value) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                received: ctx.data,
                code: ZodIssueCode.invalid_literal,
                expected: this._def.value,
            });
            return INVALID;
        }
        return { status: "valid", value: input.data };
    }
    get value() {
        return this._def.value;
    }
}
ZodLiteral.create = (value, params) => {
    return new ZodLiteral({
        value: value,
        typeName: ZodFirstPartyTypeKind.ZodLiteral,
        ...processCreateParams(params),
    });
};
function createZodEnum(values, params) {
    return new ZodEnum({
        values,
        typeName: ZodFirstPartyTypeKind.ZodEnum,
        ...processCreateParams(params),
    });
}
class ZodEnum extends ZodType {
    _parse(input) {
        if (typeof input.data !== "string") {
            const ctx = this._getOrReturnCtx(input);
            const expectedValues = this._def.values;
            addIssueToContext(ctx, {
                expected: util.joinValues(expectedValues),
                received: ctx.parsedType,
                code: ZodIssueCode.invalid_type,
            });
            return INVALID;
        }
        if (this._def.values.indexOf(input.data) === -1) {
            const ctx = this._getOrReturnCtx(input);
            const expectedValues = this._def.values;
            addIssueToContext(ctx, {
                received: ctx.data,
                code: ZodIssueCode.invalid_enum_value,
                options: expectedValues,
            });
            return INVALID;
        }
        return OK(input.data);
    }
    get options() {
        return this._def.values;
    }
    get enum() {
        const enumValues = {};
        for (const val of this._def.values) {
            enumValues[val] = val;
        }
        return enumValues;
    }
    get Values() {
        const enumValues = {};
        for (const val of this._def.values) {
            enumValues[val] = val;
        }
        return enumValues;
    }
    get Enum() {
        const enumValues = {};
        for (const val of this._def.values) {
            enumValues[val] = val;
        }
        return enumValues;
    }
    extract(values) {
        return ZodEnum.create(values);
    }
    exclude(values) {
        return ZodEnum.create(this.options.filter((opt) => !values.includes(opt)));
    }
}
ZodEnum.create = createZodEnum;
class ZodNativeEnum extends ZodType {
    _parse(input) {
        const nativeEnumValues = util.getValidEnumValues(this._def.values);
        const ctx = this._getOrReturnCtx(input);
        if (ctx.parsedType !== ZodParsedType.string &&
            ctx.parsedType !== ZodParsedType.number) {
            const expectedValues = util.objectValues(nativeEnumValues);
            addIssueToContext(ctx, {
                expected: util.joinValues(expectedValues),
                received: ctx.parsedType,
                code: ZodIssueCode.invalid_type,
            });
            return INVALID;
        }
        if (nativeEnumValues.indexOf(input.data) === -1) {
            const expectedValues = util.objectValues(nativeEnumValues);
            addIssueToContext(ctx, {
                received: ctx.data,
                code: ZodIssueCode.invalid_enum_value,
                options: expectedValues,
            });
            return INVALID;
        }
        return OK(input.data);
    }
    get enum() {
        return this._def.values;
    }
}
ZodNativeEnum.create = (values, params) => {
    return new ZodNativeEnum({
        values: values,
        typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
        ...processCreateParams(params),
    });
};
class ZodPromise extends ZodType {
    unwrap() {
        return this._def.type;
    }
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.promise &&
            ctx.common.async === false) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.promise,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        const promisified = ctx.parsedType === ZodParsedType.promise
            ? ctx.data
            : Promise.resolve(ctx.data);
        return OK(promisified.then((data) => {
            return this._def.type.parseAsync(data, {
                path: ctx.path,
                errorMap: ctx.common.contextualErrorMap,
            });
        }));
    }
}
ZodPromise.create = (schema, params) => {
    return new ZodPromise({
        type: schema,
        typeName: ZodFirstPartyTypeKind.ZodPromise,
        ...processCreateParams(params),
    });
};
class ZodEffects extends ZodType {
    innerType() {
        return this._def.schema;
    }
    sourceType() {
        return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects
            ? this._def.schema.sourceType()
            : this._def.schema;
    }
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        const effect = this._def.effect || null;
        const checkCtx = {
            addIssue: (arg) => {
                addIssueToContext(ctx, arg);
                if (arg.fatal) {
                    status.abort();
                }
                else {
                    status.dirty();
                }
            },
            get path() {
                return ctx.path;
            },
        };
        checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
        if (effect.type === "preprocess") {
            const processed = effect.transform(ctx.data, checkCtx);
            if (ctx.common.issues.length) {
                return {
                    status: "dirty",
                    value: ctx.data,
                };
            }
            if (ctx.common.async) {
                return Promise.resolve(processed).then((processed) => {
                    return this._def.schema._parseAsync({
                        data: processed,
                        path: ctx.path,
                        parent: ctx,
                    });
                });
            }
            else {
                return this._def.schema._parseSync({
                    data: processed,
                    path: ctx.path,
                    parent: ctx,
                });
            }
        }
        if (effect.type === "refinement") {
            const executeRefinement = (acc
            // effect: RefinementEffect<any>
            ) => {
                const result = effect.refinement(acc, checkCtx);
                if (ctx.common.async) {
                    return Promise.resolve(result);
                }
                if (result instanceof Promise) {
                    throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                }
                return acc;
            };
            if (ctx.common.async === false) {
                const inner = this._def.schema._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx,
                });
                if (inner.status === "aborted")
                    return INVALID;
                if (inner.status === "dirty")
                    status.dirty();
                // return value is ignored
                executeRefinement(inner.value);
                return { status: status.value, value: inner.value };
            }
            else {
                return this._def.schema
                    ._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx })
                    .then((inner) => {
                    if (inner.status === "aborted")
                        return INVALID;
                    if (inner.status === "dirty")
                        status.dirty();
                    return executeRefinement(inner.value).then(() => {
                        return { status: status.value, value: inner.value };
                    });
                });
            }
        }
        if (effect.type === "transform") {
            if (ctx.common.async === false) {
                const base = this._def.schema._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx,
                });
                if (!isValid(base))
                    return base;
                const result = effect.transform(base.value, checkCtx);
                if (result instanceof Promise) {
                    throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
                }
                return { status: status.value, value: result };
            }
            else {
                return this._def.schema
                    ._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx })
                    .then((base) => {
                    if (!isValid(base))
                        return base;
                    return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({ status: status.value, value: result }));
                });
            }
        }
        util.assertNever(effect);
    }
}
ZodEffects.create = (schema, effect, params) => {
    return new ZodEffects({
        schema,
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        effect,
        ...processCreateParams(params),
    });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
    return new ZodEffects({
        schema,
        effect: { type: "preprocess", transform: preprocess },
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        ...processCreateParams(params),
    });
};
class ZodOptional extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType === ZodParsedType.undefined) {
            return OK(undefined);
        }
        return this._def.innerType._parse(input);
    }
    unwrap() {
        return this._def.innerType;
    }
}
ZodOptional.create = (type, params) => {
    return new ZodOptional({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodOptional,
        ...processCreateParams(params),
    });
};
class ZodNullable extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType === ZodParsedType.null) {
            return OK(null);
        }
        return this._def.innerType._parse(input);
    }
    unwrap() {
        return this._def.innerType;
    }
}
ZodNullable.create = (type, params) => {
    return new ZodNullable({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodNullable,
        ...processCreateParams(params),
    });
};
class ZodDefault extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        let data = ctx.data;
        if (ctx.parsedType === ZodParsedType.undefined) {
            data = this._def.defaultValue();
        }
        return this._def.innerType._parse({
            data,
            path: ctx.path,
            parent: ctx,
        });
    }
    removeDefault() {
        return this._def.innerType;
    }
}
ZodDefault.create = (type, params) => {
    return new ZodDefault({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodDefault,
        defaultValue: typeof params.default === "function"
            ? params.default
            : () => params.default,
        ...processCreateParams(params),
    });
};
class ZodCatch extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        // newCtx is used to not collect issues from inner types in ctx
        const newCtx = {
            ...ctx,
            common: {
                ...ctx.common,
                issues: [],
            },
        };
        const result = this._def.innerType._parse({
            data: newCtx.data,
            path: newCtx.path,
            parent: {
                ...newCtx,
            },
        });
        if (isAsync(result)) {
            return result.then((result) => {
                return {
                    status: "valid",
                    value: result.status === "valid"
                        ? result.value
                        : this._def.catchValue({
                            get error() {
                                return new ZodError(newCtx.common.issues);
                            },
                            input: newCtx.data,
                        }),
                };
            });
        }
        else {
            return {
                status: "valid",
                value: result.status === "valid"
                    ? result.value
                    : this._def.catchValue({
                        get error() {
                            return new ZodError(newCtx.common.issues);
                        },
                        input: newCtx.data,
                    }),
            };
        }
    }
    removeCatch() {
        return this._def.innerType;
    }
}
ZodCatch.create = (type, params) => {
    return new ZodCatch({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodCatch,
        catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
        ...processCreateParams(params),
    });
};
class ZodNaN extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.nan) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.nan,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        return { status: "valid", value: input.data };
    }
}
ZodNaN.create = (params) => {
    return new ZodNaN({
        typeName: ZodFirstPartyTypeKind.ZodNaN,
        ...processCreateParams(params),
    });
};
class ZodBranded extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        const data = ctx.data;
        return this._def.type._parse({
            data,
            path: ctx.path,
            parent: ctx,
        });
    }
    unwrap() {
        return this._def.type;
    }
}
class ZodPipeline extends ZodType {
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.common.async) {
            const handleAsync = async () => {
                const inResult = await this._def.in._parseAsync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx,
                });
                if (inResult.status === "aborted")
                    return INVALID;
                if (inResult.status === "dirty") {
                    status.dirty();
                    return DIRTY(inResult.value);
                }
                else {
                    return this._def.out._parseAsync({
                        data: inResult.value,
                        path: ctx.path,
                        parent: ctx,
                    });
                }
            };
            return handleAsync();
        }
        else {
            const inResult = this._def.in._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx,
            });
            if (inResult.status === "aborted")
                return INVALID;
            if (inResult.status === "dirty") {
                status.dirty();
                return {
                    status: "dirty",
                    value: inResult.value,
                };
            }
            else {
                return this._def.out._parseSync({
                    data: inResult.value,
                    path: ctx.path,
                    parent: ctx,
                });
            }
        }
    }
    static create(a, b) {
        return new ZodPipeline({
            in: a,
            out: b,
            typeName: ZodFirstPartyTypeKind.ZodPipeline,
        });
    }
}
class ZodReadonly extends ZodType {
    _parse(input) {
        const result = this._def.innerType._parse(input);
        if (isValid(result)) {
            result.value = Object.freeze(result.value);
        }
        return result;
    }
}
ZodReadonly.create = (type, params) => {
    return new ZodReadonly({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodReadonly,
        ...processCreateParams(params),
    });
};
({
    object: ZodObject.lazycreate,
});
var ZodFirstPartyTypeKind;
(function (ZodFirstPartyTypeKind) {
    ZodFirstPartyTypeKind["ZodString"] = "ZodString";
    ZodFirstPartyTypeKind["ZodNumber"] = "ZodNumber";
    ZodFirstPartyTypeKind["ZodNaN"] = "ZodNaN";
    ZodFirstPartyTypeKind["ZodBigInt"] = "ZodBigInt";
    ZodFirstPartyTypeKind["ZodBoolean"] = "ZodBoolean";
    ZodFirstPartyTypeKind["ZodDate"] = "ZodDate";
    ZodFirstPartyTypeKind["ZodSymbol"] = "ZodSymbol";
    ZodFirstPartyTypeKind["ZodUndefined"] = "ZodUndefined";
    ZodFirstPartyTypeKind["ZodNull"] = "ZodNull";
    ZodFirstPartyTypeKind["ZodAny"] = "ZodAny";
    ZodFirstPartyTypeKind["ZodUnknown"] = "ZodUnknown";
    ZodFirstPartyTypeKind["ZodNever"] = "ZodNever";
    ZodFirstPartyTypeKind["ZodVoid"] = "ZodVoid";
    ZodFirstPartyTypeKind["ZodArray"] = "ZodArray";
    ZodFirstPartyTypeKind["ZodObject"] = "ZodObject";
    ZodFirstPartyTypeKind["ZodUnion"] = "ZodUnion";
    ZodFirstPartyTypeKind["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
    ZodFirstPartyTypeKind["ZodIntersection"] = "ZodIntersection";
    ZodFirstPartyTypeKind["ZodTuple"] = "ZodTuple";
    ZodFirstPartyTypeKind["ZodRecord"] = "ZodRecord";
    ZodFirstPartyTypeKind["ZodMap"] = "ZodMap";
    ZodFirstPartyTypeKind["ZodSet"] = "ZodSet";
    ZodFirstPartyTypeKind["ZodFunction"] = "ZodFunction";
    ZodFirstPartyTypeKind["ZodLazy"] = "ZodLazy";
    ZodFirstPartyTypeKind["ZodLiteral"] = "ZodLiteral";
    ZodFirstPartyTypeKind["ZodEnum"] = "ZodEnum";
    ZodFirstPartyTypeKind["ZodEffects"] = "ZodEffects";
    ZodFirstPartyTypeKind["ZodNativeEnum"] = "ZodNativeEnum";
    ZodFirstPartyTypeKind["ZodOptional"] = "ZodOptional";
    ZodFirstPartyTypeKind["ZodNullable"] = "ZodNullable";
    ZodFirstPartyTypeKind["ZodDefault"] = "ZodDefault";
    ZodFirstPartyTypeKind["ZodCatch"] = "ZodCatch";
    ZodFirstPartyTypeKind["ZodPromise"] = "ZodPromise";
    ZodFirstPartyTypeKind["ZodBranded"] = "ZodBranded";
    ZodFirstPartyTypeKind["ZodPipeline"] = "ZodPipeline";
    ZodFirstPartyTypeKind["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
const stringType = ZodString.create;
ZodNumber.create;
ZodNaN.create;
ZodBigInt.create;
const booleanType = ZodBoolean.create;
ZodDate.create;
ZodSymbol.create;
const undefinedType = ZodUndefined.create;
ZodNull.create;
ZodAny.create;
ZodUnknown.create;
ZodNever.create;
ZodVoid.create;
const arrayType = ZodArray.create;
const objectType = ZodObject.create;
ZodObject.strictCreate;
const unionType = ZodUnion.create;
ZodDiscriminatedUnion.create;
ZodIntersection.create;
ZodTuple.create;
const recordType = ZodRecord.create;
ZodMap.create;
ZodSet.create;
ZodFunction.create;
ZodLazy.create;
ZodLiteral.create;
const enumType = ZodEnum.create;
ZodNativeEnum.create;
ZodPromise.create;
ZodEffects.create;
ZodOptional.create;
ZodNullable.create;
ZodEffects.createWithPreprocess;
ZodPipeline.create;

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection **${collection}** does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return;
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!(Object.assign({"BASE_URL":"/","MODE":"production","DEV":false,"PROD":true,"SSR":true,"SITE":"https://allrdy.io","ASSETS_PREFIX":undefined},{}))?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      entries = await Promise.all(
        lazyImports.map(async (lazyImport) => {
          const entry = await lazyImport();
          return type === "content" ? {
            id: entry.id,
            slug: entry.slug,
            body: entry.body,
            collection: entry.collection,
            data: entry.data,
            async render() {
              return render({
                collection: entry.collection,
                id: entry.id,
                renderEntryImport: await getRenderEntryImport(collection, entry.slug)
              });
            }
          } : {
            id: entry.id,
            collection: entry.collection,
            data: entry.data
          };
        })
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
function createGetEntry({
  getEntryImport,
  getRenderEntryImport
}) {
  return async function getEntry(collectionOrLookupObject, _lookupId) {
    let collection, lookupId;
    if (typeof collectionOrLookupObject === "string") {
      collection = collectionOrLookupObject;
      if (!_lookupId)
        throw new AstroError({
          ...UnknownContentCollectionError,
          message: "`getEntry()` requires an entry identifier as the second argument."
        });
      lookupId = _lookupId;
    } else {
      collection = collectionOrLookupObject.collection;
      lookupId = "id" in collectionOrLookupObject ? collectionOrLookupObject.id : collectionOrLookupObject.slug;
    }
    const entryImport = await getEntryImport(collection, lookupId);
    if (typeof entryImport !== "function")
      return void 0;
    const entry = await entryImport();
    if (entry._internal.type === "content") {
      return {
        id: entry.id,
        slug: entry.slug,
        body: entry.body,
        collection: entry.collection,
        data: entry.data,
        async render() {
          return render({
            collection: entry.collection,
            id: entry.id,
            renderEntryImport: await getRenderEntryImport(collection, lookupId)
          });
        }
      };
    } else if (entry._internal.type === "data") {
      return {
        id: entry.id,
        collection: entry.collection,
        data: entry.data
      };
    }
    return void 0;
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} \u2192 ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/docs/404.md": () => import('./chunk.1898bc92.js'),"/src/content/docs/index.mdx": () => import('./chunk.3204e59e.js'),"/src/content/docs/ko/index.mdx": () => import('./chunk.3575f6aa.js')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/i18n/en.json": () => import('./chunk.ff0d2454.js'),"/src/content/i18n/ko-KR.json": () => import('./chunk.a1e0e23a.js')});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
const collectionToEntryMap = createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"i18n":{"type":"data","entries":{"en":"/src/content/i18n/en.json","ko-KR":"/src/content/i18n/ko-KR.json"}},"docs":{"type":"content","entries":{"404":"/src/content/docs/404.md","ko":"/src/content/docs/ko/index.mdx","index":"/src/content/docs/index.mdx"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/docs/404.md": () => import('./chunk.7d52d4f6.js'),"/src/content/docs/index.mdx": () => import('./chunk.ffec4334.js'),"/src/content/docs/ko/index.mdx": () => import('./chunk.955529a2.js')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const getEntry = createGetEntry({
	getEntryImport: createGlobLookup(collectionToEntryMap),
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const config = {"title":"AllRdyO Inc.","description":"AllRdyO Inc.","tableOfContents":{"minHeadingLevel":2,"maxHeadingLevel":3},"editLink":{},"sidebar":[{"label":"Home","translations":{"ko":"홈"},"link":"/","attrs":{}}],"head":[],"customCss":[],"lastUpdated":false,"pagination":true,"favicon":{"href":"/favicon.svg","type":"image/svg+xml"},"components":{"Head":"@astrojs/starlight/components/Head.astro","ThemeProvider":"@astrojs/starlight/components/ThemeProvider.astro","SkipLink":"@astrojs/starlight/components/SkipLink.astro","PageFrame":"@astrojs/starlight/components/PageFrame.astro","MobileMenuToggle":"@astrojs/starlight/components/MobileMenuToggle.astro","TwoColumnContent":"@astrojs/starlight/components/TwoColumnContent.astro","Header":"@astrojs/starlight/components/Header.astro","SiteTitle":"@astrojs/starlight/components/SiteTitle.astro","Search":"@astrojs/starlight/components/Search.astro","SocialIcons":"@astrojs/starlight/components/SocialIcons.astro","ThemeSelect":"@astrojs/starlight/components/ThemeSelect.astro","LanguageSelect":"@astrojs/starlight/components/LanguageSelect.astro","Sidebar":"@astrojs/starlight/components/Sidebar.astro","MobileMenuFooter":"@astrojs/starlight/components/MobileMenuFooter.astro","PageSidebar":"@astrojs/starlight/components/PageSidebar.astro","TableOfContents":"@astrojs/starlight/components/TableOfContents.astro","MobileTableOfContents":"@astrojs/starlight/components/MobileTableOfContents.astro","Banner":"@astrojs/starlight/components/Banner.astro","ContentPanel":"@astrojs/starlight/components/ContentPanel.astro","PageTitle":"@astrojs/starlight/components/PageTitle.astro","FallbackContentNotice":"@astrojs/starlight/components/FallbackContentNotice.astro","Hero":"@astrojs/starlight/components/Hero.astro","MarkdownContent":"@astrojs/starlight/components/MarkdownContent.astro","Footer":"@astrojs/starlight/components/Footer.astro","LastUpdated":"@astrojs/starlight/components/LastUpdated.astro","Pagination":"@astrojs/starlight/components/Pagination.astro","EditLink":"@astrojs/starlight/components/EditLink.astro"},"titleDelimiter":"|","isMultilingual":true,"defaultLocale":{"label":"English","lang":"en","dir":"ltr","locale":"root"},"locales":{"root":{"label":"English","lang":"en","dir":"ltr"},"ko":{"label":"한국어","lang":"ko-KR","dir":"ltr"}}};

const html = "";

				const frontmatter = {};
				const file = "/Users/dubhe/d/site/node_modules/.pnpm/@astrojs+starlight@0.12.0_astro@3.5.1/node_modules/@astrojs/starlight/components/EmptyMarkdown.md";
				const url = undefined;

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

const version = "0.12.0";

function ensureLeadingSlash(href) {
  if (href[0] !== "/")
    href = "/" + href;
  return href;
}
function ensureTrailingSlash(href) {
  if (href[href.length - 1] !== "/")
    href += "/";
  return href;
}
function ensureLeadingAndTrailingSlashes(href) {
  href = ensureLeadingSlash(href);
  href = ensureTrailingSlash(href);
  return href;
}
function stripLeadingSlash(href) {
  if (href[0] === "/")
    href = href.slice(1);
  return href;
}
function stripTrailingSlash(href) {
  if (href[href.length - 1] === "/")
    href = href.slice(0, -1);
  return href;
}
function stripLeadingAndTrailingSlashes(href) {
  href = stripLeadingSlash(href);
  href = stripTrailingSlash(href);
  return href;
}

const base = stripTrailingSlash("/");
function pathWithBase(path) {
  path = stripLeadingAndTrailingSlashes(path);
  return path ? base + "/" + path + "/" : base + "/";
}
function fileWithBase(path) {
  path = stripLeadingAndTrailingSlashes(path);
  return path ? base + "/" + path : base;
}

const HeadConfigSchema = () => arrayType(
  objectType({
    /** Name of the HTML tag to add to `<head>`, e.g. `'meta'`, `'link'`, or `'script'`. */
    tag: enumType(["title", "base", "link", "style", "meta", "script", "noscript", "template"]),
    /** Attributes to set on the tag, e.g. `{ rel: 'stylesheet', href: '/custom.css' }`. */
    attrs: recordType(unionType([stringType(), booleanType(), undefinedType()])).default({}),
    /** Content to place inside the tag (optional). */
    content: stringType().default("")
  })
).default([]);

const HeadSchema = HeadConfigSchema();
function createHead(defaults, ...heads) {
  let head = HeadSchema.parse(defaults);
  for (const next of heads) {
    head = mergeHead(head, next);
  }
  return sortHead(head);
}
function hasTag(head, entry) {
  switch (entry.tag) {
    case "title":
      return head.some(({ tag }) => tag === "title");
    case "meta":
      return hasOneOf(head, entry, ["name", "property", "http-equiv"]);
    default:
      return false;
  }
}
function hasOneOf(head, entry, keys) {
  const attr = getAttr(keys, entry);
  if (!attr)
    return false;
  const [key, val] = attr;
  return head.some(({ tag, attrs }) => tag === entry.tag && attrs[key] === val);
}
function getAttr(keys, entry) {
  let attr;
  for (const key of keys) {
    const val = entry.attrs[key];
    if (val) {
      attr = [key, val];
      break;
    }
  }
  return attr;
}
function mergeHead(oldHead, newHead) {
  return [...oldHead.filter((tag) => !hasTag(newHead, tag)), ...newHead];
}
function sortHead(head) {
  return head.sort((a, b) => {
    const aImportance = getImportance(a);
    const bImportance = getImportance(b);
    return aImportance > bImportance ? -1 : bImportance > aImportance ? 1 : 0;
  });
}
function getImportance(entry) {
  if (entry.tag === "meta" && ("charset" in entry.attrs || "http-equiv" in entry.attrs || entry.attrs.name === "viewport")) {
    return 100;
  }
  if (entry.tag === "title")
    return 90;
  if (entry.tag !== "meta") {
    if (entry.tag === "link" && "rel" in entry.attrs && entry.attrs.rel === "shortcut icon") {
      return 70;
    }
    return 80;
  }
  return 0;
}

function localizedUrl(url, locale) {
  url = new URL(url);
  if (!config.locales) {
    return url;
  }
  if (locale === "root")
    locale = "";
  const base = "/".replace(/\/$/, "");
  const hasBase = url.pathname.startsWith(base);
  if (hasBase)
    url.pathname = url.pathname.replace(base, "");
  const [_leadingSlash, baseSegment] = url.pathname.split("/");
  if (baseSegment && baseSegment in config.locales) {
    url.pathname = locale ? url.pathname.replace(baseSegment, locale) : url.pathname.replace("/" + baseSegment, "");
  } else if (locale) {
    url.pathname = "/" + locale + url.pathname;
  }
  if (hasBase)
    url.pathname = base + url.pathname;
  return url;
}

const $$Astro$A = createAstro("https://allrdy.io");
const $$Head = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$A, $$props, $$slots);
  Astro2.self = $$Head;
  const { entry, lang } = Astro2.props;
  const { data } = entry;
  const canonical = Astro2.site ? new URL(Astro2.url.pathname, Astro2.site) : void 0;
  const description = data.description || config.description;
  const headDefaults = [
    { tag: "meta", attrs: { charset: "utf-8" } },
    {
      tag: "meta",
      attrs: { name: "viewport", content: "width=device-width, initial-scale=1" }
    },
    { tag: "title", content: `${data.title} ${config.titleDelimiter} ${config.title}` },
    { tag: "link", attrs: { rel: "canonical", href: canonical?.href } },
    { tag: "meta", attrs: { name: "generator", content: Astro2.generator } },
    {
      tag: "meta",
      attrs: { name: "generator", content: `Starlight v${version}` }
    },
    // Favicon
    {
      tag: "link",
      attrs: {
        rel: "shortcut icon",
        href: fileWithBase(config.favicon.href),
        type: config.favicon.type
      }
    },
    // OpenGraph Tags
    { tag: "meta", attrs: { property: "og:title", content: data.title } },
    { tag: "meta", attrs: { property: "og:type", content: "article" } },
    { tag: "meta", attrs: { property: "og:url", content: canonical?.href } },
    { tag: "meta", attrs: { property: "og:locale", content: lang } },
    { tag: "meta", attrs: { property: "og:description", content: description } },
    { tag: "meta", attrs: { property: "og:site_name", content: config.title } },
    // Twitter Tags
    {
      tag: "meta",
      attrs: { name: "twitter:card", content: "summary_large_image" }
    },
    { tag: "meta", attrs: { name: "twitter:title", content: data.title } },
    { tag: "meta", attrs: { name: "twitter:description", content: description } }
  ];
  if (description)
    headDefaults.push({
      tag: "meta",
      attrs: { name: "description", content: description }
    });
  if (canonical && config.isMultilingual) {
    for (const locale in config.locales) {
      const localeOpts = config.locales[locale];
      if (!localeOpts)
        continue;
      headDefaults.push({
        tag: "link",
        attrs: {
          rel: "alternate",
          hreflang: localeOpts.lang,
          href: localizedUrl(canonical, locale).href
        }
      });
    }
  }
  if (Astro2.site) {
    headDefaults.push({
      tag: "link",
      attrs: {
        rel: "sitemap",
        href: fileWithBase("/sitemap-index.xml")
      }
    });
  }
  if (config.social?.twitter) {
    headDefaults.push({
      tag: "meta",
      attrs: {
        name: "twitter:site",
        content: new URL(config.social.twitter.url).pathname
      }
    });
  }
  const head = createHead(headDefaults, config.head, data.head);
  return renderTemplate`${head.map(({ tag: Tag, attrs, content }) => renderTemplate`${renderComponent($$result, "Tag", Tag, { ...attrs }, { "default": ($$result2) => renderTemplate`${unescapeHTML(content)}` })}`)}`;
}, "/Users/dubhe/d/site/node_modules/.pnpm/@astrojs+starlight@0.12.0_astro@3.5.1/node_modules/@astrojs/starlight/components/Head.astro", void 0);

const Icons = {
  "up-caret": '<path d="m17 13.41-4.29-4.24a.999.999 0 0 0-1.42 0l-4.24 4.24a1 1 0 1 0 1.41 1.42L12 11.29l3.54 3.54a1 1 0 0 0 1.41 0 1 1 0 0 0 .05-1.42Z"/>',
  "down-caret": '<path d="M17 9.17a1 1 0 0 0-1.41 0L12 12.71 8.46 9.17a1 1 0 1 0-1.41 1.42l4.24 4.24a1.002 1.002 0 0 0 1.42 0L17 10.59a1.002 1.002 0 0 0 0-1.42Z"/>',
  "right-caret": '<path d="m14.83 11.29-4.24-4.24a1 1 0 1 0-1.42 1.41L12.71 12l-3.54 3.54a1 1 0 0 0 0 1.41 1 1 0 0 0 .71.29 1 1 0 0 0 .71-.29l4.24-4.24a1.002 1.002 0 0 0 0-1.42Z"/>',
  "right-arrow": '<path d="M17.92 11.62a1.001 1.001 0 0 0-.21-.33l-5-5a1.003 1.003 0 1 0-1.42 1.42l3.3 3.29H7a1 1 0 0 0 0 2h7.59l-3.3 3.29a1.002 1.002 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219l5-5a1 1 0 0 0 .21-.33 1 1 0 0 0 0-.76Z"/>',
  "left-arrow": '<path d="M17 11H9.41l3.3-3.29a1.004 1.004 0 1 0-1.42-1.42l-5 5a1 1 0 0 0-.21.33 1 1 0 0 0 0 .76 1 1 0 0 0 .21.33l5 5a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095L9.41 13H17a1 1 0 0 0 0-2Z"/>',
  bars: '<path d="M3 8h18a1 1 0 1 0 0-2H3a1 1 0 0 0 0 2Zm18 8H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Zm0-5H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Z"/>',
  translate: '<path fill-rule="evenodd" d="M8.516 3a.94.94 0 0 0-.941.94v1.15H2.94a.94.94 0 1 0 0 1.882h7.362a7.422 7.422 0 0 1-1.787 3.958 7.42 7.42 0 0 1-1.422-2.425.94.94 0 1 0-1.774.627 9.303 9.303 0 0 0 1.785 3.043 7.422 7.422 0 0 1-4.164 1.278.94.94 0 1 0 0 1.881 9.303 9.303 0 0 0 5.575-1.855 9.303 9.303 0 0 0 4.11 1.74l-.763 1.525a.968.968 0 0 0-.016.034l-1.385 2.77a.94.94 0 1 0 1.683.841l1.133-2.267h5.806l1.134 2.267a.94.94 0 0 0 1.683-.841l-1.385-2.769a.95.95 0 0 0-.018-.036l-3.476-6.951a.94.94 0 0 0-1.682 0l-1.82 3.639a7.423 7.423 0 0 1-3.593-1.256 9.303 9.303 0 0 0 2.27-5.203h1.894a.94.94 0 0 0 0-1.881H9.456V3.94A.94.94 0 0 0 8.516 3Zm6.426 11.794a1.068 1.068 0 0 1-.02.039l-.703 1.407h3.924l-1.962-3.924-1.24 2.478Z" clip-rule="evenodd"/>',
  pencil: '<path d="M22 7.24a1 1 0 0 0-.29-.71l-4.24-4.24a1 1 0 0 0-1.1-.22 1 1 0 0 0-.32.22l-2.83 2.83L2.29 16.05a1 1 0 0 0-.29.71V21a1 1 0 0 0 1 1h4.24a1 1 0 0 0 .76-.29l10.87-10.93L21.71 8c.1-.1.17-.2.22-.33a1 1 0 0 0 0-.24v-.14l.07-.05ZM6.83 20H4v-2.83l9.93-9.93 2.83 2.83L6.83 20ZM18.17 8.66l-2.83-2.83 1.42-1.41 2.82 2.82-1.41 1.42Z"/>',
  pen: '<path d="M21 12a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6a1 1 0 1 0 0-2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1Zm-15 .76V17a1 1 0 0 0 1 1h4.24a1 1 0 0 0 .71-.29l6.92-6.93L21.71 8a1 1 0 0 0 0-1.42l-4.24-4.29a1 1 0 0 0-1.42 0l-2.82 2.83-6.94 6.93a1 1 0 0 0-.29.71Zm10.76-8.35 2.83 2.83-1.42 1.42-2.83-2.83 1.42-1.42ZM8 13.17l5.93-5.93 2.83 2.83L10.83 16H8v-2.83Z"/>',
  document: '<path d="M9 10h1a1 1 0 1 0 0-2H9a1 1 0 0 0 0 2Zm0 2a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2H9Zm11-3.06a1.3 1.3 0 0 0-.06-.27v-.09c-.05-.1-.11-.2-.19-.28l-6-6a1.07 1.07 0 0 0-.28-.19h-.09a.88.88 0 0 0-.33-.11H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8.94Zm-6-3.53L16.59 8H15a1 1 0 0 1-1-1V5.41ZM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5v3a3 3 0 0 0 3 3h3v9Zm-3-3H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2Z"/>',
  "add-document": '<path d="M20 8.94a1.3 1.3 0 0 0-.06-.27v-.09c-.05-.1-.11-.2-.19-.28l-6-6a1.07 1.07 0 0 0-.28-.19h-.09a.88.88 0 0 0-.33-.11H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8.94Zm-6-3.53L16.59 8H15a1 1 0 0 1-1-1V5.41ZM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5v3a3 3 0 0 0 3 3h3v9Zm-4-5h-1v-1a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2Z"/>',
  setting: '<path d="m21.32 9.55-1.89-.63.89-1.78A1 1 0 0 0 20.13 6L18 3.87a1 1 0 0 0-1.15-.19l-1.78.89-.63-1.89A1 1 0 0 0 13.5 2h-3a1 1 0 0 0-.95.68l-.63 1.89-1.78-.89A1 1 0 0 0 6 3.87L3.87 6a1 1 0 0 0-.19 1.15l.89 1.78-1.89.63a1 1 0 0 0-.68.94v3a1 1 0 0 0 .68.95l1.89.63-.89 1.78A1 1 0 0 0 3.87 18L6 20.13a1 1 0 0 0 1.15.19l1.78-.89.63 1.89a1 1 0 0 0 .95.68h3a1 1 0 0 0 .95-.68l.63-1.89 1.78.89a1 1 0 0 0 1.13-.19L20.13 18a1 1 0 0 0 .19-1.15l-.89-1.78 1.89-.63a1 1 0 0 0 .68-.94v-3a1 1 0 0 0-.68-.95ZM20 12.78l-1.2.4A2 2 0 0 0 17.64 16l.57 1.14-1.1 1.1-1.11-.6a2 2 0 0 0-2.79 1.16l-.4 1.2h-1.59l-.4-1.2A2 2 0 0 0 8 17.64l-1.14.57-1.1-1.1.6-1.11a2 2 0 0 0-1.16-2.82l-1.2-.4v-1.56l1.2-.4A2 2 0 0 0 6.36 8l-.57-1.11 1.1-1.1L8 6.36a2 2 0 0 0 2.82-1.16l.4-1.2h1.56l.4 1.2A2 2 0 0 0 16 6.36l1.14-.57 1.1 1.1-.6 1.11a2 2 0 0 0 1.16 2.79l1.2.4v1.59ZM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"/>',
  external: '<path d="M19.33 10.18a1 1 0 0 1-.77 0 1 1 0 0 1-.62-.93l.01-1.83-8.2 8.2a1 1 0 0 1-1.41-1.42l8.2-8.2H14.7a1 1 0 0 1 0-2h4.25a1 1 0 0 1 1 1v4.25a1 1 0 0 1-.62.93Z"/><path d="M11 4a1 1 0 1 1 0 2H7a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-4a1 1 0 1 1 2 0v4a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h4Z"/>',
  moon: '<path d="M21.64 13a1 1 0 0 0-1.05-.14 8.049 8.049 0 0 1-3.37.73 8.15 8.15 0 0 1-8.14-8.1 8.59 8.59 0 0 1 .25-2A1 1 0 0 0 8 2.36a10.14 10.14 0 1 0 14 11.69 1 1 0 0 0-.36-1.05Zm-9.5 6.69A8.14 8.14 0 0 1 7.08 5.22v.27a10.15 10.15 0 0 0 10.14 10.14 9.784 9.784 0 0 0 2.1-.22 8.11 8.11 0 0 1-7.18 4.32v-.04Z"/>',
  sun: '<path d="M5 12a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1Zm.64 5-.71.71a1 1 0 0 0 0 1.41 1 1 0 0 0 1.41 0l.71-.71A1 1 0 0 0 5.64 17ZM12 5a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v1a1 1 0 0 0 1 1Zm5.66 2.34a1 1 0 0 0 .7-.29l.71-.71a1 1 0 1 0-1.41-1.41l-.66.71a1 1 0 0 0 0 1.41 1 1 0 0 0 .66.29Zm-12-.29a1 1 0 0 0 1.41 0 1 1 0 0 0 0-1.41l-.71-.71a1.004 1.004 0 1 0-1.43 1.41l.73.71ZM21 11h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Zm-2.64 6A1 1 0 0 0 17 18.36l.71.71a1 1 0 0 0 1.41 0 1 1 0 0 0 0-1.41l-.76-.66ZM12 6.5a5.5 5.5 0 1 0 5.5 5.5A5.51 5.51 0 0 0 12 6.5Zm0 9a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Zm0 3.5a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-1a1 1 0 0 0-1-1Z"/>',
  laptop: '<path d="M21 14h-1V7a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v7H3a1 1 0 0 0-1 1v2a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-2a1 1 0 0 0-1-1ZM6 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v7H6V7Zm14 10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1h16v1Z"/>',
  "open-book": '<path d="M21.17 2.06A13.1 13.1 0 0 0 19 1.87a12.94 12.94 0 0 0-7 2.05 12.94 12.94 0 0 0-7-2 13.1 13.1 0 0 0-2.17.19 1 1 0 0 0-.83 1v12a1 1 0 0 0 1.17 1 10.9 10.9 0 0 1 8.25 1.91l.12.07h.11a.91.91 0 0 0 .7 0h.11l.12-.07A10.899 10.899 0 0 1 20.83 16 1 1 0 0 0 22 15V3a1 1 0 0 0-.83-.94ZM11 15.35a12.87 12.87 0 0 0-6-1.48H4v-10c.333-.02.667-.02 1 0a10.86 10.86 0 0 1 6 1.8v9.68Zm9-1.44h-1a12.87 12.87 0 0 0-6 1.48V5.67a10.86 10.86 0 0 1 6-1.8c.333-.02.667-.02 1 0v10.04Zm1.17 4.15a13.098 13.098 0 0 0-2.17-.19 12.94 12.94 0 0 0-7 2.05 12.94 12.94 0 0 0-7-2.05c-.727.003-1.453.066-2.17.19A1 1 0 0 0 2 19.21a1 1 0 0 0 1.17.79 10.9 10.9 0 0 1 8.25 1.91 1 1 0 0 0 1.16 0A10.9 10.9 0 0 1 20.83 20a1 1 0 0 0 1.17-.79 1 1 0 0 0-.83-1.15Z"/>',
  information: '<path d="M12 11a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1Zm.38-3.92a1 1 0 0 0-.76 0 1 1 0 0 0-.33.21 1.15 1.15 0 0 0-.21.33 1 1 0 0 0 .21 1.09c.097.088.209.16.33.21A1 1 0 0 0 13 8a1.05 1.05 0 0 0-.29-.71 1 1 0 0 0-.33-.21ZM12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16.001A8 8 0 0 1 12 20Z"/>',
  magnifier: '<path d="M21.71 20.29 18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a.999.999 0 0 0 1.42 0 1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z"/>',
  "forward-slash": '<path d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5Zm3 15a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10Z"/><path d="M15.293 6.707a1 1 0 1 1 1.414 1.414l-8.485 8.486a1 1 0 0 1-1.414-1.415l8.485-8.485Z"/>',
  close: '<path d="m13.41 12 6.3-6.29a1.004 1.004 0 1 0-1.42-1.42L12 10.59l-6.29-6.3a1.004 1.004 0 0 0-1.42 1.42l6.3 6.29-6.3 6.29a1 1 0 0 0 0 1.42.998.998 0 0 0 1.42 0l6.29-6.3 6.29 6.3a.999.999 0 0 0 1.42 0 1 1 0 0 0 0-1.42L13.41 12Z"/>',
  error: '<path d="M12 7a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1Zm0 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm9.71-7.44-5.27-5.27a1.05 1.05 0 0 0-.71-.29H8.27a1.05 1.05 0 0 0-.71.29L2.29 7.56a1.05 1.05 0 0 0-.29.71v7.46c.004.265.107.518.29.71l5.27 5.27c.192.183.445.286.71.29h7.46a1.05 1.05 0 0 0 .71-.29l5.27-5.27a1.05 1.05 0 0 0 .29-.71V8.27a1.05 1.05 0 0 0-.29-.71ZM20 15.31 15.31 20H8.69L4 15.31V8.69L8.69 4h6.62L20 8.69v6.62Z"/>',
  warning: '<path d="M12 16a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm10.67 1.47-8.05-14a3 3 0 0 0-5.24 0l-8 14A3 3 0 0 0 3.94 22h16.12a3 3 0 0 0 2.61-4.53Zm-1.73 2a1 1 0 0 1-.88.51H3.94a1 1 0 0 1-.88-.51 1 1 0 0 1 0-1l8-14a1 1 0 0 1 1.78 0l8.05 14a1 1 0 0 1 .05 1.02v-.02ZM12 8a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1Z"/>',
  "approve-check-circle": '<path d="m14.72 8.79-4.29 4.3-1.65-1.65a1 1 0 1 0-1.41 1.41l2.35 2.36a1 1 0 0 0 1.41 0l5-5a1.002 1.002 0 1 0-1.41-1.42ZM12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16.001A8 8 0 0 1 12 20Z"/>',
  "approve-check": '<path d="M18.71 7.21a1 1 0 0 0-1.42 0l-7.45 7.46-3.13-3.14A1.02 1.02 0 1 0 5.29 13l3.84 3.84a1.001 1.001 0 0 0 1.42 0l8.16-8.16a1 1 0 0 0 0-1.47Z"/>',
  rocket: '<path fill-rule="evenodd" d="M1.44 8.855v-.001l3.527-3.516c.34-.344.802-.541 1.285-.548h6.649l.947-.947c3.07-3.07 6.207-3.072 7.62-2.868a1.821 1.821 0 0 1 1.557 1.557c.204 1.413.203 4.55-2.868 7.62l-.946.946v6.649a1.845 1.845 0 0 1-.549 1.286l-3.516 3.528a1.844 1.844 0 0 1-3.11-.944l-.858-4.275-4.52-4.52-2.31-.463-1.964-.394A1.847 1.847 0 0 1 .98 10.693a1.843 1.843 0 0 1 .46-1.838Zm5.379 2.017-3.873-.776L6.32 6.733h4.638l-4.14 4.14Zm8.403-5.655c2.459-2.46 4.856-2.463 5.89-2.33.134 1.035.13 3.432-2.329 5.891l-6.71 6.71-3.561-3.56 6.71-6.711Zm-1.318 15.837-.776-3.873 4.14-4.14v4.639l-3.364 3.374Z" clip-rule="evenodd"/><path d="M9.318 18.345a.972.972 0 0 0-1.86-.561c-.482 1.435-1.687 2.204-2.934 2.619a8.22 8.22 0 0 1-1.23.302c.062-.365.157-.79.303-1.229.415-1.247 1.184-2.452 2.62-2.935a.971.971 0 1 0-.62-1.842c-.12.04-.236.084-.35.13-2.02.828-3.012 2.588-3.493 4.033a10.383 10.383 0 0 0-.51 2.845l-.001.016v.063c0 .536.434.972.97.972H2.24a7.21 7.21 0 0 0 .878-.065c.527-.063 1.248-.19 2.02-.447 1.445-.48 3.205-1.472 4.033-3.494a5.828 5.828 0 0 0 .147-.407Z"/>',
  star: '<path d="M22 9.67a1 1 0 0 0-.86-.67l-5.69-.83L12.9 3a1 1 0 0 0-1.8 0L8.55 8.16 2.86 9a1 1 0 0 0-.81.68 1 1 0 0 0 .25 1l4.13 4-1 5.68a1 1 0 0 0 1.45 1.07L12 18.76l5.1 2.68c.14.08.3.12.46.12a1 1 0 0 0 .99-1.19l-1-5.68 4.13-4A1 1 0 0 0 22 9.67Zm-6.15 4a1 1 0 0 0-.29.89l.72 4.19-3.76-2a1 1 0 0 0-.94 0l-3.76 2 .72-4.19a1 1 0 0 0-.29-.89l-3-3 4.21-.61a1 1 0 0 0 .76-.55L12 5.7l1.88 3.82a1 1 0 0 0 .76.55l4.21.61-3 2.99Z"/>',
  puzzle: '<path d="M17 22H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h1a4 4 0 0 1 7.3-2.18c.448.64.692 1.4.7 2.18h3a1 1 0 0 1 1 1v3a4 4 0 0 1 2.18 7.3A3.86 3.86 0 0 1 18 18v3a1 1 0 0 1-1 1ZM5 8a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11v-3.18a1 1 0 0 1 1.33-.95 1.77 1.77 0 0 0 1.74-.23 2 2 0 0 0 .93-1.37 2 2 0 0 0-.48-1.59 1.89 1.89 0 0 0-2.17-.55 1 1 0 0 1-1.33-.95V8h-3.2a1 1 0 0 1-1-1.33 1.77 1.77 0 0 0-.23-1.74 1.939 1.939 0 0 0-3-.43A2 2 0 0 0 8 6c.002.23.046.456.13.67A1 1 0 0 1 7.18 8H5Z"/>',
  "list-format": '<path d="M3.71 16.29a1 1 0 0 0-.33-.21 1 1 0 0 0-.76 0 1 1 0 0 0-.33.21 1 1 0 0 0-.21.33 1 1 0 0 0 .21 1.09c.097.088.209.16.33.21a.94.94 0 0 0 .76 0 1.15 1.15 0 0 0 .33-.21 1 1 0 0 0 .21-1.09 1 1 0 0 0-.21-.33ZM7 8h14a1 1 0 1 0 0-2H7a1 1 0 0 0 0 2Zm-3.29 3.29a1 1 0 0 0-1.09-.21 1.15 1.15 0 0 0-.33.21 1 1 0 0 0-.21.33.94.94 0 0 0 0 .76c.05.121.122.233.21.33.097.088.209.16.33.21a.94.94 0 0 0 .76 0 1.15 1.15 0 0 0 .33-.21 1.15 1.15 0 0 0 .21-.33.94.94 0 0 0 0-.76 1 1 0 0 0-.21-.33ZM21 11H7a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2ZM3.71 6.29a1 1 0 0 0-.33-.21 1 1 0 0 0-1.09.21 1.15 1.15 0 0 0-.21.33.94.94 0 0 0 0 .76c.05.121.122.233.21.33.097.088.209.16.33.21a1 1 0 0 0 1.09-.21 1.15 1.15 0 0 0 .21-.33.94.94 0 0 0 0-.76 1.15 1.15 0 0 0-.21-.33ZM21 16H7a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2Z"/>',
  random: '<path d="M8.7 10a1 1 0 0 0 1.41 0 1 1 0 0 0 0-1.41l-6.27-6.3a1 1 0 0 0-1.42 1.42ZM21 14a1 1 0 0 0-1 1v3.59L15.44 14A1 1 0 0 0 14 15.44L18.59 20H15a1 1 0 0 0 0 2h6a1 1 0 0 0 .38-.08 1 1 0 0 0 .54-.54A1 1 0 0 0 22 21v-6a1 1 0 0 0-1-1Zm.92-11.38a1 1 0 0 0-.54-.54A1 1 0 0 0 21 2h-6a1 1 0 0 0 0 2h3.59L2.29 20.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L20 5.41V9a1 1 0 0 0 2 0V3a1 1 0 0 0-.08-.38Z"/>',
  github: '<path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57L9 21.07c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.09-.73.09-.73 1.2.09 1.83 1.24 1.83 1.24 1.08 1.83 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22l-.01 3.29c0 .31.2.69.82.57A12 12 0 0 0 12 .3Z"/>',
  gitlab: '<path d="m22.63 9.8-.03-.09-3-7.81a.78.78 0 0 0-.76-.5.8.8 0 0 0-.46.18.8.8 0 0 0-.26.4L16.1 8.17H7.9l-2-6.19a.79.79 0 0 0-1.5-.08l-3 7.81-.02.08a5.56 5.56 0 0 0 1.84 6.43h.01l.03.02 4.56 3.42 2.26 1.7 1.37 1.05a.92.92 0 0 0 1.12 0l1.38-1.04 2.25-1.71 4.6-3.44a5.56 5.56 0 0 0 1.84-6.43Z"/>',
  bitbucket: '<path d="M1 1.5a.8.8 0 0 0-.7.9l3.2 19.3c0 .5.5.8 1 .8h15.2c.4 0 .7-.2.8-.6l3.2-19.5a.7.7 0 0 0-.8-.9H1zm13.4 14H9.6l-1.3-7h7.3l-1.2 7z"/>',
  codePen: '<path d="M23.5 7.5 12.5.2a1 1 0 0 0-1 0L.4 7.5a1 1 0 0 0-.5.8v7.4c0 .3.2.6.5.8l11 7.3c.3.3.7.3 1 0l11-7.3c.3-.2.5-.5.5-.8V8.3a1 1 0 0 0-.5-.8zM13 3l8.1 5.3-3.6 2.5-4.5-3V3zm-2 0v4.8l-4.5 3-3.6-2.5 8-5.3zm-9 7.3L4.7 12l-2.5 1.7v-3.4zM11 21l-8.1-5.3 3.6-2.5 4.5 3V21zm1-6.6L8.4 12 12 9.6l3.6 2.4-3.6 2.4zm1 6.6v-4.8l4.5-3 3.6 2.5-8 5.3zm9-7.3L19.3 12l2.5-1.7v3.4z"/>',
  discord: '<path d="M20.32 4.37a19.8 19.8 0 0 0-4.93-1.51 13.78 13.78 0 0 0-.64 1.28 18.27 18.27 0 0 0-5.5 0 12.64 12.64 0 0 0-.64-1.28h-.05A19.74 19.74 0 0 0 3.64 4.4 20.26 20.26 0 0 0 .11 18.09l.02.02a19.9 19.9 0 0 0 6.04 3.03l.04-.02a14.24 14.24 0 0 0 1.23-2.03.08.08 0 0 0-.05-.07 13.1 13.1 0 0 1-1.9-.92.08.08 0 0 1 .02-.1 10.2 10.2 0 0 0 .41-.31h.04a14.2 14.2 0 0 0 12.1 0l.04.01a9.63 9.63 0 0 0 .4.32.08.08 0 0 1-.03.1 12.29 12.29 0 0 1-1.9.91.08.08 0 0 0-.02.1 15.97 15.97 0 0 0 1.27 2.01h.04a19.84 19.84 0 0 0 6.03-3.05v-.03a20.12 20.12 0 0 0-3.57-13.69ZM8.02 15.33c-1.18 0-2.16-1.08-2.16-2.42 0-1.33.96-2.42 2.16-2.42 1.21 0 2.18 1.1 2.16 2.42 0 1.34-.96 2.42-2.16 2.42Zm7.97 0c-1.18 0-2.15-1.08-2.15-2.42 0-1.33.95-2.42 2.15-2.42 1.22 0 2.18 1.1 2.16 2.42 0 1.34-.94 2.42-2.16 2.42Z"/>',
  gitter: '<path d="M6.11 15.12H3.75V0h2.36v15.12zm4.71-11.55H8.46V24h2.36V3.57zm4.72 0h-2.36V24h2.36V3.57zm4.71 0h-2.36v11.57h2.36V3.56z"/>',
  twitter: '<path d="M24 4.4a10 10 0 0 1-2.83.78 5.05 5.05 0 0 0 2.17-2.79 9.7 9.7 0 0 1-3.13 1.23 4.89 4.89 0 0 0-5.94-1.03 5 5 0 0 0-2.17 2.38 5.15 5.15 0 0 0-.3 3.25c-1.95-.1-3.86-.63-5.61-1.53a14.04 14.04 0 0 1-4.52-3.74 5.2 5.2 0 0 0-.09 4.91c.39.74.94 1.35 1.61 1.82a4.77 4.77 0 0 1-2.23-.63v.06c0 1.16.4 2.29 1.12 3.18a4.9 4.9 0 0 0 2.84 1.74c-.73.22-1.5.26-2.24.12a4.89 4.89 0 0 0 4.59 3.49A9.78 9.78 0 0 1 0 19.73 13.65 13.65 0 0 0 7.55 22a13.63 13.63 0 0 0 9.96-4.16A14.26 14.26 0 0 0 21.6 7.65V7c.94-.72 1.75-1.6 2.4-2.6Z"/>',
  "x.com": '<path d="M 18.242188 2.25 L 21.554688 2.25 L 14.324219 10.507812 L 22.828125 21.75 L 16.171875 21.75 L 10.953125 14.933594 L 4.992188 21.75 L 1.679688 21.75 L 9.40625 12.914062 L 1.257812 2.25 L 8.082031 2.25 L 12.792969 8.480469 Z M 17.082031 19.773438 L 18.914062 19.773438 L 7.082031 4.125 L 5.113281 4.125 Z M 17.082031 19.773438 "/>',
  mastodon: '<path d="M16.45 17.77c2.77-.33 5.18-2.03 5.49-3.58.47-2.45.44-5.97.44-5.97 0-4.77-3.15-6.17-3.15-6.17-1.58-.72-4.3-1.03-7.13-1.05h-.07c-2.83.02-5.55.33-7.13 1.05 0 0-3.14 1.4-3.14 6.17v.91c-.01.88-.02 1.86 0 2.88.12 4.67.87 9.27 5.2 10.4 2 .53 3.72.64 5.1.57 2.51-.14 3.92-.9 3.92-.9l-.08-1.8s-1.8.56-3.8.5c-2-.08-4.1-.22-4.43-2.66a4.97 4.97 0 0 1-.04-.68s1.96.48 4.44.59c1.51.07 2.94-.09 4.38-.26Zm2.22-3.4h-2.3v-5.6c0-1.19-.5-1.79-1.5-1.79-1.1 0-1.66.71-1.66 2.12v3.07h-2.3V9.1c0-1.4-.55-2.12-1.65-2.12-1 0-1.5.6-1.5 1.78v5.61h-2.3V8.6c0-1.18.3-2.12.9-2.81a3.17 3.17 0 0 1 2.47-1.05c1.18 0 2.07.45 2.66 1.35l.57.96.58-.96a2.97 2.97 0 0 1 2.66-1.35c1.01 0 1.83.36 2.46 1.05.6.7.9 1.63.9 2.81v5.78Z"/>',
  codeberg: '<path d="M12 .5a12 12 0 0 0-12 12 12 12 0 0 0 1.8 6.4l10-13a.2.1 0 0 1 .4 0l10 13a12 12 0 0 0 1.8-6.4 12 12 0 0 0-12-12zm.3 6.5 4.4 16.5a12 12 0 0 0 5.2-4.2z"/>',
  youtube: '<path d="M23.5 6.2A3 3 0 0 0 21.4 4c-1.9-.5-9.4-.5-9.4-.5s-7.5 0-9.4.5A3 3 0 0 0 .5 6.3C0 8 0 12 0 12s0 4 .5 5.8A3 3 0 0 0 2.6 20c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2c.5-2 .5-5.9.5-5.9s0-4-.5-5.8zm-14 9.4V8.4l6.3 3.6-6.3 3.6z"/>',
  threads: '<path d="m17.73 11.2-.29-.13c-.17-3.13-1.88-4.92-4.75-4.94h-.04c-1.72 0-3.14.73-4.02 2.06l1.58 1.09a2.8 2.8 0 0 1 2.47-1.21c.94 0 1.66.28 2.12.81.33.4.56.93.67 1.61-.84-.14-1.74-.18-2.71-.13-2.73.16-4.49 1.75-4.37 3.97a3.41 3.41 0 0 0 1.57 2.71c.81.54 1.85.8 2.93.74a4.32 4.32 0 0 0 3.33-1.62 6 6 0 0 0 1.14-2.97 3.5 3.5 0 0 1 1.46 1.6 4 4 0 0 1-.98 4.4c-1.3 1.3-2.86 1.85-5.21 1.87-2.62-.02-4.6-.86-5.88-2.5-1.2-1.52-1.82-3.73-1.85-6.56.03-2.83.65-5.04 1.85-6.57 1.29-1.63 3.26-2.47 5.88-2.49 2.63.02 4.64.86 5.97 2.5.66.8 1.15 1.82 1.48 3l1.85-.5c-.4-1.44-1.02-2.7-1.86-3.73-1.71-2.1-4.21-3.19-7.44-3.21h-.01c-3.22.02-5.7 1.1-7.35 3.22C3.79 6.1 3.03 8.72 3 11.99V12c.03 3.29.79 5.9 2.27 7.78 1.66 2.12 4.13 3.2 7.35 3.22h.01c2.86-.02 4.88-.77 6.54-2.43a5.95 5.95 0 0 0 1.4-6.56 5.62 5.62 0 0 0-2.84-2.81Zm-4.94 4.64c-1.2.07-2.44-.47-2.5-1.62-.05-.85.6-1.8 2.57-1.92l.67-.02c.71 0 1.38.07 1.99.2-.23 2.84-1.56 3.3-2.73 3.36Z"/>',
  linkedin: '<path d="M20.47 2H3.53a1.45 1.45 0 0 0-1.47 1.43v17.14A1.45 1.45 0 0 0 3.53 22h16.94a1.45 1.45 0 0 0 1.47-1.43V3.43A1.45 1.45 0 0 0 20.47 2ZM8.09 18.74h-3v-9h3v9ZM6.59 8.48a1.56 1.56 0 0 1 0-3.12 1.57 1.57 0 1 1 0 3.12Zm12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2A1.65 1.65 0 0 0 12.85 13a2 2 0 0 0-.1.73v5h-3v-9h3V11a3 3 0 0 1 2.71-1.5c2 0 3.45 1.29 3.45 4.06v5.18Z"/>',
  twitch: '<path d="M2.5 1 1 4.8v15.4h5.5V23h3.1l3-2.8H17l6-5.7V1H2.6ZM21 13.5l-3.4 3.3H12l-3 2.8v-2.8H4.5V3H21v10.5Zm-3.4-6.8v5.8h-2V6.7h2Zm-5.5 0v5.8h-2V6.7h2Z"/>',
  microsoftTeams: '<path d="M13.78 7.2a3.63 3.63 0 1 0-4.3-3.68h1.78a2.52 2.52 0 0 1 2.52 2.53V7.2zM7.34 18.8h3.92a2.52 2.52 0 0 0 2.52-2.52V8.37h4.17c.58.01 1.04.5 1.03 1.07v6.45a6.3 6.3 0 0 1-6.14 6.43 6.3 6.3 0 0 1-5.5-3.52zm16.1-14.06a2.51 2.51 0 1 1-5.02 0 2.51 2.51 0 0 1 5.02 0zm-3.36 14.24h-.17c.4-1 .59-2.05.57-3.11V9.46c0-.38-.07-.75-.23-1.09h2.69c.58 0 1.06.48 1.06 1.06v5.65a3.9 3.9 0 0 1-3.9 3.9h-.02z"/><path d="M1.02 5.02h10.24c.56 0 1.02.46 1.02 1.03v10.23a1.02 1.02 0 0 1-1.02 1.02H1.02A1.02 1.02 0 0 1 0 16.28V6.04c0-.56.46-1.02 1.02-1.02zm7.81 3.9V7.84H3.45v1.08h2.03v5.57h1.3V8.92h2.05z"/>',
  instagram: '<path d="M17.3 5.5a1.2 1.2 0 1 0 1.2 1.2 1.2 1.2 0 0 0-1.2-1.2ZM22 7.9a7.6 7.6 0 0 0-.4-2.5 5 5 0 0 0-1.2-1.7 4.7 4.7 0 0 0-1.8-1.2 7.3 7.3 0 0 0-2.4-.4L12 2H7.9a7.3 7.3 0 0 0-2.5.5 4.8 4.8 0 0 0-1.7 1.2 4.7 4.7 0 0 0-1.2 1.8 7.3 7.3 0 0 0-.4 2.4L2 12v4.1a7.3 7.3 0 0 0 .5 2.4 4.7 4.7 0 0 0 1.2 1.8 4.8 4.8 0 0 0 1.8 1.2 7.3 7.3 0 0 0 2.4.4l4.1.1h4.1a7.3 7.3 0 0 0 2.4-.5 4.7 4.7 0 0 0 1.8-1.2 4.8 4.8 0 0 0 1.2-1.7 7.6 7.6 0 0 0 .4-2.5L22 12V7.9ZM20.1 16a5.6 5.6 0 0 1-.3 1.9A3 3 0 0 1 19 19a3.2 3.2 0 0 1-1.1.8 5.6 5.6 0 0 1-1.9.3H8a5.7 5.7 0 0 1-1.9-.3A3.3 3.3 0 0 1 5 19a3 3 0 0 1-.7-1.1 5.5 5.5 0 0 1-.4-1.9l-.1-4V8a5.5 5.5 0 0 1 .4-1.9A3 3 0 0 1 5 5a3.1 3.1 0 0 1 1.1-.8A5.7 5.7 0 0 1 8 3.9l4-.1h4a5.6 5.6 0 0 1 1.9.4A3 3 0 0 1 19 5a3 3 0 0 1 .7 1.1A5.6 5.6 0 0 1 20 8l.1 4v4ZM12 6.9a5.1 5.1 0 1 0 5.1 5.1A5.1 5.1 0 0 0 12 6.9Zm0 8.4a3.3 3.3 0 1 1 3.3-3.3 3.3 3.3 0 0 1-3.3 3.3Z"/>',
  stackOverflow: '<path d="M15.72 0 14 1.28l6.4 8.58 1.7-1.26L15.73 0zm-3.94 3.42-1.36 1.64 8.22 6.85 1.37-1.64-8.23-6.85zM8.64 7.88l-.91 1.94 9.7 4.52.9-1.94-9.7-4.52zm-1.86 4.86-.44 2.1 10.48 2.2.44-2.1-10.47-2.2zM1.9 15.47V24h19.19v-8.53h-2.13v6.4H4.02v-6.4H1.9zm4.26 2.13v2.13h10.66V17.6H6.15Z"/>',
  telegram: '<path d="M22.265 2.428a2.048 2.048 0 0 0-2.078-.324L2.266 9.339a2.043 2.043 0 0 0 .104 3.818l3.625 1.261 2.02 6.682a.998.998 0 0 0 .119.252c.008.012.019.02.027.033a.988.988 0 0 0 .211.215.972.972 0 0 0 .07.05.986.986 0 0 0 .31.136l.013.001.006.003a1.022 1.022 0 0 0 .203.02l.018-.003a.993.993 0 0 0 .301-.052c.023-.008.042-.02.064-.03a.993.993 0 0 0 .205-.114 250.76 250.76 0 0 1 .152-.129l2.702-2.983 4.03 3.122a2.023 2.023 0 0 0 1.241.427 2.054 2.054 0 0 0 2.008-1.633l3.263-16.017a2.03 2.03 0 0 0-.693-1.97ZM9.37 14.736a.994.994 0 0 0-.272.506l-.31 1.504-.784-2.593 4.065-2.117Zm8.302 5.304-4.763-3.69a1.001 1.001 0 0 0-1.353.12l-.866.955.306-1.487 7.083-7.083a1 1 0 0 0-1.169-1.593L6.745 12.554 3.02 11.191 20.999 4Z"/>',
  rss: '<path d="M2.88 16.88a3 3 0 0 0 0 4.24 3 3 0 0 0 4.24 0 3 3 0 0 0-4.24-4.24Zm2.83 2.83a1 1 0 0 1-1.42-1.42 1 1 0 0 1 1.42 0 1 1 0 0 1 0 1.42ZM5 12a1 1 0 0 0 0 2 5 5 0 0 1 5 5 1 1 0 0 0 2 0 7 7 0 0 0-7-7Zm0-4a1 1 0 0 0 0 2 9 9 0 0 1 9 9 1 1 0 0 0 2 0 11.08 11.08 0 0 0-3.22-7.78A11.08 11.08 0 0 0 5 8Zm10.61.39A15.11 15.11 0 0 0 5 4a1 1 0 0 0 0 2 13 13 0 0 1 13 13 1 1 0 0 0 2 0 15.11 15.11 0 0 0-4.39-10.61Z"/>',
  facebook: '<path d="M20.9 2H3.1A1.1 1.1 0 0 0 2 3.1v17.8A1.1 1.1 0 0 0 3.1 22h9.58v-7.75h-2.6v-3h2.6V9a3.64 3.64 0 0 1 3.88-4 20.26 20.26 0 0 1 2.33.12v2.7H17.3c-1.26 0-1.5.6-1.5 1.47v1.93h3l-.39 3H15.8V22h5.1a1.1 1.1 0 0 0 1.1-1.1V3.1A1.1 1.1 0 0 0 20.9 2Z"/>',
  email: '<path d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-.41 2-5.88 5.88a1 1 0 0 1-1.42 0L5.41 6ZM20 17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7.41l5.88 5.88a3 3 0 0 0 4.24 0L20 7.41Z"/>',
  reddit: '<path d="M14.41 16.87a3.38 3.38 0 0 1-2.37.63 3.37 3.37 0 0 1-2.36-.63 1 1 0 0 0-1.42 1.41 5.11 5.11 0 0 0 3.78 1.22 5.12 5.12 0 0 0 3.78-1.22 1 1 0 1 0-1.41-1.41ZM9.2 15a1 1 0 1 0-1-1 1 1 0 0 0 1 1Zm6-2a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm7.8-1.22a3.77 3.77 0 0 0-6.8-2.26 16.5 16.5 0 0 0-3.04-.48l.85-5.7 2.09.7a3 3 0 0 0 6-.06v-.02a3.03 3.03 0 0 0-3-2.96 2.98 2.98 0 0 0-2.34 1.16l-3.24-1.1a1 1 0 0 0-1.3.8l-1.09 7.17a16.66 16.66 0 0 0-3.34.49 3.77 3.77 0 0 0-6.22 4.23A4.86 4.86 0 0 0 1 16c0 3.92 4.83 7 11 7s11-3.08 11-7a4.86 4.86 0 0 0-.57-2.25 3.78 3.78 0 0 0 .57-1.97ZM19.1 3a1 1 0 1 1-1 1 1.02 1.02 0 0 1 1-1ZM4.77 10a1.76 1.76 0 0 1 .88.25A9.98 9.98 0 0 0 3 11.92v-.14A1.78 1.78 0 0 1 4.78 10ZM12 21c-4.88 0-9-2.29-9-5s4.12-5 9-5 9 2.29 9 5-4.12 5-9 5Zm8.99-9.08a9.98 9.98 0 0 0-2.65-1.67 1.76 1.76 0 0 1 .88-.25A1.78 1.78 0 0 1 21 11.78l-.01.14Z"/>',
  patreon: '<path d="M22.04 7.6c0-2.8-2.19-5.1-4.75-5.93a15.19 15.19 0 0 0-10.44.55C3.16 3.96 2 7.78 1.95 11.58c-.02 3.12.3 11.36 4.94 11.42 3.45.04 3.97-4.4 5.56-6.55 1.14-1.52 2.6-1.95 4.4-2.4 3.1-.76 5.2-3.2 5.2-6.44Z"/>'
};

const $$Astro$z = createAstro("https://allrdy.io");
const $$Icon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$z, $$props, $$slots);
  Astro2.self = $$Icon;
  const { name, label, size = "1em", color } = Astro2.props;
  const a11yAttrs = label ? { "aria-label": label } : { "aria-hidden": "true" };
  const $$definedVars = defineStyleVars([{ "sl-icon-color": color, "sl-icon-size": size }]);
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(a11yAttrs)}${addAttribute(Astro2.props.class + " astro-hz6fbi2s", "class")} width="16" height="16" viewBox="0 0 24 24" fill="currentColor"${addAttribute($$definedVars, "style")}>${unescapeHTML(Icons[name])}</svg>`;
}, "/Users/dubhe/d/site/node_modules/.pnpm/@astrojs+starlight@0.12.0_astro@3.5.1/node_modules/@astrojs/starlight/user-components/Icon.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$y = createAstro("https://allrdy.io");
const $$ThemeProvider = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$y, $$props, $$slots);
  Astro2.self = $$ThemeProvider;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["<script>\n	window.StarlightThemeProvider = (() => {\n		const storedTheme =\n			typeof localStorage !== 'undefined' && localStorage.getItem('starlight-theme');\n		const theme =\n			storedTheme ||\n			(window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');\n		document.documentElement.dataset.theme = theme === 'light' ? 'light' : 'dark';\n		return {\n			updatePickers(theme = storedTheme || 'auto') {\n				document.querySelectorAll('starlight-theme-select').forEach((picker) => {\n					const select = picker.querySelector('select');\n					if (select) select.value = theme;\n					/** @type {HTMLTemplateElement | null} */\n					const tmpl = document.querySelector(`#theme-icons`);\n					const newIcon = tmpl && tmpl.content.querySelector('.' + theme);\n					if (newIcon) {\n						const oldIcon = picker.querySelector('svg.label-icon');\n						if (oldIcon) {\n							oldIcon.replaceChildren(...newIcon.cloneNode(true).childNodes);\n						}\n					}\n				});\n			},\n		};\n	})();\n<\/script><template id=\"theme-icons\">", "", "", "</template>"], ["<script>\n	window.StarlightThemeProvider = (() => {\n		const storedTheme =\n			typeof localStorage !== 'undefined' && localStorage.getItem('starlight-theme');\n		const theme =\n			storedTheme ||\n			(window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');\n		document.documentElement.dataset.theme = theme === 'light' ? 'light' : 'dark';\n		return {\n			updatePickers(theme = storedTheme || 'auto') {\n				document.querySelectorAll('starlight-theme-select').forEach((picker) => {\n					const select = picker.querySelector('select');\n					if (select) select.value = theme;\n					/** @type {HTMLTemplateElement | null} */\n					const tmpl = document.querySelector(\\`#theme-icons\\`);\n					const newIcon = tmpl && tmpl.content.querySelector('.' + theme);\n					if (newIcon) {\n						const oldIcon = picker.querySelector('svg.label-icon');\n						if (oldIcon) {\n							oldIcon.replaceChildren(...newIcon.cloneNode(true).childNodes);\n						}\n					}\n				});\n			},\n		};\n	})();\n<\/script><template id=\"theme-icons\">", "", "", "</template>"])), renderComponent($$result, "Icon", $$Icon, { "name": "sun", "class": "light" }), renderComponent($$result, "Icon", $$Icon, { "name": "moon", "class": "dark" }), renderComponent($$result, "Icon", $$Icon, { "name": "laptop", "class": "auto" }));
}, "/Users/dubhe/d/site/node_modules/.pnpm/@astrojs+starlight@0.12.0_astro@3.5.1/node_modules/@astrojs/starlight/components/ThemeProvider.astro", void 0);

const PAGE_TITLE_ID = "_top";

function builtinI18nSchema() {
  return starlightI18nSchema().required().strict().merge(pagefindI18nSchema());
}
function starlightI18nSchema() {
  return objectType({
    "skipLink.label": stringType().describe(
      "Text displayed in the accessible “Skip link” when a keyboard user first tabs into a page."
    ),
    "search.label": stringType().describe("Text displayed in the search bar."),
    "search.shortcutLabel": stringType().describe("Accessible label for the shortcut key to open the search modal."),
    "search.cancelLabel": stringType().describe("Text for the “Cancel” button that closes the search modal."),
    "search.devWarning": stringType().describe("Warning displayed when opening the Search in a dev environment."),
    "themeSelect.accessibleLabel": stringType().describe("Accessible label for the theme selection dropdown."),
    "themeSelect.dark": stringType().describe("Name of the dark color theme."),
    "themeSelect.light": stringType().describe("Name of the light color theme."),
    "themeSelect.auto": stringType().describe("Name of the automatic color theme that syncs with system preferences."),
    "languageSelect.accessibleLabel": stringType().describe("Accessible label for the language selection dropdown."),
    "menuButton.accessibleLabel": stringType().describe("Accessible label for he mobile menu button."),
    "sidebarNav.accessibleLabel": stringType().describe(
      "Accessible label for the main sidebar `<nav>` element to distinguish it fom other `<nav>` landmarks on the page."
    ),
    "tableOfContents.onThisPage": stringType().describe("Title for the table of contents component."),
    "tableOfContents.overview": stringType().describe(
      "Label used for the first link in the table of contents, linking to the page title."
    ),
    "i18n.untranslatedContent": stringType().describe(
      "Notice informing users they are on a page that is not yet translated to their language."
    ),
    "page.editLink": stringType().describe("Text for the link to edit a page."),
    "page.lastUpdated": stringType().describe("Text displayed in front of the last updated date in the page footer."),
    "page.previousLink": stringType().describe("Label shown on the “previous page” pagination arrow in the page footer."),
    "page.nextLink": stringType().describe("Label shown on the “next page” pagination arrow in the page footer."),
    "404.text": stringType().describe("Text shown on Starlight’s default 404 page")
  }).partial();
}
function pagefindI18nSchema() {
  return objectType({
    "pagefind.clear_search": stringType().describe(
      'Pagefind UI translation. English default value: `"Clear"`. See https://pagefind.app/docs/ui/#translations'
    ),
    "pagefind.load_more": stringType().describe(
      'Pagefind UI translation. English default value: `"Load more results"`. See https://pagefind.app/docs/ui/#translations'
    ),
    "pagefind.search_label": stringType().describe(
      'Pagefind UI translation. English default value: `"Search this site"`. See https://pagefind.app/docs/ui/#translations'
    ),
    "pagefind.filters_label": stringType().describe(
      'Pagefind UI translation. English default value: `"Filters"`. See https://pagefind.app/docs/ui/#translations'
    ),
    "pagefind.zero_results": stringType().describe(
      'Pagefind UI translation. English default value: `"No results for [SEARCH_TERM]"`. See https://pagefind.app/docs/ui/#translations'
    ),
    "pagefind.many_results": stringType().describe(
      'Pagefind UI translation. English default value: `"[COUNT] results for [SEARCH_TERM]"`. See https://pagefind.app/docs/ui/#translations'
    ),
    "pagefind.one_result": stringType().describe(
      'Pagefind UI translation. English default value: `"[COUNT] result for [SEARCH_TERM]"`. See https://pagefind.app/docs/ui/#translations'
    ),
    "pagefind.alt_search": stringType().describe(
      'Pagefind UI translation. English default value: `"No results for [SEARCH_TERM]. Showing results for [DIFFERENT_TERM] instead"`. See https://pagefind.app/docs/ui/#translations'
    ),
    "pagefind.search_suggestion": stringType().describe(
      'Pagefind UI translation. English default value: `"No results for [SEARCH_TERM]. Try one of the following searches:"`. See https://pagefind.app/docs/ui/#translations'
    ),
    "pagefind.searching": stringType().describe(
      'Pagefind UI translation. English default value: `"Searching for [SEARCH_TERM]..."`. See https://pagefind.app/docs/ui/#translations'
    )
  }).partial();
}

const cs = {
	"skipLink.label": "Přeskočit na obsah",
	"search.label": "Hledat",
	"search.shortcutLabel": "(Vyhledejte stisknutím /)",
	"search.cancelLabel": "Zrušit",
	"search.devWarning": "Vyhledávání je dostupné pouze v produkčních sestaveních. \nZkuste sestavit a zobrazit náhled webu a otestovat jej lokálně.",
	"themeSelect.accessibleLabel": "Vyberte motiv",
	"themeSelect.dark": "Tmavý",
	"themeSelect.light": "Světlý",
	"themeSelect.auto": "Auto",
	"languageSelect.accessibleLabel": "Vyberte jazyk",
	"menuButton.accessibleLabel": "Nabídka",
	"sidebarNav.accessibleLabel": "Hlavní",
	"tableOfContents.onThisPage": "Na této stránce",
	"tableOfContents.overview": "Přehled",
	"i18n.untranslatedContent": "Tento obsah zatím není dostupný ve vašem jazyce.",
	"page.editLink": "Upravit stránku",
	"page.lastUpdated": "Poslední aktualizace:",
	"page.previousLink": "Předchozí",
	"page.nextLink": "Další",
	"404.text": "Stránka nenalezena. Zkontrolujte adresu URL nebo zkuste použít vyhledávací pole."
};

const en = {
	"skipLink.label": "Skip to content",
	"search.label": "Search",
	"search.shortcutLabel": "(Press / to Search)",
	"search.cancelLabel": "Cancel",
	"search.devWarning": "Search is only available in production builds. \nTry building and previewing the site to test it out locally.",
	"themeSelect.accessibleLabel": "Select theme",
	"themeSelect.dark": "Dark",
	"themeSelect.light": "Light",
	"themeSelect.auto": "Auto",
	"languageSelect.accessibleLabel": "Select language",
	"menuButton.accessibleLabel": "Menu",
	"sidebarNav.accessibleLabel": "Main",
	"tableOfContents.onThisPage": "On this page",
	"tableOfContents.overview": "Overview",
	"i18n.untranslatedContent": "This content is not available in your language yet.",
	"page.editLink": "Edit page",
	"page.lastUpdated": "Last updated:",
	"page.previousLink": "Previous",
	"page.nextLink": "Next",
	"404.text": "Page not found. Check the URL or try using the search bar."
};

const es = {
	"skipLink.label": "Saltearse al contenido",
	"search.label": "Buscar",
	"search.shortcutLabel": "(Presiona / para buscar)",
	"search.cancelLabel": "Interrumpir",
	"search.devWarning": "La búsqueda solo está disponible en las versiones de producción.  \nIntenta construir y previsualizar el sitio para probarlo localmente.",
	"themeSelect.accessibleLabel": "Seleccionar tema",
	"themeSelect.dark": "Oscuro",
	"themeSelect.light": "Claro",
	"themeSelect.auto": "Automático",
	"languageSelect.accessibleLabel": "Seleccionar idioma",
	"menuButton.accessibleLabel": "Menú",
	"sidebarNav.accessibleLabel": "Primario",
	"tableOfContents.onThisPage": "En esta página",
	"tableOfContents.overview": "Sinopsis",
	"i18n.untranslatedContent": "Esta página aún no está disponible en tu idioma.",
	"page.editLink": "Edita esta página",
	"page.lastUpdated": "Última actualización:",
	"page.previousLink": "Página anterior",
	"page.nextLink": "Siguiente página",
	"404.text": "Página no encontrada. Verifica la URL o intenta usar la barra de búsqueda."
};

const de = {
	"skipLink.label": "Zum Inhalt springen",
	"search.label": "Suchen",
	"search.shortcutLabel": "(Drücke / zum Suchen)",
	"search.cancelLabel": "Abbrechen",
	"search.devWarning": "Search is only available in production builds. \nTry building and previewing the site to test it out locally.",
	"themeSelect.accessibleLabel": "Farbschema wählen",
	"themeSelect.dark": "Dunkel",
	"themeSelect.light": "Hell",
	"themeSelect.auto": "System",
	"languageSelect.accessibleLabel": "Sprache wählen",
	"menuButton.accessibleLabel": "Menü",
	"sidebarNav.accessibleLabel": "Hauptnavigation",
	"tableOfContents.onThisPage": "Auf dieser Seite",
	"tableOfContents.overview": "Überblick",
	"i18n.untranslatedContent": "Dieser Inhalt ist noch nicht in deiner Sprache verfügbar.",
	"page.editLink": "Seite bearbeiten",
	"page.lastUpdated": "Zuletzt bearbeitet:",
	"page.previousLink": "Vorherige Seite",
	"page.nextLink": "Nächste Seite",
	"404.text": "Seite nicht gefunden. Überprüfe die URL oder nutze die Suchleiste."
};

const ja = {
	"skipLink.label": "コンテンツにスキップ",
	"search.label": "検索",
	"search.shortcutLabel": "（/を押して検索）",
	"search.cancelLabel": "キャンセル",
	"search.devWarning": "検索はプロダクションビルドでのみ利用可能です。\nローカルでテストするには、サイトをビルドしてプレビューしてください。",
	"themeSelect.accessibleLabel": "テーマの選択",
	"themeSelect.dark": "ダーク",
	"themeSelect.light": "ライト",
	"themeSelect.auto": "自動",
	"languageSelect.accessibleLabel": "言語の選択",
	"menuButton.accessibleLabel": "メニュー",
	"sidebarNav.accessibleLabel": "メイン",
	"tableOfContents.onThisPage": "目次",
	"tableOfContents.overview": "概要",
	"i18n.untranslatedContent": "このコンテンツはまだ日本語訳がありません。",
	"page.editLink": "ページを編集",
	"page.lastUpdated": "最終更新日:",
	"page.previousLink": "前へ",
	"page.nextLink": "次へ",
	"404.text": "ページが見つかりません。 URL を確認するか、検索バーを使用してみてください。"
};

const pt = {
	"skipLink.label": "Pular para o conteúdo",
	"search.label": "Pesquisar",
	"search.shortcutLabel": "(Pressione / para Pesquisar)",
	"search.cancelLabel": "Cancelar",
	"search.devWarning": "A pesquisa está disponível apenas em builds em produção. \nTente fazer a build e pré-visualize o site para testar localmente.",
	"themeSelect.accessibleLabel": "Selecionar tema",
	"themeSelect.dark": "Escuro",
	"themeSelect.light": "Claro",
	"themeSelect.auto": "Auto",
	"languageSelect.accessibleLabel": "Selecionar língua",
	"menuButton.accessibleLabel": "Menu",
	"sidebarNav.accessibleLabel": "Principal",
	"tableOfContents.onThisPage": "Nesta página",
	"tableOfContents.overview": "Visão geral",
	"i18n.untranslatedContent": "Este conteúdo não está disponível em sua língua ainda.",
	"page.editLink": "Editar página",
	"page.lastUpdated": "Última atualização:",
	"page.previousLink": "Anterior",
	"page.nextLink": "Próximo",
	"404.text": "Página não encontrada. Verifique o URL ou tente usar a barra de pesquisa."
};

const fa = {
	"skipLink.label": "رفتن به محتوا",
	"search.label": "جستجو",
	"search.shortcutLabel": "(برای جستجو / را فشار دهید)",
	"search.cancelLabel": "لغو",
	"search.devWarning": "جستجو تنها در نسخه‌های تولیدی در دسترس است. \nسعی کنید سایت را بسازید و پیش‌نمایش آن را به صورت محلی آزمایش کنید.",
	"themeSelect.accessibleLabel": "انتخاب پوسته",
	"themeSelect.dark": "تیره",
	"themeSelect.light": "روشن",
	"themeSelect.auto": "خودکار",
	"languageSelect.accessibleLabel": "انتخاب زبان",
	"menuButton.accessibleLabel": "منو",
	"sidebarNav.accessibleLabel": "اصلی",
	"tableOfContents.onThisPage": "در این صفحه",
	"tableOfContents.overview": "بررسی اجمالی",
	"i18n.untranslatedContent": "این محتوا هنوز به زبان شما در دسترس نیست.",
	"page.editLink": "ویرایش صفحه",
	"page.lastUpdated": "آخرین به روز رسانی:",
	"page.previousLink": "قبلی",
	"page.nextLink": "بعدی",
	"404.text": "صفحه یافت نشد. لطفاً URL را بررسی کنید یا از جستجو استفاده نمایید."
};

const fr = {
	"skipLink.label": "Aller au contenu",
	"search.label": "Rechercher",
	"search.shortcutLabel": "(Presser / pour rechercher)",
	"search.cancelLabel": "Annuler",
	"search.devWarning": "La recherche est disponible uniquement en mode production. \nEssayez de construire puis de prévisualiser votre site pour tester la recherche localement.",
	"themeSelect.accessibleLabel": "Selectionner le thème",
	"themeSelect.dark": "Sombre",
	"themeSelect.light": "Clair",
	"themeSelect.auto": "Auto",
	"languageSelect.accessibleLabel": "Selectionner la langue",
	"menuButton.accessibleLabel": "Menu",
	"sidebarNav.accessibleLabel": "principale",
	"tableOfContents.onThisPage": "Sur cette page",
	"tableOfContents.overview": "Vue d’ensemble",
	"i18n.untranslatedContent": "Ce contenu n’est pas encore disponible dans votre langue.",
	"page.editLink": "Modifier cette page",
	"page.lastUpdated": "Dernière mise à jour :",
	"page.previousLink": "Précédent",
	"page.nextLink": "Suivant",
	"404.text": "Page non trouvée. Vérifiez l’URL ou essayez d’utiliser la barre de recherche."
};

const gl = {
	"skipLink.label": "Ir ao contido",
	"search.label": "Busca",
	"search.shortcutLabel": "(Preme / para Busca)",
	"search.cancelLabel": "Deixar",
	"search.devWarning": "A busca só está dispoñible nas versións de producción. \nTrata de construir e ollear o sitio para probalo localmente.",
	"themeSelect.accessibleLabel": "Seleciona tema",
	"themeSelect.dark": "Escuro",
	"themeSelect.light": "Claro",
	"themeSelect.auto": "Auto",
	"languageSelect.accessibleLabel": "Seleciona linguaxe",
	"menuButton.accessibleLabel": "Menú",
	"sidebarNav.accessibleLabel": "Principal",
	"tableOfContents.onThisPage": "Nesta paxina",
	"tableOfContents.overview": "Sinopse",
	"i18n.untranslatedContent": "Este contido aínda non está dispoñible no teu idioma.",
	"page.editLink": "Editar paxina",
	"page.lastUpdated": "Última actualización:",
	"page.previousLink": "Anterior",
	"page.nextLink": "Seguinte",
	"404.text": "Paxina non atopada. Comproba a URL ou intenta usar a barra de busca."
};

const he = {
	"skipLink.label": "דלגו לתוכן",
	"search.label": "חיפוש",
	"search.shortcutLabel": "(לחצו / כדי לחפש)",
	"search.cancelLabel": "ביטול",
	"search.devWarning": "החיפוש זמין רק בסביבת ייצור. \nנסו לבנות ולהציג תצוגה מקדימה של האתר כדי לבדוק אותו באופן מקומי.",
	"themeSelect.accessibleLabel": "בחרו פרופיל צבע",
	"themeSelect.dark": "כהה",
	"themeSelect.light": "בהיר",
	"themeSelect.auto": "מערכת",
	"languageSelect.accessibleLabel": "בחרו שפה",
	"menuButton.accessibleLabel": "תפריט",
	"sidebarNav.accessibleLabel": "ראשי",
	"tableOfContents.onThisPage": "בדף זה",
	"tableOfContents.overview": "סקירה כללית",
	"i18n.untranslatedContent": "תוכן זה אינו זמין עדיין בשפה שלך.",
	"page.editLink": "ערכו דף",
	"page.lastUpdated": "עדכון אחרון:",
	"page.previousLink": "הקודם",
	"page.nextLink": "הבא",
	"404.text": "הדף לא נמצא. אנא בדקו את כתובת האתר או נסו להשתמש בסרגל החיפוש."
};

const id = {
	"skipLink.label": "Lewati ke konten",
	"search.label": "Pencarian",
	"search.shortcutLabel": "(Tekan / untuk mencari)",
	"search.cancelLabel": "Batal",
	"search.devWarning": "Pencarian hanya tersedia pada build produksi. \nLakukan proses build dan pratinjau situs Anda sebelum mencoba di lingkungan lokal.",
	"themeSelect.accessibleLabel": "Pilih tema",
	"themeSelect.dark": "Gelap",
	"themeSelect.light": "Terang",
	"themeSelect.auto": "Otomatis",
	"languageSelect.accessibleLabel": "Pilih Bahasa",
	"menuButton.accessibleLabel": "Menu",
	"sidebarNav.accessibleLabel": "Utama",
	"tableOfContents.onThisPage": "Di halaman ini",
	"tableOfContents.overview": "Ringkasan",
	"i18n.untranslatedContent": "Konten ini belum tersedia dalam bahasa Anda.",
	"page.editLink": "Edit halaman",
	"page.lastUpdated": "Terakhir diperbaharui:",
	"page.previousLink": "Sebelumnya",
	"page.nextLink": "Selanjutnya",
	"404.text": "Halaman tidak ditemukan. Cek kembali kolom URL atau gunakan fitur pencarian."
};

const it = {
	"skipLink.label": "Salta ai contenuti",
	"search.label": "Cerca",
	"search.shortcutLabel": "(Usa / per cercare)",
	"search.cancelLabel": "Cancella",
	"search.devWarning": "Search is only available in production builds. \nTry building and previewing the site to test it out locally.",
	"themeSelect.accessibleLabel": "Seleziona tema",
	"themeSelect.dark": "Scuro",
	"themeSelect.light": "Chiaro",
	"themeSelect.auto": "Auto",
	"languageSelect.accessibleLabel": "Seleziona lingua",
	"menuButton.accessibleLabel": "Menu",
	"sidebarNav.accessibleLabel": "Principale",
	"tableOfContents.onThisPage": "In questa pagina",
	"tableOfContents.overview": "Panoramica",
	"i18n.untranslatedContent": "Questi contenuti non sono ancora disponibili nella tua lingua.",
	"page.editLink": "Modifica pagina",
	"page.lastUpdated": "Ultimo aggiornamento:",
	"page.previousLink": "Indietro",
	"page.nextLink": "Avanti",
	"404.text": "Pagina non trovata. Verifica l'URL o prova a utilizzare la barra di ricerca."
};

const nl = {
	"skipLink.label": "Ga naar inhoud",
	"search.label": "Zoeken",
	"search.shortcutLabel": "(Druk op / om te zoeken)",
	"search.cancelLabel": "Annuleren",
	"search.devWarning": "Zoeken is alleen beschikbaar tijdens productie. \nProbeer om de site te builden en er een preview van te bekijken om lokaal te testen.",
	"themeSelect.accessibleLabel": "Selecteer thema",
	"themeSelect.dark": "Donker",
	"themeSelect.light": "Licht",
	"themeSelect.auto": "Auto",
	"languageSelect.accessibleLabel": "Selecteer taal",
	"menuButton.accessibleLabel": "Menu",
	"sidebarNav.accessibleLabel": "Hoofdnavigatie",
	"tableOfContents.onThisPage": "Op deze pagina",
	"tableOfContents.overview": "Overzicht",
	"i18n.untranslatedContent": "Deze inhoud is nog niet vertaald.",
	"page.editLink": "Bewerk pagina",
	"page.lastUpdated": "Laatst bewerkt:",
	"page.previousLink": "Vorige",
	"page.nextLink": "Volgende",
	"404.text": "Pagina niet gevonden. Controleer de URL of probeer de zoekbalk."
};

const da = {
	"skipLink.label": "Gå til indhold",
	"search.label": "Søg",
	"search.shortcutLabel": "(Tryk / for at søge)",
	"search.cancelLabel": "Annuller",
	"search.devWarning": "Søgning er kun tilgængeligt i produktions versioner. \nPrøv at bygge siden og forhåndsvis den for at teste det lokalt.",
	"themeSelect.accessibleLabel": "Vælg tema",
	"themeSelect.dark": "Mørk",
	"themeSelect.light": "Lys",
	"themeSelect.auto": "Auto",
	"languageSelect.accessibleLabel": "Vælg sprog",
	"menuButton.accessibleLabel": "Menu",
	"sidebarNav.accessibleLabel": "Hovednavigation",
	"tableOfContents.onThisPage": "På denne side",
	"tableOfContents.overview": "Oversigt",
	"i18n.untranslatedContent": "Dette indhold er ikke tilgængeligt i dit sprog endnu.",
	"page.editLink": "Rediger siden",
	"page.lastUpdated": "Sidst opdateret:",
	"page.previousLink": "Forrige",
	"page.nextLink": "Næste",
	"404.text": "Siden er ikke fundet. Tjek din URL eller prøv søgelinjen."
};

const tr = {
	"skipLink.label": "İçeriğe geç",
	"search.label": "Ara",
	"search.shortcutLabel": "(Aramak için / bas)",
	"search.cancelLabel": "İptal",
	"search.devWarning": "Arama yalnızca üretim derlemelerinde kullanılabilir. \nYerel bilgisayarınızda test etmek için siteyi derleyin ve önizleme yapın.",
	"themeSelect.accessibleLabel": "Tema seç",
	"themeSelect.dark": "Koyu",
	"themeSelect.light": "Açık",
	"themeSelect.auto": "Otomatik",
	"languageSelect.accessibleLabel": "Dil seçin",
	"menuButton.accessibleLabel": "Menü",
	"sidebarNav.accessibleLabel": "Ana",
	"tableOfContents.onThisPage": "Sayfa içeriği",
	"tableOfContents.overview": "Genel bakış",
	"i18n.untranslatedContent": "Bu içerik henüz dilinizde mevcut değil.",
	"page.editLink": "Sayfayı düzenle",
	"page.lastUpdated": "Son güncelleme:",
	"page.previousLink": "Önceki",
	"page.nextLink": "Sonraki",
	"404.text": "Sayfa bulunamadı. URL'i kontrol edin ya da arama çubuğunu kullanmayı deneyin."
};

const ar = {
	"skipLink.label": "تخطَّ إلى المحتوى",
	"search.label": "ابحث",
	"search.shortcutLabel": "(إضغط / للبحث)",
	"search.cancelLabel": "إلغاء",
	"search.devWarning": "البحث متوفر فقط في بنيات اﻹنتاج. \n جرب بناء المشروع ومعاينته على جهازك",
	"themeSelect.accessibleLabel": "اختر سمة",
	"themeSelect.dark": "داكن",
	"themeSelect.light": "فاتح",
	"themeSelect.auto": "تلقائي",
	"languageSelect.accessibleLabel": "اختر لغة",
	"menuButton.accessibleLabel": "القائمة",
	"sidebarNav.accessibleLabel": "الرئيسية",
	"tableOfContents.onThisPage": "على هذه الصفحة",
	"tableOfContents.overview": "نظرة عامة",
	"i18n.untranslatedContent": "هذا المحتوى لا يتوفر بلغتك بعد.",
	"page.editLink": "عدل الصفحة",
	"page.lastUpdated": "اخر تحديث:",
	"page.previousLink": "السابق",
	"page.nextLink": "التالي",
	"404.text": "الصفحة غير موجودة. تأكد من الرابط أو ابحث بإستعمال شريط البحث."
};

const nb = {
	"skipLink.label": "Gå til innholdet",
	"search.label": "Søk",
	"search.shortcutLabel": "(Trykk / for å søke)",
	"search.cancelLabel": "Avbryt",
	"search.devWarning": "Søk er bare tilgjengelig i produksjonsbygg. \nPrøv å bygg siden og forhåndsvis den for å teste det lokalt.",
	"themeSelect.accessibleLabel": "Velg tema",
	"themeSelect.dark": "Mørk",
	"themeSelect.light": "Lys",
	"themeSelect.auto": "Auto",
	"languageSelect.accessibleLabel": "Velg språk",
	"menuButton.accessibleLabel": "Meny",
	"sidebarNav.accessibleLabel": "Hovednavigasjon",
	"tableOfContents.onThisPage": "På denne siden",
	"tableOfContents.overview": "Oversikt",
	"i18n.untranslatedContent": "Dette innholdet er ikke tilgjengelig på ditt språk.",
	"page.editLink": "Rediger side",
	"page.lastUpdated": "Sist oppdatert:",
	"page.previousLink": "Forrige",
	"page.nextLink": "Neste",
	"404.text": "Siden ble ikke funnet. Sjekk URL-en eller prøv å bruke søkefeltet."
};

const zh = {
	"skipLink.label": "跳转到内容",
	"search.label": "搜索",
	"search.shortcutLabel": "（按 / 进行搜索）",
	"search.cancelLabel": "取消",
	"search.devWarning": "搜索仅适用于生产版本。\n尝试构建并预览网站以在本地测试。",
	"themeSelect.accessibleLabel": "选择主题",
	"themeSelect.dark": "深色",
	"themeSelect.light": "浅色",
	"themeSelect.auto": "自动",
	"languageSelect.accessibleLabel": "选择语言",
	"menuButton.accessibleLabel": "菜单",
	"sidebarNav.accessibleLabel": "主要",
	"tableOfContents.onThisPage": "本页",
	"tableOfContents.overview": "概述",
	"i18n.untranslatedContent": "此内容尚不支持你的语言。",
	"page.editLink": "编辑此页",
	"page.lastUpdated": "最近更新：",
	"page.previousLink": "上一页",
	"page.nextLink": "下一页",
	"404.text": "页面未找到。检查 URL 或尝试使用搜索栏。"
};

const ko = {
	"skipLink.label": "컨텐츠로 이동",
	"search.label": "검색",
	"search.shortcutLabel": "(검색을 위해 / 키를 누르세요)",
	"search.cancelLabel": "취소",
	"search.devWarning": "검색 기능은 프로덕션 환경에서만 사용할 수 있습니다.\n사이트를 로컬 환경에서 테스트하기 위해 빌드하고 미리보기(Preview) 하세요.",
	"themeSelect.accessibleLabel": "테마 선택",
	"themeSelect.dark": "어두움",
	"themeSelect.light": "밝음",
	"themeSelect.auto": "자동",
	"languageSelect.accessibleLabel": "언어 선택",
	"menuButton.accessibleLabel": "메뉴",
	"sidebarNav.accessibleLabel": "메인",
	"tableOfContents.onThisPage": "목차",
	"tableOfContents.overview": "개요",
	"i18n.untranslatedContent": "이 컨텐츠는 아직 번역되지 않았습니다.",
	"page.editLink": "페이지 수정",
	"page.lastUpdated": "최종 수정:",
	"page.previousLink": "이전 페이지",
	"page.nextLink": "다음 페이지",
	"404.text": "페이지를 찾을 수 없습니다. URL을 확인하거나 검색창을 사용해보세요."
};

const sv = {
	"skipLink.label": "Hoppa till innehåll",
	"search.label": "Sök",
	"search.shortcutLabel": "(Tryck / för att söka)",
	"search.cancelLabel": "Avbryt",
	"search.devWarning": "Sökfunktionen är endast tillgänglig i produktionsbyggen. \nProva att bygga och förhandsvisa siten för att testa det lokalt.",
	"themeSelect.accessibleLabel": "Välj tema",
	"themeSelect.dark": "Mörkt",
	"themeSelect.light": "Ljust",
	"themeSelect.auto": "Auto",
	"languageSelect.accessibleLabel": "Välj språk",
	"menuButton.accessibleLabel": "Meny",
	"sidebarNav.accessibleLabel": "Huvudmeny",
	"tableOfContents.onThisPage": "På den här sidan",
	"tableOfContents.overview": "Översikt",
	"i18n.untranslatedContent": "Det här innehållet är inte tillgängligt på ditt språk än.",
	"page.editLink": "Redigera sida",
	"page.lastUpdated": "Senast uppdaterad:",
	"page.previousLink": "Föregående",
	"page.nextLink": "Nästa",
	"404.text": "Sidan hittades inte. Kontrollera URL:n eller testa att använda sökfältet."
};

const ru = {
	"skipLink.label": "Пропустить до содержимого",
	"search.label": "Поиск",
	"search.shortcutLabel": "(Нажмите / для Поиска)",
	"search.cancelLabel": "Отменить",
	"search.devWarning": "Поиск доступен только в производственных сборках. \nПопробуйте выполнить сборку и просмотреть сайт, чтобы протестировать его локально.",
	"themeSelect.accessibleLabel": "Выберите тему",
	"themeSelect.dark": "Темная",
	"themeSelect.light": "Светлая",
	"themeSelect.auto": "Авто",
	"languageSelect.accessibleLabel": "Выберите язык",
	"menuButton.accessibleLabel": "Меню",
	"sidebarNav.accessibleLabel": "Основное",
	"tableOfContents.onThisPage": "На этой странице",
	"tableOfContents.overview": "Обзор",
	"i18n.untranslatedContent": "Этот содержимое пока не доступно на вашем языке.",
	"page.editLink": "Редактировать страницу",
	"page.lastUpdated": "Последнее обновление:",
	"page.previousLink": "Предыдущая",
	"page.nextLink": "Следующая",
	"404.text": "Страница не найдена. Проверьтье  URL или используйте поиск по сайту"
};

const vi = {
	"skipLink.label": "Bỏ qua nội dung",
	"search.label": "Tìm kiếm",
	"search.shortcutLabel": "(Nhấn / để Tìm kiếm)",
	"search.cancelLabel": "Thoát",
	"search.devWarning": "Tìm kiếm không khả dụng khi đang trong môi trường lập trình. \nThử xuất bản website và tìm kiếm.",
	"themeSelect.accessibleLabel": "Chọn giao diện",
	"themeSelect.dark": "Tối",
	"themeSelect.light": "Sáng",
	"themeSelect.auto": "Tự động",
	"languageSelect.accessibleLabel": "Chọn ngôn ngữ",
	"menuButton.accessibleLabel": "Menu",
	"sidebarNav.accessibleLabel": "Chính",
	"tableOfContents.onThisPage": "Tóm tắt",
	"tableOfContents.overview": "Tổng quát",
	"i18n.untranslatedContent": "Nội dung này không tồn tại trong ngôn ngữ của bạn",
	"page.editLink": "Chỉnh sửa trang",
	"page.lastUpdated": "Cập nhật lần cuối:",
	"page.previousLink": "Tiếp",
	"page.nextLink": "Trước",
	"404.text": "Không tìm thấy trang. Kiểm tra URL hoặc thử sử dụng thanh tìm kiếm."
};

const uk = {
	"skipLink.label": "Перейти до вмісту",
	"search.label": "Пошук",
	"search.shortcutLabel": "(Натисніть / для Пошуку)",
	"search.cancelLabel": "Скасувати",
	"search.devWarning": "Пошук доступний лише у виробничих зборках. \nСпробуйте виконати збірку та переглянути сайт, щоб протестувати його локально",
	"themeSelect.accessibleLabel": "Вибрати Тему",
	"themeSelect.dark": "Темна",
	"themeSelect.light": "Світла",
	"themeSelect.auto": "Авто",
	"languageSelect.accessibleLabel": "Оберіть мову",
	"menuButton.accessibleLabel": "Меню",
	"sidebarNav.accessibleLabel": "Головне",
	"tableOfContents.onThisPage": "На цій сторінці",
	"tableOfContents.overview": "Огляд",
	"i18n.untranslatedContent": "Цей контент ще не доступний на Вашій мові.",
	"page.editLink": "Редагувати сторінку",
	"page.lastUpdated": "Останнє оновлення:",
	"page.previousLink": "Попередня",
	"page.nextLink": "Наступна",
	"404.text": "Сторінку не знайдено. Перевірте URL-адресу або спробуйте скористатися рядком пошуку."
};

const { parse: parse$4 } = builtinI18nSchema();
const builtinTranslations = Object.fromEntries(
  Object.entries({
    cs,
    en,
    es,
    de,
    ja,
    pt,
    fa,
    fr,
    gl,
    he,
    id,
    it,
    nl,
    da,
    tr,
    ar,
    nb,
    zh,
    ko,
    sv,
    ru,
    vi,
    uk
  }).map(([key, dict]) => [key, parse$4(dict)])
);

function createTranslationSystem(userTranslations, config) {
  const defaultLocale = config.defaultLocale?.locale || "root";
  const defaults = buildDictionary(
    builtinTranslations.en,
    userTranslations.en,
    builtinTranslations[defaultLocale] || builtinTranslations[stripLangRegion(defaultLocale)],
    userTranslations[defaultLocale]
  );
  return function useTranslations(locale) {
    const lang = localeToLang$1(locale, config.locales, config.defaultLocale);
    const dictionary = buildDictionary(
      defaults,
      builtinTranslations[lang] || builtinTranslations[stripLangRegion(lang)],
      userTranslations[lang]
    );
    const t = (key) => dictionary[key];
    t.pick = (startOfKey) => Object.fromEntries(Object.entries(dictionary).filter(([k]) => k.startsWith(startOfKey)));
    return t;
  };
}
function stripLangRegion(lang) {
  return lang.replace(/-[a-zA-Z]{2}/, "");
}
function localeToLang$1(locale, locales, defaultLocale) {
  const lang = locale ? locales?.[locale]?.lang : locales?.root?.lang;
  const defaultLang = defaultLocale?.lang || defaultLocale?.locale;
  return lang || defaultLang || "en";
}
function buildDictionary(base, ...dictionaries) {
  const dictionary = { ...base };
  for (const dict of dictionaries) {
    for (const key in dict) {
      const value = dict[key];
      if (value)
        dictionary[key] = value;
    }
  }
  return dictionary;
}

let userTranslations = {};
try {
  userTranslations = Object.fromEntries(
    (await getCollection("i18n")).map(({ id, data }) => [id, data])
  );
} catch {
}
const useTranslations = createTranslationSystem(userTranslations, config);

const $$Astro$x = createAstro("https://allrdy.io");
const $$SkipLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$x, $$props, $$slots);
  Astro2.self = $$SkipLink;
  const t = useTranslations(Astro2.props.locale);
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`#${PAGE_TITLE_ID}`, "href")} class="astro-f5z3lahw">${t("skipLink.label")}</a>`;
}, "/Users/dubhe/d/site/node_modules/.pnpm/@astrojs+starlight@0.12.0_astro@3.5.1/node_modules/@astrojs/starlight/components/SkipLink.astro", void 0);

const $$Astro$w = createAstro("https://allrdy.io");
const $$PageFrame = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$w, $$props, $$slots);
  Astro2.self = $$PageFrame;
  const { hasSidebar, locale } = Astro2.props;
  const t = useTranslations(locale);
  return renderTemplate`${maybeRenderHead()}<div class="page sl-flex astro-mjfaqhhw"><header class="header astro-mjfaqhhw">${renderSlot($$result, $$slots["header"])}</header>${hasSidebar && renderTemplate`<nav class="sidebar astro-mjfaqhhw"${addAttribute(t("sidebarNav.accessibleLabel"), "aria-label")}>${renderComponent($$result, "MobileMenuToggle", $$MobileMenuToggle, { ...Astro2.props, "class": "astro-mjfaqhhw" })}<div id="starlight__sidebar" class="sidebar-pane astro-mjfaqhhw"><div class="sidebar-content sl-flex astro-mjfaqhhw">${renderSlot($$result, $$slots["sidebar"])}</div></div></nav>`}<div class="main-frame astro-mjfaqhhw">${renderSlot($$result, $$slots["default"])}</div></div>`;
}, "/Users/dubhe/d/site/node_modules/.pnpm/@astrojs+starlight@0.12.0_astro@3.5.1/node_modules/@astrojs/starlight/components/PageFrame.astro", void 0);

const $$Astro$v = createAstro("https://allrdy.io");
const $$MobileMenuToggle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$v, $$props, $$slots);
  Astro2.self = $$MobileMenuToggle;
  const t = useTranslations(Astro2.props.locale);
  return renderTemplate`${renderComponent($$result, "starlight-menu-button", "starlight-menu-button", { "class": "astro-i7of6oeu" }, { "default": () => renderTemplate`${maybeRenderHead()}<button aria-expanded="false"${addAttribute(t("menuButton.accessibleLabel"), "aria-label")} aria-controls="starlight__sidebar" class="sl-flex md:sl-hidden astro-i7of6oeu">${renderComponent($$result, "Icon", $$Icon, { "name": "bars", "class": "astro-i7of6oeu" })}</button>` })}`;
}, "/Users/dubhe/d/site/node_modules/.pnpm/@astrojs+starlight@0.12.0_astro@3.5.1/node_modules/@astrojs/starlight/components/MobileMenuToggle.astro", void 0);

const $$Astro$u = createAstro("https://allrdy.io");
const $$TwoColumnContent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$u, $$props, $$slots);
  Astro2.self = $$TwoColumnContent;
  return renderTemplate`${maybeRenderHead()}<div class="lg:sl-flex astro-tfonn5qj">${Astro2.props.toc && renderTemplate`<aside class="right-sidebar-container astro-tfonn5qj"><div class="right-sidebar astro-tfonn5qj">${renderSlot($$result, $$slots["right-sidebar"])}</div></aside>`}<div class="main-pane astro-tfonn5qj">${renderSlot($$result, $$slots["default"])}</div></div>`;
}, "/Users/dubhe/d/site/node_modules/.pnpm/@astrojs+starlight@0.12.0_astro@3.5.1/node_modules/@astrojs/starlight/components/TwoColumnContent.astro", void 0);

const $$Astro$t = createAstro("https://allrdy.io");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$t, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<div class="header sl-flex astro-rjmw7fye"><div class="sl-flex astro-rjmw7fye">${renderComponent($$result, "SiteTitle", $$SiteTitle, { ...Astro2.props, "class": "astro-rjmw7fye" })}</div><div class="sl-flex astro-rjmw7fye">${renderComponent($$result, "Search", $$Search, { ...Astro2.props, "class": "astro-rjmw7fye" })}</div><div class="sl-hidden md:sl-flex right-group astro-rjmw7fye"><div class="sl-flex social-icons astro-rjmw7fye">${renderComponent($$result, "SocialIcons", $$SocialIcons, { ...Astro2.props, "class": "astro-rjmw7fye" })}</div>${renderComponent($$result, "ThemeSelect", $$ThemeSelect, { ...Astro2.props, "class": "astro-rjmw7fye" })}${renderComponent($$result, "LanguageSelect", $$LanguageSelect, { ...Astro2.props, "class": "astro-rjmw7fye" })}</div></div>`;
}, "/Users/dubhe/d/site/node_modules/.pnpm/@astrojs+starlight@0.12.0_astro@3.5.1/node_modules/@astrojs/starlight/components/Header.astro", void 0);

const logos = {};

const $$Astro$s = createAstro("https://allrdy.io");
const $$SiteTitle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$s, $$props, $$slots);
  Astro2.self = $$SiteTitle;
  const href = pathWithBase(Astro2.props.locale || "/");
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} class="site-title sl-flex astro-qdrkucoh">${config.logo && logos.dark && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "class": "astro-qdrkucoh" }, { "default": ($$result2) => renderTemplate`<img${addAttribute([{ "light:sl-hidden": !("src" in config.logo) }, "astro-qdrkucoh"], "class:list")}${addAttribute(config.logo.alt, "alt")}${addAttribute(logos.dark.src, "src")}${addAttribute(logos.dark.width, "width")}${addAttribute(logos.dark.height, "height")}>${!("src" in config.logo) && renderTemplate`<img class="dark:sl-hidden astro-qdrkucoh"${addAttribute(config.logo.alt, "alt")}${addAttribute(logos.light?.src, "src")}${addAttribute(logos.light?.width, "width")}${addAttribute(logos.light?.height, "height")}>`}` })}`}<span${addAttribute([{ "sr-only": config.logo?.replacesTitle }, "astro-qdrkucoh"], "class:list")}>${config.title}</span></a>`;
}, "/Users/dubhe/d/site/node_modules/.pnpm/@astrojs+starlight@0.12.0_astro@3.5.1/node_modules/@astrojs/starlight/components/SiteTitle.astro", void 0);

const $$Astro$r = createAstro("https://allrdy.io");
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$r, $$props, $$slots);
  Astro2.self = $$Search;
  const t = useTranslations(Astro2.props.locale);
  const pagefindTranslations = {
    placeholder: t("search.label"),
    ...Object.fromEntries(
      Object.entries(t.pick("pagefind.")).map(([key, value]) => [key.replace("pagefind.", ""), value])
    )
  };
  return renderTemplate`${renderComponent($$result, "site-search", "site-search", { "data-translations": JSON.stringify(pagefindTranslations), "class": "astro-tx3o4pr6" }, { "default": () => renderTemplate`${maybeRenderHead()}<button data-open-modal disabled class="astro-tx3o4pr6">${renderComponent($$result, "Icon", $$Icon, { "name": "magnifier", "label": t("search.label"), "class": "astro-tx3o4pr6" })}<span class="sl-hidden md:sl-block astro-tx3o4pr6" aria-hidden="true">${t("search.label")}</span>${renderComponent($$result, "Icon", $$Icon, { "name": "forward-slash", "class": "sl-hidden md:sl-block astro-tx3o4pr6", "label": t("search.shortcutLabel") })}</button><dialog style="padding:0"${addAttribute(t("search.label"), "aria-label")} class="astro-tx3o4pr6"><div class="dialog-frame sl-flex astro-tx3o4pr6"><button data-close-modal class="sl-flex md:sl-hidden astro-tx3o4pr6">${t("search.cancelLabel")}</button>${renderTemplate`<div class="search-container astro-tx3o4pr6"><div id="starlight__search" class="astro-tx3o4pr6"></div></div>`}</div></dialog>` })}`;
}, "/Users/dubhe/d/site/node_modules/.pnpm/@astrojs+starlight@0.12.0_astro@3.5.1/node_modules/@astrojs/starlight/components/Search.astro", void 0);

const $$Astro$q = createAstro("https://allrdy.io");
const $$SocialIcons = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
  Astro2.self = $$SocialIcons;
  const links = Object.entries(config.social || {});
  return renderTemplate`${links.length > 0 && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "class": "astro-de4bsduy" }, { "default": ($$result2) => renderTemplate`${links.map(([platform, { label, url }]) => renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")} rel="me" class="sl-flex astro-de4bsduy"><span class="sr-only astro-de4bsduy">${label}</span>${renderComponent($$result2, "Icon", $$Icon, { "name": platform, "class": "astro-de4bsduy" })}</a>`)}` })}`}`;
}, "/Users/dubhe/d/site/node_modules/.pnpm/@astrojs+starlight@0.12.0_astro@3.5.1/node_modules/@astrojs/starlight/components/SocialIcons.astro", void 0);

const $$Astro$p = createAstro("https://allrdy.io");
const $$Select = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$Select;
  return renderTemplate`${maybeRenderHead()}<label${addAttribute(`--sl-select-width: ${Astro2.props.width}`, "style")} class="astro-4zbhwuxs"><span class="sr-only astro-4zbhwuxs">${Astro2.props.label}</span>${renderComponent($$result, "Icon", $$Icon, { "name": Astro2.props.icon, "class": "icon label-icon astro-4zbhwuxs" })}<select${addAttribute(Astro2.props.value, "value")} class="astro-4zbhwuxs">${Astro2.props.options.map(({ value, selected, label }) => renderTemplate`<option${addAttribute(value, "value")}${addAttribute(selected, "selected")} class="astro-4zbhwuxs">${unescapeHTML(label)}</option>`)}</select>${renderComponent($$result, "Icon", $$Icon, { "name": "down-caret", "class": "icon caret astro-4zbhwuxs" })}</label>`;
}, "/Users/dubhe/d/site/node_modules/.pnpm/@astrojs+starlight@0.12.0_astro@3.5.1/node_modules/@astrojs/starlight/components/Select.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$o = createAstro("https://allrdy.io");
const $$ThemeSelect = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$ThemeSelect;
  const t = useTranslations(Astro2.props.locale);
  return renderTemplate(_a || (_a = __template(["", "<script>\n	StarlightThemeProvider.updatePickers();\n<\/script>"])), renderComponent($$result, "starlight-theme-select", "starlight-theme-select", {}, { "default": () => renderTemplate`${renderComponent($$result, "Select", $$Select, { "icon": "laptop", "label": t("themeSelect.accessibleLabel"), "value": "auto", "options": [
    { label: t("themeSelect.dark"), selected: false, value: "dark" },
    { label: t("themeSelect.light"), selected: false, value: "light" },
    { label: t("themeSelect.auto"), selected: true, value: "auto" }
  ], "width": "6.25em" })}` }));
}, "/Users/dubhe/d/site/node_modules/.pnpm/@astrojs+starlight@0.12.0_astro@3.5.1/node_modules/@astrojs/starlight/components/ThemeSelect.astro", void 0);

const $$Astro$n = createAstro("https://allrdy.io");
const $$LanguageSelect = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$LanguageSelect;
  function localizedPathname(locale) {
    return localizedUrl(Astro2.url, locale).pathname;
  }
  const t = useTranslations(Astro2.props.locale);
  return renderTemplate`${renderTemplate`${renderComponent($$result, "starlight-lang-select", "starlight-lang-select", {}, { "default": () => renderTemplate`${renderComponent($$result, "Select", $$Select, { "icon": "translate", "label": t("languageSelect.accessibleLabel"), "value": localizedPathname(Astro2.props.locale), "options": Object.entries(config.locales).map(([code, locale]) => ({
    value: localizedPathname(code),
    selected: code === Astro2.props.locale,
    label: locale.label
  })), "width": "7em" })}` })}`}`;
}, "/Users/dubhe/d/site/node_modules/.pnpm/@astrojs+starlight@0.12.0_astro@3.5.1/node_modules/@astrojs/starlight/components/LanguageSelect.astro", void 0);

function pickLang(dictionary, lang) {
  return dictionary[lang];
}

function slugToLocale(slug) {
  const locales = Object.keys(config.locales || {});
  const baseSegment = slug.split("/")[0];
  if (baseSegment && locales.includes(baseSegment))
    return baseSegment;
  return void 0;
}
function slugToLocaleData(slug) {
  const locale = slugToLocale(slug);
  return { dir: localeToDir(locale), lang: localeToLang(locale), locale };
}
function localeToLang(locale) {
  const lang = locale ? config.locales?.[locale]?.lang : config.locales?.root?.lang;
  const defaultLang = config.defaultLocale?.lang || config.defaultLocale?.locale;
  return lang || defaultLang || "en";
}
function localeToDir(locale) {
  const dir = locale ? config.locales?.[locale]?.dir : config.locales?.root?.dir;
  return dir || config.defaultLocale.dir;
}
function slugToParam(slug) {
  return slug === "index" || slug === "" ? void 0 : slug.endsWith("/index") ? slug.replace(/\/index$/, "") : slug;
}
function slugToPathname(slug) {
  const param = slugToParam(slug);
  return param ? "/" + param + "/" : "/";
}
function localizedSlug(slug, locale) {
  const slugLocale = slugToLocale(slug);
  if (slugLocale === locale)
    return slug;
  locale = locale || "";
  if (slugLocale === slug)
    return locale;
  if (slugLocale) {
    return slug.replace(slugLocale + "/", locale ? locale + "/" : "").replace(/\/$/, "");
  }
  return slug ? locale + "/" + slug : locale;
}
function localizedId(id, locale) {
  const idLocale = slugToLocale(id);
  if (idLocale) {
    return id.replace(idLocale + "/", locale ? locale + "/" : "");
  } else if (locale) {
    return locale + "/" + id;
  } else {
    return id;
  }
}

function validateLogoImports() {
  if (config.logo) {
    let err;
    if ("src" in config.logo) {
      if (!logos.dark || !logos.light) {
        err = `Could not resolve logo import for "${config.logo.src}" (logo.src)`;
      }
    } else {
      if (!logos.dark) {
        err = `Could not resolve logo import for "${config.logo.dark}" (logo.dark)`;
      } else if (!logos.light) {
        err = `Could not resolve logo import for "${config.logo.light}" (logo.light)`;
      }
    }
    if (err)
      throw new Error(err);
  }
}

validateLogoImports();
const normalizeIndexSlug = (slug) => slug === "index" ? "" : slug;
const docs = (await getCollection("docs") ?? []).map(
  ({ slug, ...entry }) => ({
    ...entry,
    slug: normalizeIndexSlug(slug)
  })
);
function getRoutes() {
  const routes2 = docs.map((entry) => ({
    entry,
    slug: entry.slug,
    id: entry.id,
    entryMeta: slugToLocaleData(entry.slug),
    ...slugToLocaleData(entry.slug)
  }));
  {
    const defaultLocaleDocs = getLocaleDocs(
      config.defaultLocale?.locale === "root" ? void 0 : config.defaultLocale?.locale
    );
    for (const key in config.locales) {
      if (key === config.defaultLocale.locale)
        continue;
      const localeConfig = config.locales[key];
      if (!localeConfig)
        continue;
      const locale = key === "root" ? void 0 : key;
      const localeDocs = getLocaleDocs(locale);
      for (const fallback of defaultLocaleDocs) {
        const slug = localizedSlug(fallback.slug, locale);
        const id = localizedId(fallback.id, locale);
        const doesNotNeedFallback = localeDocs.some((doc) => doc.slug === slug);
        if (doesNotNeedFallback)
          continue;
        routes2.push({
          entry: fallback,
          slug,
          id,
          isFallback: true,
          lang: localeConfig.lang || "en",
          locale,
          dir: localeConfig.dir,
          entryMeta: slugToLocaleData(fallback.slug)
        });
      }
    }
  }
  return routes2;
}
const routes = getRoutes();
function getPaths() {
  return routes.map((route) => ({
    params: { slug: slugToParam(route.slug) },
    props: route
  }));
}
const paths = getPaths();
function getLocaleRoutes(locale) {
  return filterByLocale(routes, locale);
}
function getLocaleDocs(locale) {
  return filterByLocale(docs, locale);
}
function filterByLocale(items, locale) {
  if (config.locales) {
    if (locale && locale in config.locales) {
      return items.filter((i) => i.slug === locale || i.slug.startsWith(locale + "/"));
    } else if (config.locales.root) {
      const langKeys = Object.keys(config.locales).filter((k) => k !== "root");
      const isLangIndex = new RegExp(`^(${langKeys.join("|")})$`);
      const isLangDir = new RegExp(`^(${langKeys.join("|")})/`);
      return items.filter((i) => !isLangIndex.test(i.slug) && !isLangDir.test(i.slug));
    }
  }
  return items;
}

const DirKey = Symbol("DirKey");
function makeDir() {
  const dir = {};
  Object.defineProperty(dir, DirKey, { enumerable: false });
  return dir;
}
function isDir(data) {
  return DirKey in data;
}
function configItemToEntry(item, currentPathname, locale, routes) {
  if ("link" in item) {
    return linkFromConfig(item, locale, currentPathname);
  } else if ("autogenerate" in item) {
    return groupFromAutogenerateConfig(item, locale, routes, currentPathname);
  } else {
    return {
      type: "group",
      label: pickLang(item.translations, localeToLang(locale)) || item.label,
      entries: item.items.map((i) => configItemToEntry(i, currentPathname, locale, routes)),
      collapsed: item.collapsed,
      badge: item.badge
    };
  }
}
function groupFromAutogenerateConfig(item, locale, routes, currentPathname) {
  const { collapsed: subgroupCollapsed, directory } = item.autogenerate;
  const localeDir = locale ? locale + "/" + directory : directory;
  const dirDocs = routes.filter(
    (doc) => (
      // Match against `foo.md` or `foo/index.md`.
      stripExtension(doc.id) === localeDir || // Match against `foo/anything/else.md`.
      doc.id.startsWith(localeDir + "/")
    )
  );
  const tree = treeify(dirDocs, localeDir);
  return {
    type: "group",
    label: pickLang(item.translations, localeToLang(locale)) || item.label,
    entries: sidebarFromDir(tree, currentPathname, locale, subgroupCollapsed ?? item.collapsed),
    collapsed: item.collapsed,
    badge: item.badge
  };
}
const isAbsolute = (link) => /^https?:\/\//.test(link);
function linkFromConfig(item, locale, currentPathname) {
  let href = item.link;
  if (!isAbsolute(href)) {
    href = ensureLeadingAndTrailingSlashes(href);
    if (locale)
      href = "/" + locale + href;
  }
  const label = pickLang(item.translations, localeToLang(locale)) || item.label;
  return makeLink(href, label, currentPathname, item.badge, item.attrs);
}
function makeLink(href, label, currentPathname, badge, attrs) {
  if (!isAbsolute(href))
    href = pathWithBase(href);
  const isCurrent = href === ensureTrailingSlash(currentPathname);
  return { type: "link", label, href, isCurrent, badge, attrs: attrs ?? {} };
}
function getBreadcrumbs(path, baseDir) {
  const pathWithoutExt = stripExtension(path);
  if (pathWithoutExt === baseDir)
    return [];
  if (!baseDir.endsWith("/"))
    baseDir += "/";
  const relativePath = pathWithoutExt.startsWith(baseDir) ? pathWithoutExt.replace(baseDir, "") : pathWithoutExt;
  let dir = dirname(relativePath);
  if (dir === ".")
    return [];
  return dir.split("/");
}
function treeify(routes, baseDir) {
  const treeRoot = makeDir();
  routes.filter((doc) => !doc.entry.data.sidebar.hidden).forEach((doc) => {
    const breadcrumbs = getBreadcrumbs(doc.id, baseDir);
    let currentDir = treeRoot;
    breadcrumbs.forEach((dir) => {
      if (typeof currentDir[dir] === "undefined")
        currentDir[dir] = makeDir();
      currentDir = currentDir[dir];
    });
    currentDir[basename(doc.slug)] = doc;
  });
  return treeRoot;
}
function linkFromRoute(route, currentPathname) {
  return makeLink(
    slugToPathname(route.slug),
    route.entry.data.sidebar.label || route.entry.data.title,
    currentPathname,
    route.entry.data.sidebar.badge,
    route.entry.data.sidebar.attrs
  );
}
function getOrder(routeOrDir) {
  return isDir(routeOrDir) ? Math.min(...Object.values(routeOrDir).flatMap(getOrder)) : (
    // If no order value is found, set it to the largest number possible.
    routeOrDir.entry.data.sidebar.order ?? Number.MAX_VALUE
  );
}
function sortDirEntries(dir, locale) {
  const collator = new Intl.Collator(localeToLang(locale));
  return dir.sort(([keyA, a], [keyB, b]) => {
    const [aOrder, bOrder] = [getOrder(a), getOrder(b)];
    if (aOrder !== bOrder)
      return aOrder < bOrder ? -1 : 1;
    return collator.compare(isDir(a) ? keyA : a.slug, isDir(b) ? keyB : b.slug);
  });
}
function groupFromDir(dir, fullPath, dirName, currentPathname, locale, collapsed) {
  const entries = sortDirEntries(Object.entries(dir), locale).map(
    ([key, dirOrRoute]) => dirToItem(dirOrRoute, `${fullPath}/${key}`, key, currentPathname, locale, collapsed)
  );
  return {
    type: "group",
    label: dirName,
    entries,
    collapsed,
    badge: void 0
  };
}
function dirToItem(dirOrRoute, fullPath, dirName, currentPathname, locale, collapsed) {
  return isDir(dirOrRoute) ? groupFromDir(dirOrRoute, fullPath, dirName, currentPathname, locale, collapsed) : linkFromRoute(dirOrRoute, currentPathname);
}
function sidebarFromDir(tree, currentPathname, locale, collapsed) {
  return sortDirEntries(Object.entries(tree), locale).map(
    ([key, dirOrRoute]) => dirToItem(dirOrRoute, key, key, currentPathname, locale, collapsed)
  );
}
function getSidebar(pathname, locale) {
  const routes = getLocaleRoutes(locale);
  if (config.sidebar) {
    return config.sidebar.map((group) => configItemToEntry(group, pathname, locale, routes));
  } else {
    const tree = treeify(routes, locale || "");
    return sidebarFromDir(tree, pathname, locale, false);
  }
}
function flattenSidebar(sidebar) {
  return sidebar.flatMap(
    (entry) => entry.type === "group" ? flattenSidebar(entry.entries) : entry
  );
}
function getPrevNextLinks(sidebar, paginationEnabled, config2) {
  const entries = flattenSidebar(sidebar);
  const currentIndex = entries.findIndex((entry) => entry.isCurrent);
  const prev = applyPrevNextLinkConfig(entries[currentIndex - 1], paginationEnabled, config2.prev);
  const next = applyPrevNextLinkConfig(
    currentIndex > -1 ? entries[currentIndex + 1] : void 0,
    paginationEnabled,
    config2.next
  );
  return { prev, next };
}
function applyPrevNextLinkConfig(link, paginationEnabled, config2) {
  if (config2 === false)
    return void 0;
  else if (config2 === true)
    return link;
  else if (typeof config2 === "string" && link) {
    return { ...link, label: config2 };
  } else if (typeof config2 === "object") {
    if (link) {
      return {
        ...link,
        label: config2.label ?? link.label,
        href: config2.link ?? link.href,
        // Explicitly remove sidebar link attributes for prev/next links.
        attrs: {}
      };
    } else if (config2.link && config2.label) {
      return makeLink(config2.link, config2.label, config2.link);
    }
  }
  return paginationEnabled ? link : void 0;
}
const stripExtension = (path) => path.replace(/\.\w+$/, "");

const $$Astro$m = createAstro("https://allrdy.io");
const $$Badge = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$Badge;
  const { variant = "default", text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span${addAttribute([["sl-badge", variant], "astro-lxjyz2di"], "class:list")}>${unescapeHTML(text)}</span>`;
}, "/Users/dubhe/d/site/node_modules/.pnpm/@astrojs+starlight@0.12.0_astro@3.5.1/node_modules/@astrojs/starlight/components/Badge.astro", void 0);

const $$Astro$l = createAstro("https://allrdy.io");
const $$SidebarSublist = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$SidebarSublist;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute([{ "top-level": !Astro2.props.nested }, "astro-n35ikydv"], "class:list")}>${Astro2.props.sublist.map((entry) => renderTemplate`<li class="astro-n35ikydv">${entry.type === "link" ? renderTemplate`<a${addAttribute(entry.href, "href")}${addAttribute(entry.isCurrent && "page", "aria-current")}${addAttribute([[{ large: !Astro2.props.nested }, entry.attrs.class], "astro-n35ikydv"], "class:list")}${spreadAttributes(entry.attrs)}><span class="astro-n35ikydv">${entry.label}</span>${entry.badge && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "class": "astro-n35ikydv" }, { "default": ($$result2) => renderTemplate`${" "}${renderComponent($$result2, "Badge", $$Badge, { "text": entry.badge.text, "variant": entry.isCurrent ? "outline" : entry.badge.variant, "class": "astro-n35ikydv" })}` })}`}</a>` : renderTemplate`<details${addAttribute(flattenSidebar(entry.entries).some((i) => i.isCurrent) || !entry.collapsed, "open")} class="astro-n35ikydv"><summary class="astro-n35ikydv"><div class="group-label astro-n35ikydv"><span class="large astro-n35ikydv">${entry.label}</span>${entry.badge && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "class": "astro-n35ikydv" }, { "default": ($$result2) => renderTemplate`${" "}${renderComponent($$result2, "Badge", $$Badge, { "text": entry.badge.text, "variant": entry.badge.variant, "class": "astro-n35ikydv" })}` })}`}</div>${renderComponent($$result, "Icon", $$Icon, { "name": "right-caret", "class": "caret astro-n35ikydv", "size": "1.25rem" })}</summary>${renderComponent($$result, "Astro.self", Astro2.self, { "sublist": entry.entries, "nested": true, "class": "astro-n35ikydv" })}</details>`}</li>`)}</ul>`;
}, "/Users/dubhe/d/site/node_modules/.pnpm/@astrojs+starlight@0.12.0_astro@3.5.1/node_modules/@astrojs/starlight/components/SidebarSublist.astro", void 0);

const $$Astro$k = createAstro("https://allrdy.io");
const $$Sidebar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$Sidebar;
  const { sidebar } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "SidebarSublist", $$SidebarSublist, { "sublist": sidebar })}${maybeRenderHead()}<div class="md:sl-hidden">${renderComponent($$result, "MobileMenuFooter", $$MobileMenuFooter, { ...Astro2.props })}</div>`;
}, "/Users/dubhe/d/site/node_modules/.pnpm/@astrojs+starlight@0.12.0_astro@3.5.1/node_modules/@astrojs/starlight/components/Sidebar.astro", void 0);

const $$Astro$j = createAstro("https://allrdy.io");
const $$MobileMenuFooter = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$MobileMenuFooter;
  return renderTemplate`${maybeRenderHead()}<div class="mobile-preferences sl-flex astro-vzjmiazd"><div class="sl-flex social-icons astro-vzjmiazd">${renderComponent($$result, "SocialIcons", $$SocialIcons, { ...Astro2.props, "class": "astro-vzjmiazd" })}</div>${renderComponent($$result, "ThemeSelect", $$ThemeSelect, { ...Astro2.props, "class": "astro-vzjmiazd" })}${renderComponent($$result, "LanguageSelect", $$LanguageSelect, { ...Astro2.props, "class": "astro-vzjmiazd" })}</div>`;
}, "/Users/dubhe/d/site/node_modules/.pnpm/@astrojs+starlight@0.12.0_astro@3.5.1/node_modules/@astrojs/starlight/components/MobileMenuFooter.astro", void 0);

const $$Astro$i = createAstro("https://allrdy.io");
const $$PageSidebar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$PageSidebar;
  return renderTemplate`${Astro2.props.toc && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "class": "astro-rbsmdips" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="lg:sl-hidden astro-rbsmdips">${renderComponent($$result2, "MobileTableOfContents", $$MobileTableOfContents, { ...Astro2.props, "class": "astro-rbsmdips" })}</div><div class="right-sidebar-panel sl-hidden lg:sl-block astro-rbsmdips"><div class="sl-container astro-rbsmdips">${renderComponent($$result2, "TableOfContents", $$TableOfContents, { ...Astro2.props, "class": "astro-rbsmdips" })}</div></div>` })}`}`;
}, "/Users/dubhe/d/site/node_modules/.pnpm/@astrojs+starlight@0.12.0_astro@3.5.1/node_modules/@astrojs/starlight/components/PageSidebar.astro", void 0);

const $$Astro$h = createAstro("https://allrdy.io");
const $$TableOfContentsList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$TableOfContentsList;
  const { toc, isMobile = false, depth = 0 } = Astro2.props;
  const $$definedVars = defineStyleVars([{ depth }]);
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute([{ isMobile }, "astro-7qyfcjpi"], "class:list")}${addAttribute($$definedVars, "style")}>${toc.map((heading) => renderTemplate`<li class="astro-7qyfcjpi"${addAttribute($$definedVars, "style")}><a${addAttribute("#" + heading.slug, "href")} class="astro-7qyfcjpi"${addAttribute($$definedVars, "style")}><span class="astro-7qyfcjpi"${addAttribute($$definedVars, "style")}>${heading.text}</span></a>${heading.children.length > 0 && renderTemplate`${renderComponent($$result, "Astro.self", Astro2.self, { "toc": heading.children, "depth": depth + 1, "isMobile": isMobile, "class": "astro-7qyfcjpi" })}`}</li>`)}</ul>`;
}, "/Users/dubhe/d/site/node_modules/.pnpm/@astrojs+starlight@0.12.0_astro@3.5.1/node_modules/@astrojs/starlight/components/TableOfContents/TableOfContentsList.astro", void 0);

const $$Astro$g = createAstro("https://allrdy.io");
const $$TableOfContents = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$TableOfContents;
  const { locale, toc } = Astro2.props;
  const t = useTranslations(locale);
  return renderTemplate`${toc && renderTemplate`${renderComponent($$result, "starlight-toc", "starlight-toc", { "data-min-h": toc.minHeadingLevel, "data-max-h": toc.maxHeadingLevel }, { "default": () => renderTemplate`${maybeRenderHead()}<nav aria-labelledby="starlight__on-this-page"><h2 id="starlight__on-this-page">${t("tableOfContents.onThisPage")}</h2>${renderComponent($$result, "TableOfContentsList", $$TableOfContentsList, { "toc": toc.items })}</nav>` })}`}`;
}, "/Users/dubhe/d/site/node_modules/.pnpm/@astrojs+starlight@0.12.0_astro@3.5.1/node_modules/@astrojs/starlight/components/TableOfContents.astro", void 0);

const $$Astro$f = createAstro("https://allrdy.io");
const $$MobileTableOfContents = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$MobileTableOfContents;
  const { locale, toc } = Astro2.props;
  const t = useTranslations(locale);
  return renderTemplate`${toc && renderTemplate`${renderComponent($$result, "mobile-starlight-toc", "mobile-starlight-toc", { "data-min-h": toc.minHeadingLevel, "data-max-h": toc.maxHeadingLevel, "class": "astro-tpyle4xc" }, { "default": () => renderTemplate`${maybeRenderHead()}<nav aria-labelledby="starlight__on-this-page--mobile" class="astro-tpyle4xc"><details id="starlight__mobile-toc" class="astro-tpyle4xc"><summary id="starlight__on-this-page--mobile" class="sl-flex astro-tpyle4xc"><div class="toggle sl-flex astro-tpyle4xc">${t("tableOfContents.onThisPage")}${renderComponent($$result, "Icon", $$Icon, { "name": "right-caret", "class": "caret astro-tpyle4xc", "size": "1rem" })}</div><span class="display-current astro-tpyle4xc"></span></summary><div class="dropdown astro-tpyle4xc">${renderComponent($$result, "TableOfContentsList", $$TableOfContentsList, { "toc": toc.items, "isMobile": true, "class": "astro-tpyle4xc" })}</div></details></nav>` })}`}`;
}, "/Users/dubhe/d/site/node_modules/.pnpm/@astrojs+starlight@0.12.0_astro@3.5.1/node_modules/@astrojs/starlight/components/MobileTableOfContents.astro", void 0);

const $$Astro$e = createAstro("https://allrdy.io");
const $$Banner = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Banner;
  const { banner } = Astro2.props.entry.data;
  return renderTemplate`${banner && renderTemplate`${maybeRenderHead()}<div class="sl-banner astro-ihjvr3rf">${unescapeHTML(banner.content)}</div>`}`;
}, "/Users/dubhe/d/site/node_modules/.pnpm/@astrojs+starlight@0.12.0_astro@3.5.1/node_modules/@astrojs/starlight/components/Banner.astro", void 0);

const $$Astro$d = createAstro("https://allrdy.io");
const $$ContentPanel = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$ContentPanel;
  return renderTemplate`${maybeRenderHead()}<div class="content-panel astro-3ph66xio"><div class="sl-container astro-3ph66xio">${renderSlot($$result, $$slots["default"])}</div></div>`;
}, "/Users/dubhe/d/site/node_modules/.pnpm/@astrojs+starlight@0.12.0_astro@3.5.1/node_modules/@astrojs/starlight/components/ContentPanel.astro", void 0);

const $$Astro$c = createAstro("https://allrdy.io");
const $$PageTitle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$PageTitle;
  return renderTemplate`${maybeRenderHead()}<h1${addAttribute(PAGE_TITLE_ID, "id")} class="astro-p642o6na">${Astro2.props.entry.data.title}</h1>`;
}, "/Users/dubhe/d/site/node_modules/.pnpm/@astrojs+starlight@0.12.0_astro@3.5.1/node_modules/@astrojs/starlight/components/PageTitle.astro", void 0);

const $$Astro$b = createAstro("https://allrdy.io");
const $$FallbackContentNotice = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$FallbackContentNotice;
  const t = useTranslations(Astro2.props.locale);
  return renderTemplate`${maybeRenderHead()}<p class="sl-flex astro-v726v73f">${renderComponent($$result, "Icon", $$Icon, { "name": "warning", "size": "1.5em", "color": "var(--sl-color-orange-high)", "class": "astro-v726v73f" })}<span class="astro-v726v73f">${t("i18n.untranslatedContent")}</span></p>`;
}, "/Users/dubhe/d/site/node_modules/.pnpm/@astrojs+starlight@0.12.0_astro@3.5.1/node_modules/@astrojs/starlight/components/FallbackContentNotice.astro", void 0);

const $$Astro$a = createAstro("https://allrdy.io");
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(image.attributes)}>`;
}, "/Users/dubhe/d/site/node_modules/.pnpm/astro@3.5.1_typescript@5.2.2/node_modules/astro/components/Image.astro", void 0);

const $$Astro$9 = createAstro("https://allrdy.io");
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg", "jpg", "jpeg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({ ...props, format, widths: props.widths, densities: props.densities })
    )
  );
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(props.src) && specialFormatsFallback.includes(props.src.format)) {
    resultFallbackFormat = props.src.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const imgAdditionalAttributes = {};
  const sourceAdditionaAttributes = {};
  if (props.sizes) {
    sourceAdditionaAttributes.sizes = props.sizes;
  }
  if (fallbackImage.srcSet.values.length > 0) {
    imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}>${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute("image/" + image.options.format, "type")}${spreadAttributes(sourceAdditionaAttributes)}>`;
  })}<img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(imgAdditionalAttributes)}${spreadAttributes(fallbackImage.attributes)}></picture>`;
}, "/Users/dubhe/d/site/node_modules/.pnpm/astro@3.5.1_typescript@5.2.2/node_modules/astro/components/Picture.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"domains":[],"remotePatterns":[]};
					new URL("file:///Users/dubhe/d/site/allrdy/dist/");
					const getImage = async (options) => await getImage$1(options, imageConfig);

const $$Astro$8 = createAstro("https://allrdy.io");
const $$CallToAction = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$CallToAction;
  const { link, variant, icon } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute([["sl-flex action", variant], "astro-4u7c4yqf"], "class:list")}${addAttribute(link, "href")}>${renderSlot($$result, $$slots["default"])}${icon?.type === "icon" && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon.name, "size": "1.5rem", "class": "astro-4u7c4yqf" })}`}${icon?.type === "raw" && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(icon.html)}` })}`}</a>`;
}, "/Users/dubhe/d/site/node_modules/.pnpm/@astrojs+starlight@0.12.0_astro@3.5.1/node_modules/@astrojs/starlight/components/CallToAction.astro", void 0);

const $$Astro$7 = createAstro("https://allrdy.io");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Hero;
  const { data } = Astro2.props.entry;
  const { title = data.title, tagline, image, actions = [] } = data.hero || {};
  const imageAttrs = {
    loading: "eager",
    decoding: "async",
    width: 400,
    height: 400,
    alt: image?.alt || ""
  };
  let darkImage;
  let lightImage;
  let rawHtml;
  if (image) {
    if ("file" in image) {
      darkImage = image.file;
    } else if ("dark" in image) {
      darkImage = image.dark;
      lightImage = image.light;
    } else {
      rawHtml = image.html;
    }
  }
  return renderTemplate`${maybeRenderHead()}<div class="hero astro-wwrom5cq">${darkImage && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": darkImage, ...imageAttrs, "class:list": [{ "light:sl-hidden": Boolean(lightImage) }, "astro-wwrom5cq"] })}`}${lightImage && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": lightImage, ...imageAttrs, "class": "dark:sl-hidden astro-wwrom5cq" })}`}${rawHtml && renderTemplate`<div class="hero-html sl-flex astro-wwrom5cq">${unescapeHTML(rawHtml)}</div>`}<div class="sl-flex stack astro-wwrom5cq"><div class="sl-flex copy astro-wwrom5cq"><h1${addAttribute(PAGE_TITLE_ID, "id")} data-page-title class="astro-wwrom5cq">${unescapeHTML(title)}</h1>${tagline && renderTemplate`<div class="tagline astro-wwrom5cq">${unescapeHTML(tagline)}</div>`}</div>${actions.length > 0 && renderTemplate`<div class="sl-flex actions astro-wwrom5cq">${actions.map(({ text, ...attrs }) => renderTemplate`${renderComponent($$result, "CallToAction", $$CallToAction, { ...attrs, "class": "astro-wwrom5cq" }, { "default": ($$result2) => renderTemplate`${unescapeHTML(text)}` })}`)}</div>`}</div></div>`;
}, "/Users/dubhe/d/site/node_modules/.pnpm/@astrojs+starlight@0.12.0_astro@3.5.1/node_modules/@astrojs/starlight/components/Hero.astro", void 0);

const $$Astro$6 = createAstro("https://allrdy.io");
const $$MarkdownContent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$MarkdownContent;
  return renderTemplate`${maybeRenderHead()}<div class="content astro-bhuxxw3s">${renderSlot($$result, $$slots["default"])}</div>`;
}, "/Users/dubhe/d/site/node_modules/.pnpm/@astrojs+starlight@0.12.0_astro@3.5.1/node_modules/@astrojs/starlight/components/MarkdownContent.astro", void 0);

const $$Astro$5 = createAstro("https://allrdy.io");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="astro-dodgr4nn"><div class="meta sl-flex astro-dodgr4nn">${renderComponent($$result, "EditLink", $$EditLink, { ...Astro2.props, "class": "astro-dodgr4nn" })}${renderComponent($$result, "LastUpdated", $$LastUpdated, { ...Astro2.props, "class": "astro-dodgr4nn" })}</div>${renderComponent($$result, "Pagination", $$Pagination, { ...Astro2.props, "class": "astro-dodgr4nn" })}</footer>`;
}, "/Users/dubhe/d/site/node_modules/.pnpm/@astrojs+starlight@0.12.0_astro@3.5.1/node_modules/@astrojs/starlight/components/Footer.astro", void 0);

const $$Astro$4 = createAstro("https://allrdy.io");
const $$LastUpdated = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$LastUpdated;
  const { lang, lastUpdated, locale } = Astro2.props;
  const t = useTranslations(locale);
  return renderTemplate`${lastUpdated && renderTemplate`${maybeRenderHead()}<p>${t("page.lastUpdated")}${" "}<time${addAttribute(lastUpdated.toISOString(), "datetime")}>${lastUpdated.toLocaleDateString(lang, { dateStyle: "medium" })}</time></p>`}`;
}, "/Users/dubhe/d/site/node_modules/.pnpm/@astrojs+starlight@0.12.0_astro@3.5.1/node_modules/@astrojs/starlight/components/LastUpdated.astro", void 0);

const $$Astro$3 = createAstro("https://allrdy.io");
const $$Pagination = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { dir, locale, pagination } = Astro2.props;
  const { prev, next } = pagination;
  const isRtl = dir === "rtl";
  const t = useTranslations(locale);
  return renderTemplate`${maybeRenderHead()}<div class="pagination-links astro-ue5ld5jn"${addAttribute(dir, "dir")}>${prev && renderTemplate`<a${addAttribute(prev.href, "href")} rel="prev" class="astro-ue5ld5jn">${renderComponent($$result, "Icon", $$Icon, { "name": isRtl ? "right-arrow" : "left-arrow", "size": "1.5rem", "class": "astro-ue5ld5jn" })}<span class="astro-ue5ld5jn">${t("page.previousLink")}<br class="astro-ue5ld5jn"><span class="link-title astro-ue5ld5jn">${prev.label}</span></span></a>`}${next && renderTemplate`<a${addAttribute(next.href, "href")} rel="next" class="astro-ue5ld5jn">${renderComponent($$result, "Icon", $$Icon, { "name": isRtl ? "left-arrow" : "right-arrow", "size": "1.5rem", "class": "astro-ue5ld5jn" })}<span class="astro-ue5ld5jn">${t("page.nextLink")}<br class="astro-ue5ld5jn"><span class="link-title astro-ue5ld5jn">${next.label}</span></span></a>`}</div>`;
}, "/Users/dubhe/d/site/node_modules/.pnpm/@astrojs+starlight@0.12.0_astro@3.5.1/node_modules/@astrojs/starlight/components/Pagination.astro", void 0);

const $$Astro$2 = createAstro("https://allrdy.io");
const $$EditLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$EditLink;
  const t = useTranslations(Astro2.props.locale);
  const { editUrl } = Astro2.props;
  return renderTemplate`${editUrl && renderTemplate`${maybeRenderHead()}<a${addAttribute(editUrl, "href")} class="sl-flex astro-xcvco5co">${renderComponent($$result, "Icon", $$Icon, { "name": "pencil", "size": "1.2em", "class": "astro-xcvco5co" })}${t("page.editLink")}</a>`}`;
}, "/Users/dubhe/d/site/node_modules/.pnpm/@astrojs+starlight@0.12.0_astro@3.5.1/node_modules/@astrojs/starlight/components/EditLink.astro", void 0);

const $$Astro$1 = createAstro("https://allrdy.io");
const $$Page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Page;
  const pagefindEnabled = Astro2.props.entry.slug !== "404" && !Astro2.props.entry.slug.endsWith("/404") && Astro2.props.entry.data.pagefind !== false;
  return renderTemplate`<html${addAttribute(Astro2.props.lang, "lang")}${addAttribute(Astro2.props.dir, "dir")}${addAttribute(Boolean(Astro2.props.toc), "data-has-toc")}${addAttribute(Astro2.props.hasSidebar, "data-has-sidebar")}${addAttribute(Boolean(Astro2.props.entry.data.hero), "data-has-hero")} class="astro-jilf3lya"><head>${renderComponent($$result, "Head", $$Head, { ...Astro2.props, "class": "astro-jilf3lya" })}${renderComponent($$result, "ThemeProvider", $$ThemeProvider, { ...Astro2.props, "class": "astro-jilf3lya" })}${renderHead()}</head><body class="astro-jilf3lya">${renderComponent($$result, "SkipLink", $$SkipLink, { ...Astro2.props, "class": "astro-jilf3lya" })}${renderComponent($$result, "PageFrame", $$PageFrame, { ...Astro2.props, "class": "astro-jilf3lya" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "TwoColumnContent", $$TwoColumnContent, { ...Astro2.props, "class": "astro-jilf3lya" }, { "default": ($$result3) => renderTemplate`<main${addAttribute(pagefindEnabled, "data-pagefind-body")}${addAttribute(Astro2.props.entryMeta.lang, "lang")}${addAttribute(Astro2.props.entryMeta.dir, "dir")} class="astro-jilf3lya">${renderComponent($$result3, "Banner", $$Banner, { ...Astro2.props, "class": "astro-jilf3lya" })}${Astro2.props.entry.data.hero ? renderTemplate`${renderComponent($$result3, "ContentPanel", $$ContentPanel, { ...Astro2.props, "class": "astro-jilf3lya" }, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "Hero", $$Hero, { ...Astro2.props, "class": "astro-jilf3lya" })}${renderComponent($$result4, "MarkdownContent", $$MarkdownContent, { ...Astro2.props, "class": "astro-jilf3lya" }, { "default": ($$result5) => renderTemplate`${renderSlot($$result5, $$slots["default"])}` })}${renderComponent($$result4, "Footer", $$Footer, { ...Astro2.props, "class": "astro-jilf3lya" })}` })}` : renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "class": "astro-jilf3lya" }, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "ContentPanel", $$ContentPanel, { ...Astro2.props, "class": "astro-jilf3lya" }, { "default": ($$result5) => renderTemplate`${renderComponent($$result5, "PageTitle", $$PageTitle, { ...Astro2.props, "class": "astro-jilf3lya" })}${Astro2.props.isFallback && renderTemplate`${renderComponent($$result5, "FallbackContentNotice", $$FallbackContentNotice, { ...Astro2.props, "class": "astro-jilf3lya" })}`}` })}${renderComponent($$result4, "ContentPanel", $$ContentPanel, { ...Astro2.props, "class": "astro-jilf3lya" }, { "default": ($$result5) => renderTemplate`${renderComponent($$result5, "MarkdownContent", $$MarkdownContent, { ...Astro2.props, "class": "astro-jilf3lya" }, { "default": ($$result6) => renderTemplate`${renderSlot($$result6, $$slots["default"])}` })}${renderComponent($$result5, "Footer", $$Footer, { ...Astro2.props, "class": "astro-jilf3lya" })}` })}` })}`}</main>`, "right-sidebar": ($$result3) => renderTemplate`${renderComponent($$result3, "PageSidebar", $$PageSidebar, { "slot": "right-sidebar", ...Astro2.props, "class": "astro-jilf3lya" })}` })}`, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "slot": "header", ...Astro2.props, "class": "astro-jilf3lya" })}`, "sidebar": ($$result2) => renderTemplate`${Astro2.props.hasSidebar && renderTemplate`${renderComponent($$result2, "Sidebar", $$Sidebar, { "slot": "sidebar", ...Astro2.props, "class": "astro-jilf3lya" })}`}` })}</body></html>`;
}, "/Users/dubhe/d/site/node_modules/.pnpm/@astrojs+starlight@0.12.0_astro@3.5.1/node_modules/@astrojs/starlight/components/Page.astro", void 0);

const project = {"root":"file:///Users/dubhe/d/site/allrdy/","srcDir":"file:///Users/dubhe/d/site/allrdy/src/"};

function generateToC(headings, { minHeadingLevel, maxHeadingLevel, title }) {
  headings = headings.filter(({ depth }) => depth >= minHeadingLevel && depth <= maxHeadingLevel);
  const toc = [{ depth: 2, slug: PAGE_TITLE_ID, text: title, children: [] }];
  for (const heading of headings)
    injectChild(toc, { ...heading, children: [] });
  return toc;
}
function injectChild(items, item) {
  const lastItem = items.at(-1);
  if (!lastItem || lastItem.depth >= item.depth) {
    items.push(item);
  } else {
    return injectChild(lastItem.children, item);
  }
}

var crossSpawn$1 = {exports: {}};

var windows;
var hasRequiredWindows;

function requireWindows () {
	if (hasRequiredWindows) return windows;
	hasRequiredWindows = 1;
	windows = isexe;
	isexe.sync = sync;

	var fs = require$$0$1;

	function checkPathExt (path, options) {
	  var pathext = options.pathExt !== undefined ?
	    options.pathExt : process.env.PATHEXT;

	  if (!pathext) {
	    return true
	  }

	  pathext = pathext.split(';');
	  if (pathext.indexOf('') !== -1) {
	    return true
	  }
	  for (var i = 0; i < pathext.length; i++) {
	    var p = pathext[i].toLowerCase();
	    if (p && path.substr(-p.length).toLowerCase() === p) {
	      return true
	    }
	  }
	  return false
	}

	function checkStat (stat, path, options) {
	  if (!stat.isSymbolicLink() && !stat.isFile()) {
	    return false
	  }
	  return checkPathExt(path, options)
	}

	function isexe (path, options, cb) {
	  fs.stat(path, function (er, stat) {
	    cb(er, er ? false : checkStat(stat, path, options));
	  });
	}

	function sync (path, options) {
	  return checkStat(fs.statSync(path), path, options)
	}
	return windows;
}

var mode;
var hasRequiredMode;

function requireMode () {
	if (hasRequiredMode) return mode;
	hasRequiredMode = 1;
	mode = isexe;
	isexe.sync = sync;

	var fs = require$$0$1;

	function isexe (path, options, cb) {
	  fs.stat(path, function (er, stat) {
	    cb(er, er ? false : checkStat(stat, options));
	  });
	}

	function sync (path, options) {
	  return checkStat(fs.statSync(path), options)
	}

	function checkStat (stat, options) {
	  return stat.isFile() && checkMode(stat, options)
	}

	function checkMode (stat, options) {
	  var mod = stat.mode;
	  var uid = stat.uid;
	  var gid = stat.gid;

	  var myUid = options.uid !== undefined ?
	    options.uid : process.getuid && process.getuid();
	  var myGid = options.gid !== undefined ?
	    options.gid : process.getgid && process.getgid();

	  var u = parseInt('100', 8);
	  var g = parseInt('010', 8);
	  var o = parseInt('001', 8);
	  var ug = u | g;

	  var ret = (mod & o) ||
	    (mod & g) && gid === myGid ||
	    (mod & u) && uid === myUid ||
	    (mod & ug) && myUid === 0;

	  return ret
	}
	return mode;
}

var core;
if (process.platform === 'win32' || commonjsGlobal.TESTING_WINDOWS) {
  core = requireWindows();
} else {
  core = requireMode();
}

var isexe_1 = isexe$1;
isexe$1.sync = sync;

function isexe$1 (path, options, cb) {
  if (typeof options === 'function') {
    cb = options;
    options = {};
  }

  if (!cb) {
    if (typeof Promise !== 'function') {
      throw new TypeError('callback not provided')
    }

    return new Promise(function (resolve, reject) {
      isexe$1(path, options || {}, function (er, is) {
        if (er) {
          reject(er);
        } else {
          resolve(is);
        }
      });
    })
  }

  core(path, options || {}, function (er, is) {
    // ignore EACCES because that just means we aren't allowed to run it
    if (er) {
      if (er.code === 'EACCES' || options && options.ignoreErrors) {
        er = null;
        is = false;
      }
    }
    cb(er, is);
  });
}

function sync (path, options) {
  // my kingdom for a filtered catch
  try {
    return core.sync(path, options || {})
  } catch (er) {
    if (options && options.ignoreErrors || er.code === 'EACCES') {
      return false
    } else {
      throw er
    }
  }
}

const index$3 = /*@__PURE__*/getDefaultExportFromCjs(isexe_1);

const isexe$2 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: index$3
}, [isexe_1]);

const require$$1$4 = /*@__PURE__*/getAugmentedNamespace(isexe$2);

const isWindows = process.platform === 'win32' ||
    process.env.OSTYPE === 'cygwin' ||
    process.env.OSTYPE === 'msys';

const path$2 = path$3;
const COLON = isWindows ? ';' : ':';
const isexe = require$$1$4;

const getNotFoundError = (cmd) =>
  Object.assign(new Error(`not found: ${cmd}`), { code: 'ENOENT' });

const getPathInfo = (cmd, opt) => {
  const colon = opt.colon || COLON;

  // If it has a slash, then we don't bother searching the pathenv.
  // just check the file itself, and that's it.
  const pathEnv = cmd.match(/\//) || isWindows && cmd.match(/\\/) ? ['']
    : (
      [
        // windows always checks the cwd first
        ...(isWindows ? [process.cwd()] : []),
        ...(opt.path || process.env.PATH ||
          /* istanbul ignore next: very unusual */ '').split(colon),
      ]
    );
  const pathExtExe = isWindows
    ? opt.pathExt || process.env.PATHEXT || '.EXE;.CMD;.BAT;.COM'
    : '';
  const pathExt = isWindows ? pathExtExe.split(colon) : [''];

  if (isWindows) {
    if (cmd.indexOf('.') !== -1 && pathExt[0] !== '')
      pathExt.unshift('');
  }

  return {
    pathEnv,
    pathExt,
    pathExtExe,
  }
};

const which$1 = (cmd, opt, cb) => {
  if (typeof opt === 'function') {
    cb = opt;
    opt = {};
  }
  if (!opt)
    opt = {};

  const { pathEnv, pathExt, pathExtExe } = getPathInfo(cmd, opt);
  const found = [];

  const step = i => new Promise((resolve, reject) => {
    if (i === pathEnv.length)
      return opt.all && found.length ? resolve(found)
        : reject(getNotFoundError(cmd))

    const ppRaw = pathEnv[i];
    const pathPart = /^".*"$/.test(ppRaw) ? ppRaw.slice(1, -1) : ppRaw;

    const pCmd = path$2.join(pathPart, cmd);
    const p = !pathPart && /^\.[\\\/]/.test(cmd) ? cmd.slice(0, 2) + pCmd
      : pCmd;

    resolve(subStep(p, i, 0));
  });

  const subStep = (p, i, ii) => new Promise((resolve, reject) => {
    if (ii === pathExt.length)
      return resolve(step(i + 1))
    const ext = pathExt[ii];
    isexe(p + ext, { pathExt: pathExtExe }, (er, is) => {
      if (!er && is) {
        if (opt.all)
          found.push(p + ext);
        else
          return resolve(p + ext)
      }
      return resolve(subStep(p, i, ii + 1))
    });
  });

  return cb ? step(0).then(res => cb(null, res), cb) : step(0)
};

const whichSync = (cmd, opt) => {
  opt = opt || {};

  const { pathEnv, pathExt, pathExtExe } = getPathInfo(cmd, opt);
  const found = [];

  for (let i = 0; i < pathEnv.length; i ++) {
    const ppRaw = pathEnv[i];
    const pathPart = /^".*"$/.test(ppRaw) ? ppRaw.slice(1, -1) : ppRaw;

    const pCmd = path$2.join(pathPart, cmd);
    const p = !pathPart && /^\.[\\\/]/.test(cmd) ? cmd.slice(0, 2) + pCmd
      : pCmd;

    for (let j = 0; j < pathExt.length; j ++) {
      const cur = p + pathExt[j];
      try {
        const is = isexe.sync(cur, { pathExt: pathExtExe });
        if (is) {
          if (opt.all)
            found.push(cur);
          else
            return cur
        }
      } catch (ex) {}
    }
  }

  if (opt.all && found.length)
    return found

  if (opt.nothrow)
    return null

  throw getNotFoundError(cmd)
};

var which_1 = which$1;
which$1.sync = whichSync;

const which$2 = /*@__PURE__*/getDefaultExportFromCjs(which_1);

const which$3 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: which$2
}, [which_1]);

const require$$1$3 = /*@__PURE__*/getAugmentedNamespace(which$3);

var pathKey$3 = {exports: {}};

const pathKey$1 = (options = {}) => {
	const environment = options.env || process.env;
	const platform = options.platform || process.platform;

	if (platform !== 'win32') {
		return 'PATH';
	}

	return Object.keys(environment).reverse().find(key => key.toUpperCase() === 'PATH') || 'Path';
};

pathKey$3.exports = pathKey$1;
// TODO: Remove this for the next major release
pathKey$3.exports.default = pathKey$1;

var pathKeyExports = pathKey$3.exports;
const index$2 = /*@__PURE__*/getDefaultExportFromCjs(pathKeyExports);

const pathKey$2 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: index$2
}, [pathKeyExports]);

const require$$2$2 = /*@__PURE__*/getAugmentedNamespace(pathKey$2);

const path$1 = path$3;
const which = require$$1$3;
const getPathKey = require$$2$2;

function resolveCommandAttempt(parsed, withoutPathExt) {
    const env = parsed.options.env || process.env;
    const cwd = process.cwd();
    const hasCustomCwd = parsed.options.cwd != null;
    // Worker threads do not have process.chdir()
    const shouldSwitchCwd = hasCustomCwd && process.chdir !== undefined && !process.chdir.disabled;

    // If a custom `cwd` was specified, we need to change the process cwd
    // because `which` will do stat calls but does not support a custom cwd
    if (shouldSwitchCwd) {
        try {
            process.chdir(parsed.options.cwd);
        } catch (err) {
            /* Empty */
        }
    }

    let resolved;

    try {
        resolved = which.sync(parsed.command, {
            path: env[getPathKey({ env })],
            pathExt: withoutPathExt ? path$1.delimiter : undefined,
        });
    } catch (e) {
        /* Empty */
    } finally {
        if (shouldSwitchCwd) {
            process.chdir(cwd);
        }
    }

    // If we successfully resolved, ensure that an absolute path is returned
    // Note that when a custom `cwd` was used, we need to resolve to an absolute path based on it
    if (resolved) {
        resolved = path$1.resolve(hasCustomCwd ? parsed.options.cwd : '', resolved);
    }

    return resolved;
}

function resolveCommand$1(parsed) {
    return resolveCommandAttempt(parsed) || resolveCommandAttempt(parsed, true);
}

var resolveCommand_1 = resolveCommand$1;

const resolveCommand$2 = /*@__PURE__*/getDefaultExportFromCjs(resolveCommand_1);

const resolveCommand$3 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: resolveCommand$2
}, [resolveCommand_1]);

const require$$1$2 = /*@__PURE__*/getAugmentedNamespace(resolveCommand$3);

var _escape$1 = {};

// See http://www.robvanderwoude.com/escapechars.php
const metaCharsRegExp = /([()\][%!^"`<>&|;, *?])/g;

function escapeCommand(arg) {
    // Escape meta chars
    arg = arg.replace(metaCharsRegExp, '^$1');

    return arg;
}

function escapeArgument(arg, doubleEscapeMetaChars) {
    // Convert to string
    arg = `${arg}`;

    // Algorithm below is based on https://qntm.org/cmd

    // Sequence of backslashes followed by a double quote:
    // double up all the backslashes and escape the double quote
    arg = arg.replace(/(\\*)"/g, '$1$1\\"');

    // Sequence of backslashes followed by the end of the string
    // (which will become a double quote later):
    // double up all the backslashes
    arg = arg.replace(/(\\*)$/, '$1$1');

    // All other backslashes occur literally

    // Quote the whole thing:
    arg = `"${arg}"`;

    // Escape meta chars
    arg = arg.replace(metaCharsRegExp, '^$1');

    // Double escape meta chars if necessary
    if (doubleEscapeMetaChars) {
        arg = arg.replace(metaCharsRegExp, '^$1');
    }

    return arg;
}

var command = _escape$1.command = escapeCommand;
var argument = _escape$1.argument = escapeArgument;

const _escape = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	argument,
	command,
	default: _escape$1
}, [_escape$1]);

const require$$2$1 = /*@__PURE__*/getAugmentedNamespace(_escape);

var shebangRegex$1 = /^#!(.*)/;

const index$1 = /*@__PURE__*/getDefaultExportFromCjs(shebangRegex$1);

const shebangRegex$2 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: index$1
}, [shebangRegex$1]);

const require$$0 = /*@__PURE__*/getAugmentedNamespace(shebangRegex$2);

const shebangRegex = require$$0;

var shebangCommand$1 = (string = '') => {
	const match = string.match(shebangRegex);

	if (!match) {
		return null;
	}

	const [path, argument] = match[0].replace(/#! ?/, '').split(' ');
	const binary = path.split('/').pop();

	if (binary === 'env') {
		return argument;
	}

	return argument ? `${binary} ${argument}` : binary;
};

const index = /*@__PURE__*/getDefaultExportFromCjs(shebangCommand$1);

const shebangCommand$2 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: index
}, [shebangCommand$1]);

const require$$1$1 = /*@__PURE__*/getAugmentedNamespace(shebangCommand$2);

const fs = require$$0$1;
const shebangCommand = require$$1$1;

function readShebang$1(command) {
    // Read the first 150 bytes from the file
    const size = 150;
    const buffer = Buffer.alloc(size);

    let fd;

    try {
        fd = fs.openSync(command, 'r');
        fs.readSync(fd, buffer, 0, size, 0);
        fs.closeSync(fd);
    } catch (e) { /* Empty */ }

    // Attempt to extract shebang (null is returned if not a shebang)
    return shebangCommand(buffer.toString());
}

var readShebang_1 = readShebang$1;

const readShebang$2 = /*@__PURE__*/getDefaultExportFromCjs(readShebang_1);

const readShebang$3 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: readShebang$2
}, [readShebang_1]);

const require$$3 = /*@__PURE__*/getAugmentedNamespace(readShebang$3);

const path = path$3;
const resolveCommand = require$$1$2;
const escape = require$$2$1;
const readShebang = require$$3;

const isWin$1 = process.platform === 'win32';
const isExecutableRegExp = /\.(?:com|exe)$/i;
const isCmdShimRegExp = /node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;

function detectShebang(parsed) {
    parsed.file = resolveCommand(parsed);

    const shebang = parsed.file && readShebang(parsed.file);

    if (shebang) {
        parsed.args.unshift(parsed.file);
        parsed.command = shebang;

        return resolveCommand(parsed);
    }

    return parsed.file;
}

function parseNonShell(parsed) {
    if (!isWin$1) {
        return parsed;
    }

    // Detect & add support for shebangs
    const commandFile = detectShebang(parsed);

    // We don't need a shell if the command filename is an executable
    const needsShell = !isExecutableRegExp.test(commandFile);

    // If a shell is required, use cmd.exe and take care of escaping everything correctly
    // Note that `forceShell` is an hidden option used only in tests
    if (parsed.options.forceShell || needsShell) {
        // Need to double escape meta chars if the command is a cmd-shim located in `node_modules/.bin/`
        // The cmd-shim simply calls execute the package bin file with NodeJS, proxying any argument
        // Because the escape of metachars with ^ gets interpreted when the cmd.exe is first called,
        // we need to double escape them
        const needsDoubleEscapeMetaChars = isCmdShimRegExp.test(commandFile);

        // Normalize posix paths into OS compatible paths (e.g.: foo/bar -> foo\bar)
        // This is necessary otherwise it will always fail with ENOENT in those cases
        parsed.command = path.normalize(parsed.command);

        // Escape command & arguments
        parsed.command = escape.command(parsed.command);
        parsed.args = parsed.args.map((arg) => escape.argument(arg, needsDoubleEscapeMetaChars));

        const shellCommand = [parsed.command].concat(parsed.args).join(' ');

        parsed.args = ['/d', '/s', '/c', `"${shellCommand}"`];
        parsed.command = process.env.comspec || 'cmd.exe';
        parsed.options.windowsVerbatimArguments = true; // Tell node's spawn that the arguments are already escaped
    }

    return parsed;
}

function parse$1(command, args, options) {
    // Normalize arguments, similar to nodejs
    if (args && !Array.isArray(args)) {
        options = args;
        args = null;
    }

    args = args ? args.slice(0) : []; // Clone array to avoid changing the original
    options = Object.assign({}, options); // Clone object to avoid changing the original

    // Build our parsed object
    const parsed = {
        command,
        args,
        options,
        file: undefined,
        original: {
            command,
            args,
        },
    };

    // Delegate further parsing to shell or non-shell
    return options.shell ? parsed : parseNonShell(parsed);
}

var parse_1 = parse$1;

const parse$2 = /*@__PURE__*/getDefaultExportFromCjs(parse_1);

const parse$3 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: parse$2
}, [parse_1]);

const require$$1 = /*@__PURE__*/getAugmentedNamespace(parse$3);

const isWin = process.platform === 'win32';

function notFoundError(original, syscall) {
    return Object.assign(new Error(`${syscall} ${original.command} ENOENT`), {
        code: 'ENOENT',
        errno: 'ENOENT',
        syscall: `${syscall} ${original.command}`,
        path: original.command,
        spawnargs: original.args,
    });
}

function hookChildProcess(cp, parsed) {
    if (!isWin) {
        return;
    }

    const originalEmit = cp.emit;

    cp.emit = function (name, arg1) {
        // If emitting "exit" event and exit code is 1, we need to check if
        // the command exists and emit an "error" instead
        // See https://github.com/IndigoUnited/node-cross-spawn/issues/16
        if (name === 'exit') {
            const err = verifyENOENT(arg1, parsed);

            if (err) {
                return originalEmit.call(cp, 'error', err);
            }
        }

        return originalEmit.apply(cp, arguments); // eslint-disable-line prefer-rest-params
    };
}

function verifyENOENT(status, parsed) {
    if (isWin && status === 1 && !parsed.file) {
        return notFoundError(parsed.original, 'spawn');
    }

    return null;
}

function verifyENOENTSync(status, parsed) {
    if (isWin && status === 1 && !parsed.file) {
        return notFoundError(parsed.original, 'spawnSync');
    }

    return null;
}

var enoent$1 = {
    hookChildProcess,
    verifyENOENT,
    verifyENOENTSync,
    notFoundError,
};

const enoent$2 = /*@__PURE__*/getDefaultExportFromCjs(enoent$1);

const enoent$3 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: enoent$2
}, [enoent$1]);

const require$$2 = /*@__PURE__*/getAugmentedNamespace(enoent$3);

const cp = require$$0$2;
const parse = require$$1;
const enoent = require$$2;

function spawn(command, args, options) {
    // Parse the arguments
    const parsed = parse(command, args, options);

    // Spawn the child process
    const spawned = cp.spawn(parsed.command, parsed.args, parsed.options);

    // Hook into child process "exit" event to emit an error if the command
    // does not exists, see: https://github.com/IndigoUnited/node-cross-spawn/issues/16
    enoent.hookChildProcess(spawned, parsed);

    return spawned;
}

function spawnSync(command, args, options) {
    // Parse the arguments
    const parsed = parse(command, args, options);

    // Spawn the child process
    const result = cp.spawnSync(parsed.command, parsed.args, parsed.options);

    // Analyze if the command does not exist, see: https://github.com/IndigoUnited/node-cross-spawn/issues/16
    result.error = result.error || enoent.verifyENOENTSync(result.status, parsed);

    return result;
}

crossSpawn$1.exports = spawn;
crossSpawn$1.exports.spawn = spawn;
crossSpawn$1.exports.sync = spawnSync;

crossSpawn$1.exports._parse = parse;
crossSpawn$1.exports._enoent = enoent;

var crossSpawnExports = crossSpawn$1.exports;
const crossSpawn = /*@__PURE__*/getDefaultExportFromCjs(crossSpawnExports);

function stripFinalNewline(input) {
	const LF = typeof input === 'string' ? '\n' : '\n'.charCodeAt();
	const CR = typeof input === 'string' ? '\r' : '\r'.charCodeAt();

	if (input[input.length - 1] === LF) {
		input = input.slice(0, -1);
	}

	if (input[input.length - 1] === CR) {
		input = input.slice(0, -1);
	}

	return input;
}

function pathKey(options = {}) {
	const {
		env = process.env,
		platform = process.platform
	} = options;

	if (platform !== 'win32') {
		return 'PATH';
	}

	return Object.keys(env).reverse().find(key => key.toUpperCase() === 'PATH') || 'Path';
}

function npmRunPath(options = {}) {
	const {
		cwd = process$2.cwd(),
		path: path_ = process$2.env[pathKey()],
		execPath = process$2.execPath,
	} = options;

	let previous;
	const cwdString = cwd instanceof URL ? url$1.fileURLToPath(cwd) : cwd;
	let cwdPath = path$4.resolve(cwdString);
	const result = [];

	while (previous !== cwdPath) {
		result.push(path$4.join(cwdPath, 'node_modules/.bin'));
		previous = cwdPath;
		cwdPath = path$4.resolve(cwdPath, '..');
	}

	// Ensure the running `node` binary is used.
	result.push(path$4.resolve(cwdString, execPath, '..'));

	return [...result, path_].join(path$4.delimiter);
}

function npmRunPathEnv({env = process$2.env, ...options} = {}) {
	env = {...env};

	const path = pathKey({env});
	options.path = env[path];
	env[path] = npmRunPath(options);

	return env;
}

const getRealtimeSignals=()=>{
const length=SIGRTMAX-SIGRTMIN+1;
return Array.from({length},getRealtimeSignal)
};

const getRealtimeSignal=(value,index)=>({
name:`SIGRT${index+1}`,
number:SIGRTMIN+index,
action:"terminate",
description:"Application-specific signal (realtime)",
standard:"posix"
});

const SIGRTMIN=34;
const SIGRTMAX=64;

const SIGNALS=[
{
name:"SIGHUP",
number:1,
action:"terminate",
description:"Terminal closed",
standard:"posix"
},
{
name:"SIGINT",
number:2,
action:"terminate",
description:"User interruption with CTRL-C",
standard:"ansi"
},
{
name:"SIGQUIT",
number:3,
action:"core",
description:"User interruption with CTRL-\\",
standard:"posix"
},
{
name:"SIGILL",
number:4,
action:"core",
description:"Invalid machine instruction",
standard:"ansi"
},
{
name:"SIGTRAP",
number:5,
action:"core",
description:"Debugger breakpoint",
standard:"posix"
},
{
name:"SIGABRT",
number:6,
action:"core",
description:"Aborted",
standard:"ansi"
},
{
name:"SIGIOT",
number:6,
action:"core",
description:"Aborted",
standard:"bsd"
},
{
name:"SIGBUS",
number:7,
action:"core",
description:
"Bus error due to misaligned, non-existing address or paging error",
standard:"bsd"
},
{
name:"SIGEMT",
number:7,
action:"terminate",
description:"Command should be emulated but is not implemented",
standard:"other"
},
{
name:"SIGFPE",
number:8,
action:"core",
description:"Floating point arithmetic error",
standard:"ansi"
},
{
name:"SIGKILL",
number:9,
action:"terminate",
description:"Forced termination",
standard:"posix",
forced:true
},
{
name:"SIGUSR1",
number:10,
action:"terminate",
description:"Application-specific signal",
standard:"posix"
},
{
name:"SIGSEGV",
number:11,
action:"core",
description:"Segmentation fault",
standard:"ansi"
},
{
name:"SIGUSR2",
number:12,
action:"terminate",
description:"Application-specific signal",
standard:"posix"
},
{
name:"SIGPIPE",
number:13,
action:"terminate",
description:"Broken pipe or socket",
standard:"posix"
},
{
name:"SIGALRM",
number:14,
action:"terminate",
description:"Timeout or timer",
standard:"posix"
},
{
name:"SIGTERM",
number:15,
action:"terminate",
description:"Termination",
standard:"ansi"
},
{
name:"SIGSTKFLT",
number:16,
action:"terminate",
description:"Stack is empty or overflowed",
standard:"other"
},
{
name:"SIGCHLD",
number:17,
action:"ignore",
description:"Child process terminated, paused or unpaused",
standard:"posix"
},
{
name:"SIGCLD",
number:17,
action:"ignore",
description:"Child process terminated, paused or unpaused",
standard:"other"
},
{
name:"SIGCONT",
number:18,
action:"unpause",
description:"Unpaused",
standard:"posix",
forced:true
},
{
name:"SIGSTOP",
number:19,
action:"pause",
description:"Paused",
standard:"posix",
forced:true
},
{
name:"SIGTSTP",
number:20,
action:"pause",
description:"Paused using CTRL-Z or \"suspend\"",
standard:"posix"
},
{
name:"SIGTTIN",
number:21,
action:"pause",
description:"Background process cannot read terminal input",
standard:"posix"
},
{
name:"SIGBREAK",
number:21,
action:"terminate",
description:"User interruption with CTRL-BREAK",
standard:"other"
},
{
name:"SIGTTOU",
number:22,
action:"pause",
description:"Background process cannot write to terminal output",
standard:"posix"
},
{
name:"SIGURG",
number:23,
action:"ignore",
description:"Socket received out-of-band data",
standard:"bsd"
},
{
name:"SIGXCPU",
number:24,
action:"core",
description:"Process timed out",
standard:"bsd"
},
{
name:"SIGXFSZ",
number:25,
action:"core",
description:"File too big",
standard:"bsd"
},
{
name:"SIGVTALRM",
number:26,
action:"terminate",
description:"Timeout or timer",
standard:"bsd"
},
{
name:"SIGPROF",
number:27,
action:"terminate",
description:"Timeout or timer",
standard:"bsd"
},
{
name:"SIGWINCH",
number:28,
action:"ignore",
description:"Terminal window size changed",
standard:"bsd"
},
{
name:"SIGIO",
number:29,
action:"terminate",
description:"I/O is available",
standard:"other"
},
{
name:"SIGPOLL",
number:29,
action:"terminate",
description:"Watched event",
standard:"other"
},
{
name:"SIGINFO",
number:29,
action:"ignore",
description:"Request for process information",
standard:"other"
},
{
name:"SIGPWR",
number:30,
action:"terminate",
description:"Device running out of power",
standard:"systemv"
},
{
name:"SIGSYS",
number:31,
action:"core",
description:"Invalid system call",
standard:"other"
},
{
name:"SIGUNUSED",
number:31,
action:"terminate",
description:"Invalid system call",
standard:"other"
}];

const getSignals=()=>{
const realtimeSignals=getRealtimeSignals();
const signals=[...SIGNALS,...realtimeSignals].map(normalizeSignal);
return signals
};







const normalizeSignal=({
name,
number:defaultNumber,
description,
action,
forced=false,
standard
})=>{
const{
signals:{[name]:constantSignal}
}=constants;
const supported=constantSignal!==undefined;
const number=supported?constantSignal:defaultNumber;
return {name,number,description,supported,action,forced,standard}
};

const getSignalsByName=()=>{
const signals=getSignals();
return Object.fromEntries(signals.map(getSignalByName))
};

const getSignalByName=({
name,
number,
description,
supported,
action,
forced,
standard
})=>[name,{name,number,description,supported,action,forced,standard}];

const signalsByName=getSignalsByName();




const getSignalsByNumber=()=>{
const signals=getSignals();
const length=SIGRTMAX+1;
const signalsA=Array.from({length},(value,number)=>
getSignalByNumber(number,signals)
);
return Object.assign({},...signalsA)
};

const getSignalByNumber=(number,signals)=>{
const signal=findSignalByNumber(number,signals);

if(signal===undefined){
return {}
}

const{name,description,supported,action,forced,standard}=signal;
return {
[number]:{
name,
number,
description,
supported,
action,
forced,
standard
}
}
};



const findSignalByNumber=(number,signals)=>{
const signal=signals.find(({name})=>constants.signals[name]===number);

if(signal!==undefined){
return signal
}

return signals.find((signalA)=>signalA.number===number)
};

getSignalsByNumber();

const getErrorPrefix = ({timedOut, timeout, errorCode, signal, signalDescription, exitCode, isCanceled}) => {
	if (timedOut) {
		return `timed out after ${timeout} milliseconds`;
	}

	if (isCanceled) {
		return 'was canceled';
	}

	if (errorCode !== undefined) {
		return `failed with ${errorCode}`;
	}

	if (signal !== undefined) {
		return `was killed with ${signal} (${signalDescription})`;
	}

	if (exitCode !== undefined) {
		return `failed with exit code ${exitCode}`;
	}

	return 'failed';
};

const makeError = ({
	stdout,
	stderr,
	all,
	error,
	signal,
	exitCode,
	command,
	escapedCommand,
	timedOut,
	isCanceled,
	killed,
	parsed: {options: {timeout, cwd = process$2.cwd()}},
}) => {
	// `signal` and `exitCode` emitted on `spawned.on('exit')` event can be `null`.
	// We normalize them to `undefined`
	exitCode = exitCode === null ? undefined : exitCode;
	signal = signal === null ? undefined : signal;
	const signalDescription = signal === undefined ? undefined : signalsByName[signal].description;

	const errorCode = error && error.code;

	const prefix = getErrorPrefix({timedOut, timeout, errorCode, signal, signalDescription, exitCode, isCanceled});
	const execaMessage = `Command ${prefix}: ${command}`;
	const isError = Object.prototype.toString.call(error) === '[object Error]';
	const shortMessage = isError ? `${execaMessage}\n${error.message}` : execaMessage;
	const message = [shortMessage, stderr, stdout].filter(Boolean).join('\n');

	if (isError) {
		error.originalMessage = error.message;
		error.message = message;
	} else {
		error = new Error(message);
	}

	error.shortMessage = shortMessage;
	error.command = command;
	error.escapedCommand = escapedCommand;
	error.exitCode = exitCode;
	error.signal = signal;
	error.signalDescription = signalDescription;
	error.stdout = stdout;
	error.stderr = stderr;
	error.cwd = cwd;

	if (all !== undefined) {
		error.all = all;
	}

	if ('bufferedData' in error) {
		delete error.bufferedData;
	}

	error.failed = true;
	error.timedOut = Boolean(timedOut);
	error.isCanceled = isCanceled;
	error.killed = killed && !timedOut;

	return error;
};

const aliases = ['stdin', 'stdout', 'stderr'];

const hasAlias = options => aliases.some(alias => options[alias] !== undefined);

const normalizeStdio = options => {
	if (!options) {
		return;
	}

	const {stdio} = options;

	if (stdio === undefined) {
		return aliases.map(alias => options[alias]);
	}

	if (hasAlias(options)) {
		throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${aliases.map(alias => `\`${alias}\``).join(', ')}`);
	}

	if (typeof stdio === 'string') {
		return stdio;
	}

	if (!Array.isArray(stdio)) {
		throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof stdio}\``);
	}

	const length = Math.max(stdio.length, aliases.length);
	return Array.from({length}, (value, index) => stdio[index]);
};

/**
 * This is not the set of all possible signals.
 *
 * It IS, however, the set of all signals that trigger
 * an exit on either Linux or BSD systems.  Linux is a
 * superset of the signal names supported on BSD, and
 * the unknown signals just fail to register, so we can
 * catch that easily enough.
 *
 * Windows signals are a different set, since there are
 * signals that terminate Windows processes, but don't
 * terminate (or don't even exist) on Posix systems.
 *
 * Don't bother with SIGKILL.  It's uncatchable, which
 * means that we can't fire any callbacks anyway.
 *
 * If a user does happen to register a handler on a non-
 * fatal signal like SIGWINCH or something, and then
 * exit, it'll end up firing `process.emit('exit')`, so
 * the handler will be fired anyway.
 *
 * SIGBUS, SIGFPE, SIGSEGV and SIGILL, when not raised
 * artificially, inherently leave the process in a
 * state from which it is not safe to try and enter JS
 * listeners.
 */
const signals = [];
signals.push('SIGHUP', 'SIGINT', 'SIGTERM');
if (process.platform !== 'win32') {
    signals.push('SIGALRM', 'SIGABRT', 'SIGVTALRM', 'SIGXCPU', 'SIGXFSZ', 'SIGUSR2', 'SIGTRAP', 'SIGSYS', 'SIGQUIT', 'SIGIOT'
    // should detect profiler and enable/disable accordingly.
    // see #21
    // 'SIGPROF'
    );
}
if (process.platform === 'linux') {
    signals.push('SIGIO', 'SIGPOLL', 'SIGPWR', 'SIGSTKFLT');
}

// Note: since nyc uses this module to output coverage, any lines
// that are in the direct sync flow of nyc's outputCoverage are
// ignored, since we can never get coverage for them.
// grab a reference to node's real process object right away
const processOk = (process) => !!process &&
    typeof process === 'object' &&
    typeof process.removeListener === 'function' &&
    typeof process.emit === 'function' &&
    typeof process.reallyExit === 'function' &&
    typeof process.listeners === 'function' &&
    typeof process.kill === 'function' &&
    typeof process.pid === 'number' &&
    typeof process.on === 'function';
const kExitEmitter = Symbol.for('signal-exit emitter');
const global$1 = globalThis;
const ObjectDefineProperty = Object.defineProperty.bind(Object);
// teeny special purpose ee
class Emitter {
    emitted = {
        afterExit: false,
        exit: false,
    };
    listeners = {
        afterExit: [],
        exit: [],
    };
    count = 0;
    id = Math.random();
    constructor() {
        if (global$1[kExitEmitter]) {
            return global$1[kExitEmitter];
        }
        ObjectDefineProperty(global$1, kExitEmitter, {
            value: this,
            writable: false,
            enumerable: false,
            configurable: false,
        });
    }
    on(ev, fn) {
        this.listeners[ev].push(fn);
    }
    removeListener(ev, fn) {
        const list = this.listeners[ev];
        const i = list.indexOf(fn);
        /* c8 ignore start */
        if (i === -1) {
            return;
        }
        /* c8 ignore stop */
        if (i === 0 && list.length === 1) {
            list.length = 0;
        }
        else {
            list.splice(i, 1);
        }
    }
    emit(ev, code, signal) {
        if (this.emitted[ev]) {
            return false;
        }
        this.emitted[ev] = true;
        let ret = false;
        for (const fn of this.listeners[ev]) {
            ret = fn(code, signal) === true || ret;
        }
        if (ev === 'exit') {
            ret = this.emit('afterExit', code, signal) || ret;
        }
        return ret;
    }
}
class SignalExitBase {
}
const signalExitWrap = (handler) => {
    return {
        onExit(cb, opts) {
            return handler.onExit(cb, opts);
        },
        load() {
            return handler.load();
        },
        unload() {
            return handler.unload();
        },
    };
};
class SignalExitFallback extends SignalExitBase {
    onExit() {
        return () => { };
    }
    load() { }
    unload() { }
}
class SignalExit extends SignalExitBase {
    // "SIGHUP" throws an `ENOSYS` error on Windows,
    // so use a supported signal instead
    /* c8 ignore start */
    #hupSig = process$1.platform === 'win32' ? 'SIGINT' : 'SIGHUP';
    /* c8 ignore stop */
    #emitter = new Emitter();
    #process;
    #originalProcessEmit;
    #originalProcessReallyExit;
    #sigListeners = {};
    #loaded = false;
    constructor(process) {
        super();
        this.#process = process;
        // { <signal>: <listener fn>, ... }
        this.#sigListeners = {};
        for (const sig of signals) {
            this.#sigListeners[sig] = () => {
                // If there are no other listeners, an exit is coming!
                // Simplest way: remove us and then re-send the signal.
                // We know that this will kill the process, so we can
                // safely emit now.
                const listeners = this.#process.listeners(sig);
                let { count } = this.#emitter;
                // This is a workaround for the fact that signal-exit v3 and signal
                // exit v4 are not aware of each other, and each will attempt to let
                // the other handle it, so neither of them do. To correct this, we
                // detect if we're the only handler *except* for previous versions
                // of signal-exit, and increment by the count of listeners it has
                // created.
                /* c8 ignore start */
                const p = process;
                if (typeof p.__signal_exit_emitter__ === 'object' &&
                    typeof p.__signal_exit_emitter__.count === 'number') {
                    count += p.__signal_exit_emitter__.count;
                }
                /* c8 ignore stop */
                if (listeners.length === count) {
                    this.unload();
                    const ret = this.#emitter.emit('exit', null, sig);
                    /* c8 ignore start */
                    const s = sig === 'SIGHUP' ? this.#hupSig : sig;
                    if (!ret)
                        process.kill(process.pid, s);
                    /* c8 ignore stop */
                }
            };
        }
        this.#originalProcessReallyExit = process.reallyExit;
        this.#originalProcessEmit = process.emit;
    }
    onExit(cb, opts) {
        /* c8 ignore start */
        if (!processOk(this.#process)) {
            return () => { };
        }
        /* c8 ignore stop */
        if (this.#loaded === false) {
            this.load();
        }
        const ev = opts?.alwaysLast ? 'afterExit' : 'exit';
        this.#emitter.on(ev, cb);
        return () => {
            this.#emitter.removeListener(ev, cb);
            if (this.#emitter.listeners['exit'].length === 0 &&
                this.#emitter.listeners['afterExit'].length === 0) {
                this.unload();
            }
        };
    }
    load() {
        if (this.#loaded) {
            return;
        }
        this.#loaded = true;
        // This is the number of onSignalExit's that are in play.
        // It's important so that we can count the correct number of
        // listeners on signals, and don't wait for the other one to
        // handle it instead of us.
        this.#emitter.count += 1;
        for (const sig of signals) {
            try {
                const fn = this.#sigListeners[sig];
                if (fn)
                    this.#process.on(sig, fn);
            }
            catch (_) { }
        }
        this.#process.emit = (ev, ...a) => {
            return this.#processEmit(ev, ...a);
        };
        this.#process.reallyExit = (code) => {
            return this.#processReallyExit(code);
        };
    }
    unload() {
        if (!this.#loaded) {
            return;
        }
        this.#loaded = false;
        signals.forEach(sig => {
            const listener = this.#sigListeners[sig];
            /* c8 ignore start */
            if (!listener) {
                throw new Error('Listener not defined for signal: ' + sig);
            }
            /* c8 ignore stop */
            try {
                this.#process.removeListener(sig, listener);
                /* c8 ignore start */
            }
            catch (_) { }
            /* c8 ignore stop */
        });
        this.#process.emit = this.#originalProcessEmit;
        this.#process.reallyExit = this.#originalProcessReallyExit;
        this.#emitter.count -= 1;
    }
    #processReallyExit(code) {
        /* c8 ignore start */
        if (!processOk(this.#process)) {
            return 0;
        }
        this.#process.exitCode = code || 0;
        /* c8 ignore stop */
        this.#emitter.emit('exit', this.#process.exitCode, null);
        return this.#originalProcessReallyExit.call(this.#process, this.#process.exitCode);
    }
    #processEmit(ev, ...args) {
        const og = this.#originalProcessEmit;
        if (ev === 'exit' && processOk(this.#process)) {
            if (typeof args[0] === 'number') {
                this.#process.exitCode = args[0];
                /* c8 ignore start */
            }
            /* c8 ignore start */
            const ret = og.call(this.#process, ev, ...args);
            /* c8 ignore start */
            this.#emitter.emit('exit', this.#process.exitCode, null);
            /* c8 ignore stop */
            return ret;
        }
        else {
            return og.call(this.#process, ev, ...args);
        }
    }
}
const process$1 = globalThis.process;
// wrap so that we call the method on the actual handler, without
// exporting it directly.
signalExitWrap(processOk(process$1) ? new SignalExit(process$1) : new SignalExitFallback());

function isStream(stream) {
	return stream !== null
		&& typeof stream === 'object'
		&& typeof stream.pipe === 'function';
}

new TextEncoder();

const validateInputOptions = input => {
	if (input !== undefined) {
		throw new TypeError('The `input` and `inputFile` options cannot be both set.');
	}
};

const getInputSync = ({input, inputFile}) => {
	if (typeof inputFile !== 'string') {
		return input;
	}

	validateInputOptions(input);
	return readFileSync(inputFile);
};

// `input` and `inputFile` option in sync mode
const handleInputSync = options => {
	const input = getInputSync(options);

	if (isStream(input)) {
		throw new TypeError('The `input` option cannot be a stream in sync mode');
	}

	return input;
};

// eslint-disable-next-line unicorn/prefer-top-level-await
const nativePromisePrototype = (async () => {})().constructor.prototype;

['then', 'catch', 'finally'].map(property => [
	property,
	Reflect.getOwnPropertyDescriptor(nativePromisePrototype, property),
]);

const normalizeArgs = (file, args = []) => {
	if (!Array.isArray(args)) {
		return [file];
	}

	return [file, ...args];
};

const NO_ESCAPE_REGEXP = /^[\w.-]+$/;

const escapeArg = arg => {
	if (typeof arg !== 'string' || NO_ESCAPE_REGEXP.test(arg)) {
		return arg;
	}

	return `"${arg.replaceAll('"', '\\"')}"`;
};

const joinCommand = (file, args) => normalizeArgs(file, args).join(' ');

const getEscapedCommand = (file, args) => normalizeArgs(file, args).map(arg => escapeArg(arg)).join(' ');

const verboseDefault = debuglog('execa').enabled;

const padField = (field, padding) => String(field).padStart(padding, '0');

const getTimestamp = () => {
	const date = new Date();
	return `${padField(date.getHours(), 2)}:${padField(date.getMinutes(), 2)}:${padField(date.getSeconds(), 2)}.${padField(date.getMilliseconds(), 3)}`;
};

const logCommand = (escapedCommand, {verbose}) => {
	if (!verbose) {
		return;
	}

	process$2.stderr.write(`[${getTimestamp()}] ${escapedCommand}\n`);
};

const DEFAULT_MAX_BUFFER = 1000 * 1000 * 100;

const getEnv = ({env: envOption, extendEnv, preferLocal, localDir, execPath}) => {
	const env = extendEnv ? {...process$2.env, ...envOption} : envOption;

	if (preferLocal) {
		return npmRunPathEnv({env, cwd: localDir, execPath});
	}

	return env;
};

const handleArguments = (file, args, options = {}) => {
	const parsed = crossSpawn._parse(file, args, options);
	file = parsed.command;
	args = parsed.args;
	options = parsed.options;

	options = {
		maxBuffer: DEFAULT_MAX_BUFFER,
		buffer: true,
		stripFinalNewline: true,
		extendEnv: true,
		preferLocal: false,
		localDir: options.cwd || process$2.cwd(),
		execPath: process$2.execPath,
		encoding: 'utf8',
		reject: true,
		cleanup: true,
		all: false,
		windowsHide: true,
		verbose: verboseDefault,
		...options,
	};

	options.env = getEnv(options);

	options.stdio = normalizeStdio(options);

	if (process$2.platform === 'win32' && path$4.basename(file, '.exe') === 'cmd') {
		// #116
		args.unshift('/q');
	}

	return {file, args, options, parsed};
};

const handleOutput = (options, value, error) => {
	if (typeof value !== 'string' && !Buffer$1.isBuffer(value)) {
		// When `execaSync()` errors, we normalize it to '' to mimic `execa()`
		return error === undefined ? undefined : '';
	}

	if (options.stripFinalNewline) {
		return stripFinalNewline(value);
	}

	return value;
};

function execaSync(file, args, options) {
	const parsed = handleArguments(file, args, options);
	const command = joinCommand(file, args);
	const escapedCommand = getEscapedCommand(file, args);
	logCommand(escapedCommand, parsed.options);

	const input = handleInputSync(parsed.options);

	let result;
	try {
		result = childProcess.spawnSync(parsed.file, parsed.args, {...parsed.options, input});
	} catch (error) {
		throw makeError({
			error,
			stdout: '',
			stderr: '',
			all: '',
			command,
			escapedCommand,
			parsed,
			timedOut: false,
			isCanceled: false,
			killed: false,
		});
	}

	const stdout = handleOutput(parsed.options, result.stdout, result.error);
	const stderr = handleOutput(parsed.options, result.stderr, result.error);

	if (result.error || result.status !== 0 || result.signal !== null) {
		const error = makeError({
			stdout,
			stderr,
			error: result.error,
			signal: result.signal,
			exitCode: result.status,
			command,
			escapedCommand,
			parsed,
			timedOut: result.error && result.error.code === 'ETIMEDOUT',
			isCanceled: false,
			killed: result.signal !== null,
		});

		if (!parsed.options.reject) {
			return error;
		}

		throw error;
	}

	return {
		command,
		escapedCommand,
		exitCode: 0,
		stdout,
		stderr,
		failed: false,
		timedOut: false,
		isCanceled: false,
		killed: false,
	};
}

class GitNotFoundError extends Error {
}
class FileNotTrackedError extends Error {
}
function getFileCommitDate(file, age = "oldest") {
  try {
    const { stdout } = execaSync("which", ["git"]);
    if (!stdout) {
      throw new GitNotFoundError(
        `Failed to retrieve git history for "${file}" because git is not installed.`
      );
    }
  } catch {
  }
  try {
    const { stdout } = execaSync("test", ["-f", file]);
    if (!stdout) {
      throw new Error(
        `Failed to retrieve git history for "${file}" because the file does not exist.`
      );
    }
  } catch {
  }
  const result = execaSync(
    "git",
    [
      "log",
      `--format=%ct`,
      "--max-count=1",
      ...age === "oldest" ? ["--follow", "--diff-filter=A"] : [],
      "--",
      path$4.basename(file)
    ],
    {
      cwd: path$4.dirname(file)
    }
  );
  if (result.exitCode !== 0) {
    throw new Error(
      `Failed to retrieve the git history for file "${file}" with exit code ${result.exitCode}: ${result.stderr}`
    );
  }
  let regex = /^(?<timestamp>\d+)$/;
  const output = result.stdout.trim();
  if (!output) {
    throw new FileNotTrackedError(
      `Failed to retrieve the git history for file "${file}" because the file is not tracked by git.`
    );
  }
  const match = output.match(regex);
  if (!match) {
    throw new Error(
      `Failed to retrieve the git history for file "${file}" with unexpected output: ${output}`
    );
  }
  const timestamp = Number(match.groups.timestamp);
  const date = new Date(timestamp * 1e3);
  return { date, timestamp };
}

function generateRouteData({
  props,
  url
}) {
  const { entry, locale } = props;
  const sidebar = getSidebar(url.pathname, locale);
  return {
    ...props,
    sidebar,
    hasSidebar: entry.data.template !== "splash",
    pagination: getPrevNextLinks(sidebar, config.pagination, entry.data),
    toc: getToC(props),
    lastUpdated: getLastUpdated(props),
    editUrl: getEditUrl(props)
  };
}
function getToC({ entry, locale, headings }) {
  const tocConfig = entry.data.template === "splash" ? false : entry.data.tableOfContents !== void 0 ? entry.data.tableOfContents : config.tableOfContents;
  if (!tocConfig)
    return;
  const t = useTranslations(locale);
  return {
    ...tocConfig,
    items: generateToC(headings, { ...tocConfig, title: t("tableOfContents.overview") })
  };
}
function getLastUpdated({ entry, id }) {
  if (entry.data.lastUpdated ?? config.lastUpdated) {
    const currentFilePath = fileURLToPath(new URL("src/content/docs/" + id, project.root));
    let date = typeof entry.data.lastUpdated !== "boolean" ? entry.data.lastUpdated : void 0;
    if (!date) {
      try {
        ({ date } = getFileCommitDate(currentFilePath, "newest"));
      } catch {
      }
    }
    return date;
  }
  return;
}
function getEditUrl({ entry, id, isFallback }) {
  const { editUrl } = entry.data;
  if (editUrl === false)
    return;
  let url;
  if (typeof editUrl === "string") {
    url = editUrl;
  } else if (config.editLink.baseUrl) {
    const srcPath = project.srcDir.replace(project.root, "");
    const filePath = isFallback ? localizedId(id, config.defaultLocale.locale) : id;
    url = ensureTrailingSlash(config.editLink.baseUrl) + srcPath + "content/docs/" + filePath;
  }
  return url ? new URL(url) : void 0;
}

const $$Astro = createAstro("https://allrdy.io");
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  const { lang = "en", dir = "ltr" } = config.defaultLocale || {};
  let locale = config.defaultLocale?.locale;
  if (locale === "root")
    locale = void 0;
  const entryMeta = { dir, lang, locale };
  const t = useTranslations(locale);
  const fallbackEntry = {
    slug: "404",
    id: "404.md",
    body: "",
    collection: "docs",
    data: {
      title: "404",
      template: "splash",
      editUrl: false,
      head: [],
      hero: { tagline: t("404.text"), actions: [] },
      pagefind: false,
      sidebar: { hidden: false }
    },
    render: async () => ({
      Content: Content,
      headings: [],
      remarkPluginFrontmatter: {}
    })
  };
  const userEntry = await getEntry("docs", "404");
  const entry = userEntry || fallbackEntry;
  const { Content: Content$1, headings } = await entry.render();
  const route = generateRouteData({
    props: { ...entryMeta, entryMeta, headings, entry, id: entry.id, slug: entry.slug },
    url: Astro2.url
  });
  return renderTemplate`${renderComponent($$result, "Page", $$Page, { ...route }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Content", Content$1, {})}` })}`;
}, "/Users/dubhe/d/site/node_modules/.pnpm/@astrojs+starlight@0.12.0_astro@3.5.1/node_modules/@astrojs/starlight/404.astro", void 0);

const $$file = "/Users/dubhe/d/site/node_modules/.pnpm/@astrojs+starlight@0.12.0_astro@3.5.1/node_modules/@astrojs/starlight/404.astro";
const $$url = undefined;

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Page as $, _404 as _, getDefaultExportFromCjs as a, getAugmentedNamespace as b, $$Image as c, $$Icon as d, generateRouteData as g, paths as p };
//# sourceMappingURL=chunk.272c92b3.js.map
