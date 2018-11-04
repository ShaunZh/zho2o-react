/**
 * @Author: Hexon
 * @Date: 2018/11/3 下午4:44
 * @Last Modified by: Hexon
 * @Last Modified time: 2018/11/3 下午4:44
 * @description:
 */

import { injectGlobal } from 'styled-components';
/* eslint no-unused-expressions: 0 */
injectGlobal`

  #app  {
    position: relative;
      min-height: 100%;
      min-width: 100%;
    > div {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      overflow-y: auto;
      overflow-x: hidden;
    }
  }
  
  .fs-15 {
    font-size: 15px;
  }
  .fs-12 {
    font-size: 12px;
  }
  
  .fs-14 {
    font-size: 14px;
  }
  
  .bg-999 {
    background-color: #999;
  }
  
  .fc-999 {
    color: #999;
  }
  
  .fc-333 {
    color: #333;
  }
`;
