import {md5} from '../util/md5';

export const queryMap = {};

export const persistQuery = (operationText: string): Promise<string> => {
  return new Promise((resolve) => {
    const queryId = md5(operationText);
    queryMap[queryId] = operationText;
    resolve(queryId);
  });
};