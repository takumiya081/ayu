export function btoa(toEncodeString: string) {
  const buff = Buffer.from(toEncodeString, 'utf8');
  return buff.toString('base64');
}
