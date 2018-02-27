import md5 from '../util/md5';

const persistQuery = (operationText: string): Promise<string> => {
  return new Promise(resolve => resolve(md5(operationText)));
};

module.exports = persistQuery;