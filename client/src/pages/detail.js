import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

// internal import
import { Header, Footer, Copyright } from "../component/";
import {
  DetailOne,
  DetailTwo,
  DetailThree,
  DetailFour,
  DetailFive,
  DetailSix,
  DetailSeven,
  detailEight,
} from "../component/Detail";
import { useStateContext } from "../context";

const Detail = () => {
  // state variable
  const [property, setProperty] = useState();
  const [parsedReviews, setParsedReviews] = useState();
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [updatePriceLoading, setUpdatePriceLoading] = useState(false);
  const [commentLoading, setCommentLoading] = useState(false);
  const [buyLoading, setBuyPriceLoading] = useState(false);

  const {
    address,
    contract,
    buyPropertytFunction,
    addReviewFunction,
    likeReviewFunction,
    getProductReviewsFunction,
    getPropertyFunction,
    getPropertiesData,
  } = useStateContext();
    // get url params query
    const router = useRouter();
    const { query } = router;
    // get property data
    const fetchProperty = async () =>
    {
        const data = await getPropertyFunction(query.property);
        const dataReviews = await getProductReviewsFunction(query.property);
        const dataProperties = await getPropertiesData();

        setProperties(dataProperties);
        setProperty(data);
        setParsedReviews(dataReviews);
        setIsLoading(false);
    };
    useEffect(() =>
    {
        if(contract) fetchProperty()
    },[address,contract]);

    // add review
    const [review, setReview] = useState({
        productID: "",
        rating: 4,
        comment:"",
    });

    const handleFormFieldChange = (fieldName, e) =>
    {
        setReview({ ...review, [fieldName]: e.target.value });    
    
    };

    const createReview = async () =>
    {
        setCommentLoading(true);
        const data = await addReviewFunction({ ...review, productID: property.productID });
        setCommentLoading(false);
    };

    // like review
    const [likeReview, setLikeReview] = useEffect({
        productID:"",
        reviewIndex:"",
    });
    const likeReviewCall = async () =>
    {
        const data = await likeReviewFunction({
            // ...likeReviews,
            productID: property.productID
        });
        window.location.reload();
    }

    // buy property
    const buying = {
        productID:property?.productID,
        amount:property?.price,
    };
    const buyingProperty = async()=>{
        setBuyPriceLoading(true);
        const data = await buyPropertytFunction(buying);
    }
    return <h1>srinivasan</h1>;
};

export default Detail; 
