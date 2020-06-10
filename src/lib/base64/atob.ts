export function atob(toDecodeString: string) {
  const buff = Buffer.from(toDecodeString, 'base64');
  return buff.toString('utf8');
}
