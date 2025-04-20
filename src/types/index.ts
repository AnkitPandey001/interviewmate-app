import { FieldValue, Timestamp } from "firebase/firestore"

export interface User {
    id:string,
    name:string,
    email:string,
    imageUrl:string,
    createdAt:Timestamp | FieldValue,
    updateAt:Timestamp | FieldValue
}

export interface Interviews {
 id:string,
 position:string,
 desc:string,
 expe:number,
 userId:string,
 techStack:string,
 questions:{
    question:string,
    answer:string
 }[];
 createdAt:Timestamp ,
 updateAt:Timestamp
}


export interface UserAnswer {
    id: string;
    mockIdRef: string;
    question: string;
    correct_ans: string;
    user_ans: string;
    feedback: string;
    rating: number;
    userId: string;
    createdAt: Timestamp;
    updateAt: Timestamp;
  }