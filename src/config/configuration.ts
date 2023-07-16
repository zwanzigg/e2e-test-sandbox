import * as process from "process";

export default () => ({
  prod_host: process.env.PROD_HOST,
});
