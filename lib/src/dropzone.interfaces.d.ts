export interface DropzoneConfigInterface {
    server?: string;
    params?: any;
    headers?: any;
    maxFilesize?: number;
    previewDelay?: number;
    acceptedFiles?: string;
    uploadMultiple?: boolean;
    parallelUploads?: number;
    addRemoveLinks?: boolean;
    previewsContainer?: string;
    previewTemplate?: string;
    clickable?: string;
    autoProcessQueue?: boolean;
    autoDiscover?: boolean;
}
export declare class DropzoneConfig implements DropzoneConfigInterface {
    url: string;
    server: string;
    params: any;
    headers: any;
    maxFilesize: number;
    previewDelay: number;
    acceptedFiles: string;
    uploadMultiple: boolean;
    paralleluploads: number;
    addRemoveLinks: boolean;
    previewsContainer: string;
    clickable: string;
    previewTemplate: string;
    autoProcessQueue: boolean;
    autoDiscover: boolean;
    constructor(config?: DropzoneConfigInterface);
    assign(config?: DropzoneConfigInterface): void;
}
