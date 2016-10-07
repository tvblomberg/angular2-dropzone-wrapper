export interface DropzoneConfigInterface {
  server?: string,

  params?: any,
  headers?: any,

  maxFilesize?: number,
  previewDelay?: number,
  acceptedFiles?: string,
  uploadMultiple?: boolean,
  parallelUploads?: number,
  addRemoveLinks?: boolean,
  previewsContainer?: string,
  previewTemplate?: string,
  clickable?: string,
  autoProcessQueue?: boolean,
  autoDiscover?: boolean,
}

export class DropzoneConfig implements DropzoneConfigInterface {
  url: string;
  server: string;

  params: any;
  headers: any;

  maxFilesize: number;
  previewDelay: number;
  acceptedFiles: string;
  uploadMultiple: boolean = false;
  paralleluploads: number = 1;
  addRemoveLinks: boolean = false;
  previewsContainer: string;
  clickable: string;
  previewTemplate: string;
  autoProcessQueue: boolean = true;
  autoDiscover: boolean = false;

  constructor(config: DropzoneConfigInterface = {}) {
    this.assign(config);
  }

  public assign(config: DropzoneConfigInterface = {}) {
    for (var key in config) {
      this[key] = config[key];
    }

		this.url = this.server + (this.params ? ('?' + this.params) : '');
  }
}
