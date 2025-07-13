import type { DateTime, DurationLike, DurationUnit } from 'luxon';

import { nArray, range, sliceArray } from '@/_libs/tools/array';
import { compareData, hashData } from '@/_libs/tools/bcrypt';
import { getCookie, removeCookie, setCookie } from '@/_libs/tools/cookie';
import { cuid, uuid } from '@/_libs/tools/id';
import { parse, stringify } from '@/_libs/tools/json';
import { removeUndefined } from '@/_libs/tools/object';
import { commitSession, createSessionStorage, destroySession, getSession } from '@/_libs/tools/session';
import { add, diff, format, isAfter, isBefore, now, subtract, toRelative, toISO } from '@/_libs/tools/time';

export interface Tools {
  bcrypt: {
    hashData: typeof hashData;
    compareData: typeof compareData;
  };
  id: {
    cuid: typeof cuid;
    uuid: typeof uuid;
  };
  json: {
    stringify: typeof stringify;
    parse: typeof parse;
  };
  object: {
    removeUndefined: typeof removeUndefined;
  };
  array: {
    sliceArray: typeof sliceArray;
    nArray: typeof nArray;
    range: typeof range;
  };
  cookie: {
    set: typeof setCookie;
    get: typeof getCookie;
    remove: typeof removeCookie;
  };
  session: {
    createStorage: typeof createSessionStorage;
    get: typeof getSession;
    commit: typeof commitSession;
    destroy: typeof destroySession;
  };
  time: {
    now: typeof now;
    format: typeof format;
    add: typeof add;
    subtract: typeof subtract;
    diff: typeof diff;
    isBefore: typeof isBefore;
    isAfter: typeof isAfter;
    toRelative: typeof toRelative;
    toISO: typeof toISO;
  };
}

export const tools: Tools = {
  bcrypt: {
    hashData,
    compareData,
  },
  id: {
    cuid,
    uuid,
  },
  json: {
    stringify,
    parse,
  },
  object: {
    removeUndefined,
  },
  array: {
    sliceArray,
    nArray,
    range,
  },
  cookie: {
    set: setCookie,
    get: getCookie,
    remove: removeCookie,
  },
  session: {
    createStorage: createSessionStorage,
    get: getSession,
    commit: commitSession,
    destroy: destroySession,
  },
  time: {
    now,
    format,
    add,
    subtract,
    diff,
    isBefore,
    isAfter,
    toRelative,
    toISO,
  },
};

export type { DateTime, DurationLike, DurationUnit };
