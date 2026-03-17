import https from 'https';

const links = [
  'https://maps.app.goo.gl/HHW5HXv3FmABjf6V6',
  'https://maps.app.goo.gl/MdFMA9qcQrR6TEMA7',
  'https://maps.app.goo.gl/cUv8ePChJm9nuqJJA',
  'https://maps.app.goo.gl/tL8znhwRgr2vQjcUA',
  'https://maps.app.goo.gl/PVzpqnpy14SsyFdf6',
  'https://maps.app.goo.gl/5NpsqcpVgx9aNeFj7',
  'https://maps.app.goo.gl/j9eXafMJsAHSQR1x8',
  'https://maps.app.goo.gl/FdvY4iaowqJu1oam7',
  'https://maps.app.goo.gl/QJGZCwUtEabNm24r9',
  'https://maps.app.goo.gl/pozNVLNorN2gpFGr9',
  'https://maps.app.goo.gl/WRKfohpE28WmW9kw8',
  'https://maps.app.goo.gl/jhknL5ZPL1pMub1K8',
  'https://maps.app.goo.gl/6hmXXPKRdy3vHnoS8',
  'https://maps.app.goo.gl/R2cz7vu13XZ5rZyY9',
  'https://maps.app.goo.gl/kRbMrVAnNGFgy2BU9',
  'https://maps.app.goo.gl/TPto9cm5hV4WC6er6',
  'https://maps.app.goo.gl/MMdQY38SxhPjDHEN6',
  'https://maps.app.goo.gl/iYtEUe9E8nKTANev9',
  'https://maps.app.goo.gl/gWmvcCkV181tdXED8',
  'https://maps.app.goo.gl/dJyVSZmZMwBJXx9PA',
  'https://maps.app.goo.gl/iMZWNGTYmukf1mzR7',
  'https://maps.app.goo.gl/i2yfp8hndaWy6evc8',
  'https://maps.app.goo.gl/qg536NExbRkZ2yrH9',
  'https://maps.app.goo.gl/it9Hmhydjh2kGNjNA',
  'https://maps.app.goo.gl/6HiC1u5rSHk9nUm26',
  'https://maps.app.goo.gl/FVCRmjsGYL4hVFHE6',
  'https://maps.app.goo.gl/NNUd1qoZ33Thju4e7',
  'https://maps.app.goo.gl/kS6R7P6rndmRoTsY9',
  'https://maps.app.goo.gl/btKGMC9yvGHNRKLY6',
  'https://maps.app.goo.gl/TnU8LE5GpPYHJ5NC8',
  'https://maps.app.goo.gl/H8wpxzECddWWiXYy5',
  'https://maps.app.goo.gl/XGqEE4YmVZW5R8PU6',
  'https://maps.app.goo.gl/nk184K674mPKGVf46'
];

async function getRedirect(url: string): Promise<string> {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        resolve(res.headers.location);
      } else {
        resolve(url);
      }
    }).on('error', () => resolve(url));
  });
}

async function run() {
  for (const link of links) {
    const redirect = await getRedirect(link);
    console.log(link, '->', decodeURIComponent(redirect));
  }
}
run();
