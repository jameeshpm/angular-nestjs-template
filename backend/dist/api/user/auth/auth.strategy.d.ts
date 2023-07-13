import { ConfigService } from '@nestjs/config';
declare const JwtStrategy_base: any;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly helper;
    constructor(config: ConfigService);
    private validate;
}
export {};
