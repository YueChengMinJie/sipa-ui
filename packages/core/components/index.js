/**
 * @Author: zhouxiajie86@gmail.com
 * @Date: 2023-08-15 14:53:45
 * @LastEditors: zhouxiajie86@gmail.com
 * @LastEditTime: 2023-09-25 10:45:01
 * @FilePath: /compoment-library-master/packages/core/components/index.js
 * @Description:
 */
import Button from './button';

export default (app) => {
  Button.install(app);
};

// eslint-disable-next-line import/export
export * from './button';
export { Button };
