import { IconType } from "react-icons";

export interface ISProject
{
    id:number,
    name:string,
    description:string,
    image_path:string,
    github_url:string,
    category:Category[],
    key_techs:string[]
}

export interface IsService{
    id:number,
    title:String,
    about:String,
    Icon:IconType
}

export interface IsSkill{
    Sicon:IconType,
    des:String,
    color:String
    id:number,
}

export type Category= "react"|'javascript'|'express';