const Dropzone = require('dropzone');

import { Component, ViewEncapsulation, OnInit, OnChanges, SimpleChanges, ElementRef, Input, Output, EventEmitter, HostBinding, Optional } from '@angular/core';

import { DropzoneConfig, DropzoneConfigInterface } from './dropzone.interfaces'

@Component({
  selector: 'dropzone',
  template: require('dropzone.component.html'),
  styles: [require('dropzone.component.scss'), require('dropzone/dist/min/dropzone.min.css')],
  encapsulation: ViewEncapsulation.None
})
export class DropzoneComponent implements OnInit, OnChanges {
  private dropzone: any;
  private dropzoneConfig: any;
  private dropzoneElement: any;

  @Input() config: DropzoneConfigInterface;

  @Input() placeholder: string = "Click or drop files to upload";

  @Output() uploadDone = new EventEmitter<any>();
  @Output() uploadError = new EventEmitter<Object>();

  @Input() public logging: boolean = false;
  @Input() public sending: Function = this.defaultCallback;
  @Input() public removedFile: Function = this.defaultCallback;
  @Input() public addedFile: Function = this.defaultCallback;
  @Input() public accept: Function = this.defaultCallback;
  @Input() public complete: Function = this.defaultCallback;
  @Input() public dragenter: Function = this.defaultCallback;
  @Input() public dragend: Function = this.defaultCallback;
  @Input() public drop: Function = this.defaultCallback;
  @Input() public showOriginalContainer: boolean = true;
  @Input() public queuecomplete: Function = this.defaultCallback;

  //@HostBinding('class.dropzone') useDropzoneClass = this.showOriginalContainer;

  constructor( private elementRef: ElementRef, @Optional() private defaults: DropzoneConfig ) {
    this.dropzoneConfig = new DropzoneConfig(defaults);

    this.dropzoneElement = elementRef.nativeElement;
  }

  ngOnInit() {
    Dropzone.autoDiscover = false;
    this.dropzone = new Dropzone(this.dropzoneElement, this.dropzoneConfig);
    Dropzone.autoDiscover = false;

    this.dropzone.on('error', (err) => {
      this.uploadError.emit({msg: "Upload error", error: err});

      setTimeout(() => {
        this.dropzone.removeAllFiles();
      }, 5000);
    });
    this.dropzone.accept = this.accept;

    this.dropzone.on('success', (res) => {
      this.uploadDone.emit(res);

      setTimeout(() => {
        this.dropzone.removeAllFiles();
      }, this.dropzoneConfig.previewDelay || 0);
    });

    this.dropzone.on('sending', this.sending);
    this.dropzone.on('removedfile', this.removedFile);
    this.dropzone.on('addedfile', this.addedFile);
    this.dropzone.on('complete', this.complete);
    this.dropzone.on('dragenter', this.dragenter);
    this.dropzone.on('dragend', this.dragend);
    this.dropzone.on('drop', this.drop);
    this.dropzone.on("queuecomplete", this.queuecomplete);
  }

  public getDropzoneInstances(): any {
    return this.dropzone.instances;
  }

  private defaultCallback(e) {
    if (this.logging) {
      console.log(e);
    }
  }

  public processFile(url, file): void {
    this.dropzone.url = url;
    this.dropzone.processFile(file);
  }

  public getDropzone() {
    return this.dropzone;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.dropzoneConfig.assign(this.defaults);

    this.dropzoneConfig.assign(this.config);
  }

  ngOnDestroy() {
    /* Cleanup unused dom elements from dropzone */
    document.querySelector(".dz-hidden-input").remove();
  }
}
