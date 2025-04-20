import { FormMockInterviews } from "@/components/form-mock";
// import { db } from "@/config/firebase.config";
// import { Interviews } from "@/types";
// import { doc, getDoc } from "firebase/firestore";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom"


export const CreateEditPages = () =>{

    // const {interviewsId} = useParams<{interviewsId:string}>();
    // const [interview,setInterview] = useState<Interviews | null>(null)
   
    // useEffect(()=>{
    //    const fetchData = async () =>{
    //        if(interviewsId){
    //         try {
    //         const interviewDoc = await getDoc(doc(db,"interviews",interviewsId))
    //         if(interviewDoc.exists()){
    //             setInterview({...interviewDoc.data} as Interviews)
    //         }
    //         } catch (error) {
    //          console.log(error)
    //         }
    //        }
    //    }

    //    fetchData();
    // },[interviewsId])
   
    return(
        <div className=" my-4 flex-col w-full">
            <FormMockInterviews/>
        </div>
    )
}
