# nest

## SetMetadata

区分哪些接口需要登录，哪些接口不需要

添加一个 custom-decorator.ts 来放自定义的装饰器：

```js
import { SetMetadata } from "@nestjs/common";

export const  RequireLogin = () => SetMetadata('require-login', true);

```
