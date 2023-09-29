import { useParams } from "react-router-dom";

const CategoryDetailPage = () =>{
    let params = useParams();
    return (
        <>
        category: {params.slug}        
         </>

    )
}
export default CategoryDetailPage;