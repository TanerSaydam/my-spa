export interface ComponentOptions{
    template?: string;
    templateUrl?: string;
}

export function Component(options: ComponentOptions) {
    return function (constructor: any) {
      constructor.prototype.template = options.template;
      constructor.prototype.templateUrl = options.templateUrl;
    };
  }