//@flow
const md5 = (x: string): string => {
  return crypto
    .createHash('md5')
    .update(x, 'utf8')
    .digest('hex');
};

export default md5;