import { OnInit, OnChanges, SimpleChanges, ElementRef, EventEmitter } from '@angular/core';
import { DropzoneConfig, DropzoneConfigInterface } from './dropzone.interfaces';
export declare class DropzoneComponent implements OnInit, OnChanges {
    private elementRef;
    private defaults;
    private dropzone;
    private dropzoneConfig;
    private dropzoneElement;
    config: DropzoneConfigInterface;
    placeholder: string;
    uploadDone: EventEmitter<any>;
    uploadError: EventEmitter<Object>;
    logging: boolean;
    sending: Function;
    removedFile: Function;
    addedFile: Function;
    complete: Function;
    dragenter: Function;
    dragend: Function;
    drop: Function;
    renameFileName: Function;
    showOriginalContainer: boolean;
    useDropzoneClass: boolean;
    constructor(elementRef: ElementRef, defaults: DropzoneConfig);
    ngOnInit(): void;
    getFiles(): any;
    private defaultCallback(e);
    ngOnChanges(changes: SimpleChanges): void;
}
