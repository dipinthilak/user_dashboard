export class UserEntity {
  public readonly email?: string;
  public password?: string;
  public confirmPassword?: string;

  constructor(obj:any){
    Object.assign(this,obj)
  }
  }
  


  export class WidgetEntity {
    public readonly email?: string;
    public widgetState?: {
      w1: boolean;
      w2: boolean;
      w3: boolean;
    };
  
    constructor(obj: any) {
      Object.assign(this, obj);
    }
  }
    