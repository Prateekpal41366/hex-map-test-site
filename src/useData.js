import { useState, useEffect } from 'react';
import { csv } from 'd3';

const csvUrl =
  'https://gist.githubusercontent.com/Prateekpal41366/40340925c25a0e66b2d8fa3bf0a4713e/raw/6b7ef0b63bb50a2657d57034e561b64ceff63798/test.csv';

export const useData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const row = (d) => {
      d.xvalue = +d.xvalue;
      d.yvalue = +d.yvalue;
      return d;
    };
    csv(csvUrl, row).then(setData);
  }, []);

  return data;
};
