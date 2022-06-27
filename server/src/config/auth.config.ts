export default () => ({
  auth: {
    jwt: {
      secret: 'asrAdmin',
      expiration: '1h',
      expirationMilliseconds: 3600000,
    },
  },
});
