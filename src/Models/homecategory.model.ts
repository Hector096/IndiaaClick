export class WrapperCatagory{
    status:number;
    success:boolean;
    message: string;
    category:Category[];
 }
 
 
 export class Category {
  id:number;
  name:string;
  image:string;
  is_active:number;
  updated_at:string;
  created_at:string;
 }
 