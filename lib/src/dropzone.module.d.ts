import { ModuleWithProviders, OpaqueToken } from "@angular/core";
import { DropzoneConfig, DropzoneConfigInterface } from './dropzone.interfaces';
export declare const DROPZONE_CONFIG: OpaqueToken;
export declare class DropzoneModule {
    constructor(parentModule: DropzoneModule);
    static forRoot(config: DropzoneConfigInterface): ModuleWithProviders;
}
export declare function provideDropzoneConfig(configInterface?: DropzoneConfigInterface): DropzoneConfig;
